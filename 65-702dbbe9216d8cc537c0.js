(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1198:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(l(0)),a=s(l(2)),i=s(l(4)),n=s(l(1217));function s(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var d=i.default.bind(n.default),c={item:a.default.element.isRequired},f=function(e){var t=e.item,l=o(e,["item"]),a=d(["detail-list-item",l.className]);return r.default.createElement("div",u({},l,{className:a}),t)};f.propTypes=c,f.defaultProps={};var m=f;t.default=m},1206:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(l(0)),a=o(l(2)),i=o(l(4)),n=o(l(1214)),s=o(l(1215)),u=o(l(1198));function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function c(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function f(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var m=i.default.bind(n.default),p={title:a.default.string,secondaryTitles:a.default.arrayOf(a.default.string),subtitles:a.default.arrayOf(a.default.string),accessory:a.default.element,graph:a.default.element,details:a.default.arrayOf(a.default.element),footer:a.default.string,isDivided:a.default.bool,isSmallerTitles:a.default.bool},_={title:void 0,secondaryTitles:[],subtitles:[],graph:void 0,accessory:void 0,details:[],footer:void 0,isDivided:!0,isSmallerTitles:!1},y=function(e){var t=e.title,l=e.secondaryTitles,a=e.subtitles,i=e.accessory,n=e.graph,s=e.details,u=e.footer,o=e.isDivided,p=e.isSmallerTitles,_=function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?d(l,!0).forEach((function(t){c(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):d(l).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}({},f(e,["title","secondaryTitles","subtitles","accessory","graph","details","footer","isDivided","isSmallerTitles"]));_.className=m(["detail-view",_.className]);var y=t?r.default.createElement("h1",{className:m("primary-text")},t):null,v=l.map((function(e,t){return r.default.createElement("div",{className:m("secondary-text"),key:"".concat(t)},e)})),b=a.map((function(e,t){return r.default.createElement("div",{className:m("subtitle"),key:"".concat(t)},e)})),O=i?r.default.createElement("div",{className:m("accessory")},i):null,w=u?r.default.createElement("div",{className:m("footer-text")},u):null,g=null,h=[];if(o){g=r.default.createElement("hr",{className:m("divider")});for(var D=0;D<s.length;D+=1)h.push(s[D]),h.push(g)}else h=s;return r.default.createElement("div",_,r.default.createElement("div",{className:m("titles-section",{"titles-smaller":p})},y,v,b,O),n&&g,n,g,h,w)};y.propTypes=p,y.defaultProps=_,y.DetailList=s.default,y.DetailListItem=u.default;var v=y;t.default=v},1214:function(e,t,l){e.exports={"detail-view":"DetailView-module__detail-view___3dXBb","titles-section":"DetailView-module__titles-section___3AQ7Y","primary-text":"DetailView-module__primary-text___1nLJ8","secondary-text":"DetailView-module__secondary-text___1qD7n",subtitle:"DetailView-module__subtitle___3OjR4",accessory:"DetailView-module__accessory___2jT3V","titles-smaller":"DetailView-module__titles-smaller___1MZ4k","footer-text":"DetailView-module__footer-text___15_yM",divider:"DetailView-module__divider___11xmz"}},1215:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(l(0)),a=u(l(2)),i=u(l(4)),n=u(l(1216)),s=u(l(1198));function u(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var c=i.default.bind(n.default),f={title:a.default.string,children:a.default.oneOfType([a.default.objectOf(s.default),a.default.arrayOf(a.default.objectOf(s.default))])},m={title:void 0,children:void 0},p=function(e){var t,l=e.title,a=e.children,i=d(e,["title","children"]);return l&&(t=r.default.createElement("div",{className:c("title")},l)),r.default.createElement("div",o({},i,{"data-terra-clincial-detail-list":!0,className:i.className}),t,r.default.createElement("div",{className:c("list")},a))};p.propTypes=f,p.defaultProps=m;var _=p;t.default=_},1216:function(e,t,l){e.exports={title:"DetailList-module__title___1XkCA",list:"DetailList-module__list___2DSX7"}},1217:function(e,t,l){e.exports={"detail-list-item":"DetailListItem-module__detail-list-item___3OOb_"}},1259:function(e,t,l){e.exports={"graph-content":"DetailViewCommon-test-module__graph-content___1pl1w"}},2003:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(l(0)),a=s(l(4)),i=s(l(1206)),n=s(l(1259));function s(e){return e&&e.__esModule?e:{default:e}}var u=a.default.bind(n.default),o=r.default.createElement("p",null,"A Detail List Item"),d=r.default.createElement("p",null,"A Detail List Item to prove float concept when screen readjusts smaller."),c=r.default.createElement("p",null," A sample accessory container "),f=function(){return r.default.createElement(i.default,{title:"OverflowText".repeat(10),secondaryTitles:["secondaryTitle1".repeat(15),"secondaryTitle2".repeat(15)],subtitles:["Subtitle1".repeat(25),"Subtitle2".repeat(25)],graph:r.default.createElement("div",{className:u("graph-content")},"This is where any visualizations would go"),accessory:c,details:[r.default.createElement(i.default.DetailList,{title:"Detail List Title",key:"detailInfo-1"},r.default.createElement(i.default.DetailListItem,{item:o}),r.default.createElement(i.default.DetailListItem,{item:o}),r.default.createElement(i.default.DetailListItem,{item:d}),r.default.createElement(i.default.DetailListItem,{item:o}),r.default.createElement(i.default.DetailListItem,{item:o}))],footer:"Footer Text",isDivided:!1,id:"DetailView",isSmallerTitles:!1})};t.default=f}}]);
//# sourceMappingURL=65-702dbbe9216d8cc537c0.js.map