import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Store from "./store/index";
import App from "./App.js";
const store = Store();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    // The target element might be either root or app,
    // depending on your development environment
    // document.getElementById("app")
    document.getElementById("root")
);