import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers and using them to make progressive
// web apps: https://create-react-app.dev/docs/making-a-progressive-web-app/

// Service worker is a javascript script that you copy from online and add it into your project.
// import * as serviceWorker from './serviceWorker';
// serviceWorker.unregister();
