import React from "react";

import  ReactDOM  from "react-dom/client";

import Header from "./component/Header";

let data =document.getElementById("main");

let rootdata =ReactDOM.createRoot(data);

rootdata.render(<Header/>)
