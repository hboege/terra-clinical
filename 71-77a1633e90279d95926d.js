(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{1219:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(t(0)),l=r(t(2)),i=r(t(4)),u=r(t(1220));function r(n){return n&&n.__esModule?n:{default:n}}var a=i.default.bind(u.default),s={text:l.default.string},c=function(n){var e=n.text;return o.default.createElement("div",{className:a("content-cell")},e)};c.propTypes=s;var m=c;e.default=m},1220:function(n,e,t){n.exports={"content-cell":"ContentCellLayout__content-cell___2cQUx"}},1221:function(n,e,t){n.exports={"data-grid-basic":"Datagrid-module__data-grid-basic___JemKm","data-grid-row-style":"Datagrid-module__data-grid-row-style___rlH80","data-grid-paging":"Datagrid-module__data-grid-paging___1TByK","loading-overlay":"Datagrid-module__loading-overlay___2pZWs"}},1822:function(n,e,t){"use strict";function o(n){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=s(t(0)),i=s(t(1205)),u=s(t(4)),r=s(t(1219)),a=s(t(1221));function s(n){return n&&n.__esModule?n:{default:n}}function c(n){return(c="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(n){return o(n)}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":o(n)})(n)}function m(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function d(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(t,!0).forEach((function(e){f(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):m(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function f(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function C(n,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function p(n){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function b(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function y(n,e,t){return e&&b(n.prototype,e),t&&b(n,t),n}function w(n,e){return(w=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}var h=u.default.bind(a.default),g=function(n){function e(n){var t;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=C(this,p(e).call(this,n))).state={columns:{"Column-0":{id:"Column-0",width:200,text:"Column 0",isResizable:!0},"Column-1":{id:"Column-1",width:250,text:"Column 1 (Not Resizable)",isResizable:!1},"Column-2":{id:"Column-2",width:200,text:"Column 2",isResizable:!0},"Column-3":{id:"Column-3",width:200,text:"Column 3",isResizable:!0},"Column-4":{id:"Column-4",width:200,text:"Column 4",isResizable:!0},"Column-5":{id:"Column-5",width:200,text:"Column 5",isResizable:!0},"Column-6":{id:"Column-6",width:200,text:"Column 6",isResizable:!0},"Column-7":{id:"Column-7",width:200,text:"Column 7",isResizable:!0},"Column-8":{id:"Column-8",width:200,text:"Column 8",isResizable:!0}}},t}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&w(n,e)}(e,n),y(e,null,[{key:"buildRows",value:function(n,e){return new Array(e).fill().map((function(n,e){return{id:"Row-".concat(e),cells:new Array(9).fill(0).map((function(n,e){return"Column-".concat(e)})).map((function(n){return{columnId:n,component:l.default.createElement(r.default,{text:"Row-".concat(e,", ").concat(n)})}}))}}))}},{key:"buildSection",value:function(n,t,o){return{id:n,text:t,rows:e.buildRows(n,o)}}}]),y(e,[{key:"render",value:function(){var n=this,t=this.state.columns;return l.default.createElement("div",{className:h("data-grid-basic")},l.default.createElement(i.default,{id:"column-resize-example",pinnedColumns:[t["Column-0"],t["Column-1"],t["Column-2"]],overflowColumns:[t["Column-3"],t["Column-4"],t["Column-5"],t["Column-6"],t["Column-7"],t["Column-8"]],sections:[e.buildSection("Section-0","Section 0",15),e.buildSection("Section-1","Section 1",15)],hasResizableColumns:!0,fill:!0,onRequestColumnResize:function(e,t){var o=d({},n.state.columns[e]);o.width=Math.max(t,50),n.setState((function(n){return{columns:d({},n.columns,f({},"".concat(e),o))}}))}}))}}]),e}(l.default.Component);e.default=g},1823:function(n,e,t){"use strict";t.r(e),e.default="import React from 'react';\nimport DataGrid from 'terra-clinical-data-grid';\nimport classNames from 'classnames/bind';\nimport ContentCellLayout from './ContentCellLayout';\nimport styles from './Datagrid.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass DatagridWithColumnResizing extends React.Component {\n  static buildRows(sectionId, num) {\n    const rows = (new Array(num)).fill().map((rowVal, rowIndex) => ({\n      id: `Row-${rowIndex}`,\n      cells: ((new Array(9).fill(0)).map((cellVal, cellIndex) => (`Column-${cellIndex}`))).map(columnKey => ({\n        columnId: columnKey,\n        component: <ContentCellLayout text={`Row-${rowIndex}, ${columnKey}`} />,\n      })),\n    }));\n\n    return rows;\n  }\n\n  static buildSection(sectionId, sectionName, numberOfRows) {\n    return {\n      id: sectionId,\n      text: sectionName,\n      rows: DatagridWithColumnResizing.buildRows(sectionId, numberOfRows),\n    };\n  }\n\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      columns: {\n        'Column-0': {\n          id: 'Column-0',\n          width: 200,\n          text: 'Column 0',\n          isResizable: true,\n        },\n        'Column-1': {\n          id: 'Column-1',\n          width: 250,\n          text: 'Column 1 (Not Resizable)',\n          isResizable: false,\n        },\n        'Column-2': {\n          id: 'Column-2',\n          width: 200,\n          text: 'Column 2',\n          isResizable: true,\n        },\n        'Column-3': {\n          id: 'Column-3',\n          width: 200,\n          text: 'Column 3',\n          isResizable: true,\n        },\n        'Column-4': {\n          id: 'Column-4',\n          width: 200,\n          text: 'Column 4',\n          isResizable: true,\n        },\n        'Column-5': {\n          id: 'Column-5',\n          width: 200,\n          text: 'Column 5',\n          isResizable: true,\n        },\n        'Column-6': {\n          id: 'Column-6',\n          width: 200,\n          text: 'Column 6',\n          isResizable: true,\n        },\n        'Column-7': {\n          id: 'Column-7',\n          width: 200,\n          text: 'Column 7',\n          isResizable: true,\n        },\n        'Column-8': {\n          id: 'Column-8',\n          width: 200,\n          text: 'Column 8',\n          isResizable: true,\n        },\n      },\n    };\n  }\n\n  render() {\n    const { columns } = this.state;\n\n    return (\n      <div className={cx('data-grid-basic')}>\n        <DataGrid\n          id=\"column-resize-example\"\n          pinnedColumns={[\n            columns['Column-0'],\n            columns['Column-1'],\n            columns['Column-2'],\n          ]}\n          overflowColumns={[\n            columns['Column-3'],\n            columns['Column-4'],\n            columns['Column-5'],\n            columns['Column-6'],\n            columns['Column-7'],\n            columns['Column-8'],\n          ]}\n          sections={[\n            DatagridWithColumnResizing.buildSection('Section-0', 'Section 0', 15),\n            DatagridWithColumnResizing.buildSection('Section-1', 'Section 1', 15),\n          ]}\n          hasResizableColumns\n          fill\n          onRequestColumnResize={(columnId, width) => {\n            const columnToUpdate = { ...this.state.columns[columnId] };\n            columnToUpdate.width = Math.max(width, 50);\n            this.setState(prevState => (\n              { columns: { ...prevState.columns, [`${columnId}`]: columnToUpdate } }\n            ));\n          }}\n        />\n      </div>\n    );\n  }\n}\n\nexport default DatagridWithColumnResizing;\n"},1963:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(t(0)),l=r(t(1238)),i=r(t(1822)),u=r(t(1823));function r(n){return n&&n.__esModule?n:{default:n}}var a=function(){return o.default.createElement(l.default,{description:"This example features column resizing using the draggable resize region in the column header. Resizing for Column 1 is explicitly disabled.",example:o.default.createElement(i.default,null),exampleSrc:u.default})};e.default=a}}]);
//# sourceMappingURL=71-77a1633e90279d95926d.js.map