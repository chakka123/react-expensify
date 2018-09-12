const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProduction = (env === 'production'); 

    return {
        mode: 'development',
        entry: "./src/app.js",
        output: {
            path: __dirname + '/public/dist',
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }),
                test: /\.s?css$/
            }]
        },
        plugins: [
            new ExtractTextPlugin('styles.css')
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: __dirname + '/public',
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    };
};