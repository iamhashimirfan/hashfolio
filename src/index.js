import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import  AppView from './AppView';
import './fonts/Proxima Nova Bold.otf';
import './fonts/Proxima Nova Semibold.otf';
import './fonts/Proxima Nova Regular.otf';
import { BrowserRouter as Router } from 'react-router-dom';
import 'babel-polyfill'

const App = () => (
    <Router basename={process.env.PUBLIC_URL}>
        <AppView />
    </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

