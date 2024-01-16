/**
 * Webpack configuration (development)
 *
 * This configuration uses the default entry point for webpack v5 at
 * "src/index.js" (omitted inside the config object)
 *
 * Current configuration is created to build the templates distribution
 * for the developers needs, rather than for demonstration.
 *
 */

const path = require("path")
const MiniCSSExtractPlugin = require("mini-css-extract-plugin")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const autoprefixer = require("autoprefixer");
const baseConfig = require("./webpack.config")
const {statics_dev, refs, article, user, topics} = require("./src/globals")


const sidebar_authenticated = {user, authenticated: true}
const sidebar_can_comment = {...sidebar_authenticated, can_comment: true}
const sidebar_can_edit = {...sidebar_authenticated, can_edit: true}
const sidebar_can_create = {...sidebar_authenticated, can_create: true}

module.exports = {
    ...baseConfig,
    mode: "development",
    output: {
        ...baseConfig.output,
        filename: "static/js/main.bundle.js"
    },
    plugins: [
        new MiniCSSExtractPlugin({
            "filename": "static/css/main.css"
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src/views/_template.hbs"),
            filename: "base.html",
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src/views/partials/_sidebar.hbs"),
            filename: "_sidebars/anonymous.html",
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src/views/partials/_sidebar.hbs"),
            filename: "_sidebars/authenticated.html",
            templateParameters: {...sidebar_authenticated}
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src/views/partials/_sidebar.hbs"),
            filename: "_sidebars/can_comment.html",
            templateParameters: {...sidebar_can_comment}
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src/views/partials/_sidebar.hbs"),
            filename: "_sidebars/can_edit.html",
            templateParameters: {...sidebar_can_edit}
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src/views/partials/_sidebar.hbs"),
            filename: "_sidebars/create_view.html",
            templateParameters: {...sidebar_can_create}
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src/views/about_view.hbs"),
            filename: "about.html",
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src/views/partials/list_main.hbs"),
            filename: "articles/article_list.html",
            chunks: [],
            templateParameters: {
                statics_dev,
                topics,
            }
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src/views/partials/detail_main.hbs"),
            filename: "articles/article_detail.html",
            chunks: [],
            templateParameters: {
                ...statics_dev,
                topics,
                article,
            }
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src/views/partials/form_main.hbs"),
            filename: "articles/article_form.html",
            chunks: [],
            templateParameters: {
                ...statics_dev,
                navs: refs.navs,
            }
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src/views/partials/signin_form.hbs"),
            filename: "auth/signin_form.html",
            chunks: [],
            templateParameters: {
                ...statics_dev,
                topics,
            }
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src/views/partials/signup_form.hbs"),
            filename: "auth/signup_form.html",
            chunks: [],
            templateParameters: {
                ...statics_dev,
                topics,
            }
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src/views/partials/profile_main.hbs"),
            filename: "users/profile.html",
            chunks: [],
            templateParameters: {
                ...statics_dev,
                topics,
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
                    filename: "static/img/[name][ext]"
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
