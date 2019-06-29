import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TabNav extends Component {
    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { panes, activeIndex } = this.props;
        return (
            <div className="tab-header">
                {panes.map(pane => {
                    return (
                        <span
                            onClick={() =>
                                pane.props.order!=activeIndex&&this.props.onTabClick(pane.props.order)
                            }
                            key={pane.props.tab}
                            className={
                                activeIndex == pane.props.order ? 'active' : ''
                            }
                        >
                            {pane.props.tab}
                        </span>
                    );
                })}
            </div>
        );
    }
}
export default TabNav;
