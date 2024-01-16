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
const {statics, refs, article, user, topics} = require("./src/globals")

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
        port: 3000,
        hot: true
    },
    plugins: [
        new MiniCSSExtractPlugin({"filename": "css/main.min.css"}),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src/views/about_view.hbs"),
            filename: refs.AboutView,
            templateParameters: {
                ...statics,
                ...refs,
                title: "About",
            }
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src/views/list_view.hbs"),
            filename: refs.ListView,
            templateParameters: {
                ...statics,
                ...refs,
                title: "All Articles",
                topics,
            }
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src/views/detail_view.hbs"),
            filename: refs.DetailView,
            templateParameters: {
                ...statics,
                ...refs,
                title: "Article Details",
                article,
                user,
            }
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src/views/form_view.hbs"),
            filename: refs.FormView,
            templateParameters: {
                ...statics,
                ...refs,
                title: "Article Form",
                user,
            }
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src/views/profile_view.hbs"),
            filename: refs.ProfileView,
            templateParameters: {
                ...statics,
                ...refs,
                title: "User Profile",
                user,
            }
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src/views/signin_view.hbs"),
            filename: refs.SignInView,
            templateParameters: {
                ...statics,
                ...refs,
                title: "Sign In",
            }
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src/views/signup_view.hbs"),
            filename: refs.SignUpView,
            templateParameters: {
                ...statics,
                ...refs,
                title: "Sign Up",
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
                    helperDirs: path.join(__dirname, "src/helpers"),
                    precompileOptions: {
                        knownHelpersOnly: false,
                    }
                }
            }
        ]
    }
}
