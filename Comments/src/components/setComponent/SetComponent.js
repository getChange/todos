//这是提交评论的组件
//1.引包
import React from 'react'
import setcomponent from './SetComponent.less'

//2.创建组建
class SetComponent extends React.Component{
    constructor(){
        super()
        this.state={
            msg:'HelloWorld'
        }
    }

    render(){
        return(
            <div className="setcomponent">
                <textarea onChange={this.changehandler.bind(this)} value={this.state.msg}></textarea>
                <button>提交评论</button>
            </div>
        )
    }

    //文本框事件
    changehandler(event){
        this.setState({
            msg:event.target.value
        })
    }
}

//3.暴露组件
module.exports=SetComponent