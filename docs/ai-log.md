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

## 第二次课：生成页脚模块（迭代链）

### 我的Prompt

请帮我生成一个企业官网页脚（Footer），要求：

1. 使用BEM命名（块名用 site-footer）
2. 使用Grid布局实现响应式（桌面4列，平板2列，手机1列）
3. 使用CSS变量定义颜色
4. 包含：Logo区域、快速链接、联系方式、社交链接、版权信息

### AI输出要点

- 类名：site-footer、site-footer**container、site-footer**section
- 布局：display: grid + repeat(auto-fit, minmax(250px, 1fr))
- 颜色：继承了导航栏的变量体系
- 结构：完整包含了所有要求的内容模块

### 我的修改

- [x] 添加了响应式断点优化移动端显示
- [x] 补充了社交链接的hover效果
- [x] 优化了底部版权区域的样式

### 学习心得

1. Grid布局比Flex更适合多列footer场景
2. auto-fit + minmax实现完美响应式，无需写多个@media
3. 保持整个网站颜色变量的一致性很重要

## 总结与反思

1. **AI工具的正确使用方式**：提供明确约束 > 生成代码 > 人工审查 > 二次优化
2. **前端工程化意识**：BEM、CSS变量、语义化标签都是专业项目的基石
3. **Git工作流**：每完成一个模块就提交，保持提交历史清晰
4. **文档记录**：AI协作日志帮助复盘和学习，值得坚持
