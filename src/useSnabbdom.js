import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
  toVNode
} from "snabbdom";

const patch = init([
  // Init patch function with chosen modules
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  styleModule, // handles styling on elements with support for animations
  eventListenersModule, // attaches event listeners
]);

const container = document.getElementById("app");

// const vnode = h("div#container.two.classes", {
//   on: {
//     click: function () {
//       console.log('hello world')
//     }
//   }
// }, [
//   h("span", { style: { fontWeight: "bold" } }, "This is bold"),
//   " and this is just normal text",
//   h("a", { props: { href: "/foo" } }, "I'll take you places!"),
// ]);

const vnode = h('ul', [
  h('li', {
    attrs: {
      a: 'zzz',
    },
    on: {
      click: function () {
        console.log('zzzz'),
          patch(vnode, newVnode)
      }
    }
  }, 'li1111'),
  h('li', 'li2222'),
  h('li', [
    'li333',
    h('span', 'span1')
  ])
])

// Patch into empty DOM element – this modifies the DOM as a side effect
patch(container, vnode);

const newVnode = h('ul', [
  h('li', 'li1111'),
  h('li2222a'),
  h('li', [
    'li333',
    h('span', 'span1')
  ])
])
console.log(toVNode(document.querySelector('.qwer')))