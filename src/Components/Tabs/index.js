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
        defaultActiveIndex: PropTypes.number,
        activeIndex: PropTypes.number,
        onChange: PropTypes.func
    };

    static defaultProps = {
        classPrefix: 'tabs',
        onChange: () => {}
    };

    constructor(props) {
        super(props);
        let activeIndex;
        if ('activeIndex' in props) {
            activeIndex = props.activeIndex;
        } else if ('defaultActiveIndex' in props) {
            activeIndex = props.defaultActiveIndex;
        }
        this.state = {
            activeIndex,
            preActiveIndex: activeIndex, // 上次打开的tab index
            props:{}
        };
        console.log('this.state :', this.state);
    }

    // 该方法禁止访问 this.props 确保当开发者用到 getDerivedStateFromProps 这个生命周期函数时，就是在根据当前的 props 来更新组件的 state，而不是去做其他一些让组件自身状态变得更加不可预测的事情
    // https://zhuanlan.zhihu.com/p/36062486
    // 该方法很难用 https://www.jianshu.com/p/cafe8162b4a8 应该尽量避免使用
    static getDerivedStateFromProps(nextProps, preState) {
        return null
    }

    handleTabClick = activeIndex => {
        const preActiveIndex = this.state.activeIndex;
        if (activeIndex !== preActiveIndex) {
            this.setState({
                activeIndex,
                preActiveIndex
            });
            this.props.onChange(activeIndex, preActiveIndex);
        }
    };

    renderTabNav() {
        const { classPrefix, children } = this.props;
        return (
            <TabNav
                onTabClick={this.handleTabClick}
                classPrefix={classPrefix}
                panes={children}
                activeIndex={this.state.activeIndex}
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
                activeIndex={this.state.activeIndex}
            />
        );
    }

    render() {
        const { className } = this.props;
        const classes = classnames(className, 'ui-tabs');
        return (
            <div className={classes}>
                {this.renderTabNav()}
                {this.renderTabContent()}
            </div>
        );
    }
}
export default Tabs;
