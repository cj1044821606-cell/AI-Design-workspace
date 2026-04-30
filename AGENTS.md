# AI Agent 使用说明

这份文档是本项目给 AI agent 的主说明。新接手的 AI 默认先读这一份，再按任务类型补读 `ARCHITECTURE.md`、`DATASHEET_TEMPLATE_RULES.md`。

## 1. 系统定位

这个系统不是传统平面设计软件的网页版替代品，也不是通用低代码排版器。

它的定位是：

- 面向重复性平面物料的 AI 排版工作台
- 主要物料包括：`datasheet`、`画册`、`折页/宣传册`
- 核心工作方式是：设计师先定义模板和视觉边界，AI 再通过对话修改内容、调用素材、调整绝对坐标和变量
- 程序本身主要负责：预览、小地图定位、产品图微调、版本管理、PDF 导出

一句话理解：

`这是一个“AI 主导排版，设计师做模板定义和最终把关”的平面设计生产系统。`

## 2. AI 的职责边界

AI 在这里的主要职责：

- 理解用户的编辑意图
- 在既定模板内新增或修改页面
- 调用项目素材库中的真实素材
- 保持多个版本之间的内容和顺序一致
- 在不破坏版式规范的前提下做有限适配

AI 不应该做的事：

- 把页面当普通网页自由发挥
- 发明全新布局替代既有模板
- 随意改动已经微调好的产品图参数
- 用占位图、网络图标、临时文字替代正式内容
- 直接删除旧页面源文件来实现“下架”

## 3. 先读哪些文件

处理画册任务时，默认阅读顺序如下：

1. `AGENTS.md`
2. `ARCHITECTURE.md`
3. `src/components/CatalogSpread13.tsx` 或当前确认的产品页基准模板
4. `src/components/ProductImageEditor.tsx`
5. 涉及 `datasheet` 时再读 `DATASHEET_TEMPLATE_RULES.md`

如果在架构重建版中工作，还要读：

1. `src/catalog-data/types.ts`
2. `src/catalog-editions/catalogAssemblies.ts`
3. `src/components/catalog-shared/CatalogBoundProductPage.tsx`
4. `src/catalog-data/productPageContent.tsx`

## 4. 画册的模板体系

当前画册应按“用途”而不是按文件名理解。AI 应先判断页面类型，再选模板。

### 4.1 画册共有 7 类核心模板

1. `封面模板`
   - 代表页：`CatalogSpread01.tsx`
   - 用途：整本画册封面，通常包含主视觉、Logo、版本信息、二维码、网址

2. `前言/品牌引导模板`
   - 代表页：`CatalogSpread02.tsx`
   - 用途：品牌介绍、总标题、导语、视觉氛围铺垫

3. `总目录模板`
   - 代表页：`CatalogSpread03.tsx`
   - 用途：整本目录导航
   - 规则：目录顺序必须跟实际装配顺序一致；多型号同页统一写成 `A & B`

4. `系统介绍模板`
   - 代表页：`CatalogSpread04.tsx`
   - 用途：系统拓扑、整体方案说明、能源流示意

5. `章节首页模板`
   - 代表页：`CatalogSpread05.tsx`、`CatalogSpread16.tsx`、`CatalogSpread24.tsx`、`CatalogSpread30.tsx`、`CatalogSpread34.tsx`
   - 用途：分隔章节，如 `Inverter`、`Battery`、`All-in-One`、`C&I ESS`、`PV Modules`

6. `标准产品页模板`
   - 代表基准：`CatalogSpread13.tsx`
   - 用途：逆变器、电池、一体机、C&I ESS 等大多数产品页
   - 结构：左页是背景图、产品图、功率徽标、`Product Features`；右页是参数表

7. `PV 产品页模板`
   - 代表基准：`CatalogSpread35.tsx`
   - 用途：光伏组件产品页
   - 结构：左页是大标题、副标题、徽标、特性；右页是四列表格和组件图示

### 4.2 何时用哪种模板

- 新增普通逆变器、电池、一体机、储能产品页：优先用 `标准产品页模板`
- 新增光伏组件页：必须用 `PV 产品页模板`
- 新增目录或章节入口：不要复制产品页，改用目录页或章节首页模板
- 新增 datasheet：不要套画册产品页，改走 datasheet 模板

## 5. 画册的强制规范

### 5.1 基础排版规则

- 页面总尺寸固定为 `w-[420mm] h-[297mm]`
- 所有大尺寸、定位、间距优先使用 `mm`
- 字号通常使用 `pt`
- 禁止把页面当成响应式网页来写
- 禁止大面积依赖 `%`、`vw`、`vh`、`rem`、`px` 做主布局

### 5.2 标准产品页规则

- 新增标准产品页时，优先以 `CatalogSpread13.tsx` 为基准
- 保留完整 DOM 结构，包括 `design-group-wrapper` 和 `design-group-label`
- 只优先替换：
  - 文案
  - 背景图路径
  - 产品图路径
  - 参数表数据
  - 必要的局部排版参数

固定样式要求：

- `Product Features` 标题：`text-[31.621pt] font-medium`，字体 `MiSans`
- 特性标题：`text-[12pt] font-medium`，字体 `MiSans`
- 特性正文：`text-[8pt] font-normal`，字体 `MiSans`
- 表格行高：`h-[4.551mm]`
- 表格边框：`border-[0.368pt] border-white`

### 5.3 PV 产品页规则

- 新增 PV 页时，优先以 `CatalogSpread35.tsx` 为基准
- 顶部红线、大标题、副标题、徽标、特性块、右侧表格结构必须继承模板
- 不要参考 PDF 原始设计，只提取内容
- 如果出现 `STC / NMOT / BNPI` 等多列参数，优先沿用模板表格样式扩列

### 5.4 动态适配规则

当 `Product Features` 变长时，按这个顺序处理：

1. 先缩 `gap-y`
2. 再收紧正文 `leading`
3. 必要时适度加宽特性区
4. 最后才考虑整体轻微上移

尽量不要先改整个模块的起点，如 `top-[211mm]`，除非已经明显出界。

### 5.5 ProductImageEditor 规则

`ProductImageEditor` 是高优先级保护对象。

必须遵守：

- 不要删除它
- 不要换成普通 `<img>`
- 不要覆盖 `initialX`、`initialY`、`initialScale`
- 不要删掉后面的标记注释：
  - `/* IMAGE_TRANSFORM_X */`
  - `/* IMAGE_TRANSFORM_Y */`
  - `/* IMAGE_TRANSFORM_SCALE */`

原因：

- 这些值是设计师在 UI 中辛苦调好的
- 保存接口依赖这些标记把位置回写到代码

## 6. 当前系统有两套代码组织方式

### 6.1 旧结构：spread 正文直接写在页面组件里

典型特征：

- 文件名像 `CatalogSpread13.tsx`、`CatalogSpreadUZ39.tsx`
- 页面正文、素材路径、表格、features 都直接写在组件里
- 新增内容常用“克隆-替换”方式

适用场景：

- 紧急修现有生产版页面
- 局部毫米级微调
- 尚未迁入新架构的旧物料

### 6.2 新结构：主数据 + layout profile + edition assembly + render

典型目录：

- `src/catalog-data/`
- `src/catalog-layouts/`
- `src/catalog-editions/`
- `src/catalog-render/`

职责分工：

- `catalog-data`：产品主数据、语言内容、资源路径、集中产品页正文
- `catalog-layouts`：模板 profile 与共享布局参数
- `catalog-editions`：全球版、乌兹英语版、乌兹俄语版的装配、顺序、显隐和 override
- `catalog-render`：把 `productId + lang + layoutProfile + spreadId` 解析成最终页面

优先原则：

- 新增内容优先走新结构
- 旧 spread 文件保留作回退和视觉壳
- 目录、小地图、版本过滤应尽量从 assembly 自动派生

## 7. 新增内容时怎么新增

### 7.1 在旧结构中新增画册产品页

1. 先确定页面类型是 `标准产品页` 还是 `PV 产品页`
2. 从对应基准模板复制
3. 只替换：
   - 文案
   - 素材路径
   - 表格数据
4. 保留：
   - 所有设计 wrapper
   - `ProductImageEditor`
   - 已有 transform 标记
5. 同步修改：
   - 第 3 面总目录
   - 对应章节首页目录
   - 项目装配顺序
   - 小地图显示顺序

### 7.2 在新结构中新增画册产品页

优先流程：

1. 在 `catalog-data` 中补产品主数据或语言数据
2. 在 `catalog-data/productPageContent.tsx` 中补该产品对应语言的正文内容
3. 在 `catalog-editions/catalogAssemblies.ts` 中把新 `spread` 插入正确位置
4. 如果需要局部排版差异，用 `spread override` 或 `layoutOverrides`
5. 如果页面仍需单独壳文件，壳文件只绑定：
   - `editionId`
   - `spreadId`
   - `componentName`
   - `layoutOverrides`

不要在新结构里重新把整份正文散回每个 spread 文件。

## 8. 修改内容时要注意什么

### 8.1 改产品内容

先判断你改的是哪一层：

- 改“产品事实”或多语言文案：改 `catalog-data`
- 改一类页面通用排版：改 `layout profile`
- 改某个版本的页面顺序或显隐：改 `edition assembly`
- 改单页微调：改 `spread override`

### 8.2 改目录

优先原则：

- 如果目录已接新结构，应从 assembly 自动派生，不要手写维护
- 如果目录还在旧结构里，修改顺序时必须同时核对：
  - 页面实际顺序
  - 章节目录
  - 总目录
  - 多型号连接符是否统一为 ` & `

### 8.3 改产品图

- 优先通过 UI 微调
- 如果必须改代码，只改包装参数，不破坏保存链路
- 不要把产品图容器位置和内容位置混在一起改

## 9. 导出与印刷注意事项

这是一个印刷优先系统，不是普通网页截图器。

要注意：

- 避免大面积 `drop-shadow`、`filter`、`backdrop-blur`
- 尽量不要依赖透明渐变
- 字体必须走项目已有字体系统
- 导出前优先在工作台里逐页目视检查

高质量导出目标：

- 给浏览器打印或后续 Adobe Illustrator 使用

低质量导出目标：

- 快速预览、传阅、压缩版 PDF

## 10. 我们合作中反复验证过的经验

- 目录是最容易漏改的，顺序变化后必须联动检查总目录、章节目录和装配
- 俄语和长文本很容易把 `features` 顶出下边界，优先压内部间距，不要先乱改模块起点
- 两个型号在同一页时，目录写法统一为 `A & B`
- 下架产品不要删源文件，优先做“软下架”或版本过滤
- 全球版应尽量保留最全产品线，地区版从它继承并裁剪
- 小地图不是装饰，它必须和当前项目的真实装配结果一致
- 如果一个 spread 文件只是 `export { default } from ...` 的转发壳，改内容时要追到真实源文件

## 11. AI 的最小工作流程

1. 判断当前任务属于 `画册`、`datasheet` 还是 `折页`
2. 判断自己工作在 `旧结构` 还是 `新结构`
3. 找到基准模板或共享壳
4. 找到对应素材
5. 修改主数据或页面内容
6. 同步目录、装配、小地图
7. 检查产品图 transform 是否保留
8. 运行预览
9. 自查有无出界、重叠、顺序错误
10. 最后导出或交付给设计师复核

## 12. 简短结论

对 AI 来说，这个系统最重要的不是“会不会写 React”，而是：

- 会不会遵守固定模板
- 会不会分清数据层、模板层、版本层、实例层
- 会不会在多版本之间保持一致
- 会不会在不破坏设计师微调成果的前提下完成修改

如果不确定，优先保守地继承模板和结构，不要自创。

## 12.5 编码与读写标准

这一节是强制规则。  
后续 AI 在修改任何源码、配置、文案、注释前，必须先遵守这一节。

### 12.5.1 统一编码标准

- 所有源码与文档文件统一使用 `UTF-8`
- 默认行尾统一使用 `LF`
- 不允许把 `ts/tsx/js/jsx/json/md/css/html/svg` 以 `GBK / ANSI / Windows-1251 / 自动猜测编码` 方式保存
- 图片、字体等二进制资源不得通过文本工具重写

### 12.5.2 AI 修改文件时的强制要求

- 看到中文、俄语、特殊符号时，不要假设终端显示就是文件真实内容
- 如果终端输出疑似乱码，优先判断是“显示乱码”还是“文件已损坏”，不要直接在乱码文本上继续改写
- 改 `import` 路径时，必须优先参考项目内真实存在的素材路径，不允许凭乱码字符串猜路径
- 改 `design-group-label`、注释、表格字段、单位符号时，必须尽量使用项目内已验证的正常写法
- 如果某个文件已经出现编码污染，优先基于同页正常版本或同模板正常文件修复，不要继续复制污染文本

### 12.5.3 工具使用约束

- 对源码文件做批量替换时，必须确保读写都显式按 `UTF-8` 处理
- 如果工具链对非 ASCII 文本显示不稳定，优先使用更稳定的 UTF-8 读取方式核对真实内容
- 不要因为终端显示成乱码，就把正常中文/俄文重新写成问号或拼音式乱码
- 对 `tsx` 文件进行脚本写回后，必须重新检查是否破坏了 JSX 结构，尤其是：
  - `import`
  - `design-group-label`
  - `</div>`
  - `</p>`
  - `ProductImageEditor`

### 12.5.4 出现乱码时的优先排查顺序

1. 先确认是否只是终端显示乱码
2. 再确认文件本身是否已被错误编码保存
3. 再确认 `import` 路径是否被污染
4. 最后确认脚本替换是否破坏了 JSX 结构

### 12.5.5 一句话规则

`后续 AI 一律按 UTF-8 + LF 读写源码；如果看到乱码，先判断编码问题，再修改内容。`

## 13. V2 审校标注系统使用说明

这一节是补充给后续 AI agent 的新说明。  
如果任务包含“全文检查”“找拼写错误”“找参数名问题”“找格式错误”“生成错误卡片”“给出可直接应用的修正建议”，必须先读这一节。

### 13.1 这套功能的定位

这不是普通的“错误列表导出器”，而是一套：

- AI 生成结构化审校结果
- 程序把错误标到页面上
- 设计师直接在预览里忽略或确认修正
- 系统永久写回并保存检查点

的审校闭环。

AI 在这里的职责，不是写一份好看的报告，而是生产一份**程序可执行的修正卡片数据**。

### 13.2 AI 审校输出协议

AI 审校后必须输出一个结构化 JSON 块，推荐写在 markdown fenced code block 中：

```json
{
  "schema": "catalog_audit_report_v1",
  "auditId": "audit_20260414_catalog_uz_fullcheck",
  "materialType": "catalog",
  "projectType": "CatalogProjectUZ",
  "range": {
    "scope": "project",
    "description": "乌兹英语版整本画册全文审校"
  },
  "issues": []
}
```

程序只认：

- `schema = "catalog_audit_report_v1"`

自由文本总结可以有，但不会参与页面红点标注。

### 13.3 issue 必填字段

每个 issue 至少要有：

- `issueId`
- `issueType`
- `severity`
- `message`
- `why`
- `location`
- `currentValue`
- `candidates`
- `recommendedCandidateId`
- `ignoreSignature`

允许的 `issueType`：

- `spelling`
- `format`
- `parameter_name_mismatch`
- `parameter_value_mismatch`
- `unit_mismatch`
- `terminology_inconsistent`
- `table_structure_warning`

### 13.4 location 怎么写

`location` 必须尽量同时提供：

- 语义定位
- 视觉定位

推荐格式：

```json
{
  "editionId": "uz-en",
  "projectType": "CatalogProjectUZ",
  "spreadId": "UZ14E",
  "componentName": "CatalogSpreadUZ14E",
  "sourceLayer": "legacy-spread",
  "sourcePath": "src/components/CatalogSpreadUZ14E.tsx",
  "anchorLabel": "参数表格",
  "textQuery": "Lable",
  "occurrenceIndex": 0,
  "areaType": "table"
}
```

`sourceLayer` 允许值：

- `catalog-data`
- `catalog-layouts`
- `catalog-editions`
- `legacy-spread`

规则：

- 已迁入新结构的内容，优先指向 `catalog-data / catalog-layouts / catalog-editions`
- 旧结构页面、datasheet、折页，优先指向真实 spread 或组件文件，使用 `legacy-spread`
- `textQuery` 要尽量短且唯一
- `occurrenceIndex` 从 `0` 开始
- `anchorLabel` 优先使用页面已有的设计组标签或区域名

### 13.5 candidates 怎么写

每个问题可以给多个候选修复方案。

例如：

```json
{
  "issueId": "issue_001",
  "issueType": "spelling",
  "severity": "medium",
  "message": "参数名拼写错误",
  "why": "“Lable” 不是正确英文参数名，应为 “Label”",
  "currentValue": "Lable",
  "candidates": [
    {
      "candidateId": "fix_1",
      "label": "改为 Label",
      "value": "Label",
      "explanation": "与项目内其他参数表字段名一致"
    },
    {
      "candidateId": "fix_2",
      "label": "改为 Product Label",
      "value": "Product Label",
      "explanation": "仅在上下文需要更明确字段名时使用"
    }
  ],
  "recommendedCandidateId": "fix_1",
  "ignoreSignature": "spelling:lable->label:table-field"
}
```

规则：

- `candidateId` 必须唯一
- `label` 给设计师看
- `value` 是最终写回的真实文本
- `recommendedCandidateId` 必须指向已有候选项

### 13.6 ignoreSignature 的写法

`忽略` 是跨所有项目生效的，所以 `ignoreSignature` 必须写成“规则签名”，而不是某个 issue 的编号。

推荐组成：

- `issueType`
- 归一化后的错误写法
- 归一化后的目标模式
- 字段类别

例如：

- `spelling:lable->label:table-field`
- `format:a&b->a & b:catalog-label`
- `unit:kw->kW:parameter-unit`

### 13.7 哪些问题适合自动应用

优先适合：

- 拼写错误
- 参数名错误
- 单位格式错误
- 多型号连接符格式错误
- 同术语写法不一致

暂时不适合直接自动应用：

- 需要重排版的大段改写
- 需要业务判断的复杂参数冲突
- 一改就会破坏表格结构的问题

### 13.8 旧结构与新结构的区别

在新结构里：

- 问题应优先落到 `catalog-data / catalog-layouts / catalog-editions`
- 这样确认修正后更稳定

在旧结构里：

- 首版仍允许自动应用
- 但程序用的是“唯一文本匹配替换”
- 如果同一错误文本在同一文件里出现多次，程序会阻止自动应用

所以 AI 在旧结构物料上做审校时，要特别注意：

- `currentValue` 不要过长
- `currentValue` 也不要是高频短词
- 最好结合 `sourcePath + textQuery + occurrenceIndex`

### 13.9 程序里的使用流程

工作台顶部现在有：

- `导入审校`

页面里会出现：

- 低可视度红点
- 悬停展开详情卡
- `忽略`
- `√ 确认更改`

动作含义：

- `忽略`
  - 把 `ignoreSignature` 写入全局忽略规则
  - 以后同类问题不再提示
- `√ 确认更改`
  - 先自动创建 checkpoint
  - 再把候选值永久写回真实源文件
  - 刷新和重启后仍保留

### 13.10 给其他 AI 的最小工作流程

做审校任务时，按这个顺序：

1. 先确定审校范围
2. 逐条找问题
3. 给每个问题生成单独 issue
4. 检查 `sourcePath / currentValue / textQuery / recommendedCandidateId`
5. 再输出完整 `catalog_audit_report_v1`

不要：

- 只输出自然语言错误列表
- 把多个错误合并成一个 issue
- 在没有定位信息的情况下猜测写回位置
- 对复杂问题给出只有一个模糊候选

### 13.11 一句话提醒

做这类任务时，不要把自己当“提建议的校对助手”，而要把自己当“给程序生产可执行修正卡片的审校 agent”。
