# 智联未来 (FutureLink) 企业官网

> 一个采用现代前端技术构建的响应式企业官网，展示企业形象、产品与解决方案。

---

## 📖 项目简介

**智联未来 (FutureLink) 企业官网** 是一个纯前端静态网站，面向企业客户展示公司品牌、产品中心、解决方案、关于我们等信息。页面采用响应式设计，适配桌面端、平板和手机端，并提供流畅的交互体验。

---

## 🛠️ 技术栈

| 技术       | 说明                                                                  |
| ---------- | --------------------------------------------------------------------- |
| HTML5      | 语义化标签（`header`、`nav`、`main`、`section`、`article`、`footer`） |
| CSS3       | Flexbox + Grid 布局、BEM 命名规范、CSS 变量（`--clr-*`）              |
| JavaScript | 原生 ES6+（Intersection Observer、classList.toggle、平滑滚动）        |
| Git        | 版本控制，多分支管理                                                  |

---

## ✨ 功能特性

### 核心功能

- ✅ 响应式导航栏：桌面端横排菜单，移动端汉堡菜单 + 滑入动画
- ✅ 导航滚动高亮：基于 Intersection Observer API，自动高亮当前可视区域对应的菜单项
- ✅ 返回顶部按钮：滚动超过 500px 显示，平滑滚动回顶部
- ✅ 产品展示网格：CSS Grid 响应式布局（`auto-fit + minmax`），自动适配屏幕宽度
- ✅ 解决方案三列卡片：桌面端 3 列，平板 2 列，手机 1 列
- ✅ 关于我们两栏布局：左侧图片，右侧文字 + 统计数据
- ✅ 页脚信息：公司简介、快速链接、联系方式、邮件订阅表单

### 交互体验

- ✅ 卡片悬停动画（上浮 + 阴影）
- ✅ 按钮悬停效果（变色 + 位移）
- ✅ 平滑滚动（`scroll-behavior: smooth`）
- ✅ 移动端菜单打开时锁定背景滚动

---

## 🚀 本地运行

### 1. 克隆项目

```bash
git clone https://github.com/你的用户名/futurelink-website.git
cd futurelink-website
```

### 2. 直接运行

本项目为纯静态页面，无需安装依赖。使用以下任一方式：

**方式一：使用 Live Server（推荐）**

```bash
# 安装 VS Code 插件 Live Server，右键 index.html → Open with Live Server
```

**方式二：直接打开**
双击 `index.html` 文件，在浏览器中查看。

**方式三：使用 Python 快速服务器**

```bash
# Python 3
python -m http.server 8080

# 然后访问 http://localhost:8080
```

### 3. 目录说明

确保图片资源存放在 `assets/images/` 目录下（图片命名：1.jpg ~ 6.jpg）。

---

## 📁 项目结构

```
futurelink-website/
│
├── index.html              # 主页面
├── css/
│   └── style.css           # 全部样式（BEM + CSS变量 + 响应式）
├── js/
│   └── main.js             # 交互逻辑（汉堡菜单 + 滚动高亮 + 返回顶部）
├── assets/
│   └── images/
│       ├── 1.jpg           # Hero 背景图
│       ├── 2.jpg           # 产品卡片1
│       ├── 3.jpg           # 产品卡片2
│       ├── 4.jpg           # 产品卡片3
│       ├── 5.jpg           # 产品卡片4
│       └── 6.jpg           # 关于我们配图
│
└── README.md               # 项目说明文档
```

---

## 🤖 AI协作亮点

> 本课程特色：真实记录使用 AI 辅助前端开发的关键环节

### 1. 代码审查与规范检查

- **AI 角色**：资深前端架构师
- **发现问题**：BEM 命名不一致（`solutions__card` vs `solution-card`）、CSS 重复定义、Hero 背景图路径错误
- **解决方案**：AI 逐条指出问题并给出修改后的完整代码

### 2. 响应式布局优化

- **AI 角色**：高级前端工程师
- **关键建议**：将产品网格从 `repeat(4, 1fr)` 改为 `repeat(auto-fit, minmax(280px, 1fr))`
- **效果**：实现移动端自动折行，无需额外媒体查询

### 3. 滚动高亮性能优化

- **AI 角色**：高级前端工程师
- **技术方案**：使用 Intersection Observer API 替代 `scroll` 事件监听
- **优势**：性能更优，不占用主线程，自动处理节流

### 4. Git 多仓库推送配置

- **AI 角色**：Git 协作顾问
- **问题场景**：需要同时推送到 GitHub（作业提交）和 Gitee（个人备份）
- **解决方案**：配置两个远程仓库别名（`origin` + `gitee`），一条命令双推

### 5. 汉堡菜单可访问性增强

- **AI 角色**：前端可访问性专家
- **改进点**：添加 `aria-label`、`aria-hidden`、`aria-expanded` 等属性
- **效果**：屏幕阅读器可正确识别菜单状态

---

## 📝 维护与联系

- 项目地址：https://github.com/你的用户名/futurelink-website

---

> 本项目为前端课程作业，展示了 HTML5 语义化、CSS3 现代布局（Flexbox + Grid）、BEM 命名规范、CSS 变量以及原生 JavaScript 交互的综合应用。
