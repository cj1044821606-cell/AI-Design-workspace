# AI Design Workspace

一个面向重复性平面物料的 AI 排版工作台。

它不是传统平面设计软件的网页版替代品，而是一个围绕模板、素材库和 AI 对话协作建立的生产系统。设计师负责定义模板和审美边界，AI 负责在规则内新增、修改、同步和校对内容，程序本身主要负责预览、定位、微调和 PDF 导出。

## 适用物料

- `画册 / Catalog`
- `Datasheet`
- `折页 / Brochure`

当前仓库的主生产重心是 `画册`。

## 系统核心能力

- 基于固定模板生成和修改平面设计页面
- 多版本画册管理：全球版、乌兹英语版、乌兹俄语版等
- 小地图快速定位 spread
- `ProductImageEditor` 产品图拖拽、缩放、位置保存
- 高质量 / 低质量 PDF 导出
- AI 审校标注系统：红点标注、忽略、确认修正、checkpoint
- PDF 设计解析工具：从 PDF 提取元素、坐标、图片、分组信息，供 AI 复刻设计

## 项目定位

一句话理解：

`这是一个“AI 主导排版，设计师负责模板定义与最终把关”的平面设计生产系统。`

这个系统最适合：

- 重复性高
- 页面结构稳定
- 多语言、多地区、多版本复用频繁
- 需要印刷交付或继续进 Illustrator 精修

这个系统不适合：

- 完全自由发挥的创意网页设计
- 实时多人协同排版
- 依赖复杂响应式布局的产品页面

## 当前代码结构

仓库中同时存在两套结构：

### 1. 旧结构

页面正文直接写在 `CatalogSpread*.tsx / CatalogSpreadUZ*.tsx / catalog-ru/CatalogSpreadUZ*.tsx` 中。

适合：

- 现有生产版快速修页
- 毫米级微调
- 尚未迁移到新结构的物料

### 2. 新结构

在 `src/` 下新增了数据驱动底座：

- `catalog-data/`
- `catalog-layouts/`
- `catalog-editions/`
- `catalog-render/`
- `catalog-operations/`

目标是把“产品内容、模板排版、版本装配、单页特例”拆层，方便 AI 稳定修改、批量联动和回退。

## 当前进度

### 已完成

- 主仓库可构建、可运行
- 全球版、乌兹英语版、乌兹俄语版、全球版副本项目已接入工作台
- 小地图、预览、产品图微调、导出可用
- 一批画册页面、目录、排序、版本过滤已做过生产修订
- V2 审校系统已落地到主仓库
- PDF 设计解析工具已增强，支持：
  - `paintOrder / zIndex`
  - 更精确文本定位
  - 字体信息拆分
  - clip/crop 信息
  - group/block 分组

### 进行中

- 主仓库仍以旧结构生产为主
- 新结构底座已搭起，但还没有完全接管全部物料
- datasheet / 折页 尚未完整迁移到新结构
- 目录、小地图、版本差异自动派生还在逐步推进

### 待继续推进

- 完成主仓库产品页向新结构迁移
- 做更稳定的版本继承和回退机制
- 完善 AI 操作层，而不是让 AI 直接改 spread 正文
- 为 PDF 解析工具补 overlay 可视化与模板感知分组

## 快速启动

### 依赖

- Node.js
- npm

### 安装

```bash
npm install
```

### 启动开发环境

```bash
npm run dev
```

默认会启动前端与本地服务，常见地址：

- `http://localhost:3000`

### 构建

```bash
npm run build
```

## 重要文件

新接手的设计师或 AI，建议优先阅读：

- [AGENTS.md](./AGENTS.md)
- [ARCHITECTURE.md](./ARCHITECTURE.md)
- [DATASHEET_TEMPLATE_RULES.md](./DATASHEET_TEMPLATE_RULES.md)
- [设计备忘录.md](./设计备忘录.md)

如果要处理 PDF 复刻工作流，再看：

- [tools/pdf-design-parser/README.md](./tools/pdf-design-parser/README.md)

## Git 协作说明

这个项目已经接入 Git 远端，可以在其他电脑拉取后继续工作。

基本流程：

```bash
git pull
# 修改项目
git add .
git commit -m "说明本次修改"
git push
```

在另一台电脑上：

```bash
git clone <repo-url>
cd AI-Design-workspace
npm install
npm run dev
```

## 重要提醒

- 这是印刷优先系统，不是普通网页项目
- 布局主单位用 `mm`
- 不要破坏 `ProductImageEditor`
- 不要在乱码文本上继续修改，先确认编码问题
- 下架产品优先做版本过滤，不直接删源文件

## 后续建议

如果要继续完善这个系统，推荐优先级：

1. 修复并统一主说明文档
2. 推进产品页到新结构
3. 让目录、小地图完全从 assembly 自动派生
4. 提升 AI 审校与回退能力
5. 完善 PDF 解析工具和复刻工作流
