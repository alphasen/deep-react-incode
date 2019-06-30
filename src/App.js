/**
 * http://react.html.cn/docs/hooks-overview.html
 *  Hooks 在类内部不起作用
 * Hook 允许您根据组件的相关部分(例如添加和删除订阅)来组织组件中的副作用，而不是强制基于生命周期方法进行拆分。
 */

import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { pure } from 'recompose';

function UseState({ name = 8 }) {
    const [state, setCount] = useState({ count: 11 });
    let [age, updateAge] = useState(22);
    return (
        <div>
            <h1>{name}</h1>
            {state.count}
            <button onClick={() => setCount({ count: ++state.count })}>
                count++
            </button>
            <section>
                age:{age}
                <br />
                update:
                <button onClick={() => ++age}>直接更新age【不可行】</button> {}
                <button onClick={() => updateAge(++age)}>
                    正确方式是使用提供的更新函数
                </button>
            </section>
        </div>
    );
}

/**
 * 只能在顶层调用 Hook，不要在循环、条件或嵌套函数中调用 Hook。
 * 仅从 React 函数式组件中调用 Hook。不要从常规 JavaScript 函数调用 Hook。（还有另一个有效的地方来调用 Hook，即你的自定义 Hook。
 */
function UseEffect() {
    const [times,setTimes]=useState(0)
    // Similar to componentDidMount and componentDidUpdate:
    // 默认情况下，React 在每次渲染后运行 effect，包括 第一次渲染
    useEffect(()=>{
        // Update the document title using the browser API
        document.title=`${times}`;
        return ()=>{ // useEffect通过返回一个函数来指定它们之后如何“清理（clean up）”
            document.title='cleaning up'
        }
    })

    useEffect(()=>{ // 可以多次使用useEffect
        setTimes(times>2?2:times)
    })

    return <div>
        {times}<button onClick={()=>setTimes(times+1)}>updateTimes</button>
    </div>
}

function App() {
    let PureUseState=pure(UseState)
    return <div>
        <PureUseState name='lilei'/>
        <UseEffect/>
    </div>
}

export default App;
