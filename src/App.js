/**
 * css modules 示例
 * https://www.kancloud.cn/kancloud/css_modules/232905
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { pure } from 'recompose';
import './App.css';
import styles from './app.module.scss';

console.log('styles :', styles);
class App extends Component {
    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let classes = classnames({
            [styles.blue]: true,
            bg: true,
            [styles.font]: true
        });
        return (
            <div>
                <div className={classes}>
                    blue<span>span</span>
                    <div className={styles.yellow}>yellow in scss's sub classes</div>
                </div>
                <div className={styles.yellow}>yello22222</div>
                <div className={styles.compose}>composes</div>
                <div className={styles.green}>green from App.css</div>
                <div className={styles['variable-green']}>variable-green</div>
            </div>
        );
    }
}

export default App;
