// 拓展功能  或者 reject 暴露内部的配置
// 这里是第三方 react -  rewried
// 装饰器的配置
// UI库的配置
// const {
//     override,
//     addDecoratorsLegacy,
//     disableEsLint,
//     addBundleVisualizer,
//     addWebpackAlias,
//     adjustWorkbox
// } = require("customize-cra");

// const path = require('path');
// function resolve (dir) {
//     return path.join(__dirname, '.', dir)
// }
const packageName = require('./package').name;
const {
    useBabelRc,
    override,
    addDecoratorsLegacy,
    disableEsLint,
    addBundleVisualizer,
    addWebpackAlias,
    setWebpackPublicPath,
    adjustWorkbox,
    fixBabelImports,
    overrideDevServer,
} = require("customize-cra");

const devServerConfig = () => config => {
    return {
        ...config,
        headers: {
            'Access-Control-Allow-Origin': '*',//配置跨域
        },
        historyApiFallback: true
    };
};

const rewiredMap = () => config => {
    // console.log(config)
    config.output = {//配置打包模式
        library: `${packageName}-[name]`,
        libraryTarget: 'umd',
        jsonpFunction: `webpackJsonp_${packageName}`,
        globalObject: 'this',
    }
    return config
}
const path = require("path");

module.exports = {
        webpack: override(
           setWebpackPublicPath('//localhost:3000'),

        useBabelRc(),// add .babelrc 添加可选链、空值合并运算符
        // enable legacy decorators babel plugin
        addDecoratorsLegacy(),

        // disable eslint in webpack
        disableEsLint(),

        // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
        process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer(),

        // add an alias for "ag-grid-react" imports
        addWebpackAlias({
            "ag-grid-react$": path.resolve(__dirname, "src/shared/agGridWrapper.js"),
            '@': path.join(__dirname, "src"),

        }),
        fixBabelImports('import', {
            libraryName: 'antd',
            style: 'css',
        }),
        // adjust the underlying workbox
        adjustWorkbox(wb =>
            Object.assign(wb, {
                skipWaiting: true,
                exclude: (wb.exclude || []).concat("index.html")
            })
        ),
            rewiredMap()
    ),
    devServer: overrideDevServer(devServerConfig())
}