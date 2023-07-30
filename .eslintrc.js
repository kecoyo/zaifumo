module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier', // 禁用与Prettier 冲突的规则
    'prettier/@typescript-eslint', // 针对添加的插件 弃用对应的格式化规则
  ],
  globals: {},
  plugins: ['prettier'],
  rules: {},
};
