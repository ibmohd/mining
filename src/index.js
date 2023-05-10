import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ScrollToTop from './utilities/ScrollToTop'
// import {BrowserRouter as Router} from 'react-router-dom'
import {HashRouter as Router} from 'react-router-dom'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //REMOVE STRICTS
  // <React.StrictMode>
    <Router>
      <ScrollToTop>
          <App />
      </ScrollToTop>
    </Router>
  // {/* </React.StrictMode> */}
);



