// Index

// These must be the first lines in src/index.js
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import SimpleReactLightbox from 'simple-react-lightbox';


ReactDOM.render(
    <React.StrictMode>
        <SimpleReactLightbox>
            <AppRouter />
        </SimpleReactLightbox>
    </React.StrictMode>,
    document.getElementById('root')
);
