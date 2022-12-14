import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Clock from './chapter04/Clock.jsx';
import CommentList from './chapter05/CommentList.jsx'
import NotificationList from './chapter06/NotificationList';
import Accommodate from './chapter07/Accommodate';
const root = ReactDOM.createRoot(document.getElementById('root')); // 랜더 하는 과정
//4챕터
// setInterval(() => {
// root.render(
//   <React.StrictMode>
//     <Clock/>
//   </React.StrictMode>
// );
// }, 1000)
//5챕터
// root.render(
//   <React.StrictMode>
//     <CommentList />
//   </React.StrictMode>
// );
//6챕터
// root.render(
//   <React.StrictMode>
//     <NotificationList/>
//   </React.StrictMode>
// );

//7챕터
root.render(
  <React.StrictMode>
    <Accommodate />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
