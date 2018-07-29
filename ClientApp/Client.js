import React from "react";
import ReactDOM from "react-dom";
import Hello from './Hello';

console.log(document.getElementById("root"));

ReactDOM.render(
    <Hello name="World!" />,
    document.getElementById("root")
);