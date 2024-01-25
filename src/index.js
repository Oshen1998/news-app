// Import the react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
// can remove this header file
// import Header from './header';
import './css/style.css';
import './css/header.css';
import './css/card.css';
import './css/newspaper.css';
import 'semantic-ui-css/semantic.min.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import AppHeader from './appHeader';

const Home = () => {
    // return <Header />
    return <AppHeader />
}

ReactDOM.render(
    <Home/>,
    document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

























