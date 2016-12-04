//webpack的配置文件

var path=require('path')
var  htmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
    entry:path.resolve(__dirname, './src/index.js'), //入口
    output:{
        path:'dist',    //输出目录
        filename:'bundle.js'    //输出文件
    },
    module:{
        loaders:[
            {
                test:/\.less$/,
                exclude:/node_modules/,//禁止webpack去这个目录中查找
                loader:'style!css!less'
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{
                    presets:['react','es2015']
                }
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            //生成的html文件名
            filename:'index.html',
            template:'./src/index.html'//要处理的html文件
        })
    ]
}