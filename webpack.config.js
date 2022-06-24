module.exports = {
    mode: 'development',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                },
            }
        ]
    },
    devtool: false,
    devServer: {
        static: ['./dist']
    }
};
