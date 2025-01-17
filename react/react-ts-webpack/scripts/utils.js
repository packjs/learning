//utils.js
const {isDev} = require('./config')

exports.getCssLoaders = (importLoaders) => [
    'style-loader',
    {
        loader: 'css-loader',
        options: {
            modules: false,
            sourceMap: isDev,
            importLoaders,
        },
    },
    {
        loader: 'postcss-loader',
        options: {
            sourceMap: isDev,
            postcssOptions: {
                plugins: [
                    // 修复一些和 flex 布局相关的 bug
                    require('postcss-flexbugs-fixes'),
                    require('postcss-preset-env')({
                        autoprefixer: {
                            grid: true,
                            flexbox: 'no-2009',
                        },
                        stage: 3,
                    }),
                    require('postcss-normalize'),
                ],
            },
        },
    },
]
