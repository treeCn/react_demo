// prettier指北：https://juejin.im/post/5d4304be51882553ec6eefa8
// 最新文档：https://prettier.io/docs/en/options.html
module.exports = {
  printWidth: 120, // 每行代码最大长度
  tabWidth: 2, //一个tab代表几个空格数，默认为80
  useTabs: false, //是否使用tab进行缩进，默认为false，表示用空格进行缩减
  semi: true, // 声明后带分号
  singleQuote: true, // 使用单引号
  jsxSingleQuote: true, // 使用单引号
  jsxBracketSameLine: true, // 启用jsx语法，> 放在末尾
  trailingComma: 'all',
};
