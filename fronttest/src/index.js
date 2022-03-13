import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Context } from "./FavoriteContext";
import App from './App';
import { CssBaseline } from '@mui/material';



const Root = ({ children }) => {
  const [context, setContext] = useState([]);
  return (
    <Context.Provider value={[context, setContext]}>
      {children}
    </Context.Provider>
  );
  }


  ReactDOM.render(
    <React.StrictMode>
      <CssBaseline>
      <Router>
        <Root>
        <App />
        </Root>
      
      </Router>
 
      </CssBaseline>
           
    </React.StrictMode>,
    document.getElementById('root')
  );
  


