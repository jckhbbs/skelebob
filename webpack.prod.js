const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");

const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "app.[contentHash].js",
        path: path.resolve(__dirname, "dist")
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/templates/index.html",
                filename: "index.html",
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            }),
            new HtmlWebpackPlugin({
                template: "./src/templates/page2.html",
                filename: "page2.html",
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contentHash].css"
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: MiniCssExtractPlugin.loader
            }, {
                loader: "css-loader"
            }, {
                loader: "postcss-loader"
            }, {
                loader: "sass-loader"
            }]
        }]
    }
});