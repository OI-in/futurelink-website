# AI协作日志 - 项目一：企业官网

## 第一次课：生成导航栏（迭代链）

### 我的Prompt

你是一位高级前端工程师。

请帮我写一个企业官网导航栏的HTML和CSS代码，要求：

【结构要求】

1. 导航栏包含Logo区域（左侧）和菜单区域（右侧）
2. Logo区域包含一个图标（用emoji ◈ 占位）和文字"FutureLink"
3. 菜单区域包含四个链接：首页、产品中心、解决方案、关于我们

【规范要求】

1. 使用BEM命名法，块名用 site-header
2. 布局使用Flexbox，Logo居左，菜单居右，垂直居中
3. 所有颜色值使用CSS变量定义，变量名以 --clr- 开头
4. 只生成静态结构，交互功能后续再加

【样式要求】

1. 导航栏高度80px，左右内边距2rem
2. 菜单项之间间距2rem
3. 菜单项文字颜色为灰色（#94a3b8），悬停时变为白色

### AI输出要点

- 类名：site-header**logo、site-header**nav、nav**list、nav**item（完全符合BEM）
- 布局：display: flex; justify-content: space-between; align-items: center
- 颜色：使用了--clr-bg-header、--clr-text-secondary、--clr-text-white等变量
- 结构：正确使用了ul/li列表结构

### 我的修改

- [x] 添加了sticky定位让导航栏固定
- [x] 添加了容器max-width控制最大宽度
- [x] 补充了Logo链接的hover效果

### 逆向拆解收获

1. **语义标签重要性**：header/nav/ul比div更符合语义，有利于SEO和可访问性
2. **BEM命名规范**：site-header\_\_container 这种命名方式让CSS作用域清晰
3. **CSS变量优势**：统一管理颜色，便于主题切换和维护

### 学习心得

- 给AI的Prompt越详细，生成的代码质量越高
- 需要加入"BEM命名"、"Flexbox布局"、"CSS变量"等具体约束
- AI生成的代码必须人工review，补充边界情况和响应式

## 第二次课：HTML语义化审查与BEM命名

### 一、语义标签AI验证

**我的判断：**

- 导航栏：用 `<header>` + `<nav>`，合理
- Hero Banner：用 `<section>`，合理
- 产品中心：用 `<section>`，内部产品卡片用 `<article>`，合理
- 解决方案：用 `<section>`，但缺少网格容器
- 关于我们：用 `<section>`，合理
- 页脚：用 `<footer>`，合理

**AI反馈要点：**

1. 导航栏Logo缺少aria-label可访问性属性
2. 解决方案区域应添加 `<div class="solutions__grid">` 保持一致性
3. 建议用 `<main>` 包裹主要内容区

**我的收获：**

- 语义化标签不仅要选对，还要注意可访问性（aria属性）
- 保持模块间结构一致性很重要（网格容器）
- `<main>` 标签对SEO和屏幕阅读器友好

### 二、BEM命名AI审查

**审查范围：** 全部HTML结构

**AI发现的问题：**

1. 第9行语法错误：`<div class"site-header__logo">` 漏写等号
2. 第55行重复id：`id="products"` 同时出现在section和article上
3. 命名规范整体良好，无其他问题

**我采纳的修改：**

- [x] 修复第9行语法错误，补上等号
- [x] 移除article上重复的id
- [x] 为解决方案区域添加 `solutions__title` 和 `solutions\_\_subtitle

### 三、HTML全面审查

**AI发现的主要问题：**

1. 语法错误（漏写等号）- 严重问题
2. 重复id属性 - 违反HTML规范
3. 缺少 `<main>` 标签包裹主内容
4. 缺少aria可访问性属性

**修改完成情况：**

- [x] 语法错误已修复
- [x] 重复id已移除
- [x] 添加了 `<main>` 标签
- [x] 补充了aria-label属性

### 四、本次课收获

**最大收获：** 学会了如何系统性地审查HTML代码的语义化和BEM规范，并能够通过AI辅助发现问题。

**遇到的困难：** 一开始没注意到语法错误（漏写等号），导致CSS不生效。这个错误非常隐蔽，但AI审查能快速定位。

**如何解决的：** 使用AI审查Prompt，让AI逐条检查语义化标签和BEM命名，快速定位问题并得到修改建议。同时学习了aria属性的使用，提升了可访问性。

## 第三次课 Debug竞赛记录

### 发现的Bug及排查路径

**Bug 1：导航栏菜单溢出**

- 排查路径：用DevTools选中导航栏容器 → 缩小浏览器窗口，菜单栏溢出 → 检查CSS发现缺少 flex-wrap
- 修复：添加 flex-wrap: wrap
- 验证：缩小窗口，菜单自动换行

**Bug 2：产品网格小屏幕撑破**

- 排查路径：缩小浏览器窗口 → 发现4列挤在一起出现横向滚动条 → 检查Grid定义发现是固定 repeat(4, 1fr)
- 修复：改为 repeat(auto-fit, minmax(280px, 1fr))
- 验证：缩小窗口，卡片自动折行，无滚动条

**Bug 3：Banner内容没垂直居中**

- 排查路径：检查.hero的Flex属性 → 两个center都有 → 查看Computed面板发现容器高度只有内容高度
- 修复：添加 height: 100vh
- 验证：Banner内容完美居中

### AI验证结果

我将修复后的代码提交给AI审查，获得以下反馈：

✅ AI确认修复正确：
"所有Bug都已正确修复！特别是产品网格的 auto-fit + minmax 方案是响应式网格的最佳实践。"
✅ AI的额外建议（已采纳）：
"建议为导航栏添加媒体查询，在超小屏幕下隐藏Logo文字只保留图标"

### 本次收获

1. Flex居中必须容器有高度
2. 响应式网格要用 auto-fit+minmax，不要固定列数
3. DevTools的Styles面板可以实时改CSS测试，效率很高
