import React, { createElement } from 'react';
import './App.css';

// 该实现最终会编译为ButtonElement 形式 可以根据webpack打包结果对比
const Button = ({ color = 'red', text = 'Button' }) =>
        <button style={{ color }}>
            <span>{text}</span> <em>{color}</em>
        </button>

// webpack 打包后结果
// const Button = ({
//     color = 'red',
//     text = 'Button'
//   }) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
//     style: {
//       color
//     },
//     __source: {
//       fileName: _jsxFileName,
//       lineNumber: 6
//     },
//     __self: undefined
//   }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
//     __source: {
//       fileName: _jsxFileName,
//       lineNumber: 7
//     },
//     __self: undefined
//   }, text), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
//     __source: {
//       fileName: _jsxFileName,
//       lineNumber: 7
//     },
//     __self: undefined
//   }, color));


// JSX 将 HTML 语法直接加入到 JavaScript 代码中，再通过翻译器转换到纯 JavaScript 后由浏览器执行
const ButtonElement = ({ color = 'red', text = 'Button' }) => {
    return React.createElement('button', { style: { color } }, [
        React.createElement('span', { key: 'span' }, text),
        ' ',
        createElement('em', { key: 'em' }, color)
    ]);
};

// webpack 打包后结果
// const ButtonElement = ({
//   color = 'red',
//   text = 'Button'
// }) => {
//   return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('button', {
//     style: {
//       color
//     }
//   }, [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('span', {
//     key: 'span'
//   }, text), ' ', Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])('em', {
//     key: 'em'
//   }, color)]);
// };

function App() {
    return (
        <div className="App">
            <Button />
            <ButtonElement />
        </div>
    );
}

export default App;
