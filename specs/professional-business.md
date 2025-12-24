# Professional Business UI 设计规范

## 📋 基本信息

- **名称**: Professional Business（专业商务）
- **版本**: 1.0.0
- **适用场景**: 企业应用、金融产品、政府平台、法律服务、咨询公司
- **设计理念**: 建立信任，传递权威，展现专业
- **关键词**: 稳重、权威、可信赖、精英、成功

---

## 🎨 色彩系统

### 品牌色
```
主色调 Primary（深蓝色系）
- 默认: #1e3a5f (深海军蓝)
- 悬停: #16304f (更深蓝)
- 激活: #0f2540 (最深蓝)

辅助色 Secondary（明亮蓝）
- 默认: #2563eb (皇家蓝)
- 悬停: #1d4ed8 (深皇家蓝)
- 激活: #1e40af (最深皇家蓝)
```

### 强调色（金属色系）
```
金色 Gold（主要强调）
- 标准: #d4af37 (古典金)
- 浅金: #f0e68c (香槟金)
- 用途: 高级会员、重要按钮、成功状态

银色 Silver
- 标准: #c0c0c0 (标准银)
- 用途: 次要强调、标准会员

铜色 Bronze
- 标准: #cd7f32 (古铜)
- 用途: 基础会员、第三级别
```

### 中性色（冷色调）
```
白色系
- 纯白: #ffffff
- 灰白: #f8fafc

灰色系（冷灰）
- gray-50:  #f8fafc (背景)
- gray-100: #f1f5f9 (卡片背景)
- gray-200: #e2e8f0 (边框)
- gray-300: #cbd5e1 (禁用边框)
- gray-400: #94a3b8 (占位符)
- gray-500: #64748b (次要文字)
- gray-600: #475569 (正文)
- gray-700: #334155 (标题)
- gray-800: #1e293b (重要标题)
- gray-900: #0f172a (最深文字)

纯黑: #020617
```

### 语义色
```
成功 Success: #059669 (深绿)
警告 Warning: #d97706 (琥珀)
错误 Error:   #dc2626 (深红)
信息 Info:    #0284c7 (深蓝)
```

### 渐变（保守使用）
```
主渐变 Primary
linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)

深色渐变 Dark
linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)

金色渐变 Gold（用于重要元素）
linear-gradient(135deg, #d4af37 0%, #f0e68c 100%)
```

---

## ✏️ 字体排版

### 字体家族
```
衬线字体（标题、品牌）
font-family: 'Georgia', 'Times New Roman', serif;
- 特点：经典、权威、传统

无衬线字体（正文、界面）
font-family: 'SF Pro Display', -apple-system, 'Segoe UI', sans-serif;
- 特点：现代、清晰、专业

等宽字体（数字、代码）
font-family: 'SF Mono', 'Consolas', monospace;
```

### 字号系统（克制精准）
```
xs:   12px - 辅助说明、版权信息
sm:   14px - 次要内容、表单标签
base: 16px - 正文、按钮
lg:   18px - 小标题
xl:   20px - 标题
2xl:  24px - 页面标题
3xl:  32px - 大标题
4xl:  40px - 特大标题
5xl:  48px - 品牌标题（少用）
```

### 字重
```
light:     300 - 大标题（优雅）
regular:   400 - 正文
medium:    500 - 稍强调
semibold:  600 - 强调
bold:      700 - 标题
extrabold: 800 - 特殊强调
```

### 行高
```
紧凑 tight:   1.2 - 标题
标准 base:    1.5 - 正文
宽松 relaxed: 1.75 - 长文本
```

### 字间距
```
紧密 tight:  -0.02em - 大标题
标准 normal: 0 - 正文
宽松 wide:   0.02em - 小号大写
更宽 wider:  0.04em - 强调大写
```

---

## 📐 间距系统

### 基础单位
```
基数: 4px
```

### 间距规模（严格对齐）
```
spacing-1:  4px
spacing-2:  8px
spacing-3:  12px
spacing-4:  16px
spacing-5:  20px
spacing-6:  24px
spacing-8:  32px
spacing-10: 40px
spacing-12: 48px
spacing-16: 64px
spacing-20: 80px
```

### 使用原则
- 组件内边距：使用 spacing-3 到 spacing-4（紧凑）
- 组件间距：使用 spacing-4 到 spacing-6
- 板块间距：使用 spacing-8 到 spacing-16
- 强调层次感和结构性

---

## 🔲 圆角系统（最小化）

```
none: 0px   - 可以使用（表格、工具栏）
sm:   2px   - 小组件（标签、徽章）
base: 4px   - 常规组件（按钮、输入框）
md:   6px   - 卡片
lg:   8px   - 大卡片
xl:   12px  - 模态框（最大值）
```

### 圆角原则
- 保持最小化，体现严谨
- 大部分场景使用 4px 或更小
- 避免过于圆润的设计

---

## 🌑 阴影系统（精细分层）

```
none: none - 平面元素
xs:   0 1px 2px 0 rgba(0, 0, 0, 0.05)      - 微弱
sm:   0 2px 4px 0 rgba(0, 0, 0, 0.08)      - 轻微
base: 0 4px 8px 0 rgba(0, 0, 0, 0.1)       - 标准
md:   0 8px 16px 0 rgba(0, 0, 0, 0.12)     - 中等
lg:   0 12px 24px 0 rgba(0, 0, 0, 0.15)    - 较大
xl:   0 16px 32px 0 rgba(0, 0, 0, 0.2)     - 特大
```

### 阴影原则
- 使用灰色阴影，不带色彩
- 层次分明，体现深度
- 谨慎使用，避免过度

---

## 🎭 动画效果（简洁专业）

### 时长
```
快速 fast: 150ms - 悬停、小交互
标准 base: 250ms - 常规过渡
缓慢 slow: 350ms - 页面切换
```

### 缓动函数
```
标准 standard:   cubic-bezier(0.4, 0, 0.2, 1)
减速 decelerate: cubic-bezier(0, 0, 0.2, 1)
加速 accelerate: cubic-bezier(0.4, 0, 1, 1)
```

### 动画原则
- 避免花哨的动画
- 只使用必要的过渡
- 位移不超过 2px
- 缩放不超过 1.01

---

## 🧩 组件规范

### 按钮 Button

#### 主按钮 Primary（金色强调）
```css
背景: linear-gradient(135deg, #d4af37 0%, #f0e68c 100%)
文字色: #0f172a (深灰)
内边距: 12px 24px
圆角: 4px
字号: 16px
字重: 600 (semibold)
文本转换: uppercase (大写)
字间距: 0.04em (wider)
阴影: 0 2px 4px 0 rgba(0, 0, 0, 0.08)

悬停状态 Hover
- 位移: translateY(-1px)
- 阴影: 0 4px 8px 0 rgba(0, 0, 0, 0.12)
- 背景变亮

激活状态 Active
- 位移: translateY(0)
- 阴影: 0 1px 2px 0 rgba(0, 0, 0, 0.05)

禁用状态 Disabled
- 背景: #cbd5e1
- 文字: #64748b
- 透明度: 1 (不使用透明度)
```

#### 次要按钮 Secondary
```css
背景: transparent
边框: 2px solid #1e3a5f
文字色: #1e3a5f
其他规格同主按钮
```

### 输入框 Input

```css
背景色: #f8fafc
边框: 2px solid #e2e8f0
内边距: 12px 16px
圆角: 4px
字号: 16px

悬停状态 Hover
- 背景: #ffffff
- 边框色: #cbd5e1

聚焦状态 Focus
- 背景: #ffffff
- 边框色: #d4af37 (金色)
- 阴影: 0 0 0 3px rgba(212, 175, 55, 0.1)

错误状态 Error
- 边框色: #dc2626
- 背景: rgba(220, 38, 38, 0.02)

占位符 Placeholder
- 颜色: #94a3b8
```

### 卡片 Card

```css
背景色: #ffffff
边框: 1px solid #e2e8f0
圆角: 6px
内边距: 24px
阴影: 0 2px 4px 0 rgba(0, 0, 0, 0.08)

标题区
- 背景: #f8fafc
- 边框底部: 1px solid #e2e8f0
- 内边距: 16px 24px

悬停状态（可选）
- 阴影: 0 4px 8px 0 rgba(0, 0, 0, 0.12)
```

### 表格 Table

```css
边框: 1px solid #e2e8f0
圆角: 0px (无圆角)

表头
- 背景: #f8fafc
- 字重: 600
- 文本转换: uppercase
- 字间距: 0.02em

行
- 边框底部: 1px solid #f1f5f9
- 悬停背景: #f8fafc

交替行（可选）
- 背景: #fafbfc
```

---

## 🏢 商务元素

### 数据展示
```
数字强调
- 字体: 'SF Mono' (等宽)
- 字重: 600
- 颜色: #1e3a5f

正增长: #059669 (绿)
负增长: #dc2626 (红)
```

### 图标使用
```
风格: 线性图标
粗细: 1.5-2px
颜色: 单色（#64748b 或 #1e3a5f）
大小: 16-24px
```

### 分隔线
```
水平线
- 高度: 1px
- 颜色: #e2e8f0
- 边距: spacing-4 或 spacing-6

垂直线
- 宽度: 1px
- 颜色: #e2e8f0
```

### 徽章和标签
```
VIP/Premium
- 背景: 金色渐变
- 文字: #0f172a
- 圆角: 2px

Standard
- 背景: #c0c0c0 (银)
- 文字: #0f172a

Basic
- 背景: #cd7f32 (铜)
- 文字: #ffffff
```

---

## ♿ 无障碍要求

### 颜色对比度
- 正文文字：最小对比度 7:1 (WCAG AAA)
- 大文字：最小对比度 4.5:1
- 金色按钮文字必须使用深色

### 焦点指示
- 所有可交互元素必须有焦点指示
- 焦点环宽度：2px
- 焦点环颜色：#d4af37 (金色)

### 键盘导航
- 完全键盘支持
- Tab 顺序逻辑清晰
- 快捷键符合行业标准

---

## 📱 响应式设计

### 断点
```
xs:  0px     - 手机
sm:  640px   - 大手机
md:  768px   - 平板
lg:  1024px  - 桌面
xl:  1280px  - 大桌面
2xl: 1536px  - 超大桌面
```

### 适配原则
- 桌面优先（Desktop First）
- 数据表格在移动端转换为卡片
- 保持所有设备上的专业感

---

## 🏆 信任元素

### 必要展示
- 安全认证图标（SSL、加密）
- 合规标识（ISO、SOC）
- 客户logo墙
- 数据统计（用户数、交易量）

### 布局建议
```
认证徽章
- 位置: 页脚或侧边栏
- 大小: 32-48px
- 灰度处理，悬停显示彩色

客户logo
- 灰度显示
- 统一高度: 32px
- 间距: spacing-8
```

---

## ✅ 检查清单

设计自查清单：
- [ ] 是否使用了深蓝色作为主色调？
- [ ] 强调元素是否使用了金色？
- [ ] 字体是否选择了经典衬线体或清晰无衬线体？
- [ ] 圆角是否保持最小化（≤4px为主）？
- [ ] 动画是否简洁克制？
- [ ] 是否避免了花哨的效果？
- [ ] 数据展示是否清晰专业？
- [ ] 是否展示了信任元素？
- [ ] 整体是否传达了专业、可信赖的感觉？
- [ ] 对比度是否满足 WCAG AAA 标准？

---

**文档版本**: 1.0.0
**更新日期**: 2024-12-23
**维护团队**: Design UI Team