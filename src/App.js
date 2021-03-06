import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Layout from './Containers/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Layout />
        </div>
    </BrowserRouter>    
  );
}

export default App;
