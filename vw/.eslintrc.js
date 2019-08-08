module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-empty": 2, // 禁止空块语句
    "for-direction": 2, // 禁止for无限循环
    "no-compare-neg-zero": 2, // 禁止与-0进行比较
    'no-cond-assign': 2, 
    "no-prototype-builtins": 2, // 禁止直接在对象实例上调用 Object.prototype 的一些方法。
    "no-undef": 2, // 禁用未声明的变量
    "no-unused-vars": 1, // ??? 禁止未使用过的变量
    "no-use-before-define": 2, // 禁止定义前使用
    "no-shadow": 2, // 禁止变量声明覆盖外层作用域的变量
    "semi": [2, 'always'],  // 强制使用分号
    "indent": [2, 2], // 强制使用一致的缩进
    "eqeqeq": [2, 'smart'],  //  要求使用 === 和 !==
    "no-global-assign": 2,  // 禁止对原生对象或只读的全局对象进行赋值
    "no-multi-spaces": 2, // 禁止出现多个空格
    "require-await": 2, // 禁止使用不带 await 表达式的 async 函数
    "block-spacing": 2, // 强制在代码块中开括号前和闭括号后有空格
    "comma-spacing": 2, // 强制在逗号周围使用空格
    "no-class-assign": 2, // 不允许修改类声明的变量
    "no-confusing-arrow": 2, // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    "no-const-assign": 2, // 不允许改变用const声明的变量
    "no-dupe-class-members": 2, // 不允许类成员中有重复的名称
    "no-duplicate-imports": 2, // 禁止重复导入
    "no-var": 2, // 要求使用 let 或 const 而不是 var
    "prefer-arrow-callback": 2, // 要求使用箭头函数作为回调
    "new-cap": 2, // 要求构造函数首字母大写
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
