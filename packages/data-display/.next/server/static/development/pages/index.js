module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/table-virtualized.js":
/*!*****************************************!*\
  !*** ./components/table-virtualized.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-virtualized */ "react-virtualized");
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_virtualized__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\skorz\\OneDrive\\Pulpit\\DevStuff\\Bushido\\hurtzoo-parser\\hurtzoo-parser\\packages\\data-display\\components\\table-virtualized.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class TableV extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "_sortList", ({
      sortBy,
      sortDirection
    }) => {
      let newList = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.sortBy(this.props.data, [sortBy]);

      if (sortDirection === react_virtualized__WEBPACK_IMPORTED_MODULE_1__["SortDirection"].DESC) {
        newList.reverse();
      }

      return newList;
    });

    _defineProperty(this, "_sort", ({
      sortBy,
      sortDirection
    }) => {
      const sortedList = this._sortList({
        sortBy,
        sortDirection
      });

      this.setState({
        sortBy,
        sortDirection,
        sortedList
      });
    });

    const _sortBy = 'id';
    const _sortDirection = react_virtualized__WEBPACK_IMPORTED_MODULE_1__["SortDirection"].ASC;

    const _sortedList = this._sortList({
      sortBy: _sortBy,
      sortDirection: _sortDirection
    });

    this.state = {
      sortBy: _sortBy,
      sortDirection: _sortDirection,
      sortedList: _sortedList
    };
  }

  render() {
    return __jsx("div", {
      style: {
        width: '100%',
        height: '100vh'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }
    }, __jsx(react_virtualized__WEBPACK_IMPORTED_MODULE_1__["AutoSizer"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }, ({
      width,
      height
    }) => __jsx(react_virtualized__WEBPACK_IMPORTED_MODULE_1__["Table"], {
      width: width,
      height: height,
      headerHeight: 80,
      rowHeight: 60,
      rowCount: this.props.data.length,
      sort: this._sort,
      sortBy: this.state.sortBy,
      sortDirection: this.state.sortDirection,
      rowCount: this.state.sortedList.length,
      rowGetter: ({
        key,
        index,
        style,
        parent
      }) => this.state.sortedList[index],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, Object.keys(this.props.data[0]).map(key => __jsx(react_virtualized__WEBPACK_IMPORTED_MODULE_1__["Column"], {
      width: 100,
      label: key,
      name: key,
      dataKey: key,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TableV);

/***/ }),

/***/ "./components/table.js":
/*!*****************************!*\
  !*** ./components/table.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Table; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-table */ "react-table");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\skorz\\OneDrive\\Pulpit\\DevStuff\\Bushido\\hurtzoo-parser\\hurtzoo-parser\\packages\\data-display\\components\\table.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function Table({
  columns,
  data
}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = Object(react_table__WEBPACK_IMPORTED_MODULE_1__["useTable"])({
    columns,
    data
  }, react_table__WEBPACK_IMPORTED_MODULE_1__["useSortBy"]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("table", _extends({}, getTableProps(), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, headerGroups.map(headerGroup => __jsx("tr", _extends({}, headerGroup.getHeaderGroupProps(), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }), headerGroup.headers.map(column => __jsx("th", _extends({}, column.getHeaderProps(column.getSortByToggleProps()), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }), column.render('Header'), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 19
    }
  }, column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : '')))))), __jsx("tbody", _extends({}, getTableBodyProps(), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }), rows.map((row, i) => {
    prepareRow(row);
    return __jsx("tr", _extends({}, row.getRowProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }
    }), row.cells.map(cell => __jsx("td", _extends({}, cell.getCellProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 19
      }
    }), cell.render('Cell'))));
  }))));
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/table */ "./components/table.js");
/* harmony import */ var _components_table_virtualized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/table-virtualized */ "./components/table-virtualized.js");
var _jsxFileName = "C:\\Users\\skorz\\OneDrive\\Pulpit\\DevStuff\\Bushido\\hurtzoo-parser\\hurtzoo-parser\\packages\\data-display\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Styles = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

const Root = ({
  products
}) => {
  const columns = [{
    Header: 'ID',
    accessor: 'id'
  }, {
    Header: 'Service',
    accessor: 'service'
  }, {
    Header: 'Producer',
    accessor: 'producer'
  }, {
    Header: 'Name',
    accessor: 'name'
  }, {
    Header: 'EAN',
    accessor: 'ean'
  }, {
    Header: 'Price',
    accessor: 'price'
  }, {
    Header: 'CeneoPrice',
    accessor: 'ceneoPrice'
  }];
  return (// <Styles>
    //   <Table columns={columns} data={products}></Table>
    // </Styles>
    __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_table_virtualized__WEBPACK_IMPORTED_MODULE_4__["default"], {
      data: products,
      columns: columns,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 7
      }
    }))
  );
};

Root.getInitialProps = async () => {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()('http://localhost:3000/api/getProducts');
  const data = await res.json();
  return {
    products: data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Root);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\skorz\OneDrive\Pulpit\DevStuff\Bushido\hurtzoo-parser\hurtzoo-parser\packages\data-display\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-table":
/*!******************************!*\
  !*** external "react-table" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-table");

/***/ }),

/***/ "react-virtualized":
/*!************************************!*\
  !*** external "react-virtualized" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-virtualized");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS12aXJ0dWFsaXplZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdGFibGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC12aXJ0dWFsaXplZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiVGFibGVWIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic29ydEJ5Iiwic29ydERpcmVjdGlvbiIsIm5ld0xpc3QiLCJfIiwiZGF0YSIsIlNvcnREaXJlY3Rpb24iLCJERVNDIiwicmV2ZXJzZSIsInNvcnRlZExpc3QiLCJfc29ydExpc3QiLCJzZXRTdGF0ZSIsIkFTQyIsInN0YXRlIiwicmVuZGVyIiwid2lkdGgiLCJoZWlnaHQiLCJsZW5ndGgiLCJfc29ydCIsImtleSIsImluZGV4Iiwic3R5bGUiLCJwYXJlbnQiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiVGFibGUiLCJjb2x1bW5zIiwiZ2V0VGFibGVQcm9wcyIsImdldFRhYmxlQm9keVByb3BzIiwiaGVhZGVyR3JvdXBzIiwicm93cyIsInByZXBhcmVSb3ciLCJ1c2VUYWJsZSIsInVzZVNvcnRCeSIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJjb2x1bW4iLCJnZXRIZWFkZXJQcm9wcyIsImdldFNvcnRCeVRvZ2dsZVByb3BzIiwiaXNTb3J0ZWQiLCJpc1NvcnRlZERlc2MiLCJyb3ciLCJpIiwiZ2V0Um93UHJvcHMiLCJjZWxscyIsImNlbGwiLCJnZXRDZWxsUHJvcHMiLCJTdHlsZXMiLCJzdHlsZWQiLCJkaXYiLCJSb290IiwicHJvZHVjdHMiLCJIZWFkZXIiLCJhY2Nlc3NvciIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsIkZldGNoIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTixTQUFxQkMsNENBQUssQ0FBQ0MsU0FBM0IsQ0FBcUM7QUFDbkNDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47O0FBRGlCLHVDQW1EUCxDQUFDO0FBQUVDLFlBQUY7QUFBVUM7QUFBVixLQUFELEtBQStCO0FBQ3pDLFVBQUlD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Q0EsUUFBTXJELElBQUksR0FBRyxNQUFNb0QsR0FBRyxDQUFDRSxJQUFKLEVBQW5CO0FBQ0EsU0FBTztBQUNMTixZQUFRLEVBQUVoRDtBQURMLEdBQVA7QUFHRCxDQU5EOztBQVFlK0MsbUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRkEsK0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29sdW1uLCBUYWJsZSwgQXV0b1NpemVyLCBTb3J0RGlyZWN0aW9uIH0gZnJvbSAncmVhY3QtdmlydHVhbGl6ZWQnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuY2xhc3MgVGFibGVWIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIGNvbnN0IHNvcnRCeSA9ICdpZCc7XHJcbiAgICBjb25zdCBzb3J0RGlyZWN0aW9uID0gU29ydERpcmVjdGlvbi5BU0M7XHJcbiAgICBjb25zdCBzb3J0ZWRMaXN0ID0gdGhpcy5fc29ydExpc3QoeyBzb3J0QnksIHNvcnREaXJlY3Rpb24gfSk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc29ydEJ5LFxyXG4gICAgICBzb3J0RGlyZWN0aW9uLFxyXG4gICAgICBzb3J0ZWRMaXN0LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwdmgnIH19PlxyXG4gICAgICAgIDxBdXRvU2l6ZXI+XHJcbiAgICAgICAgICB7KHsgd2lkdGgsIGhlaWdodCB9KSA9PiAoXHJcbiAgICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgICAgICAgICBoZWFkZXJIZWlnaHQ9ezgwfVxyXG4gICAgICAgICAgICAgIHJvd0hlaWdodD17NjB9XHJcbiAgICAgICAgICAgICAgcm93Q291bnQ9e3RoaXMucHJvcHMuZGF0YS5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgc29ydD17dGhpcy5fc29ydH1cclxuICAgICAgICAgICAgICBzb3J0Qnk9e3RoaXMuc3RhdGUuc29ydEJ5fVxyXG4gICAgICAgICAgICAgIHNvcnREaXJlY3Rpb249e3RoaXMuc3RhdGUuc29ydERpcmVjdGlvbn1cclxuICAgICAgICAgICAgICByb3dDb3VudD17dGhpcy5zdGF0ZS5zb3J0ZWRMaXN0Lmxlbmd0aH1cclxuICAgICAgICAgICAgICByb3dHZXR0ZXI9eyh7IGtleSwgaW5kZXgsIHN0eWxlLCBwYXJlbnQgfSkgPT5cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc29ydGVkTGlzdFtpbmRleF1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7T2JqZWN0LmtleXModGhpcy5wcm9wcy5kYXRhWzBdKS5tYXAoKGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD17MTAwfSBsYWJlbD17a2V5fSBuYW1lPXtrZXl9IGRhdGFLZXk9e2tleX0gLz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICB7Lyoge3RoaXMucHJvcHMuY29sdW1ucy5tYXAoKHsgSGVhZGVyLCBhY2Nlc3NvciB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8Q29sdW1uXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtIZWFkZXJ9XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e0hlYWRlcn1cclxuICAgICAgICAgICAgICAgICAgZGF0YUtleT17YWNjZXNzb3J9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkpfSAqL31cclxuICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9BdXRvU2l6ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9zb3J0TGlzdCA9ICh7IHNvcnRCeSwgc29ydERpcmVjdGlvbiB9KSA9PiB7XHJcbiAgICBsZXQgbmV3TGlzdCA9IF8uc29ydEJ5KHRoaXMucHJvcHMuZGF0YSwgW3NvcnRCeV0pO1xyXG4gICAgaWYgKHNvcnREaXJlY3Rpb24gPT09IFNvcnREaXJlY3Rpb24uREVTQykge1xyXG4gICAgICBuZXdMaXN0LnJldmVyc2UoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXdMaXN0O1xyXG4gIH07XHJcblxyXG4gIF9zb3J0ID0gKHsgc29ydEJ5LCBzb3J0RGlyZWN0aW9uIH0pID0+IHtcclxuICAgIGNvbnN0IHNvcnRlZExpc3QgPSB0aGlzLl9zb3J0TGlzdCh7IHNvcnRCeSwgc29ydERpcmVjdGlvbiB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzb3J0QnksIHNvcnREaXJlY3Rpb24sIHNvcnRlZExpc3QgfSk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFibGVWO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VUYWJsZSwgdXNlU29ydEJ5IH0gZnJvbSAncmVhY3QtdGFibGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFibGUoeyBjb2x1bW5zLCBkYXRhIH0pIHtcclxuICBjb25zdCB7XHJcbiAgICBnZXRUYWJsZVByb3BzLFxyXG4gICAgZ2V0VGFibGVCb2R5UHJvcHMsXHJcbiAgICBoZWFkZXJHcm91cHMsXHJcbiAgICByb3dzLFxyXG4gICAgcHJlcGFyZVJvdyxcclxuICB9ID0gdXNlVGFibGUoXHJcbiAgICB7XHJcbiAgICAgIGNvbHVtbnMsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9LFxyXG4gICAgdXNlU29ydEJ5LFxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8dGFibGUgey4uLmdldFRhYmxlUHJvcHMoKX0+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAoKGhlYWRlckdyb3VwKSA9PiAoXHJcbiAgICAgICAgICAgIDx0ciB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfT5cclxuICAgICAgICAgICAgICB7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoKGNvbHVtbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHRoIHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoY29sdW1uLmdldFNvcnRCeVRvZ2dsZVByb3BzKCkpfT5cclxuICAgICAgICAgICAgICAgICAge2NvbHVtbi5yZW5kZXIoJ0hlYWRlcicpfVxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmlzU29ydGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IGNvbHVtbi5pc1NvcnRlZERlc2NcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnIPCflL0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJyDwn5S8J1xyXG4gICAgICAgICAgICAgICAgICAgICAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfT5cclxuICAgICAgICAgIHtyb3dzLm1hcCgocm93LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHByZXBhcmVSb3cocm93KTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8dHIgey4uLnJvdy5nZXRSb3dQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgIHtyb3cuY2VsbHMubWFwKChjZWxsKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDx0ZCB7Li4uY2VsbC5nZXRDZWxsUHJvcHMoKX0+e2NlbGwucmVuZGVyKCdDZWxsJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgRmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL3RhYmxlJztcclxuaW1wb3J0IFRhYmxlViBmcm9tICcuLi9jb21wb25lbnRzL3RhYmxlLXZpcnR1YWxpemVkJztcclxuXHJcbmNvbnN0IFN0eWxlcyA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMXJlbTtcclxuXHJcbiAgdGFibGUge1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuXHJcbiAgICB0ciB7XHJcbiAgICAgIDpsYXN0LWNoaWxkIHtcclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoLFxyXG4gICAgdGQge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcclxuXHJcbiAgICAgIDpsYXN0LWNoaWxkIHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBSb290ID0gKHsgcHJvZHVjdHMgfSkgPT4ge1xyXG4gIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIEhlYWRlcjogJ0lEJyxcclxuICAgICAgYWNjZXNzb3I6ICdpZCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBIZWFkZXI6ICdTZXJ2aWNlJyxcclxuICAgICAgYWNjZXNzb3I6ICdzZXJ2aWNlJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIEhlYWRlcjogJ1Byb2R1Y2VyJyxcclxuICAgICAgYWNjZXNzb3I6ICdwcm9kdWNlcicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBIZWFkZXI6ICdOYW1lJyxcclxuICAgICAgYWNjZXNzb3I6ICduYW1lJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIEhlYWRlcjogJ0VBTicsXHJcbiAgICAgIGFjY2Vzc29yOiAnZWFuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIEhlYWRlcjogJ1ByaWNlJyxcclxuICAgICAgYWNjZXNzb3I6ICdwcmljZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBIZWFkZXI6ICdDZW5lb1ByaWNlJyxcclxuICAgICAgYWNjZXNzb3I6ICdjZW5lb1ByaWNlJyxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vIDxTdHlsZXM+XHJcbiAgICAvLyAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXtwcm9kdWN0c30+PC9UYWJsZT5cclxuICAgIC8vIDwvU3R5bGVzPlxyXG4gICAgPD5cclxuICAgICAgPFRhYmxlViBkYXRhPXtwcm9kdWN0c30gY29sdW1ucz17Y29sdW1uc30gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5Sb290LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBGZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9nZXRQcm9kdWN0cycpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9kdWN0czogZGF0YSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm9vdDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy11bmZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10YWJsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC12aXJ0dWFsaXplZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9