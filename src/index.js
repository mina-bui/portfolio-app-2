// Index

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
