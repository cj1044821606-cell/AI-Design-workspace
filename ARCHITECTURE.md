# 系统架构说明

这份文档讲代码结构和系统分层，不重复讲设计规范。设计规范请看 `AGENTS.md`。

---

## 1. 系统总体结构

这个系统可以分成 5 层理解：

1. `AI 对话层`
   - 接收设计师意图
   - 判断是改内容、改排版、改顺序还是改版本

2. `预览与工作台层`
   - 把页面渲染出来
   - 提供预览、小地图、缩放、产品图微调、导出

3. `模板与装配层`
   - 定义每种物料的页面结构、章节关系、版本差异

4. `数据与素材层`
   - 存产品主数据、语言文案、参数表、素材路径、版本引用关系

5. `审校操作层`
   - 承接 AI 审校结果导入、页面错误标注、忽略规则、自动写回、checkpoint

---

## 2. 当前有两套实现方式

### 2.1 旧结构

特征：

- 页面正文直接写在 `CatalogSpreadXX.tsx`
- 每页自己保存文案、素材路径、表格
- 新增产品页通常是复制基准模板后替换

适合：

- 修现有生产版
- 局部毫米级调整
- 尚未迁移的旧物料

### 2.2 V1 新结构

核心目录：

- `src/catalog-data/`
- `src/catalog-layouts/`
- `src/catalog-editions/`
- `src/catalog-render/`

职责：

- `catalog-data`
  - 产品主数据
  - 语言内容
  - 产品页正文集中定义

- `catalog-layouts`
  - 模板 profile
  - 共享排版参数

- `catalog-editions`
  - 全球版、乌兹英语版、乌兹俄语版的装配、顺序、显隐和 override

- `catalog-render`
  - 查询
  - 渲染映射
  - 项目注册

---

## 3. V1 的核心原则

V1 的目标不是把旧 spread 全删掉，而是把“内容来源”和“页面壳”拆开。

目标结构：

- `产品主数据`
- `语言内容`
- `layout profile`
- `edition assembly`
- `spread override`

这样 AI 修改时可以先判断：

- 改产品内容：动 `catalog-data`
- 改通用排版：动 `catalog-layouts`
- 改版本顺序或显隐：动 `catalog-editions`
- 改单页特例：动 `override`

---

## 4. 工作台相关模块

- `src/App.tsx`
  - 项目库、模板库、工作台、导出入口、审校入口

- `src/components/CatalogMinimap.tsx`
  - 左侧小地图
  - 对画册项目读取真实装配顺序

- `src/components/ProductImageEditor.tsx`
  - 产品图拖拽、缩放、位置保存

- `server.ts`
  - 本地开发服务
  - `save-image-transform`
  - 低质量 PDF 导出
  - 审校结果持久化与修正写回接口

---

## 5. 产品页在 V1 里的组织方式

产品页在新结构里应尽量变成“薄绑定层”。

推荐思路：

- spread 文件只保留：
  - `editionId`
  - `spreadId`
  - `componentName`
  - `layoutOverrides`
  - `initialX / initialY / initialScale`

- 页面正文集中到：
  - `catalog-data/productPageContent.tsx`

- 共享渲染壳负责：
  - 读 `productId`
  - 读语言内容
  - 读 layout profile
  - 应用 override

---

## 6. 为什么这样设计

直接好处：

- 一个产品内容改了，多版本可以联动
- 一类页面排版改了，同模板页面可以联动
- 目录和小地图能从 assembly 自动派生
- AI 不必在几十个 spread 文件里重复改同一件事

---

## 7. 回退策略

旧 spread 不应直接删除。

推荐做法：

- 旧页面保留作视觉对照和回退来源
- 下架产品走版本过滤，不删源文件
- 微调数据保留 `ProductImageEditor` 的回写标记，直到保存链路完全迁移

---

## 8. 给 AI 的一句架构建议

处理任务时，先判断“这次要改的是内容、排版、版本还是单页特例”，再决定改哪一层，不要一上来就改 spread 正文。

---

## 9. V2 审校操作层

在 V1 的基础上，系统现在新增了一层：

- `catalog-operations`

它的职责不是渲染页面，而是承接：

- AI 审校结果导入
- 审校问题索引
- 忽略规则管理
- 审校修正写回
- checkpoint 记录

### 9.1 相关目录

- `src/catalog-operations/`
  - `audit-types.ts`
  - `audit-session.ts`
  - `audit-registry.ts`
  - `audit-client.ts`

- `src/components/audit/`
  - `AuditImportModal.tsx`
  - `AuditOverlayLayer.tsx`

- `data/audit/`
  - `issues.json`
  - `ignore-rules.json`
  - `checkpoints.json`

### 9.2 作用

这层的核心价值是把：

- AI 找错
- 设计师确认
- 程序永久写回

变成一个完整闭环，而不是停留在“输出一份错误列表”。

### 9.3 前后端职责

前端：

- 读取审校会话
- 过滤当前项目和当前版本的可见 issue
- 在页面顶层渲染红点标注
- 响应忽略和确认更改

后端：

- 接收并保存 `catalog_audit_report_v1`
- 保存全局忽略规则
- 创建 checkpoint
- 执行真实文件写回

### 9.4 写回原则

写回时按 `sourceLayer` 分层：

- `catalog-data`
- `catalog-layouts`
- `catalog-editions`
- `legacy-spread`

新结构内容优先按数据层写回。  
旧结构内容当前先走“唯一文本匹配替换”，用于：

- 画册旧 spread
- datasheet
- 折页

### 9.5 为什么这层重要

这层本质上是把系统从：

- “AI 帮忙找问题”

推进到：

- “AI 产出可执行修正卡片，设计师在预览中直接处理，系统负责安全写回和留痕”

它也是后续做更完整 AI 操作层、作用域控制和回退 UI 的基础。
