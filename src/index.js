import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ShowsState from "./context/shows/ShowsState";

ReactDOM.render(
  <ShowsState>
    <App />
  </ShowsState>,
  document.getElementById('root')
);


