import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { pure } from 'recompose';
import Tabs from './Components/Tabs';
import TabNav from './Components/TabNav';
import TabContent from './Components/TabContent';
import TabPane from './Components/TabPane'

function Button(props) {
    return <button>button</button>
}

class App extends Component {
    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
            activeIndex:'0'
        };
    }

    render() {
        return (
            <div>
                <button onClick={()=>this.setState({
                    activeIndex:'2'
                })}>open tab 3</button>
                <button onClick={()=>this.setState({
                    activeIndex:'1'
                })}>open tab 2</button>
                <Tabs
                    activeIndex={this.state.activeIndex}
                    className="tabs-bar"
                    // key={Math.random()}
                    onChange={(activeIndex)=>{
                        this.setState({
                            activeIndex
                        })
                    }}
                >
                    <TabPane order="0" tab={'Tab 1'}>
                        <span>1.xxx</span>
                        <Button/>
                    </TabPane>
                    <TabPane order="1" tab={'Tab 2'}>
                        第二个 Tab 里的内容
                    </TabPane>
                    <TabPane order="2" tab={'Tab 3'}>
                        第三个 Tab 里的内容
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default App;
