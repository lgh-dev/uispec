# Modern Minimal UI 设计规范

## 📋 基本信息

- **名称**: Modern Minimal（现代简约）
- **版本**: 1.0.0
- **适用场景**: SaaS产品、工具应用、专业软件、后台管理系统
- **设计理念**: 少即是多，用最简洁的视觉语言传达最清晰的信息
- **关键词**: 清晰、高效、专业、克制、优雅

---

## 🎨 色彩系统

### 品牌色
```
主色调 Primary
- 默认: #6172f3 (亮蓝紫)
- 悬停: #4c5de7 (深一度)
- 激活: #3f4acb (更深)

辅助色 Secondary
- 默认: #8098f9 (浅蓝紫)
- 悬停: #6a85f8
- 激活: #5470f6
```

### 中性色
```
白色系
- 纯白: #ffffff
- 灰白: #f9fafb

灰色系（由浅到深）
- gray-50:  #f9fafb (背景色)
- gray-100: #f3f4f6 (卡片背景)
- gray-200: #e5e7eb (边框)
- gray-300: #d1d5db (禁用边框)
- gray-400: #9ca3af (占位符)
- gray-500: #6b7280 (次要文字)
- gray-600: #4b5563 (正文)
- gray-700: #374151 (标题)
- gray-800: #1f2937 (重要标题)
- gray-900: #111827 (最深文字)

黑色: #000000 (仅用于纯黑需求)
```

### 语义色
```
成功 Success: #22c55e (绿色)
警告 Warning: #eab308 (黄色)
错误 Error:   #ef4444 (红色)
信息 Info:    #3b82f6 (蓝色)
```

---

## ✏️ 字体排版

### 字体家族
```
主字体（无衬线）
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;

等宽字体（代码）
font-family: 'SF Mono', Monaco, Consolas, 'Courier New', monospace;
```

### 字号系统
```
xs:   12px - 辅助说明、标签
sm:   14px - 次要内容、表单标签
base: 16px - 正文、按钮
lg:   18px - 小标题
xl:   20px - 标题
2xl:  24px - 页面标题
3xl:  30px - 大标题
4xl:  36px - 特大标题
```

### 字重
```
regular:  400 - 正文
medium:   500 - 强调
semibold: 600 - 小标题
bold:     700 - 标题
```

### 行高
```
紧凑 tight:    1.25
标准 base:     1.5
宽松 relaxed:  1.75
```

---

## 📐 间距系统

### 基础单位
```
基数: 4px
```

### 间距规模
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
```

### 使用原则
- 组件内边距：使用 spacing-3 到 spacing-5
- 组件间距：使用 spacing-4 到 spacing-8
- 板块间距：使用 spacing-8 到 spacing-16

---

## 🔲 圆角系统

```
none: 0px    - 无圆角
sm:   4px    - 小组件（标签、徽章）
base: 6px    - 常规组件（按钮、输入框）
md:   8px    - 卡片
lg:   12px   - 大卡片、模态框
full: 9999px - 圆形（头像、圆按钮）
```

---

## 🌑 阴影系统

```
xs:   0 1px 2px 0 rgba(0, 0, 0, 0.05)    - 微弱（分隔线替代）
sm:   0 1px 3px 0 rgba(0, 0, 0, 0.1)     - 轻微（按钮默认）
base: 0 4px 6px -1px rgba(0, 0, 0, 0.1)  - 标准（卡片）
md:   0 10px 15px -3px rgba(0, 0, 0, 0.1) - 中等（悬浮卡片）
lg:   0 20px 25px -5px rgba(0, 0, 0, 0.1) - 较大（下拉菜单）
xl:   0 25px 50px -12px rgba(0, 0, 0, 0.25) - 特大（模态框）
```

---

## 🎭 动画效果

### 时长
```
快速 fast: 150ms - 悬停效果、小交互
标准 base: 250ms - 常规过渡
缓慢 slow: 350ms - 复杂动画、页面切换
```

### 缓动函数
```
线性 linear:     linear
淡入 easeIn:     cubic-bezier(0.4, 0, 1, 1)
淡出 easeOut:    cubic-bezier(0, 0, 0.2, 1)
淡入淡出 easeInOut: cubic-bezier(0.4, 0, 0.2, 1)
```

---

## 🧩 组件规范

### 按钮 Button

#### 主按钮 Primary
```css
背景色: #6172f3
文字色: #ffffff
内边距: 12px 20px
圆角: 6px
字号: 16px
字重: 500

悬停状态 Hover
- 背景色: #4c5de7
- 位移: translateY(-1px)
- 阴影: 加深

激活状态 Active
- 背景色: #3f4acb
- 位移: translateY(0)

禁用状态 Disabled
- 透明度: 0.5
- 鼠标: not-allowed
```

### 输入框 Input

```css
背景色: #ffffff
边框: 1px solid #e5e7eb
内边距: 12px 16px
圆角: 6px
字号: 16px

悬停状态 Hover
- 边框色: #d1d5db

聚焦状态 Focus
- 边框色: #6172f3
- 阴影: 0 0 0 3px rgba(97, 114, 243, 0.1)

错误状态 Error
- 边框色: #ef4444
- 阴影: 0 0 0 3px rgba(239, 68, 68, 0.1)

占位符 Placeholder
- 颜色: #9ca3af
```

### 卡片 Card

```css
背景色: #ffffff
边框: 1px solid #e5e7eb
圆角: 8px
内边距: 24px
阴影: 0 4px 6px -1px rgba(0, 0, 0, 0.1)

悬停状态（可交互卡片）
- 阴影: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
- 位移: translateY(-2px)
```

---

## ♿ 无障碍要求

### 颜色对比度
- 正文文字：最小对比度 4.5:1 (WCAG AA)
- 大文字（18px+）：最小对比度 3:1
- 交互元素：最小对比度 4.5:1

### 焦点指示
- 所有可交互元素必须有明确的焦点指示
- 焦点环宽度：3px
- 焦点环颜色：rgba(97, 114, 243, 0.2)

### 键盘导航
- 完全支持键盘操作
- Tab 顺序合理
- 提供快捷键支持

---

## 📱 响应式设计

### 断点
```
xs: 0px     - 手机竖屏
sm: 640px   - 手机横屏
md: 768px   - 平板竖屏
lg: 1024px  - 平板横屏/小笔记本
xl: 1280px  - 桌面显示器
```

### 适配原则
- 移动优先（Mobile First）
- 流式布局（Fluid Layout）
- 触摸目标最小 44x44px

---

## 📝 使用示例

### 按钮组合
```html
<!-- 主按钮 + 次要按钮 -->
<button class="btn-primary">保存</button>
<button class="btn-secondary">取消</button>

<!-- 按钮组间距：16px -->
```

### 表单布局
```html
<!-- 垂直表单 -->
<div class="form-group">
  <label>邮箱</label>      <!-- 间距：8px -->
  <input type="email">
  <span class="error">...</span>  <!-- 间距：4px -->
</div>
<!-- 表单组间距：24px -->
```

### 卡片布局
```html
<!-- 网格卡片 -->
<div class="grid">  <!-- 间距：24px -->
  <div class="card">...</div>
  <div class="card">...</div>
</div>
```

---

## ✅ 检查清单

设计自查清单：
- [ ] 颜色是否都使用了规范中的色值？
- [ ] 字号是否符合规范的字号系统？
- [ ] 间距是否都是 4px 的倍数？
- [ ] 圆角是否使用了规范值？
- [ ] 阴影是否选择了合适的层级？
- [ ] 动画时长是否符合规范？
- [ ] 文字对比度是否满足 WCAG AA 标准？
- [ ] 是否所有交互元素都有焦点状态？
- [ ] 触摸目标是否达到 44x44px？
- [ ] 响应式是否覆盖所有断点？

---

**文档版本**: 1.0.0
**更新日期**: 2024-12-23
**维护团队**: Design UI Team