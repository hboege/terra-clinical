(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1192:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextStyles=t.default=void 0;var r=u(n(0)),a=u(n(2)),i=u(n(4)),l=u(n(1195)),o=u(n(1194));function u(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=i.default.bind(l.default),_={PRIMARY:"primary",SECONDARY:"secondary",ATTENTION:"attention",STRIKETHROUGH:"strikeThrough",STRONG:"strong"};t.TextStyles=_;var m={text:a.default.string,textStyle:a.default.oneOf(Object.values(_)),isTruncated:a.default.bool,isDisabled:a.default.bool,icon:a.default.element,iconAlignment:a.default.oneOf(["center","top","inline"])},p={text:"",textStyle:void 0,isTruncated:!1,isDisabled:!1,icon:void 0,iconAlignment:"center"},y=function(e){var t,n=e.text,a=e.textStyle,i=e.isTruncated,l=e.isDisabled,o=e.icon,u=e.iconAlignment,m=d(e,["text","textStyle","isTruncated","isDisabled","icon","iconAlignment"]),p=f(["item-display",{"is-disabled":l},s({},"icon-".concat(u),o),m.className]),y=f(["text",{"is-truncated":i},s({"strike-through":a===_.STRIKETHROUGH},"".concat(a),a)]);return o&&(t=r.default.createElement("div",{className:f("icon")},o)),r.default.createElement("div",c({},m,{className:p}),t,r.default.createElement("div",{"data-terra-clinical-item-display-text":!0,className:y},n))};y.propTypes=m,y.defaultProps=p,y.Comment=o.default;var v=y;t.default=v},1194:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),a=c(n(2)),i=c(n(4)),l=c(n(1196)),o=c(n(1192)),u=c(n(1197));function c(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=i.default.bind(u.default),_={text:a.default.string,isTruncated:a.default.bool},m=function(e){var t=e.text,n=e.isTruncated,a=d(e,["text","isTruncated"]);return r.default.createElement(o.default,s({text:t,isTruncated:n,icon:r.default.createElement(l.default,{className:f("inline-icon")})},a,{className:f("item-comment",a.className)}))};m.propTypes=_,m.defaultProps={text:"",isTruncated:!1};var p=m;t.default=p},1195:function(e,t,n){e.exports={"item-display":"ItemDisplay-module__item-display___3yi9q",text:"ItemDisplay-module__text___c-QUG",icon:"ItemDisplay-module__icon___SD1FM","icon-center":"ItemDisplay-module__icon-center___2_JkX","icon-top":"ItemDisplay-module__icon-top___19Qjs","icon-inline":"ItemDisplay-module__icon-inline___28SMk","is-truncated":"ItemDisplay-module__is-truncated___2UWjL","is-disabled":"ItemDisplay-module__is-disabled___1nKWv",primary:"ItemDisplay-module__primary___2ezQp",secondary:"ItemDisplay-module__secondary___3UcUl",attention:"ItemDisplay-module__attention___3lc20",strong:"ItemDisplay-module__strong___EtBtH","strike-through":"ItemDisplay-module__strike-through___1ixOq"}},1196:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),a=i(n(20));function i(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=function(e){var t=l({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M46 2.1H2a2 2 0 00-2 2v28a2 2 0 002 2h31.2L45 45.9V34.1h1a2 2 0 002-2v-28a2 2 0 00-2-2z"}))};o.displayName="IconComment",o.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var u=o;t.default=u},1197:function(e,t,n){e.exports={"item-comment":"ItemComment-module__item-comment___3CMDj","inline-icon":"ItemComment-module__inline-icon___3zuUm"}},2020:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),a=i(n(1194));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement(a.default,{text:"test comment",id:"ItemComment"})}}}]);
//# sourceMappingURL=77-4b65a3ca78a5c08590eb.js.map