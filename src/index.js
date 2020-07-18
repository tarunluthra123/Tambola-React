import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {StyleRoot} from "radium"

ReactDOM.render(
    <StyleRoot>
        <App/>
    </StyleRoot>,
    document.getElementById('root')
);
