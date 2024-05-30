import React from "react";
import ReactDOM from "react-dom";

function time() {
  // DOM using HTML syntax
  let time = new Date().toLocaleTimeString();
  document.getElementById("DOM_root").innerHTML = `DOM = ${time}`;

  // Virtual DOM using react syntax
  const Virtual_element = React.createElement(
    "h4",
    null,
    "React DOM =  ",
    new Date().toLocaleTimeString()
  );

  ReactDOM.render(Virtual_element, document.getElementById("root"));
}

setInterval(time, 1000);
