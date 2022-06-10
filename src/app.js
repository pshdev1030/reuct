/* @jsx createElement */
import { render, createElement } from "./react";

const vdom = (
  <p>
    <h1>React 만들기</h1>
    <ul>
      <li style="color:red">첫 번째</li>
      <li style="color:blue">두 번째</li>
      <li style="color:green">세 번째</li>
    </ul>
  </p>
);

render(vdom, document.querySelector("#root"));
