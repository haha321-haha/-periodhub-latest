// .eslintrc.js
module.exports = {
    extends: ['next', 'next/core-web-vitals'],
    rules: {
      'react/prop-types': 'off',  // 关闭React属性类型检查
      'no-unused-vars': 'warn'     // 未使用变量显示警告
    }
  };