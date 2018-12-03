const path = require('path')
const glob = require('glob')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
var WebpackCleanPlugin = require('webpack-clean');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const nib = require('nib');
const rupture = require('rupture');

// ENVIRONMENT VARIABLES
const ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const filesJS = glob.sync('./src/js/**/*.entry.js');
const Entries = Object.keys(filesJS).reduce((acc, key) => {
    const val = filesJS[key];
    const newKey = val.replace('./src/js/', 'js/').replace('.entry.js', '');
    acc[newKey] = val;
    return acc;
}, {});
Entries['remove'] = './src/stylus/main.styl';
module.exports = {
    target: 'web',
    mode: ENV,
    entry: Entries,
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/"
    },
    optimization: {
        minimize: ENV === 'production',
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    devtool: ENV === 'production' ? false : 'inline-sourcemap',
    module: {
        rules: [{
                test: /\.styl$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader',
                    {
                        loader: 'stylus-loader',
                        options: {
                            use: [nib(), rupture()],
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
                loader: 'file-loader',
                options: {
                    emitFile: true,
                    publicPath: '../img/',
                    name: '[hash].[ext]?v=1',
                    outputPath: './img/'
                }
            }
        ]
    },
    plugins: [
        new WebpackCleanPlugin([
            'remove.js',
        ], {
            basePath: path.join(__dirname, 'dist')
        }),
        new MiniCssExtractPlugin({
            filename: "css/style.min.css",
        }),
        // new CopyWebpackPlugin([{
        //     from: "src/img/",
        //     to: "img/"
        // }, ]),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            optipng: {
                optimizationLevel: 3
            },
            jpegtran: {
                progressive: true
            },
            gifsicle: {
                optimizationLevel: 1
            },
            svgo: {}
        }),
    ],
}