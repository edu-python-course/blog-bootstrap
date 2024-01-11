/**
 * Webpack configuration
 *
 * This configuration uses the default entry point for webpack v5 at
 * "src/index.js" (omitted inside the config object
 *
 */

"use strict"

const path = require("path")
const autoprefixer = require("autoprefixer")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const miniCssExportPlugin = require("mini-css-extract-plugin")
const conf = require("./blog/conf")

// webpack config object
// noinspection WebpackConfigHighlighting
module.exports = {
    mode: "development",
    output: {
        filename: "js/main.bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    devServer: {
        static: path.resolve(__dirname, "dist"),
        port: 8000,
        hot: true
    },
    plugins: [
        new miniCssExportPlugin({"filename": "css/main.min.css"}),
        new HTMLWebpackPlugin({
            template: "./src/views/list_view.hbs",
            filename: "index.html",
            templateParameters: {
                title: "All Articles",
                ...conf.templateParameters
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {loader: miniCssExportPlugin.loader},
                    {loader: "css-loader"},
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [autoprefixer]
                            }
                        }
                    },
                    {loader: "sass-loader"}
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
                generator: {
                    filename: "img/[name][ext]"
                }
            },
            {
                mimetype: "image/svg+xml",
                scheme: "data",
                type: "asset/resource",
                generator: {
                    filename: "icons/[hash].svg"
                }
            },
            {
                test: /\.hbs$/,
                loader: "handlebars-loader"
            }
        ]
    }
}
