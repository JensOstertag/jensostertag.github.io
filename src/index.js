import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// document.querySelector('body').append(
//   <script src={process.env.PUBLIC_URL + "/script/viewport.js"} />
// );
// document.querySelector('body').append(
//   <script src="%PUBLIC_URL%/script/sidebar.js" />
// );

reportWebVitals();
