import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TabNav from '../TabNav';
import TabContent from '../TabContent';
import './index.scss'
import classnames from 'classnames'

class Tabs extends Component {
    static propTypes = {
        className: PropTypes.string,
        classPrefix: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]),
        activeIndex: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    };

    static defaultProps = {
        classPrefix: 'tabs',
        onChange: () => {}
    };

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    // 该方法禁止访问 this.props 确保当开发者用到 getDerivedStateFromProps 这个生命周期函数时，就是在根据当前的 props 来更新组件的 state，而不是去做其他一些让组件自身状态变得更加不可预测的事情
    // https://zhuanlan.zhihu.com/p/36062486
    // 该方法很难用 https://www.jianshu.com/p/cafe8162b4a8 应该尽量避免使用
    static getDerivedStateFromProps(nextProps, preState) {
        // state 变化也会触发该函数
        // 为避免内部state变化时该函数无法响应，最好的做法是在触发state变化时，也顺道将父组件传进来的props一并修改 eg:handleTabClick操作后更改了父组件的props this.props.onChange(activeIndex, preActiveIndex);
        // console.log('nextProps :', nextProps);
        // console.log('preState :', preState);
        // if(nextProps.defaultActiveIndex!=preState.activeIndex){
        //     return {
        //         activeIndex:nextProps.defaultActiveIndex
        //     }
        // }
        // return null
    }

    renderTabNav() {
        const { classPrefix, children } = this.props;
        return (
            <TabNav
                onTabClick={this.props.onChange}
                classPrefix={classPrefix}
                panes={children}
                activeIndex={this.props.activeIndex}
            />
        );
    }

    renderTabContent() {
        const { classPrefix, children } = this.props;
        return (
            <TabContent
                classPrefix={classPrefix}
                className="tab-content"
                panes={children}
                activeIndex={this.props.activeIndex}
            />
        );
    }

    render() {
        const { className } = this.props;
        const classes = classnames(className, 'ui-tabs');
        console.log('render');
        return (
            <div className={classes}>
                {this.renderTabNav()}
                {this.renderTabContent()}
            </div>
        );
    }
}
export default Tabs;
