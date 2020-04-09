const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/templates/template.html"
        })
    ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader",
                options: {
                    sourceMap: true
                }
            }, {
                loader: "postcss-loader",
                options: {
                    sourceMap: true,
                    config: {
                        path: 'postcss.config.js'
                    }
                }
            }, {
                loader: "sass-loader",
                options: {
                    sourceMap: true
                }
            }]
        }, ]
    }
});