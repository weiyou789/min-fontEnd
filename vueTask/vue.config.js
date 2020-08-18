const packageName = require('./package').name
const port = 8081
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "@/assets/style/variables/color.scss";
                `
            }
        }
    },
    devServer: {

        hot: true,
        historyApiFallback: true,
        port,
        overlay: {
            warnings: false,
            errors: true
        },
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    configureWebpack: {
        output: {

            library: `${packageName}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${packageName}`,
            globalObject: 'this'
        }
    }
}
