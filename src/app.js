import { render, createElement } from "./react";
// const vdom = {
//   tag: "p",
//   props: {},
//   children: [
//     {
//       tag: "h1",
//       props: {},
//       children: ["react 만들기"],
//     },
//     {
//       tag: "ul",
//       props: {},
//       children: [
//         { tag: "li", props: { style: "color:red" }, children: ["첫 번째"] },
//         { tag: "li", props: { style: "color:blue" }, children: ["두 번째"] },
//         { tag: "li", props: { style: "color:green" }, children: ["세 번째"] },
//       ],
//     },
//   ],
// };

const vdom = createElement(
  "p",
  {},
  createElement("h1", {}, "React만들기"),
  createElement(
    "ul",
    {},
    createElement("li", { style: "color:red" }, "첫 번째"),
    createElement("li", { style: "color:blue" }, "두 번째"),
    createElement("li", { style: "color:green" }, "세 번째")
  )
);

render(vdom, document.querySelector("#root"));
