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
        { tag: "li", props: {}, children: ["첫 번째"] },
        { tag: "li", props: {}, children: ["두 번째"] },
        { tag: "li", props: {}, children: ["세 번째"] },
      ],
    },
  ],
};

function createDOM(node) {
  if (typeof node === "string") {
    return document.createTextNode(node);
  }

  const element = document.createElement(node.tag);

  node.children.map(createDOM).forEach(element.appendChild.bind(element));

  return element;
}

document.querySelector("#root").appendChild(createDOM(vdom));
