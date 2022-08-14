//配置具体的修改规则
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    // style: 'css'
    style: true
  }),
  addLessLoader({
    // javascriptEnabled: true,
    // modifyVars: { '@primary-color': 'red' }
    lessOptions: {
      javascriptEnabled: true,
      // modifyVars: { '@primary-color': 'red' }
      modifyVars: { '@primary-color': 'green' }
    }
  })
);
