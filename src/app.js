import { render } from "./react";
const vdom = {
  tag: "p",
  props: {},
  children: [
    {
      tag: "h1",
      props: {},
      children: ["react 만들기"],
    },
    {
      tag: "ul",
      props: {},
      children: [
        { tag: "li", props: { style: "color:red" }, children: ["첫 번째"] },
        { tag: "li", props: { style: "color:blue" }, children: ["두 번째"] },
        { tag: "li", props: { style: "color:green" }, children: ["세 번째"] },
      ],
    },
  ],
};

render(vdom, document.querySelector("#root"));
