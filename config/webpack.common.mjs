import webpack from 'webpack'
import path, {dirname} from "path";
import {fileURLToPath} from "node:url";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const IS_DEV = process.env.NODE_ENV !== 'production';
export const PUBLIC_URL = '';


export const config = {
    entry: path.resolve(__dirname, '../src/index.tsx'),
    output: {
        clean: true,
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].js',
        assetModuleFilename: 'static/media/[name].[hash][ext]',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /module\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: IS_DEV
                                    ? '[path][name]__[local]--[hash:base64:5]'
                                    : '[hash:base64:5]',
                            },
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                exclude: /module\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'ts-loader'
                    },
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            // {
            //     test: /\.(ts|tsx)?$/,
            //     use: 'ts-loader',
            //     exclude: /node_modules/,
            // },
            {
                test: /\.(png|jpg|webp)/,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: path.resolve(__dirname, '../public/index.html'),
            templateParameters: {
                PUBLIC_URL,
            },
        }),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[fullhash].css',
        }),
        new webpack.DefinePlugin({
            'process.env.PUBLIC_URL': JSON.stringify(PUBLIC_URL),
            // 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),


    ],
}