import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//front static page css import
import '../src/components/front/assets/css/bootstrap.min.css';
import '../src/components/front/assets/css/animate.css';
import '../src/components/front/assets/css/owl.carousel.css';
import '../src/components/front/assets/css/font-awesome.css';
import '../src/components/front/assets/css/flaticon.css';
/* import '../src/components/front/assets/revolution/css/layers.css';
import '../src/components/front/assets/revolution/css/settings.css'; */
import '../src/components/front/assets/css/shortcodes.css';
import '../src/components/front/assets/css/main.css';
import '../src/components/front/assets/css/responsive.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can chađinge
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
