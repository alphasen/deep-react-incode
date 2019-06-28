import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class TabContent extends Component {
    static propTypes={

    }

    static defaultProps={

    }

    constructor(props){
        super(props)
        this.state={

        }
    }
    renderTabNav(){

    }
    render() {
        const {panes,activeIndex,className}=this.props
        let pane=panes[activeIndex]
        let classes=classnames({
            [className]:className,
            'tab-nav':true,
        })
        return (
            <div className={classes} role="tablist">
                <ul>
                    {React.cloneElement(pane,{key:pane.props.order})}
                </ul>
            </div>
        )
    }
}
export default TabContent
