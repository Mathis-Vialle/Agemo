const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './../src/index.html'),
            filename: "index.html"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './../src/Perso.html'),
            filename: "Perso.html"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './../src/connexion.html'),
            filename: "connexion.html"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './../src/modeles.html'),
            filename: "modeles.html"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './../src/collaborations.html'),
            filename: "collaborations.html"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './../src/galerie.html'),
            filename: "galerie.html"
        }),
    ],
    mode: "development",
    entry: path.join(__dirname, './../src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/[name][ext]',
    },
    module: {
        rules: [
            // PARTIE HTML
            {
                test: /\.html$/i,
                use: ["html-loader"]
            },
            // PARTIE CSS
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            //PARTIE IMAGES
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './../dist'),
        },
        compress: true,
        port: 9000,
    },
};