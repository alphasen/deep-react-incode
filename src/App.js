/**
 * react组件
 * react组件元素被描述成纯粹的 JSON 对象(可以使用方法或类来创建)
 * 组件由三个部分组成：属性 props,状态 state,及生命周期方法
 */
import React from 'react';
import PropTypes from 'prop-types' // React v15.5之前,PropTypes属于react库  之后 PropTypes属于prop-types库
import './App.css';

// createClass方式创建组件 react16中已经移除了该方式
// const Input=React.createClass()

// es6 继承方式创建组件
class Input extends React.Component{
    static propTypes={
        value:PropTypes.string
    }
    state={
        value:this.props.value
    }
    static defaultProps={
        value:'input',
    }
    onChange(e){
        this.setState({
            value:e.target.value
        })
    }
    render(){
        return <input value={this.state.value} onChange={this.onChange.bind(this)}/>
    }
}

// 函数式组件
// 无状态组件只传入 props 和 context 两个参数
// 不存在state
// 也没有生命周期方法
// 它创建时始终保持一个实例，避免了不必要的检查和内存分配 做到了内部优化
function Button({ color = 'blue', text = 'Confirm' }) {
    return (
        <button className={`btn btn-${color}`}>
            {' '}
            <em>{text}</em>
        </button>
    );
}

function App() {
    return (
        <div className="App">
            <Input value={'1'}/>
            <Button/>
        </div>
    );
}

export default App;
