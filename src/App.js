/**
 * react把复杂的dom操作简化为prop和state操作，使用时要尽量避免直接操作dom
 * 但是某些情况下react无能为力的时候还是要用到dom操作：如果要调用 HTML5 Audio/Video 的 play 方法和 input 的 focus 方法， React 就无能为力了，这时只能使用相应的 DOM 方法来实现。
 * React 提供了事件绑定的功能，但是仍然有一些特殊情况需要自行绑定事件，例如 Popup 等 组件，当点击组件其他区域时可以收缩此类组件。这就要求我们对组件以外的区域(一般指 document 和 body)进行事件绑定
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

function NoRef({}) {
    return <div>NoRef</div>
}

class TestDom extends Component{
    render(){
        return <div>test-dom</div>
    }
}

class App extends Component {
    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const dom = ReactDOM.findDOMNode(this); // 可以获取到当前组件的dom节点
        console.log('dom :', dom);
        console.log('this.refs',this.refs)
        console.log('this.input :', this.input);
        this.input.focus()
    }

    render() {
        return (
            <div>
                <span>text</span>
                {/* 无状态组件没有ref,下面这种用法会报错 (无状态组件只是方法调用，没有新建实例) */}
                <NoRef ref="noRef"/>
                <TestDom ref="testDom"/>
                <input ref={(ref)=>this.input=ref} value="ref-value"/>
            </div>
        );
    }
}

export default App;
