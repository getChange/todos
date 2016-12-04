//这里是评论内容的组件
//1.引包
import React from 'react'
import style from './Comment.less'

//2.创建组建
class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                <h1>{this.props.myitem.name}</h1>
                <p>{this.props.myitem.msg}</p>
                <p>{Date.now()}</p>
            </div>
        )
    }
}

//3.暴露出去组件 供他人使用
module.exports = Comment