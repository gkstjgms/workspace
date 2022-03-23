import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Counter from './Counter';
import reportWebVitals from './reportWebVitals';

ReactDOM.render( // 브라우저에 있는 실제 DOM 내부에 react component rendering
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
  document.getElementById('root') // id = root 에 결과물 rendering 됨
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
