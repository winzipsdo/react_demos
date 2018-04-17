import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import registerServiceWorker from './registerServiceWorker';
import { Route,BrowserRouter } from 'react-router-dom'
import SpotPlayer from "./SpotPlayer/SpotPlayer";



ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path='/player' component={SpotPlayer}/>
            <Route path='/' component={App}/>
        </div>
    </BrowserRouter>,
    document.getElementById('player'));
registerServiceWorker();
