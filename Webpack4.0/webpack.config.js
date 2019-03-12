// console.log(__dirname)      // 项目目录路径
const path = require('path');   // 全局路径，node模块
const HtmlWebpackPlugin = require('html-webpack-plugin');       // 打包后自动生成页面（dist)    npm i html-webpack-plugin -D 手动安装

module.exports = {
    
    /* 入口配置（必须） */
    /* entry:{                       // 单入口
        app: './src/index.js'       
    }, */
    /* entry:[                          // 多入口               
        './src/index.js', 
        './src/index2.js'
    ], */        
    entry:{
        index: './src/index.js',
        index2: './src/index2.js'
    },                        

    /* 出口配置（必须） */
    /* output:{                        // 单出口
        path: path.resolve(__dirname, './dist'),         // 合并__dirname和 “./dist” ，__dirname为项目所在目录 
        filename: 'bundle.js'      // 文件打包后的文件名
    }, */
    output:{                           // 多出口
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },

   /* 模块 (loader) */
    module:{},

    /* 插件 */
    plugins:[
        new HtmlWebpackPlugin ({
            
        })
    ],

    /* 开发服务器 */
    devServer:{

    }
};