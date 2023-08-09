import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { DataContextProvide } from './Contexts/DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataContextProvide>
  <App />
  </DataContextProvide>
);
