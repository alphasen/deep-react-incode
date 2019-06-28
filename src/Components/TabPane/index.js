import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TabPane extends Component {
    static propTypes={

    }

    static defaultProps={

    }

    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        const {children}=this.props
        return (
            <div className="pane">
                {children}
            </div>
        )
    }
}
export default TabPane
