import React from "react";
import ReactDOM from "react-dom";
import pie from "./math.js"; //pi is deafult so any name(pie) can be given
import { double, triple } from "./math.js"; //for non default export actual name shld be given
import * as pi from "./math.js";

ReactDOM.render(
  <ul>
    <li>{pie}</li>
    <li>{double()}</li>
    <li>{triple()}</li>
    <li>{pi.default}</li>
    <li>{pi.double()}</li>
    <li>{pi.triple()}</li>
  </ul>,
  document.getElementById("root")
);

//double and triple are func so ()
