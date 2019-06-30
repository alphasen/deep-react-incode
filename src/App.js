import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { pure } from 'recompose';
import emitter from './event';

function Button({ text = 'button' }) {
    return (
        <button
            onClick={() => {
                emitter.emit('childChange', { a: 'bbb' });
            }}
        >
            {text}
        </button>
    );
}

class Child extends Component {
    componentDidMount(){
        emitter.on('parentClick',(data)=>console.log(data))
    }
    componentWillUnmount(){
        emitter.removeListener('parentClick')
    }
    render() {
        return (
            <div>
                <Button text="btn" />
                <div
                    onClick={() => {
                        emitter.emit('childChange', { a: 'aaa' });
                    }}
                >
                    Child
                </div>
            </div>
        );
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
        this.emitter = emitter.on('childChange', data => {
            console.log(data);
        });
    }

    componentWillUnmount(){
        emitter.removeListener('childChange')
    }

    render() {
        return (
            <div>
                <Child />
                <button
                    onClick={() => {
                        emitter.emit('parentClick', '999');
                    }}
                >
                    parent
                </button>
            </div>
        );
    }
}

export default App;
