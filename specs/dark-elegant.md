# Dark Elegant UI 设计规范

## 📋 基本信息

- **名称**: Dark Elegant（暗黑优雅）
- **版本**: 1.0.0
- **适用场景**: 设计工具、开发IDE、专业软件、高端产品
- **设计理念**: 精致、神秘、高对比，在黑暗中绽放优雅
- **关键词**: 极简、高对比、精致、神秘、高端

---

## 🎨 色彩系统

### 黑白主调（高对比）
```
纯黑 Black: #000000
深黑系列
- gray-950: #0a0a0a (最深灰)
- gray-900: #121212 (深灰)
- gray-850: #1a1a1a (标准深灰)
- gray-800: #1f1f1f (深灰)
- gray-700: #2a2a2a (中深灰)

中性灰
- gray-600: #3d3d3d
- gray-500: #6b6b6b
- gray-400: #9a9a9a

浅灰系列
- gray-300: #b8b8b8
- gray-200: #d4d4d4
- gray-100: #e8e8e8

纯白 White: #ffffff
```

### 强调色（优雅点缀）
```
主强调 Primary: #ffffff (纯白)

彩色强调（克制使用）
- 蓝色 Blue:   #60a5fa (仅用于链接)
- 紫色 Purple: #c084fc (特殊强调)
- 粉色 Pink:   #f472b6 (警示)
- 绿色 Green:  #4ade80 (成功)
- 红色 Red:    #f87171 (错误)
```

### 渐变（微妙优雅）
```
微妙渐变 Subtle
linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)

强调渐变 Accent
linear-gradient(135deg, #60a5fa 0%, #c084fc 100%)

边框渐变 Border
linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)
```

---

## ✏️ 字体排版

### 字体家族
```
无衬线字体（主字体）
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
- 特点：现代、清晰、优雅

等宽字体（代码、数据）
font-family: 'SF Mono', 'Monaco', 'Consolas', monospace;
```

### 字号系统（精确层级）
```
xs:   12px - 辅助信息
sm:   14px - 次要内容
base: 16px - 正文
lg:   18px - 强调内容
xl:   20px - 小标题
2xl:  24px - 标题
3xl:  30px - 大标题
4xl:  36px - 页面标题
```

### 字重（细腻变化）
```
light:    300 - 大标题（优雅）
regular:  400 - 正文
medium:   500 - 稍强调
semibold: 600 - 强调
bold:     700 - 特别强调
```

### 行高
```
紧凑 tight:   1.25
标准 base:    1.6
宽松 relaxed: 1.8
```

### 字间距
```
标准: 0
标题: -0.02em (紧凑)
大写: 0.05em (宽松)
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
- 大量留白，创造呼吸感
- 组件内：spacing-4 到 spacing-6
- 组件间：spacing-8 到 spacing-12
- 板块间：spacing-16 或更大

---

## 🔲 圆角系统（锐利精致）

```
none: 0px   - 锐利边缘（表格、工具栏）
sm:   4px   - 微圆角（按钮内元素）
base: 8px   - 标准圆角（按钮、输入框）
lg:   12px  - 大圆角（卡片）
xl:   16px  - 特大圆角（模态框）
```

### 圆角原则
- 外层容器圆角大，内层递减
- 保持锐利感，不过度圆润
- 关键交互元素使用标准圆角

---

## 🌑 阴影系统（柔和光晕）

```
基础阴影（黑色）
xs:   0 1px 2px rgba(0, 0, 0, 0.8)
sm:   0 2px 8px rgba(0, 0, 0, 0.6)
base: 0 4px 16px rgba(0, 0, 0, 0.7)
lg:   0 8px 32px rgba(0, 0, 0, 0.8)

发光阴影（白色）
glow-white:  0 0 20px rgba(255, 255, 255, 0.1)
glow-blue:   0 0 30px rgba(96, 165, 250, 0.3)
glow-purple: 0 0 30px rgba(192, 132, 252, 0.3)
```

### 阴影原则
- 创造深度层次
- 重要元素使用发光效果
- 避免过重的阴影

---

## 🎭 动画效果（优雅流畅）

### 时长
```
快速 fast: 150ms - 微交互
标准 base: 250ms - 常规过渡
缓慢 slow: 400ms - 页面切换
```

### 缓动函数
```
标准 standard:   cubic-bezier(0.4, 0, 0.2, 1)
减速 decelerate: cubic-bezier(0, 0, 0.2, 1)
加速 accelerate: cubic-bezier(0.4, 0, 1, 1)
```

### 动画原则
- 细腻平滑
- 避免突兀
- 使用渐入渐出

---

## 🧩 组件规范

### 按钮 Button

#### 主按钮（白色）
```css
背景: #ffffff
文字色: #000000
内边距: 12px 24px
圆角: 8px
字号: 16px
字重: 500 (medium)
阴影: 0 0 20px rgba(255, 255, 255, 0.1)

悬停状态 Hover
- 背景: #e8e8e8
- 位移: translateY(-2px)
- 阴影: 0 0 30px rgba(255, 255, 255, 0.2),
        0 4px 16px rgba(0, 0, 0, 0.7)

激活状态 Active
- 位移: translateY(0)

禁用状态 Disabled
- 背景: #1f1f1f
- 文字: #6b6b6b
- 阴影: 无
```

#### 次要按钮（边框）
```css
背景: transparent
边框: 1px solid #ffffff
文字色: #ffffff
内边距: 12px 24px

悬停状态 Hover
- 背景: rgba(255, 255, 255, 0.1)
- 边框发光
```

### 输入框 Input

```css
背景: #1a1a1a
边框: 1px solid #2a2a2a
内边距: 12px 16px
圆角: 8px
字号: 16px
文字色: #ffffff

悬停状态 Hover
- 背景: #1f1f1f
- 边框色: #3d3d3d

聚焦状态 Focus
- 背景: #1f1f1f
- 边框色: #ffffff
- 阴影: 0 0 0 1px #ffffff,
        0 0 20px rgba(255, 255, 255, 0.1)

错误状态 Error
- 边框色: #f87171
- 阴影: 0 0 0 1px #f87171
```

### 卡片 Card

```css
背景: #121212
边框: 1px solid #1f1f1f
圆角: 12px
内边距: 32px
阴影: 0 8px 32px rgba(0, 0, 0, 0.8)

顶部边框装饰（可选）
border-top: 1px solid rgba(255, 255, 255, 0.1)

悬停状态（可交互卡片）
- 边框色: rgba(255, 255, 255, 0.2)
- 阴影: 0 0 30px rgba(255, 255, 255, 0.05)
```

---

## 🎨 特殊效果

### 微妙纹理
```css
/* 点阵纹理 */
background-image: radial-gradient(circle, #ffffff 1px, transparent 1px);
background-size: 10px 10px;
opacity: 0.02;

/* 噪点纹理 */
background: url('noise.svg');
opacity: 0.03;
```

### 光线效果
```css
/* 扫光效果 */
.light-sweep {
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
  animation: sweep 3s infinite;
}

/* 呼吸灯效果 */
.breathing {
  animation: breathe 2s ease-in-out infinite;
}

@keyframes breathe {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}
```

### 分割线
```css
/* 发光分割线 */
.divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, #ffffff, transparent);
  opacity: 0.2;
}

/* 虚线分割 */
.dashed {
  border-top: 1px dashed #2a2a2a;
}
```

---

## 🎭 界面模式

### 纯黑模式
- 背景使用纯黑 #000000
- 通过灰阶创造层次
- 白色作为唯一强调

### 层次系统
```
背景层: #000000
基础层: #121212
内容层: #1a1a1a
悬浮层: #1f1f1f
顶层:   #2a2a2a
```

### 边框系统
```
隐形边框: rgba(255, 255, 255, 0.05)
细边框:   rgba(255, 255, 255, 0.1)
标准边框: rgba(255, 255, 255, 0.15)
强调边框: rgba(255, 255, 255, 0.2)
焦点边框: #ffffff
```

---

## ⚫ 设计原则

### 极简主义
- 去除一切不必要的装饰
- 功能优先
- 内容为王

### 高对比度
- 黑白分明
- 层次清晰
- 重点突出

### 精致细节
- 像素级完美
- 细腻的过渡
- 优雅的动画

### 负空间运用
- 大量留白
- 创造呼吸感
- 引导视线

---

## ♿ 无障碍要求

### 颜色对比度
- 文字/背景：最小 15:1（超高对比）
- 大文字：最小 7:1
- 提供对比度调节选项

### 焦点指示
- 纯白色焦点环
- 宽度：2px
- 必须明显可见

### 键盘导航
- 完全键盘支持
- 清晰的焦点路径
- 支持快捷键

---

## 📱 响应式设计

### 断点
```
xs: 0px     - 手机
sm: 640px   - 大手机
md: 768px   - 平板
lg: 1024px  - 桌面
xl: 1280px  - 大屏
```

### 适配原则
- 保持高对比度
- 移动端增加触摸区域
- 保持极简风格

---

## 🔍 细节规范

### 图标
```
风格: 线性图标
粗细: 1.5px
颜色: #ffffff 或 #9a9a9a
大小: 16px, 20px, 24px
图标库必须使用：lucide icon
```

### 徽章
```
背景: #1f1f1f
文字: #ffffff
边框: 1px solid #2a2a2a
圆角: 4px
内边距: 4px 8px
字号: 12px
```

### 工具提示
```
背景: #2a2a2a
文字: #ffffff
边框: 1px solid #3d3d3d
圆角: 4px
内边距: 8px 12px
阴影: 0 4px 16px rgba(0, 0, 0, 0.8)
```

---

## ✅ 检查清单

设计自查清单：
- [ ] 是否使用纯黑背景？
- [ ] 白色是否作为主要强调色？
- [ ] 是否保持了极简设计？
- [ ] 对比度是否足够高（>15:1）？
- [ ] 是否有适当的留白？
- [ ] 动画是否优雅流畅？
- [ ] 层次是否清晰分明？
- [ ] 细节是否精致完美？
- [ ] 是否避免了过多装饰？
- [ ] 整体是否传达了高端优雅的感觉？

---

**文档版本**: 1.0.0
**更新日期**: 2024-12-23
**维护团队**: Design UI Team