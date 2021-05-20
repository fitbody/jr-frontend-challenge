import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import App from "./App";
import { GlobalStyle } from "./utils/globalStyles";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode> 
      <Provider store={store}>
          <GlobalStyle/>
          <App />
        </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
