(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{2016:function(e,t,l){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(l(0)),a=r(l(1257));function r(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)})(e)}function c(e,t){for(var l=0;l<t.length;l++){var n=t[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var l,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(l=!(o=u(t).call(this,e))||"object"!==i(o)&&"function"!=typeof o?s(n):o).state={selectedItemKey:"1"},l.handleSelection=l.handleSelection.bind(s(l)),l}var l,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),l=t,(n=[{key:"handleSelection",value:function(e,t){this.setState({selectedItemKey:t})}},{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement("h3",null,"This a POC Selectable ItemCollection Example."),o.default.createElement("p",null,"This example it set up to be a single-selection example, however the Item Collection gives implementors the flexibilty to create their own selection implementation."),o.default.createElement("p",{id:"selected-key"},"Selected Item:",this.state.selectedItemKey),o.default.createElement(a.default,{id:"ItemCollection",onSelect:this.handleSelection,hasStartAccessory:!0,numberOfDisplays:3,hasComment:!0,hasEndAccessory:!0,breakpoint:"medium"},o.default.createElement(a.default.Item,{id:"item1",key:"1",isSelectable:!0,isSelected:"1"===this.state.selectedItemKey,startAccessory:o.default.createElement(a.default.Comment,null),comment:o.default.createElement(a.default.Comment,{text:"test comment"}),endAccessory:o.default.createElement("button",{type:"button",size:"medium"},"Disclose"),showListItemChevron:!0},o.default.createElement(a.default.Display,{text:"Display 1"}),o.default.createElement(a.default.Display,{text:"Display 1"}),o.default.createElement(a.default.Display,{text:"Display 2"})),o.default.createElement(a.default.Item,{id:"item2",key:"2",isSelected:"2"===this.state.selectedItemKey,isSelectable:!0,comment:o.default.createElement(a.default.Comment,{text:"test comment"}),endAccessory:o.default.createElement("button",{type:"button",size:"medium"},"Disclose"),showListItemChevron:!0},o.default.createElement(a.default.Display,{text:"Display 1"}),o.default.createElement(a.default.Display,{text:"Display 1"}),o.default.createElement(a.default.Display,{text:"Display 2"})),o.default.createElement(a.default.Item,{id:"item3",key:"3",isSelected:"3"===this.state.selectedItemKey,isSelectable:!0,startAccessory:o.default.createElement(a.default.Comment,null),comment:o.default.createElement(a.default.Comment,{text:"test comment"})},o.default.createElement(a.default.Display,{text:"Display 1"}),o.default.createElement(a.default.Display,{text:"Display 1"}),o.default.createElement(a.default.Display,{text:"Display 2"}))))}}])&&c(l.prototype,n),r&&c(l,r),t}(o.default.Component);t.default=m}}]);
//# sourceMappingURL=124-99096998313f5c9abc28.js.map