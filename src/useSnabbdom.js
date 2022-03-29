import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
  toVNode
} from "snabbdom";


if (Math.random() > 0.5) {
  const patch = init([
    // Init patch function with chosen modules
    classModule, // makes it easy to toggle classes
    propsModule, // for setting properties on DOM elements
    styleModule, // handles styling on elements with support for animations
    eventListenersModule, // attaches event listeners
  ]);
  
  const container = document.querySelector('.snabbdom_wrapper');
  
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
}

