/**
 * Webpack configuration
 *
 * This configuration uses the default entry point for webpack v5 at
 * "src/index.js" (omitted inside the config object)
 *
 */

"use strict"

const path = require("path")
const autoprefixer = require("autoprefixer")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const MiniCSSExtractPlugin = require("mini-css-extract-plugin")
const globals = require("./blog/globals")

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
        new MiniCSSExtractPlugin({"filename": "css/main.min.css"}),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src/views/list_view.hbs"),
            filename: globals.refs.ListView,
            templateParameters: {
                title: "All Articles",
                ...globals.templateParameters,
                ...globals.refs
            }
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src/views/detail_view.hbs"),
            filename: globals.refs.DetailView,
            templateParameters: {
                title: "Article Details",
                article: globals.article,
                ...globals.templateParameters,
                ...globals.refs
            }
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src/views/profile_view.hbs"),
            filename: globals.refs.ProfileView,
            templateParameters: {
                title: "User Profile",
                ...globals.templateParameters,
                ...globals.refs
            }
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src/views/signin_view.hbs"),
            filename: globals.refs.SignInView,
            templateParameters: {
                title: globals.refs.SignInView,
                ...globals.templateParameters,
                ...globals.refs
            }
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src/views/signup_view.hbs"),
            filename: globals.refs.SignUpView,
            templateParameters: {
                title: "Sign Up",
                ...globals.templateParameters,
                ...globals.refs
            }
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {loader: MiniCSSExtractPlugin.loader},
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
                loader: "handlebars-loader",
                options: {
                    helperDirs: path.join(__dirname, "blog/helpers"),
                    precompileOptions: {
                        knownHelpersOnly: false,
                    }
                }
            }
        ]
    }
}
