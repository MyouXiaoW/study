import React from "react";
import ReactDom from "react-dom";
import App from "./QQ验证/js/App"
import "./QQ验证/css/App.css"


if(module.hot){
    module.hot.accept()
}

ReactDom.render(
    <App />,
    document.getElementById("root")
)