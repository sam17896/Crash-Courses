import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


var links = [
    {Id: 1 ,to : '/' , title: "Home"},
    {Id: 2 ,to : '/staff' , title: "Staff"}
]


ReactDOM.render(<App links={links} />, document.getElementById('root'));
registerServiceWorker();
