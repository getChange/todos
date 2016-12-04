//最外层的盒子
//入口

//1.引包
import React from 'react'
import ReactDom from 'react-dom'

// 可能这里还有我们写的其他组件要引入
// 评论内容组件 Comment.js
import Comment from './components/comments/Comment.js'

// 提交评论的组件 SetComponent.js
import SetComponent from './components/setComponent/SetComponent.js'


//2.定义一个组件,用来包裹其他所有组件
class Box extends React.Component {
    constructor(){
        super()
        this.state={
            data:[]
        }
    }

    //组件渲染完成之后自动调用
    componentDidMount() {
        //得到假设数据
        var data=[
            {id:1,name:'路飞',msg:'我是要成为海贼王的男人'},
            {id:2,name:'凌晨4点的洛杉矶我没见过',msg:'凌晨3点的北京可以吗?'},
            {id:3,name:'索隆',msg:'世界第一的剑豪'},
            {id:4,name:'香吉士',msg:'最好的弯眉毛的厨子'}
        ]
        this.setState({
            data:data
        })
    }



    render() {
        return(
            <div>
                {
                    this.state.data.map(item =>{
                        return<Comment key={item.id} myitem={item} />
                    })
                }
                <SetComponent />
            </div>
        )
    }
}




//3.渲染组件
ReactDom.render(
    <Box />,
    document.getElementById('box')
)
