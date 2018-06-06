import React from 'react';
import ReactDom from "react-dom";
import App from "./js/app/app"
import "./css/index.css"


if(module.hot){
    module.hot.accept();
}



ReactDom.render(
    <App />,
    document.getElementById("root")
)