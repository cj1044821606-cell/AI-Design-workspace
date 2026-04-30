# PDF Design Parser

这个工具用于把 AI 导出的 PDF 设计稿拆解成**可复刻的结构化报告**，方便后续 AI 按照报告在本项目里高保真重建页面。

它当前已经能做三件核心事：

1. 读取每一页的尺寸，统一转换成 `mm`
2. 提取页面中的 `text / image / rect / path`
3. 导出 PDF 内嵌图片，并生成完整的 `report.json`

当前版本还额外补充了几类对 AI 复刻更有价值的信息：

- 每个元素的 `paintOrder / zIndex`
- 文本的 `baseline`、旋转角度和原始 `pt` 坐标
- 字体拆分后的 `fontFamily / fontPostScriptName / fontWeight / fontStyle`
- 颜色的 `nativeColorMode`
- 图形状态层级、透明度、混合模式

这不是一个“把 PDF 转回 AI 源文件”的工具。  
它的目标是：

`把 PDF 设计结果转成“AI 可读、可定位、可复刻”的结构化设计报告。`

---

## 1. 适用场景

适合：

- 从 AI 导出的 PDF 中提取页面元素位置和内容
- 根据 PDF 反向复刻 `datasheet`、画册单页、折页
- 提取 PDF 中可复用的产品图、Logo、背景图等素材
- 为 AI 提供“元素坐标 + 字体 + 颜色 + 图片路径”的重建输入

不适合：

- 直接恢复 Adobe Illustrator / InDesign 源文件
- 精准恢复所有复杂裁剪蒙版、混合模式、滤镜语义
- 把复杂矢量重新变成可编辑 SVG 源文件

---

## 2. 工具位置

工具源码位于：

- [index.ts](./index.ts)
- [parse-page.ts](./parse-page.ts)
- [extract-images.ts](./extract-images.ts)
- [graphics-state.ts](./graphics-state.ts)
- [coord.ts](./coord.ts)
- [types.ts](./types.ts)

这是一个基于项目现有依赖运行的 `tsx` CLI 工具，不需要单独的子项目或单独的 `package.json`。

---

## 3. 依赖基础

这个工具依赖项目根目录已经安装好的这些包：

- `pdfjs-dist`
- `tsx`
- `@napi-rs/canvas`

图片导出和整页渲染都依赖现有环境。

如果你已经能正常运行本项目，一般也就能运行这个工具。

---

## 4. 如何运行

在项目根目录执行：

```powershell
npx.cmd tsx tools/pdf-design-parser/index.ts -i "C:\path\to\design.pdf"
```

推荐带输出目录：

```powershell
npx.cmd tsx tools/pdf-design-parser/index.ts `
  -i "C:\path\to\design.pdf" `
  -o "E:\AITEMP\pdf-parser-output"
```

如果还要输出整页高 DPI 预览图：

```powershell
npx.cmd tsx tools/pdf-design-parser/index.ts `
  -i "C:\path\to\design.pdf" `
  -o "E:\AITEMP\pdf-parser-output" `
  --render-pages `
  --scale 4
```

### 参数说明

- `-i, --input`
  - 必填，输入 PDF 路径

- `-o, --output`
  - 可选，输出目录
  - 不传时会自动生成 `output/pdf-parse-时间戳`

- `--render-pages`
  - 可选，额外渲染整页 PNG
  - 适合人工复核或复杂区域截图兜底

- `--scale`
  - 可选，整页 PNG 的渲染倍数
  - 默认 `4`
  - 值越大，预览 PNG 越清晰，体积也越大

- `--min-rect-mm`
  - 可选，忽略小于该尺寸的矩形
  - 默认 `1`
  - 用于过滤大量视觉噪点

---

## 5. 输出内容

输出目录通常包含：

```text
output/
  report.json
  images/
    img_p1_001.png
    img_p1_002.png
    page_1_full_4x.png
    page_2_full_4x.png
```

### 5.1 `report.json`

这是核心结构化报告，包含：

- 源 PDF 名称
- 生成时间
- 每一页尺寸
- 每一页元素清单
- 导出素材信息

### 5.2 `images/`

这里会放两类图片：

- **嵌入式图片素材**
  - 例如产品图、背景图、Logo
  - 文件名类似：`img_p1_001.png`

- **整页渲染图**
  - 仅当使用 `--render-pages`
  - 文件名类似：`page_1_full_4x.png`

---

## 6. `report.json` 结构

顶层结构：

```json
{
  "source": "IHY-12KL1C(Gray).pdf",
  "createdAt": "2026-04-17T03:33:29.479Z",
  "pages": [],
  "extractedAssets": {}
}
```

### `pages[]`

每页至少包含：

```json
{
  "pageNumber": 1,
  "width_mm": 210,
  "height_mm": 297,
  "elements": []
}
```

### `elements[]`

当前支持四种元素：

- `text`
- `image`
- `rect`
- `path`

#### `text`

```json
{
  "type": "text",
  "id": "text_p1_001",
  "paintOrder": 44,
  "zIndex": 44,
  "graphicsStackDepth": 0,
  "opacity": 1,
  "fillOpacity": 1,
  "strokeOpacity": 1,
  "blendMode": "normal",
  "content": "Product Features",
  "x_mm": 20.9,
  "y_mm": 188.44,
  "width_mm": 93.35,
  "height_mm": 14.79,
  "x_pt": 59.24,
  "y_pt": 534.1,
  "width_pt": 264.61,
  "height_pt": 41.92,
  "baseline_x_mm": 20.9,
  "baseline_y_mm": 201.61,
  "baseline_x_pt": 59.24,
  "baseline_y_pt": 571.46,
  "rotation_deg": 0,
  "transform": [31.621, 0, 0, 31.621, 59.24, 571.46],
  "font": "MiSans-Medium",
  "fontFamily": "MiSans",
  "fontPostScriptName": "MiSans-Medium",
  "fontWeight": 500,
  "fontStyle": "normal",
  "fontSize_pt": 31.62,
  "color": "#ED1651",
  "nativeColorMode": "RGB",
  "fillColor": "#ED1651",
  "strokeColor": null,
  "direction": "ltr"
}
```

#### `image`

```json
{
  "type": "image",
  "id": "img_p1_001",
  "paintOrder": 37,
  "zIndex": 37,
  "graphicsStackDepth": 2,
  "opacity": 1,
  "fillOpacity": 1,
  "strokeOpacity": 1,
  "blendMode": "normal",
  "assetPath": "images/img_p1_001.png",
  "x_mm": 6.18,
  "y_mm": 191.53,
  "display_width_mm": 89.88,
  "display_height_mm": 10.24,
  "original_px": [1339, 121]
}
```

#### `rect`

```json
{
  "type": "rect",
  "id": "rect_p1_001",
  "paintOrder": 3,
  "zIndex": 3,
  "graphicsStackDepth": 0,
  "opacity": 1,
  "fillOpacity": 1,
  "strokeOpacity": 1,
  "blendMode": "normal",
  "x_mm": 0,
  "y_mm": 0,
  "width_mm": 210,
  "height_mm": 297,
  "fillColor": "#ffffff",
  "fillColorMode": "RGB",
  "strokeColor": null,
  "strokeColorMode": "Unknown",
  "strokeWidth_mm": 0
}
```

#### `path`

```json
{
  "type": "path",
  "id": "path_p1_002",
  "paintOrder": 18,
  "zIndex": 18,
  "graphicsStackDepth": 2,
  "opacity": 1,
  "fillOpacity": 1,
  "strokeOpacity": 1,
  "blendMode": "normal",
  "d": "M 210.18 133.15 C ... Z",
  "boundingBox": {
    "x_mm": 0,
    "y_mm": 57.24,
    "width_mm": 210.18,
    "height_mm": 154.98
  },
  "fillColor": "#ffffff",
  "fillColorMode": "RGB",
  "strokeColor": null,
  "strokeColorMode": "Unknown",
  "strokeWidth_mm": 0
}
```

### `extractedAssets`

记录导出素材的原始信息，例如：

```json
{
  "images/img_p1_001.png": {
    "originalSize": [1339, 121],
    "format": "RGBA_PNG",
    "source": "embedded_xobject"
  },
  "images/page_1_full_4x.png": {
    "originalSize": [2380, 3368],
    "format": "RGBA_PNG",
    "source": "rasterized_region",
    "renderScale": 4
  }
}
```

---

## 7. 坐标与单位规则

工具输出时已经做了统一转换：

- 页面原点：**左上角**
- 单位：**毫米 (`mm`)**
- 字号：**点 (`pt`)**

这非常适合直接喂给本项目的模板系统，因为本项目的大布局本来就要求优先使用 `mm`。

---

## 8. 它现在能提取到什么

### 已经比较稳定的部分

- 页面尺寸
- 文本内容
- 文本位置
- 文本 baseline 与旋转角度
- 字体名称
- 字体家族、字重、字形推断
- 字号
- 文本颜色
- 原生颜色模式
- 元素绘制顺序
- 图片位置和显示尺寸
- 嵌入图片导出
- 简单矩形色块
- 复杂路径的 SVG 风格 `d` 路径和 bounding box

### 需要理解它的边界

- 路径很多时候只能作为“复刻参考”，不是可直接拿来当业务组件
- 复杂裁剪、混合模式、透明度叠加，不保证完全恢复设计语义
- 复杂矢量图不等于 SVG 源文件恢复
- 某些 PDF 的图片可能会超出页面边界，这通常是正常出血，不是错误

---

## 9. 怎么喂给 AI 用

这是最重要的一节。

这个工具不是给人手工照着抄的，主要是给 AI 做“设计复刻输入”。

### 推荐工作流

1. 先运行工具，得到：
   - `report.json`
   - `images/`

2. 把这些内容提供给 AI：
   - 目标页面类型
   - `report.json`
   - 相关导出素材路径
   - 当前项目的模板规范

3. 明确告诉 AI：
   - 是要“完全复刻”
   - 还是“基于模板吸收内容”

### 推荐提示词写法

```text
请根据 tools/pdf-design-parser 导出的 report.json 和 images/，
在当前项目中复刻该 PDF 页面。

要求：
1. 页面尺寸必须保持一致
2. 优先复用本项目现有模板
3. 如果是画册产品页，优先套 CatalogSpread13 或 CatalogSpread35 结构
4. 不要自由发挥布局
5. 用 report.json 中的 mm 坐标、字体、颜色和素材路径做定位参考
6. 需要保留 ProductImageEditor
7. 如果无法 1:1 还原复杂路径，优先用导出的整页/局部图片做兜底
```

### AI 最适合怎么使用报告

#### 场景 1：复刻 datasheet

最适合。  
因为 datasheet 的结构通常比较直接，文字、表格、图片和图标都能很好映射。

#### 场景 2：复刻画册单页

适合。  
尤其适用于：

- 产品页
- 章节页
- 封面 / 简单引导页

但要先判断是否应优先套本项目已有模板，而不是机械逐元素重画。

#### 场景 3：复刻折页

也适合。  
特别是三折页、双页 brochure，这种页面尺寸和元素布局报告会很有帮助。

---

## 10. 给 AI 的使用原则

其他 AI agent 使用这份报告时，应该遵守：

1. **先判断物料类型**
   - 画册
   - datasheet
   - 折页

2. **先判断是否已有模板**
   - 如果已有模板，优先在模板内复刻
   - 不要把所有元素机械转成绝对定位碎片

3. **把 `report.json` 当作结构化参考，不是唯一真理**
   - 复杂路径和特殊视觉效果需要人工判断

4. **优先复用导出的图片素材**
   - 不要重新截图原 PDF

5. **如果本项目已有排版规则，优先服从项目规则**
   - 特别是画册产品页、PV 页、目录页

---

## 11. 当前版本和桌面 `report.md` 的关系

如果你看到过某种更“人类可读”的报告，比如：

- `PDF Reconstruction Report`
- `Reconstruction Guidance`
- 分组说明
- `Preview / Overlay preview`

那属于更高层的报告包装结果。

**当前仓库里实际落盘并可稳定运行的是：**

- `report.json`
- `images/`
- 可选整页渲染图

也就是说，当前工具是**结构化底层解析器**，已经足够给 AI 做复刻输入；但它还不是完整的“人类说明型 PDF 设计报告生成器”。

---

## 12. 一个完整示例

```powershell
npx.cmd tsx tools/pdf-design-parser/index.ts `
  -i "C:\Users\Administrator.SZESCAOJUN6571.000\Downloads\IHY-12KL1C(Gray).pdf" `
  -o "E:\AITEMP\pdf-parser-test" `
  --render-pages `
  --scale 2
```

运行成功后，控制台会看到类似：

```text
Pages: 2
Creator: Adobe Illustrator 27.2 (Windows)

── Page 1 ──
Dimensions: 210 × 297 mm
Elements: 203 total
text: 25 | image: 6 | rect: 148 | path: 24
```

输出会写到：

- [E:\AITEMP\pdf-parser-test\report.json](e:/AITEMP/pdf-parser-test/report.json)
- [E:\AITEMP\pdf-parser-test\images](e:/AITEMP/pdf-parser-test/images)

---

## 13. 推荐后续扩展

如果后面要继续强化这个工具，最值得补的是：

1. `report.md` 生成器
   - 生成更适合人看的复刻说明

2. 分组能力
   - 自动把元素聚成标题区、表格区、图片区

3. overlay 预览图
   - 在整页 PNG 上标出元素 bbox

4. 面向本项目的直接适配输出
   - 例如直接输出适合 `CatalogSpread13` 的结构化字段

---

## 14. 一句话结论

这个工具现在最适合被这样使用：

`先把 PDF 拆成 report.json + images，再让 AI 按项目模板规范去高保真复刻页面。`
