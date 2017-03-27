import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');
ReactDOM.render(<App headerTitle = "Welcome! for prop"
                    contentTitle = "Stranger, for prop"
                    contentBody = "Welcome to example app" />, rootElement);
