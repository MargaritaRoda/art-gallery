import React from 'react';
import ReactDOM from 'react-dom/client';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);


root.render(
    <React.StrictMode>
        <h1>Hello Art Gallery</h1>
    </React.StrictMode>
);