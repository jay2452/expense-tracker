import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import rootReducer from "./store/reducers";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import NotFound from "./NotFound";
import AddSpendForm from "./containers/AddSpendForm/index";
import ImportData from './containers/ImportData/index';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={App}></Route>

          <Route path="/addSpend" exact component={AddSpendForm} />

          <Route path="/import" exact component={ImportData} />


          <Route component={NotFound} />

          {/* <App /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
