/**
 * 生命周期
 * componentWillMount 只会在组件初始化时运行一次 在该方法中执行setState时只会渲染一次(无意义)
 * render
 * componentDidMount 只会在组件初始化时运行一次
 * componentWillReceiveProps
 * shouldComponentUpdate
 * componentDidUpdated
 * componentWillUnMount
 *
 *
 */

/**
 * state 更新后：
 * shouldComponentUpdate
 *      它接收需要更新的 props 和 state，让开发者增加 必要的条件判断，让其在需要时更新，不需要时不更新
 *      本质是用来进行正确的组件渲染
 * componentWillUpdate
 * componentDidUpdate
 */

/**
 * 无状态组件没有生命周期方法，也就没有shouldComponentUpdate方法，每次更新prop或state，都会重新渲染
 * 可以使用pure方法对其进行优化
 */
import React,{Component} from 'react';
import PropTypes from 'prop-types'
import {pure} from 'recompose'

let renderTimes=0
let buttonRenderTimes=0
let cheapButtonRenderTimes=0

function Button({text='button'}) {
    console.log('buttonRenderTimes :', ++buttonRenderTimes);
    return <button>{text}</button>
}

/**
 * 使用pure处理无状态组件后，如果props没有变化时，就不会触发重新render
 */
let CheapButton=pure(({text="CheapButton"})=>{
    console.log('cheapButtonRenderTimes :', ++cheapButtonRenderTimes);
    return <button>{text}</button>
})

class Container extends Component{
    render(){
        const {text}=this.props
        return <div className="container">
            <CheapButton text={text}/>
            <Button/>
        </div>
    }
}

class App extends Component{
    static propTypes={

    }

    static defaultProps={

    }

    constructor(props){
        super(props)
        this.state={
            value:1
        }
    }

    shouldComponentUpdate(nextProps,nextState){
        return true // 该方法默认返回true
    }

    componentWillMount(){
        this.state.value=2
        this.setState({ // 这里是无意义的 可以直接使用 上面的直接赋值方式
            value:3
        })
    }

    componentDidMount(){
        // 一般情况在组件加载完成就render两次并不是好事，不过一些场景不得不需要更新state 比如计算组件的位置或宽高时不得不让组件先渲染，更新必要信息后再次渲染
        this.setState({ // 这里会产生重绘
            value:4
        })
    }

    componentWillUnmount(){
        console.log('unmount');
    }

    render(){
        console.log('renderTimes :', ++renderTimes);
        return <div>
            <div>当前{this.state.value}</div>
            <div>点击reRender会重新render</div>
            <button onClick={()=>this.setState({value:5})}>reRender</button>
            <Container text={this.state.value}/>
        </div>
    }
}

export default App;
