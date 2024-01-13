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
const globals = require("./blog/globals")

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
            template: path.resolve(__dirname, "src/views/partials/list_main.hbs"),
            filename: "articles/article_list.html",
            chunks: [],
            templateParameters: {
                ...globals.templateParametersDevelopment,
                navs: globals.refs.navs,
            }
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src/views/partials/detail_main.hbs"),
            filename: "articles/article_detail.html",
            chunks: [],
            templateParameters: {
                ...globals.templateParametersDevelopment,
                navs: globals.refs.navs,
            }
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src/views/partials/signin_form.hbs"),
            filename: "auth/signin_form.html",
            chunks: [],
            templateParameters: {
                ...globals.templateParametersDevelopment,
                navs: globals.refs.navs,
            }
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src/views/partials/signup_form.hbs"),
            filename: "auth/signup_form.html",
            chunks: [],
            templateParameters: {
                ...globals.templateParametersDevelopment,
                navs: globals.refs.navs,
            }
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src/views/partials/profile.hbs"),
            filename: "users/profile.html",
            chunks: [],
            templateParameters: {
                ...globals.templateParametersDevelopment,
                navs: globals.refs.navs,
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
                    helperDirs: path.join(__dirname, "blog/helpers"),
                    precompileOptions: {
                        knownHelpersOnly: false,
                    }
                }
            }
        ]
    }
}
