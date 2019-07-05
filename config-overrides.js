const {
    override,
    addDecoratorsLegacy,
    useEslintRc,
    // addBundleVisualizer,
    addWebpackAlias,
    addLessLoader,
    // eslint-disable-next-line no-unused-vars
    fixBabelImports
} = require('customize-cra');
const path = require('path');

module.exports = override(
    addDecoratorsLegacy(), // 装饰器支持
    useEslintRc(), // 使用eslint配置文件
    addLessLoader({ // less 配置
        strictMath: true,
        noIeCompat: true,
        javascriptEnabled: true
    }),
    // fixBabelImports('import', { // antd 模块化加载
    //     libraryName: 'antd',
    //     libraryDirectory: 'es',
    //     style: true
    // }),
    // addBundleVisualizer(),
    addWebpackAlias({ // alias
        common: path.resolve(__dirname, 'src/common'),
        img: path.resolve(__dirname, 'src/common/img'),
        svg: path.resolve(__dirname, 'src/common/svg'),
        views: path.resolve(__dirname, 'src/views'),
        apis: path.resolve(__dirname, 'src/api'),
        axios2$: path.resolve(__dirname, 'src/common/js/axios2.js')
    })
);
