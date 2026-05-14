module.exports = {
  // 继承规则：ESLint推荐规则 + Prettier规则（无冲突）
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  // 解析选项：支持最新ES语法，模块化开发
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  // 运行环境：支持浏览器、Node.js、ES2021语法
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // 自定义规则（暂时留空，后续可添加项目专属规则）
  rules: {},
};
