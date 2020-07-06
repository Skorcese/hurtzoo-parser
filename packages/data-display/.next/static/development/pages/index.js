(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\index.js"],{

/***/ "./components/table.js":
/*!*****************************!*\
  !*** ./components/table.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Table; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\skorz\\OneDrive\\Pulpit\\DevStuff\\Bushido\\hurtzoo-parser\\hurtzoo-parser\\packages\\data-display\\components\\table.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Table(_ref) {
  _s();

  var _this = this;

  var columns = _ref.columns,
      data = _ref.data;

  var _useTable = Object(react_table__WEBPACK_IMPORTED_MODULE_2__["useTable"])({
    columns: columns,
    data: data
  }, react_table__WEBPACK_IMPORTED_MODULE_2__["useSortBy"]),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      rows = _useTable.rows,
      prepareRow = _useTable.prepareRow;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("table", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getTableProps(), {
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
  }, headerGroups.map(function (headerGroup) {
    return __jsx("tr", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, headerGroup.getHeaderGroupProps(), {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }), headerGroup.headers.map(function (column) {
      return __jsx("th", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, column.getHeaderProps(column.getSortByToggleProps()), {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }
      }), column.render('Header'), __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 19
        }
      }, column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : ''));
    }));
  })), __jsx("tbody", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getTableBodyProps(), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }), rows.map(function (row, i) {
    prepareRow(row);
    return __jsx("tr", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row.getRowProps(), {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }
    }), row.cells.map(function (cell) {
      return __jsx("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cell.getCellProps(), {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 19
        }
      }), cell.render('Cell'));
    }));
  }))));
}

_s(Table, "BYNTWeoXdryq+6lvDEiS5kf/9Fc=", false, function () {
  return [react_table__WEBPACK_IMPORTED_MODULE_2__["useTable"]];
});

_c = Table;

var _c;

$RefreshReg$(_c, "Table");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/fetch/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/fetch/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals self */var fetch=self.fetch.bind(self);module.exports=fetch;module.exports.default=module.exports;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cskorz%5COneDrive%5CPulpit%5CDevStuff%5CBushido%5Churtzoo-parser%5Churtzoo-parser%5Cpackages%5Cdata-display%5Cpages%5Cindex.js!./":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cskorz%5COneDrive%5CPulpit%5CDevStuff%5CBushido%5Churtzoo-parser%5Churtzoo-parser%5Cpackages%5Cdata-display%5Cpages%5Cindex.js ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(/*! ./pages/index.js */ "./pages/index.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-table/dist/react-table.development.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-table/dist/react-table.development.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! react */ "./node_modules/react/index.js")) :
  undefined;
}(this, (function (exports, React) { 'use strict';

  React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];

    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }

    return (hint === "string" ? String : Number)(input);
  }

  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");

    return typeof key === "symbol" ? key : String(key);
  }

  var renderErr = 'Renderer Error ☝️';
  var actions = {
    init: 'init'
  };
  var defaultColumn = {
    Cell: function Cell(_ref) {
      var _ref$value = _ref.value,
          value = _ref$value === void 0 ? '' : _ref$value;
      return value;
    },
    width: 150,
    minWidth: 0,
    maxWidth: Number.MAX_SAFE_INTEGER
  };

  function mergeProps() {
    for (var _len = arguments.length, propList = new Array(_len), _key = 0; _key < _len; _key++) {
      propList[_key] = arguments[_key];
    }

    return propList.reduce(function (props, next) {
      var style = next.style,
          className = next.className,
          rest = _objectWithoutPropertiesLoose(next, ["style", "className"]);

      props = _extends({}, props, {}, rest);

      if (style) {
        props.style = props.style ? _extends({}, props.style || {}, {}, style || {}) : style;
      }

      if (className) {
        props.className = props.className ? props.className + ' ' + className : className;
      }

      if (props.className === '') {
        delete props.className;
      }

      return props;
    }, {});
  }

  function handlePropGetter(prevProps, userProps, meta) {
    // Handle a lambda, pass it the previous props
    if (typeof userProps === 'function') {
      return handlePropGetter({}, userProps(prevProps, meta));
    } // Handle an array, merge each item as separate props


    if (Array.isArray(userProps)) {
      return mergeProps.apply(void 0, [prevProps].concat(userProps));
    } // Handle an object by default, merge the two objects


    return mergeProps(prevProps, userProps);
  }

  var makePropGetter = function makePropGetter(hooks, meta) {
    if (meta === void 0) {
      meta = {};
    }

    return function (userProps) {
      if (userProps === void 0) {
        userProps = {};
      }

      return [].concat(hooks, [userProps]).reduce(function (prev, next) {
        return handlePropGetter(prev, next, _extends({}, meta, {
          userProps: userProps
        }));
      }, {});
    };
  };
  var reduceHooks = function reduceHooks(hooks, initial, meta, allowUndefined) {
    if (meta === void 0) {
      meta = {};
    }

    return hooks.reduce(function (prev, next) {
      var nextValue = next(prev, meta);

      if (true) {
        if (!allowUndefined && typeof nextValue === 'undefined') {
          console.info(next);
          throw new Error('React Table: A reducer hook ☝️ just returned undefined! This is not allowed.');
        }
      }

      return nextValue;
    }, initial);
  };
  var loopHooks = function loopHooks(hooks, context, meta) {
    if (meta === void 0) {
      meta = {};
    }

    return hooks.forEach(function (hook) {
      var nextValue = hook(context, meta);

      if (true) {
        if (typeof nextValue !== 'undefined') {
          console.info(hook, nextValue);
          throw new Error('React Table: A loop-type hook ☝️ just returned a value! This is not allowed.');
        }
      }
    });
  };
  function ensurePluginOrder(plugins, befores, pluginName, afters) {
    if ( true && afters) {
      throw new Error("Defining plugins in the \"after\" section of ensurePluginOrder is no longer supported (see plugin " + pluginName + ")");
    }

    var pluginIndex = plugins.findIndex(function (plugin) {
      return plugin.pluginName === pluginName;
    });

    if (pluginIndex === -1) {
      if (true) {
        throw new Error("The plugin \"" + pluginName + "\" was not found in the plugin list!\nThis usually means you need to need to name your plugin hook by setting the 'pluginName' property of the hook function, eg:\n\n  " + pluginName + ".pluginName = '" + pluginName + "'\n");
      }
    }

    befores.forEach(function (before) {
      var beforeIndex = plugins.findIndex(function (plugin) {
        return plugin.pluginName === before;
      });

      if (beforeIndex > -1 && beforeIndex > pluginIndex) {
        if (true) {
          throw new Error("React Table: The " + pluginName + " plugin hook must be placed after the " + before + " plugin hook!");
        }
      }
    });
  }
  function functionalUpdate(updater, old) {
    return typeof updater === 'function' ? updater(old) : updater;
  }
  function useGetLatest(obj) {
    var ref = React.useRef();
    ref.current = obj;
    return React.useCallback(function () {
      return ref.current;
    }, []);
  } // SSR has issues with useLayoutEffect still, so use useEffect during SSR

  var safeUseLayoutEffect = typeof document !== 'undefined' ? React.useLayoutEffect : React.useEffect;
  function useMountedLayoutEffect(fn, deps) {
    var mountedRef = React.useRef(false);
    safeUseLayoutEffect(function () {
      if (mountedRef.current) {
        fn();
      }

      mountedRef.current = true; // eslint-disable-next-line
    }, deps);
  }
  function useAsyncDebounce(defaultFn, defaultWait) {
    if (defaultWait === void 0) {
      defaultWait = 0;
    }

    var debounceRef = React.useRef({});
    var getDefaultFn = useGetLatest(defaultFn);
    var getDefaultWait = useGetLatest(defaultWait);
    return React.useCallback(
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var _len2,
            args,
            _key2,
            _args2 = arguments;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                for (_len2 = _args2.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  args[_key2] = _args2[_key2];
                }

                if (!debounceRef.current.promise) {
                  debounceRef.current.promise = new Promise(function (resolve, reject) {
                    debounceRef.current.resolve = resolve;
                    debounceRef.current.reject = reject;
                  });
                }

                if (debounceRef.current.timeout) {
                  clearTimeout(debounceRef.current.timeout);
                }

                debounceRef.current.timeout = setTimeout(
                /*#__PURE__*/
                _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          delete debounceRef.current.timeout;
                          _context.prev = 1;
                          _context.t0 = debounceRef.current;
                          _context.next = 5;
                          return getDefaultFn().apply(void 0, args);

                        case 5:
                          _context.t1 = _context.sent;

                          _context.t0.resolve.call(_context.t0, _context.t1);

                          _context.next = 12;
                          break;

                        case 9:
                          _context.prev = 9;
                          _context.t2 = _context["catch"](1);
                          debounceRef.current.reject(_context.t2);

                        case 12:
                          _context.prev = 12;
                          delete debounceRef.current.promise;
                          return _context.finish(12);

                        case 15:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, null, [[1, 9, 12, 15]]);
                })), getDefaultWait());
                return _context2.abrupt("return", debounceRef.current.promise);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function () {
        return _ref2.apply(this, arguments);
      };
    }(), [getDefaultFn, getDefaultWait]);
  }
  function makeRenderer(instance, column, meta) {
    if (meta === void 0) {
      meta = {};
    }

    return function (type, userProps) {
      if (userProps === void 0) {
        userProps = {};
      }

      var Comp = typeof type === 'string' ? column[type] : type;

      if (typeof Comp === 'undefined') {
        console.info(column);
        throw new Error(renderErr);
      }

      return flexRender(Comp, _extends({}, instance, {
        column: column
      }, meta, {}, userProps));
    };
  }
  function flexRender(Comp, props) {
    return isReactComponent(Comp) ? React.createElement(Comp, props) : Comp;
  }

  function isReactComponent(component) {
    return isClassComponent(component) || typeof component === 'function' || isExoticComponent(component);
  }

  function isClassComponent(component) {
    return typeof component === 'function' && function () {
      var proto = Object.getPrototypeOf(component);
      return proto.prototype && proto.prototype.isReactComponent;
    }();
  }

  function isExoticComponent(component) {
    return typeof component === 'object' && typeof component.$$typeof === 'symbol' && ['react.memo', 'react.forward_ref'].includes(component.$$typeof.description);
  }

  function linkColumnStructure(columns, parent, depth) {
    if (depth === void 0) {
      depth = 0;
    }

    return columns.map(function (column) {
      column = _extends({}, column, {
        parent: parent,
        depth: depth
      });
      assignColumnAccessor(column);

      if (column.columns) {
        column.columns = linkColumnStructure(column.columns, column, depth + 1);
      }

      return column;
    });
  }
  function flattenColumns(columns) {
    return flattenBy(columns, 'columns');
  }
  function assignColumnAccessor(column) {
    // First check for string accessor
    var id = column.id,
        accessor = column.accessor,
        Header = column.Header;

    if (typeof accessor === 'string') {
      id = id || accessor;
      var accessorPath = accessor.split('.');

      accessor = function accessor(row) {
        return getBy(row, accessorPath);
      };
    }

    if (!id && typeof Header === 'string' && Header) {
      id = Header;
    }

    if (!id && column.columns) {
      console.error(column);
      throw new Error('A column ID (or unique "Header" value) is required!');
    }

    if (!id) {
      console.error(column);
      throw new Error('A column ID (or string accessor) is required!');
    }

    Object.assign(column, {
      id: id,
      accessor: accessor
    });
    return column;
  }
  function decorateColumn(column, userDefaultColumn) {
    if (!userDefaultColumn) {
      throw new Error();
    }

    Object.assign(column, _extends({
      // Make sure there is a fallback header, just in case
      Header: function Header() {
        return React.createElement(React.Fragment, null, "\xA0");
      },
      Footer: function Footer() {
        return React.createElement(React.Fragment, null, "\xA0");
      }
    }, defaultColumn, {}, userDefaultColumn, {}, column));
    return column;
  } // Build the header groups from the bottom up

  function makeHeaderGroups(allColumns, defaultColumn) {
    var headerGroups = [];
    var scanColumns = allColumns;
    var uid = 0;

    var getUID = function getUID() {
      return uid++;
    };

    var _loop = function _loop() {
      // The header group we are creating
      var headerGroup = {
        headers: []
      }; // The parent columns we're going to scan next

      var parentColumns = [];
      var hasParents = scanColumns.some(function (d) {
        return d.parent;
      }); // Scan each column for parents

      scanColumns.forEach(function (column) {
        // What is the latest (last) parent column?
        var latestParentColumn = [].concat(parentColumns).reverse()[0];
        var newParent;

        if (hasParents) {
          // If the column has a parent, add it if necessary
          if (column.parent) {
            newParent = _extends({}, column.parent, {
              originalId: column.parent.id,
              id: column.parent.id + "_" + getUID(),
              headers: [column]
            });
          } else {
            // If other columns have parents, we'll need to add a place holder if necessary
            var originalId = column.id + "_placeholder";
            newParent = decorateColumn({
              originalId: originalId,
              id: column.id + "_placeholder_" + getUID(),
              placeholderOf: column,
              headers: [column]
            }, defaultColumn);
          } // If the resulting parent columns are the same, just add
          // the column and increment the header span


          if (latestParentColumn && latestParentColumn.originalId === newParent.originalId) {
            latestParentColumn.headers.push(column);
          } else {
            parentColumns.push(newParent);
          }
        }

        headerGroup.headers.push(column);
      });
      headerGroups.push(headerGroup); // Start scanning the parent columns

      scanColumns = parentColumns;
    };

    while (scanColumns.length) {
      _loop();
    }

    return headerGroups.reverse();
  }
  var pathObjCache = new Map();
  function getBy(obj, path, def) {
    if (!path) {
      return obj;
    }

    var cacheKey = typeof path === 'function' ? path : JSON.stringify(path);

    var pathObj = pathObjCache.get(cacheKey) || function () {
      var pathObj = makePathArray(path);
      pathObjCache.set(cacheKey, pathObj);
      return pathObj;
    }();

    var val;

    try {
      val = pathObj.reduce(function (cursor, pathPart) {
        return cursor[pathPart];
      }, obj);
    } catch (e) {// continue regardless of error
    }

    return typeof val !== 'undefined' ? val : def;
  }
  function getFirstDefined() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    for (var i = 0; i < args.length; i += 1) {
      if (typeof args[i] !== 'undefined') {
        return args[i];
      }
    }
  }
  function isFunction(a) {
    if (typeof a === 'function') {
      return a;
    }
  }
  function flattenBy(arr, key) {
    var flat = [];

    var recurse = function recurse(arr) {
      arr.forEach(function (d) {
        if (!d[key]) {
          flat.push(d);
        } else {
          recurse(d[key]);
        }
      });
    };

    recurse(arr);
    return flat;
  }
  function expandRows(rows, _ref) {
    var manualExpandedKey = _ref.manualExpandedKey,
        expanded = _ref.expanded,
        _ref$expandSubRows = _ref.expandSubRows,
        expandSubRows = _ref$expandSubRows === void 0 ? true : _ref$expandSubRows;
    var expandedRows = [];

    var handleRow = function handleRow(row) {
      row.isExpanded = row.original && row.original[manualExpandedKey] || expanded[row.id];
      row.canExpand = row.subRows && !!row.subRows.length;
      expandedRows.push(row);

      if (expandSubRows && row.subRows && row.subRows.length && row.isExpanded) {
        row.subRows.forEach(handleRow);
      }
    };

    rows.forEach(handleRow);
    return expandedRows;
  }
  function getFilterMethod(filter, userFilterTypes, filterTypes) {
    return isFunction(filter) || userFilterTypes[filter] || filterTypes[filter] || filterTypes.text;
  }
  function shouldAutoRemoveFilter(autoRemove, value, column) {
    return autoRemove ? autoRemove(value, column) : typeof value === 'undefined';
  }
  function unpreparedAccessWarning() {
    throw new Error('React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.');
  }
  var passiveSupported = null;
  function passiveEventSupported() {
    // memoize support to avoid adding multiple test events
    if (typeof passiveSupported === 'boolean') return passiveSupported;
    var supported = false;

    try {
      var options = {
        get passive() {
          supported = true;
          return false;
        }

      };
      window.addEventListener('test', null, options);
      window.removeEventListener('test', null, options);
    } catch (err) {
      supported = false;
    }

    passiveSupported = supported;
    return passiveSupported;
  } //

  var reOpenBracket = /\[/g;
  var reCloseBracket = /\]/g;

  function makePathArray(obj) {
    return flattenDeep(obj) // remove all periods in parts
    .map(function (d) {
      return String(d).replace('.', '_');
    }) // join parts using period
    .join('.') // replace brackets with periods
    .replace(reOpenBracket, '.').replace(reCloseBracket, '') // split it back out on periods
    .split('.');
  }

  function flattenDeep(arr, newArr) {
    if (newArr === void 0) {
      newArr = [];
    }

    if (!Array.isArray(arr)) {
      newArr.push(arr);
    } else {
      for (var i = 0; i < arr.length; i += 1) {
        flattenDeep(arr[i], newArr);
      }
    }

    return newArr;
  }

  var defaultGetTableProps = function defaultGetTableProps(props) {
    return _extends({
      role: 'table'
    }, props);
  };

  var defaultGetTableBodyProps = function defaultGetTableBodyProps(props) {
    return _extends({
      role: 'rowgroup'
    }, props);
  };

  var defaultGetHeaderProps = function defaultGetHeaderProps(props, _ref) {
    var column = _ref.column;
    return _extends({
      key: "header_" + column.id,
      colSpan: column.totalVisibleHeaderCount,
      role: 'columnheader'
    }, props);
  };

  var defaultGetFooterProps = function defaultGetFooterProps(props, _ref2) {
    var column = _ref2.column;
    return _extends({
      key: "footer_" + column.id,
      colSpan: column.totalVisibleHeaderCount
    }, props);
  };

  var defaultGetHeaderGroupProps = function defaultGetHeaderGroupProps(props, _ref3) {
    var index = _ref3.index;
    return _extends({
      key: "headerGroup_" + index,
      role: 'row'
    }, props);
  };

  var defaultGetFooterGroupProps = function defaultGetFooterGroupProps(props, _ref4) {
    var index = _ref4.index;
    return _extends({
      key: "footerGroup_" + index
    }, props);
  };

  var defaultGetRowProps = function defaultGetRowProps(props, _ref5) {
    var row = _ref5.row;
    return _extends({
      key: "row_" + row.id,
      role: 'row'
    }, props);
  };

  var defaultGetCellProps = function defaultGetCellProps(props, _ref6) {
    var cell = _ref6.cell;
    return _extends({
      key: "cell_" + cell.row.id + "_" + cell.column.id,
      role: 'cell'
    }, props);
  };

  function makeDefaultPluginHooks() {
    return {
      useOptions: [],
      stateReducers: [],
      useControlledState: [],
      columns: [],
      columnsDeps: [],
      allColumns: [],
      allColumnsDeps: [],
      accessValue: [],
      materializedColumns: [],
      materializedColumnsDeps: [],
      useInstanceAfterData: [],
      visibleColumns: [],
      visibleColumnsDeps: [],
      headerGroups: [],
      headerGroupsDeps: [],
      useInstanceBeforeDimensions: [],
      useInstance: [],
      prepareRow: [],
      getTableProps: [defaultGetTableProps],
      getTableBodyProps: [defaultGetTableBodyProps],
      getHeaderGroupProps: [defaultGetHeaderGroupProps],
      getFooterGroupProps: [defaultGetFooterGroupProps],
      getHeaderProps: [defaultGetHeaderProps],
      getFooterProps: [defaultGetFooterProps],
      getRowProps: [defaultGetRowProps],
      getCellProps: [defaultGetCellProps],
      useFinalInstance: []
    };
  }

  actions.resetHiddenColumns = 'resetHiddenColumns';
  actions.toggleHideColumn = 'toggleHideColumn';
  actions.setHiddenColumns = 'setHiddenColumns';
  actions.toggleHideAllColumns = 'toggleHideAllColumns';
  var useColumnVisibility = function useColumnVisibility(hooks) {
    hooks.getToggleHiddenProps = [defaultGetToggleHiddenProps];
    hooks.getToggleHideAllColumnsProps = [defaultGetToggleHideAllColumnsProps];
    hooks.stateReducers.push(reducer);
    hooks.useInstanceBeforeDimensions.push(useInstanceBeforeDimensions);
    hooks.headerGroupsDeps.push(function (deps, _ref) {
      var instance = _ref.instance;
      return [].concat(deps, [instance.state.hiddenColumns]);
    });
    hooks.useInstance.push(useInstance);
  };
  useColumnVisibility.pluginName = 'useColumnVisibility';

  var defaultGetToggleHiddenProps = function defaultGetToggleHiddenProps(props, _ref2) {
    var column = _ref2.column;
    return [props, {
      onChange: function onChange(e) {
        column.toggleHidden(!e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: column.isVisible,
      title: 'Toggle Column Visible'
    }];
  };

  var defaultGetToggleHideAllColumnsProps = function defaultGetToggleHideAllColumnsProps(props, _ref3) {
    var instance = _ref3.instance;
    return [props, {
      onChange: function onChange(e) {
        instance.toggleHideAllColumns(!e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: !instance.allColumnsHidden && !instance.state.hiddenColumns.length,
      title: 'Toggle All Columns Hidden',
      indeterminate: !instance.allColumnsHidden && instance.state.hiddenColumns.length
    }];
  };

  function reducer(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        hiddenColumns: []
      }, state);
    }

    if (action.type === actions.resetHiddenColumns) {
      return _extends({}, state, {
        hiddenColumns: instance.initialState.hiddenColumns || []
      });
    }

    if (action.type === actions.toggleHideColumn) {
      var should = typeof action.value !== 'undefined' ? action.value : !state.hiddenColumns.includes(action.columnId);
      var hiddenColumns = should ? [].concat(state.hiddenColumns, [action.columnId]) : state.hiddenColumns.filter(function (d) {
        return d !== action.columnId;
      });
      return _extends({}, state, {
        hiddenColumns: hiddenColumns
      });
    }

    if (action.type === actions.setHiddenColumns) {
      return _extends({}, state, {
        hiddenColumns: functionalUpdate(action.value, state.hiddenColumns)
      });
    }

    if (action.type === actions.toggleHideAllColumns) {
      var shouldAll = typeof action.value !== 'undefined' ? action.value : !state.hiddenColumns.length;
      return _extends({}, state, {
        hiddenColumns: shouldAll ? instance.allColumns.map(function (d) {
          return d.id;
        }) : []
      });
    }
  }

  function useInstanceBeforeDimensions(instance) {
    var headers = instance.headers,
        hiddenColumns = instance.state.hiddenColumns;
    var isMountedRef = React.useRef(false);

    if (!isMountedRef.current) ;

    var handleColumn = function handleColumn(column, parentVisible) {
      column.isVisible = parentVisible && !hiddenColumns.includes(column.id);
      var totalVisibleHeaderCount = 0;

      if (column.headers && column.headers.length) {
        column.headers.forEach(function (subColumn) {
          return totalVisibleHeaderCount += handleColumn(subColumn, column.isVisible);
        });
      } else {
        totalVisibleHeaderCount = column.isVisible ? 1 : 0;
      }

      column.totalVisibleHeaderCount = totalVisibleHeaderCount;
      return totalVisibleHeaderCount;
    };

    var totalVisibleHeaderCount = 0;
    headers.forEach(function (subHeader) {
      return totalVisibleHeaderCount += handleColumn(subHeader, true);
    });
  }

  function useInstance(instance) {
    var columns = instance.columns,
        flatHeaders = instance.flatHeaders,
        dispatch = instance.dispatch,
        allColumns = instance.allColumns,
        getHooks = instance.getHooks,
        hiddenColumns = instance.state.hiddenColumns,
        _instance$autoResetHi = instance.autoResetHiddenColumns,
        autoResetHiddenColumns = _instance$autoResetHi === void 0 ? true : _instance$autoResetHi;
    var getInstance = useGetLatest(instance);
    var allColumnsHidden = allColumns.length === hiddenColumns.length;
    var toggleHideColumn = React.useCallback(function (columnId, value) {
      return dispatch({
        type: actions.toggleHideColumn,
        columnId: columnId,
        value: value
      });
    }, [dispatch]);
    var setHiddenColumns = React.useCallback(function (value) {
      return dispatch({
        type: actions.setHiddenColumns,
        value: value
      });
    }, [dispatch]);
    var toggleHideAllColumns = React.useCallback(function (value) {
      return dispatch({
        type: actions.toggleHideAllColumns,
        value: value
      });
    }, [dispatch]);
    var getToggleHideAllColumnsProps = makePropGetter(getHooks().getToggleHideAllColumnsProps, {
      instance: getInstance()
    });
    flatHeaders.forEach(function (column) {
      column.toggleHidden = function (value) {
        dispatch({
          type: actions.toggleHideColumn,
          columnId: column.id,
          value: value
        });
      };

      column.getToggleHiddenProps = makePropGetter(getHooks().getToggleHiddenProps, {
        instance: getInstance(),
        column: column
      });
    });
    var getAutoResetHiddenColumns = useGetLatest(autoResetHiddenColumns);
    useMountedLayoutEffect(function () {
      if (getAutoResetHiddenColumns()) {
        dispatch({
          type: actions.resetHiddenColumns
        });
      }
    }, [dispatch, columns]);
    Object.assign(instance, {
      allColumnsHidden: allColumnsHidden,
      toggleHideColumn: toggleHideColumn,
      setHiddenColumns: setHiddenColumns,
      toggleHideAllColumns: toggleHideAllColumns,
      getToggleHideAllColumnsProps: getToggleHideAllColumnsProps
    });
  }

  var defaultInitialState = {};
  var defaultColumnInstance = {};

  var defaultReducer = function defaultReducer(state, action, prevState) {
    return state;
  };

  var defaultGetSubRows = function defaultGetSubRows(row, index) {
    return row.subRows || [];
  };

  var defaultGetRowId = function defaultGetRowId(row, index, parent) {
    return "" + (parent ? [parent.id, index].join('.') : index);
  };

  var defaultUseControlledState = function defaultUseControlledState(d) {
    return d;
  };

  function applyDefaults(props) {
    var _props$initialState = props.initialState,
        initialState = _props$initialState === void 0 ? defaultInitialState : _props$initialState,
        _props$defaultColumn = props.defaultColumn,
        defaultColumn = _props$defaultColumn === void 0 ? defaultColumnInstance : _props$defaultColumn,
        _props$getSubRows = props.getSubRows,
        getSubRows = _props$getSubRows === void 0 ? defaultGetSubRows : _props$getSubRows,
        _props$getRowId = props.getRowId,
        getRowId = _props$getRowId === void 0 ? defaultGetRowId : _props$getRowId,
        _props$stateReducer = props.stateReducer,
        stateReducer = _props$stateReducer === void 0 ? defaultReducer : _props$stateReducer,
        _props$useControlledS = props.useControlledState,
        useControlledState = _props$useControlledS === void 0 ? defaultUseControlledState : _props$useControlledS,
        rest = _objectWithoutPropertiesLoose(props, ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"]);

    return _extends({}, rest, {
      initialState: initialState,
      defaultColumn: defaultColumn,
      getSubRows: getSubRows,
      getRowId: getRowId,
      stateReducer: stateReducer,
      useControlledState: useControlledState
    });
  }

  var useTable = function useTable(props) {
    for (var _len = arguments.length, plugins = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      plugins[_key - 1] = arguments[_key];
    }

    // Apply default props
    props = applyDefaults(props); // Add core plugins

    plugins = [useColumnVisibility].concat(plugins); // Create the table instance

    var instanceRef = React.useRef({}); // Create a getter for the instance (helps avoid a lot of potential memory leaks)

    var getInstance = useGetLatest(instanceRef.current); // Assign the props, plugins and hooks to the instance

    Object.assign(getInstance(), _extends({}, props, {
      plugins: plugins,
      hooks: makeDefaultPluginHooks()
    })); // Allow plugins to register hooks as early as possible

    plugins.filter(Boolean).forEach(function (plugin) {
      plugin(getInstance().hooks);
    }); // Consume all hooks and make a getter for them

    var getHooks = useGetLatest(getInstance().hooks);
    getInstance().getHooks = getHooks;
    delete getInstance().hooks; // Allow useOptions hooks to modify the options coming into the table

    Object.assign(getInstance(), reduceHooks(getHooks().useOptions, applyDefaults(props)));

    var _getInstance = getInstance(),
        data = _getInstance.data,
        userColumns = _getInstance.columns,
        initialState = _getInstance.initialState,
        defaultColumn = _getInstance.defaultColumn,
        getSubRows = _getInstance.getSubRows,
        getRowId = _getInstance.getRowId,
        stateReducer = _getInstance.stateReducer,
        useControlledState = _getInstance.useControlledState; // Setup user reducer ref


    var getStateReducer = useGetLatest(stateReducer); // Build the reducer

    var reducer = React.useCallback(function (state, action) {
      // Detect invalid actions
      if (!action.type) {
        console.info({
          action: action
        });
        throw new Error('Unknown Action 👆');
      } // Reduce the state from all plugin reducers


      return [].concat(getHooks().stateReducers, Array.isArray(getStateReducer()) ? getStateReducer() : [getStateReducer()]).reduce(function (s, handler) {
        return handler(s, action, state, getInstance()) || s;
      }, state);
    }, [getHooks, getStateReducer, getInstance]); // Start the reducer

    var _React$useReducer = React.useReducer(reducer, undefined, function () {
      return reducer(initialState, {
        type: actions.init
      });
    }),
        reducerState = _React$useReducer[0],
        dispatch = _React$useReducer[1]; // Allow the user to control the final state with hooks


    var state = reduceHooks([].concat(getHooks().useControlledState, [useControlledState]), reducerState, {
      instance: getInstance()
    });
    Object.assign(getInstance(), {
      state: state,
      dispatch: dispatch
    }); // Decorate All the columns

    var columns = React.useMemo(function () {
      return linkColumnStructure(reduceHooks(getHooks().columns, userColumns, {
        instance: getInstance()
      }));
    }, [getHooks, getInstance, userColumns].concat(reduceHooks(getHooks().columnsDeps, [], {
      instance: getInstance()
    })));
    getInstance().columns = columns; // Get the flat list of all columns and allow hooks to decorate
    // those columns (and trigger this memoization via deps)

    var allColumns = React.useMemo(function () {
      return reduceHooks(getHooks().allColumns, flattenColumns(columns), {
        instance: getInstance()
      }).map(assignColumnAccessor);
    }, [columns, getHooks, getInstance].concat(reduceHooks(getHooks().allColumnsDeps, [], {
      instance: getInstance()
    })));
    getInstance().allColumns = allColumns; // Access the row model using initial columns

    var _React$useMemo = React.useMemo(function () {
      var rows = [];
      var flatRows = [];
      var rowsById = {};
      var allColumnsQueue = [].concat(allColumns);

      while (allColumnsQueue.length) {
        var column = allColumnsQueue.shift();
        accessRowsForColumn({
          data: data,
          rows: rows,
          flatRows: flatRows,
          rowsById: rowsById,
          column: column,
          getRowId: getRowId,
          getSubRows: getSubRows,
          accessValueHooks: getHooks().accessValue,
          getInstance: getInstance
        });
      }

      return [rows, flatRows, rowsById];
    }, [allColumns, data, getRowId, getSubRows, getHooks, getInstance]),
        rows = _React$useMemo[0],
        flatRows = _React$useMemo[1],
        rowsById = _React$useMemo[2];

    Object.assign(getInstance(), {
      rows: rows,
      initialRows: [].concat(rows),
      flatRows: flatRows,
      rowsById: rowsById // materializedColumns,

    });
    loopHooks(getHooks().useInstanceAfterData, getInstance()); // Get the flat list of all columns AFTER the rows
    // have been access, and allow hooks to decorate
    // those columns (and trigger this memoization via deps)

    var visibleColumns = React.useMemo(function () {
      return reduceHooks(getHooks().visibleColumns, allColumns, {
        instance: getInstance()
      }).map(function (d) {
        return decorateColumn(d, defaultColumn);
      });
    }, [getHooks, allColumns, getInstance, defaultColumn].concat(reduceHooks(getHooks().visibleColumnsDeps, [], {
      instance: getInstance()
    }))); // Combine new visible columns with all columns

    allColumns = React.useMemo(function () {
      var columns = [].concat(visibleColumns);
      allColumns.forEach(function (column) {
        if (!columns.find(function (d) {
          return d.id === column.id;
        })) {
          columns.push(column);
        }
      });
      return columns;
    }, [allColumns, visibleColumns]);
    getInstance().allColumns = allColumns;

    if (true) {
      var duplicateColumns = allColumns.filter(function (column, i) {
        return allColumns.findIndex(function (d) {
          return d.id === column.id;
        }) !== i;
      });

      if (duplicateColumns.length) {
        console.info(allColumns);
        throw new Error("Duplicate columns were found with ids: \"" + duplicateColumns.map(function (d) {
          return d.id;
        }).join(', ') + "\" in the columns array above");
      }
    } // Make the headerGroups


    var headerGroups = React.useMemo(function () {
      return reduceHooks(getHooks().headerGroups, makeHeaderGroups(visibleColumns, defaultColumn), getInstance());
    }, [getHooks, visibleColumns, defaultColumn, getInstance].concat(reduceHooks(getHooks().headerGroupsDeps, [], {
      instance: getInstance()
    })));
    getInstance().headerGroups = headerGroups; // Get the first level of headers

    var headers = React.useMemo(function () {
      return headerGroups.length ? headerGroups[0].headers : [];
    }, [headerGroups]);
    getInstance().headers = headers; // Provide a flat header list for utilities

    getInstance().flatHeaders = headerGroups.reduce(function (all, headerGroup) {
      return [].concat(all, headerGroup.headers);
    }, []);
    loopHooks(getHooks().useInstanceBeforeDimensions, getInstance()); // Filter columns down to visible ones

    var visibleColumnsDep = visibleColumns.filter(function (d) {
      return d.isVisible;
    }).map(function (d) {
      return d.id;
    }).sort().join('_');
    visibleColumns = React.useMemo(function () {
      return visibleColumns.filter(function (d) {
        return d.isVisible;
      });
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [visibleColumns, visibleColumnsDep]);
    getInstance().visibleColumns = visibleColumns; // Header Visibility is needed by this point

    var _calculateHeaderWidth = calculateHeaderWidths(headers),
        totalColumnsMinWidth = _calculateHeaderWidth[0],
        totalColumnsWidth = _calculateHeaderWidth[1],
        totalColumnsMaxWidth = _calculateHeaderWidth[2];

    getInstance().totalColumnsMinWidth = totalColumnsMinWidth;
    getInstance().totalColumnsWidth = totalColumnsWidth;
    getInstance().totalColumnsMaxWidth = totalColumnsMaxWidth;
    loopHooks(getHooks().useInstance, getInstance()) // Each materialized header needs to be assigned a render function and other
    // prop getter properties here.
    ;
    [].concat(getInstance().flatHeaders, getInstance().allColumns).forEach(function (column) {
      // Give columns/headers rendering power
      column.render = makeRenderer(getInstance(), column); // Give columns/headers a default getHeaderProps

      column.getHeaderProps = makePropGetter(getHooks().getHeaderProps, {
        instance: getInstance(),
        column: column
      }); // Give columns/headers a default getFooterProps

      column.getFooterProps = makePropGetter(getHooks().getFooterProps, {
        instance: getInstance(),
        column: column
      });
    });
    getInstance().headerGroups = React.useMemo(function () {
      return headerGroups.filter(function (headerGroup, i) {
        // Filter out any headers and headerGroups that don't have visible columns
        headerGroup.headers = headerGroup.headers.filter(function (column) {
          var recurse = function recurse(headers) {
            return headers.filter(function (column) {
              if (column.headers) {
                return recurse(column.headers);
              }

              return column.isVisible;
            }).length;
          };

          if (column.headers) {
            return recurse(column.headers);
          }

          return column.isVisible;
        }); // Give headerGroups getRowProps

        if (headerGroup.headers.length) {
          headerGroup.getHeaderGroupProps = makePropGetter(getHooks().getHeaderGroupProps, {
            instance: getInstance(),
            headerGroup: headerGroup,
            index: i
          });
          headerGroup.getFooterGroupProps = makePropGetter(getHooks().getFooterGroupProps, {
            instance: getInstance(),
            headerGroup: headerGroup,
            index: i
          });
          return true;
        }

        return false;
      });
    }, [headerGroups, getInstance, getHooks]);
    getInstance().footerGroups = [].concat(getInstance().headerGroups).reverse(); // The prepareRow function is absolutely necessary and MUST be called on
    // any rows the user wishes to be displayed.

    getInstance().prepareRow = React.useCallback(function (row) {
      row.getRowProps = makePropGetter(getHooks().getRowProps, {
        instance: getInstance(),
        row: row
      }); // Build the visible cells for each row

      row.allCells = allColumns.map(function (column) {
        var value = row.values[column.id];
        var cell = {
          column: column,
          row: row,
          value: value
        }; // Give each cell a getCellProps base

        cell.getCellProps = makePropGetter(getHooks().getCellProps, {
          instance: getInstance(),
          cell: cell
        }); // Give each cell a renderer function (supports multiple renderers)

        cell.render = makeRenderer(getInstance(), column, {
          row: row,
          cell: cell,
          value: value
        });
        return cell;
      });
      row.cells = visibleColumns.map(function (column) {
        return row.allCells.find(function (cell) {
          return cell.column.id === column.id;
        });
      }); // need to apply any row specific hooks (useExpanded requires this)

      loopHooks(getHooks().prepareRow, row, {
        instance: getInstance()
      });
    }, [getHooks, getInstance, allColumns, visibleColumns]);
    getInstance().getTableProps = makePropGetter(getHooks().getTableProps, {
      instance: getInstance()
    });
    getInstance().getTableBodyProps = makePropGetter(getHooks().getTableBodyProps, {
      instance: getInstance()
    });
    loopHooks(getHooks().useFinalInstance, getInstance());
    return getInstance();
  };

  function calculateHeaderWidths(headers, left) {
    if (left === void 0) {
      left = 0;
    }

    var sumTotalMinWidth = 0;
    var sumTotalWidth = 0;
    var sumTotalMaxWidth = 0;
    var sumTotalFlexWidth = 0;
    headers.forEach(function (header) {
      var subHeaders = header.headers;
      header.totalLeft = left;

      if (subHeaders && subHeaders.length) {
        var _calculateHeaderWidth2 = calculateHeaderWidths(subHeaders, left),
            totalMinWidth = _calculateHeaderWidth2[0],
            totalWidth = _calculateHeaderWidth2[1],
            totalMaxWidth = _calculateHeaderWidth2[2],
            totalFlexWidth = _calculateHeaderWidth2[3];

        header.totalMinWidth = totalMinWidth;
        header.totalWidth = totalWidth;
        header.totalMaxWidth = totalMaxWidth;
        header.totalFlexWidth = totalFlexWidth;
      } else {
        header.totalMinWidth = header.minWidth;
        header.totalWidth = Math.min(Math.max(header.minWidth, header.width), header.maxWidth);
        header.totalMaxWidth = header.maxWidth;
        header.totalFlexWidth = header.canResize ? header.totalWidth : 0;
      }

      if (header.isVisible) {
        left += header.totalWidth;
        sumTotalMinWidth += header.totalMinWidth;
        sumTotalWidth += header.totalWidth;
        sumTotalMaxWidth += header.totalMaxWidth;
        sumTotalFlexWidth += header.totalFlexWidth;
      }
    });
    return [sumTotalMinWidth, sumTotalWidth, sumTotalMaxWidth, sumTotalFlexWidth];
  }

  function accessRowsForColumn(_ref) {
    var data = _ref.data,
        rows = _ref.rows,
        flatRows = _ref.flatRows,
        rowsById = _ref.rowsById,
        column = _ref.column,
        getRowId = _ref.getRowId,
        getSubRows = _ref.getSubRows,
        accessValueHooks = _ref.accessValueHooks,
        getInstance = _ref.getInstance;

    // Access the row's data column-by-column
    // We do it this way so we can incrementally add materialized
    // columns after the first pass and avoid excessive looping
    var accessRow = function accessRow(originalRow, rowIndex, depth, parent, parentRows) {
      if (depth === void 0) {
        depth = 0;
      }

      // Keep the original reference around
      var original = originalRow;
      var id = getRowId(originalRow, rowIndex, parent);
      var row = rowsById[id]; // If the row hasn't been created, let's make it

      if (!row) {
        row = {
          id: id,
          original: original,
          index: rowIndex,
          depth: depth,
          cells: [{}] // This is a dummy cell

        }; // Override common array functions (and the dummy cell's getCellProps function)
        // to show an error if it is accessed without calling prepareRow

        row.cells.map = unpreparedAccessWarning;
        row.cells.filter = unpreparedAccessWarning;
        row.cells.forEach = unpreparedAccessWarning;
        row.cells[0].getCellProps = unpreparedAccessWarning; // Create the cells and values

        row.values = {}; // Push this row into the parentRows array

        parentRows.push(row); // Keep track of every row in a flat array

        flatRows.push(row); // Also keep track of every row by its ID

        rowsById[id] = row; // Get the original subrows

        row.originalSubRows = getSubRows(originalRow, rowIndex); // Then recursively access them

        if (row.originalSubRows) {
          var subRows = [];
          row.originalSubRows.forEach(function (d, i) {
            return accessRow(d, i, depth + 1, row, subRows);
          }); // Keep the new subRows array on the row

          row.subRows = subRows;
        }
      } else if (row.subRows) {
        // If the row exists, then it's already been accessed
        // Keep recursing, but don't worry about passing the
        // accumlator array (those rows already exist)
        row.originalSubRows.forEach(function (d, i) {
          return accessRow(d, i, depth + 1, row);
        });
      } // If the column has an accessor, use it to get a value


      if (column.accessor) {
        row.values[column.id] = column.accessor(originalRow, rowIndex, row);
      } // Allow plugins to manipulate the column value


      row.values[column.id] = reduceHooks(accessValueHooks, row.values[column.id], {
        row: row,
        column: column,
        instance: getInstance()
      }, true);
    };

    data.forEach(function (originalRow, rowIndex) {
      return accessRow(originalRow, rowIndex, 0, undefined, rows);
    });
  }

  actions.resetExpanded = 'resetExpanded';
  actions.toggleRowExpanded = 'toggleRowExpanded';
  actions.toggleAllRowsExpanded = 'toggleAllRowsExpanded';
  var useExpanded = function useExpanded(hooks) {
    hooks.getToggleAllRowsExpandedProps = [defaultGetToggleAllRowsExpandedProps];
    hooks.getToggleRowExpandedProps = [defaultGetToggleRowExpandedProps];
    hooks.stateReducers.push(reducer$1);
    hooks.useInstance.push(useInstance$1);
    hooks.prepareRow.push(prepareRow);
  };
  useExpanded.pluginName = 'useExpanded';

  var defaultGetToggleAllRowsExpandedProps = function defaultGetToggleAllRowsExpandedProps(props, _ref) {
    var instance = _ref.instance;
    return [props, {
      onClick: function onClick(e) {
        instance.toggleAllRowsExpanded();
      },
      style: {
        cursor: 'pointer'
      },
      title: 'Toggle All Rows Expanded'
    }];
  };

  var defaultGetToggleRowExpandedProps = function defaultGetToggleRowExpandedProps(props, _ref2) {
    var row = _ref2.row;
    return [props, {
      onClick: function onClick() {
        row.toggleRowExpanded();
      },
      style: {
        cursor: 'pointer'
      },
      title: 'Toggle Row Expanded'
    }];
  }; // Reducer


  function reducer$1(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        expanded: {}
      }, state);
    }

    if (action.type === actions.resetExpanded) {
      return _extends({}, state, {
        expanded: instance.initialState.expanded || {}
      });
    }

    if (action.type === actions.toggleAllRowsExpanded) {
      var value = action.value;
      var isAllRowsExpanded = instance.isAllRowsExpanded,
          rowsById = instance.rowsById;
      var expandAll = typeof value !== 'undefined' ? value : !isAllRowsExpanded;

      if (expandAll) {
        var expanded = {};
        Object.keys(rowsById).forEach(function (rowId) {
          expanded[rowId] = true;
        });
        return _extends({}, state, {
          expanded: expanded
        });
      }

      return _extends({}, state, {
        expanded: {}
      });
    }

    if (action.type === actions.toggleRowExpanded) {
      var id = action.id,
          setExpanded = action.value;
      var exists = state.expanded[id];
      var shouldExist = typeof setExpanded !== 'undefined' ? setExpanded : !exists;

      if (!exists && shouldExist) {
        var _extends2;

        return _extends({}, state, {
          expanded: _extends({}, state.expanded, (_extends2 = {}, _extends2[id] = true, _extends2))
        });
      } else if (exists && !shouldExist) {
        var _state$expanded = state.expanded,
            _ = _state$expanded[id],
            rest = _objectWithoutPropertiesLoose(_state$expanded, [id].map(_toPropertyKey));

        return _extends({}, state, {
          expanded: rest
        });
      } else {
        return state;
      }
    }
  }

  function useInstance$1(instance) {
    var data = instance.data,
        rows = instance.rows,
        rowsById = instance.rowsById,
        _instance$manualExpan = instance.manualExpandedKey,
        manualExpandedKey = _instance$manualExpan === void 0 ? 'expanded' : _instance$manualExpan,
        _instance$paginateExp = instance.paginateExpandedRows,
        paginateExpandedRows = _instance$paginateExp === void 0 ? true : _instance$paginateExp,
        _instance$expandSubRo = instance.expandSubRows,
        expandSubRows = _instance$expandSubRo === void 0 ? true : _instance$expandSubRo,
        _instance$autoResetEx = instance.autoResetExpanded,
        autoResetExpanded = _instance$autoResetEx === void 0 ? true : _instance$autoResetEx,
        getHooks = instance.getHooks,
        plugins = instance.plugins,
        expanded = instance.state.expanded,
        dispatch = instance.dispatch;
    ensurePluginOrder(plugins, ['useSortBy', 'useGroupBy', 'usePivotColumns', 'useGlobalFilter'], 'useExpanded');
    var getAutoResetExpanded = useGetLatest(autoResetExpanded);
    var isAllRowsExpanded = Boolean(Object.keys(rowsById).length && Object.keys(expanded).length);

    if (isAllRowsExpanded) {
      if (Object.keys(rowsById).some(function (id) {
        return !expanded[id];
      })) {
        isAllRowsExpanded = false;
      }
    } // Bypass any effects from firing when this changes


    useMountedLayoutEffect(function () {
      if (getAutoResetExpanded()) {
        dispatch({
          type: actions.resetExpanded
        });
      }
    }, [dispatch, data]);
    var toggleRowExpanded = React.useCallback(function (id, value) {
      dispatch({
        type: actions.toggleRowExpanded,
        id: id,
        value: value
      });
    }, [dispatch]);
    var toggleAllRowsExpanded = React.useCallback(function (value) {
      return dispatch({
        type: actions.toggleAllRowsExpanded,
        value: value
      });
    }, [dispatch]);
    var expandedRows = React.useMemo(function () {
      if (paginateExpandedRows) {
        return expandRows(rows, {
          manualExpandedKey: manualExpandedKey,
          expanded: expanded,
          expandSubRows: expandSubRows
        });
      }

      return rows;
    }, [paginateExpandedRows, rows, manualExpandedKey, expanded, expandSubRows]);
    var expandedDepth = React.useMemo(function () {
      return findExpandedDepth(expanded);
    }, [expanded]);
    var getInstance = useGetLatest(instance);
    var getToggleAllRowsExpandedProps = makePropGetter(getHooks().getToggleAllRowsExpandedProps, {
      instance: getInstance()
    });
    Object.assign(instance, {
      preExpandedRows: rows,
      expandedRows: expandedRows,
      rows: expandedRows,
      expandedDepth: expandedDepth,
      isAllRowsExpanded: isAllRowsExpanded,
      toggleRowExpanded: toggleRowExpanded,
      toggleAllRowsExpanded: toggleAllRowsExpanded,
      getToggleAllRowsExpandedProps: getToggleAllRowsExpandedProps
    });
  }

  function prepareRow(row, _ref3) {
    var getHooks = _ref3.instance.getHooks,
        instance = _ref3.instance;

    row.toggleRowExpanded = function (set) {
      return instance.toggleRowExpanded(row.id, set);
    };

    row.getToggleRowExpandedProps = makePropGetter(getHooks().getToggleRowExpandedProps, {
      instance: instance,
      row: row
    });
  }

  function findExpandedDepth(expanded) {
    var maxDepth = 0;
    Object.keys(expanded).forEach(function (id) {
      var splitId = id.split('.');
      maxDepth = Math.max(maxDepth, splitId.length);
    });
    return maxDepth;
  }

  var text = function text(rows, ids, filterValue) {
    rows = rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return String(rowValue).toLowerCase().includes(String(filterValue).toLowerCase());
      });
    });
    return rows;
  };

  text.autoRemove = function (val) {
    return !val;
  };

  var exactText = function exactText(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue !== undefined ? String(rowValue).toLowerCase() === String(filterValue).toLowerCase() : true;
      });
    });
  };

  exactText.autoRemove = function (val) {
    return !val;
  };

  var exactTextCase = function exactTextCase(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue !== undefined ? String(rowValue) === String(filterValue) : true;
      });
    });
  };

  exactTextCase.autoRemove = function (val) {
    return !val;
  };

  var includes = function includes(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue.includes(filterValue);
      });
    });
  };

  includes.autoRemove = function (val) {
    return !val || !val.length;
  };

  var includesAll = function includesAll(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue && rowValue.length && filterValue.every(function (val) {
          return rowValue.includes(val);
        });
      });
    });
  };

  includesAll.autoRemove = function (val) {
    return !val || !val.length;
  };

  var includesSome = function includesSome(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue && rowValue.length && filterValue.some(function (val) {
          return rowValue.includes(val);
        });
      });
    });
  };

  includesSome.autoRemove = function (val) {
    return !val || !val.length;
  };

  var includesValue = function includesValue(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return filterValue.includes(rowValue);
      });
    });
  };

  includesValue.autoRemove = function (val) {
    return !val || !val.length;
  };

  var exact = function exact(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue === filterValue;
      });
    });
  };

  exact.autoRemove = function (val) {
    return typeof val === 'undefined';
  };

  var equals = function equals(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id]; // eslint-disable-next-line eqeqeq

        return rowValue == filterValue;
      });
    });
  };

  equals.autoRemove = function (val) {
    return val == null;
  };

  var between = function between(rows, ids, filterValue) {
    var _ref = filterValue || [],
        min = _ref[0],
        max = _ref[1];

    min = typeof min === 'number' ? min : -Infinity;
    max = typeof max === 'number' ? max : Infinity;

    if (min > max) {
      var temp = min;
      min = max;
      max = temp;
    }

    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue >= min && rowValue <= max;
      });
    });
  };

  between.autoRemove = function (val) {
    return !val || typeof val[0] !== 'number' && typeof val[1] !== 'number';
  };

  var filterTypes = /*#__PURE__*/Object.freeze({
    __proto__: null,
    text: text,
    exactText: exactText,
    exactTextCase: exactTextCase,
    includes: includes,
    includesAll: includesAll,
    includesSome: includesSome,
    includesValue: includesValue,
    exact: exact,
    equals: equals,
    between: between
  });

  actions.resetFilters = 'resetFilters';
  actions.setFilter = 'setFilter';
  actions.setAllFilters = 'setAllFilters';
  var useFilters = function useFilters(hooks) {
    hooks.stateReducers.push(reducer$2);
    hooks.useInstance.push(useInstance$2);
  };
  useFilters.pluginName = 'useFilters';

  function reducer$2(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        filters: []
      }, state);
    }

    if (action.type === actions.resetFilters) {
      return _extends({}, state, {
        filters: instance.initialState.filters || []
      });
    }

    if (action.type === actions.setFilter) {
      var columnId = action.columnId,
          filterValue = action.filterValue;
      var allColumns = instance.allColumns,
          userFilterTypes = instance.filterTypes;
      var column = allColumns.find(function (d) {
        return d.id === columnId;
      });

      if (!column) {
        throw new Error("React-Table: Could not find a column with id: " + columnId);
      }

      var filterMethod = getFilterMethod(column.filter, userFilterTypes || {}, filterTypes);
      var previousfilter = state.filters.find(function (d) {
        return d.id === columnId;
      });
      var newFilter = functionalUpdate(filterValue, previousfilter && previousfilter.value); //

      if (shouldAutoRemoveFilter(filterMethod.autoRemove, newFilter, column)) {
        return _extends({}, state, {
          filters: state.filters.filter(function (d) {
            return d.id !== columnId;
          })
        });
      }

      if (previousfilter) {
        return _extends({}, state, {
          filters: state.filters.map(function (d) {
            if (d.id === columnId) {
              return {
                id: columnId,
                value: newFilter
              };
            }

            return d;
          })
        });
      }

      return _extends({}, state, {
        filters: [].concat(state.filters, [{
          id: columnId,
          value: newFilter
        }])
      });
    }

    if (action.type === actions.setAllFilters) {
      var filters = action.filters;
      var _allColumns = instance.allColumns,
          _userFilterTypes = instance.filterTypes;
      return _extends({}, state, {
        // Filter out undefined values
        filters: functionalUpdate(filters, state.filters).filter(function (filter) {
          var column = _allColumns.find(function (d) {
            return d.id === filter.id;
          });

          var filterMethod = getFilterMethod(column.filter, _userFilterTypes || {}, filterTypes);

          if (shouldAutoRemoveFilter(filterMethod.autoRemove, filter.value, column)) {
            return false;
          }

          return true;
        })
      });
    }
  }

  function useInstance$2(instance) {
    var data = instance.data,
        rows = instance.rows,
        flatRows = instance.flatRows,
        rowsById = instance.rowsById,
        allColumns = instance.allColumns,
        userFilterTypes = instance.filterTypes,
        manualFilters = instance.manualFilters,
        _instance$defaultCanF = instance.defaultCanFilter,
        defaultCanFilter = _instance$defaultCanF === void 0 ? false : _instance$defaultCanF,
        disableFilters = instance.disableFilters,
        filters = instance.state.filters,
        dispatch = instance.dispatch,
        _instance$autoResetFi = instance.autoResetFilters,
        autoResetFilters = _instance$autoResetFi === void 0 ? true : _instance$autoResetFi;
    var setFilter = React.useCallback(function (columnId, filterValue) {
      dispatch({
        type: actions.setFilter,
        columnId: columnId,
        filterValue: filterValue
      });
    }, [dispatch]);
    var setAllFilters = React.useCallback(function (filters) {
      dispatch({
        type: actions.setAllFilters,
        filters: filters
      });
    }, [dispatch]);
    allColumns.forEach(function (column) {
      var id = column.id,
          accessor = column.accessor,
          columnDefaultCanFilter = column.defaultCanFilter,
          columnDisableFilters = column.disableFilters; // Determine if a column is filterable

      column.canFilter = accessor ? getFirstDefined(columnDisableFilters === true ? false : undefined, disableFilters === true ? false : undefined, true) : getFirstDefined(columnDefaultCanFilter, defaultCanFilter, false); // Provide the column a way of updating the filter value

      column.setFilter = function (val) {
        return setFilter(column.id, val);
      }; // Provide the current filter value to the column for
      // convenience


      var found = filters.find(function (d) {
        return d.id === id;
      });
      column.filterValue = found && found.value;
    });

    var _React$useMemo = React.useMemo(function () {
      if (manualFilters || !filters.length) {
        return [rows, flatRows, rowsById];
      }

      var filteredFlatRows = [];
      var filteredRowsById = {}; // Filters top level and nested rows

      var filterRows = function filterRows(rows, depth) {
        if (depth === void 0) {
          depth = 0;
        }

        var filteredRows = rows;
        filteredRows = filters.reduce(function (filteredSoFar, _ref) {
          var columnId = _ref.id,
              filterValue = _ref.value;
          // Find the filters column
          var column = allColumns.find(function (d) {
            return d.id === columnId;
          });

          if (!column) {
            return filteredSoFar;
          }

          if (depth === 0) {
            column.preFilteredRows = filteredSoFar;
          }

          var filterMethod = getFilterMethod(column.filter, userFilterTypes || {}, filterTypes);

          if (!filterMethod) {
            console.warn("Could not find a valid 'column.filter' for column with the ID: " + column.id + ".");
            return filteredSoFar;
          } // Pass the rows, id, filterValue and column to the filterMethod
          // to get the filtered rows back


          column.filteredRows = filterMethod(filteredSoFar, [columnId], filterValue);
          return column.filteredRows;
        }, rows); // Apply the filter to any subRows
        // We technically could do this recursively in the above loop,
        // but that would severely hinder the API for the user, since they
        // would be required to do that recursion in some scenarios

        filteredRows.forEach(function (row) {
          filteredFlatRows.push(row);
          filteredRowsById[row.id] = row;

          if (!row.subRows) {
            return;
          }

          row.subRows = row.subRows && row.subRows.length > 0 ? filterRows(row.subRows, depth + 1) : row.subRows;
        });
        return filteredRows;
      };

      return [filterRows(rows), filteredFlatRows, filteredRowsById];
    }, [manualFilters, filters, rows, flatRows, rowsById, allColumns, userFilterTypes]),
        filteredRows = _React$useMemo[0],
        filteredFlatRows = _React$useMemo[1],
        filteredRowsById = _React$useMemo[2];

    React.useMemo(function () {
      // Now that each filtered column has it's partially filtered rows,
      // lets assign the final filtered rows to all of the other columns
      var nonFilteredColumns = allColumns.filter(function (column) {
        return !filters.find(function (d) {
          return d.id === column.id;
        });
      }); // This essentially enables faceted filter options to be built easily
      // using every column's preFilteredRows value

      nonFilteredColumns.forEach(function (column) {
        column.preFilteredRows = filteredRows;
        column.filteredRows = filteredRows;
      });
    }, [filteredRows, filters, allColumns]);
    var getAutoResetFilters = useGetLatest(autoResetFilters);
    useMountedLayoutEffect(function () {
      if (getAutoResetFilters()) {
        dispatch({
          type: actions.resetFilters
        });
      }
    }, [dispatch, manualFilters ? null : data]);
    Object.assign(instance, {
      preFilteredRows: rows,
      preFilteredFlatRows: flatRows,
      preFilteredRowsById: rowsById,
      filteredRows: filteredRows,
      filteredFlatRows: filteredFlatRows,
      filteredRowsById: filteredRowsById,
      rows: filteredRows,
      flatRows: filteredFlatRows,
      rowsById: filteredRowsById,
      setFilter: setFilter,
      setAllFilters: setAllFilters
    });
  }

  actions.resetGlobalFilter = 'resetGlobalFilter';
  actions.setGlobalFilter = 'setGlobalFilter';
  var useGlobalFilter = function useGlobalFilter(hooks) {
    hooks.stateReducers.push(reducer$3);
    hooks.useInstance.push(useInstance$3);
  };
  useGlobalFilter.pluginName = 'useGlobalFilter';

  function reducer$3(state, action, previousState, instance) {
    if (action.type === actions.resetGlobalFilter) {
      return _extends({}, state, {
        globalFilter: instance.initialState.globalFilter || undefined
      });
    }

    if (action.type === actions.setGlobalFilter) {
      var filterValue = action.filterValue;
      var userFilterTypes = instance.userFilterTypes;
      var filterMethod = getFilterMethod(instance.globalFilter, userFilterTypes || {}, filterTypes);
      var newFilter = functionalUpdate(filterValue, state.globalFilter); //

      if (shouldAutoRemoveFilter(filterMethod.autoRemove, newFilter)) {
        var globalFilter = state.globalFilter,
            stateWithoutGlobalFilter = _objectWithoutPropertiesLoose(state, ["globalFilter"]);

        return stateWithoutGlobalFilter;
      }

      return _extends({}, state, {
        globalFilter: newFilter
      });
    }
  }

  function useInstance$3(instance) {
    var data = instance.data,
        rows = instance.rows,
        flatRows = instance.flatRows,
        rowsById = instance.rowsById,
        allColumns = instance.allColumns,
        userFilterTypes = instance.filterTypes,
        globalFilter = instance.globalFilter,
        manualGlobalFilter = instance.manualGlobalFilter,
        globalFilterValue = instance.state.globalFilter,
        dispatch = instance.dispatch,
        _instance$autoResetGl = instance.autoResetGlobalFilter,
        autoResetGlobalFilter = _instance$autoResetGl === void 0 ? true : _instance$autoResetGl,
        disableGlobalFilter = instance.disableGlobalFilter;
    var setGlobalFilter = React.useCallback(function (filterValue) {
      dispatch({
        type: actions.setGlobalFilter,
        filterValue: filterValue
      });
    }, [dispatch]); // TODO: Create a filter cache for incremental high speed multi-filtering
    // This gets pretty complicated pretty fast, since you have to maintain a
    // cache for each row group (top-level rows, and each row's recursive subrows)
    // This would make multi-filtering a lot faster though. Too far?

    var _React$useMemo = React.useMemo(function () {
      if (manualGlobalFilter || typeof globalFilterValue === 'undefined') {
        return [rows, flatRows, rowsById];
      }

      var filteredFlatRows = [];
      var filteredRowsById = {};
      var filterMethod = getFilterMethod(globalFilter, userFilterTypes || {}, filterTypes);

      if (!filterMethod) {
        console.warn("Could not find a valid 'globalFilter' option.");
        return rows;
      }

      allColumns.forEach(function (column) {
        var columnDisableGlobalFilter = column.disableGlobalFilter;
        column.canFilter = getFirstDefined(columnDisableGlobalFilter === true ? false : undefined, disableGlobalFilter === true ? false : undefined, true);
      });
      var filterableColumns = allColumns.filter(function (c) {
        return c.canFilter === true;
      }); // Filters top level and nested rows

      var filterRows = function filterRows(filteredRows) {
        filteredRows = filterMethod(filteredRows, filterableColumns.map(function (d) {
          return d.id;
        }), globalFilterValue);
        filteredRows.forEach(function (row) {
          filteredFlatRows.push(row);
          filteredRowsById[row.id] = row;
          row.subRows = row.subRows && row.subRows.length ? filterRows(row.subRows) : row.subRows;
        });
        return filteredRows;
      };

      return [filterRows(rows), filteredFlatRows, filteredRowsById];
    }, [manualGlobalFilter, globalFilterValue, globalFilter, userFilterTypes, allColumns, rows, flatRows, rowsById, disableGlobalFilter]),
        globalFilteredRows = _React$useMemo[0],
        globalFilteredFlatRows = _React$useMemo[1],
        globalFilteredRowsById = _React$useMemo[2];

    var getAutoResetGlobalFilter = useGetLatest(autoResetGlobalFilter);
    useMountedLayoutEffect(function () {
      if (getAutoResetGlobalFilter()) {
        dispatch({
          type: actions.resetGlobalFilter
        });
      }
    }, [dispatch, manualGlobalFilter ? null : data]);
    Object.assign(instance, {
      preGlobalFilteredRows: rows,
      preGlobalFilteredFlatRows: flatRows,
      preGlobalFilteredRowsById: rowsById,
      globalFilteredRows: globalFilteredRows,
      globalFilteredFlatRows: globalFilteredFlatRows,
      globalFilteredRowsById: globalFilteredRowsById,
      rows: globalFilteredRows,
      flatRows: globalFilteredFlatRows,
      rowsById: globalFilteredRowsById,
      setGlobalFilter: setGlobalFilter,
      disableGlobalFilter: disableGlobalFilter
    });
  }

  function sum(values, aggregatedValues) {
    // It's faster to just add the aggregations together instead of
    // process leaf nodes individually
    return aggregatedValues.reduce(function (sum, next) {
      return sum + (typeof next === 'number' ? next : 0);
    }, 0);
  }
  function min(values) {
    var min = 0;
    values.forEach(function (value) {
      if (typeof value === 'number') {
        min = Math.min(min, value);
      }
    });
    return min;
  }
  function max(values) {
    var max = 0;
    values.forEach(function (value) {
      if (typeof value === 'number') {
        max = Math.max(max, value);
      }
    });
    return max;
  }
  function minMax(values) {
    var min = 0;
    var max = 0;
    values.forEach(function (value) {
      if (typeof value === 'number') {
        min = Math.min(min, value);
        max = Math.max(max, value);
      }
    });
    return min + ".." + max;
  }
  function average(values) {
    return sum(null, values) / values.length;
  }
  function median(values) {
    if (!values.length) {
      return null;
    }

    var min = 0;
    var max = 0;
    values.forEach(function (value) {
      if (typeof value === 'number') {
        min = Math.min(min, value);
        max = Math.max(max, value);
      }
    });
    return (min + max) / 2;
  }
  function unique(values) {
    return Array.from(new Set(values).values());
  }
  function uniqueCount(values) {
    return new Set(values).size;
  }
  function count(values) {
    return values.length;
  }

  var aggregations = /*#__PURE__*/Object.freeze({
    __proto__: null,
    sum: sum,
    min: min,
    max: max,
    minMax: minMax,
    average: average,
    median: median,
    unique: unique,
    uniqueCount: uniqueCount,
    count: count
  });

  var emptyArray = [];
  var emptyObject = {}; // Actions

  actions.resetGroupBy = 'resetGroupBy';
  actions.toggleGroupBy = 'toggleGroupBy';
  var useGroupBy = function useGroupBy(hooks) {
    hooks.getGroupByToggleProps = [defaultGetGroupByToggleProps];
    hooks.stateReducers.push(reducer$4);
    hooks.visibleColumnsDeps.push(function (deps, _ref) {
      var instance = _ref.instance;
      return [].concat(deps, [instance.state.groupBy]);
    });
    hooks.visibleColumns.push(visibleColumns);
    hooks.useInstance.push(useInstance$4);
    hooks.prepareRow.push(prepareRow$1);
  };
  useGroupBy.pluginName = 'useGroupBy';

  var defaultGetGroupByToggleProps = function defaultGetGroupByToggleProps(props, _ref2) {
    var header = _ref2.header;
    return [props, {
      onClick: header.canGroupBy ? function (e) {
        e.persist();
        header.toggleGroupBy();
      } : undefined,
      style: {
        cursor: header.canGroupBy ? 'pointer' : undefined
      },
      title: 'Toggle GroupBy'
    }];
  }; // Reducer


  function reducer$4(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        groupBy: []
      }, state);
    }

    if (action.type === actions.resetGroupBy) {
      return _extends({}, state, {
        groupBy: instance.initialState.groupBy || []
      });
    }

    if (action.type === actions.toggleGroupBy) {
      var columnId = action.columnId,
          setGroupBy = action.value;
      var resolvedGroupBy = typeof setGroupBy !== 'undefined' ? setGroupBy : !state.groupBy.includes(columnId);

      if (resolvedGroupBy) {
        return _extends({}, state, {
          groupBy: [].concat(state.groupBy, [columnId])
        });
      }

      return _extends({}, state, {
        groupBy: state.groupBy.filter(function (d) {
          return d !== columnId;
        })
      });
    }
  }

  function visibleColumns(columns, _ref3) {
    var groupBy = _ref3.instance.state.groupBy;
    // Sort grouped columns to the start of the column list
    // before the headers are built
    var groupByColumns = groupBy.map(function (g) {
      return columns.find(function (col) {
        return col.id === g;
      });
    }).filter(Boolean);
    var nonGroupByColumns = columns.filter(function (col) {
      return !groupBy.includes(col.id);
    });
    columns = [].concat(groupByColumns, nonGroupByColumns);
    columns.forEach(function (column) {
      column.isGrouped = groupBy.includes(column.id);
      column.groupedIndex = groupBy.indexOf(column.id);
    });
    return columns;
  }

  var defaultUserAggregations = {};

  function useInstance$4(instance) {
    var data = instance.data,
        rows = instance.rows,
        flatRows = instance.flatRows,
        rowsById = instance.rowsById,
        allColumns = instance.allColumns,
        flatHeaders = instance.flatHeaders,
        _instance$groupByFn = instance.groupByFn,
        groupByFn = _instance$groupByFn === void 0 ? defaultGroupByFn : _instance$groupByFn,
        manualGroupBy = instance.manualGroupBy,
        _instance$aggregation = instance.aggregations,
        userAggregations = _instance$aggregation === void 0 ? defaultUserAggregations : _instance$aggregation,
        plugins = instance.plugins,
        groupBy = instance.state.groupBy,
        dispatch = instance.dispatch,
        _instance$autoResetGr = instance.autoResetGroupBy,
        autoResetGroupBy = _instance$autoResetGr === void 0 ? true : _instance$autoResetGr,
        disableGroupBy = instance.disableGroupBy,
        defaultCanGroupBy = instance.defaultCanGroupBy,
        getHooks = instance.getHooks;
    ensurePluginOrder(plugins, ['useFilters'], 'useGroupBy');
    var getInstance = useGetLatest(instance);
    allColumns.forEach(function (column) {
      var accessor = column.accessor,
          defaultColumnGroupBy = column.defaultGroupBy,
          columnDisableGroupBy = column.disableGroupBy;
      column.canGroupBy = accessor ? getFirstDefined(column.canGroupBy, columnDisableGroupBy === true ? false : undefined, disableGroupBy === true ? false : undefined, true) : getFirstDefined(column.canGroupBy, defaultColumnGroupBy, defaultCanGroupBy, false);

      if (column.canGroupBy) {
        column.toggleGroupBy = function () {
          return instance.toggleGroupBy(column.id);
        };
      }

      column.Aggregated = column.Aggregated || column.Cell;
    });
    var toggleGroupBy = React.useCallback(function (columnId, value) {
      dispatch({
        type: actions.toggleGroupBy,
        columnId: columnId,
        value: value
      });
    }, [dispatch]);
    flatHeaders.forEach(function (header) {
      header.getGroupByToggleProps = makePropGetter(getHooks().getGroupByToggleProps, {
        instance: getInstance(),
        header: header
      });
    });

    var _React$useMemo = React.useMemo(function () {
      if (manualGroupBy || !groupBy.length) {
        return [rows, flatRows, rowsById, emptyArray, emptyObject, flatRows, rowsById];
      } // Ensure that the list of filtered columns exist


      var existingGroupBy = groupBy.filter(function (g) {
        return allColumns.find(function (col) {
          return col.id === g;
        });
      }); // Find the columns that can or are aggregating
      // Uses each column to aggregate rows into a single value

      var aggregateRowsToValues = function aggregateRowsToValues(leafRows, groupedRows, depth) {
        var values = {};
        allColumns.forEach(function (column) {
          // Don't aggregate columns that are in the groupBy
          if (existingGroupBy.includes(column.id)) {
            values[column.id] = groupedRows[0] ? groupedRows[0].values[column.id] : null;
            return;
          } // Get the columnValues to aggregate


          var groupedValues = groupedRows.map(function (row) {
            return row.values[column.id];
          }); // Get the columnValues to aggregate

          var leafValues = leafRows.map(function (row) {
            var columnValue = row.values[column.id];

            if (!depth && column.aggregateValue) {
              var aggregateValueFn = typeof column.aggregateValue === 'function' ? column.aggregateValue : userAggregations[column.aggregateValue] || aggregations[column.aggregateValue];

              if (!aggregateValueFn) {
                console.info({
                  column: column
                });
                throw new Error("React Table: Invalid column.aggregateValue option for column listed above");
              }

              columnValue = aggregateValueFn(columnValue, row, column);
            }

            return columnValue;
          }); // Aggregate the values

          var aggregateFn = typeof column.aggregate === 'function' ? column.aggregate : userAggregations[column.aggregate] || aggregations[column.aggregate];

          if (aggregateFn) {
            values[column.id] = aggregateFn(leafValues, groupedValues);
          } else if (column.aggregate) {
            console.info({
              column: column
            });
            throw new Error("React Table: Invalid column.aggregate option for column listed above");
          } else {
            values[column.id] = null;
          }
        });
        return values;
      };

      var groupedFlatRows = [];
      var groupedRowsById = {};
      var onlyGroupedFlatRows = [];
      var onlyGroupedRowsById = {};
      var nonGroupedFlatRows = [];
      var nonGroupedRowsById = {}; // Recursively group the data

      var groupUpRecursively = function groupUpRecursively(rows, depth, parentId) {
        if (depth === void 0) {
          depth = 0;
        }

        // This is the last level, just return the rows
        if (depth === existingGroupBy.length) {
          return rows;
        }

        var columnId = existingGroupBy[depth]; // Group the rows together for this level

        var rowGroupsMap = groupByFn(rows, columnId); // Peform aggregations for each group

        var aggregatedGroupedRows = Object.entries(rowGroupsMap).map(function (_ref4, index) {
          var groupByVal = _ref4[0],
              groupedRows = _ref4[1];
          var id = columnId + ":" + groupByVal;
          id = parentId ? parentId + ">" + id : id; // First, Recurse to group sub rows before aggregation

          var subRows = groupUpRecursively(groupedRows, depth + 1, id); // Flatten the leaf rows of the rows in this group

          var leafRows = depth ? flattenBy(groupedRows, 'leafRows') : groupedRows;
          var values = aggregateRowsToValues(leafRows, groupedRows, depth);
          var row = {
            id: id,
            isGrouped: true,
            groupByID: columnId,
            groupByVal: groupByVal,
            values: values,
            subRows: subRows,
            leafRows: leafRows,
            depth: depth,
            index: index
          };
          subRows.forEach(function (subRow) {
            groupedFlatRows.push(subRow);
            groupedRowsById[subRow.id] = subRow;

            if (subRow.isGrouped) {
              onlyGroupedFlatRows.push(subRow);
              onlyGroupedRowsById[subRow.id] = subRow;
            } else {
              nonGroupedFlatRows.push(subRow);
              nonGroupedRowsById[subRow.id] = subRow;
            }
          });
          return row;
        });
        return aggregatedGroupedRows;
      };

      var groupedRows = groupUpRecursively(rows);
      groupedRows.forEach(function (subRow) {
        groupedFlatRows.push(subRow);
        groupedRowsById[subRow.id] = subRow;

        if (subRow.isGrouped) {
          onlyGroupedFlatRows.push(subRow);
          onlyGroupedRowsById[subRow.id] = subRow;
        } else {
          nonGroupedFlatRows.push(subRow);
          nonGroupedRowsById[subRow.id] = subRow;
        }
      }); // Assign the new data

      return [groupedRows, groupedFlatRows, groupedRowsById, onlyGroupedFlatRows, onlyGroupedRowsById, nonGroupedFlatRows, nonGroupedRowsById];
    }, [manualGroupBy, groupBy, rows, flatRows, rowsById, allColumns, userAggregations, groupByFn]),
        groupedRows = _React$useMemo[0],
        groupedFlatRows = _React$useMemo[1],
        groupedRowsById = _React$useMemo[2],
        onlyGroupedFlatRows = _React$useMemo[3],
        onlyGroupedRowsById = _React$useMemo[4],
        nonGroupedFlatRows = _React$useMemo[5],
        nonGroupedRowsById = _React$useMemo[6];

    var getAutoResetGroupBy = useGetLatest(autoResetGroupBy);
    useMountedLayoutEffect(function () {
      if (getAutoResetGroupBy()) {
        dispatch({
          type: actions.resetGroupBy
        });
      }
    }, [dispatch, manualGroupBy ? null : data]);
    Object.assign(instance, {
      preGroupedRows: rows,
      preGroupedFlatRow: flatRows,
      preGroupedRowsById: rowsById,
      groupedRows: groupedRows,
      groupedFlatRows: groupedFlatRows,
      groupedRowsById: groupedRowsById,
      onlyGroupedFlatRows: onlyGroupedFlatRows,
      onlyGroupedRowsById: onlyGroupedRowsById,
      nonGroupedFlatRows: nonGroupedFlatRows,
      nonGroupedRowsById: nonGroupedRowsById,
      rows: groupedRows,
      flatRows: groupedFlatRows,
      rowsById: groupedRowsById,
      toggleGroupBy: toggleGroupBy
    });
  }

  function prepareRow$1(row) {
    row.allCells.forEach(function (cell) {
      // Grouped cells are in the groupBy and the pivot cell for the row
      cell.isGrouped = cell.column.isGrouped && cell.column.id === row.groupByID; // Placeholder cells are any columns in the groupBy that are not grouped

      cell.isPlaceholder = !cell.isGrouped && cell.column.isGrouped; // Aggregated cells are not grouped, not repeated, but still have subRows

      cell.isAggregated = !cell.isGrouped && !cell.isPlaceholder && row.canExpand;
    });
  }

  function defaultGroupByFn(rows, columnId) {
    return rows.reduce(function (prev, row, i) {
      // TODO: Might want to implement a key serializer here so
      // irregular column values can still be grouped if needed?
      var resKey = "" + row.values[columnId];
      prev[resKey] = Array.isArray(prev[resKey]) ? prev[resKey] : [];
      prev[resKey].push(row);
      return prev;
    }, {});
  }

  var reSplitAlphaNumeric = /([0-9]+)/gm; // Mixed sorting is slow, but very inclusive of many edge cases.
  // It handles numbers, mixed alphanumeric combinations, and even
  // null, undefined, and Infinity

  var alphanumeric = function alphanumeric(rowA, rowB, columnId) {
    var a = getRowValueByColumnID(rowA, columnId);
    var b = getRowValueByColumnID(rowB, columnId); // Force to strings (or "" for unsupported types)

    a = toString(a);
    b = toString(b); // Split on number groups, but keep the delimiter
    // Then remove falsey split values

    a = a.split(reSplitAlphaNumeric).filter(Boolean);
    b = b.split(reSplitAlphaNumeric).filter(Boolean); // While

    while (a.length && b.length) {
      var aa = a.shift();
      var bb = b.shift();
      var an = parseInt(aa, 10);
      var bn = parseInt(bb, 10);
      var combo = [an, bn].sort(); // Both are string

      if (isNaN(combo[0])) {
        if (aa > bb) {
          return 1;
        }

        if (bb > aa) {
          return -1;
        }

        continue;
      } // One is a string, one is a number


      if (isNaN(combo[1])) {
        return isNaN(an) ? -1 : 1;
      } // Both are numbers


      if (an > bn) {
        return 1;
      }

      if (bn > an) {
        return -1;
      }
    }

    return a.length - b.length;
  };
  function datetime(rowA, rowB, columnId) {
    var a = getRowValueByColumnID(rowA, columnId);
    var b = getRowValueByColumnID(rowB, columnId);
    a = a.getTime();
    b = b.getTime();
    return compareBasic(a, b);
  }
  function basic(rowA, rowB, columnId) {
    var a = getRowValueByColumnID(rowA, columnId);
    var b = getRowValueByColumnID(rowB, columnId);
    return compareBasic(a, b);
  } // Utils

  function compareBasic(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  }

  function getRowValueByColumnID(row, columnId) {
    return row.values[columnId];
  }

  function toString(a) {
    if (typeof a === 'number') {
      if (isNaN(a) || a === Infinity || a === -Infinity) {
        return '';
      }

      return String(a);
    }

    if (typeof a === 'string') {
      return a;
    }

    return '';
  }

  var sortTypes = /*#__PURE__*/Object.freeze({
    __proto__: null,
    alphanumeric: alphanumeric,
    datetime: datetime,
    basic: basic
  });

  actions.resetSortBy = 'resetSortBy';
  actions.toggleSortBy = 'toggleSortBy';
  actions.clearSortBy = 'clearSortBy';
  defaultColumn.sortType = 'alphanumeric';
  defaultColumn.sortDescFirst = false;
  var useSortBy = function useSortBy(hooks) {
    hooks.getSortByToggleProps = [defaultGetSortByToggleProps];
    hooks.stateReducers.push(reducer$5);
    hooks.useInstance.push(useInstance$5);
  };
  useSortBy.pluginName = 'useSortBy';

  var defaultGetSortByToggleProps = function defaultGetSortByToggleProps(props, _ref) {
    var instance = _ref.instance,
        column = _ref.column;
    var _instance$isMultiSort = instance.isMultiSortEvent,
        isMultiSortEvent = _instance$isMultiSort === void 0 ? function (e) {
      return e.shiftKey;
    } : _instance$isMultiSort;
    return [props, {
      onClick: column.canSort ? function (e) {
        e.persist();
        column.toggleSortBy(undefined, !instance.disableMultiSort && isMultiSortEvent(e));
      } : undefined,
      style: {
        cursor: column.canSort ? 'pointer' : undefined
      },
      title: column.canSort ? 'Toggle SortBy' : undefined
    }];
  }; // Reducer


  function reducer$5(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        sortBy: []
      }, state);
    }

    if (action.type === actions.resetSortBy) {
      return _extends({}, state, {
        sortBy: instance.initialState.sortBy || []
      });
    }

    if (action.type === actions.clearSortBy) {
      var sortBy = state.sortBy;
      var newSortBy = sortBy.filter(function (d) {
        return d.id !== action.columnId;
      });
      return _extends({}, state, {
        sortBy: newSortBy
      });
    }

    if (action.type === actions.toggleSortBy) {
      var columnId = action.columnId,
          desc = action.desc,
          multi = action.multi;
      var allColumns = instance.allColumns,
          disableMultiSort = instance.disableMultiSort,
          disableSortRemove = instance.disableSortRemove,
          disableMultiRemove = instance.disableMultiRemove,
          _instance$maxMultiSor = instance.maxMultiSortColCount,
          maxMultiSortColCount = _instance$maxMultiSor === void 0 ? Number.MAX_SAFE_INTEGER : _instance$maxMultiSor;
      var _sortBy = state.sortBy; // Find the column for this columnId

      var column = allColumns.find(function (d) {
        return d.id === columnId;
      });
      var sortDescFirst = column.sortDescFirst; // Find any existing sortBy for this column

      var existingSortBy = _sortBy.find(function (d) {
        return d.id === columnId;
      });

      var existingIndex = _sortBy.findIndex(function (d) {
        return d.id === columnId;
      });

      var hasDescDefined = typeof desc !== 'undefined' && desc !== null;
      var _newSortBy = []; // What should we do with this sort action?

      var sortAction;

      if (!disableMultiSort && multi) {
        if (existingSortBy) {
          sortAction = 'toggle';
        } else {
          sortAction = 'add';
        }
      } else {
        // Normal mode
        if (existingIndex !== _sortBy.length - 1) {
          sortAction = 'replace';
        } else if (existingSortBy) {
          sortAction = 'toggle';
        } else {
          sortAction = 'replace';
        }
      } // Handle toggle states that will remove the sortBy


      if (sortAction === 'toggle' && // Must be toggling
      !disableSortRemove && // If disableSortRemove, disable in general
      !hasDescDefined && ( // Must not be setting desc
      multi ? !disableMultiRemove : true) && ( // If multi, don't allow if disableMultiRemove
      existingSortBy && // Finally, detect if it should indeed be removed
      existingSortBy.desc && !sortDescFirst || !existingSortBy.desc && sortDescFirst)) {
        sortAction = 'remove';
      }

      if (sortAction === 'replace') {
        _newSortBy = [{
          id: columnId,
          desc: hasDescDefined ? desc : sortDescFirst
        }];
      } else if (sortAction === 'add') {
        _newSortBy = [].concat(_sortBy, [{
          id: columnId,
          desc: hasDescDefined ? desc : sortDescFirst
        }]); // Take latest n columns

        _newSortBy.splice(0, _newSortBy.length - maxMultiSortColCount);
      } else if (sortAction === 'toggle') {
        // This flips (or sets) the
        _newSortBy = _sortBy.map(function (d) {
          if (d.id === columnId) {
            return _extends({}, d, {
              desc: hasDescDefined ? desc : !existingSortBy.desc
            });
          }

          return d;
        });
      } else if (sortAction === 'remove') {
        _newSortBy = _sortBy.filter(function (d) {
          return d.id !== columnId;
        });
      }

      return _extends({}, state, {
        sortBy: _newSortBy
      });
    }
  }

  function useInstance$5(instance) {
    var data = instance.data,
        rows = instance.rows,
        flatRows = instance.flatRows,
        allColumns = instance.allColumns,
        _instance$orderByFn = instance.orderByFn,
        orderByFn = _instance$orderByFn === void 0 ? defaultOrderByFn : _instance$orderByFn,
        userSortTypes = instance.sortTypes,
        manualSortBy = instance.manualSortBy,
        defaultCanSort = instance.defaultCanSort,
        disableSortBy = instance.disableSortBy,
        flatHeaders = instance.flatHeaders,
        sortBy = instance.state.sortBy,
        dispatch = instance.dispatch,
        plugins = instance.plugins,
        getHooks = instance.getHooks,
        _instance$autoResetSo = instance.autoResetSortBy,
        autoResetSortBy = _instance$autoResetSo === void 0 ? true : _instance$autoResetSo;
    ensurePluginOrder(plugins, ['useFilters', 'useGlobalFilter', 'useGroupBy', 'usePivotColumns'], 'useSortBy'); // Updates sorting based on a columnId, desc flag and multi flag

    var toggleSortBy = React.useCallback(function (columnId, desc, multi) {
      dispatch({
        type: actions.toggleSortBy,
        columnId: columnId,
        desc: desc,
        multi: multi
      });
    }, [dispatch]); // use reference to avoid memory leak in #1608

    var getInstance = useGetLatest(instance); // Add the getSortByToggleProps method to columns and headers

    flatHeaders.forEach(function (column) {
      var accessor = column.accessor,
          defaultColumnCanSort = column.canSort,
          columnDisableSortBy = column.disableSortBy,
          id = column.id;
      var canSort = accessor ? getFirstDefined(columnDisableSortBy === true ? false : undefined, disableSortBy === true ? false : undefined, true) : getFirstDefined(defaultCanSort, defaultColumnCanSort, false);
      column.canSort = canSort;

      if (column.canSort) {
        column.toggleSortBy = function (desc, multi) {
          return toggleSortBy(column.id, desc, multi);
        };

        column.clearSortBy = function () {
          dispatch({
            type: actions.clearSortBy,
            columnId: column.id
          });
        };
      }

      column.getSortByToggleProps = makePropGetter(getHooks().getSortByToggleProps, {
        instance: getInstance(),
        column: column
      });
      var columnSort = sortBy.find(function (d) {
        return d.id === id;
      });
      column.isSorted = !!columnSort;
      column.sortedIndex = sortBy.findIndex(function (d) {
        return d.id === id;
      });
      column.isSortedDesc = column.isSorted ? columnSort.desc : undefined;
    });

    var _React$useMemo = React.useMemo(function () {
      if (manualSortBy || !sortBy.length) {
        return [rows, flatRows];
      }

      var sortedFlatRows = []; // Filter out sortBys that correspond to non existing columns

      var availableSortBy = sortBy.filter(function (sort) {
        return allColumns.find(function (col) {
          return col.id === sort.id;
        });
      });

      var sortData = function sortData(rows) {
        // Use the orderByFn to compose multiple sortBy's together.
        // This will also perform a stable sorting using the row index
        // if needed.
        var sortedData = orderByFn(rows, availableSortBy.map(function (sort) {
          // Support custom sorting methods for each column
          var column = allColumns.find(function (d) {
            return d.id === sort.id;
          });

          if (!column) {
            throw new Error("React-Table: Could not find a column with id: " + sort.id + " while sorting");
          }

          var sortType = column.sortType; // Look up sortBy functions in this order:
          // column function
          // column string lookup on user sortType
          // column string lookup on built-in sortType
          // default function
          // default string lookup on user sortType
          // default string lookup on built-in sortType

          var sortMethod = isFunction(sortType) || (userSortTypes || {})[sortType] || sortTypes[sortType];

          if (!sortMethod) {
            throw new Error("React-Table: Could not find a valid sortType of '" + sortType + "' for column '" + sort.id + "'.");
          } // Return the correct sortFn.
          // This function should always return in ascending order


          return function (a, b) {
            return sortMethod(a, b, sort.id, sort.desc);
          };
        }), // Map the directions
        availableSortBy.map(function (sort) {
          // Detect and use the sortInverted option
          var column = allColumns.find(function (d) {
            return d.id === sort.id;
          });

          if (column && column.sortInverted) {
            return sort.desc;
          }

          return !sort.desc;
        })); // If there are sub-rows, sort them

        sortedData.forEach(function (row) {
          sortedFlatRows.push(row);

          if (!row.subRows || row.subRows.length <= 1) {
            return;
          }

          row.subRows = sortData(row.subRows);
        });
        return sortedData;
      };

      return [sortData(rows), sortedFlatRows];
    }, [manualSortBy, sortBy, rows, flatRows, allColumns, orderByFn, userSortTypes]),
        sortedRows = _React$useMemo[0],
        sortedFlatRows = _React$useMemo[1];

    var getAutoResetSortBy = useGetLatest(autoResetSortBy);
    useMountedLayoutEffect(function () {
      if (getAutoResetSortBy()) {
        dispatch({
          type: actions.resetSortBy
        });
      }
    }, [manualSortBy ? null : data]);
    Object.assign(instance, {
      preSortedRows: rows,
      preSortedFlatRows: flatRows,
      sortedRows: sortedRows,
      sortedFlatRows: sortedFlatRows,
      rows: sortedRows,
      flatRows: sortedFlatRows,
      toggleSortBy: toggleSortBy
    });
  }

  function defaultOrderByFn(arr, funcs, dirs) {
    return [].concat(arr).sort(function (rowA, rowB) {
      for (var i = 0; i < funcs.length; i += 1) {
        var sortFn = funcs[i];
        var desc = dirs[i] === false || dirs[i] === 'desc';
        var sortInt = sortFn(rowA, rowB);

        if (sortInt !== 0) {
          return desc ? -sortInt : sortInt;
        }
      }

      return dirs[0] ? rowA.index - rowB.index : rowB.index - rowA.index;
    });
  }

  var pluginName = 'usePagination'; // Actions

  actions.resetPage = 'resetPage';
  actions.gotoPage = 'gotoPage';
  actions.setPageSize = 'setPageSize';
  var usePagination = function usePagination(hooks) {
    hooks.stateReducers.push(reducer$6);
    hooks.useInstance.push(useInstance$6);
  };
  usePagination.pluginName = pluginName;

  function reducer$6(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        pageSize: 10,
        pageIndex: 0
      }, state);
    }

    if (action.type === actions.resetPage) {
      return _extends({}, state, {
        pageIndex: instance.initialState.pageIndex || 0
      });
    }

    if (action.type === actions.gotoPage) {
      var pageCount = instance.pageCount,
          page = instance.page;
      var newPageIndex = functionalUpdate(action.pageIndex, state.pageIndex);
      var canNavigate = false;

      if (newPageIndex > state.pageIndex) {
        // next page
        canNavigate = pageCount === -1 ? page.length >= state.pageSize : newPageIndex < pageCount;
      } else if (newPageIndex < state.pageIndex) {
        // prev page
        canNavigate = newPageIndex > -1;
      }

      if (!canNavigate) {
        return state;
      }

      return _extends({}, state, {
        pageIndex: newPageIndex
      });
    }

    if (action.type === actions.setPageSize) {
      var pageSize = action.pageSize;
      var topRowIndex = state.pageSize * state.pageIndex;
      var pageIndex = Math.floor(topRowIndex / pageSize);
      return _extends({}, state, {
        pageIndex: pageIndex,
        pageSize: pageSize
      });
    }
  }

  function useInstance$6(instance) {
    var rows = instance.rows,
        _instance$autoResetPa = instance.autoResetPage,
        autoResetPage = _instance$autoResetPa === void 0 ? true : _instance$autoResetPa,
        _instance$manualExpan = instance.manualExpandedKey,
        manualExpandedKey = _instance$manualExpan === void 0 ? 'expanded' : _instance$manualExpan,
        plugins = instance.plugins,
        userPageCount = instance.pageCount,
        _instance$paginateExp = instance.paginateExpandedRows,
        paginateExpandedRows = _instance$paginateExp === void 0 ? true : _instance$paginateExp,
        _instance$expandSubRo = instance.expandSubRows,
        expandSubRows = _instance$expandSubRo === void 0 ? true : _instance$expandSubRo,
        _instance$state = instance.state,
        pageSize = _instance$state.pageSize,
        pageIndex = _instance$state.pageIndex,
        expanded = _instance$state.expanded,
        globalFilter = _instance$state.globalFilter,
        filters = _instance$state.filters,
        groupBy = _instance$state.groupBy,
        sortBy = _instance$state.sortBy,
        dispatch = instance.dispatch,
        data = instance.data,
        manualPagination = instance.manualPagination;
    ensurePluginOrder(plugins, ['useGlobalFilter', 'useFilters', 'useGroupBy', 'useSortBy', 'useExpanded'], 'usePagination');
    var getAutoResetPage = useGetLatest(autoResetPage);
    useMountedLayoutEffect(function () {
      if (getAutoResetPage()) {
        dispatch({
          type: actions.resetPage
        });
      }
    }, [dispatch, manualPagination ? null : data, globalFilter, filters, groupBy, sortBy]);
    var pageCount = manualPagination ? userPageCount : Math.ceil(rows.length / pageSize);
    var pageOptions = React.useMemo(function () {
      return pageCount > 0 ? [].concat(new Array(pageCount)).fill(null).map(function (d, i) {
        return i;
      }) : [];
    }, [pageCount]);
    var page = React.useMemo(function () {
      var page;

      if (manualPagination) {
        page = rows;
      } else {
        var pageStart = pageSize * pageIndex;
        var pageEnd = pageStart + pageSize;
        page = rows.slice(pageStart, pageEnd);
      }

      if (paginateExpandedRows) {
        return page;
      }

      return expandRows(page, {
        manualExpandedKey: manualExpandedKey,
        expanded: expanded,
        expandSubRows: expandSubRows
      });
    }, [expandSubRows, expanded, manualExpandedKey, manualPagination, pageIndex, pageSize, paginateExpandedRows, rows]);
    var canPreviousPage = pageIndex > 0;
    var canNextPage = pageCount === -1 ? page.length >= pageSize : pageIndex < pageCount - 1;
    var gotoPage = React.useCallback(function (pageIndex) {
      dispatch({
        type: actions.gotoPage,
        pageIndex: pageIndex
      });
    }, [dispatch]);
    var previousPage = React.useCallback(function () {
      return gotoPage(function (old) {
        return old - 1;
      });
    }, [gotoPage]);
    var nextPage = React.useCallback(function () {
      return gotoPage(function (old) {
        return old + 1;
      });
    }, [gotoPage]);
    var setPageSize = React.useCallback(function (pageSize) {
      dispatch({
        type: actions.setPageSize,
        pageSize: pageSize
      });
    }, [dispatch]);
    Object.assign(instance, {
      pageOptions: pageOptions,
      pageCount: pageCount,
      page: page,
      canPreviousPage: canPreviousPage,
      canNextPage: canNextPage,
      gotoPage: gotoPage,
      previousPage: previousPage,
      nextPage: nextPage,
      setPageSize: setPageSize
    });
  }

  actions.resetPivot = 'resetPivot';
  actions.togglePivot = 'togglePivot';
  var _UNSTABLE_usePivotColumns = function _UNSTABLE_usePivotColumns(hooks) {
    hooks.getPivotToggleProps = [defaultGetPivotToggleProps];
    hooks.stateReducers.push(reducer$7);
    hooks.useInstanceAfterData.push(useInstanceAfterData);
    hooks.allColumns.push(allColumns);
    hooks.accessValue.push(accessValue);
    hooks.materializedColumns.push(materializedColumns);
    hooks.materializedColumnsDeps.push(materializedColumnsDeps);
    hooks.visibleColumns.push(visibleColumns$1);
    hooks.visibleColumnsDeps.push(visibleColumnsDeps);
    hooks.useInstance.push(useInstance$7);
    hooks.prepareRow.push(prepareRow$2);
  };
  _UNSTABLE_usePivotColumns.pluginName = 'usePivotColumns';
  var defaultPivotColumns = [];

  var defaultGetPivotToggleProps = function defaultGetPivotToggleProps(props, _ref) {
    var header = _ref.header;
    return [props, {
      onClick: header.canPivot ? function (e) {
        e.persist();
        header.togglePivot();
      } : undefined,
      style: {
        cursor: header.canPivot ? 'pointer' : undefined
      },
      title: 'Toggle Pivot'
    }];
  }; // Reducer


  function reducer$7(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        pivotColumns: defaultPivotColumns
      }, state);
    }

    if (action.type === actions.resetPivot) {
      return _extends({}, state, {
        pivotColumns: instance.initialState.pivotColumns || defaultPivotColumns
      });
    }

    if (action.type === actions.togglePivot) {
      var columnId = action.columnId,
          setPivot = action.value;
      var resolvedPivot = typeof setPivot !== 'undefined' ? setPivot : !state.pivotColumns.includes(columnId);

      if (resolvedPivot) {
        return _extends({}, state, {
          pivotColumns: [].concat(state.pivotColumns, [columnId])
        });
      }

      return _extends({}, state, {
        pivotColumns: state.pivotColumns.filter(function (d) {
          return d !== columnId;
        })
      });
    }
  }

  function useInstanceAfterData(instance) {
    instance.allColumns.forEach(function (column) {
      column.isPivotSource = instance.state.pivotColumns.includes(column.id);
    });
  }

  function allColumns(columns, _ref2) {
    var instance = _ref2.instance;
    columns.forEach(function (column) {
      column.isPivotSource = instance.state.pivotColumns.includes(column.id);
      column.uniqueValues = new Set();
    });
    return columns;
  }

  function accessValue(value, _ref3) {
    var column = _ref3.column;

    if (column.uniqueValues && typeof value !== 'undefined') {
      column.uniqueValues.add(value);
    }

    return value;
  }

  function materializedColumns(materialized, _ref4) {
    var instance = _ref4.instance;
    var allColumns = instance.allColumns,
        state = instance.state;

    if (!state.pivotColumns.length || !state.groupBy || !state.groupBy.length) {
      return materialized;
    }

    var pivotColumns = state.pivotColumns.map(function (id) {
      return allColumns.find(function (d) {
        return d.id === id;
      });
    }).filter(Boolean);
    var sourceColumns = allColumns.filter(function (d) {
      return !d.isPivotSource && !state.groupBy.includes(d.id) && !state.pivotColumns.includes(d.id);
    });

    var buildPivotColumns = function buildPivotColumns(depth, parent, pivotFilters) {
      if (depth === void 0) {
        depth = 0;
      }

      if (pivotFilters === void 0) {
        pivotFilters = [];
      }

      var pivotColumn = pivotColumns[depth];

      if (!pivotColumn) {
        return sourceColumns.map(function (sourceColumn) {
          // TODO: We could offer support here for renesting pivoted
          // columns inside copies of their header groups. For now,
          // that seems like it would be (1) overkill on nesting, considering
          // you already get nesting for every pivot level and (2)
          // really hard. :)
          return _extends({}, sourceColumn, {
            canPivot: false,
            isPivoted: true,
            parent: parent,
            depth: depth,
            id: "" + (parent ? parent.id + "." + sourceColumn.id : sourceColumn.id),
            accessor: function accessor(originalRow, i, row) {
              if (pivotFilters.every(function (filter) {
                return filter(row);
              })) {
                return row.values[sourceColumn.id];
              }
            }
          });
        });
      }

      var uniqueValues = Array.from(pivotColumn.uniqueValues).sort();
      return uniqueValues.map(function (uniqueValue) {
        var columnGroup = _extends({}, pivotColumn, {
          Header: pivotColumn.PivotHeader || typeof pivotColumn.header === 'string' ? pivotColumn.Header + ": " + uniqueValue : uniqueValue,
          isPivotGroup: true,
          parent: parent,
          depth: depth,
          id: parent ? parent.id + "." + pivotColumn.id + "." + uniqueValue : pivotColumn.id + "." + uniqueValue,
          pivotValue: uniqueValue
        });

        columnGroup.columns = buildPivotColumns(depth + 1, columnGroup, [].concat(pivotFilters, [function (row) {
          return row.values[pivotColumn.id] === uniqueValue;
        }]));
        return columnGroup;
      });
    };

    var newMaterialized = flattenColumns(buildPivotColumns());
    return [].concat(materialized, newMaterialized);
  }

  function materializedColumnsDeps(deps, _ref5) {
    var _ref5$instance$state = _ref5.instance.state,
        pivotColumns = _ref5$instance$state.pivotColumns,
        groupBy = _ref5$instance$state.groupBy;
    return [].concat(deps, [pivotColumns, groupBy]);
  }

  function visibleColumns$1(visibleColumns, _ref6) {
    var state = _ref6.instance.state;
    visibleColumns = visibleColumns.filter(function (d) {
      return !d.isPivotSource;
    });

    if (state.pivotColumns.length && state.groupBy && state.groupBy.length) {
      visibleColumns = visibleColumns.filter(function (column) {
        return column.isGrouped || column.isPivoted;
      });
    }

    return visibleColumns;
  }

  function visibleColumnsDeps(deps, _ref7) {
    var instance = _ref7.instance;
    return [].concat(deps, [instance.state.pivotColumns, instance.state.groupBy]);
  }

  function useInstance$7(instance) {
    var columns = instance.columns,
        allColumns = instance.allColumns,
        flatHeaders = instance.flatHeaders,
        getHooks = instance.getHooks,
        plugins = instance.plugins,
        dispatch = instance.dispatch,
        _instance$autoResetPi = instance.autoResetPivot,
        autoResetPivot = _instance$autoResetPi === void 0 ? true : _instance$autoResetPi,
        manaulPivot = instance.manaulPivot,
        disablePivot = instance.disablePivot,
        defaultCanPivot = instance.defaultCanPivot;
    ensurePluginOrder(plugins, ['useGroupBy'], 'usePivotColumns');
    var getInstance = useGetLatest(instance);
    allColumns.forEach(function (column) {
      var accessor = column.accessor,
          defaultColumnPivot = column.defaultPivot,
          columnDisablePivot = column.disablePivot;
      column.canPivot = accessor ? getFirstDefined(column.canPivot, columnDisablePivot === true ? false : undefined, disablePivot === true ? false : undefined, true) : getFirstDefined(column.canPivot, defaultColumnPivot, defaultCanPivot, false);

      if (column.canPivot) {
        column.togglePivot = function () {
          return instance.togglePivot(column.id);
        };
      }

      column.Aggregated = column.Aggregated || column.Cell;
    });

    var togglePivot = function togglePivot(columnId, value) {
      dispatch({
        type: actions.togglePivot,
        columnId: columnId,
        value: value
      });
    };

    flatHeaders.forEach(function (header) {
      header.getPivotToggleProps = makePropGetter(getHooks().getPivotToggleProps, {
        instance: getInstance(),
        header: header
      });
    });
    var getAutoResetPivot = useGetLatest(autoResetPivot);
    useMountedLayoutEffect(function () {
      if (getAutoResetPivot()) {
        dispatch({
          type: actions.resetPivot
        });
      }
    }, [dispatch, manaulPivot ? null : columns]);
    Object.assign(instance, {
      togglePivot: togglePivot
    });
  }

  function prepareRow$2(row) {
    row.allCells.forEach(function (cell) {
      // Grouped cells are in the pivotColumns and the pivot cell for the row
      cell.isPivoted = cell.column.isPivoted;
    });
  }

  var pluginName$1 = 'useRowSelect'; // Actions

  actions.resetSelectedRows = 'resetSelectedRows';
  actions.toggleAllRowsSelected = 'toggleAllRowsSelected';
  actions.toggleRowSelected = 'toggleRowSelected';
  var useRowSelect = function useRowSelect(hooks) {
    hooks.getToggleRowSelectedProps = [defaultGetToggleRowSelectedProps];
    hooks.getToggleAllRowsSelectedProps = [defaultGetToggleAllRowsSelectedProps];
    hooks.stateReducers.push(reducer$8);
    hooks.useInstance.push(useInstance$8);
    hooks.prepareRow.push(prepareRow$3);
  };
  useRowSelect.pluginName = pluginName$1;

  var defaultGetToggleRowSelectedProps = function defaultGetToggleRowSelectedProps(props, _ref) {
    var instance = _ref.instance,
        row = _ref.row;
    var _instance$manualRowSe = instance.manualRowSelectedKey,
        manualRowSelectedKey = _instance$manualRowSe === void 0 ? 'isSelected' : _instance$manualRowSe;
    var checked = false;

    if (row.original && row.original[manualRowSelectedKey]) {
      checked = true;
    } else {
      checked = row.isSelected;
    }

    return [props, {
      onChange: function onChange(e) {
        row.toggleRowSelected(e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: checked,
      title: 'Toggle Row Selected',
      indeterminate: row.isSomeSelected
    }];
  };

  var defaultGetToggleAllRowsSelectedProps = function defaultGetToggleAllRowsSelectedProps(props, _ref2) {
    var instance = _ref2.instance;
    return [props, {
      onChange: function onChange(e) {
        instance.toggleAllRowsSelected(e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: instance.isAllRowsSelected,
      title: 'Toggle All Rows Selected',
      indeterminate: Boolean(!instance.isAllRowsSelected && Object.keys(instance.state.selectedRowIds).length)
    }];
  };

  function reducer$8(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        selectedRowIds: {}
      }, state);
    }

    if (action.type === actions.resetSelectedRows) {
      return _extends({}, state, {
        selectedRowIds: instance.initialState.selectedRowIds || {}
      });
    }

    if (action.type === actions.toggleAllRowsSelected) {
      var setSelected = action.value;
      var isAllRowsSelected = instance.isAllRowsSelected,
          rowsById = instance.rowsById,
          _instance$nonGroupedR = instance.nonGroupedRowsById,
          nonGroupedRowsById = _instance$nonGroupedR === void 0 ? rowsById : _instance$nonGroupedR;
      var selectAll = typeof setSelected !== 'undefined' ? setSelected : !isAllRowsSelected; // Only remove/add the rows that are visible on the screen
      //  Leave all the other rows that are selected alone.

      var selectedRowIds = Object.assign({}, state.selectedRowIds);

      if (selectAll) {
        Object.keys(nonGroupedRowsById).forEach(function (rowId) {
          selectedRowIds[rowId] = true;
        });
      } else {
        Object.keys(nonGroupedRowsById).forEach(function (rowId) {
          delete selectedRowIds[rowId];
        });
      }

      return _extends({}, state, {
        selectedRowIds: selectedRowIds
      });
    }

    if (action.type === actions.toggleRowSelected) {
      var id = action.id,
          _setSelected = action.value;
      var _rowsById = instance.rowsById,
          _instance$selectSubRo = instance.selectSubRows,
          selectSubRows = _instance$selectSubRo === void 0 ? true : _instance$selectSubRo; // Join the ids of deep rows
      // to make a key, then manage all of the keys
      // in a flat object

      var row = _rowsById[id];
      var isSelected = row.isSelected;
      var shouldExist = typeof _setSelected !== 'undefined' ? _setSelected : !isSelected;

      if (isSelected === shouldExist) {
        return state;
      }

      var newSelectedRowIds = _extends({}, state.selectedRowIds);

      var handleRowById = function handleRowById(id) {
        var row = _rowsById[id];

        if (!row.isGrouped) {
          if (shouldExist) {
            newSelectedRowIds[id] = true;
          } else {
            delete newSelectedRowIds[id];
          }
        }

        if (selectSubRows && row.subRows) {
          return row.subRows.forEach(function (row) {
            return handleRowById(row.id);
          });
        }
      };

      handleRowById(id);
      return _extends({}, state, {
        selectedRowIds: newSelectedRowIds
      });
    }
  }

  function useInstance$8(instance) {
    var data = instance.data,
        rows = instance.rows,
        getHooks = instance.getHooks,
        plugins = instance.plugins,
        rowsById = instance.rowsById,
        _instance$nonGroupedR2 = instance.nonGroupedRowsById,
        nonGroupedRowsById = _instance$nonGroupedR2 === void 0 ? rowsById : _instance$nonGroupedR2,
        _instance$autoResetSe = instance.autoResetSelectedRows,
        autoResetSelectedRows = _instance$autoResetSe === void 0 ? true : _instance$autoResetSe,
        selectedRowIds = instance.state.selectedRowIds,
        _instance$selectSubRo2 = instance.selectSubRows,
        selectSubRows = _instance$selectSubRo2 === void 0 ? true : _instance$selectSubRo2,
        dispatch = instance.dispatch;
    ensurePluginOrder(plugins, ['useFilters', 'useGroupBy', 'useSortBy'], 'useRowSelect');
    var selectedFlatRows = React.useMemo(function () {
      var selectedFlatRows = [];
      rows.forEach(function (row) {
        var isSelected = selectSubRows ? getRowIsSelected(row, selectedRowIds) : !!selectedRowIds[row.id];
        row.isSelected = !!isSelected;
        row.isSomeSelected = isSelected === null;

        if (isSelected) {
          selectedFlatRows.push(row);
        }
      });
      return selectedFlatRows;
    }, [rows, selectSubRows, selectedRowIds]);
    var isAllRowsSelected = Boolean(Object.keys(nonGroupedRowsById).length && Object.keys(selectedRowIds).length);

    if (isAllRowsSelected) {
      if (Object.keys(nonGroupedRowsById).some(function (id) {
        return !selectedRowIds[id];
      })) {
        isAllRowsSelected = false;
      }
    }

    var getAutoResetSelectedRows = useGetLatest(autoResetSelectedRows);
    useMountedLayoutEffect(function () {
      if (getAutoResetSelectedRows()) {
        dispatch({
          type: actions.resetSelectedRows
        });
      }
    }, [dispatch, data]);
    var toggleAllRowsSelected = React.useCallback(function (value) {
      return dispatch({
        type: actions.toggleAllRowsSelected,
        value: value
      });
    }, [dispatch]);
    var toggleRowSelected = React.useCallback(function (id, value) {
      return dispatch({
        type: actions.toggleRowSelected,
        id: id,
        value: value
      });
    }, [dispatch]);
    var getInstance = useGetLatest(instance);
    var getToggleAllRowsSelectedProps = makePropGetter(getHooks().getToggleAllRowsSelectedProps, {
      instance: getInstance()
    });
    Object.assign(instance, {
      selectedFlatRows: selectedFlatRows,
      isAllRowsSelected: isAllRowsSelected,
      toggleRowSelected: toggleRowSelected,
      toggleAllRowsSelected: toggleAllRowsSelected,
      getToggleAllRowsSelectedProps: getToggleAllRowsSelectedProps
    });
  }

  function prepareRow$3(row, _ref3) {
    var instance = _ref3.instance;

    row.toggleRowSelected = function (set) {
      return instance.toggleRowSelected(row.id, set);
    };

    row.getToggleRowSelectedProps = makePropGetter(instance.getHooks().getToggleRowSelectedProps, {
      instance: instance,
      row: row
    });
  }

  function getRowIsSelected(row, selectedRowIds) {
    if (selectedRowIds[row.id]) {
      return true;
    }

    if (row.subRows && row.subRows.length) {
      var allChildrenSelected = true;
      var someSelected = false;
      row.subRows.forEach(function (subRow) {
        // Bail out early if we know both of these
        if (someSelected && !allChildrenSelected) {
          return;
        }

        if (getRowIsSelected(subRow, selectedRowIds)) {
          someSelected = true;
        } else {
          allChildrenSelected = false;
        }
      });
      return allChildrenSelected ? true : someSelected ? null : false;
    }

    return false;
  }

  var defaultInitialRowStateAccessor = function defaultInitialRowStateAccessor(originalRow) {
    return {};
  };

  var defaultInitialCellStateAccessor = function defaultInitialCellStateAccessor(originalRow) {
    return {};
  }; // Actions


  actions.setRowState = 'setRowState';
  actions.setCellState = 'setCellState';
  actions.resetRowState = 'resetRowState';
  var useRowState = function useRowState(hooks) {
    hooks.stateReducers.push(reducer$9);
    hooks.useInstance.push(useInstance$9);
    hooks.prepareRow.push(prepareRow$4);
  };
  useRowState.pluginName = 'useRowState';

  function reducer$9(state, action, previousState, instance) {
    var _instance$initialRowS = instance.initialRowStateAccessor,
        initialRowStateAccessor = _instance$initialRowS === void 0 ? defaultInitialRowStateAccessor : _instance$initialRowS,
        _instance$initialCell = instance.initialCellStateAccessor,
        initialCellStateAccessor = _instance$initialCell === void 0 ? defaultInitialCellStateAccessor : _instance$initialCell,
        rowsById = instance.rowsById;

    if (action.type === actions.init) {
      return _extends({
        rowState: {}
      }, state);
    }

    if (action.type === actions.resetRowState) {
      return _extends({}, state, {
        rowState: instance.initialState.rowState || {}
      });
    }

    if (action.type === actions.setRowState) {
      var _extends2;

      var rowId = action.rowId,
          value = action.value;
      var oldRowState = typeof state.rowState[rowId] !== 'undefined' ? state.rowState[rowId] : initialRowStateAccessor(rowsById[rowId].original);
      return _extends({}, state, {
        rowState: _extends({}, state.rowState, (_extends2 = {}, _extends2[rowId] = functionalUpdate(value, oldRowState), _extends2))
      });
    }

    if (action.type === actions.setCellState) {
      var _oldRowState$cellStat, _extends3, _extends4;

      var _rowId = action.rowId,
          columnId = action.columnId,
          _value = action.value;

      var _oldRowState = typeof state.rowState[_rowId] !== 'undefined' ? state.rowState[_rowId] : initialRowStateAccessor(rowsById[_rowId].original);

      var oldCellState = typeof (_oldRowState == null ? void 0 : (_oldRowState$cellStat = _oldRowState.cellState) == null ? void 0 : _oldRowState$cellStat[columnId]) !== 'undefined' ? _oldRowState.cellState[columnId] : initialCellStateAccessor(rowsById[_rowId].original);
      return _extends({}, state, {
        rowState: _extends({}, state.rowState, (_extends4 = {}, _extends4[_rowId] = _extends({}, _oldRowState, {
          cellState: _extends({}, _oldRowState.cellState || {}, (_extends3 = {}, _extends3[columnId] = functionalUpdate(_value, oldCellState), _extends3))
        }), _extends4))
      });
    }
  }

  function useInstance$9(instance) {
    var _instance$autoResetRo = instance.autoResetRowState,
        autoResetRowState = _instance$autoResetRo === void 0 ? true : _instance$autoResetRo,
        data = instance.data,
        dispatch = instance.dispatch;
    var setRowState = React.useCallback(function (rowId, value) {
      return dispatch({
        type: actions.setRowState,
        rowId: rowId,
        value: value
      });
    }, [dispatch]);
    var setCellState = React.useCallback(function (rowId, columnId, value) {
      return dispatch({
        type: actions.setCellState,
        rowId: rowId,
        columnId: columnId,
        value: value
      });
    }, [dispatch]);
    var getAutoResetRowState = useGetLatest(autoResetRowState);
    useMountedLayoutEffect(function () {
      if (getAutoResetRowState()) {
        dispatch({
          type: actions.resetRowState
        });
      }
    }, [data]);
    Object.assign(instance, {
      setRowState: setRowState,
      setCellState: setCellState
    });
  }

  function prepareRow$4(row, _ref) {
    var instance = _ref.instance;
    var _instance$initialRowS2 = instance.initialRowStateAccessor,
        initialRowStateAccessor = _instance$initialRowS2 === void 0 ? defaultInitialRowStateAccessor : _instance$initialRowS2,
        _instance$initialCell2 = instance.initialCellStateAccessor,
        initialCellStateAccessor = _instance$initialCell2 === void 0 ? defaultInitialCellStateAccessor : _instance$initialCell2,
        rowState = instance.state.rowState;

    if (row.original) {
      row.state = typeof rowState[row.id] !== 'undefined' ? rowState[row.id] : initialRowStateAccessor(row.original);

      row.setState = function (updater) {
        return instance.setRowState(row.id, updater);
      };

      row.cells.forEach(function (cell) {
        if (!row.state.cellState) {
          row.state.cellState = {};
        }

        cell.state = typeof row.state.cellState[cell.column.id] !== 'undefined' ? row.state.cellState[cell.column.id] : initialCellStateAccessor(row.original);

        cell.setState = function (updater) {
          return instance.setCellState(row.id, cell.column.id, updater);
        };
      });
    }
  }

  actions.resetColumnOrder = 'resetColumnOrder';
  actions.setColumnOrder = 'setColumnOrder';
  var useColumnOrder = function useColumnOrder(hooks) {
    hooks.stateReducers.push(reducer$a);
    hooks.visibleColumnsDeps.push(function (deps, _ref) {
      var instance = _ref.instance;
      return [].concat(deps, [instance.state.columnOrder]);
    });
    hooks.visibleColumns.push(visibleColumns$2);
    hooks.useInstance.push(useInstance$a);
  };
  useColumnOrder.pluginName = 'useColumnOrder';

  function reducer$a(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        columnOrder: []
      }, state);
    }

    if (action.type === actions.resetColumnOrder) {
      return _extends({}, state, {
        columnOrder: instance.initialState.columnOrder || []
      });
    }

    if (action.type === actions.setColumnOrder) {
      return _extends({}, state, {
        columnOrder: functionalUpdate(action.columnOrder, state.columnOrder)
      });
    }
  }

  function visibleColumns$2(columns, _ref2) {
    var columnOrder = _ref2.instance.state.columnOrder;

    // If there is no order, return the normal columns
    if (!columnOrder || !columnOrder.length) {
      return columns;
    }

    var columnOrderCopy = [].concat(columnOrder); // If there is an order, make a copy of the columns

    var columnsCopy = [].concat(columns); // And make a new ordered array of the columns

    var columnsInOrder = []; // Loop over the columns and place them in order into the new array

    var _loop = function _loop() {
      var targetColumnId = columnOrderCopy.shift();
      var foundIndex = columnsCopy.findIndex(function (d) {
        return d.id === targetColumnId;
      });

      if (foundIndex > -1) {
        columnsInOrder.push(columnsCopy.splice(foundIndex, 1)[0]);
      }
    };

    while (columnsCopy.length && columnOrderCopy.length) {
      _loop();
    } // If there are any columns left, add them to the end


    return [].concat(columnsInOrder, columnsCopy);
  }

  function useInstance$a(instance) {
    var dispatch = instance.dispatch;
    instance.setColumnOrder = React.useCallback(function (columnOrder) {
      return dispatch({
        type: actions.setColumnOrder,
        columnOrder: columnOrder
      });
    }, [dispatch]);
  }

  defaultColumn.canResize = true; // Actions

  actions.columnStartResizing = 'columnStartResizing';
  actions.columnResizing = 'columnResizing';
  actions.columnDoneResizing = 'columnDoneResizing';
  var useResizeColumns = function useResizeColumns(hooks) {
    hooks.getResizerProps = [defaultGetResizerProps];
    hooks.getHeaderProps.push({
      style: {
        position: 'relative'
      }
    });
    hooks.stateReducers.push(reducer$b);
    hooks.useInstance.push(useInstance$b);
    hooks.useInstanceBeforeDimensions.push(useInstanceBeforeDimensions$1);
  };

  var defaultGetResizerProps = function defaultGetResizerProps(props, _ref) {
    var instance = _ref.instance,
        header = _ref.header;
    var dispatch = instance.dispatch;

    var onResizeStart = function onResizeStart(e, header) {
      var isTouchEvent = false;

      if (e.type === 'touchstart') {
        // lets not respond to multiple touches (e.g. 2 or 3 fingers)
        if (e.touches && e.touches.length > 1) {
          return;
        }

        isTouchEvent = true;
      }

      var headersToResize = getLeafHeaders(header);
      var headerIdWidths = headersToResize.map(function (d) {
        return [d.id, d.totalWidth];
      });
      var clientX = isTouchEvent ? Math.round(e.touches[0].clientX) : e.clientX;

      var dispatchMove = function dispatchMove(clientXPos) {
        dispatch({
          type: actions.columnResizing,
          clientX: clientXPos
        });
      };

      var dispatchEnd = function dispatchEnd() {
        return dispatch({
          type: actions.columnDoneResizing
        });
      };

      var handlersAndEvents = {
        mouse: {
          moveEvent: 'mousemove',
          moveHandler: function moveHandler(e) {
            return dispatchMove(e.clientX);
          },
          upEvent: 'mouseup',
          upHandler: function upHandler(e) {
            document.removeEventListener('mousemove', handlersAndEvents.mouse.moveHandler);
            document.removeEventListener('mouseup', handlersAndEvents.mouse.upHandler);
            dispatchEnd();
          }
        },
        touch: {
          moveEvent: 'touchmove',
          moveHandler: function moveHandler(e) {
            if (e.cancelable) {
              e.preventDefault();
              e.stopPropagation();
            }

            dispatchMove(e.touches[0].clientX);
            return false;
          },
          upEvent: 'touchend',
          upHandler: function upHandler(e) {
            document.removeEventListener(handlersAndEvents.touch.moveEvent, handlersAndEvents.touch.moveHandler);
            document.removeEventListener(handlersAndEvents.touch.upEvent, handlersAndEvents.touch.moveHandler);
            dispatchEnd();
          }
        }
      };
      var events = isTouchEvent ? handlersAndEvents.touch : handlersAndEvents.mouse;
      var passiveIfSupported = passiveEventSupported() ? {
        passive: false
      } : false;
      document.addEventListener(events.moveEvent, events.moveHandler, passiveIfSupported);
      document.addEventListener(events.upEvent, events.upHandler, passiveIfSupported);
      dispatch({
        type: actions.columnStartResizing,
        columnId: header.id,
        columnWidth: header.totalWidth,
        headerIdWidths: headerIdWidths,
        clientX: clientX
      });
    };

    return [props, {
      onMouseDown: function onMouseDown(e) {
        return e.persist() || onResizeStart(e, header);
      },
      onTouchStart: function onTouchStart(e) {
        return e.persist() || onResizeStart(e, header);
      },
      style: {
        cursor: 'ew-resize'
      },
      draggable: false,
      role: 'separator'
    }];
  };

  useResizeColumns.pluginName = 'useResizeColumns';

  function reducer$b(state, action) {
    if (action.type === actions.init) {
      return _extends({
        columnResizing: {
          columnWidths: {}
        }
      }, state);
    }

    if (action.type === actions.columnStartResizing) {
      var clientX = action.clientX,
          columnId = action.columnId,
          columnWidth = action.columnWidth,
          headerIdWidths = action.headerIdWidths;
      return _extends({}, state, {
        columnResizing: _extends({}, state.columnResizing, {
          startX: clientX,
          headerIdWidths: headerIdWidths,
          columnWidth: columnWidth,
          isResizingColumn: columnId
        })
      });
    }

    if (action.type === actions.columnResizing) {
      var _clientX = action.clientX;
      var _state$columnResizing = state.columnResizing,
          startX = _state$columnResizing.startX,
          _columnWidth = _state$columnResizing.columnWidth,
          _headerIdWidths = _state$columnResizing.headerIdWidths;
      var deltaX = _clientX - startX;
      var percentageDeltaX = deltaX / _columnWidth;
      var newColumnWidths = {};

      _headerIdWidths.forEach(function (_ref2) {
        var headerId = _ref2[0],
            headerWidth = _ref2[1];
        newColumnWidths[headerId] = Math.max(headerWidth + headerWidth * percentageDeltaX, 0);
      });

      return _extends({}, state, {
        columnResizing: _extends({}, state.columnResizing, {
          columnWidths: _extends({}, state.columnResizing.columnWidths, {}, newColumnWidths)
        })
      });
    }

    if (action.type === actions.columnDoneResizing) {
      return _extends({}, state, {
        columnResizing: _extends({}, state.columnResizing, {
          startX: null,
          isResizingColumn: null
        })
      });
    }
  }

  var useInstanceBeforeDimensions$1 = function useInstanceBeforeDimensions(instance) {
    var flatHeaders = instance.flatHeaders,
        disableResizing = instance.disableResizing,
        getHooks = instance.getHooks,
        columnResizing = instance.state.columnResizing;
    var getInstance = useGetLatest(instance);
    flatHeaders.forEach(function (header) {
      var canResize = getFirstDefined(header.disableResizing === true ? false : undefined, disableResizing === true ? false : undefined, true);
      header.canResize = canResize;
      header.width = columnResizing.columnWidths[header.id] || header.width;
      header.isResizing = columnResizing.isResizingColumn === header.id;

      if (canResize) {
        header.getResizerProps = makePropGetter(getHooks().getResizerProps, {
          instance: getInstance(),
          header: header
        });
      }
    });
  };

  function useInstance$b(_ref3) {
    var plugins = _ref3.plugins;
    ensurePluginOrder(plugins, ['useAbsoluteLayout'], 'useResizeColumns');
  }

  function getLeafHeaders(header) {
    var leafHeaders = [];

    var recurseHeader = function recurseHeader(header) {
      if (header.columns && header.columns.length) {
        header.columns.map(recurseHeader);
      }

      leafHeaders.push(header);
    };

    recurseHeader(header);
    return leafHeaders;
  }

  var cellStyles = {
    position: 'absolute',
    top: 0
  };
  var useAbsoluteLayout = function useAbsoluteLayout(hooks) {
    hooks.getTableBodyProps.push(getRowStyles);
    hooks.getRowProps.push(getRowStyles);
    hooks.getHeaderGroupProps.push(getRowStyles);
    hooks.getFooterGroupProps.push(getRowStyles);
    hooks.getHeaderProps.push(function (props, _ref) {
      var column = _ref.column;
      return [props, {
        style: _extends({}, cellStyles, {
          left: column.totalLeft + "px",
          width: column.totalWidth + "px"
        })
      }];
    });
    hooks.getCellProps.push(function (props, _ref2) {
      var cell = _ref2.cell;
      return [props, {
        style: _extends({}, cellStyles, {
          left: cell.column.totalLeft + "px",
          width: cell.column.totalWidth + "px"
        })
      }];
    });
    hooks.getFooterProps.push(function (props, _ref3) {
      var column = _ref3.column;
      return [props, {
        style: _extends({}, cellStyles, {
          left: column.totalLeft + "px",
          width: column.totalWidth + "px"
        })
      }];
    });
  };
  useAbsoluteLayout.pluginName = 'useAbsoluteLayout';

  var getRowStyles = function getRowStyles(props, _ref4) {
    var instance = _ref4.instance;
    return [props, {
      style: {
        position: 'relative',
        width: instance.totalColumnsWidth + "px"
      }
    }];
  };

  var cellStyles$1 = {
    display: 'inline-block',
    boxSizing: 'border-box'
  };

  var getRowStyles$1 = function getRowStyles(props, _ref) {
    var instance = _ref.instance;
    return [props, {
      style: {
        display: 'flex',
        width: instance.totalColumnsWidth + "px"
      }
    }];
  };

  var useBlockLayout = function useBlockLayout(hooks) {
    hooks.getRowProps.push(getRowStyles$1);
    hooks.getHeaderGroupProps.push(getRowStyles$1);
    hooks.getFooterGroupProps.push(getRowStyles$1);
    hooks.getHeaderProps.push(function (props, _ref2) {
      var column = _ref2.column;
      return [props, {
        style: _extends({}, cellStyles$1, {
          width: column.totalWidth + "px"
        })
      }];
    });
    hooks.getCellProps.push(function (props, _ref3) {
      var cell = _ref3.cell;
      return [props, {
        style: _extends({}, cellStyles$1, {
          width: cell.column.totalWidth + "px"
        })
      }];
    });
    hooks.getFooterProps.push(function (props, _ref4) {
      var column = _ref4.column;
      return [props, {
        style: _extends({}, cellStyles$1, {
          width: column.totalWidth + "px"
        })
      }];
    });
  };
  useBlockLayout.pluginName = 'useBlockLayout';

  function useFlexLayout(hooks) {
    hooks.getTableProps.push(getTableProps);
    hooks.getRowProps.push(getRowStyles$2);
    hooks.getHeaderGroupProps.push(getRowStyles$2);
    hooks.getFooterGroupProps.push(getRowStyles$2);
    hooks.getHeaderProps.push(getHeaderProps);
    hooks.getCellProps.push(getCellProps);
    hooks.getFooterProps.push(getFooterProps);
  }
  useFlexLayout.pluginName = 'useFlexLayout';

  var getTableProps = function getTableProps(props, _ref) {
    var instance = _ref.instance;
    return [props, {
      style: {
        minWidth: instance.totalColumnsWidth + "px"
      }
    }];
  };

  var getRowStyles$2 = function getRowStyles(props, _ref2) {
    var instance = _ref2.instance;
    return [props, {
      style: {
        display: 'flex',
        flex: '1 0 auto',
        minWidth: instance.totalColumnsMinWidth + "px"
      }
    }];
  };

  var getHeaderProps = function getHeaderProps(props, _ref3) {
    var column = _ref3.column;
    return [props, {
      style: {
        boxSizing: 'border-box',
        flex: column.totalFlexWidth ? column.totalFlexWidth + " 0 auto" : undefined,
        minWidth: column.totalMinWidth + "px",
        width: column.totalWidth + "px"
      }
    }];
  };

  var getCellProps = function getCellProps(props, _ref4) {
    var cell = _ref4.cell;
    return [props, {
      style: {
        boxSizing: 'border-box',
        flex: cell.column.totalFlexWidth + " 0 auto",
        minWidth: cell.column.totalMinWidth + "px",
        width: cell.column.totalWidth + "px"
      }
    }];
  };

  var getFooterProps = function getFooterProps(props, _ref5) {
    var column = _ref5.column;
    return [props, {
      style: {
        boxSizing: 'border-box',
        flex: column.totalFlexWidth ? column.totalFlexWidth + " 0 auto" : undefined,
        minWidth: column.totalMinWidth + "px",
        width: column.totalWidth + "px"
      }
    }];
  };

  exports._UNSTABLE_usePivotColumns = _UNSTABLE_usePivotColumns;
  exports.actions = actions;
  exports.defaultColumn = defaultColumn;
  exports.defaultGroupByFn = defaultGroupByFn;
  exports.defaultOrderByFn = defaultOrderByFn;
  exports.ensurePluginOrder = ensurePluginOrder;
  exports.flexRender = flexRender;
  exports.functionalUpdate = functionalUpdate;
  exports.loopHooks = loopHooks;
  exports.makePropGetter = makePropGetter;
  exports.makeRenderer = makeRenderer;
  exports.reduceHooks = reduceHooks;
  exports.safeUseLayoutEffect = safeUseLayoutEffect;
  exports.useAbsoluteLayout = useAbsoluteLayout;
  exports.useAsyncDebounce = useAsyncDebounce;
  exports.useBlockLayout = useBlockLayout;
  exports.useColumnOrder = useColumnOrder;
  exports.useExpanded = useExpanded;
  exports.useFilters = useFilters;
  exports.useFlexLayout = useFlexLayout;
  exports.useGetLatest = useGetLatest;
  exports.useGlobalFilter = useGlobalFilter;
  exports.useGroupBy = useGroupBy;
  exports.useMountedLayoutEffect = useMountedLayoutEffect;
  exports.usePagination = usePagination;
  exports.useResizeColumns = useResizeColumns;
  exports.useRowSelect = useRowSelect;
  exports.useRowState = useRowState;
  exports.useSortBy = useSortBy;
  exports.useTable = useTable;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=react-table.development.js.map


/***/ }),

/***/ "./node_modules/react-table/index.js":
/*!*******************************************!*\
  !*** ./node_modules/react-table/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./dist/react-table.development.js */ "./node_modules/react-table/dist/react-table.development.js")
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_5030f387d328e4415785 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5030f387d328e4415785 */ "dll-reference dll_5030f387d328e4415785"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, ServerStyleSheet, StyleSheetConsumer, StyleSheetContext, StyleSheetManager, ThemeConsumer, ThemeContext, ThemeProvider, __PRIVATE__, createGlobalStyle, css, isStyledComponent, keyframes, useTheme, version, withTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return ServerStyleSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetConsumer", function() { return StyleSheetConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetContext", function() { return StyleSheetContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return StyleSheetManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return ThemeConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__PRIVATE__", function() { return __PRIVATE__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return createGlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return isStyledComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return useTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);








function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

// 
var interleave = (function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
});

// 
var isPlainObject = (function (x) {
  return x !== null && typeof x === 'object' && (x.toString ? x.toString() : Object.prototype.toString.call(x)) === '[object Object]' && !Object(react_is__WEBPACK_IMPORTED_MODULE_0__["typeOf"])(x);
});

// 
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// 
function isFunction(test) {
  return typeof test === 'function';
}

// 
function getComponentName(target) {
  return ( true ? typeof target === 'string' && target : undefined) || // $FlowFixMe
  target.displayName || // $FlowFixMe
  target.name || 'Component';
}

// 
function isStatelessFunction(test) {
  return typeof test === 'function' && !(test.prototype && test.prototype.isReactComponent);
}

// 
function isStyledComponent(target) {
  return target && typeof target.styledComponentId === 'string';
}

// 
var SC_ATTR = typeof process !== 'undefined' && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || 'data-styled';
var SC_ATTR_ACTIVE = 'active';
var SC_ATTR_VERSION = 'data-styled-version';
var SC_VERSION = "5.1.1";
var SPLITTER = '/*!sc*/\n';
var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;
var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY || typeof process !== 'undefined' && (process.env.REACT_APP_SC_DISABLE_SPEEDY || process.env.SC_DISABLE_SPEEDY) || "development" !== 'production'; // Shared empty execution context when generating static styles

var STATIC_EXECUTION_CONTEXT = {};

// 

/* eslint-disable camelcase, no-undef */
var getNonce = function getNonce() {
  return  true ? __webpack_require__.nc : undefined;
};

var errorMap = {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  "11": "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  "12": "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
  "13": "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
  "14": "ThemeProvider: \"theme\" prop is required.\n\n",
  "15": "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
  "16": "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
  "17": "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"
};

// 
var ERRORS =  true ? errorMap : undefined;
/**
 * super basic version of sprintf
 */

function format() {
  var a = arguments.length <= 0 ? undefined : arguments[0];
  var b = [];

  for (var c = 1, len = arguments.length; c < len; c += 1) {
    b.push(c < 0 || arguments.length <= c ? undefined : arguments[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */


function throwStyledComponentsError(code) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (false) {} else {
    throw new Error(format.apply(void 0, [ERRORS[code]].concat(interpolations)).trim());
  }
}

// 
var ELEMENT_TYPE = 1;
/* Node.ELEMENT_TYPE */

/** Find last style element if any inside target */

var findLastStyleTag = function findLastStyleTag(target) {
  var childNodes = target.childNodes;

  for (var i = childNodes.length; i >= 0; i--) {
    var child = childNodes[i];

    if (child && child.nodeType === ELEMENT_TYPE && child.hasAttribute(SC_ATTR)) {
      return child;
    }
  }

  return undefined;
};
/** Create a style element inside `target` or <head> after the last */


var makeStyleTag = function makeStyleTag(target) {
  var head = document.head;
  var parent = target || head;
  var style = document.createElement('style');
  var prevStyle = findLastStyleTag(parent);
  var nextSibling = prevStyle !== undefined ? prevStyle.nextSibling : null;
  style.setAttribute(SC_ATTR, SC_ATTR_ACTIVE);
  style.setAttribute(SC_ATTR_VERSION, SC_VERSION);
  var nonce = getNonce();
  if (nonce) style.setAttribute('nonce', nonce);
  parent.insertBefore(style, nextSibling);
  return style;
};
/** Get the CSSStyleSheet instance for a given style element */

var getSheet = function getSheet(tag) {
  if (tag.sheet) {
    return tag.sheet;
  } // Avoid Firefox quirk where the style element might not have a sheet property


  var _document = document,
      styleSheets = _document.styleSheets;

  for (var i = 0, l = styleSheets.length; i < l; i++) {
    var sheet = styleSheets[i];

    if (sheet.ownerNode === tag) {
      return sheet;
    }
  }

  throwStyledComponentsError(17);
  return undefined;
};

// 
/** Create a CSSStyleSheet-like tag depending on the environment */

var makeTag = function makeTag(_ref) {
  var isServer = _ref.isServer,
      useCSSOMInjection = _ref.useCSSOMInjection,
      target = _ref.target;

  if (isServer) {
    return new VirtualTag(target);
  } else if (useCSSOMInjection) {
    return new CSSOMTag(target);
  } else {
    return new TextTag(target);
  }
};
var CSSOMTag = /*#__PURE__*/function () {
  function CSSOMTag(target) {
    var element = this.element = makeStyleTag(target); // Avoid Edge bug where empty style elements don't create sheets

    element.appendChild(document.createTextNode(''));
    this.sheet = getSheet(element);
    this.length = 0;
  }

  var _proto = CSSOMTag.prototype;

  _proto.insertRule = function insertRule(index, rule) {
    try {
      this.sheet.insertRule(rule, index);
      this.length++;
      return true;
    } catch (_error) {
      return false;
    }
  };

  _proto.deleteRule = function deleteRule(index) {
    this.sheet.deleteRule(index);
    this.length--;
  };

  _proto.getRule = function getRule(index) {
    var rule = this.sheet.cssRules[index]; // Avoid IE11 quirk where cssText is inaccessible on some invalid rules

    if (rule !== undefined && typeof rule.cssText === 'string') {
      return rule.cssText;
    } else {
      return '';
    }
  };

  return CSSOMTag;
}();
/** A Tag that emulates the CSSStyleSheet API but uses text nodes */

var TextTag = /*#__PURE__*/function () {
  function TextTag(target) {
    var element = this.element = makeStyleTag(target);
    this.nodes = element.childNodes;
    this.length = 0;
  }

  var _proto2 = TextTag.prototype;

  _proto2.insertRule = function insertRule(index, rule) {
    if (index <= this.length && index >= 0) {
      var node = document.createTextNode(rule);
      var refNode = this.nodes[index];
      this.element.insertBefore(node, refNode || null);
      this.length++;
      return true;
    } else {
      return false;
    }
  };

  _proto2.deleteRule = function deleteRule(index) {
    this.element.removeChild(this.nodes[index]);
    this.length--;
  };

  _proto2.getRule = function getRule(index) {
    if (index < this.length) {
      return this.nodes[index].textContent;
    } else {
      return '';
    }
  };

  return TextTag;
}();
/** A completely virtual (server-side) Tag that doesn't manipulate the DOM */

var VirtualTag = /*#__PURE__*/function () {
  function VirtualTag(_target) {
    this.rules = [];
    this.length = 0;
  }

  var _proto3 = VirtualTag.prototype;

  _proto3.insertRule = function insertRule(index, rule) {
    if (index <= this.length) {
      this.rules.splice(index, 0, rule);
      this.length++;
      return true;
    } else {
      return false;
    }
  };

  _proto3.deleteRule = function deleteRule(index) {
    this.rules.splice(index, 1);
    this.length--;
  };

  _proto3.getRule = function getRule(index) {
    if (index < this.length) {
      return this.rules[index];
    } else {
      return '';
    }
  };

  return VirtualTag;
}();

// 
/** Create a GroupedTag with an underlying Tag implementation */

var makeGroupedTag = function makeGroupedTag(tag) {
  return new DefaultGroupedTag(tag);
};
var BASE_SIZE = 1 << 9;

var DefaultGroupedTag = /*#__PURE__*/function () {
  function DefaultGroupedTag(tag) {
    this.groupSizes = new Uint32Array(BASE_SIZE);
    this.length = BASE_SIZE;
    this.tag = tag;
  }

  var _proto = DefaultGroupedTag.prototype;

  _proto.indexOfGroup = function indexOfGroup(group) {
    var index = 0;

    for (var i = 0; i < group; i++) {
      index += this.groupSizes[i];
    }

    return index;
  };

  _proto.insertRules = function insertRules(group, rules) {
    if (group >= this.groupSizes.length) {
      var oldBuffer = this.groupSizes;
      var oldSize = oldBuffer.length;
      var newSize = oldSize;

      while (group >= newSize) {
        newSize <<= 1;

        if (newSize < 0) {
          throwStyledComponentsError(16, "" + group);
        }
      }

      this.groupSizes = new Uint32Array(newSize);
      this.groupSizes.set(oldBuffer);
      this.length = newSize;

      for (var i = oldSize; i < newSize; i++) {
        this.groupSizes[i] = 0;
      }
    }

    var ruleIndex = this.indexOfGroup(group + 1);

    for (var _i = 0, l = rules.length; _i < l; _i++) {
      if (this.tag.insertRule(ruleIndex, rules[_i])) {
        this.groupSizes[group]++;
        ruleIndex++;
      }
    }
  };

  _proto.clearGroup = function clearGroup(group) {
    if (group < this.length) {
      var length = this.groupSizes[group];
      var startIndex = this.indexOfGroup(group);
      var endIndex = startIndex + length;
      this.groupSizes[group] = 0;

      for (var i = startIndex; i < endIndex; i++) {
        this.tag.deleteRule(startIndex);
      }
    }
  };

  _proto.getGroup = function getGroup(group) {
    var css = '';

    if (group >= this.length || this.groupSizes[group] === 0) {
      return css;
    }

    var length = this.groupSizes[group];
    var startIndex = this.indexOfGroup(group);
    var endIndex = startIndex + length;

    for (var i = startIndex; i < endIndex; i++) {
      css += "" + this.tag.getRule(i) + SPLITTER;
    }

    return css;
  };

  return DefaultGroupedTag;
}();

// 
var MAX_SMI = 1 << 31 - 1;
var groupIDRegister = new Map();
var reverseRegister = new Map();
var nextFreeGroup = 1;
var getGroupForId = function getGroupForId(id) {
  if (groupIDRegister.has(id)) {
    return groupIDRegister.get(id);
  }

  var group = nextFreeGroup++;

  if ( true && ((group | 0) < 0 || group > MAX_SMI)) {
    throwStyledComponentsError(16, "" + group);
  }

  groupIDRegister.set(id, group);
  reverseRegister.set(group, id);
  return group;
};
var getIdForGroup = function getIdForGroup(group) {
  return reverseRegister.get(group);
};
var setGroupForId = function setGroupForId(id, group) {
  if (group >= nextFreeGroup) {
    nextFreeGroup = group + 1;
  }

  groupIDRegister.set(id, group);
  reverseRegister.set(group, id);
};

// 
var SELECTOR = "style[" + SC_ATTR + "][" + SC_ATTR_VERSION + "=\"" + SC_VERSION + "\"]";
var MARKER_RE = new RegExp("^" + SC_ATTR + "\\.g(\\d+)\\[id=\"([\\w\\d-]+)\"\\].*?\"([^\"]*)");
var outputSheet = function outputSheet(sheet) {
  var tag = sheet.getTag();
  var length = tag.length;
  var css = '';

  for (var group = 0; group < length; group++) {
    var id = getIdForGroup(group);
    if (id === undefined) continue;
    var names = sheet.names.get(id);
    var rules = tag.getGroup(group);
    if (names === undefined || rules.length === 0) continue;
    var selector = SC_ATTR + ".g" + group + "[id=\"" + id + "\"]";
    var content = '';

    if (names !== undefined) {
      names.forEach(function (name) {
        if (name.length > 0) {
          content += name + ",";
        }
      });
    } // NOTE: It's easier to collect rules and have the marker
    // after the actual rules to simplify the rehydration


    css += "" + rules + selector + "{content:\"" + content + "\"}" + SPLITTER;
  }

  return css;
};

var rehydrateNamesFromContent = function rehydrateNamesFromContent(sheet, id, content) {
  var names = content.split(',');
  var name;

  for (var i = 0, l = names.length; i < l; i++) {
    // eslint-disable-next-line
    if (name = names[i]) {
      sheet.registerName(id, name);
    }
  }
};

var rehydrateSheetFromTag = function rehydrateSheetFromTag(sheet, style) {
  var parts = style.innerHTML.split(SPLITTER);
  var rules = [];

  for (var i = 0, l = parts.length; i < l; i++) {
    var part = parts[i].trim();
    if (!part) continue;
    var marker = part.match(MARKER_RE);

    if (marker) {
      var group = parseInt(marker[1], 10) | 0;
      var id = marker[2];

      if (group !== 0) {
        // Rehydrate componentId to group index mapping
        setGroupForId(id, group); // Rehydrate names and rules
        // looks like: data-styled.g11[id="idA"]{content:"nameA,"}

        rehydrateNamesFromContent(sheet, id, marker[3]);
        sheet.getTag().insertRules(group, rules);
      }

      rules.length = 0;
    } else {
      rules.push(part);
    }
  }
};

var rehydrateSheet = function rehydrateSheet(sheet) {
  var nodes = document.querySelectorAll(SELECTOR);

  for (var i = 0, l = nodes.length; i < l; i++) {
    var node = nodes[i];

    if (node && node.getAttribute(SC_ATTR) !== SC_ATTR_ACTIVE) {
      rehydrateSheetFromTag(sheet, node);

      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
    }
  }
};

var SHOULD_REHYDRATE = IS_BROWSER;
var defaultOptions = {
  isServer: !IS_BROWSER,
  useCSSOMInjection: !DISABLE_SPEEDY
};
/** Contains the main stylesheet logic for stringification and caching */

var StyleSheet = /*#__PURE__*/function () {
  /** Register a group ID to give it an index */
  StyleSheet.registerId = function registerId(id) {
    return getGroupForId(id);
  };

  function StyleSheet(options, globalStyles, names) {
    if (options === void 0) {
      options = defaultOptions;
    }

    if (globalStyles === void 0) {
      globalStyles = {};
    }

    this.options = _extends({}, defaultOptions, {}, options);
    this.gs = globalStyles;
    this.names = new Map(names); // We rehydrate only once and use the sheet that is created first

    if (!this.options.isServer && IS_BROWSER && SHOULD_REHYDRATE) {
      SHOULD_REHYDRATE = false;
      rehydrateSheet(this);
    }
  }

  var _proto = StyleSheet.prototype;

  _proto.reconstructWithOptions = function reconstructWithOptions(options) {
    return new StyleSheet(_extends({}, this.options, {}, options), this.gs, this.names);
  };

  _proto.allocateGSInstance = function allocateGSInstance(id) {
    return this.gs[id] = (this.gs[id] || 0) + 1;
  }
  /** Lazily initialises a GroupedTag for when it's actually needed */
  ;

  _proto.getTag = function getTag() {
    return this.tag || (this.tag = makeGroupedTag(makeTag(this.options)));
  }
  /** Check whether a name is known for caching */
  ;

  _proto.hasNameForId = function hasNameForId(id, name) {
    return this.names.has(id) && this.names.get(id).has(name);
  }
  /** Mark a group's name as known for caching */
  ;

  _proto.registerName = function registerName(id, name) {
    getGroupForId(id);

    if (!this.names.has(id)) {
      var groupNames = new Set();
      groupNames.add(name);
      this.names.set(id, groupNames);
    } else {
      this.names.get(id).add(name);
    }
  }
  /** Insert new rules which also marks the name as known */
  ;

  _proto.insertRules = function insertRules(id, name, rules) {
    this.registerName(id, name);
    this.getTag().insertRules(getGroupForId(id), rules);
  }
  /** Clears all cached names for a given group ID */
  ;

  _proto.clearNames = function clearNames(id) {
    if (this.names.has(id)) {
      this.names.get(id).clear();
    }
  }
  /** Clears all rules for a given group ID */
  ;

  _proto.clearRules = function clearRules(id) {
    this.getTag().clearGroup(getGroupForId(id));
    this.clearNames(id);
  }
  /** Clears the entire tag which deletes all rules but not its names */
  ;

  _proto.clearTag = function clearTag() {
    // NOTE: This does not clear the names, since it's only used during SSR
    // so that we can continuously output only new rules
    this.tag = undefined;
  }
  /** Outputs the current sheet as a CSS string with markers for SSR */
  ;

  _proto.toString = function toString() {
    return outputSheet(this);
  };

  return StyleSheet;
}();

// 

/* eslint-disable */
var SEED = 5381; // When we have separate strings it's useful to run a progressive
// version of djb2 where we pretend that we're still looping over
// the same string

var phash = function phash(h, x) {
  var i = x.length;

  while (i) {
    h = h * 33 ^ x.charCodeAt(--i);
  }

  return h;
}; // This is a djb2 hashing function

var hash = function hash(x) {
  return phash(SEED, x);
};

/**
 * MIT License
 *
 * Copyright (c) 2016 Sultan Tarimo
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
 * IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/* eslint-disable */
function insertRulePlugin (insertRule) {
  var delimiter = '/*|*/';
  var needle = delimiter + "}";

  function toSheet(block) {
    if (block) {
      try {
        insertRule(block + "}");
      } catch (e) {}
    }
  }

  return function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
    switch (context) {
      // property
      case 1:
        // @import
        if (depth === 0 && content.charCodeAt(0) === 64) return insertRule(content + ";"), '';
        break;
      // selector

      case 2:
        if (ns === 0) return content + delimiter;
        break;
      // at-rule

      case 3:
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            return insertRule(selectors[0] + content), '';

          default:
            return content + (at === 0 ? delimiter : '');
        }

      case -2:
        content.split(needle).forEach(toSheet);
    }
  };
}

var COMMENT_REGEX = /^\s*\/\/.*$/gm;
function createStylisInstance(_temp) {
  var _ref = _temp === void 0 ? EMPTY_OBJECT : _temp,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? EMPTY_OBJECT : _ref$options,
      _ref$plugins = _ref.plugins,
      plugins = _ref$plugins === void 0 ? EMPTY_ARRAY : _ref$plugins;

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__["default"](options); // Wrap `insertRulePlugin to build a list of rules,
  // and then make our own plugin to return the rules. This
  // makes it easier to hook into the existing SSR architecture

  var parsingRules = []; // eslint-disable-next-line consistent-return

  var returnRulesPlugin = function returnRulesPlugin(context) {
    if (context === -2) {
      var parsedRules = parsingRules;
      parsingRules = [];
      return parsedRules;
    }
  };

  var parseRulesPlugin = insertRulePlugin(function (rule) {
    parsingRules.push(rule);
  });

  var _componentId;

  var _selector;

  var _selectorRegexp;

  var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
    if ( // the first self-ref is always untouched
    offset > 0 && // there should be at least two self-refs to do a replacement (.b > .b)
    string.slice(0, offset).indexOf(_selector) !== -1 && // no consecutive self refs (.b.b); that is a precedence boost and treated differently
    string.slice(offset - _selector.length, offset) !== _selector) {
      return "." + _componentId;
    }

    return match;
  };
  /**
   * When writing a style like
   *
   * & + & {
   *   color: red;
   * }
   *
   * The second ampersand should be a reference to the static component class. stylis
   * has no knowledge of static class so we have to intelligently replace the base selector.
   *
   * https://github.com/thysultan/stylis.js#plugins <- more info about the context phase values
   * "2" means this plugin is taking effect at the very end after all other processing is complete
   */


  var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
    if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
      // eslint-disable-next-line no-param-reassign
      selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
    }
  };

  stylis.use([].concat(plugins, [selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]));

  function stringifyRules(css, selector, prefix, componentId) {
    if (componentId === void 0) {
      componentId = '&';
    }

    var flatCSS = css.replace(COMMENT_REGEX, '');
    var cssStr = selector && prefix ? prefix + " " + selector + " { " + flatCSS + " }" : flatCSS; // stylis has no concept of state to be passed to plugins
    // but since JS is single=threaded, we can rely on that to ensure
    // these properties stay in sync with the current stylis run

    _componentId = componentId;
    _selector = selector;
    _selectorRegexp = new RegExp("\\" + _selector + "\\b", 'g');
    return stylis(prefix || !selector ? '' : selector, cssStr);
  }

  stringifyRules.hash = plugins.length ? plugins.reduce(function (acc, plugin) {
    if (!plugin.name) {
      throwStyledComponentsError(15);
    }

    return phash(acc, plugin.name);
  }, SEED).toString() : '';
  return stringifyRules;
}

// 
var StyleSheetContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var StyleSheetConsumer = StyleSheetContext.Consumer;
var StylisContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var StylisConsumer = StylisContext.Consumer;
var masterSheet = new StyleSheet();
var masterStylis = createStylisInstance();
function useStyleSheet() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(StyleSheetContext) || masterSheet;
}
function useStylis() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(StylisContext) || masterStylis;
}
function StyleSheetManager(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.stylisPlugins),
      plugins = _useState[0],
      setPlugins = _useState[1];

  var contextStyleSheet = useStyleSheet();
  var styleSheet = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var sheet = contextStyleSheet;

    if (props.sheet) {
      // eslint-disable-next-line prefer-destructuring
      sheet = props.sheet;
    } else if (props.target) {
      sheet = sheet.reconstructWithOptions({
        target: props.target
      });
    }

    if (props.disableCSSOMInjection) {
      sheet = sheet.reconstructWithOptions({
        useCSSOMInjection: false
      });
    }

    return sheet;
  }, [props.disableCSSOMInjection, props.sheet, props.target]);
  var stylis = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return createStylisInstance({
      options: {
        prefix: !props.disableVendorPrefixes
      },
      plugins: plugins
    });
  }, [props.disableVendorPrefixes, plugins]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(plugins, props.stylisPlugins)) setPlugins(props.stylisPlugins);
  }, [props.stylisPlugins]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyleSheetContext.Provider, {
    value: styleSheet
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StylisContext.Provider, {
    value: stylis
  },  true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.only(props.children) : undefined));
}

// 

var Keyframes = /*#__PURE__*/function () {
  function Keyframes(name, stringifyArgs) {
    var _this = this;

    this.inject = function (styleSheet) {
      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
        styleSheet.insertRules(_this.id, _this.name, masterStylis.apply(void 0, _this.stringifyArgs));
      }
    };

    this.toString = function () {
      return throwStyledComponentsError(12, String(_this.name));
    };

    this.name = name;
    this.id = "sc-keyframes-" + name;
    this.stringifyArgs = stringifyArgs;
  }

  var _proto = Keyframes.prototype;

  _proto.getName = function getName() {
    return this.name;
  };

  return Keyframes;
}();

// 

/**
 * inlined version of
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
 */
var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;
/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */

function hyphenateStyleName(string) {
  return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

// 

function addUnitIfNeeded(name, value) {
  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
  // $FlowFixMe
  if (value == null || typeof value === 'boolean' || value === '') {
    return '';
  }

  if (typeof value === 'number' && value !== 0 && !(name in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__["default"])) {
    return value + "px"; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
}

// 
/**
 * It's falsish not falsy because 0 is allowed.
 */

var isFalsish = function isFalsish(chunk) {
  return chunk === undefined || chunk === null || chunk === false || chunk === '';
};

var objToCssArray = function objToCssArray(obj, prevKey) {
  var rules = [];
  var keys = Object.keys(obj);
  keys.forEach(function (key) {
    if (!isFalsish(obj[key])) {
      if (isPlainObject(obj[key])) {
        rules.push.apply(rules, objToCssArray(obj[key], key));
        return rules;
      } else if (isFunction(obj[key])) {
        rules.push(hyphenateStyleName(key) + ":", obj[key], ';');
        return rules;
      }

      rules.push(hyphenateStyleName(key) + ": " + addUnitIfNeeded(key, obj[key]) + ";");
    }

    return rules;
  });
  return prevKey ? [prevKey + " {"].concat(rules, ['}']) : rules;
};
function flatten(chunk, executionContext, styleSheet) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];

    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet);
      if (result === '') continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
    }

    return ruleSet;
  }

  if (isFalsish(chunk)) {
    return '';
  }
  /* Handle other components */


  if (isStyledComponent(chunk)) {
    return "." + chunk.styledComponentId;
  }
  /* Either execute or defer the function */


  if (isFunction(chunk)) {
    if (isStatelessFunction(chunk) && executionContext) {
      var _result = chunk(executionContext);

      if ( true && Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isElement"])(_result)) {
        // eslint-disable-next-line no-console
        console.warn(getComponentName(chunk) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.");
      }

      return flatten(_result, executionContext, styleSheet);
    } else return chunk;
  }

  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet);
      return chunk.getName();
    } else return chunk;
  }
  /* Handle objects */


  return isPlainObject(chunk) ? objToCssArray(chunk) : chunk.toString();
}

// 
function css(styles) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (isFunction(styles) || isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  }

  if (interpolations.length === 0 && styles.length === 1 && typeof styles[0] === "string") {
    // $FlowFixMe
    return styles;
  } // $FlowFixMe


  return flatten(interleave(styles, interpolations));
}

function constructWithOptions(componentConstructor, tag, options) {
  if (options === void 0) {
    options = EMPTY_OBJECT;
  }

  if (!Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isValidElementType"])(tag)) {
    return throwStyledComponentsError(1, String(tag));
  }
  /* This is callable directly as a template function */
  // $FlowFixMe: Not typed to avoid destructuring arguments


  var templateFunction = function templateFunction() {
    return componentConstructor(tag, options, css.apply(void 0, arguments));
  };
  /* If config methods are called, wrap up a new template function and merge options */


  templateFunction.withConfig = function (config) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {}, config));
  };
  /* Modify/inject new props at runtime */


  templateFunction.attrs = function (attrs) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
    }));
  };

  return templateFunction;
}

/* eslint-disable */

/**
  mixin-deep; https://github.com/jonschlinkert/mixin-deep
  Inlined such that it will be consistently transpiled to an IE-compatible syntax.

  The MIT License (MIT)

  Copyright (c) 2014-present, Jon Schlinkert.

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
var isObject = function isObject(val) {
  return typeof val === 'function' || typeof val === 'object' && val !== null && !Array.isArray(val);
};

var isValidKey = function isValidKey(key) {
  return key !== '__proto__' && key !== 'constructor' && key !== 'prototype';
};

function mixin(target, val, key) {
  var obj = target[key];

  if (isObject(val) && isObject(obj)) {
    mixinDeep(obj, val);
  } else {
    target[key] = val;
  }
}

function mixinDeep(target) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  for (var _i = 0, _rest = rest; _i < _rest.length; _i++) {
    var obj = _rest[_i];

    if (isObject(obj)) {
      for (var key in obj) {
        if (isValidKey(key)) {
          mixin(target, obj[key], key);
        }
      }
    }
  }

  return target;
}

// 

/* eslint-disable no-bitwise */
var AD_REPLACER_R = /(a)(d)/gi;
/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */

var charsLength = 52;
/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */

var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};
/* input a number, usually a hash and convert it to base-52 */


function generateAlphabeticName(code) {
  var name = '';
  var x;
  /* get a char and divide by alphabet-length */

  for (x = Math.abs(code); x > charsLength; x = x / charsLength | 0) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return (getAlphabeticChar(x % charsLength) + name).replace(AD_REPLACER_R, '$1-$2');
}

// 
function isStaticRules(rules) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    if (isFunction(rule) && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  return true;
}

// 
/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */

var ComponentStyle = /*#__PURE__*/function () {
  function ComponentStyle(rules, componentId) {
    this.rules = rules;
    this.staticRulesId = '';
    this.isStatic =  false && false;
    this.componentId = componentId;
    this.baseHash = hash(componentId); // NOTE: This registers the componentId, which ensures a consistent order
    // for this component's styles compared to others

    StyleSheet.registerId(componentId);
  }
  /*
   * Flattens a rule set into valid CSS
   * Hashes it, wraps the whole chunk in a .hash1234 {}
   * Returns the hash to be injected on render()
   * */


  var _proto = ComponentStyle.prototype;

  _proto.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet, stylis) {
    var componentId = this.componentId; // force dynamic classnames if user-supplied stylis plugins are in use

    if (this.isStatic && !stylis.hash) {
      if (this.staticRulesId && styleSheet.hasNameForId(componentId, this.staticRulesId)) {
        return this.staticRulesId;
      }

      var cssStatic = flatten(this.rules, executionContext, styleSheet).join('');
      var name = generateAlphabeticName(phash(this.baseHash, cssStatic.length) >>> 0);

      if (!styleSheet.hasNameForId(componentId, name)) {
        var cssStaticFormatted = stylis(cssStatic, "." + name, undefined, componentId);
        styleSheet.insertRules(componentId, name, cssStaticFormatted);
      }

      this.staticRulesId = name;
      return name;
    } else {
      var length = this.rules.length;
      var dynamicHash = phash(this.baseHash, stylis.hash);
      var css = '';

      for (var i = 0; i < length; i++) {
        var partRule = this.rules[i];

        if (typeof partRule === 'string') {
          css += partRule;
          if (true) dynamicHash = phash(dynamicHash, partRule + i);
        } else {
          var partChunk = flatten(partRule, executionContext, styleSheet);
          var partString = Array.isArray(partChunk) ? partChunk.join('') : partChunk;
          dynamicHash = phash(dynamicHash, partString + i);
          css += partString;
        }
      }

      var _name = generateAlphabeticName(dynamicHash >>> 0);

      if (!styleSheet.hasNameForId(componentId, _name)) {
        var cssFormatted = stylis(css, "." + _name, undefined, componentId);
        styleSheet.insertRules(componentId, _name, cssFormatted);
      }

      return _name;
    }
  };

  return ComponentStyle;
}();

// 
var LIMIT = 200;
var createWarnTooManyClasses = (function (displayName, componentId) {
  var generatedClasses = {};
  var warningSeen = false;
  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;

      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.

        /* eslint-disable no-console, prefer-template */
        var parsedIdString = componentId ? " with the id of \"" + componentId + "\"" : '';
        console.warn("Over " + LIMIT + " classes were generated for component " + displayName + parsedIdString + ".\n" + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs(props => ({\n' + '    style: {\n' + '      background: props.background,\n' + '    },\n' + '  }))`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

// 
var invalidHookCallRe = /invalid hook call/i;
var seen = new Set();
var checkDynamicCreation = function checkDynamicCreation(displayName, componentId) {
  if (true) {
    var parsedIdString = componentId ? " with the id of \"" + componentId + "\"" : '';
    var message = "The component " + displayName + parsedIdString + " has been created dynamically.\n" + 'You may see this warning because you\'ve called styled inside another component.\n' + 'To resolve this only create new StyledComponents outside of any render method and function component.';

    try {
      // We purposefully call `useRef` outside of a component and expect it to throw
      // If it doesn't, then we're inside another component.
      // eslint-disable-next-line react-hooks/rules-of-hooks
      Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

      if (!seen.has(message)) {
        // eslint-disable-next-line no-console
        console.warn(message);
        seen.add(message);
      }
    } catch (error) {
      // The error here is expected, since we're expecting anything that uses `checkDynamicCreation` to
      // be called outside of a React component.
      if (invalidHookCallRe.test(error.message)) {
        // This shouldn't happen, but resets `warningSeen` if we had this error happen intermittently
        seen["delete"](message);
      }
    }
  }
};

// 
var determineTheme = (function (props, providedTheme, defaultProps) {
  if (defaultProps === void 0) {
    defaultProps = EMPTY_OBJECT;
  }

  return props.theme !== defaultProps.theme && props.theme || providedTheme || defaultProps.theme;
});

// 
// Source: https://www.w3.org/TR/cssom-1/#serialize-an-identifier
// Control characters and non-letter first symbols are not supported
var escapeRegex = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
var dashesAtEnds = /(^-|-$)/g;
/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */

function escape(str) {
  return str // Replace all possible CSS selectors
  .replace(escapeRegex, '-') // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

// 
function isTag(target) {
  return typeof target === 'string' && ( true ? target.charAt(0) === target.charAt(0).toLowerCase() : undefined);
}

// 
function generateDisplayName(target) {
  // $FlowFixMe
  return isTag(target) ? "styled." + target : "Styled(" + getComponentName(target) + ")";
}

// 
var generateComponentId = (function (str) {
  return generateAlphabeticName(hash(str) >>> 0);
});

/**
 * Convenience function for joining strings to form className chains
 */
function joinStrings(a, b) {
  return a && b ? a + " " + b : a || b;
}

var ThemeContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var ThemeConsumer = ThemeContext.Consumer;

function mergeTheme(theme, outerTheme) {
  if (!theme) {
    return throwStyledComponentsError(14);
  }

  if (isFunction(theme)) {
    var mergedTheme = theme(outerTheme);

    if ( true && (mergedTheme === null || Array.isArray(mergedTheme) || typeof mergedTheme !== 'object')) {
      return throwStyledComponentsError(7);
    }

    return mergedTheme;
  }

  if (Array.isArray(theme) || typeof theme !== 'object') {
    return throwStyledComponentsError(8);
  }

  return outerTheme ? _extends({}, outerTheme, {}, theme) : theme;
}
/**
 * Provide a theme to an entire react component tree via context
 */


function ThemeProvider(props) {
  var outerTheme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
  var themeContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return mergeTheme(props.theme, outerTheme);
  }, [props.theme, outerTheme]);

  if (!props.children) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ThemeContext.Provider, {
    value: themeContext
  }, props.children);
}

/* global $Call */

var identifiers = {};
/* We depend on components having unique IDs */

function generateId(displayName, parentComponentId) {
  var name = typeof displayName !== 'string' ? 'sc' : escape(displayName); // Ensure that no displayName can lead to duplicate componentIds

  identifiers[name] = (identifiers[name] || 0) + 1;
  var componentId = name + "-" + generateComponentId(name + identifiers[name]);
  return parentComponentId ? parentComponentId + "-" + componentId : componentId;
}

function useResolvedAttrs(theme, props, attrs) {
  if (theme === void 0) {
    theme = EMPTY_OBJECT;
  }

  // NOTE: can't memoize this
  // returns [context, resolvedAttrs]
  // where resolvedAttrs is only the things injected by the attrs themselves
  var context = _extends({}, props, {
    theme: theme
  });

  var resolvedAttrs = {};
  attrs.forEach(function (attrDef) {
    var resolvedAttrDef = attrDef;
    var key;

    if (isFunction(resolvedAttrDef)) {
      resolvedAttrDef = resolvedAttrDef(context);
    }
    /* eslint-disable guard-for-in */


    for (key in resolvedAttrDef) {
      context[key] = resolvedAttrs[key] = key === 'className' ? joinStrings(resolvedAttrs[key], resolvedAttrDef[key]) : resolvedAttrDef[key];
    }
    /* eslint-enable guard-for-in */

  });
  return [context, resolvedAttrs];
}

function useInjectedStyle(componentStyle, hasAttrs, resolvedAttrs, warnTooManyClasses) {
  var styleSheet = useStyleSheet();
  var stylis = useStylis(); // statically styled-components don't need to build an execution context object,
  // and shouldn't be increasing the number of class names

  var isStatic = componentStyle.isStatic && !hasAttrs;
  var className = isStatic ? componentStyle.generateAndInjectStyles(EMPTY_OBJECT, styleSheet, stylis) : componentStyle.generateAndInjectStyles(resolvedAttrs, styleSheet, stylis);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(className);

  if ( true && !isStatic && warnTooManyClasses) {
    warnTooManyClasses(className);
  }

  return className;
}

function useStyledComponentImpl(forwardedComponent, props, forwardedRef) {
  var componentAttrs = forwardedComponent.attrs,
      componentStyle = forwardedComponent.componentStyle,
      defaultProps = forwardedComponent.defaultProps,
      foldedComponentIds = forwardedComponent.foldedComponentIds,
      shouldForwardProp = forwardedComponent.shouldForwardProp,
      styledComponentId = forwardedComponent.styledComponentId,
      target = forwardedComponent.target;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(styledComponentId); // NOTE: the non-hooks version only subscribes to this when !componentStyle.isStatic,
  // but that'd be against the rules-of-hooks. We could be naughty and do it anyway as it
  // should be an immutable value, but behave for now.

  var theme = determineTheme(props, Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext), defaultProps);

  var _useResolvedAttrs = useResolvedAttrs(theme || EMPTY_OBJECT, props, componentAttrs),
      context = _useResolvedAttrs[0],
      attrs = _useResolvedAttrs[1];

  var generatedClassName = useInjectedStyle(componentStyle, componentAttrs.length > 0, context,  true ? forwardedComponent.warnTooManyClasses : undefined);
  var refToForward = forwardedRef;
  var elementToBeCreated = attrs.$as || props.$as || attrs.as || props.as || target;
  var isTargetTag = isTag(elementToBeCreated);
  var computedProps = attrs !== props ? _extends({}, props, {}, attrs) : props;
  var propFilterFn = shouldForwardProp || isTargetTag && _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"];
  var propsForElement = {}; // eslint-disable-next-line guard-for-in

  for (var key in computedProps) {
    if (key[0] === '$' || key === 'as') continue;else if (key === 'forwardedAs') {
      propsForElement.as = computedProps[key];
    } else if (!propFilterFn || propFilterFn(key, _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"])) {
      // Don't pass through non HTML tags through to HTML elements
      propsForElement[key] = computedProps[key];
    }
  }

  if (props.style && attrs.style !== props.style) {
    propsForElement.style = _extends({}, props.style, {}, attrs.style);
  }

  propsForElement.className = Array.prototype.concat(foldedComponentIds, styledComponentId, generatedClassName !== styledComponentId ? generatedClassName : null, props.className, attrs.className).filter(Boolean).join(' ');
  propsForElement.ref = refToForward;
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(elementToBeCreated, propsForElement);
}

function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isCompositeComponent = !isTag(target);
  var _options$displayName = options.displayName,
      displayName = _options$displayName === void 0 ? generateDisplayName(target) : _options$displayName,
      _options$componentId = options.componentId,
      componentId = _options$componentId === void 0 ? generateId(options.displayName, options.parentComponentId) : _options$componentId,
      _options$attrs = options.attrs,
      attrs = _options$attrs === void 0 ? EMPTY_ARRAY : _options$attrs;
  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + "-" + options.componentId : options.componentId || componentId; // fold the underlying StyledComponent attrs up (implicit extend)

  var finalAttrs = // $FlowFixMe
  isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs; // eslint-disable-next-line prefer-destructuring

  var shouldForwardProp = options.shouldForwardProp; // $FlowFixMe

  if (isTargetStyledComp && target.shouldForwardProp) {
    if (shouldForwardProp) {
      // compose nested shouldForwardProp calls
      shouldForwardProp = function shouldForwardProp(prop, filterFn) {
        return (// $FlowFixMe
          target.shouldForwardProp(prop, filterFn) && options.shouldForwardProp(prop, filterFn)
        );
      };
    } else {
      // eslint-disable-next-line prefer-destructuring
      shouldForwardProp = target.shouldForwardProp;
    }
  }

  var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
  // $FlowFixMe
  target.componentStyle.rules.concat(rules) : rules, styledComponentId);
  /**
   * forwardRef creates a new interim component, which we'll take advantage of
   * instead of extending ParentComponent to create _another_ interim class
   */

  var WrappedStyledComponent; // eslint-disable-next-line react-hooks/rules-of-hooks

  var forwardRef = function forwardRef(props, ref) {
    return useStyledComponentImpl(WrappedStyledComponent, props, ref);
  };

  forwardRef.displayName = displayName; // $FlowFixMe this is a forced cast to merge it StyledComponentWrapperProperties

  WrappedStyledComponent = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(forwardRef);
  WrappedStyledComponent.attrs = finalAttrs;
  WrappedStyledComponent.componentStyle = componentStyle;
  WrappedStyledComponent.displayName = displayName;
  WrappedStyledComponent.shouldForwardProp = shouldForwardProp; // this static is used to preserve the cascade of static classes for component selector
  // purposes; this is especially important with usage of the css prop

  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? // $FlowFixMe
  Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY;
  WrappedStyledComponent.styledComponentId = styledComponentId; // fold the underlying StyledComponent target up since we folded the styles

  WrappedStyledComponent.target = isTargetStyledComp ? // $FlowFixMe
  target.target : target; // $FlowFixMe

  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId,
        optionsToCopy = _objectWithoutPropertiesLoose(options, ["componentId"]);

    var newComponentId = previousComponentId && previousComponentId + "-" + (isTag(tag) ? tag : escape(getComponentName(tag)));

    var newOptions = _extends({}, optionsToCopy, {
      attrs: finalAttrs,
      componentId: newComponentId
    });

    return createStyledComponent(tag, newOptions, rules);
  }; // $FlowFixMe


  Object.defineProperty(WrappedStyledComponent, 'defaultProps', {
    get: function get() {
      return this._foldedDefaultProps;
    },
    set: function set(obj) {
      // $FlowFixMe
      this._foldedDefaultProps = isTargetStyledComp ? mixinDeep({}, target.defaultProps, obj) : obj;
    }
  });

  if (true) {
    checkDynamicCreation(displayName, styledComponentId);
    WrappedStyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName, styledComponentId);
  } // $FlowFixMe


  WrappedStyledComponent.toString = function () {
    return "." + WrappedStyledComponent.styledComponentId;
  };

  if (isCompositeComponent) {
    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(WrappedStyledComponent, target, {
      // all SC-specific things should not be hoisted
      attrs: true,
      componentStyle: true,
      displayName: true,
      foldedComponentIds: true,
      shouldForwardProp: true,
      self: true,
      styledComponentId: true,
      target: true,
      withComponent: true
    });
  }

  return WrappedStyledComponent;
}

// 
// Thanks to ReactDOMFactories for this handy list!
var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 

var styled = function styled(tag) {
  return constructWithOptions(createStyledComponent, tag);
}; // Shorthands for all valid HTML Elements


domElements.forEach(function (domElement) {
  styled[domElement] = styled(domElement);
});

// 

var GlobalStyle = /*#__PURE__*/function () {
  function GlobalStyle(rules, componentId) {
    this.rules = rules;
    this.componentId = componentId;
    this.isStatic = isStaticRules(rules);
  }

  var _proto = GlobalStyle.prototype;

  _proto.createStyles = function createStyles(instance, executionContext, styleSheet, stylis) {
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var css = stylis(flatCSS.join(''), '');
    var id = this.componentId + instance; // NOTE: We use the id as a name as well, since these rules never change

    styleSheet.insertRules(id, id, css);
  };

  _proto.removeStyles = function removeStyles(instance, styleSheet) {
    styleSheet.clearRules(this.componentId + instance);
  };

  _proto.renderStyles = function renderStyles(instance, executionContext, styleSheet, stylis) {
    StyleSheet.registerId(this.componentId + instance); // NOTE: Remove old styles, then inject the new ones

    this.removeStyles(instance, styleSheet);
    this.createStyles(instance, executionContext, styleSheet, stylis);
  };

  return GlobalStyle;
}();

function createGlobalStyle(strings) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(void 0, [strings].concat(interpolations));
  var styledComponentId = "sc-global-" + generateComponentId(JSON.stringify(rules));
  var globalStyle = new GlobalStyle(rules, styledComponentId);

  if (true) {
    checkDynamicCreation(styledComponentId);
  }

  function GlobalStyleComponent(props) {
    var styleSheet = useStyleSheet();
    var stylis = useStylis();
    var theme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
    var instanceRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

    if (instanceRef.current === null) {
      instanceRef.current = styleSheet.allocateGSInstance(styledComponentId);
    }

    var instance = instanceRef.current;

    if ( true && react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.count(props.children)) {
      // eslint-disable-next-line no-console
      console.warn("The global style component " + styledComponentId + " was given child JSX. createGlobalStyle does not render children.");
    }

    if ( true && rules.some(function (rule) {
      return typeof rule === 'string' && rule.indexOf('@import') !== -1;
    })) {
      console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app.");
    }

    if (globalStyle.isStatic) {
      globalStyle.renderStyles(instance, STATIC_EXECUTION_CONTEXT, styleSheet, stylis);
    } else {
      var context = _extends({}, props, {
        theme: determineTheme(props, theme, GlobalStyleComponent.defaultProps)
      });

      globalStyle.renderStyles(instance, context, styleSheet, stylis);
    }

    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
      return function () {
        return globalStyle.removeStyles(instance, styleSheet);
      };
    }, EMPTY_ARRAY);
    return null;
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(GlobalStyleComponent);
}

// 
function keyframes(strings) {
  /* Warning if you've used keyframes on React Native */
  if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    // eslint-disable-next-line no-console
    console.warn('`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.');
  }

  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(void 0, [strings].concat(interpolations)).join('');
  var name = generateComponentId(rules);
  return new Keyframes(name, [rules, name, '@keyframes']);
}

var ServerStyleSheet = /*#__PURE__*/function () {
  function ServerStyleSheet() {
    var _this = this;

    this._emitSheetCSS = function () {
      var css = _this.instance.toString();

      var nonce = getNonce();
      var attrs = [nonce && "nonce=\"" + nonce + "\"", SC_ATTR + "=\"true\"", SC_ATTR_VERSION + "=\"" + SC_VERSION + "\""];
      var htmlAttr = attrs.filter(Boolean).join(' ');
      return "<style " + htmlAttr + ">" + css + "</style>";
    };

    this.getStyleTags = function () {
      if (_this.sealed) {
        return throwStyledComponentsError(2);
      }

      return _this._emitSheetCSS();
    };

    this.getStyleElement = function () {
      var _props;

      if (_this.sealed) {
        return throwStyledComponentsError(2);
      }

      var props = (_props = {}, _props[SC_ATTR] = '', _props[SC_ATTR_VERSION] = SC_VERSION, _props.dangerouslySetInnerHTML = {
        __html: _this.instance.toString()
      }, _props);
      var nonce = getNonce();

      if (nonce) {
        props.nonce = nonce;
      } // v4 returned an array for this fn, so we'll do the same for v5 for backward compat


      return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", _extends({}, props, {
        key: "sc-0-0"
      }))];
    };

    this.seal = function () {
      _this.sealed = true;
    };

    this.instance = new StyleSheet({
      isServer: true
    });
    this.sealed = false;
  }

  var _proto = ServerStyleSheet.prototype;

  _proto.collectStyles = function collectStyles(children) {
    if (this.sealed) {
      return throwStyledComponentsError(2);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyleSheetManager, {
      sheet: this.instance
    }, children);
  };

  // eslint-disable-next-line consistent-return
  _proto.interleaveWithNodeStream = function interleaveWithNodeStream(input) {
    {
      return throwStyledComponentsError(3);
    }
  };

  return ServerStyleSheet;
}();

// export default <Config: { theme?: any }, Instance>(
//  Component: AbstractComponent<Config, Instance>
// ): AbstractComponent<$Diff<Config, { theme?: any }> & { theme?: any }, Instance>
//
// but the old build system tooling doesn't support the syntax

var withTheme = (function (Component) {
  // $FlowFixMe This should be React.forwardRef<Config, Instance>
  var WithTheme = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (props, ref) {
    var theme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext); // $FlowFixMe defaultProps isn't declared so it can be inferrable

    var defaultProps = Component.defaultProps;
    var themeProp = determineTheme(props, theme, defaultProps);

    if ( true && themeProp === undefined) {
      // eslint-disable-next-line no-console
      console.warn("[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class \"" + getComponentName(Component) + "\"");
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, _extends({}, props, {
      theme: themeProp,
      ref: ref
    }));
  });
  hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(WithTheme, Component);
  WithTheme.displayName = "WithTheme(" + getComponentName(Component) + ")";
  return WithTheme;
});

// 

var useTheme = function useTheme() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
};

// 
var __PRIVATE__ = {
  StyleSheet: StyleSheet,
  masterSheet: masterSheet
};

// 
/* Define bundle version for export */

var version = "5.1.1";
/* Warning if you've imported this file on React Native */

if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
  // eslint-disable-next-line no-console
  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
}
/* Warning if there are several instances of styled-components */


if ( true && typeof window !== 'undefined') {
  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

  if (window['__styled-components-init__'] === 1) {
    // eslint-disable-next-line no-console
    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process, ' + 'missing theme prop, and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
  }

  window['__styled-components-init__'] += 1;
}

/* harmony default export */ __webpack_exports__["default"] = (styled);

//# sourceMappingURL=styled-components.browser.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/table */ "./components/table.js");




var _this = undefined,
    _jsxFileName = "C:\\Users\\skorz\\OneDrive\\Pulpit\\DevStuff\\Bushido\\hurtzoo-parser\\hurtzoo-parser\\packages\\data-display\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  padding: 1rem;\n\n  table {\n    border-spacing: 0;\n    border: 1px solid black;\n\n    tr {\n      :last-child {\n        td {\n          border-bottom: 0;\n        }\n      }\n    }\n\n    th,\n    td {\n      margin: 0;\n      padding: 0.5rem;\n      border-bottom: 1px solid black;\n      border-right: 1px solid black;\n\n      :last-child {\n        border-right: 0;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Styles = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject());
_c = Styles;

var Root = function Root(_ref) {
  var products = _ref.products;
  var columns = [{
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
  return __jsx(Styles, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, __jsx(_components_table__WEBPACK_IMPORTED_MODULE_6__["default"], {
    columns: columns,
    data: products,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }));
};

_c2 = Root;
Root.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('http://localhost:3000/api/getProducts');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          return _context.abrupt("return", {
            products: data
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Root);

var _c, _c2;

$RefreshReg$(_c, "Styles");
$RefreshReg$(_c2, "Root");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 1:
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5Cskorz%5COneDrive%5CPulpit%5CDevStuff%5CBushido%5Churtzoo-parser%5Churtzoo-parser%5Cpackages%5Cdata-display%5Cpages%5Cindex.js ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5Cskorz%5COneDrive%5CPulpit%5CDevStuff%5CBushido%5Churtzoo-parser%5Churtzoo-parser%5Cpackages%5Cdata-display%5Cpages%5Cindex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cskorz%5COneDrive%5CPulpit%5CDevStuff%5CBushido%5Churtzoo-parser%5Churtzoo-parser%5Cpackages%5Cdata-display%5Cpages%5Cindex.js!./");


/***/ }),

/***/ "dll-reference dll_5030f387d328e4415785":
/*!*******************************************!*\
  !*** external "dll_5030f387d328e4415785" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_5030f387d328e4415785;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90YWdnZWRUZW1wbGF0ZUxpdGVyYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9pcy1wcm9wLXZhbGlkL2Rpc3QvaXMtcHJvcC12YWxpZC5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vbWVtb2l6ZS9kaXN0L21lbW9pemUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3N0eWxpcy9kaXN0L3N0eWxpcy5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vdW5pdGxlc3MvZGlzdC91bml0bGVzcy5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvZmV0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRhYmxlL2Rpc3QvcmVhY3QtdGFibGUuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaGFsbG93ZXF1YWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlZC1jb21wb25lbnRzL2Rpc3Qvc3R5bGVkLWNvbXBvbmVudHMuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NVwiIl0sIm5hbWVzIjpbIlRhYmxlIiwiY29sdW1ucyIsImRhdGEiLCJ1c2VUYWJsZSIsInVzZVNvcnRCeSIsImdldFRhYmxlUHJvcHMiLCJnZXRUYWJsZUJvZHlQcm9wcyIsImhlYWRlckdyb3VwcyIsInJvd3MiLCJwcmVwYXJlUm93IiwibWFwIiwiaGVhZGVyR3JvdXAiLCJnZXRIZWFkZXJHcm91cFByb3BzIiwiaGVhZGVycyIsImNvbHVtbiIsImdldEhlYWRlclByb3BzIiwiZ2V0U29ydEJ5VG9nZ2xlUHJvcHMiLCJyZW5kZXIiLCJpc1NvcnRlZCIsImlzU29ydGVkRGVzYyIsInJvdyIsImkiLCJnZXRSb3dQcm9wcyIsImNlbGxzIiwiY2VsbCIsImdldENlbGxQcm9wcyIsIlN0eWxlcyIsInN0eWxlZCIsImRpdiIsIlJvb3QiLCJwcm9kdWN0cyIsIkhlYWRlciIsImFjY2Vzc29yIiwiZ2V0SW5pdGlhbFByb3BzIiwiRmV0Y2giLCJyZXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULE9BQWtDO0FBQUE7O0FBQUE7O0FBQUEsTUFBakJDLE9BQWlCLFFBQWpCQSxPQUFpQjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxrQkFPM0NDLDREQUFRLENBQ1Y7QUFDRUYsV0FBTyxFQUFQQSxPQURGO0FBRUVDLFFBQUksRUFBSkE7QUFGRixHQURVLEVBS1ZFLHFEQUxVLENBUG1DO0FBQUEsTUFFN0NDLGFBRjZDLGFBRTdDQSxhQUY2QztBQUFBLE1BRzdDQyxpQkFINkMsYUFHN0NBLGlCQUg2QztBQUFBLE1BSTdDQyxZQUo2QyxhQUk3Q0EsWUFKNkM7QUFBQSxNQUs3Q0MsSUFMNkMsYUFLN0NBLElBTDZDO0FBQUEsTUFNN0NDLFVBTjZDLGFBTTdDQSxVQU42Qzs7QUFlL0MsU0FDRSxtRUFDRSxzR0FBV0osYUFBYSxFQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRSxZQUFZLENBQUNHLEdBQWIsQ0FBaUIsVUFBQ0MsV0FBRDtBQUFBLFdBQ2hCLG1HQUFRQSxXQUFXLENBQUNDLG1CQUFaLEVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUNHRCxXQUFXLENBQUNFLE9BQVosQ0FBb0JILEdBQXBCLENBQXdCLFVBQUNJLE1BQUQ7QUFBQSxhQUN2QixtR0FBUUEsTUFBTSxD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RUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLGtDQUFrQztBQUMxRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7OztBQUliLElBQUksSUFBcUM7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLHdCQUF3QjtBQUN4QjtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNB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QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCQUEwQjtBQUMxQiwrQkFBK0IsaUNBQWlDO0FBQ2hFLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBLDBCQUEwQjtBQUMxQjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQSw2RUFBNkU7QUFDN0U7QUFDQTtBQUNBLE9BQU87QUFDUCw0RkFBNEY7O0FBRTVGO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSxXQUFXO0FBQ1gs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QSx3QkFBd0I7QUFDeEI7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEI7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FB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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0RBQWdELGNBQWM7O0FBRTlELENBQUM7QUFDRDs7Ozs7Ozs7Ozs7O0FDOXBJQSxJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCxtQkFBbUIsbUJBQU8sQ0FBQyxxR0FBbUM7QUFDOUQ7Ozs7Ozs7Ozs7OztBQ0pBLGdLOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxLQUFLO0FBQ0wsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQTBCLG9CQUFvQixTQUFFO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeHRCQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsbUJBQW1CLG9CQUFvQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpRTtBQUM2QztBQUN0RTtBQUNIO0FBQ0k7QUFDTTtBQUNIOztBQUU1QztBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsOENBQThDLFNBQVM7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLDBJQUEwSSx1REFBTTtBQUNoSixDQUFDOztBQUVEO0FBQ0E7QUFDQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLEtBQXFDLDBDQUEwQyxTQUFLO0FBQzlGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9NQUFvTSxhQUFvQixrQkFBa0I7O0FBRTFPOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsU0FBSTtBQUM1RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUU7QUFDakU7QUFDQTtBQUNBO0FBQ0Esd0dBQXdHLFNBQVMsRUFBRTtBQUNuSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFRQUFxUSxHQUFHLGtIQUFrSCw0QkFBNEIsRUFBRTtBQUN4WjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLEtBQXFDLGNBQWMsU0FBRTtBQUNsRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHlDQUF5QyxTQUFTO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0Esa0dBQWtHLGFBQWE7QUFDL0c7QUFDQTs7QUFFQSxNQUFNLEtBQXFDLEVBQUUsRUFFMUM7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUNBQWlDLFFBQVE7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7O0FBRUEseUNBQXlDLE9BQU87QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQzs7QUFFMUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FB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ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVRhYmxlLCB1c2VTb3J0QnkgfSBmcm9tICdyZWFjdC10YWJsZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJsZSh7IGNvbHVtbnMsIGRhdGEgfSkge1xyXG4gIGNvbnN0IHtcclxuICAgIGdldFRhYmxlUHJvcHMsXHJcbiAgICBnZXRUYWJsZUJvZHlQcm9wcyxcclxuICAgIGhlYWRlckdyb3VwcyxcclxuICAgIHJvd3MsXHJcbiAgICBwcmVwYXJlUm93LFxyXG4gIH0gPSB1c2VUYWJsZShcclxuICAgIHtcclxuICAgICAgY29sdW1ucyxcclxuICAgICAgZGF0YSxcclxuICAgIH0sXHJcbiAgICB1c2VTb3J0QnksXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDx0YWJsZSB7Li4uZ2V0VGFibGVQcm9wcygpfT5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcCgoaGVhZGVyR3JvdXApID0+IChcclxuICAgICAgICAgICAgPHRyIHsuLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9PlxyXG4gICAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcCgoY29sdW1uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8dGggey4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcyhjb2x1bW4uZ2V0U29ydEJ5VG9nZ2xlUHJvcHMoKSl9PlxyXG4gICAgICAgICAgICAgICAgICB7Y29sdW1uLnJlbmRlcignSGVhZGVyJyl9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb2x1bW4uaXNTb3J0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgID8gY29sdW1uLmlzU29ydGVkRGVzY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICcg8J+UvSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnIPCflLwnXHJcbiAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHkgey4uLmdldFRhYmxlQm9keVByb3BzKCl9PlxyXG4gICAgICAgICAge3Jvd3MubWFwKChyb3csIGkpID0+IHtcclxuICAgICAgICAgICAgcHJlcGFyZVJvdyhyb3cpO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDx0ciB7Li4ucm93LmdldFJvd1Byb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAge3Jvdy5jZWxscy5tYXAoKGNlbGwpID0+IChcclxuICAgICAgICAgICAgICAgICAgPHRkIHsuLi5jZWxsLmdldENlbGxQcm9wcygpfT57Y2VsbC5yZW5kZXIoJ0NlbGwnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChzdHJpbmdzLCByYXcpIHtcbiAgaWYgKCFyYXcpIHtcbiAgICByYXcgPSBzdHJpbmdzLnNsaWNlKDApO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc3RyaW5ncywge1xuICAgIHJhdzoge1xuICAgICAgdmFsdWU6IE9iamVjdC5mcmVlemUocmF3KVxuICAgIH1cbiAgfSkpO1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJpbXBvcnQgbWVtb2l6ZSBmcm9tICdAZW1vdGlvbi9tZW1vaXplJztcblxudmFyIHJlYWN0UHJvcHNSZWdleCA9IC9eKChjaGlsZHJlbnxkYW5nZXJvdXNseVNldElubmVySFRNTHxrZXl8cmVmfGF1dG9Gb2N1c3xkZWZhdWx0VmFsdWV8ZGVmYXVsdENoZWNrZWR8aW5uZXJIVE1MfHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ3xzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmd8dmFsdWVMaW5rfGFjY2VwdHxhY2NlcHRDaGFyc2V0fGFjY2Vzc0tleXxhY3Rpb258YWxsb3d8YWxsb3dVc2VyTWVkaWF8YWxsb3dQYXltZW50UmVxdWVzdHxhbGxvd0Z1bGxTY3JlZW58YWxsb3dUcmFuc3BhcmVuY3l8YWx0fGFzeW5jfGF1dG9Db21wbGV0ZXxhdXRvUGxheXxjYXB0dXJlfGNlbGxQYWRkaW5nfGNlbGxTcGFjaW5nfGNoYWxsZW5nZXxjaGFyU2V0fGNoZWNrZWR8Y2l0ZXxjbGFzc0lEfGNsYXNzTmFtZXxjb2xzfGNvbFNwYW58Y29udGVudHxjb250ZW50RWRpdGFibGV8Y29udGV4dE1lbnV8Y29udHJvbHN8Y29udHJvbHNMaXN0fGNvb3Jkc3xjcm9zc09yaWdpbnxkYXRhfGRhdGVUaW1lfGRlY29kaW5nfGRlZmF1bHR8ZGVmZXJ8ZGlyfGRpc2FibGVkfGRpc2FibGVQaWN0dXJlSW5QaWN0dXJlfGRvd25sb2FkfGRyYWdnYWJsZXxlbmNUeXBlfGZvcm18Zm9ybUFjdGlvbnxmb3JtRW5jVHlwZXxmb3JtTWV0aG9kfGZvcm1Ob1ZhbGlkYXRlfGZvcm1UYXJnZXR8ZnJhbWVCb3JkZXJ8aGVhZGVyc3xoZWlnaHR8aGlkZGVufGhpZ2h8aHJlZnxocmVmTGFuZ3xodG1sRm9yfGh0dHBFcXVpdnxpZHxpbnB1dE1vZGV8aW50ZWdyaXR5fGlzfGtleVBhcmFtc3xrZXlUeXBlfGtpbmR8bGFiZWx8bGFuZ3xsaXN0fGxvYWRpbmd8bG9vcHxsb3d8bWFyZ2luSGVpZ2h0fG1hcmdpbldpZHRofG1heHxtYXhMZW5ndGh8bWVkaWF8bWVkaWFHcm91cHxtZXRob2R8bWlufG1pbkxlbmd0aHxtdWx0aXBsZXxtdXRlZHxuYW1lfG5vbmNlfG5vVmFsaWRhdGV8b3BlbnxvcHRpbXVtfHBhdHRlcm58cGxhY2Vob2xkZXJ8cGxheXNJbmxpbmV8cG9zdGVyfHByZWxvYWR8cHJvZmlsZXxyYWRpb0dyb3VwfHJlYWRPbmx5fHJlZmVycmVyUG9saWN5fHJlbHxyZXF1aXJlZHxyZXZlcnNlZHxyb2xlfHJvd3N8cm93U3BhbnxzYW5kYm94fHNjb3BlfHNjb3BlZHxzY3JvbGxpbmd8c2VhbWxlc3N8c2VsZWN0ZWR8c2hhcGV8c2l6ZXxzaXplc3xzbG90fHNwYW58c3BlbGxDaGVja3xzcmN8c3JjRG9jfHNyY0xhbmd8c3JjU2V0fHN0YXJ0fHN0ZXB8c3R5bGV8c3VtbWFyeXx0YWJJbmRleHx0YXJnZXR8dGl0bGV8dHlwZXx1c2VNYXB8dmFsdWV8d2lkdGh8d21vZGV8d3JhcHxhYm91dHxkYXRhdHlwZXxpbmxpc3R8cHJlZml4fHByb3BlcnR5fHJlc291cmNlfHR5cGVvZnx2b2NhYnxhdXRvQ2FwaXRhbGl6ZXxhdXRvQ29ycmVjdHxhdXRvU2F2ZXxjb2xvcnxpbmVydHxpdGVtUHJvcHxpdGVtU2NvcGV8aXRlbVR5cGV8aXRlbUlEfGl0ZW1SZWZ8b258cmVzdWx0c3xzZWN1cml0eXx1bnNlbGVjdGFibGV8YWNjZW50SGVpZ2h0fGFjY3VtdWxhdGV8YWRkaXRpdmV8YWxpZ25tZW50QmFzZWxpbmV8YWxsb3dSZW9yZGVyfGFscGhhYmV0aWN8YW1wbGl0dWRlfGFyYWJpY0Zvcm18YXNjZW50fGF0dHJpYnV0ZU5hbWV8YXR0cmlidXRlVHlwZXxhdXRvUmV2ZXJzZXxhemltdXRofGJhc2VGcmVxdWVuY3l8YmFzZWxpbmVTaGlmdHxiYXNlUHJvZmlsZXxiYm94fGJlZ2lufGJpYXN8Ynl8Y2FsY01vZGV8Y2FwSGVpZ2h0fGNsaXB8Y2xpcFBhdGhVbml0c3xjbGlwUGF0aHxjbGlwUnVsZXxjb2xvckludGVycG9sYXRpb258Y29sb3JJbnRlcnBvbGF0aW9uRmlsdGVyc3xjb2xvclByb2ZpbGV8Y29sb3JSZW5kZXJpbmd8Y29udGVudFNjcmlwdFR5cGV8Y29udGVudFN0eWxlVHlwZXxjdXJzb3J8Y3h8Y3l8ZHxkZWNlbGVyYXRlfGRlc2NlbnR8ZGlmZnVzZUNvbnN0YW50fGRpcmVjdGlvbnxkaXNwbGF5fGRpdmlzb3J8ZG9taW5hbnRCYXNlbGluZXxkdXJ8ZHh8ZHl8ZWRnZU1vZGV8ZWxldmF0aW9ufGVuYWJsZUJhY2tncm91bmR8ZW5kfGV4cG9uZW50fGV4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWR8ZmlsbHxmaWxsT3BhY2l0eXxmaWxsUnVsZXxmaWx0ZXJ8ZmlsdGVyUmVzfGZpbHRlclVuaXRzfGZsb29kQ29sb3J8Zmxvb2RPcGFjaXR5fGZvY3VzYWJsZXxmb250RmFtaWx5fGZvbnRTaXplfGZvbnRTaXplQWRqdXN0fGZvbnRTdHJldGNofGZvbnRTdHlsZXxmb250VmFyaWFudHxmb250V2VpZ2h0fGZvcm1hdHxmcm9tfGZyfGZ4fGZ5fGcxfGcyfGdseXBoTmFtZXxnbHlwaE9yaWVudGF0aW9uSG9yaXpvbnRhbHxnbHlwaE9yaWVudGF0aW9uVmVydGljYWx8Z2x5cGhSZWZ8Z3JhZGllbnRUcmFuc2Zvcm18Z3JhZGllbnRVbml0c3xoYW5naW5nfGhvcml6QWR2WHxob3Jpek9yaWdpblh8aWRlb2dyYXBoaWN8aW1hZ2VSZW5kZXJpbmd8aW58aW4yfGludGVyY2VwdHxrfGsxfGsyfGszfGs0fGtlcm5lbE1hdHJpeHxrZXJuZWxVbml0TGVuZ3RofGtlcm5pbmd8a2V5UG9pbnRzfGtleVNwbGluZXN8a2V5VGltZXN8bGVuZ3RoQWRqdXN0fGxldHRlclNwYWNpbmd8bGlnaHRpbmdDb2xvcnxsaW1pdGluZ0NvbmVBbmdsZXxsb2NhbHxtYXJrZXJFbmR8bWFya2VyTWlkfG1hcmtlclN0YXJ0fG1hcmtlckhlaWdodHxtYXJrZXJVbml0c3xtYXJrZXJXaWR0aHxtYXNrfG1hc2tDb250ZW50VW5pdHN8bWFza1VuaXRzfG1hdGhlbWF0aWNhbHxtb2RlfG51bU9jdGF2ZXN8b2Zmc2V0fG9wYWNpdHl8b3BlcmF0b3J8b3JkZXJ8b3JpZW50fG9yaWVudGF0aW9ufG9yaWdpbnxvdmVyZmxvd3xvdmVybGluZVBvc2l0aW9ufG92ZXJsaW5lVGhpY2tuZXNzfHBhbm9zZTF8cGFpbnRPcmRlcnxwYXRoTGVuZ3RofHBhdHRlcm5Db250ZW50VW5pdHN8cGF0dGVyblRyYW5zZm9ybXxwYXR0ZXJuVW5pdHN8cG9pbnRlckV2ZW50c3xwb2ludHN8cG9pbnRzQXRYfHBvaW50c0F0WXxwb2ludHNBdFp8cHJlc2VydmVBbHBoYXxwcmVzZXJ2ZUFzcGVjdFJhdGlvfHByaW1pdGl2ZVVuaXRzfHJ8cmFkaXVzfHJlZlh8cmVmWXxyZW5kZXJpbmdJbnRlbnR8cmVwZWF0Q291bnR8cmVwZWF0RHVyfHJlcXVpcmVkRXh0ZW5zaW9uc3xyZXF1aXJlZEZlYXR1cmVzfHJlc3RhcnR8cmVzdWx0fHJvdGF0ZXxyeHxyeXxzY2FsZXxzZWVkfHNoYXBlUmVuZGVyaW5nfHNsb3BlfHNwYWNpbmd8c3BlY3VsYXJDb25zdGFudHxzcGVjdWxhckV4cG9uZW50fHNwZWVkfHNwcmVhZE1ldGhvZHxzdGFydE9mZnNldHxzdGREZXZpYXRpb258c3RlbWh8c3RlbXZ8c3RpdGNoVGlsZXN8c3RvcENvbG9yfHN0b3BPcGFjaXR5fHN0cmlrZXRocm91Z2hQb3NpdGlvbnxzdHJpa2V0aHJvdWdoVGhpY2tuZXNzfHN0cmluZ3xzdHJva2V8c3Ryb2tlRGFzaGFycmF5fHN0cm9rZURhc2hvZmZzZXR8c3Ryb2tlTGluZWNhcHxzdHJva2VMaW5lam9pbnxzdHJva2VNaXRlcmxpbWl0fHN0cm9rZU9wYWNpdHl8c3Ryb2tlV2lkdGh8c3VyZmFjZVNjYWxlfHN5c3RlbUxhbmd1YWdlfHRhYmxlVmFsdWVzfHRhcmdldFh8dGFyZ2V0WXx0ZXh0QW5jaG9yfHRleHREZWNvcmF0aW9ufHRleHRSZW5kZXJpbmd8dGV4dExlbmd0aHx0b3x0cmFuc2Zvcm18dTF8dTJ8dW5kZXJsaW5lUG9zaXRpb258dW5kZXJsaW5lVGhpY2tuZXNzfHVuaWNvZGV8dW5pY29kZUJpZGl8dW5pY29kZVJhbmdlfHVuaXRzUGVyRW18dkFscGhhYmV0aWN8dkhhbmdpbmd8dklkZW9ncmFwaGljfHZNYXRoZW1hdGljYWx8dmFsdWVzfHZlY3RvckVmZmVjdHx2ZXJzaW9ufHZlcnRBZHZZfHZlcnRPcmlnaW5YfHZlcnRPcmlnaW5ZfHZpZXdCb3h8dmlld1RhcmdldHx2aXNpYmlsaXR5fHdpZHRoc3x3b3JkU3BhY2luZ3x3cml0aW5nTW9kZXx4fHhIZWlnaHR8eDF8eDJ8eENoYW5uZWxTZWxlY3Rvcnx4bGlua0FjdHVhdGV8eGxpbmtBcmNyb2xlfHhsaW5rSHJlZnx4bGlua1JvbGV8eGxpbmtTaG93fHhsaW5rVGl0bGV8eGxpbmtUeXBlfHhtbEJhc2V8eG1sbnN8eG1sbnNYbGlua3x4bWxMYW5nfHhtbFNwYWNlfHl8eTF8eTJ8eUNoYW5uZWxTZWxlY3Rvcnx6fHpvb21BbmRQYW58Zm9yfGNsYXNzfGF1dG9mb2N1cyl8KChbRGRdW0FhXVtUdF1bQWFdfFtBYV1bUnJdW0lpXVtBYV18eCktLiopKSQvOyAvLyBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzViZmVlNjhhNGNkN2U2MDA5ZWY2MWQyM1xuXG52YXIgaW5kZXggPSBtZW1vaXplKGZ1bmN0aW9uIChwcm9wKSB7XG4gIHJldHVybiByZWFjdFByb3BzUmVnZXgudGVzdChwcm9wKSB8fCBwcm9wLmNoYXJDb2RlQXQoMCkgPT09IDExMVxuICAvKiBvICovXG4gICYmIHByb3AuY2hhckNvZGVBdCgxKSA9PT0gMTEwXG4gIC8qIG4gKi9cbiAgJiYgcHJvcC5jaGFyQ29kZUF0KDIpIDwgOTE7XG59XG4vKiBaKzEgKi9cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiZnVuY3Rpb24gbWVtb2l6ZShmbikge1xuICB2YXIgY2FjaGUgPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoY2FjaGVbYXJnXSA9PT0gdW5kZWZpbmVkKSBjYWNoZVthcmddID0gZm4oYXJnKTtcbiAgICByZXR1cm4gY2FjaGVbYXJnXTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZTtcbiIsImZ1bmN0aW9uIHN0eWxpc19taW4gKFcpIHtcbiAgZnVuY3Rpb24gTShkLCBjLCBlLCBoLCBhKSB7XG4gICAgZm9yICh2YXIgbSA9IDAsIGIgPSAwLCB2ID0gMCwgbiA9IDAsIHEsIGcsIHggPSAwLCBLID0gMCwgaywgdSA9IGsgPSBxID0gMCwgbCA9IDAsIHIgPSAwLCBJID0gMCwgdCA9IDAsIEIgPSBlLmxlbmd0aCwgSiA9IEIgLSAxLCB5LCBmID0gJycsIHAgPSAnJywgRiA9ICcnLCBHID0gJycsIEM7IGwgPCBCOykge1xuICAgICAgZyA9IGUuY2hhckNvZGVBdChsKTtcbiAgICAgIGwgPT09IEogJiYgMCAhPT0gYiArIG4gKyB2ICsgbSAmJiAoMCAhPT0gYiAmJiAoZyA9IDQ3ID09PSBiID8gMTAgOiA0NyksIG4gPSB2ID0gbSA9IDAsIEIrKywgSisrKTtcblxuICAgICAgaWYgKDAgPT09IGIgKyBuICsgdiArIG0pIHtcbiAgICAgICAgaWYgKGwgPT09IEogJiYgKDAgPCByICYmIChmID0gZi5yZXBsYWNlKE4sICcnKSksIDAgPCBmLnRyaW0oKS5sZW5ndGgpKSB7XG4gICAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgZiArPSBlLmNoYXJBdChsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBnID0gNTk7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICBjYXNlIDEyMzpcbiAgICAgICAgICAgIGYgPSBmLnRyaW0oKTtcbiAgICAgICAgICAgIHEgPSBmLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgICBrID0gMTtcblxuICAgICAgICAgICAgZm9yICh0ID0gKytsOyBsIDwgQjspIHtcbiAgICAgICAgICAgICAgc3dpdGNoIChnID0gZS5jaGFyQ29kZUF0KGwpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxMjM6XG4gICAgICAgICAgICAgICAgICBrKys7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgICAgICAgICAgay0tO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgc3dpdGNoIChnID0gZS5jaGFyQ29kZUF0KGwgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgICAgIGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodSA9IGwgKyAxOyB1IDwgSjsgKyt1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZS5jaGFyQ29kZUF0KHUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICg0MiA9PT0gZyAmJiA0MiA9PT0gZS5jaGFyQ29kZUF0KHUgLSAxKSAmJiBsICsgMiAhPT0gdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gdSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICg0NyA9PT0gZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gdSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsID0gdTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDkxOlxuICAgICAgICAgICAgICAgICAgZysrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgIGcrKztcblxuICAgICAgICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgIGZvciAoOyBsKysgPCBKICYmIGUuY2hhckNvZGVBdChsKSAhPT0gZzspIHtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKDAgPT09IGspIGJyZWFrO1xuICAgICAgICAgICAgICBsKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGsgPSBlLnN1YnN0cmluZyh0LCBsKTtcbiAgICAgICAgICAgIDAgPT09IHEgJiYgKHEgPSAoZiA9IGYucmVwbGFjZShjYSwgJycpLnRyaW0oKSkuY2hhckNvZGVBdCgwKSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAocSkge1xuICAgICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAgIDAgPCByICYmIChmID0gZi5yZXBsYWNlKE4sICcnKSk7XG4gICAgICAgICAgICAgICAgZyA9IGYuY2hhckNvZGVBdCgxKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgICAgICAgY2FzZSAxMDA6XG4gICAgICAgICAgICAgICAgICBjYXNlIDEwOTpcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgICAgICAgY2FzZSA0NTpcbiAgICAgICAgICAgICAgICAgICAgciA9IGM7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByID0gTztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBrID0gTShjLCByLCBrLCBnLCBhICsgMSk7XG4gICAgICAgICAgICAgICAgdCA9IGsubGVuZ3RoO1xuICAgICAgICAgICAgICAgIDAgPCBBICYmIChyID0gWChPLCBmLCBJKSwgQyA9IEgoMywgaywgciwgYywgRCwgeiwgdCwgZywgYSwgaCksIGYgPSByLmpvaW4oJycpLCB2b2lkIDAgIT09IEMgJiYgMCA9PT0gKHQgPSAoayA9IEMudHJpbSgpKS5sZW5ndGgpICYmIChnID0gMCwgayA9ICcnKSk7XG4gICAgICAgICAgICAgICAgaWYgKDAgPCB0KSBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgICAgICAgICBmID0gZi5yZXBsYWNlKGRhLCBlYSk7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgMTAwOlxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDk6XG4gICAgICAgICAgICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgICAgICAgICBrID0gZiArICd7JyArIGsgKyAnfSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIDEwNzpcbiAgICAgICAgICAgICAgICAgICAgZiA9IGYucmVwbGFjZShmYSwgJyQxICQyJyk7XG4gICAgICAgICAgICAgICAgICAgIGsgPSBmICsgJ3snICsgayArICd9JztcbiAgICAgICAgICAgICAgICAgICAgayA9IDEgPT09IHcgfHwgMiA9PT0gdyAmJiBMKCdAJyArIGssIDMpID8gJ0Atd2Via2l0LScgKyBrICsgJ0AnICsgayA6ICdAJyArIGs7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBrID0gZiArIGssIDExMiA9PT0gaCAmJiAoayA9IChwICs9IGssICcnKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGsgPSAnJztcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGsgPSBNKGMsIFgoYywgZiwgSSksIGssIGgsIGEgKyAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgRiArPSBrO1xuICAgICAgICAgICAgayA9IEkgPSByID0gdSA9IHEgPSAwO1xuICAgICAgICAgICAgZiA9ICcnO1xuICAgICAgICAgICAgZyA9IGUuY2hhckNvZGVBdCgrK2wpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDEyNTpcbiAgICAgICAgICBjYXNlIDU5OlxuICAgICAgICAgICAgZiA9ICgwIDwgciA/IGYucmVwbGFjZShOLCAnJykgOiBmKS50cmltKCk7XG4gICAgICAgICAgICBpZiAoMSA8ICh0ID0gZi5sZW5ndGgpKSBzd2l0Y2ggKDAgPT09IHUgJiYgKHEgPSBmLmNoYXJDb2RlQXQoMCksIDQ1ID09PSBxIHx8IDk2IDwgcSAmJiAxMjMgPiBxKSAmJiAodCA9IChmID0gZi5yZXBsYWNlKCcgJywgJzonKSkubGVuZ3RoKSwgMCA8IEEgJiYgdm9pZCAwICE9PSAoQyA9IEgoMSwgZiwgYywgZCwgRCwgeiwgcC5sZW5ndGgsIGgsIGEsIGgpKSAmJiAwID09PSAodCA9IChmID0gQy50cmltKCkpLmxlbmd0aCkgJiYgKGYgPSAnXFx4MDBcXHgwMCcpLCBxID0gZi5jaGFyQ29kZUF0KDApLCBnID0gZi5jaGFyQ29kZUF0KDEpLCBxKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAgIGlmICgxMDUgPT09IGcgfHwgOTkgPT09IGcpIHtcbiAgICAgICAgICAgICAgICAgIEcgKz0gZiArIGUuY2hhckF0KGwpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgNTggIT09IGYuY2hhckNvZGVBdCh0IC0gMSkgJiYgKHAgKz0gUChmLCBxLCBnLCBmLmNoYXJDb2RlQXQoMikpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEkgPSByID0gdSA9IHEgPSAwO1xuICAgICAgICAgICAgZiA9ICcnO1xuICAgICAgICAgICAgZyA9IGUuY2hhckNvZGVBdCgrK2wpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgIDQ3ID09PSBiID8gYiA9IDAgOiAwID09PSAxICsgcSAmJiAxMDcgIT09IGggJiYgMCA8IGYubGVuZ3RoICYmIChyID0gMSwgZiArPSAnXFx4MDAnKTtcbiAgICAgICAgICAwIDwgQSAqIFkgJiYgSCgwLCBmLCBjLCBkLCBELCB6LCBwLmxlbmd0aCwgaCwgYSwgaCk7XG4gICAgICAgICAgeiA9IDE7XG4gICAgICAgICAgRCsrO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNTk6XG4gICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgIGlmICgwID09PSBiICsgbiArIHYgKyBtKSB7XG4gICAgICAgICAgICB6Kys7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB6Kys7XG4gICAgICAgICAgeSA9IGUuY2hhckF0KGwpO1xuXG4gICAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICBpZiAoMCA9PT0gbiArIG0gKyBiKSBzd2l0Y2ggKHgpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDQ0OlxuICAgICAgICAgICAgICAgIGNhc2UgNTg6XG4gICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgICAgICB5ID0gJyc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAzMiAhPT0gZyAmJiAoeSA9ICcgJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgeSA9ICdcXFxcMCc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICB5ID0gJ1xcXFxmJztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgIHkgPSAnXFxcXHYnO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmIChyID0gSSA9IDEsIHkgPSAnXFxmJyArIHkpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMDg6XG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgYiArIG0gKyBFICYmIDAgPCB1KSBzd2l0Y2ggKGwgLSB1KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgMTEyID09PSB4ICYmIDU4ID09PSBlLmNoYXJDb2RlQXQobCAtIDMpICYmIChFID0geCk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAxMTEgPT09IEsgJiYgKEUgPSBLKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA1ODpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmICh1ID0gbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQ0OlxuICAgICAgICAgICAgICAwID09PSBiICsgdiArIG4gKyBtICYmIChyID0gMSwgeSArPSAnXFxyJyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgMCA9PT0gYiAmJiAobiA9IG4gPT09IGcgPyAwIDogMCA9PT0gbiA/IGcgOiBuKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgOTE6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgdiAmJiBtKys7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDkzOlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIHYgJiYgbS0tO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0MTpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmIHYtLTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgYiArIG0pIHtcbiAgICAgICAgICAgICAgICBpZiAoMCA9PT0gcSkgc3dpdGNoICgyICogeCArIDMgKiBLKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDUzMzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHEgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2Kys7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgICAgMCA9PT0gYiArIHYgKyBuICsgbSArIHUgKyBrICYmIChrID0gMSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgaWYgKCEoMCA8IG4gKyBtICsgdikpIHN3aXRjaCAoYikge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAoMiAqIGcgKyAzICogZS5jaGFyQ29kZUF0KGwgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDIzNTpcbiAgICAgICAgICAgICAgICAgICAgICBiID0gNDc7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMjA6XG4gICAgICAgICAgICAgICAgICAgICAgdCA9IGwsIGIgPSA0MjtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgICAgICAgNDcgPT09IGcgJiYgNDIgPT09IHggJiYgdCArIDIgIT09IGwgJiYgKDMzID09PSBlLmNoYXJDb2RlQXQodCArIDIpICYmIChwICs9IGUuc3Vic3RyaW5nKHQsIGwgKyAxKSksIHkgPSAnJywgYiA9IDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgMCA9PT0gYiAmJiAoZiArPSB5KTtcbiAgICAgIH1cblxuICAgICAgSyA9IHg7XG4gICAgICB4ID0gZztcbiAgICAgIGwrKztcbiAgICB9XG5cbiAgICB0ID0gcC5sZW5ndGg7XG5cbiAgICBpZiAoMCA8IHQpIHtcbiAgICAgIHIgPSBjO1xuICAgICAgaWYgKDAgPCBBICYmIChDID0gSCgyLCBwLCByLCBkLCBELCB6LCB0LCBoLCBhLCBoKSwgdm9pZCAwICE9PSBDICYmIDAgPT09IChwID0gQykubGVuZ3RoKSkgcmV0dXJuIEcgKyBwICsgRjtcbiAgICAgIHAgPSByLmpvaW4oJywnKSArICd7JyArIHAgKyAnfSc7XG5cbiAgICAgIGlmICgwICE9PSB3ICogRSkge1xuICAgICAgICAyICE9PSB3IHx8IEwocCwgMikgfHwgKEUgPSAwKTtcblxuICAgICAgICBzd2l0Y2ggKEUpIHtcbiAgICAgICAgICBjYXNlIDExMTpcbiAgICAgICAgICAgIHAgPSBwLnJlcGxhY2UoaGEsICc6LW1vei0kMScpICsgcDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxMTI6XG4gICAgICAgICAgICBwID0gcC5yZXBsYWNlKFEsICc6Oi13ZWJraXQtaW5wdXQtJDEnKSArIHAucmVwbGFjZShRLCAnOjotbW96LSQxJykgKyBwLnJlcGxhY2UoUSwgJzotbXMtaW5wdXQtJDEnKSArIHA7XG4gICAgICAgIH1cblxuICAgICAgICBFID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gRyArIHAgKyBGO1xuICB9XG5cbiAgZnVuY3Rpb24gWChkLCBjLCBlKSB7XG4gICAgdmFyIGggPSBjLnRyaW0oKS5zcGxpdChpYSk7XG4gICAgYyA9IGg7XG4gICAgdmFyIGEgPSBoLmxlbmd0aCxcbiAgICAgICAgbSA9IGQubGVuZ3RoO1xuXG4gICAgc3dpdGNoIChtKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHZhciBiID0gMDtcblxuICAgICAgICBmb3IgKGQgPSAwID09PSBtID8gJycgOiBkWzBdICsgJyAnOyBiIDwgYTsgKytiKSB7XG4gICAgICAgICAgY1tiXSA9IFooZCwgY1tiXSwgZSkudHJpbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHZhciB2ID0gYiA9IDA7XG5cbiAgICAgICAgZm9yIChjID0gW107IGIgPCBhOyArK2IpIHtcbiAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG07ICsrbikge1xuICAgICAgICAgICAgY1t2KytdID0gWihkW25dICsgJyAnLCBoW2JdLCBlKS50cmltKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gYztcbiAgfVxuXG4gIGZ1bmN0aW9uIFooZCwgYywgZSkge1xuICAgIHZhciBoID0gYy5jaGFyQ29kZUF0KDApO1xuICAgIDMzID4gaCAmJiAoaCA9IChjID0gYy50cmltKCkpLmNoYXJDb2RlQXQoMCkpO1xuXG4gICAgc3dpdGNoIChoKSB7XG4gICAgICBjYXNlIDM4OlxuICAgICAgICByZXR1cm4gYy5yZXBsYWNlKEYsICckMScgKyBkLnRyaW0oKSk7XG5cbiAgICAgIGNhc2UgNTg6XG4gICAgICAgIHJldHVybiBkLnRyaW0oKSArIGMucmVwbGFjZShGLCAnJDEnICsgZC50cmltKCkpO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoMCA8IDEgKiBlICYmIDAgPCBjLmluZGV4T2YoJ1xcZicpKSByZXR1cm4gYy5yZXBsYWNlKEYsICg1OCA9PT0gZC5jaGFyQ29kZUF0KDApID8gJycgOiAnJDEnKSArIGQudHJpbSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZCArIGM7XG4gIH1cblxuICBmdW5jdGlvbiBQKGQsIGMsIGUsIGgpIHtcbiAgICB2YXIgYSA9IGQgKyAnOycsXG4gICAgICAgIG0gPSAyICogYyArIDMgKiBlICsgNCAqIGg7XG5cbiAgICBpZiAoOTQ0ID09PSBtKSB7XG4gICAgICBkID0gYS5pbmRleE9mKCc6JywgOSkgKyAxO1xuICAgICAgdmFyIGIgPSBhLnN1YnN0cmluZyhkLCBhLmxlbmd0aCAtIDEpLnRyaW0oKTtcbiAgICAgIGIgPSBhLnN1YnN0cmluZygwLCBkKS50cmltKCkgKyBiICsgJzsnO1xuICAgICAgcmV0dXJuIDEgPT09IHcgfHwgMiA9PT0gdyAmJiBMKGIsIDEpID8gJy13ZWJraXQtJyArIGIgKyBiIDogYjtcbiAgICB9XG5cbiAgICBpZiAoMCA9PT0gdyB8fCAyID09PSB3ICYmICFMKGEsIDEpKSByZXR1cm4gYTtcblxuICAgIHN3aXRjaCAobSkge1xuICAgICAgY2FzZSAxMDE1OlxuICAgICAgICByZXR1cm4gOTcgPT09IGEuY2hhckNvZGVBdCgxMCkgPyAnLXdlYmtpdC0nICsgYSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDk1MTpcbiAgICAgICAgcmV0dXJuIDExNiA9PT0gYS5jaGFyQ29kZUF0KDMpID8gJy13ZWJraXQtJyArIGEgKyBhIDogYTtcblxuICAgICAgY2FzZSA5NjM6XG4gICAgICAgIHJldHVybiAxMTAgPT09IGEuY2hhckNvZGVBdCg1KSA/ICctd2Via2l0LScgKyBhICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgMTAwOTpcbiAgICAgICAgaWYgKDEwMCAhPT0gYS5jaGFyQ29kZUF0KDQpKSBicmVhaztcblxuICAgICAgY2FzZSA5Njk6XG4gICAgICBjYXNlIDk0MjpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgYTtcblxuICAgICAgY2FzZSA5Nzg6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbW96LScgKyBhICsgYTtcblxuICAgICAgY2FzZSAxMDE5OlxuICAgICAgY2FzZSA5ODM6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbW96LScgKyBhICsgJy1tcy0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgODgzOlxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg4KSkgcmV0dXJuICctd2Via2l0LScgKyBhICsgYTtcbiAgICAgICAgaWYgKDAgPCBhLmluZGV4T2YoJ2ltYWdlLXNldCgnLCAxMSkpIHJldHVybiBhLnJlcGxhY2UoamEsICckMS13ZWJraXQtJDInKSArIGE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDkzMjpcbiAgICAgICAgaWYgKDQ1ID09PSBhLmNoYXJDb2RlQXQoNCkpIHN3aXRjaCAoYS5jaGFyQ29kZUF0KDUpKSB7XG4gICAgICAgICAgY2FzZSAxMDM6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtYm94LScgKyBhLnJlcGxhY2UoJy1ncm93JywgJycpICsgJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhLnJlcGxhY2UoJ2dyb3cnLCAncG9zaXRpdmUnKSArIGE7XG5cbiAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnc2hyaW5rJywgJ25lZ2F0aXZlJykgKyBhO1xuXG4gICAgICAgICAgY2FzZSA5ODpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnYmFzaXMnLCAncHJlZmVycmVkLXNpemUnKSArIGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgOTY0OlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDEwMjM6XG4gICAgICAgIGlmICg5OSAhPT0gYS5jaGFyQ29kZUF0KDgpKSBicmVhaztcbiAgICAgICAgYiA9IGEuc3Vic3RyaW5nKGEuaW5kZXhPZignOicsIDE1KSkucmVwbGFjZSgnZmxleC0nLCAnJykucmVwbGFjZSgnc3BhY2UtYmV0d2VlbicsICdqdXN0aWZ5Jyk7XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC1ib3gtcGFjaycgKyBiICsgJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtcGFjaycgKyBiICsgYTtcblxuICAgICAgY2FzZSAxMDA1OlxuICAgICAgICByZXR1cm4ga2EudGVzdChhKSA/IGEucmVwbGFjZShhYSwgJzotd2Via2l0LScpICsgYS5yZXBsYWNlKGFhLCAnOi1tb3otJykgKyBhIDogYTtcblxuICAgICAgY2FzZSAxZTM6XG4gICAgICAgIGIgPSBhLnN1YnN0cmluZygxMykudHJpbSgpO1xuICAgICAgICBjID0gYi5pbmRleE9mKCctJykgKyAxO1xuXG4gICAgICAgIHN3aXRjaCAoYi5jaGFyQ29kZUF0KDApICsgYi5jaGFyQ29kZUF0KGMpKSB7XG4gICAgICAgICAgY2FzZSAyMjY6XG4gICAgICAgICAgICBiID0gYS5yZXBsYWNlKEcsICd0YicpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDIzMjpcbiAgICAgICAgICAgIGIgPSBhLnJlcGxhY2UoRywgJ3RiLXJsJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjIwOlxuICAgICAgICAgICAgYiA9IGEucmVwbGFjZShHLCAnbHInKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYiArIGE7XG5cbiAgICAgIGNhc2UgMTAxNzpcbiAgICAgICAgaWYgKC0xID09PSBhLmluZGV4T2YoJ3N0aWNreScsIDkpKSBicmVhaztcblxuICAgICAgY2FzZSA5NzU6XG4gICAgICAgIGMgPSAoYSA9IGQpLmxlbmd0aCAtIDEwO1xuICAgICAgICBiID0gKDMzID09PSBhLmNoYXJDb2RlQXQoYykgPyBhLnN1YnN0cmluZygwLCBjKSA6IGEpLnN1YnN0cmluZyhkLmluZGV4T2YoJzonLCA3KSArIDEpLnRyaW0oKTtcblxuICAgICAgICBzd2l0Y2ggKG0gPSBiLmNoYXJDb2RlQXQoMCkgKyAoYi5jaGFyQ29kZUF0KDcpIHwgMCkpIHtcbiAgICAgICAgICBjYXNlIDIwMzpcbiAgICAgICAgICAgIGlmICgxMTEgPiBiLmNoYXJDb2RlQXQoOCkpIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICBhID0gYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyBiKSArICc7JyArIGE7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjA3OlxuICAgICAgICAgIGNhc2UgMTAyOlxuICAgICAgICAgICAgYSA9IGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgKDEwMiA8IG0gPyAnaW5saW5lLScgOiAnJykgKyAnYm94JykgKyAnOycgKyBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArIGIpICsgJzsnICsgYS5yZXBsYWNlKGIsICctbXMtJyArIGIgKyAnYm94JykgKyAnOycgKyBhO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGEgKyAnOyc7XG5cbiAgICAgIGNhc2UgOTM4OlxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg1KSkgc3dpdGNoIChhLmNoYXJDb2RlQXQoNikpIHtcbiAgICAgICAgICBjYXNlIDEwNTpcbiAgICAgICAgICAgIHJldHVybiBiID0gYS5yZXBsYWNlKCctaXRlbXMnLCAnJyksICctd2Via2l0LScgKyBhICsgJy13ZWJraXQtYm94LScgKyBiICsgJy1tcy1mbGV4LScgKyBiICsgYTtcblxuICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LWl0ZW0tJyArIGEucmVwbGFjZShiYSwgJycpICsgYTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtbGluZS1wYWNrJyArIGEucmVwbGFjZSgnYWxpZ24tY29udGVudCcsICcnKS5yZXBsYWNlKGJhLCAnJykgKyBhO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDk3MzpcbiAgICAgIGNhc2UgOTg5OlxuICAgICAgICBpZiAoNDUgIT09IGEuY2hhckNvZGVBdCgzKSB8fCAxMjIgPT09IGEuY2hhckNvZGVBdCg0KSkgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTMxOlxuICAgICAgY2FzZSA5NTM6XG4gICAgICAgIGlmICghMCA9PT0gbGEudGVzdChkKSkgcmV0dXJuIDExNSA9PT0gKGIgPSBkLnN1YnN0cmluZyhkLmluZGV4T2YoJzonKSArIDEpKS5jaGFyQ29kZUF0KDApID8gUChkLnJlcGxhY2UoJ3N0cmV0Y2gnLCAnZmlsbC1hdmFpbGFibGUnKSwgYywgZSwgaCkucmVwbGFjZSgnOmZpbGwtYXZhaWxhYmxlJywgJzpzdHJldGNoJykgOiBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArIGIpICsgYS5yZXBsYWNlKGIsICctbW96LScgKyBiLnJlcGxhY2UoJ2ZpbGwtJywgJycpKSArIGE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDk2MjpcbiAgICAgICAgaWYgKGEgPSAnLXdlYmtpdC0nICsgYSArICgxMDIgPT09IGEuY2hhckNvZGVBdCg1KSA/ICctbXMtJyArIGEgOiAnJykgKyBhLCAyMTEgPT09IGUgKyBoICYmIDEwNSA9PT0gYS5jaGFyQ29kZUF0KDEzKSAmJiAwIDwgYS5pbmRleE9mKCd0cmFuc2Zvcm0nLCAxMCkpIHJldHVybiBhLnN1YnN0cmluZygwLCBhLmluZGV4T2YoJzsnLCAyNykgKyAxKS5yZXBsYWNlKG1hLCAnJDEtd2Via2l0LSQyJykgKyBhO1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9XG5cbiAgZnVuY3Rpb24gTChkLCBjKSB7XG4gICAgdmFyIGUgPSBkLmluZGV4T2YoMSA9PT0gYyA/ICc6JyA6ICd7JyksXG4gICAgICAgIGggPSBkLnN1YnN0cmluZygwLCAzICE9PSBjID8gZSA6IDEwKTtcbiAgICBlID0gZC5zdWJzdHJpbmcoZSArIDEsIGQubGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuIFIoMiAhPT0gYyA/IGggOiBoLnJlcGxhY2UobmEsICckMScpLCBlLCBjKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVhKGQsIGMpIHtcbiAgICB2YXIgZSA9IFAoYywgYy5jaGFyQ29kZUF0KDApLCBjLmNoYXJDb2RlQXQoMSksIGMuY2hhckNvZGVBdCgyKSk7XG4gICAgcmV0dXJuIGUgIT09IGMgKyAnOycgPyBlLnJlcGxhY2Uob2EsICcgb3IgKCQxKScpLnN1YnN0cmluZyg0KSA6ICcoJyArIGMgKyAnKSc7XG4gIH1cblxuICBmdW5jdGlvbiBIKGQsIGMsIGUsIGgsIGEsIG0sIGIsIHYsIG4sIHEpIHtcbiAgICBmb3IgKHZhciBnID0gMCwgeCA9IGMsIHc7IGcgPCBBOyArK2cpIHtcbiAgICAgIHN3aXRjaCAodyA9IFNbZ10uY2FsbChCLCBkLCB4LCBlLCBoLCBhLCBtLCBiLCB2LCBuLCBxKSkge1xuICAgICAgICBjYXNlIHZvaWQgMDpcbiAgICAgICAgY2FzZSAhMTpcbiAgICAgICAgY2FzZSAhMDpcbiAgICAgICAgY2FzZSBudWxsOlxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgeCA9IHc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHggIT09IGMpIHJldHVybiB4O1xuICB9XG5cbiAgZnVuY3Rpb24gVChkKSB7XG4gICAgc3dpdGNoIChkKSB7XG4gICAgICBjYXNlIHZvaWQgMDpcbiAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgQSA9IFMubGVuZ3RoID0gMDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZCkgU1tBKytdID0gZDtlbHNlIGlmICgnb2JqZWN0JyA9PT0gdHlwZW9mIGQpIGZvciAodmFyIGMgPSAwLCBlID0gZC5sZW5ndGg7IGMgPCBlOyArK2MpIHtcbiAgICAgICAgICBUKGRbY10pO1xuICAgICAgICB9IGVsc2UgWSA9ICEhZCB8IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIFQ7XG4gIH1cblxuICBmdW5jdGlvbiBVKGQpIHtcbiAgICBkID0gZC5wcmVmaXg7XG4gICAgdm9pZCAwICE9PSBkICYmIChSID0gbnVsbCwgZCA/ICdmdW5jdGlvbicgIT09IHR5cGVvZiBkID8gdyA9IDEgOiAodyA9IDIsIFIgPSBkKSA6IHcgPSAwKTtcbiAgICByZXR1cm4gVTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEIoZCwgYykge1xuICAgIHZhciBlID0gZDtcbiAgICAzMyA+IGUuY2hhckNvZGVBdCgwKSAmJiAoZSA9IGUudHJpbSgpKTtcbiAgICBWID0gZTtcbiAgICBlID0gW1ZdO1xuXG4gICAgaWYgKDAgPCBBKSB7XG4gICAgICB2YXIgaCA9IEgoLTEsIGMsIGUsIGUsIEQsIHosIDAsIDAsIDAsIDApO1xuICAgICAgdm9pZCAwICE9PSBoICYmICdzdHJpbmcnID09PSB0eXBlb2YgaCAmJiAoYyA9IGgpO1xuICAgIH1cblxuICAgIHZhciBhID0gTShPLCBlLCBjLCAwLCAwKTtcbiAgICAwIDwgQSAmJiAoaCA9IEgoLTIsIGEsIGUsIGUsIEQsIHosIGEubGVuZ3RoLCAwLCAwLCAwKSwgdm9pZCAwICE9PSBoICYmIChhID0gaCkpO1xuICAgIFYgPSAnJztcbiAgICBFID0gMDtcbiAgICB6ID0gRCA9IDE7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICB2YXIgY2EgPSAvXlxcMCsvZyxcbiAgICAgIE4gPSAvW1xcMFxcclxcZl0vZyxcbiAgICAgIGFhID0gLzogKi9nLFxuICAgICAga2EgPSAvem9vfGdyYS8sXG4gICAgICBtYSA9IC8oWyw6IF0pKHRyYW5zZm9ybSkvZyxcbiAgICAgIGlhID0gLyxcXHIrPy9nLFxuICAgICAgRiA9IC8oW1xcdFxcclxcbiBdKSpcXGY/Ji9nLFxuICAgICAgZmEgPSAvQChrXFx3KylcXHMqKFxcUyopXFxzKi8sXG4gICAgICBRID0gLzo6KHBsYWNlKS9nLFxuICAgICAgaGEgPSAvOihyZWFkLW9ubHkpL2csXG4gICAgICBHID0gL1tzdmhdXFx3Ky1bdGJscl17Mn0vLFxuICAgICAgZGEgPSAvXFwoXFxzKiguKilcXHMqXFwpL2csXG4gICAgICBvYSA9IC8oW1xcc1xcU10qPyk7L2csXG4gICAgICBiYSA9IC8tc2VsZnxmbGV4LS9nLFxuICAgICAgbmEgPSAvW15dKj8oOltycF1bZWxdYVtcXHctXSspW15dKi8sXG4gICAgICBsYSA9IC9zdHJldGNofDpcXHMqXFx3K1xcLSg/OmNvbnRlfGF2YWlsKS8sXG4gICAgICBqYSA9IC8oW14tXSkoaW1hZ2Utc2V0XFwoKS8sXG4gICAgICB6ID0gMSxcbiAgICAgIEQgPSAxLFxuICAgICAgRSA9IDAsXG4gICAgICB3ID0gMSxcbiAgICAgIE8gPSBbXSxcbiAgICAgIFMgPSBbXSxcbiAgICAgIEEgPSAwLFxuICAgICAgUiA9IG51bGwsXG4gICAgICBZID0gMCxcbiAgICAgIFYgPSAnJztcbiAgQi51c2UgPSBUO1xuICBCLnNldCA9IFU7XG4gIHZvaWQgMCAhPT0gVyAmJiBVKFcpO1xuICByZXR1cm4gQjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGlzX21pbjtcbiIsInZhciB1bml0bGVzc0tleXMgPSB7XG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAxLFxuICBib3JkZXJJbWFnZU91dHNldDogMSxcbiAgYm9yZGVySW1hZ2VTbGljZTogMSxcbiAgYm9yZGVySW1hZ2VXaWR0aDogMSxcbiAgYm94RmxleDogMSxcbiAgYm94RmxleEdyb3VwOiAxLFxuICBib3hPcmRpbmFsR3JvdXA6IDEsXG4gIGNvbHVtbkNvdW50OiAxLFxuICBjb2x1bW5zOiAxLFxuICBmbGV4OiAxLFxuICBmbGV4R3JvdzogMSxcbiAgZmxleFBvc2l0aXZlOiAxLFxuICBmbGV4U2hyaW5rOiAxLFxuICBmbGV4TmVnYXRpdmU6IDEsXG4gIGZsZXhPcmRlcjogMSxcbiAgZ3JpZFJvdzogMSxcbiAgZ3JpZFJvd0VuZDogMSxcbiAgZ3JpZFJvd1NwYW46IDEsXG4gIGdyaWRSb3dTdGFydDogMSxcbiAgZ3JpZENvbHVtbjogMSxcbiAgZ3JpZENvbHVtbkVuZDogMSxcbiAgZ3JpZENvbHVtblNwYW46IDEsXG4gIGdyaWRDb2x1bW5TdGFydDogMSxcbiAgbXNHcmlkUm93OiAxLFxuICBtc0dyaWRSb3dTcGFuOiAxLFxuICBtc0dyaWRDb2x1bW46IDEsXG4gIG1zR3JpZENvbHVtblNwYW46IDEsXG4gIGZvbnRXZWlnaHQ6IDEsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG9wYWNpdHk6IDEsXG4gIG9yZGVyOiAxLFxuICBvcnBoYW5zOiAxLFxuICB0YWJTaXplOiAxLFxuICB3aWRvd3M6IDEsXG4gIHpJbmRleDogMSxcbiAgem9vbTogMSxcbiAgV2Via2l0TGluZUNsYW1wOiAxLFxuICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXG4gIGZpbGxPcGFjaXR5OiAxLFxuICBmbG9vZE9wYWNpdHk6IDEsXG4gIHN0b3BPcGFjaXR5OiAxLFxuICBzdHJva2VEYXNoYXJyYXk6IDEsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IDEsXG4gIHN0cm9rZU1pdGVybGltaXQ6IDEsXG4gIHN0cm9rZU9wYWNpdHk6IDEsXG4gIHN0cm9rZVdpZHRoOiAxXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1bml0bGVzc0tleXM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28hIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS4gU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICBjb250ZXh0VHlwZTogdHJ1ZSxcbiAgY29udGV4dFR5cGVzOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICBtaXhpbnM6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBLTk9XTl9TVEFUSUNTID0ge1xuICBuYW1lOiB0cnVlLFxuICBsZW5ndGg6IHRydWUsXG4gIHByb3RvdHlwZTogdHJ1ZSxcbiAgY2FsbGVyOiB0cnVlLFxuICBjYWxsZWU6IHRydWUsXG4gIGFyZ3VtZW50czogdHJ1ZSxcbiAgYXJpdHk6IHRydWVcbn07XG52YXIgRk9SV0FSRF9SRUZfU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgcmVuZGVyOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWVcbn07XG52YXIgTUVNT19TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICBjb21wYXJlOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgVFlQRV9TVEFUSUNTID0ge307XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5Gb3J3YXJkUmVmXSA9IEZPUldBUkRfUkVGX1NUQVRJQ1M7XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5NZW1vXSA9IE1FTU9fU1RBVElDUztcblxuZnVuY3Rpb24gZ2V0U3RhdGljcyhjb21wb25lbnQpIHtcbiAgLy8gUmVhY3QgdjE2LjExIGFuZCBiZWxvd1xuICBpZiAocmVhY3RJcy5pc01lbW8oY29tcG9uZW50KSkge1xuICAgIHJldHVybiBNRU1PX1NUQVRJQ1M7XG4gIH0gLy8gUmVhY3QgdjE2LjEyIGFuZCBhYm92ZVxuXG5cbiAgcmV0dXJuIFRZUEVfU1RBVElDU1tjb21wb25lbnRbJyQkdHlwZW9mJ11dIHx8IFJFQUNUX1NUQVRJQ1M7XG59XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIG9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgYmxhY2tsaXN0KSB7XG4gIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSAnc3RyaW5nJykge1xuICAgIC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG4gICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgdmFyIGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQsIGJsYWNrbGlzdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgIH1cblxuICAgIHZhciB0YXJnZXRTdGF0aWNzID0gZ2V0U3RhdGljcyh0YXJnZXRDb21wb25lbnQpO1xuICAgIHZhciBzb3VyY2VTdGF0aWNzID0gZ2V0U3RhdGljcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKCFLTk9XTl9TVEFUSUNTW2tleV0gJiYgIShibGFja2xpc3QgJiYgYmxhY2tsaXN0W2tleV0pICYmICEoc291cmNlU3RhdGljcyAmJiBzb3VyY2VTdGF0aWNzW2tleV0pICYmICEodGFyZ2V0U3RhdGljcyAmJiB0YXJnZXRTdGF0aWNzW2tleV0pKSB7XG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIEF2b2lkIGZhaWx1cmVzIGZyb20gcmVhZC1vbmx5IHByb3BlcnRpZXNcbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXRDb21wb25lbnQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBob2lzdE5vblJlYWN0U3RhdGljcztcbiIsIlwidXNlIHN0cmljdFwiOy8qIGdsb2JhbHMgc2VsZiAqL3ZhciBmZXRjaD1zZWxmLmZldGNoLmJpbmQoc2VsZik7bW9kdWxlLmV4cG9ydHM9ZmV0Y2g7bW9kdWxlLmV4cG9ydHMuZGVmYXVsdD1tb2R1bGUuZXhwb3J0cztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcc2tvcnpcXFxcT25lRHJpdmVcXFxcUHVscGl0XFxcXERldlN0dWZmXFxcXEJ1c2hpZG9cXFxcaHVydHpvby1wYXJzZXJcXFxcaHVydHpvby1wYXJzZXJcXFxccGFja2FnZXNcXFxcZGF0YS1kaXNwbGF5XFxcXHBhZ2VzXFxcXGluZGV4LmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cywgcmVxdWlyZSgncmVhY3QnKSkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJywgJ3JlYWN0J10sIGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC5SZWFjdFRhYmxlID0ge30sIGdsb2JhbC5SZWFjdCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKGV4cG9ydHMsIFJlYWN0KSB7ICd1c2Ugc3RyaWN0JztcblxuICBSZWFjdCA9IFJlYWN0ICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChSZWFjdCwgJ2RlZmF1bHQnKSA/IFJlYWN0WydkZWZhdWx0J10gOiBSZWFjdDtcblxuICBmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gICAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG5cbiAgICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgICB2YXIgdGFyZ2V0ID0ge307XG4gICAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgIHZhciBrZXksIGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgICBpZiAodHlwZW9mIGlucHV0ICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gICAgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdO1xuXG4gICAgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XG4gICAgICBpZiAodHlwZW9mIHJlcyAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICAgIHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcblxuICAgIHJldHVybiB0eXBlb2Yga2V5ID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7XG4gIH1cblxuICB2YXIgcmVuZGVyRXJyID0gJ1JlbmRlcmVyIEVycm9yIOKYne+4jyc7XG4gIHZhciBhY3Rpb25zID0ge1xuICAgIGluaXQ6ICdpbml0J1xuICB9O1xuICB2YXIgZGVmYXVsdENvbHVtbiA9IHtcbiAgICBDZWxsOiBmdW5jdGlvbiBDZWxsKF9yZWYpIHtcbiAgICAgIHZhciBfcmVmJHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgICAgICB2YWx1ZSA9IF9yZWYkdmFsdWUgPT09IHZvaWQgMCA/ICcnIDogX3JlZiR2YWx1ZTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIHdpZHRoOiAxNTAsXG4gICAgbWluV2lkdGg6IDAsXG4gICAgbWF4V2lkdGg6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG4gIH07XG5cbiAgZnVuY3Rpb24gbWVyZ2VQcm9wcygpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcHJvcExpc3QgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBwcm9wTGlzdFtfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcExpc3QucmVkdWNlKGZ1bmN0aW9uIChwcm9wcywgbmV4dCkge1xuICAgICAgdmFyIHN0eWxlID0gbmV4dC5zdHlsZSxcbiAgICAgICAgICBjbGFzc05hbWUgPSBuZXh0LmNsYXNzTmFtZSxcbiAgICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UobmV4dCwgW1wic3R5bGVcIiwgXCJjbGFzc05hbWVcIl0pO1xuXG4gICAgICBwcm9wcyA9IF9leHRlbmRzKHt9LCBwcm9wcywge30sIHJlc3QpO1xuXG4gICAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgcHJvcHMuc3R5bGUgPSBwcm9wcy5zdHlsZSA/IF9leHRlbmRzKHt9LCBwcm9wcy5zdHlsZSB8fCB7fSwge30sIHN0eWxlIHx8IHt9KSA6IHN0eWxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgIHByb3BzLmNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSArICcgJyArIGNsYXNzTmFtZSA6IGNsYXNzTmFtZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLmNsYXNzTmFtZSA9PT0gJycpIHtcbiAgICAgICAgZGVsZXRlIHByb3BzLmNsYXNzTmFtZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH0sIHt9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVByb3BHZXR0ZXIocHJldlByb3BzLCB1c2VyUHJvcHMsIG1ldGEpIHtcbiAgICAvLyBIYW5kbGUgYSBsYW1iZGEsIHBhc3MgaXQgdGhlIHByZXZpb3VzIHByb3BzXG4gICAgaWYgKHR5cGVvZiB1c2VyUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBoYW5kbGVQcm9wR2V0dGVyKHt9LCB1c2VyUHJvcHMocHJldlByb3BzLCBtZXRhKSk7XG4gICAgfSAvLyBIYW5kbGUgYW4gYXJyYXksIG1lcmdlIGVhY2ggaXRlbSBhcyBzZXBhcmF0ZSBwcm9wc1xuXG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh1c2VyUHJvcHMpKSB7XG4gICAgICByZXR1cm4gbWVyZ2VQcm9wcy5hcHBseSh2b2lkIDAsIFtwcmV2UHJvcHNdLmNvbmNhdCh1c2VyUHJvcHMpKTtcbiAgICB9IC8vIEhhbmRsZSBhbiBvYmplY3QgYnkgZGVmYXVsdCwgbWVyZ2UgdGhlIHR3byBvYmplY3RzXG5cblxuICAgIHJldHVybiBtZXJnZVByb3BzKHByZXZQcm9wcywgdXNlclByb3BzKTtcbiAgfVxuXG4gIHZhciBtYWtlUHJvcEdldHRlciA9IGZ1bmN0aW9uIG1ha2VQcm9wR2V0dGVyKGhvb2tzLCBtZXRhKSB7XG4gICAgaWYgKG1ldGEgPT09IHZvaWQgMCkge1xuICAgICAgbWV0YSA9IHt9O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAodXNlclByb3BzKSB7XG4gICAgICBpZiAodXNlclByb3BzID09PSB2b2lkIDApIHtcbiAgICAgICAgdXNlclByb3BzID0ge307XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbXS5jb25jYXQoaG9va3MsIFt1c2VyUHJvcHNdKS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIG5leHQpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZVByb3BHZXR0ZXIocHJldiwgbmV4dCwgX2V4dGVuZHMoe30sIG1ldGEsIHtcbiAgICAgICAgICB1c2VyUHJvcHM6IHVzZXJQcm9wc1xuICAgICAgICB9KSk7XG4gICAgICB9LCB7fSk7XG4gICAgfTtcbiAgfTtcbiAgdmFyIHJlZHVjZUhvb2tzID0gZnVuY3Rpb24gcmVkdWNlSG9va3MoaG9va3MsIGluaXRpYWwsIG1ldGEsIGFsbG93VW5kZWZpbmVkKSB7XG4gICAgaWYgKG1ldGEgPT09IHZvaWQgMCkge1xuICAgICAgbWV0YSA9IHt9O1xuICAgIH1cblxuICAgIHJldHVybiBob29rcy5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIG5leHQpIHtcbiAgICAgIHZhciBuZXh0VmFsdWUgPSBuZXh0KHByZXYsIG1ldGEpO1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoIWFsbG93VW5kZWZpbmVkICYmIHR5cGVvZiBuZXh0VmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgY29uc29sZS5pbmZvKG5leHQpO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVhY3QgVGFibGU6IEEgcmVkdWNlciBob29rIOKYne+4jyBqdXN0IHJldHVybmVkIHVuZGVmaW5lZCEgVGhpcyBpcyBub3QgYWxsb3dlZC4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV4dFZhbHVlO1xuICAgIH0sIGluaXRpYWwpO1xuICB9O1xuICB2YXIgbG9vcEhvb2tzID0gZnVuY3Rpb24gbG9vcEhvb2tzKGhvb2tzLCBjb250ZXh0LCBtZXRhKSB7XG4gICAgaWYgKG1ldGEgPT09IHZvaWQgMCkge1xuICAgICAgbWV0YSA9IHt9O1xuICAgIH1cblxuICAgIHJldHVybiBob29rcy5mb3JFYWNoKGZ1bmN0aW9uIChob29rKSB7XG4gICAgICB2YXIgbmV4dFZhbHVlID0gaG9vayhjb250ZXh0LCBtZXRhKTtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuZXh0VmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgY29uc29sZS5pbmZvKGhvb2ssIG5leHRWYWx1ZSk7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWFjdCBUYWJsZTogQSBsb29wLXR5cGUgaG9vayDimJ3vuI8ganVzdCByZXR1cm5lZCBhIHZhbHVlISBUaGlzIGlzIG5vdCBhbGxvd2VkLicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGZ1bmN0aW9uIGVuc3VyZVBsdWdpbk9yZGVyKHBsdWdpbnMsIGJlZm9yZXMsIHBsdWdpbk5hbWUsIGFmdGVycykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGFmdGVycykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGVmaW5pbmcgcGx1Z2lucyBpbiB0aGUgXFxcImFmdGVyXFxcIiBzZWN0aW9uIG9mIGVuc3VyZVBsdWdpbk9yZGVyIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQgKHNlZSBwbHVnaW4gXCIgKyBwbHVnaW5OYW1lICsgXCIpXCIpO1xuICAgIH1cblxuICAgIHZhciBwbHVnaW5JbmRleCA9IHBsdWdpbnMuZmluZEluZGV4KGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgIHJldHVybiBwbHVnaW4ucGx1Z2luTmFtZSA9PT0gcGx1Z2luTmFtZTtcbiAgICB9KTtcblxuICAgIGlmIChwbHVnaW5JbmRleCA9PT0gLTEpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBwbHVnaW4gXFxcIlwiICsgcGx1Z2luTmFtZSArIFwiXFxcIiB3YXMgbm90IGZvdW5kIGluIHRoZSBwbHVnaW4gbGlzdCFcXG5UaGlzIHVzdWFsbHkgbWVhbnMgeW91IG5lZWQgdG8gbmVlZCB0byBuYW1lIHlvdXIgcGx1Z2luIGhvb2sgYnkgc2V0dGluZyB0aGUgJ3BsdWdpbk5hbWUnIHByb3BlcnR5IG9mIHRoZSBob29rIGZ1bmN0aW9uLCBlZzpcXG5cXG4gIFwiICsgcGx1Z2luTmFtZSArIFwiLnBsdWdpbk5hbWUgPSAnXCIgKyBwbHVnaW5OYW1lICsgXCInXFxuXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGJlZm9yZXMuZm9yRWFjaChmdW5jdGlvbiAoYmVmb3JlKSB7XG4gICAgICB2YXIgYmVmb3JlSW5kZXggPSBwbHVnaW5zLmZpbmRJbmRleChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICAgIHJldHVybiBwbHVnaW4ucGx1Z2luTmFtZSA9PT0gYmVmb3JlO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChiZWZvcmVJbmRleCA+IC0xICYmIGJlZm9yZUluZGV4ID4gcGx1Z2luSW5kZXgpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWFjdCBUYWJsZTogVGhlIFwiICsgcGx1Z2luTmFtZSArIFwiIHBsdWdpbiBob29rIG11c3QgYmUgcGxhY2VkIGFmdGVyIHRoZSBcIiArIGJlZm9yZSArIFwiIHBsdWdpbiBob29rIVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGZ1bmN0aW9uYWxVcGRhdGUodXBkYXRlciwgb2xkKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB1cGRhdGVyID09PSAnZnVuY3Rpb24nID8gdXBkYXRlcihvbGQpIDogdXBkYXRlcjtcbiAgfVxuICBmdW5jdGlvbiB1c2VHZXRMYXRlc3Qob2JqKSB7XG4gICAgdmFyIHJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICAgIHJlZi5jdXJyZW50ID0gb2JqO1xuICAgIHJldHVybiBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVmLmN1cnJlbnQ7XG4gICAgfSwgW10pO1xuICB9IC8vIFNTUiBoYXMgaXNzdWVzIHdpdGggdXNlTGF5b3V0RWZmZWN0IHN0aWxsLCBzbyB1c2UgdXNlRWZmZWN0IGR1cmluZyBTU1JcblxuICB2YXIgc2FmZVVzZUxheW91dEVmZmVjdCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBSZWFjdC51c2VMYXlvdXRFZmZlY3QgOiBSZWFjdC51c2VFZmZlY3Q7XG4gIGZ1bmN0aW9uIHVzZU1vdW50ZWRMYXlvdXRFZmZlY3QoZm4sIGRlcHMpIHtcbiAgICB2YXIgbW91bnRlZFJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gICAgc2FmZVVzZUxheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAobW91bnRlZFJlZi5jdXJyZW50KSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9XG5cbiAgICAgIG1vdW50ZWRSZWYuY3VycmVudCA9IHRydWU7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIH0sIGRlcHMpO1xuICB9XG4gIGZ1bmN0aW9uIHVzZUFzeW5jRGVib3VuY2UoZGVmYXVsdEZuLCBkZWZhdWx0V2FpdCkge1xuICAgIGlmIChkZWZhdWx0V2FpdCA9PT0gdm9pZCAwKSB7XG4gICAgICBkZWZhdWx0V2FpdCA9IDA7XG4gICAgfVxuXG4gICAgdmFyIGRlYm91bmNlUmVmID0gUmVhY3QudXNlUmVmKHt9KTtcbiAgICB2YXIgZ2V0RGVmYXVsdEZuID0gdXNlR2V0TGF0ZXN0KGRlZmF1bHRGbik7XG4gICAgdmFyIGdldERlZmF1bHRXYWl0ID0gdXNlR2V0TGF0ZXN0KGRlZmF1bHRXYWl0KTtcbiAgICByZXR1cm4gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgLyojX19QVVJFX18qL1xuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfcmVmMiA9IF9hc3luY1RvR2VuZXJhdG9yKFxuICAgICAgLyojX19QVVJFX18qL1xuICAgICAgcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIoKSB7XG4gICAgICAgIHZhciBfbGVuMixcbiAgICAgICAgICAgIGFyZ3MsXG4gICAgICAgICAgICBfa2V5MixcbiAgICAgICAgICAgIF9hcmdzMiA9IGFyZ3VtZW50cztcblxuICAgICAgICByZXR1cm4gcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTIkKF9jb250ZXh0Mikge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Mi5wcmV2ID0gX2NvbnRleHQyLm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGZvciAoX2xlbjIgPSBfYXJnczIubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgICAgICAgICAgICBhcmdzW19rZXkyXSA9IF9hcmdzMltfa2V5Ml07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFkZWJvdW5jZVJlZi5jdXJyZW50LnByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgIGRlYm91bmNlUmVmLmN1cnJlbnQucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVib3VuY2VSZWYuY3VycmVudC5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgICAgICAgICAgZGVib3VuY2VSZWYuY3VycmVudC5yZWplY3QgPSByZWplY3Q7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZGVib3VuY2VSZWYuY3VycmVudC50aW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoZGVib3VuY2VSZWYuY3VycmVudC50aW1lb3V0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkZWJvdW5jZVJlZi5jdXJyZW50LnRpbWVvdXQgPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIC8qI19fUFVSRV9fKi9cbiAgICAgICAgICAgICAgICBfYXN5bmNUb0dlbmVyYXRvcihcbiAgICAgICAgICAgICAgICAvKiNfX1BVUkVfXyovXG4gICAgICAgICAgICAgICAgcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRlYm91bmNlUmVmLmN1cnJlbnQudGltZW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0LnQwID0gZGVib3VuY2VSZWYuY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXREZWZhdWx0Rm4oKS5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0LnQxID0gX2NvbnRleHQuc2VudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC50MC5yZXNvbHZlLmNhbGwoX2NvbnRleHQudDAsIF9jb250ZXh0LnQxKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSA5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC50MiA9IF9jb250ZXh0W1wiY2F0Y2hcIl0oMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlYm91bmNlUmVmLmN1cnJlbnQucmVqZWN0KF9jb250ZXh0LnQyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDEyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZGVib3VuY2VSZWYuY3VycmVudC5wcm9taXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuZmluaXNoKDEyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sIF9jYWxsZWUsIG51bGwsIFtbMSwgOSwgMTIsIDE1XV0pO1xuICAgICAgICAgICAgICAgIH0pKSwgZ2V0RGVmYXVsdFdhaXQoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5hYnJ1cHQoXCJyZXR1cm5cIiwgZGVib3VuY2VSZWYuY3VycmVudC5wcm9taXNlKTtcblxuICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWUyKTtcbiAgICAgIH0pKTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9yZWYyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH0oKSwgW2dldERlZmF1bHRGbiwgZ2V0RGVmYXVsdFdhaXRdKTtcbiAgfVxuICBmdW5jdGlvbiBtYWtlUmVuZGVyZXIoaW5zdGFuY2UsIGNvbHVtbiwgbWV0YSkge1xuICAgIGlmIChtZXRhID09PSB2b2lkIDApIHtcbiAgICAgIG1ldGEgPSB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHR5cGUsIHVzZXJQcm9wcykge1xuICAgICAgaWYgKHVzZXJQcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHVzZXJQcm9wcyA9IHt9O1xuICAgICAgfVxuXG4gICAgICB2YXIgQ29tcCA9IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IGNvbHVtblt0eXBlXSA6IHR5cGU7XG5cbiAgICAgIGlmICh0eXBlb2YgQ29tcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKGNvbHVtbik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihyZW5kZXJFcnIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmxleFJlbmRlcihDb21wLCBfZXh0ZW5kcyh7fSwgaW5zdGFuY2UsIHtcbiAgICAgICAgY29sdW1uOiBjb2x1bW5cbiAgICAgIH0sIG1ldGEsIHt9LCB1c2VyUHJvcHMpKTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGZsZXhSZW5kZXIoQ29tcCwgcHJvcHMpIHtcbiAgICByZXR1cm4gaXNSZWFjdENvbXBvbmVudChDb21wKSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcCwgcHJvcHMpIDogQ29tcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzUmVhY3RDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIGlzQ2xhc3NDb21wb25lbnQoY29tcG9uZW50KSB8fCB0eXBlb2YgY29tcG9uZW50ID09PSAnZnVuY3Rpb24nIHx8IGlzRXhvdGljQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0NsYXNzQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIHJldHVybiB0eXBlb2YgY29tcG9uZW50ID09PSAnZnVuY3Rpb24nICYmIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihjb21wb25lbnQpO1xuICAgICAgcmV0dXJuIHByb3RvLnByb3RvdHlwZSAmJiBwcm90by5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudDtcbiAgICB9KCk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0V4b3RpY0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICByZXR1cm4gdHlwZW9mIGNvbXBvbmVudCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGNvbXBvbmVudC4kJHR5cGVvZiA9PT0gJ3N5bWJvbCcgJiYgWydyZWFjdC5tZW1vJywgJ3JlYWN0LmZvcndhcmRfcmVmJ10uaW5jbHVkZXMoY29tcG9uZW50LiQkdHlwZW9mLmRlc2NyaXB0aW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpbmtDb2x1bW5TdHJ1Y3R1cmUoY29sdW1ucywgcGFyZW50LCBkZXB0aCkge1xuICAgIGlmIChkZXB0aCA9PT0gdm9pZCAwKSB7XG4gICAgICBkZXB0aCA9IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbHVtbnMubWFwKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgIGNvbHVtbiA9IF9leHRlbmRzKHt9LCBjb2x1bW4sIHtcbiAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgIGRlcHRoOiBkZXB0aFxuICAgICAgfSk7XG4gICAgICBhc3NpZ25Db2x1bW5BY2Nlc3Nvcihjb2x1bW4pO1xuXG4gICAgICBpZiAoY29sdW1uLmNvbHVtbnMpIHtcbiAgICAgICAgY29sdW1uLmNvbHVtbnMgPSBsaW5rQ29sdW1uU3RydWN0dXJlKGNvbHVtbi5jb2x1bW5zLCBjb2x1bW4sIGRlcHRoICsgMSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb2x1bW47XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gZmxhdHRlbkNvbHVtbnMoY29sdW1ucykge1xuICAgIHJldHVybiBmbGF0dGVuQnkoY29sdW1ucywgJ2NvbHVtbnMnKTtcbiAgfVxuICBmdW5jdGlvbiBhc3NpZ25Db2x1bW5BY2Nlc3Nvcihjb2x1bW4pIHtcbiAgICAvLyBGaXJzdCBjaGVjayBmb3Igc3RyaW5nIGFjY2Vzc29yXG4gICAgdmFyIGlkID0gY29sdW1uLmlkLFxuICAgICAgICBhY2Nlc3NvciA9IGNvbHVtbi5hY2Nlc3NvcixcbiAgICAgICAgSGVhZGVyID0gY29sdW1uLkhlYWRlcjtcblxuICAgIGlmICh0eXBlb2YgYWNjZXNzb3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZCA9IGlkIHx8IGFjY2Vzc29yO1xuICAgICAgdmFyIGFjY2Vzc29yUGF0aCA9IGFjY2Vzc29yLnNwbGl0KCcuJyk7XG5cbiAgICAgIGFjY2Vzc29yID0gZnVuY3Rpb24gYWNjZXNzb3Iocm93KSB7XG4gICAgICAgIHJldHVybiBnZXRCeShyb3csIGFjY2Vzc29yUGF0aCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICghaWQgJiYgdHlwZW9mIEhlYWRlciA9PT0gJ3N0cmluZycgJiYgSGVhZGVyKSB7XG4gICAgICBpZCA9IEhlYWRlcjtcbiAgICB9XG5cbiAgICBpZiAoIWlkICYmIGNvbHVtbi5jb2x1bW5zKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGNvbHVtbik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgY29sdW1uIElEIChvciB1bmlxdWUgXCJIZWFkZXJcIiB2YWx1ZSkgaXMgcmVxdWlyZWQhJyk7XG4gICAgfVxuXG4gICAgaWYgKCFpZCkge1xuICAgICAgY29uc29sZS5lcnJvcihjb2x1bW4pO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIGNvbHVtbiBJRCAob3Igc3RyaW5nIGFjY2Vzc29yKSBpcyByZXF1aXJlZCEnKTtcbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKGNvbHVtbiwge1xuICAgICAgaWQ6IGlkLFxuICAgICAgYWNjZXNzb3I6IGFjY2Vzc29yXG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbHVtbjtcbiAgfVxuICBmdW5jdGlvbiBkZWNvcmF0ZUNvbHVtbihjb2x1bW4sIHVzZXJEZWZhdWx0Q29sdW1uKSB7XG4gICAgaWYgKCF1c2VyRGVmYXVsdENvbHVtbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbihjb2x1bW4sIF9leHRlbmRzKHtcbiAgICAgIC8vIE1ha2Ugc3VyZSB0aGVyZSBpcyBhIGZhbGxiYWNrIGhlYWRlciwganVzdCBpbiBjYXNlXG4gICAgICBIZWFkZXI6IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFwiXFx4QTBcIik7XG4gICAgICB9LFxuICAgICAgRm9vdGVyOiBmdW5jdGlvbiBGb290ZXIoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBcIlxceEEwXCIpO1xuICAgICAgfVxuICAgIH0sIGRlZmF1bHRDb2x1bW4sIHt9LCB1c2VyRGVmYXVsdENvbHVtbiwge30sIGNvbHVtbikpO1xuICAgIHJldHVybiBjb2x1bW47XG4gIH0gLy8gQnVpbGQgdGhlIGhlYWRlciBncm91cHMgZnJvbSB0aGUgYm90dG9tIHVwXG5cbiAgZnVuY3Rpb24gbWFrZUhlYWRlckdyb3VwcyhhbGxDb2x1bW5zLCBkZWZhdWx0Q29sdW1uKSB7XG4gICAgdmFyIGhlYWRlckdyb3VwcyA9IFtdO1xuICAgIHZhciBzY2FuQ29sdW1ucyA9IGFsbENvbHVtbnM7XG4gICAgdmFyIHVpZCA9IDA7XG5cbiAgICB2YXIgZ2V0VUlEID0gZnVuY3Rpb24gZ2V0VUlEKCkge1xuICAgICAgcmV0dXJuIHVpZCsrO1xuICAgIH07XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcCgpIHtcbiAgICAgIC8vIFRoZSBoZWFkZXIgZ3JvdXAgd2UgYXJlIGNyZWF0aW5nXG4gICAgICB2YXIgaGVhZGVyR3JvdXAgPSB7XG4gICAgICAgIGhlYWRlcnM6IFtdXG4gICAgICB9OyAvLyBUaGUgcGFyZW50IGNvbHVtbnMgd2UncmUgZ29pbmcgdG8gc2NhbiBuZXh0XG5cbiAgICAgIHZhciBwYXJlbnRDb2x1bW5zID0gW107XG4gICAgICB2YXIgaGFzUGFyZW50cyA9IHNjYW5Db2x1bW5zLnNvbWUoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQucGFyZW50O1xuICAgICAgfSk7IC8vIFNjYW4gZWFjaCBjb2x1bW4gZm9yIHBhcmVudHNcblxuICAgICAgc2NhbkNvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgIC8vIFdoYXQgaXMgdGhlIGxhdGVzdCAobGFzdCkgcGFyZW50IGNvbHVtbj9cbiAgICAgICAgdmFyIGxhdGVzdFBhcmVudENvbHVtbiA9IFtdLmNvbmNhdChwYXJlbnRDb2x1bW5zKS5yZXZlcnNlKClbMF07XG4gICAgICAgIHZhciBuZXdQYXJlbnQ7XG5cbiAgICAgICAgaWYgKGhhc1BhcmVudHMpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgY29sdW1uIGhhcyBhIHBhcmVudCwgYWRkIGl0IGlmIG5lY2Vzc2FyeVxuICAgICAgICAgIGlmIChjb2x1bW4ucGFyZW50KSB7XG4gICAgICAgICAgICBuZXdQYXJlbnQgPSBfZXh0ZW5kcyh7fSwgY29sdW1uLnBhcmVudCwge1xuICAgICAgICAgICAgICBvcmlnaW5hbElkOiBjb2x1bW4ucGFyZW50LmlkLFxuICAgICAgICAgICAgICBpZDogY29sdW1uLnBhcmVudC5pZCArIFwiX1wiICsgZ2V0VUlEKCksXG4gICAgICAgICAgICAgIGhlYWRlcnM6IFtjb2x1bW5dXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSWYgb3RoZXIgY29sdW1ucyBoYXZlIHBhcmVudHMsIHdlJ2xsIG5lZWQgdG8gYWRkIGEgcGxhY2UgaG9sZGVyIGlmIG5lY2Vzc2FyeVxuICAgICAgICAgICAgdmFyIG9yaWdpbmFsSWQgPSBjb2x1bW4uaWQgKyBcIl9wbGFjZWhvbGRlclwiO1xuICAgICAgICAgICAgbmV3UGFyZW50ID0gZGVjb3JhdGVDb2x1bW4oe1xuICAgICAgICAgICAgICBvcmlnaW5hbElkOiBvcmlnaW5hbElkLFxuICAgICAgICAgICAgICBpZDogY29sdW1uLmlkICsgXCJfcGxhY2Vob2xkZXJfXCIgKyBnZXRVSUQoKSxcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXJPZjogY29sdW1uLFxuICAgICAgICAgICAgICBoZWFkZXJzOiBbY29sdW1uXVxuICAgICAgICAgICAgfSwgZGVmYXVsdENvbHVtbik7XG4gICAgICAgICAgfSAvLyBJZiB0aGUgcmVzdWx0aW5nIHBhcmVudCBjb2x1bW5zIGFyZSB0aGUgc2FtZSwganVzdCBhZGRcbiAgICAgICAgICAvLyB0aGUgY29sdW1uIGFuZCBpbmNyZW1lbnQgdGhlIGhlYWRlciBzcGFuXG5cblxuICAgICAgICAgIGlmIChsYXRlc3RQYXJlbnRDb2x1bW4gJiYgbGF0ZXN0UGFyZW50Q29sdW1uLm9yaWdpbmFsSWQgPT09IG5ld1BhcmVudC5vcmlnaW5hbElkKSB7XG4gICAgICAgICAgICBsYXRlc3RQYXJlbnRDb2x1bW4uaGVhZGVycy5wdXNoKGNvbHVtbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmVudENvbHVtbnMucHVzaChuZXdQYXJlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGhlYWRlckdyb3VwLmhlYWRlcnMucHVzaChjb2x1bW4pO1xuICAgICAgfSk7XG4gICAgICBoZWFkZXJHcm91cHMucHVzaChoZWFkZXJHcm91cCk7IC8vIFN0YXJ0IHNjYW5uaW5nIHRoZSBwYXJlbnQgY29sdW1uc1xuXG4gICAgICBzY2FuQ29sdW1ucyA9IHBhcmVudENvbHVtbnM7XG4gICAgfTtcblxuICAgIHdoaWxlIChzY2FuQ29sdW1ucy5sZW5ndGgpIHtcbiAgICAgIF9sb29wKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhlYWRlckdyb3Vwcy5yZXZlcnNlKCk7XG4gIH1cbiAgdmFyIHBhdGhPYmpDYWNoZSA9IG5ldyBNYXAoKTtcbiAgZnVuY3Rpb24gZ2V0Qnkob2JqLCBwYXRoLCBkZWYpIHtcbiAgICBpZiAoIXBhdGgpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgdmFyIGNhY2hlS2V5ID0gdHlwZW9mIHBhdGggPT09ICdmdW5jdGlvbicgPyBwYXRoIDogSlNPTi5zdHJpbmdpZnkocGF0aCk7XG5cbiAgICB2YXIgcGF0aE9iaiA9IHBhdGhPYmpDYWNoZS5nZXQoY2FjaGVLZXkpIHx8IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwYXRoT2JqID0gbWFrZVBhdGhBcnJheShwYXRoKTtcbiAgICAgIHBhdGhPYmpDYWNoZS5zZXQoY2FjaGVLZXksIHBhdGhPYmopO1xuICAgICAgcmV0dXJuIHBhdGhPYmo7XG4gICAgfSgpO1xuXG4gICAgdmFyIHZhbDtcblxuICAgIHRyeSB7XG4gICAgICB2YWwgPSBwYXRoT2JqLnJlZHVjZShmdW5jdGlvbiAoY3Vyc29yLCBwYXRoUGFydCkge1xuICAgICAgICByZXR1cm4gY3Vyc29yW3BhdGhQYXJ0XTtcbiAgICAgIH0sIG9iaik7XG4gICAgfSBjYXRjaCAoZSkgey8vIGNvbnRpbnVlIHJlZ2FyZGxlc3Mgb2YgZXJyb3JcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIHZhbCAhPT0gJ3VuZGVmaW5lZCcgPyB2YWwgOiBkZWY7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0Rmlyc3REZWZpbmVkKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0eXBlb2YgYXJnc1tpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbaV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGlzRnVuY3Rpb24oYSkge1xuICAgIGlmICh0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGZsYXR0ZW5CeShhcnIsIGtleSkge1xuICAgIHZhciBmbGF0ID0gW107XG5cbiAgICB2YXIgcmVjdXJzZSA9IGZ1bmN0aW9uIHJlY3Vyc2UoYXJyKSB7XG4gICAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICBpZiAoIWRba2V5XSkge1xuICAgICAgICAgIGZsYXQucHVzaChkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWN1cnNlKGRba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZWN1cnNlKGFycik7XG4gICAgcmV0dXJuIGZsYXQ7XG4gIH1cbiAgZnVuY3Rpb24gZXhwYW5kUm93cyhyb3dzLCBfcmVmKSB7XG4gICAgdmFyIG1hbnVhbEV4cGFuZGVkS2V5ID0gX3JlZi5tYW51YWxFeHBhbmRlZEtleSxcbiAgICAgICAgZXhwYW5kZWQgPSBfcmVmLmV4cGFuZGVkLFxuICAgICAgICBfcmVmJGV4cGFuZFN1YlJvd3MgPSBfcmVmLmV4cGFuZFN1YlJvd3MsXG4gICAgICAgIGV4cGFuZFN1YlJvd3MgPSBfcmVmJGV4cGFuZFN1YlJvd3MgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmJGV4cGFuZFN1YlJvd3M7XG4gICAgdmFyIGV4cGFuZGVkUm93cyA9IFtdO1xuXG4gICAgdmFyIGhhbmRsZVJvdyA9IGZ1bmN0aW9uIGhhbmRsZVJvdyhyb3cpIHtcbiAgICAgIHJvdy5pc0V4cGFuZGVkID0gcm93Lm9yaWdpbmFsICYmIHJvdy5vcmlnaW5hbFttYW51YWxFeHBhbmRlZEtleV0gfHwgZXhwYW5kZWRbcm93LmlkXTtcbiAgICAgIHJvdy5jYW5FeHBhbmQgPSByb3cuc3ViUm93cyAmJiAhIXJvdy5zdWJSb3dzLmxlbmd0aDtcbiAgICAgIGV4cGFuZGVkUm93cy5wdXNoKHJvdyk7XG5cbiAgICAgIGlmIChleHBhbmRTdWJSb3dzICYmIHJvdy5zdWJSb3dzICYmIHJvdy5zdWJSb3dzLmxlbmd0aCAmJiByb3cuaXNFeHBhbmRlZCkge1xuICAgICAgICByb3cuc3ViUm93cy5mb3JFYWNoKGhhbmRsZVJvdyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJvd3MuZm9yRWFjaChoYW5kbGVSb3cpO1xuICAgIHJldHVybiBleHBhbmRlZFJvd3M7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0RmlsdGVyTWV0aG9kKGZpbHRlciwgdXNlckZpbHRlclR5cGVzLCBmaWx0ZXJUeXBlcykge1xuICAgIHJldHVybiBpc0Z1bmN0aW9uKGZpbHRlcikgfHwgdXNlckZpbHRlclR5cGVzW2ZpbHRlcl0gfHwgZmlsdGVyVHlwZXNbZmlsdGVyXSB8fCBmaWx0ZXJUeXBlcy50ZXh0O1xuICB9XG4gIGZ1bmN0aW9uIHNob3VsZEF1dG9SZW1vdmVGaWx0ZXIoYXV0b1JlbW92ZSwgdmFsdWUsIGNvbHVtbikge1xuICAgIHJldHVybiBhdXRvUmVtb3ZlID8gYXV0b1JlbW92ZSh2YWx1ZSwgY29sdW1uKSA6IHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG4gIH1cbiAgZnVuY3Rpb24gdW5wcmVwYXJlZEFjY2Vzc1dhcm5pbmcoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdSZWFjdC1UYWJsZTogWW91IGhhdmUgbm90IGNhbGxlZCBwcmVwYXJlUm93KHJvdykgb25lIG9yIG1vcmUgcm93cyB5b3UgYXJlIGF0dGVtcHRpbmcgdG8gcmVuZGVyLicpO1xuICB9XG4gIHZhciBwYXNzaXZlU3VwcG9ydGVkID0gbnVsbDtcbiAgZnVuY3Rpb24gcGFzc2l2ZUV2ZW50U3VwcG9ydGVkKCkge1xuICAgIC8vIG1lbW9pemUgc3VwcG9ydCB0byBhdm9pZCBhZGRpbmcgbXVsdGlwbGUgdGVzdCBldmVudHNcbiAgICBpZiAodHlwZW9mIHBhc3NpdmVTdXBwb3J0ZWQgPT09ICdib29sZWFuJykgcmV0dXJuIHBhc3NpdmVTdXBwb3J0ZWQ7XG4gICAgdmFyIHN1cHBvcnRlZCA9IGZhbHNlO1xuXG4gICAgdHJ5IHtcbiAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICBnZXQgcGFzc2l2ZSgpIHtcbiAgICAgICAgICBzdXBwb3J0ZWQgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICB9O1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBudWxsLCBvcHRpb25zKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwgb3B0aW9ucyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwYXNzaXZlU3VwcG9ydGVkID0gc3VwcG9ydGVkO1xuICAgIHJldHVybiBwYXNzaXZlU3VwcG9ydGVkO1xuICB9IC8vXG5cbiAgdmFyIHJlT3BlbkJyYWNrZXQgPSAvXFxbL2c7XG4gIHZhciByZUNsb3NlQnJhY2tldCA9IC9cXF0vZztcblxuICBmdW5jdGlvbiBtYWtlUGF0aEFycmF5KG9iaikge1xuICAgIHJldHVybiBmbGF0dGVuRGVlcChvYmopIC8vIHJlbW92ZSBhbGwgcGVyaW9kcyBpbiBwYXJ0c1xuICAgIC5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiBTdHJpbmcoZCkucmVwbGFjZSgnLicsICdfJyk7XG4gICAgfSkgLy8gam9pbiBwYXJ0cyB1c2luZyBwZXJpb2RcbiAgICAuam9pbignLicpIC8vIHJlcGxhY2UgYnJhY2tldHMgd2l0aCBwZXJpb2RzXG4gICAgLnJlcGxhY2UocmVPcGVuQnJhY2tldCwgJy4nKS5yZXBsYWNlKHJlQ2xvc2VCcmFja2V0LCAnJykgLy8gc3BsaXQgaXQgYmFjayBvdXQgb24gcGVyaW9kc1xuICAgIC5zcGxpdCgnLicpO1xuICB9XG5cbiAgZnVuY3Rpb24gZmxhdHRlbkRlZXAoYXJyLCBuZXdBcnIpIHtcbiAgICBpZiAobmV3QXJyID09PSB2b2lkIDApIHtcbiAgICAgIG5ld0FyciA9IFtdO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICBuZXdBcnIucHVzaChhcnIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBmbGF0dGVuRGVlcChhcnJbaV0sIG5ld0Fycik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0FycjtcbiAgfVxuXG4gIHZhciBkZWZhdWx0R2V0VGFibGVQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRUYWJsZVByb3BzKHByb3BzKSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgIHJvbGU6ICd0YWJsZSdcbiAgICB9LCBwcm9wcyk7XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRHZXRUYWJsZUJvZHlQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRUYWJsZUJvZHlQcm9wcyhwcm9wcykge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICByb2xlOiAncm93Z3JvdXAnXG4gICAgfSwgcHJvcHMpO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0R2V0SGVhZGVyUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0SGVhZGVyUHJvcHMocHJvcHMsIF9yZWYpIHtcbiAgICB2YXIgY29sdW1uID0gX3JlZi5jb2x1bW47XG4gICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgIGtleTogXCJoZWFkZXJfXCIgKyBjb2x1bW4uaWQsXG4gICAgICBjb2xTcGFuOiBjb2x1bW4udG90YWxWaXNpYmxlSGVhZGVyQ291bnQsXG4gICAgICByb2xlOiAnY29sdW1uaGVhZGVyJ1xuICAgIH0sIHByb3BzKTtcbiAgfTtcblxuICB2YXIgZGVmYXVsdEdldEZvb3RlclByb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldEZvb3RlclByb3BzKHByb3BzLCBfcmVmMikge1xuICAgIHZhciBjb2x1bW4gPSBfcmVmMi5jb2x1bW47XG4gICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgIGtleTogXCJmb290ZXJfXCIgKyBjb2x1bW4uaWQsXG4gICAgICBjb2xTcGFuOiBjb2x1bW4udG90YWxWaXNpYmxlSGVhZGVyQ291bnRcbiAgICB9LCBwcm9wcyk7XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRHZXRIZWFkZXJHcm91cFByb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldEhlYWRlckdyb3VwUHJvcHMocHJvcHMsIF9yZWYzKSB7XG4gICAgdmFyIGluZGV4ID0gX3JlZjMuaW5kZXg7XG4gICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgIGtleTogXCJoZWFkZXJHcm91cF9cIiArIGluZGV4LFxuICAgICAgcm9sZTogJ3JvdydcbiAgICB9LCBwcm9wcyk7XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRHZXRGb290ZXJHcm91cFByb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldEZvb3Rlckdyb3VwUHJvcHMocHJvcHMsIF9yZWY0KSB7XG4gICAgdmFyIGluZGV4ID0gX3JlZjQuaW5kZXg7XG4gICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgIGtleTogXCJmb290ZXJHcm91cF9cIiArIGluZGV4XG4gICAgfSwgcHJvcHMpO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0R2V0Um93UHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0Um93UHJvcHMocHJvcHMsIF9yZWY1KSB7XG4gICAgdmFyIHJvdyA9IF9yZWY1LnJvdztcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAga2V5OiBcInJvd19cIiArIHJvdy5pZCxcbiAgICAgIHJvbGU6ICdyb3cnXG4gICAgfSwgcHJvcHMpO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0R2V0Q2VsbFByb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldENlbGxQcm9wcyhwcm9wcywgX3JlZjYpIHtcbiAgICB2YXIgY2VsbCA9IF9yZWY2LmNlbGw7XG4gICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgIGtleTogXCJjZWxsX1wiICsgY2VsbC5yb3cuaWQgKyBcIl9cIiArIGNlbGwuY29sdW1uLmlkLFxuICAgICAgcm9sZTogJ2NlbGwnXG4gICAgfSwgcHJvcHMpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VEZWZhdWx0UGx1Z2luSG9va3MoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZU9wdGlvbnM6IFtdLFxuICAgICAgc3RhdGVSZWR1Y2VyczogW10sXG4gICAgICB1c2VDb250cm9sbGVkU3RhdGU6IFtdLFxuICAgICAgY29sdW1uczogW10sXG4gICAgICBjb2x1bW5zRGVwczogW10sXG4gICAgICBhbGxDb2x1bW5zOiBbXSxcbiAgICAgIGFsbENvbHVtbnNEZXBzOiBbXSxcbiAgICAgIGFjY2Vzc1ZhbHVlOiBbXSxcbiAgICAgIG1hdGVyaWFsaXplZENvbHVtbnM6IFtdLFxuICAgICAgbWF0ZXJpYWxpemVkQ29sdW1uc0RlcHM6IFtdLFxuICAgICAgdXNlSW5zdGFuY2VBZnRlckRhdGE6IFtdLFxuICAgICAgdmlzaWJsZUNvbHVtbnM6IFtdLFxuICAgICAgdmlzaWJsZUNvbHVtbnNEZXBzOiBbXSxcbiAgICAgIGhlYWRlckdyb3VwczogW10sXG4gICAgICBoZWFkZXJHcm91cHNEZXBzOiBbXSxcbiAgICAgIHVzZUluc3RhbmNlQmVmb3JlRGltZW5zaW9uczogW10sXG4gICAgICB1c2VJbnN0YW5jZTogW10sXG4gICAgICBwcmVwYXJlUm93OiBbXSxcbiAgICAgIGdldFRhYmxlUHJvcHM6IFtkZWZhdWx0R2V0VGFibGVQcm9wc10sXG4gICAgICBnZXRUYWJsZUJvZHlQcm9wczogW2RlZmF1bHRHZXRUYWJsZUJvZHlQcm9wc10sXG4gICAgICBnZXRIZWFkZXJHcm91cFByb3BzOiBbZGVmYXVsdEdldEhlYWRlckdyb3VwUHJvcHNdLFxuICAgICAgZ2V0Rm9vdGVyR3JvdXBQcm9wczogW2RlZmF1bHRHZXRGb290ZXJHcm91cFByb3BzXSxcbiAgICAgIGdldEhlYWRlclByb3BzOiBbZGVmYXVsdEdldEhlYWRlclByb3BzXSxcbiAgICAgIGdldEZvb3RlclByb3BzOiBbZGVmYXVsdEdldEZvb3RlclByb3BzXSxcbiAgICAgIGdldFJvd1Byb3BzOiBbZGVmYXVsdEdldFJvd1Byb3BzXSxcbiAgICAgIGdldENlbGxQcm9wczogW2RlZmF1bHRHZXRDZWxsUHJvcHNdLFxuICAgICAgdXNlRmluYWxJbnN0YW5jZTogW11cbiAgICB9O1xuICB9XG5cbiAgYWN0aW9ucy5yZXNldEhpZGRlbkNvbHVtbnMgPSAncmVzZXRIaWRkZW5Db2x1bW5zJztcbiAgYWN0aW9ucy50b2dnbGVIaWRlQ29sdW1uID0gJ3RvZ2dsZUhpZGVDb2x1bW4nO1xuICBhY3Rpb25zLnNldEhpZGRlbkNvbHVtbnMgPSAnc2V0SGlkZGVuQ29sdW1ucyc7XG4gIGFjdGlvbnMudG9nZ2xlSGlkZUFsbENvbHVtbnMgPSAndG9nZ2xlSGlkZUFsbENvbHVtbnMnO1xuICB2YXIgdXNlQ29sdW1uVmlzaWJpbGl0eSA9IGZ1bmN0aW9uIHVzZUNvbHVtblZpc2liaWxpdHkoaG9va3MpIHtcbiAgICBob29rcy5nZXRUb2dnbGVIaWRkZW5Qcm9wcyA9IFtkZWZhdWx0R2V0VG9nZ2xlSGlkZGVuUHJvcHNdO1xuICAgIGhvb2tzLmdldFRvZ2dsZUhpZGVBbGxDb2x1bW5zUHJvcHMgPSBbZGVmYXVsdEdldFRvZ2dsZUhpZGVBbGxDb2x1bW5zUHJvcHNdO1xuICAgIGhvb2tzLnN0YXRlUmVkdWNlcnMucHVzaChyZWR1Y2VyKTtcbiAgICBob29rcy51c2VJbnN0YW5jZUJlZm9yZURpbWVuc2lvbnMucHVzaCh1c2VJbnN0YW5jZUJlZm9yZURpbWVuc2lvbnMpO1xuICAgIGhvb2tzLmhlYWRlckdyb3Vwc0RlcHMucHVzaChmdW5jdGlvbiAoZGVwcywgX3JlZikge1xuICAgICAgdmFyIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZTtcbiAgICAgIHJldHVybiBbXS5jb25jYXQoZGVwcywgW2luc3RhbmNlLnN0YXRlLmhpZGRlbkNvbHVtbnNdKTtcbiAgICB9KTtcbiAgICBob29rcy51c2VJbnN0YW5jZS5wdXNoKHVzZUluc3RhbmNlKTtcbiAgfTtcbiAgdXNlQ29sdW1uVmlzaWJpbGl0eS5wbHVnaW5OYW1lID0gJ3VzZUNvbHVtblZpc2liaWxpdHknO1xuXG4gIHZhciBkZWZhdWx0R2V0VG9nZ2xlSGlkZGVuUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0VG9nZ2xlSGlkZGVuUHJvcHMocHJvcHMsIF9yZWYyKSB7XG4gICAgdmFyIGNvbHVtbiA9IF9yZWYyLmNvbHVtbjtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoZSkge1xuICAgICAgICBjb2x1bW4udG9nZ2xlSGlkZGVuKCFlLnRhcmdldC5jaGVja2VkKTtcbiAgICAgIH0sXG4gICAgICBzdHlsZToge1xuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgICAgfSxcbiAgICAgIGNoZWNrZWQ6IGNvbHVtbi5pc1Zpc2libGUsXG4gICAgICB0aXRsZTogJ1RvZ2dsZSBDb2x1bW4gVmlzaWJsZSdcbiAgICB9XTtcbiAgfTtcblxuICB2YXIgZGVmYXVsdEdldFRvZ2dsZUhpZGVBbGxDb2x1bW5zUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0VG9nZ2xlSGlkZUFsbENvbHVtbnNQcm9wcyhwcm9wcywgX3JlZjMpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmMy5pbnN0YW5jZTtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoZSkge1xuICAgICAgICBpbnN0YW5jZS50b2dnbGVIaWRlQWxsQ29sdW1ucyghZS50YXJnZXQuY2hlY2tlZCk7XG4gICAgICB9LFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgIH0sXG4gICAgICBjaGVja2VkOiAhaW5zdGFuY2UuYWxsQ29sdW1uc0hpZGRlbiAmJiAhaW5zdGFuY2Uuc3RhdGUuaGlkZGVuQ29sdW1ucy5sZW5ndGgsXG4gICAgICB0aXRsZTogJ1RvZ2dsZSBBbGwgQ29sdW1ucyBIaWRkZW4nLFxuICAgICAgaW5kZXRlcm1pbmF0ZTogIWluc3RhbmNlLmFsbENvbHVtbnNIaWRkZW4gJiYgaW5zdGFuY2Uuc3RhdGUuaGlkZGVuQ29sdW1ucy5sZW5ndGhcbiAgICB9XTtcbiAgfTtcblxuICBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24sIHByZXZpb3VzU3RhdGUsIGluc3RhbmNlKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmluaXQpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIGhpZGRlbkNvbHVtbnM6IFtdXG4gICAgICB9LCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnJlc2V0SGlkZGVuQ29sdW1ucykge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBoaWRkZW5Db2x1bW5zOiBpbnN0YW5jZS5pbml0aWFsU3RhdGUuaGlkZGVuQ29sdW1ucyB8fCBbXVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnRvZ2dsZUhpZGVDb2x1bW4pIHtcbiAgICAgIHZhciBzaG91bGQgPSB0eXBlb2YgYWN0aW9uLnZhbHVlICE9PSAndW5kZWZpbmVkJyA/IGFjdGlvbi52YWx1ZSA6ICFzdGF0ZS5oaWRkZW5Db2x1bW5zLmluY2x1ZGVzKGFjdGlvbi5jb2x1bW5JZCk7XG4gICAgICB2YXIgaGlkZGVuQ29sdW1ucyA9IHNob3VsZCA/IFtdLmNvbmNhdChzdGF0ZS5oaWRkZW5Db2x1bW5zLCBbYWN0aW9uLmNvbHVtbklkXSkgOiBzdGF0ZS5oaWRkZW5Db2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZCAhPT0gYWN0aW9uLmNvbHVtbklkO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGhpZGRlbkNvbHVtbnM6IGhpZGRlbkNvbHVtbnNcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5zZXRIaWRkZW5Db2x1bW5zKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGhpZGRlbkNvbHVtbnM6IGZ1bmN0aW9uYWxVcGRhdGUoYWN0aW9uLnZhbHVlLCBzdGF0ZS5oaWRkZW5Db2x1bW5zKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnRvZ2dsZUhpZGVBbGxDb2x1bW5zKSB7XG4gICAgICB2YXIgc2hvdWxkQWxsID0gdHlwZW9mIGFjdGlvbi52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyBhY3Rpb24udmFsdWUgOiAhc3RhdGUuaGlkZGVuQ29sdW1ucy5sZW5ndGg7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGhpZGRlbkNvbHVtbnM6IHNob3VsZEFsbCA/IGluc3RhbmNlLmFsbENvbHVtbnMubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIGQuaWQ7XG4gICAgICAgIH0pIDogW11cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZUluc3RhbmNlQmVmb3JlRGltZW5zaW9ucyhpbnN0YW5jZSkge1xuICAgIHZhciBoZWFkZXJzID0gaW5zdGFuY2UuaGVhZGVycyxcbiAgICAgICAgaGlkZGVuQ29sdW1ucyA9IGluc3RhbmNlLnN0YXRlLmhpZGRlbkNvbHVtbnM7XG4gICAgdmFyIGlzTW91bnRlZFJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG5cbiAgICBpZiAoIWlzTW91bnRlZFJlZi5jdXJyZW50KSA7XG5cbiAgICB2YXIgaGFuZGxlQ29sdW1uID0gZnVuY3Rpb24gaGFuZGxlQ29sdW1uKGNvbHVtbiwgcGFyZW50VmlzaWJsZSkge1xuICAgICAgY29sdW1uLmlzVmlzaWJsZSA9IHBhcmVudFZpc2libGUgJiYgIWhpZGRlbkNvbHVtbnMuaW5jbHVkZXMoY29sdW1uLmlkKTtcbiAgICAgIHZhciB0b3RhbFZpc2libGVIZWFkZXJDb3VudCA9IDA7XG5cbiAgICAgIGlmIChjb2x1bW4uaGVhZGVycyAmJiBjb2x1bW4uaGVhZGVycy5sZW5ndGgpIHtcbiAgICAgICAgY29sdW1uLmhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3ViQ29sdW1uKSB7XG4gICAgICAgICAgcmV0dXJuIHRvdGFsVmlzaWJsZUhlYWRlckNvdW50ICs9IGhhbmRsZUNvbHVtbihzdWJDb2x1bW4sIGNvbHVtbi5pc1Zpc2libGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvdGFsVmlzaWJsZUhlYWRlckNvdW50ID0gY29sdW1uLmlzVmlzaWJsZSA/IDEgOiAwO1xuICAgICAgfVxuXG4gICAgICBjb2x1bW4udG90YWxWaXNpYmxlSGVhZGVyQ291bnQgPSB0b3RhbFZpc2libGVIZWFkZXJDb3VudDtcbiAgICAgIHJldHVybiB0b3RhbFZpc2libGVIZWFkZXJDb3VudDtcbiAgICB9O1xuXG4gICAgdmFyIHRvdGFsVmlzaWJsZUhlYWRlckNvdW50ID0gMDtcbiAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24gKHN1YkhlYWRlcikge1xuICAgICAgcmV0dXJuIHRvdGFsVmlzaWJsZUhlYWRlckNvdW50ICs9IGhhbmRsZUNvbHVtbihzdWJIZWFkZXIsIHRydWUpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdXNlSW5zdGFuY2UoaW5zdGFuY2UpIHtcbiAgICB2YXIgY29sdW1ucyA9IGluc3RhbmNlLmNvbHVtbnMsXG4gICAgICAgIGZsYXRIZWFkZXJzID0gaW5zdGFuY2UuZmxhdEhlYWRlcnMsXG4gICAgICAgIGRpc3BhdGNoID0gaW5zdGFuY2UuZGlzcGF0Y2gsXG4gICAgICAgIGFsbENvbHVtbnMgPSBpbnN0YW5jZS5hbGxDb2x1bW5zLFxuICAgICAgICBnZXRIb29rcyA9IGluc3RhbmNlLmdldEhvb2tzLFxuICAgICAgICBoaWRkZW5Db2x1bW5zID0gaW5zdGFuY2Uuc3RhdGUuaGlkZGVuQ29sdW1ucyxcbiAgICAgICAgX2luc3RhbmNlJGF1dG9SZXNldEhpID0gaW5zdGFuY2UuYXV0b1Jlc2V0SGlkZGVuQ29sdW1ucyxcbiAgICAgICAgYXV0b1Jlc2V0SGlkZGVuQ29sdW1ucyA9IF9pbnN0YW5jZSRhdXRvUmVzZXRIaSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRhdXRvUmVzZXRIaTtcbiAgICB2YXIgZ2V0SW5zdGFuY2UgPSB1c2VHZXRMYXRlc3QoaW5zdGFuY2UpO1xuICAgIHZhciBhbGxDb2x1bW5zSGlkZGVuID0gYWxsQ29sdW1ucy5sZW5ndGggPT09IGhpZGRlbkNvbHVtbnMubGVuZ3RoO1xuICAgIHZhciB0b2dnbGVIaWRlQ29sdW1uID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGNvbHVtbklkLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy50b2dnbGVIaWRlQ29sdW1uLFxuICAgICAgICBjb2x1bW5JZDogY29sdW1uSWQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgdmFyIHNldEhpZGRlbkNvbHVtbnMgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMuc2V0SGlkZGVuQ29sdW1ucyxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICB2YXIgdG9nZ2xlSGlkZUFsbENvbHVtbnMgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMudG9nZ2xlSGlkZUFsbENvbHVtbnMsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgdmFyIGdldFRvZ2dsZUhpZGVBbGxDb2x1bW5zUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldFRvZ2dsZUhpZGVBbGxDb2x1bW5zUHJvcHMsIHtcbiAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpXG4gICAgfSk7XG4gICAgZmxhdEhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICBjb2x1bW4udG9nZ2xlSGlkZGVuID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb25zLnRvZ2dsZUhpZGVDb2x1bW4sXG4gICAgICAgICAgY29sdW1uSWQ6IGNvbHVtbi5pZCxcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBjb2x1bW4uZ2V0VG9nZ2xlSGlkZGVuUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldFRvZ2dsZUhpZGRlblByb3BzLCB7XG4gICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpLFxuICAgICAgICBjb2x1bW46IGNvbHVtblxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdmFyIGdldEF1dG9SZXNldEhpZGRlbkNvbHVtbnMgPSB1c2VHZXRMYXRlc3QoYXV0b1Jlc2V0SGlkZGVuQ29sdW1ucyk7XG4gICAgdXNlTW91bnRlZExheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZ2V0QXV0b1Jlc2V0SGlkZGVuQ29sdW1ucygpKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb25zLnJlc2V0SGlkZGVuQ29sdW1uc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBbZGlzcGF0Y2gsIGNvbHVtbnNdKTtcbiAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCB7XG4gICAgICBhbGxDb2x1bW5zSGlkZGVuOiBhbGxDb2x1bW5zSGlkZGVuLFxuICAgICAgdG9nZ2xlSGlkZUNvbHVtbjogdG9nZ2xlSGlkZUNvbHVtbixcbiAgICAgIHNldEhpZGRlbkNvbHVtbnM6IHNldEhpZGRlbkNvbHVtbnMsXG4gICAgICB0b2dnbGVIaWRlQWxsQ29sdW1uczogdG9nZ2xlSGlkZUFsbENvbHVtbnMsXG4gICAgICBnZXRUb2dnbGVIaWRlQWxsQ29sdW1uc1Byb3BzOiBnZXRUb2dnbGVIaWRlQWxsQ29sdW1uc1Byb3BzXG4gICAgfSk7XG4gIH1cblxuICB2YXIgZGVmYXVsdEluaXRpYWxTdGF0ZSA9IHt9O1xuICB2YXIgZGVmYXVsdENvbHVtbkluc3RhbmNlID0ge307XG5cbiAgdmFyIGRlZmF1bHRSZWR1Y2VyID0gZnVuY3Rpb24gZGVmYXVsdFJlZHVjZXIoc3RhdGUsIGFjdGlvbiwgcHJldlN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0R2V0U3ViUm93cyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRTdWJSb3dzKHJvdywgaW5kZXgpIHtcbiAgICByZXR1cm4gcm93LnN1YlJvd3MgfHwgW107XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRHZXRSb3dJZCA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRSb3dJZChyb3csIGluZGV4LCBwYXJlbnQpIHtcbiAgICByZXR1cm4gXCJcIiArIChwYXJlbnQgPyBbcGFyZW50LmlkLCBpbmRleF0uam9pbignLicpIDogaW5kZXgpO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0VXNlQ29udHJvbGxlZFN0YXRlID0gZnVuY3Rpb24gZGVmYXVsdFVzZUNvbnRyb2xsZWRTdGF0ZShkKSB7XG4gICAgcmV0dXJuIGQ7XG4gIH07XG5cbiAgZnVuY3Rpb24gYXBwbHlEZWZhdWx0cyhwcm9wcykge1xuICAgIHZhciBfcHJvcHMkaW5pdGlhbFN0YXRlID0gcHJvcHMuaW5pdGlhbFN0YXRlLFxuICAgICAgICBpbml0aWFsU3RhdGUgPSBfcHJvcHMkaW5pdGlhbFN0YXRlID09PSB2b2lkIDAgPyBkZWZhdWx0SW5pdGlhbFN0YXRlIDogX3Byb3BzJGluaXRpYWxTdGF0ZSxcbiAgICAgICAgX3Byb3BzJGRlZmF1bHRDb2x1bW4gPSBwcm9wcy5kZWZhdWx0Q29sdW1uLFxuICAgICAgICBkZWZhdWx0Q29sdW1uID0gX3Byb3BzJGRlZmF1bHRDb2x1bW4gPT09IHZvaWQgMCA/IGRlZmF1bHRDb2x1bW5JbnN0YW5jZSA6IF9wcm9wcyRkZWZhdWx0Q29sdW1uLFxuICAgICAgICBfcHJvcHMkZ2V0U3ViUm93cyA9IHByb3BzLmdldFN1YlJvd3MsXG4gICAgICAgIGdldFN1YlJvd3MgPSBfcHJvcHMkZ2V0U3ViUm93cyA9PT0gdm9pZCAwID8gZGVmYXVsdEdldFN1YlJvd3MgOiBfcHJvcHMkZ2V0U3ViUm93cyxcbiAgICAgICAgX3Byb3BzJGdldFJvd0lkID0gcHJvcHMuZ2V0Um93SWQsXG4gICAgICAgIGdldFJvd0lkID0gX3Byb3BzJGdldFJvd0lkID09PSB2b2lkIDAgPyBkZWZhdWx0R2V0Um93SWQgOiBfcHJvcHMkZ2V0Um93SWQsXG4gICAgICAgIF9wcm9wcyRzdGF0ZVJlZHVjZXIgPSBwcm9wcy5zdGF0ZVJlZHVjZXIsXG4gICAgICAgIHN0YXRlUmVkdWNlciA9IF9wcm9wcyRzdGF0ZVJlZHVjZXIgPT09IHZvaWQgMCA/IGRlZmF1bHRSZWR1Y2VyIDogX3Byb3BzJHN0YXRlUmVkdWNlcixcbiAgICAgICAgX3Byb3BzJHVzZUNvbnRyb2xsZWRTID0gcHJvcHMudXNlQ29udHJvbGxlZFN0YXRlLFxuICAgICAgICB1c2VDb250cm9sbGVkU3RhdGUgPSBfcHJvcHMkdXNlQ29udHJvbGxlZFMgPT09IHZvaWQgMCA/IGRlZmF1bHRVc2VDb250cm9sbGVkU3RhdGUgOiBfcHJvcHMkdXNlQ29udHJvbGxlZFMsXG4gICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1wiaW5pdGlhbFN0YXRlXCIsIFwiZGVmYXVsdENvbHVtblwiLCBcImdldFN1YlJvd3NcIiwgXCJnZXRSb3dJZFwiLCBcInN0YXRlUmVkdWNlclwiLCBcInVzZUNvbnRyb2xsZWRTdGF0ZVwiXSk7XG5cbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICAgIGluaXRpYWxTdGF0ZTogaW5pdGlhbFN0YXRlLFxuICAgICAgZGVmYXVsdENvbHVtbjogZGVmYXVsdENvbHVtbixcbiAgICAgIGdldFN1YlJvd3M6IGdldFN1YlJvd3MsXG4gICAgICBnZXRSb3dJZDogZ2V0Um93SWQsXG4gICAgICBzdGF0ZVJlZHVjZXI6IHN0YXRlUmVkdWNlcixcbiAgICAgIHVzZUNvbnRyb2xsZWRTdGF0ZTogdXNlQ29udHJvbGxlZFN0YXRlXG4gICAgfSk7XG4gIH1cblxuICB2YXIgdXNlVGFibGUgPSBmdW5jdGlvbiB1c2VUYWJsZShwcm9wcykge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwbHVnaW5zID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIHBsdWdpbnNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IGRlZmF1bHQgcHJvcHNcbiAgICBwcm9wcyA9IGFwcGx5RGVmYXVsdHMocHJvcHMpOyAvLyBBZGQgY29yZSBwbHVnaW5zXG5cbiAgICBwbHVnaW5zID0gW3VzZUNvbHVtblZpc2liaWxpdHldLmNvbmNhdChwbHVnaW5zKTsgLy8gQ3JlYXRlIHRoZSB0YWJsZSBpbnN0YW5jZVxuXG4gICAgdmFyIGluc3RhbmNlUmVmID0gUmVhY3QudXNlUmVmKHt9KTsgLy8gQ3JlYXRlIGEgZ2V0dGVyIGZvciB0aGUgaW5zdGFuY2UgKGhlbHBzIGF2b2lkIGEgbG90IG9mIHBvdGVudGlhbCBtZW1vcnkgbGVha3MpXG5cbiAgICB2YXIgZ2V0SW5zdGFuY2UgPSB1c2VHZXRMYXRlc3QoaW5zdGFuY2VSZWYuY3VycmVudCk7IC8vIEFzc2lnbiB0aGUgcHJvcHMsIHBsdWdpbnMgYW5kIGhvb2tzIHRvIHRoZSBpbnN0YW5jZVxuXG4gICAgT2JqZWN0LmFzc2lnbihnZXRJbnN0YW5jZSgpLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIHBsdWdpbnM6IHBsdWdpbnMsXG4gICAgICBob29rczogbWFrZURlZmF1bHRQbHVnaW5Ib29rcygpXG4gICAgfSkpOyAvLyBBbGxvdyBwbHVnaW5zIHRvIHJlZ2lzdGVyIGhvb2tzIGFzIGVhcmx5IGFzIHBvc3NpYmxlXG5cbiAgICBwbHVnaW5zLmZpbHRlcihCb29sZWFuKS5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgIHBsdWdpbihnZXRJbnN0YW5jZSgpLmhvb2tzKTtcbiAgICB9KTsgLy8gQ29uc3VtZSBhbGwgaG9va3MgYW5kIG1ha2UgYSBnZXR0ZXIgZm9yIHRoZW1cblxuICAgIHZhciBnZXRIb29rcyA9IHVzZUdldExhdGVzdChnZXRJbnN0YW5jZSgpLmhvb2tzKTtcbiAgICBnZXRJbnN0YW5jZSgpLmdldEhvb2tzID0gZ2V0SG9va3M7XG4gICAgZGVsZXRlIGdldEluc3RhbmNlKCkuaG9va3M7IC8vIEFsbG93IHVzZU9wdGlvbnMgaG9va3MgdG8gbW9kaWZ5IHRoZSBvcHRpb25zIGNvbWluZyBpbnRvIHRoZSB0YWJsZVxuXG4gICAgT2JqZWN0LmFzc2lnbihnZXRJbnN0YW5jZSgpLCByZWR1Y2VIb29rcyhnZXRIb29rcygpLnVzZU9wdGlvbnMsIGFwcGx5RGVmYXVsdHMocHJvcHMpKSk7XG5cbiAgICB2YXIgX2dldEluc3RhbmNlID0gZ2V0SW5zdGFuY2UoKSxcbiAgICAgICAgZGF0YSA9IF9nZXRJbnN0YW5jZS5kYXRhLFxuICAgICAgICB1c2VyQ29sdW1ucyA9IF9nZXRJbnN0YW5jZS5jb2x1bW5zLFxuICAgICAgICBpbml0aWFsU3RhdGUgPSBfZ2V0SW5zdGFuY2UuaW5pdGlhbFN0YXRlLFxuICAgICAgICBkZWZhdWx0Q29sdW1uID0gX2dldEluc3RhbmNlLmRlZmF1bHRDb2x1bW4sXG4gICAgICAgIGdldFN1YlJvd3MgPSBfZ2V0SW5zdGFuY2UuZ2V0U3ViUm93cyxcbiAgICAgICAgZ2V0Um93SWQgPSBfZ2V0SW5zdGFuY2UuZ2V0Um93SWQsXG4gICAgICAgIHN0YXRlUmVkdWNlciA9IF9nZXRJbnN0YW5jZS5zdGF0ZVJlZHVjZXIsXG4gICAgICAgIHVzZUNvbnRyb2xsZWRTdGF0ZSA9IF9nZXRJbnN0YW5jZS51c2VDb250cm9sbGVkU3RhdGU7IC8vIFNldHVwIHVzZXIgcmVkdWNlciByZWZcblxuXG4gICAgdmFyIGdldFN0YXRlUmVkdWNlciA9IHVzZUdldExhdGVzdChzdGF0ZVJlZHVjZXIpOyAvLyBCdWlsZCB0aGUgcmVkdWNlclxuXG4gICAgdmFyIHJlZHVjZXIgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgICAgLy8gRGV0ZWN0IGludmFsaWQgYWN0aW9uc1xuICAgICAgaWYgKCFhY3Rpb24udHlwZSkge1xuICAgICAgICBjb25zb2xlLmluZm8oe1xuICAgICAgICAgIGFjdGlvbjogYWN0aW9uXG4gICAgICAgIH0pO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gQWN0aW9uIPCfkYYnKTtcbiAgICAgIH0gLy8gUmVkdWNlIHRoZSBzdGF0ZSBmcm9tIGFsbCBwbHVnaW4gcmVkdWNlcnNcblxuXG4gICAgICByZXR1cm4gW10uY29uY2F0KGdldEhvb2tzKCkuc3RhdGVSZWR1Y2VycywgQXJyYXkuaXNBcnJheShnZXRTdGF0ZVJlZHVjZXIoKSkgPyBnZXRTdGF0ZVJlZHVjZXIoKSA6IFtnZXRTdGF0ZVJlZHVjZXIoKV0pLnJlZHVjZShmdW5jdGlvbiAocywgaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gaGFuZGxlcihzLCBhY3Rpb24sIHN0YXRlLCBnZXRJbnN0YW5jZSgpKSB8fCBzO1xuICAgICAgfSwgc3RhdGUpO1xuICAgIH0sIFtnZXRIb29rcywgZ2V0U3RhdGVSZWR1Y2VyLCBnZXRJbnN0YW5jZV0pOyAvLyBTdGFydCB0aGUgcmVkdWNlclxuXG4gICAgdmFyIF9SZWFjdCR1c2VSZWR1Y2VyID0gUmVhY3QudXNlUmVkdWNlcihyZWR1Y2VyLCB1bmRlZmluZWQsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZWR1Y2VyKGluaXRpYWxTdGF0ZSwge1xuICAgICAgICB0eXBlOiBhY3Rpb25zLmluaXRcbiAgICAgIH0pO1xuICAgIH0pLFxuICAgICAgICByZWR1Y2VyU3RhdGUgPSBfUmVhY3QkdXNlUmVkdWNlclswXSxcbiAgICAgICAgZGlzcGF0Y2ggPSBfUmVhY3QkdXNlUmVkdWNlclsxXTsgLy8gQWxsb3cgdGhlIHVzZXIgdG8gY29udHJvbCB0aGUgZmluYWwgc3RhdGUgd2l0aCBob29rc1xuXG5cbiAgICB2YXIgc3RhdGUgPSByZWR1Y2VIb29rcyhbXS5jb25jYXQoZ2V0SG9va3MoKS51c2VDb250cm9sbGVkU3RhdGUsIFt1c2VDb250cm9sbGVkU3RhdGVdKSwgcmVkdWNlclN0YXRlLCB7XG4gICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKVxuICAgIH0pO1xuICAgIE9iamVjdC5hc3NpZ24oZ2V0SW5zdGFuY2UoKSwge1xuICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgZGlzcGF0Y2g6IGRpc3BhdGNoXG4gICAgfSk7IC8vIERlY29yYXRlIEFsbCB0aGUgY29sdW1uc1xuXG4gICAgdmFyIGNvbHVtbnMgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBsaW5rQ29sdW1uU3RydWN0dXJlKHJlZHVjZUhvb2tzKGdldEhvb2tzKCkuY29sdW1ucywgdXNlckNvbHVtbnMsIHtcbiAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICAgIH0pKTtcbiAgICB9LCBbZ2V0SG9va3MsIGdldEluc3RhbmNlLCB1c2VyQ29sdW1uc10uY29uY2F0KHJlZHVjZUhvb2tzKGdldEhvb2tzKCkuY29sdW1uc0RlcHMsIFtdLCB7XG4gICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKVxuICAgIH0pKSk7XG4gICAgZ2V0SW5zdGFuY2UoKS5jb2x1bW5zID0gY29sdW1uczsgLy8gR2V0IHRoZSBmbGF0IGxpc3Qgb2YgYWxsIGNvbHVtbnMgYW5kIGFsbG93IGhvb2tzIHRvIGRlY29yYXRlXG4gICAgLy8gdGhvc2UgY29sdW1ucyAoYW5kIHRyaWdnZXIgdGhpcyBtZW1vaXphdGlvbiB2aWEgZGVwcylcblxuICAgIHZhciBhbGxDb2x1bW5zID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVkdWNlSG9va3MoZ2V0SG9va3MoKS5hbGxDb2x1bW5zLCBmbGF0dGVuQ29sdW1ucyhjb2x1bW5zKSwge1xuICAgICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKVxuICAgICAgfSkubWFwKGFzc2lnbkNvbHVtbkFjY2Vzc29yKTtcbiAgICB9LCBbY29sdW1ucywgZ2V0SG9va3MsIGdldEluc3RhbmNlXS5jb25jYXQocmVkdWNlSG9va3MoZ2V0SG9va3MoKS5hbGxDb2x1bW5zRGVwcywgW10sIHtcbiAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpXG4gICAgfSkpKTtcbiAgICBnZXRJbnN0YW5jZSgpLmFsbENvbHVtbnMgPSBhbGxDb2x1bW5zOyAvLyBBY2Nlc3MgdGhlIHJvdyBtb2RlbCB1c2luZyBpbml0aWFsIGNvbHVtbnNcblxuICAgIHZhciBfUmVhY3QkdXNlTWVtbyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHJvd3MgPSBbXTtcbiAgICAgIHZhciBmbGF0Um93cyA9IFtdO1xuICAgICAgdmFyIHJvd3NCeUlkID0ge307XG4gICAgICB2YXIgYWxsQ29sdW1uc1F1ZXVlID0gW10uY29uY2F0KGFsbENvbHVtbnMpO1xuXG4gICAgICB3aGlsZSAoYWxsQ29sdW1uc1F1ZXVlLmxlbmd0aCkge1xuICAgICAgICB2YXIgY29sdW1uID0gYWxsQ29sdW1uc1F1ZXVlLnNoaWZ0KCk7XG4gICAgICAgIGFjY2Vzc1Jvd3NGb3JDb2x1bW4oe1xuICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgcm93czogcm93cyxcbiAgICAgICAgICBmbGF0Um93czogZmxhdFJvd3MsXG4gICAgICAgICAgcm93c0J5SWQ6IHJvd3NCeUlkLFxuICAgICAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgICAgIGdldFJvd0lkOiBnZXRSb3dJZCxcbiAgICAgICAgICBnZXRTdWJSb3dzOiBnZXRTdWJSb3dzLFxuICAgICAgICAgIGFjY2Vzc1ZhbHVlSG9va3M6IGdldEhvb2tzKCkuYWNjZXNzVmFsdWUsXG4gICAgICAgICAgZ2V0SW5zdGFuY2U6IGdldEluc3RhbmNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gW3Jvd3MsIGZsYXRSb3dzLCByb3dzQnlJZF07XG4gICAgfSwgW2FsbENvbHVtbnMsIGRhdGEsIGdldFJvd0lkLCBnZXRTdWJSb3dzLCBnZXRIb29rcywgZ2V0SW5zdGFuY2VdKSxcbiAgICAgICAgcm93cyA9IF9SZWFjdCR1c2VNZW1vWzBdLFxuICAgICAgICBmbGF0Um93cyA9IF9SZWFjdCR1c2VNZW1vWzFdLFxuICAgICAgICByb3dzQnlJZCA9IF9SZWFjdCR1c2VNZW1vWzJdO1xuXG4gICAgT2JqZWN0LmFzc2lnbihnZXRJbnN0YW5jZSgpLCB7XG4gICAgICByb3dzOiByb3dzLFxuICAgICAgaW5pdGlhbFJvd3M6IFtdLmNvbmNhdChyb3dzKSxcbiAgICAgIGZsYXRSb3dzOiBmbGF0Um93cyxcbiAgICAgIHJvd3NCeUlkOiByb3dzQnlJZCAvLyBtYXRlcmlhbGl6ZWRDb2x1bW5zLFxuXG4gICAgfSk7XG4gICAgbG9vcEhvb2tzKGdldEhvb2tzKCkudXNlSW5zdGFuY2VBZnRlckRhdGEsIGdldEluc3RhbmNlKCkpOyAvLyBHZXQgdGhlIGZsYXQgbGlzdCBvZiBhbGwgY29sdW1ucyBBRlRFUiB0aGUgcm93c1xuICAgIC8vIGhhdmUgYmVlbiBhY2Nlc3MsIGFuZCBhbGxvdyBob29rcyB0byBkZWNvcmF0ZVxuICAgIC8vIHRob3NlIGNvbHVtbnMgKGFuZCB0cmlnZ2VyIHRoaXMgbWVtb2l6YXRpb24gdmlhIGRlcHMpXG5cbiAgICB2YXIgdmlzaWJsZUNvbHVtbnMgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZWR1Y2VIb29rcyhnZXRIb29rcygpLnZpc2libGVDb2x1bW5zLCBhbGxDb2x1bW5zLCB7XG4gICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpXG4gICAgICB9KS5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGRlY29yYXRlQ29sdW1uKGQsIGRlZmF1bHRDb2x1bW4pO1xuICAgICAgfSk7XG4gICAgfSwgW2dldEhvb2tzLCBhbGxDb2x1bW5zLCBnZXRJbnN0YW5jZSwgZGVmYXVsdENvbHVtbl0uY29uY2F0KHJlZHVjZUhvb2tzKGdldEhvb2tzKCkudmlzaWJsZUNvbHVtbnNEZXBzLCBbXSwge1xuICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICB9KSkpOyAvLyBDb21iaW5lIG5ldyB2aXNpYmxlIGNvbHVtbnMgd2l0aCBhbGwgY29sdW1uc1xuXG4gICAgYWxsQ29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNvbHVtbnMgPSBbXS5jb25jYXQodmlzaWJsZUNvbHVtbnMpO1xuICAgICAgYWxsQ29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgaWYgKCFjb2x1bW5zLmZpbmQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gZC5pZCA9PT0gY29sdW1uLmlkO1xuICAgICAgICB9KSkge1xuICAgICAgICAgIGNvbHVtbnMucHVzaChjb2x1bW4pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjb2x1bW5zO1xuICAgIH0sIFthbGxDb2x1bW5zLCB2aXNpYmxlQ29sdW1uc10pO1xuICAgIGdldEluc3RhbmNlKCkuYWxsQ29sdW1ucyA9IGFsbENvbHVtbnM7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIGR1cGxpY2F0ZUNvbHVtbnMgPSBhbGxDb2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoY29sdW1uLCBpKSB7XG4gICAgICAgIHJldHVybiBhbGxDb2x1bW5zLmZpbmRJbmRleChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBkLmlkID09PSBjb2x1bW4uaWQ7XG4gICAgICAgIH0pICE9PSBpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChkdXBsaWNhdGVDb2x1bW5zLmxlbmd0aCkge1xuICAgICAgICBjb25zb2xlLmluZm8oYWxsQ29sdW1ucyk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkR1cGxpY2F0ZSBjb2x1bW5zIHdlcmUgZm91bmQgd2l0aCBpZHM6IFxcXCJcIiArIGR1cGxpY2F0ZUNvbHVtbnMubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIGQuaWQ7XG4gICAgICAgIH0pLmpvaW4oJywgJykgKyBcIlxcXCIgaW4gdGhlIGNvbHVtbnMgYXJyYXkgYWJvdmVcIik7XG4gICAgICB9XG4gICAgfSAvLyBNYWtlIHRoZSBoZWFkZXJHcm91cHNcblxuXG4gICAgdmFyIGhlYWRlckdyb3VwcyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlZHVjZUhvb2tzKGdldEhvb2tzKCkuaGVhZGVyR3JvdXBzLCBtYWtlSGVhZGVyR3JvdXBzKHZpc2libGVDb2x1bW5zLCBkZWZhdWx0Q29sdW1uKSwgZ2V0SW5zdGFuY2UoKSk7XG4gICAgfSwgW2dldEhvb2tzLCB2aXNpYmxlQ29sdW1ucywgZGVmYXVsdENvbHVtbiwgZ2V0SW5zdGFuY2VdLmNvbmNhdChyZWR1Y2VIb29rcyhnZXRIb29rcygpLmhlYWRlckdyb3Vwc0RlcHMsIFtdLCB7XG4gICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKVxuICAgIH0pKSk7XG4gICAgZ2V0SW5zdGFuY2UoKS5oZWFkZXJHcm91cHMgPSBoZWFkZXJHcm91cHM7IC8vIEdldCB0aGUgZmlyc3QgbGV2ZWwgb2YgaGVhZGVyc1xuXG4gICAgdmFyIGhlYWRlcnMgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBoZWFkZXJHcm91cHMubGVuZ3RoID8gaGVhZGVyR3JvdXBzWzBdLmhlYWRlcnMgOiBbXTtcbiAgICB9LCBbaGVhZGVyR3JvdXBzXSk7XG4gICAgZ2V0SW5zdGFuY2UoKS5oZWFkZXJzID0gaGVhZGVyczsgLy8gUHJvdmlkZSBhIGZsYXQgaGVhZGVyIGxpc3QgZm9yIHV0aWxpdGllc1xuXG4gICAgZ2V0SW5zdGFuY2UoKS5mbGF0SGVhZGVycyA9IGhlYWRlckdyb3Vwcy5yZWR1Y2UoZnVuY3Rpb24gKGFsbCwgaGVhZGVyR3JvdXApIHtcbiAgICAgIHJldHVybiBbXS5jb25jYXQoYWxsLCBoZWFkZXJHcm91cC5oZWFkZXJzKTtcbiAgICB9LCBbXSk7XG4gICAgbG9vcEhvb2tzKGdldEhvb2tzKCkudXNlSW5zdGFuY2VCZWZvcmVEaW1lbnNpb25zLCBnZXRJbnN0YW5jZSgpKTsgLy8gRmlsdGVyIGNvbHVtbnMgZG93biB0byB2aXNpYmxlIG9uZXNcblxuICAgIHZhciB2aXNpYmxlQ29sdW1uc0RlcCA9IHZpc2libGVDb2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuIGQuaXNWaXNpYmxlO1xuICAgIH0pLm1hcChmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuIGQuaWQ7XG4gICAgfSkuc29ydCgpLmpvaW4oJ18nKTtcbiAgICB2aXNpYmxlQ29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHZpc2libGVDb2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5pc1Zpc2libGU7XG4gICAgICB9KTtcbiAgICB9LCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgW3Zpc2libGVDb2x1bW5zLCB2aXNpYmxlQ29sdW1uc0RlcF0pO1xuICAgIGdldEluc3RhbmNlKCkudmlzaWJsZUNvbHVtbnMgPSB2aXNpYmxlQ29sdW1uczsgLy8gSGVhZGVyIFZpc2liaWxpdHkgaXMgbmVlZGVkIGJ5IHRoaXMgcG9pbnRcblxuICAgIHZhciBfY2FsY3VsYXRlSGVhZGVyV2lkdGggPSBjYWxjdWxhdGVIZWFkZXJXaWR0aHMoaGVhZGVycyksXG4gICAgICAgIHRvdGFsQ29sdW1uc01pbldpZHRoID0gX2NhbGN1bGF0ZUhlYWRlcldpZHRoWzBdLFxuICAgICAgICB0b3RhbENvbHVtbnNXaWR0aCA9IF9jYWxjdWxhdGVIZWFkZXJXaWR0aFsxXSxcbiAgICAgICAgdG90YWxDb2x1bW5zTWF4V2lkdGggPSBfY2FsY3VsYXRlSGVhZGVyV2lkdGhbMl07XG5cbiAgICBnZXRJbnN0YW5jZSgpLnRvdGFsQ29sdW1uc01pbldpZHRoID0gdG90YWxDb2x1bW5zTWluV2lkdGg7XG4gICAgZ2V0SW5zdGFuY2UoKS50b3RhbENvbHVtbnNXaWR0aCA9IHRvdGFsQ29sdW1uc1dpZHRoO1xuICAgIGdldEluc3RhbmNlKCkudG90YWxDb2x1bW5zTWF4V2lkdGggPSB0b3RhbENvbHVtbnNNYXhXaWR0aDtcbiAgICBsb29wSG9va3MoZ2V0SG9va3MoKS51c2VJbnN0YW5jZSwgZ2V0SW5zdGFuY2UoKSkgLy8gRWFjaCBtYXRlcmlhbGl6ZWQgaGVhZGVyIG5lZWRzIHRvIGJlIGFzc2lnbmVkIGEgcmVuZGVyIGZ1bmN0aW9uIGFuZCBvdGhlclxuICAgIC8vIHByb3AgZ2V0dGVyIHByb3BlcnRpZXMgaGVyZS5cbiAgICA7XG4gICAgW10uY29uY2F0KGdldEluc3RhbmNlKCkuZmxhdEhlYWRlcnMsIGdldEluc3RhbmNlKCkuYWxsQ29sdW1ucykuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAvLyBHaXZlIGNvbHVtbnMvaGVhZGVycyByZW5kZXJpbmcgcG93ZXJcbiAgICAgIGNvbHVtbi5yZW5kZXIgPSBtYWtlUmVuZGVyZXIoZ2V0SW5zdGFuY2UoKSwgY29sdW1uKTsgLy8gR2l2ZSBjb2x1bW5zL2hlYWRlcnMgYSBkZWZhdWx0IGdldEhlYWRlclByb3BzXG5cbiAgICAgIGNvbHVtbi5nZXRIZWFkZXJQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0SGVhZGVyUHJvcHMsIHtcbiAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKCksXG4gICAgICAgIGNvbHVtbjogY29sdW1uXG4gICAgICB9KTsgLy8gR2l2ZSBjb2x1bW5zL2hlYWRlcnMgYSBkZWZhdWx0IGdldEZvb3RlclByb3BzXG5cbiAgICAgIGNvbHVtbi5nZXRGb290ZXJQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0Rm9vdGVyUHJvcHMsIHtcbiAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKCksXG4gICAgICAgIGNvbHVtbjogY29sdW1uXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBnZXRJbnN0YW5jZSgpLmhlYWRlckdyb3VwcyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGhlYWRlckdyb3Vwcy5maWx0ZXIoZnVuY3Rpb24gKGhlYWRlckdyb3VwLCBpKSB7XG4gICAgICAgIC8vIEZpbHRlciBvdXQgYW55IGhlYWRlcnMgYW5kIGhlYWRlckdyb3VwcyB0aGF0IGRvbid0IGhhdmUgdmlzaWJsZSBjb2x1bW5zXG4gICAgICAgIGhlYWRlckdyb3VwLmhlYWRlcnMgPSBoZWFkZXJHcm91cC5oZWFkZXJzLmZpbHRlcihmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgICAgdmFyIHJlY3Vyc2UgPSBmdW5jdGlvbiByZWN1cnNlKGhlYWRlcnMpIHtcbiAgICAgICAgICAgIHJldHVybiBoZWFkZXJzLmZpbHRlcihmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgICAgICAgIGlmIChjb2x1bW4uaGVhZGVycykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWN1cnNlKGNvbHVtbi5oZWFkZXJzKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBjb2x1bW4uaXNWaXNpYmxlO1xuICAgICAgICAgICAgfSkubGVuZ3RoO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAoY29sdW1uLmhlYWRlcnMpIHtcbiAgICAgICAgICAgIHJldHVybiByZWN1cnNlKGNvbHVtbi5oZWFkZXJzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29sdW1uLmlzVmlzaWJsZTtcbiAgICAgICAgfSk7IC8vIEdpdmUgaGVhZGVyR3JvdXBzIGdldFJvd1Byb3BzXG5cbiAgICAgICAgaWYgKGhlYWRlckdyb3VwLmhlYWRlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0SGVhZGVyR3JvdXBQcm9wcywge1xuICAgICAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKCksXG4gICAgICAgICAgICBoZWFkZXJHcm91cDogaGVhZGVyR3JvdXAsXG4gICAgICAgICAgICBpbmRleDogaVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGhlYWRlckdyb3VwLmdldEZvb3Rlckdyb3VwUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldEZvb3Rlckdyb3VwUHJvcHMsIHtcbiAgICAgICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpLFxuICAgICAgICAgICAgaGVhZGVyR3JvdXA6IGhlYWRlckdyb3VwLFxuICAgICAgICAgICAgaW5kZXg6IGlcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0sIFtoZWFkZXJHcm91cHMsIGdldEluc3RhbmNlLCBnZXRIb29rc10pO1xuICAgIGdldEluc3RhbmNlKCkuZm9vdGVyR3JvdXBzID0gW10uY29uY2F0KGdldEluc3RhbmNlKCkuaGVhZGVyR3JvdXBzKS5yZXZlcnNlKCk7IC8vIFRoZSBwcmVwYXJlUm93IGZ1bmN0aW9uIGlzIGFic29sdXRlbHkgbmVjZXNzYXJ5IGFuZCBNVVNUIGJlIGNhbGxlZCBvblxuICAgIC8vIGFueSByb3dzIHRoZSB1c2VyIHdpc2hlcyB0byBiZSBkaXNwbGF5ZWQuXG5cbiAgICBnZXRJbnN0YW5jZSgpLnByZXBhcmVSb3cgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAocm93KSB7XG4gICAgICByb3cuZ2V0Um93UHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldFJvd1Byb3BzLCB7XG4gICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpLFxuICAgICAgICByb3c6IHJvd1xuICAgICAgfSk7IC8vIEJ1aWxkIHRoZSB2aXNpYmxlIGNlbGxzIGZvciBlYWNoIHJvd1xuXG4gICAgICByb3cuYWxsQ2VsbHMgPSBhbGxDb2x1bW5zLm1hcChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJvdy52YWx1ZXNbY29sdW1uLmlkXTtcbiAgICAgICAgdmFyIGNlbGwgPSB7XG4gICAgICAgICAgY29sdW1uOiBjb2x1bW4sXG4gICAgICAgICAgcm93OiByb3csXG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH07IC8vIEdpdmUgZWFjaCBjZWxsIGEgZ2V0Q2VsbFByb3BzIGJhc2VcblxuICAgICAgICBjZWxsLmdldENlbGxQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0Q2VsbFByb3BzLCB7XG4gICAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKCksXG4gICAgICAgICAgY2VsbDogY2VsbFxuICAgICAgICB9KTsgLy8gR2l2ZSBlYWNoIGNlbGwgYSByZW5kZXJlciBmdW5jdGlvbiAoc3VwcG9ydHMgbXVsdGlwbGUgcmVuZGVyZXJzKVxuXG4gICAgICAgIGNlbGwucmVuZGVyID0gbWFrZVJlbmRlcmVyKGdldEluc3RhbmNlKCksIGNvbHVtbiwge1xuICAgICAgICAgIHJvdzogcm93LFxuICAgICAgICAgIGNlbGw6IGNlbGwsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY2VsbDtcbiAgICAgIH0pO1xuICAgICAgcm93LmNlbGxzID0gdmlzaWJsZUNvbHVtbnMubWFwKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgcmV0dXJuIHJvdy5hbGxDZWxscy5maW5kKGZ1bmN0aW9uIChjZWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGNlbGwuY29sdW1uLmlkID09PSBjb2x1bW4uaWQ7XG4gICAgICAgIH0pO1xuICAgICAgfSk7IC8vIG5lZWQgdG8gYXBwbHkgYW55IHJvdyBzcGVjaWZpYyBob29rcyAodXNlRXhwYW5kZWQgcmVxdWlyZXMgdGhpcylcblxuICAgICAgbG9vcEhvb2tzKGdldEhvb2tzKCkucHJlcGFyZVJvdywgcm93LCB7XG4gICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpXG4gICAgICB9KTtcbiAgICB9LCBbZ2V0SG9va3MsIGdldEluc3RhbmNlLCBhbGxDb2x1bW5zLCB2aXNpYmxlQ29sdW1uc10pO1xuICAgIGdldEluc3RhbmNlKCkuZ2V0VGFibGVQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0VGFibGVQcm9wcywge1xuICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICB9KTtcbiAgICBnZXRJbnN0YW5jZSgpLmdldFRhYmxlQm9keVByb3BzID0gbWFrZVByb3BHZXR0ZXIoZ2V0SG9va3MoKS5nZXRUYWJsZUJvZHlQcm9wcywge1xuICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICB9KTtcbiAgICBsb29wSG9va3MoZ2V0SG9va3MoKS51c2VGaW5hbEluc3RhbmNlLCBnZXRJbnN0YW5jZSgpKTtcbiAgICByZXR1cm4gZ2V0SW5zdGFuY2UoKTtcbiAgfTtcblxuICBmdW5jdGlvbiBjYWxjdWxhdGVIZWFkZXJXaWR0aHMoaGVhZGVycywgbGVmdCkge1xuICAgIGlmIChsZWZ0ID09PSB2b2lkIDApIHtcbiAgICAgIGxlZnQgPSAwO1xuICAgIH1cblxuICAgIHZhciBzdW1Ub3RhbE1pbldpZHRoID0gMDtcbiAgICB2YXIgc3VtVG90YWxXaWR0aCA9IDA7XG4gICAgdmFyIHN1bVRvdGFsTWF4V2lkdGggPSAwO1xuICAgIHZhciBzdW1Ub3RhbEZsZXhXaWR0aCA9IDA7XG4gICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChoZWFkZXIpIHtcbiAgICAgIHZhciBzdWJIZWFkZXJzID0gaGVhZGVyLmhlYWRlcnM7XG4gICAgICBoZWFkZXIudG90YWxMZWZ0ID0gbGVmdDtcblxuICAgICAgaWYgKHN1YkhlYWRlcnMgJiYgc3ViSGVhZGVycy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIF9jYWxjdWxhdGVIZWFkZXJXaWR0aDIgPSBjYWxjdWxhdGVIZWFkZXJXaWR0aHMoc3ViSGVhZGVycywgbGVmdCksXG4gICAgICAgICAgICB0b3RhbE1pbldpZHRoID0gX2NhbGN1bGF0ZUhlYWRlcldpZHRoMlswXSxcbiAgICAgICAgICAgIHRvdGFsV2lkdGggPSBfY2FsY3VsYXRlSGVhZGVyV2lkdGgyWzFdLFxuICAgICAgICAgICAgdG90YWxNYXhXaWR0aCA9IF9jYWxjdWxhdGVIZWFkZXJXaWR0aDJbMl0sXG4gICAgICAgICAgICB0b3RhbEZsZXhXaWR0aCA9IF9jYWxjdWxhdGVIZWFkZXJXaWR0aDJbM107XG5cbiAgICAgICAgaGVhZGVyLnRvdGFsTWluV2lkdGggPSB0b3RhbE1pbldpZHRoO1xuICAgICAgICBoZWFkZXIudG90YWxXaWR0aCA9IHRvdGFsV2lkdGg7XG4gICAgICAgIGhlYWRlci50b3RhbE1heFdpZHRoID0gdG90YWxNYXhXaWR0aDtcbiAgICAgICAgaGVhZGVyLnRvdGFsRmxleFdpZHRoID0gdG90YWxGbGV4V2lkdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoZWFkZXIudG90YWxNaW5XaWR0aCA9IGhlYWRlci5taW5XaWR0aDtcbiAgICAgICAgaGVhZGVyLnRvdGFsV2lkdGggPSBNYXRoLm1pbihNYXRoLm1heChoZWFkZXIubWluV2lkdGgsIGhlYWRlci53aWR0aCksIGhlYWRlci5tYXhXaWR0aCk7XG4gICAgICAgIGhlYWRlci50b3RhbE1heFdpZHRoID0gaGVhZGVyLm1heFdpZHRoO1xuICAgICAgICBoZWFkZXIudG90YWxGbGV4V2lkdGggPSBoZWFkZXIuY2FuUmVzaXplID8gaGVhZGVyLnRvdGFsV2lkdGggOiAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoaGVhZGVyLmlzVmlzaWJsZSkge1xuICAgICAgICBsZWZ0ICs9IGhlYWRlci50b3RhbFdpZHRoO1xuICAgICAgICBzdW1Ub3RhbE1pbldpZHRoICs9IGhlYWRlci50b3RhbE1pbldpZHRoO1xuICAgICAgICBzdW1Ub3RhbFdpZHRoICs9IGhlYWRlci50b3RhbFdpZHRoO1xuICAgICAgICBzdW1Ub3RhbE1heFdpZHRoICs9IGhlYWRlci50b3RhbE1heFdpZHRoO1xuICAgICAgICBzdW1Ub3RhbEZsZXhXaWR0aCArPSBoZWFkZXIudG90YWxGbGV4V2lkdGg7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIFtzdW1Ub3RhbE1pbldpZHRoLCBzdW1Ub3RhbFdpZHRoLCBzdW1Ub3RhbE1heFdpZHRoLCBzdW1Ub3RhbEZsZXhXaWR0aF07XG4gIH1cblxuICBmdW5jdGlvbiBhY2Nlc3NSb3dzRm9yQ29sdW1uKF9yZWYpIHtcbiAgICB2YXIgZGF0YSA9IF9yZWYuZGF0YSxcbiAgICAgICAgcm93cyA9IF9yZWYucm93cyxcbiAgICAgICAgZmxhdFJvd3MgPSBfcmVmLmZsYXRSb3dzLFxuICAgICAgICByb3dzQnlJZCA9IF9yZWYucm93c0J5SWQsXG4gICAgICAgIGNvbHVtbiA9IF9yZWYuY29sdW1uLFxuICAgICAgICBnZXRSb3dJZCA9IF9yZWYuZ2V0Um93SWQsXG4gICAgICAgIGdldFN1YlJvd3MgPSBfcmVmLmdldFN1YlJvd3MsXG4gICAgICAgIGFjY2Vzc1ZhbHVlSG9va3MgPSBfcmVmLmFjY2Vzc1ZhbHVlSG9va3MsXG4gICAgICAgIGdldEluc3RhbmNlID0gX3JlZi5nZXRJbnN0YW5jZTtcblxuICAgIC8vIEFjY2VzcyB0aGUgcm93J3MgZGF0YSBjb2x1bW4tYnktY29sdW1uXG4gICAgLy8gV2UgZG8gaXQgdGhpcyB3YXkgc28gd2UgY2FuIGluY3JlbWVudGFsbHkgYWRkIG1hdGVyaWFsaXplZFxuICAgIC8vIGNvbHVtbnMgYWZ0ZXIgdGhlIGZpcnN0IHBhc3MgYW5kIGF2b2lkIGV4Y2Vzc2l2ZSBsb29waW5nXG4gICAgdmFyIGFjY2Vzc1JvdyA9IGZ1bmN0aW9uIGFjY2Vzc1JvdyhvcmlnaW5hbFJvdywgcm93SW5kZXgsIGRlcHRoLCBwYXJlbnQsIHBhcmVudFJvd3MpIHtcbiAgICAgIGlmIChkZXB0aCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGRlcHRoID0gMDtcbiAgICAgIH1cblxuICAgICAgLy8gS2VlcCB0aGUgb3JpZ2luYWwgcmVmZXJlbmNlIGFyb3VuZFxuICAgICAgdmFyIG9yaWdpbmFsID0gb3JpZ2luYWxSb3c7XG4gICAgICB2YXIgaWQgPSBnZXRSb3dJZChvcmlnaW5hbFJvdywgcm93SW5kZXgsIHBhcmVudCk7XG4gICAgICB2YXIgcm93ID0gcm93c0J5SWRbaWRdOyAvLyBJZiB0aGUgcm93IGhhc24ndCBiZWVuIGNyZWF0ZWQsIGxldCdzIG1ha2UgaXRcblxuICAgICAgaWYgKCFyb3cpIHtcbiAgICAgICAgcm93ID0ge1xuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBvcmlnaW5hbDogb3JpZ2luYWwsXG4gICAgICAgICAgaW5kZXg6IHJvd0luZGV4LFxuICAgICAgICAgIGRlcHRoOiBkZXB0aCxcbiAgICAgICAgICBjZWxsczogW3t9XSAvLyBUaGlzIGlzIGEgZHVtbXkgY2VsbFxuXG4gICAgICAgIH07IC8vIE92ZXJyaWRlIGNvbW1vbiBhcnJheSBmdW5jdGlvbnMgKGFuZCB0aGUgZHVtbXkgY2VsbCdzIGdldENlbGxQcm9wcyBmdW5jdGlvbilcbiAgICAgICAgLy8gdG8gc2hvdyBhbiBlcnJvciBpZiBpdCBpcyBhY2Nlc3NlZCB3aXRob3V0IGNhbGxpbmcgcHJlcGFyZVJvd1xuXG4gICAgICAgIHJvdy5jZWxscy5tYXAgPSB1bnByZXBhcmVkQWNjZXNzV2FybmluZztcbiAgICAgICAgcm93LmNlbGxzLmZpbHRlciA9IHVucHJlcGFyZWRBY2Nlc3NXYXJuaW5nO1xuICAgICAgICByb3cuY2VsbHMuZm9yRWFjaCA9IHVucHJlcGFyZWRBY2Nlc3NXYXJuaW5nO1xuICAgICAgICByb3cuY2VsbHNbMF0uZ2V0Q2VsbFByb3BzID0gdW5wcmVwYXJlZEFjY2Vzc1dhcm5pbmc7IC8vIENyZWF0ZSB0aGUgY2VsbHMgYW5kIHZhbHVlc1xuXG4gICAgICAgIHJvdy52YWx1ZXMgPSB7fTsgLy8gUHVzaCB0aGlzIHJvdyBpbnRvIHRoZSBwYXJlbnRSb3dzIGFycmF5XG5cbiAgICAgICAgcGFyZW50Um93cy5wdXNoKHJvdyk7IC8vIEtlZXAgdHJhY2sgb2YgZXZlcnkgcm93IGluIGEgZmxhdCBhcnJheVxuXG4gICAgICAgIGZsYXRSb3dzLnB1c2gocm93KTsgLy8gQWxzbyBrZWVwIHRyYWNrIG9mIGV2ZXJ5IHJvdyBieSBpdHMgSURcblxuICAgICAgICByb3dzQnlJZFtpZF0gPSByb3c7IC8vIEdldCB0aGUgb3JpZ2luYWwgc3Vicm93c1xuXG4gICAgICAgIHJvdy5vcmlnaW5hbFN1YlJvd3MgPSBnZXRTdWJSb3dzKG9yaWdpbmFsUm93LCByb3dJbmRleCk7IC8vIFRoZW4gcmVjdXJzaXZlbHkgYWNjZXNzIHRoZW1cblxuICAgICAgICBpZiAocm93Lm9yaWdpbmFsU3ViUm93cykge1xuICAgICAgICAgIHZhciBzdWJSb3dzID0gW107XG4gICAgICAgICAgcm93Lm9yaWdpbmFsU3ViUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjZXNzUm93KGQsIGksIGRlcHRoICsgMSwgcm93LCBzdWJSb3dzKTtcbiAgICAgICAgICB9KTsgLy8gS2VlcCB0aGUgbmV3IHN1YlJvd3MgYXJyYXkgb24gdGhlIHJvd1xuXG4gICAgICAgICAgcm93LnN1YlJvd3MgPSBzdWJSb3dzO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHJvdy5zdWJSb3dzKSB7XG4gICAgICAgIC8vIElmIHRoZSByb3cgZXhpc3RzLCB0aGVuIGl0J3MgYWxyZWFkeSBiZWVuIGFjY2Vzc2VkXG4gICAgICAgIC8vIEtlZXAgcmVjdXJzaW5nLCBidXQgZG9uJ3Qgd29ycnkgYWJvdXQgcGFzc2luZyB0aGVcbiAgICAgICAgLy8gYWNjdW1sYXRvciBhcnJheSAodGhvc2Ugcm93cyBhbHJlYWR5IGV4aXN0KVxuICAgICAgICByb3cub3JpZ2luYWxTdWJSb3dzLmZvckVhY2goZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gYWNjZXNzUm93KGQsIGksIGRlcHRoICsgMSwgcm93KTtcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIElmIHRoZSBjb2x1bW4gaGFzIGFuIGFjY2Vzc29yLCB1c2UgaXQgdG8gZ2V0IGEgdmFsdWVcblxuXG4gICAgICBpZiAoY29sdW1uLmFjY2Vzc29yKSB7XG4gICAgICAgIHJvdy52YWx1ZXNbY29sdW1uLmlkXSA9IGNvbHVtbi5hY2Nlc3NvcihvcmlnaW5hbFJvdywgcm93SW5kZXgsIHJvdyk7XG4gICAgICB9IC8vIEFsbG93IHBsdWdpbnMgdG8gbWFuaXB1bGF0ZSB0aGUgY29sdW1uIHZhbHVlXG5cblxuICAgICAgcm93LnZhbHVlc1tjb2x1bW4uaWRdID0gcmVkdWNlSG9va3MoYWNjZXNzVmFsdWVIb29rcywgcm93LnZhbHVlc1tjb2x1bW4uaWRdLCB7XG4gICAgICAgIHJvdzogcm93LFxuICAgICAgICBjb2x1bW46IGNvbHVtbixcbiAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICAgIH0sIHRydWUpO1xuICAgIH07XG5cbiAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKG9yaWdpbmFsUm93LCByb3dJbmRleCkge1xuICAgICAgcmV0dXJuIGFjY2Vzc1JvdyhvcmlnaW5hbFJvdywgcm93SW5kZXgsIDAsIHVuZGVmaW5lZCwgcm93cyk7XG4gICAgfSk7XG4gIH1cblxuICBhY3Rpb25zLnJlc2V0RXhwYW5kZWQgPSAncmVzZXRFeHBhbmRlZCc7XG4gIGFjdGlvbnMudG9nZ2xlUm93RXhwYW5kZWQgPSAndG9nZ2xlUm93RXhwYW5kZWQnO1xuICBhY3Rpb25zLnRvZ2dsZUFsbFJvd3NFeHBhbmRlZCA9ICd0b2dnbGVBbGxSb3dzRXhwYW5kZWQnO1xuICB2YXIgdXNlRXhwYW5kZWQgPSBmdW5jdGlvbiB1c2VFeHBhbmRlZChob29rcykge1xuICAgIGhvb2tzLmdldFRvZ2dsZUFsbFJvd3NFeHBhbmRlZFByb3BzID0gW2RlZmF1bHRHZXRUb2dnbGVBbGxSb3dzRXhwYW5kZWRQcm9wc107XG4gICAgaG9va3MuZ2V0VG9nZ2xlUm93RXhwYW5kZWRQcm9wcyA9IFtkZWZhdWx0R2V0VG9nZ2xlUm93RXhwYW5kZWRQcm9wc107XG4gICAgaG9va3Muc3RhdGVSZWR1Y2Vycy5wdXNoKHJlZHVjZXIkMSk7XG4gICAgaG9va3MudXNlSW5zdGFuY2UucHVzaCh1c2VJbnN0YW5jZSQxKTtcbiAgICBob29rcy5wcmVwYXJlUm93LnB1c2gocHJlcGFyZVJvdyk7XG4gIH07XG4gIHVzZUV4cGFuZGVkLnBsdWdpbk5hbWUgPSAndXNlRXhwYW5kZWQnO1xuXG4gIHZhciBkZWZhdWx0R2V0VG9nZ2xlQWxsUm93c0V4cGFuZGVkUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0VG9nZ2xlQWxsUm93c0V4cGFuZGVkUHJvcHMocHJvcHMsIF9yZWYpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlO1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICBpbnN0YW5jZS50b2dnbGVBbGxSb3dzRXhwYW5kZWQoKTtcbiAgICAgIH0sXG4gICAgICBzdHlsZToge1xuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgICAgfSxcbiAgICAgIHRpdGxlOiAnVG9nZ2xlIEFsbCBSb3dzIEV4cGFuZGVkJ1xuICAgIH1dO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0R2V0VG9nZ2xlUm93RXhwYW5kZWRQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRUb2dnbGVSb3dFeHBhbmRlZFByb3BzKHByb3BzLCBfcmVmMikge1xuICAgIHZhciByb3cgPSBfcmVmMi5yb3c7XG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgcm93LnRvZ2dsZVJvd0V4cGFuZGVkKCk7XG4gICAgICB9LFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgIH0sXG4gICAgICB0aXRsZTogJ1RvZ2dsZSBSb3cgRXhwYW5kZWQnXG4gICAgfV07XG4gIH07IC8vIFJlZHVjZXJcblxuXG4gIGZ1bmN0aW9uIHJlZHVjZXIkMShzdGF0ZSwgYWN0aW9uLCBwcmV2aW91c1N0YXRlLCBpbnN0YW5jZSkge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5pbml0KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBleHBhbmRlZDoge31cbiAgICAgIH0sIHN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMucmVzZXRFeHBhbmRlZCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBleHBhbmRlZDogaW5zdGFuY2UuaW5pdGlhbFN0YXRlLmV4cGFuZGVkIHx8IHt9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMudG9nZ2xlQWxsUm93c0V4cGFuZGVkKSB7XG4gICAgICB2YXIgdmFsdWUgPSBhY3Rpb24udmFsdWU7XG4gICAgICB2YXIgaXNBbGxSb3dzRXhwYW5kZWQgPSBpbnN0YW5jZS5pc0FsbFJvd3NFeHBhbmRlZCxcbiAgICAgICAgICByb3dzQnlJZCA9IGluc3RhbmNlLnJvd3NCeUlkO1xuICAgICAgdmFyIGV4cGFuZEFsbCA9IHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyB2YWx1ZSA6ICFpc0FsbFJvd3NFeHBhbmRlZDtcblxuICAgICAgaWYgKGV4cGFuZEFsbCkge1xuICAgICAgICB2YXIgZXhwYW5kZWQgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMocm93c0J5SWQpLmZvckVhY2goZnVuY3Rpb24gKHJvd0lkKSB7XG4gICAgICAgICAgZXhwYW5kZWRbcm93SWRdID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBleHBhbmRlZDogZXhwYW5kZWRcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgZXhwYW5kZWQ6IHt9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMudG9nZ2xlUm93RXhwYW5kZWQpIHtcbiAgICAgIHZhciBpZCA9IGFjdGlvbi5pZCxcbiAgICAgICAgICBzZXRFeHBhbmRlZCA9IGFjdGlvbi52YWx1ZTtcbiAgICAgIHZhciBleGlzdHMgPSBzdGF0ZS5leHBhbmRlZFtpZF07XG4gICAgICB2YXIgc2hvdWxkRXhpc3QgPSB0eXBlb2Ygc2V0RXhwYW5kZWQgIT09ICd1bmRlZmluZWQnID8gc2V0RXhwYW5kZWQgOiAhZXhpc3RzO1xuXG4gICAgICBpZiAoIWV4aXN0cyAmJiBzaG91bGRFeGlzdCkge1xuICAgICAgICB2YXIgX2V4dGVuZHMyO1xuXG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBleHBhbmRlZDogX2V4dGVuZHMoe30sIHN0YXRlLmV4cGFuZGVkLCAoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltpZF0gPSB0cnVlLCBfZXh0ZW5kczIpKVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZXhpc3RzICYmICFzaG91bGRFeGlzdCkge1xuICAgICAgICB2YXIgX3N0YXRlJGV4cGFuZGVkID0gc3RhdGUuZXhwYW5kZWQsXG4gICAgICAgICAgICBfID0gX3N0YXRlJGV4cGFuZGVkW2lkXSxcbiAgICAgICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfc3RhdGUkZXhwYW5kZWQsIFtpZF0ubWFwKF90b1Byb3BlcnR5S2V5KSk7XG5cbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGV4cGFuZGVkOiByZXN0XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZUluc3RhbmNlJDEoaW5zdGFuY2UpIHtcbiAgICB2YXIgZGF0YSA9IGluc3RhbmNlLmRhdGEsXG4gICAgICAgIHJvd3MgPSBpbnN0YW5jZS5yb3dzLFxuICAgICAgICByb3dzQnlJZCA9IGluc3RhbmNlLnJvd3NCeUlkLFxuICAgICAgICBfaW5zdGFuY2UkbWFudWFsRXhwYW4gPSBpbnN0YW5jZS5tYW51YWxFeHBhbmRlZEtleSxcbiAgICAgICAgbWFudWFsRXhwYW5kZWRLZXkgPSBfaW5zdGFuY2UkbWFudWFsRXhwYW4gPT09IHZvaWQgMCA/ICdleHBhbmRlZCcgOiBfaW5zdGFuY2UkbWFudWFsRXhwYW4sXG4gICAgICAgIF9pbnN0YW5jZSRwYWdpbmF0ZUV4cCA9IGluc3RhbmNlLnBhZ2luYXRlRXhwYW5kZWRSb3dzLFxuICAgICAgICBwYWdpbmF0ZUV4cGFuZGVkUm93cyA9IF9pbnN0YW5jZSRwYWdpbmF0ZUV4cCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRwYWdpbmF0ZUV4cCxcbiAgICAgICAgX2luc3RhbmNlJGV4cGFuZFN1YlJvID0gaW5zdGFuY2UuZXhwYW5kU3ViUm93cyxcbiAgICAgICAgZXhwYW5kU3ViUm93cyA9IF9pbnN0YW5jZSRleHBhbmRTdWJSbyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRleHBhbmRTdWJSbyxcbiAgICAgICAgX2luc3RhbmNlJGF1dG9SZXNldEV4ID0gaW5zdGFuY2UuYXV0b1Jlc2V0RXhwYW5kZWQsXG4gICAgICAgIGF1dG9SZXNldEV4cGFuZGVkID0gX2luc3RhbmNlJGF1dG9SZXNldEV4ID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJGF1dG9SZXNldEV4LFxuICAgICAgICBnZXRIb29rcyA9IGluc3RhbmNlLmdldEhvb2tzLFxuICAgICAgICBwbHVnaW5zID0gaW5zdGFuY2UucGx1Z2lucyxcbiAgICAgICAgZXhwYW5kZWQgPSBpbnN0YW5jZS5zdGF0ZS5leHBhbmRlZCxcbiAgICAgICAgZGlzcGF0Y2ggPSBpbnN0YW5jZS5kaXNwYXRjaDtcbiAgICBlbnN1cmVQbHVnaW5PcmRlcihwbHVnaW5zLCBbJ3VzZVNvcnRCeScsICd1c2VHcm91cEJ5JywgJ3VzZVBpdm90Q29sdW1ucycsICd1c2VHbG9iYWxGaWx0ZXInXSwgJ3VzZUV4cGFuZGVkJyk7XG4gICAgdmFyIGdldEF1dG9SZXNldEV4cGFuZGVkID0gdXNlR2V0TGF0ZXN0KGF1dG9SZXNldEV4cGFuZGVkKTtcbiAgICB2YXIgaXNBbGxSb3dzRXhwYW5kZWQgPSBCb29sZWFuKE9iamVjdC5rZXlzKHJvd3NCeUlkKS5sZW5ndGggJiYgT2JqZWN0LmtleXMoZXhwYW5kZWQpLmxlbmd0aCk7XG5cbiAgICBpZiAoaXNBbGxSb3dzRXhwYW5kZWQpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhyb3dzQnlJZCkuc29tZShmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuICFleHBhbmRlZFtpZF07XG4gICAgICB9KSkge1xuICAgICAgICBpc0FsbFJvd3NFeHBhbmRlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gLy8gQnlwYXNzIGFueSBlZmZlY3RzIGZyb20gZmlyaW5nIHdoZW4gdGhpcyBjaGFuZ2VzXG5cblxuICAgIHVzZU1vdW50ZWRMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGdldEF1dG9SZXNldEV4cGFuZGVkKCkpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IGFjdGlvbnMucmVzZXRFeHBhbmRlZFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBbZGlzcGF0Y2gsIGRhdGFdKTtcbiAgICB2YXIgdG9nZ2xlUm93RXhwYW5kZWQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoaWQsIHZhbHVlKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMudG9nZ2xlUm93RXhwYW5kZWQsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICB2YXIgdG9nZ2xlQWxsUm93c0V4cGFuZGVkID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnRvZ2dsZUFsbFJvd3NFeHBhbmRlZCxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICB2YXIgZXhwYW5kZWRSb3dzID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAocGFnaW5hdGVFeHBhbmRlZFJvd3MpIHtcbiAgICAgICAgcmV0dXJuIGV4cGFuZFJvd3Mocm93cywge1xuICAgICAgICAgIG1hbnVhbEV4cGFuZGVkS2V5OiBtYW51YWxFeHBhbmRlZEtleSxcbiAgICAgICAgICBleHBhbmRlZDogZXhwYW5kZWQsXG4gICAgICAgICAgZXhwYW5kU3ViUm93czogZXhwYW5kU3ViUm93c1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvd3M7XG4gICAgfSwgW3BhZ2luYXRlRXhwYW5kZWRSb3dzLCByb3dzLCBtYW51YWxFeHBhbmRlZEtleSwgZXhwYW5kZWQsIGV4cGFuZFN1YlJvd3NdKTtcbiAgICB2YXIgZXhwYW5kZWREZXB0aCA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZpbmRFeHBhbmRlZERlcHRoKGV4cGFuZGVkKTtcbiAgICB9LCBbZXhwYW5kZWRdKTtcbiAgICB2YXIgZ2V0SW5zdGFuY2UgPSB1c2VHZXRMYXRlc3QoaW5zdGFuY2UpO1xuICAgIHZhciBnZXRUb2dnbGVBbGxSb3dzRXhwYW5kZWRQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0VG9nZ2xlQWxsUm93c0V4cGFuZGVkUHJvcHMsIHtcbiAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpXG4gICAgfSk7XG4gICAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZSwge1xuICAgICAgcHJlRXhwYW5kZWRSb3dzOiByb3dzLFxuICAgICAgZXhwYW5kZWRSb3dzOiBleHBhbmRlZFJvd3MsXG4gICAgICByb3dzOiBleHBhbmRlZFJvd3MsXG4gICAgICBleHBhbmRlZERlcHRoOiBleHBhbmRlZERlcHRoLFxuICAgICAgaXNBbGxSb3dzRXhwYW5kZWQ6IGlzQWxsUm93c0V4cGFuZGVkLFxuICAgICAgdG9nZ2xlUm93RXhwYW5kZWQ6IHRvZ2dsZVJvd0V4cGFuZGVkLFxuICAgICAgdG9nZ2xlQWxsUm93c0V4cGFuZGVkOiB0b2dnbGVBbGxSb3dzRXhwYW5kZWQsXG4gICAgICBnZXRUb2dnbGVBbGxSb3dzRXhwYW5kZWRQcm9wczogZ2V0VG9nZ2xlQWxsUm93c0V4cGFuZGVkUHJvcHNcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXBhcmVSb3cocm93LCBfcmVmMykge1xuICAgIHZhciBnZXRIb29rcyA9IF9yZWYzLmluc3RhbmNlLmdldEhvb2tzLFxuICAgICAgICBpbnN0YW5jZSA9IF9yZWYzLmluc3RhbmNlO1xuXG4gICAgcm93LnRvZ2dsZVJvd0V4cGFuZGVkID0gZnVuY3Rpb24gKHNldCkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlLnRvZ2dsZVJvd0V4cGFuZGVkKHJvdy5pZCwgc2V0KTtcbiAgICB9O1xuXG4gICAgcm93LmdldFRvZ2dsZVJvd0V4cGFuZGVkUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldFRvZ2dsZVJvd0V4cGFuZGVkUHJvcHMsIHtcbiAgICAgIGluc3RhbmNlOiBpbnN0YW5jZSxcbiAgICAgIHJvdzogcm93XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kRXhwYW5kZWREZXB0aChleHBhbmRlZCkge1xuICAgIHZhciBtYXhEZXB0aCA9IDA7XG4gICAgT2JqZWN0LmtleXMoZXhwYW5kZWQpLmZvckVhY2goZnVuY3Rpb24gKGlkKSB7XG4gICAgICB2YXIgc3BsaXRJZCA9IGlkLnNwbGl0KCcuJyk7XG4gICAgICBtYXhEZXB0aCA9IE1hdGgubWF4KG1heERlcHRoLCBzcGxpdElkLmxlbmd0aCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1heERlcHRoO1xuICB9XG5cbiAgdmFyIHRleHQgPSBmdW5jdGlvbiB0ZXh0KHJvd3MsIGlkcywgZmlsdGVyVmFsdWUpIHtcbiAgICByb3dzID0gcm93cy5maWx0ZXIoZnVuY3Rpb24gKHJvdykge1xuICAgICAgcmV0dXJuIGlkcy5zb21lKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgcm93VmFsdWUgPSByb3cudmFsdWVzW2lkXTtcbiAgICAgICAgcmV0dXJuIFN0cmluZyhyb3dWYWx1ZSkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhTdHJpbmcoZmlsdGVyVmFsdWUpLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJvd3M7XG4gIH07XG5cbiAgdGV4dC5hdXRvUmVtb3ZlID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiAhdmFsO1xuICB9O1xuXG4gIHZhciBleGFjdFRleHQgPSBmdW5jdGlvbiBleGFjdFRleHQocm93cywgaWRzLCBmaWx0ZXJWYWx1ZSkge1xuICAgIHJldHVybiByb3dzLmZpbHRlcihmdW5jdGlvbiAocm93KSB7XG4gICAgICByZXR1cm4gaWRzLnNvbWUoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciByb3dWYWx1ZSA9IHJvdy52YWx1ZXNbaWRdO1xuICAgICAgICByZXR1cm4gcm93VmFsdWUgIT09IHVuZGVmaW5lZCA/IFN0cmluZyhyb3dWYWx1ZSkudG9Mb3dlckNhc2UoKSA9PT0gU3RyaW5nKGZpbHRlclZhbHVlKS50b0xvd2VyQ2FzZSgpIDogdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGV4YWN0VGV4dC5hdXRvUmVtb3ZlID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiAhdmFsO1xuICB9O1xuXG4gIHZhciBleGFjdFRleHRDYXNlID0gZnVuY3Rpb24gZXhhY3RUZXh0Q2FzZShyb3dzLCBpZHMsIGZpbHRlclZhbHVlKSB7XG4gICAgcmV0dXJuIHJvd3MuZmlsdGVyKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgIHJldHVybiBpZHMuc29tZShmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIHJvd1ZhbHVlID0gcm93LnZhbHVlc1tpZF07XG4gICAgICAgIHJldHVybiByb3dWYWx1ZSAhPT0gdW5kZWZpbmVkID8gU3RyaW5nKHJvd1ZhbHVlKSA9PT0gU3RyaW5nKGZpbHRlclZhbHVlKSA6IHRydWU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBleGFjdFRleHRDYXNlLmF1dG9SZW1vdmUgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuICF2YWw7XG4gIH07XG5cbiAgdmFyIGluY2x1ZGVzID0gZnVuY3Rpb24gaW5jbHVkZXMocm93cywgaWRzLCBmaWx0ZXJWYWx1ZSkge1xuICAgIHJldHVybiByb3dzLmZpbHRlcihmdW5jdGlvbiAocm93KSB7XG4gICAgICByZXR1cm4gaWRzLnNvbWUoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciByb3dWYWx1ZSA9IHJvdy52YWx1ZXNbaWRdO1xuICAgICAgICByZXR1cm4gcm93VmFsdWUuaW5jbHVkZXMoZmlsdGVyVmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgaW5jbHVkZXMuYXV0b1JlbW92ZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gIXZhbCB8fCAhdmFsLmxlbmd0aDtcbiAgfTtcblxuICB2YXIgaW5jbHVkZXNBbGwgPSBmdW5jdGlvbiBpbmNsdWRlc0FsbChyb3dzLCBpZHMsIGZpbHRlclZhbHVlKSB7XG4gICAgcmV0dXJuIHJvd3MuZmlsdGVyKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgIHJldHVybiBpZHMuc29tZShmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIHJvd1ZhbHVlID0gcm93LnZhbHVlc1tpZF07XG4gICAgICAgIHJldHVybiByb3dWYWx1ZSAmJiByb3dWYWx1ZS5sZW5ndGggJiYgZmlsdGVyVmFsdWUuZXZlcnkoZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgIHJldHVybiByb3dWYWx1ZS5pbmNsdWRlcyh2YWwpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGluY2x1ZGVzQWxsLmF1dG9SZW1vdmUgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuICF2YWwgfHwgIXZhbC5sZW5ndGg7XG4gIH07XG5cbiAgdmFyIGluY2x1ZGVzU29tZSA9IGZ1bmN0aW9uIGluY2x1ZGVzU29tZShyb3dzLCBpZHMsIGZpbHRlclZhbHVlKSB7XG4gICAgcmV0dXJuIHJvd3MuZmlsdGVyKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgIHJldHVybiBpZHMuc29tZShmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIHJvd1ZhbHVlID0gcm93LnZhbHVlc1tpZF07XG4gICAgICAgIHJldHVybiByb3dWYWx1ZSAmJiByb3dWYWx1ZS5sZW5ndGggJiYgZmlsdGVyVmFsdWUuc29tZShmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgcmV0dXJuIHJvd1ZhbHVlLmluY2x1ZGVzKHZhbCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgaW5jbHVkZXNTb21lLmF1dG9SZW1vdmUgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuICF2YWwgfHwgIXZhbC5sZW5ndGg7XG4gIH07XG5cbiAgdmFyIGluY2x1ZGVzVmFsdWUgPSBmdW5jdGlvbiBpbmNsdWRlc1ZhbHVlKHJvd3MsIGlkcywgZmlsdGVyVmFsdWUpIHtcbiAgICByZXR1cm4gcm93cy5maWx0ZXIoZnVuY3Rpb24gKHJvdykge1xuICAgICAgcmV0dXJuIGlkcy5zb21lKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgcm93VmFsdWUgPSByb3cudmFsdWVzW2lkXTtcbiAgICAgICAgcmV0dXJuIGZpbHRlclZhbHVlLmluY2x1ZGVzKHJvd1ZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGluY2x1ZGVzVmFsdWUuYXV0b1JlbW92ZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gIXZhbCB8fCAhdmFsLmxlbmd0aDtcbiAgfTtcblxuICB2YXIgZXhhY3QgPSBmdW5jdGlvbiBleGFjdChyb3dzLCBpZHMsIGZpbHRlclZhbHVlKSB7XG4gICAgcmV0dXJuIHJvd3MuZmlsdGVyKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgIHJldHVybiBpZHMuc29tZShmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIHJvd1ZhbHVlID0gcm93LnZhbHVlc1tpZF07XG4gICAgICAgIHJldHVybiByb3dWYWx1ZSA9PT0gZmlsdGVyVmFsdWU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBleGFjdC5hdXRvUmVtb3ZlID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbiAgfTtcblxuICB2YXIgZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzKHJvd3MsIGlkcywgZmlsdGVyVmFsdWUpIHtcbiAgICByZXR1cm4gcm93cy5maWx0ZXIoZnVuY3Rpb24gKHJvdykge1xuICAgICAgcmV0dXJuIGlkcy5zb21lKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgcm93VmFsdWUgPSByb3cudmFsdWVzW2lkXTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuXG4gICAgICAgIHJldHVybiByb3dWYWx1ZSA9PSBmaWx0ZXJWYWx1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGVxdWFscy5hdXRvUmVtb3ZlID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiB2YWwgPT0gbnVsbDtcbiAgfTtcblxuICB2YXIgYmV0d2VlbiA9IGZ1bmN0aW9uIGJldHdlZW4ocm93cywgaWRzLCBmaWx0ZXJWYWx1ZSkge1xuICAgIHZhciBfcmVmID0gZmlsdGVyVmFsdWUgfHwgW10sXG4gICAgICAgIG1pbiA9IF9yZWZbMF0sXG4gICAgICAgIG1heCA9IF9yZWZbMV07XG5cbiAgICBtaW4gPSB0eXBlb2YgbWluID09PSAnbnVtYmVyJyA/IG1pbiA6IC1JbmZpbml0eTtcbiAgICBtYXggPSB0eXBlb2YgbWF4ID09PSAnbnVtYmVyJyA/IG1heCA6IEluZmluaXR5O1xuXG4gICAgaWYgKG1pbiA+IG1heCkge1xuICAgICAgdmFyIHRlbXAgPSBtaW47XG4gICAgICBtaW4gPSBtYXg7XG4gICAgICBtYXggPSB0ZW1wO1xuICAgIH1cblxuICAgIHJldHVybiByb3dzLmZpbHRlcihmdW5jdGlvbiAocm93KSB7XG4gICAgICByZXR1cm4gaWRzLnNvbWUoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciByb3dWYWx1ZSA9IHJvdy52YWx1ZXNbaWRdO1xuICAgICAgICByZXR1cm4gcm93VmFsdWUgPj0gbWluICYmIHJvd1ZhbHVlIDw9IG1heDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGJldHdlZW4uYXV0b1JlbW92ZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gIXZhbCB8fCB0eXBlb2YgdmFsWzBdICE9PSAnbnVtYmVyJyAmJiB0eXBlb2YgdmFsWzFdICE9PSAnbnVtYmVyJztcbiAgfTtcblxuICB2YXIgZmlsdGVyVHlwZXMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgX19wcm90b19fOiBudWxsLFxuICAgIHRleHQ6IHRleHQsXG4gICAgZXhhY3RUZXh0OiBleGFjdFRleHQsXG4gICAgZXhhY3RUZXh0Q2FzZTogZXhhY3RUZXh0Q2FzZSxcbiAgICBpbmNsdWRlczogaW5jbHVkZXMsXG4gICAgaW5jbHVkZXNBbGw6IGluY2x1ZGVzQWxsLFxuICAgIGluY2x1ZGVzU29tZTogaW5jbHVkZXNTb21lLFxuICAgIGluY2x1ZGVzVmFsdWU6IGluY2x1ZGVzVmFsdWUsXG4gICAgZXhhY3Q6IGV4YWN0LFxuICAgIGVxdWFsczogZXF1YWxzLFxuICAgIGJldHdlZW46IGJldHdlZW5cbiAgfSk7XG5cbiAgYWN0aW9ucy5yZXNldEZpbHRlcnMgPSAncmVzZXRGaWx0ZXJzJztcbiAgYWN0aW9ucy5zZXRGaWx0ZXIgPSAnc2V0RmlsdGVyJztcbiAgYWN0aW9ucy5zZXRBbGxGaWx0ZXJzID0gJ3NldEFsbEZpbHRlcnMnO1xuICB2YXIgdXNlRmlsdGVycyA9IGZ1bmN0aW9uIHVzZUZpbHRlcnMoaG9va3MpIHtcbiAgICBob29rcy5zdGF0ZVJlZHVjZXJzLnB1c2gocmVkdWNlciQyKTtcbiAgICBob29rcy51c2VJbnN0YW5jZS5wdXNoKHVzZUluc3RhbmNlJDIpO1xuICB9O1xuICB1c2VGaWx0ZXJzLnBsdWdpbk5hbWUgPSAndXNlRmlsdGVycyc7XG5cbiAgZnVuY3Rpb24gcmVkdWNlciQyKHN0YXRlLCBhY3Rpb24sIHByZXZpb3VzU3RhdGUsIGluc3RhbmNlKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmluaXQpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIGZpbHRlcnM6IFtdXG4gICAgICB9LCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnJlc2V0RmlsdGVycykge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBmaWx0ZXJzOiBpbnN0YW5jZS5pbml0aWFsU3RhdGUuZmlsdGVycyB8fCBbXVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnNldEZpbHRlcikge1xuICAgICAgdmFyIGNvbHVtbklkID0gYWN0aW9uLmNvbHVtbklkLFxuICAgICAgICAgIGZpbHRlclZhbHVlID0gYWN0aW9uLmZpbHRlclZhbHVlO1xuICAgICAgdmFyIGFsbENvbHVtbnMgPSBpbnN0YW5jZS5hbGxDb2x1bW5zLFxuICAgICAgICAgIHVzZXJGaWx0ZXJUeXBlcyA9IGluc3RhbmNlLmZpbHRlclR5cGVzO1xuICAgICAgdmFyIGNvbHVtbiA9IGFsbENvbHVtbnMuZmluZChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5pZCA9PT0gY29sdW1uSWQ7XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFjb2x1bW4pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVhY3QtVGFibGU6IENvdWxkIG5vdCBmaW5kIGEgY29sdW1uIHdpdGggaWQ6IFwiICsgY29sdW1uSWQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgZmlsdGVyTWV0aG9kID0gZ2V0RmlsdGVyTWV0aG9kKGNvbHVtbi5maWx0ZXIsIHVzZXJGaWx0ZXJUeXBlcyB8fCB7fSwgZmlsdGVyVHlwZXMpO1xuICAgICAgdmFyIHByZXZpb3VzZmlsdGVyID0gc3RhdGUuZmlsdGVycy5maW5kKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmlkID09PSBjb2x1bW5JZDtcbiAgICAgIH0pO1xuICAgICAgdmFyIG5ld0ZpbHRlciA9IGZ1bmN0aW9uYWxVcGRhdGUoZmlsdGVyVmFsdWUsIHByZXZpb3VzZmlsdGVyICYmIHByZXZpb3VzZmlsdGVyLnZhbHVlKTsgLy9cblxuICAgICAgaWYgKHNob3VsZEF1dG9SZW1vdmVGaWx0ZXIoZmlsdGVyTWV0aG9kLmF1dG9SZW1vdmUsIG5ld0ZpbHRlciwgY29sdW1uKSkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgICAgZmlsdGVyczogc3RhdGUuZmlsdGVycy5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkLmlkICE9PSBjb2x1bW5JZDtcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByZXZpb3VzZmlsdGVyKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBmaWx0ZXJzOiBzdGF0ZS5maWx0ZXJzLm1hcChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgaWYgKGQuaWQgPT09IGNvbHVtbklkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IGNvbHVtbklkLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXdGaWx0ZXJcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgZmlsdGVyczogW10uY29uY2F0KHN0YXRlLmZpbHRlcnMsIFt7XG4gICAgICAgICAgaWQ6IGNvbHVtbklkLFxuICAgICAgICAgIHZhbHVlOiBuZXdGaWx0ZXJcbiAgICAgICAgfV0pXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuc2V0QWxsRmlsdGVycykge1xuICAgICAgdmFyIGZpbHRlcnMgPSBhY3Rpb24uZmlsdGVycztcbiAgICAgIHZhciBfYWxsQ29sdW1ucyA9IGluc3RhbmNlLmFsbENvbHVtbnMsXG4gICAgICAgICAgX3VzZXJGaWx0ZXJUeXBlcyA9IGluc3RhbmNlLmZpbHRlclR5cGVzO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICAvLyBGaWx0ZXIgb3V0IHVuZGVmaW5lZCB2YWx1ZXNcbiAgICAgICAgZmlsdGVyczogZnVuY3Rpb25hbFVwZGF0ZShmaWx0ZXJzLCBzdGF0ZS5maWx0ZXJzKS5maWx0ZXIoZnVuY3Rpb24gKGZpbHRlcikge1xuICAgICAgICAgIHZhciBjb2x1bW4gPSBfYWxsQ29sdW1ucy5maW5kKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZC5pZCA9PT0gZmlsdGVyLmlkO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmFyIGZpbHRlck1ldGhvZCA9IGdldEZpbHRlck1ldGhvZChjb2x1bW4uZmlsdGVyLCBfdXNlckZpbHRlclR5cGVzIHx8IHt9LCBmaWx0ZXJUeXBlcyk7XG5cbiAgICAgICAgICBpZiAoc2hvdWxkQXV0b1JlbW92ZUZpbHRlcihmaWx0ZXJNZXRob2QuYXV0b1JlbW92ZSwgZmlsdGVyLnZhbHVlLCBjb2x1bW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1c2VJbnN0YW5jZSQyKGluc3RhbmNlKSB7XG4gICAgdmFyIGRhdGEgPSBpbnN0YW5jZS5kYXRhLFxuICAgICAgICByb3dzID0gaW5zdGFuY2Uucm93cyxcbiAgICAgICAgZmxhdFJvd3MgPSBpbnN0YW5jZS5mbGF0Um93cyxcbiAgICAgICAgcm93c0J5SWQgPSBpbnN0YW5jZS5yb3dzQnlJZCxcbiAgICAgICAgYWxsQ29sdW1ucyA9IGluc3RhbmNlLmFsbENvbHVtbnMsXG4gICAgICAgIHVzZXJGaWx0ZXJUeXBlcyA9IGluc3RhbmNlLmZpbHRlclR5cGVzLFxuICAgICAgICBtYW51YWxGaWx0ZXJzID0gaW5zdGFuY2UubWFudWFsRmlsdGVycyxcbiAgICAgICAgX2luc3RhbmNlJGRlZmF1bHRDYW5GID0gaW5zdGFuY2UuZGVmYXVsdENhbkZpbHRlcixcbiAgICAgICAgZGVmYXVsdENhbkZpbHRlciA9IF9pbnN0YW5jZSRkZWZhdWx0Q2FuRiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfaW5zdGFuY2UkZGVmYXVsdENhbkYsXG4gICAgICAgIGRpc2FibGVGaWx0ZXJzID0gaW5zdGFuY2UuZGlzYWJsZUZpbHRlcnMsXG4gICAgICAgIGZpbHRlcnMgPSBpbnN0YW5jZS5zdGF0ZS5maWx0ZXJzLFxuICAgICAgICBkaXNwYXRjaCA9IGluc3RhbmNlLmRpc3BhdGNoLFxuICAgICAgICBfaW5zdGFuY2UkYXV0b1Jlc2V0RmkgPSBpbnN0YW5jZS5hdXRvUmVzZXRGaWx0ZXJzLFxuICAgICAgICBhdXRvUmVzZXRGaWx0ZXJzID0gX2luc3RhbmNlJGF1dG9SZXNldEZpID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJGF1dG9SZXNldEZpO1xuICAgIHZhciBzZXRGaWx0ZXIgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoY29sdW1uSWQsIGZpbHRlclZhbHVlKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMuc2V0RmlsdGVyLFxuICAgICAgICBjb2x1bW5JZDogY29sdW1uSWQsXG4gICAgICAgIGZpbHRlclZhbHVlOiBmaWx0ZXJWYWx1ZVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgdmFyIHNldEFsbEZpbHRlcnMgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoZmlsdGVycykge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnNldEFsbEZpbHRlcnMsXG4gICAgICAgIGZpbHRlcnM6IGZpbHRlcnNcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgIGFsbENvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICB2YXIgaWQgPSBjb2x1bW4uaWQsXG4gICAgICAgICAgYWNjZXNzb3IgPSBjb2x1bW4uYWNjZXNzb3IsXG4gICAgICAgICAgY29sdW1uRGVmYXVsdENhbkZpbHRlciA9IGNvbHVtbi5kZWZhdWx0Q2FuRmlsdGVyLFxuICAgICAgICAgIGNvbHVtbkRpc2FibGVGaWx0ZXJzID0gY29sdW1uLmRpc2FibGVGaWx0ZXJzOyAvLyBEZXRlcm1pbmUgaWYgYSBjb2x1bW4gaXMgZmlsdGVyYWJsZVxuXG4gICAgICBjb2x1bW4uY2FuRmlsdGVyID0gYWNjZXNzb3IgPyBnZXRGaXJzdERlZmluZWQoY29sdW1uRGlzYWJsZUZpbHRlcnMgPT09IHRydWUgPyBmYWxzZSA6IHVuZGVmaW5lZCwgZGlzYWJsZUZpbHRlcnMgPT09IHRydWUgPyBmYWxzZSA6IHVuZGVmaW5lZCwgdHJ1ZSkgOiBnZXRGaXJzdERlZmluZWQoY29sdW1uRGVmYXVsdENhbkZpbHRlciwgZGVmYXVsdENhbkZpbHRlciwgZmFsc2UpOyAvLyBQcm92aWRlIHRoZSBjb2x1bW4gYSB3YXkgb2YgdXBkYXRpbmcgdGhlIGZpbHRlciB2YWx1ZVxuXG4gICAgICBjb2x1bW4uc2V0RmlsdGVyID0gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICByZXR1cm4gc2V0RmlsdGVyKGNvbHVtbi5pZCwgdmFsKTtcbiAgICAgIH07IC8vIFByb3ZpZGUgdGhlIGN1cnJlbnQgZmlsdGVyIHZhbHVlIHRvIHRoZSBjb2x1bW4gZm9yXG4gICAgICAvLyBjb252ZW5pZW5jZVxuXG5cbiAgICAgIHZhciBmb3VuZCA9IGZpbHRlcnMuZmluZChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5pZCA9PT0gaWQ7XG4gICAgICB9KTtcbiAgICAgIGNvbHVtbi5maWx0ZXJWYWx1ZSA9IGZvdW5kICYmIGZvdW5kLnZhbHVlO1xuICAgIH0pO1xuXG4gICAgdmFyIF9SZWFjdCR1c2VNZW1vID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAobWFudWFsRmlsdGVycyB8fCAhZmlsdGVycy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFtyb3dzLCBmbGF0Um93cywgcm93c0J5SWRdO1xuICAgICAgfVxuXG4gICAgICB2YXIgZmlsdGVyZWRGbGF0Um93cyA9IFtdO1xuICAgICAgdmFyIGZpbHRlcmVkUm93c0J5SWQgPSB7fTsgLy8gRmlsdGVycyB0b3AgbGV2ZWwgYW5kIG5lc3RlZCByb3dzXG5cbiAgICAgIHZhciBmaWx0ZXJSb3dzID0gZnVuY3Rpb24gZmlsdGVyUm93cyhyb3dzLCBkZXB0aCkge1xuICAgICAgICBpZiAoZGVwdGggPT09IHZvaWQgMCkge1xuICAgICAgICAgIGRlcHRoID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmaWx0ZXJlZFJvd3MgPSByb3dzO1xuICAgICAgICBmaWx0ZXJlZFJvd3MgPSBmaWx0ZXJzLnJlZHVjZShmdW5jdGlvbiAoZmlsdGVyZWRTb0ZhciwgX3JlZikge1xuICAgICAgICAgIHZhciBjb2x1bW5JZCA9IF9yZWYuaWQsXG4gICAgICAgICAgICAgIGZpbHRlclZhbHVlID0gX3JlZi52YWx1ZTtcbiAgICAgICAgICAvLyBGaW5kIHRoZSBmaWx0ZXJzIGNvbHVtblxuICAgICAgICAgIHZhciBjb2x1bW4gPSBhbGxDb2x1bW5zLmZpbmQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkLmlkID09PSBjb2x1bW5JZDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmICghY29sdW1uKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyZWRTb0ZhcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZGVwdGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbHVtbi5wcmVGaWx0ZXJlZFJvd3MgPSBmaWx0ZXJlZFNvRmFyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBmaWx0ZXJNZXRob2QgPSBnZXRGaWx0ZXJNZXRob2QoY29sdW1uLmZpbHRlciwgdXNlckZpbHRlclR5cGVzIHx8IHt9LCBmaWx0ZXJUeXBlcyk7XG5cbiAgICAgICAgICBpZiAoIWZpbHRlck1ldGhvZCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ291bGQgbm90IGZpbmQgYSB2YWxpZCAnY29sdW1uLmZpbHRlcicgZm9yIGNvbHVtbiB3aXRoIHRoZSBJRDogXCIgKyBjb2x1bW4uaWQgKyBcIi5cIik7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyZWRTb0ZhcjtcbiAgICAgICAgICB9IC8vIFBhc3MgdGhlIHJvd3MsIGlkLCBmaWx0ZXJWYWx1ZSBhbmQgY29sdW1uIHRvIHRoZSBmaWx0ZXJNZXRob2RcbiAgICAgICAgICAvLyB0byBnZXQgdGhlIGZpbHRlcmVkIHJvd3MgYmFja1xuXG5cbiAgICAgICAgICBjb2x1bW4uZmlsdGVyZWRSb3dzID0gZmlsdGVyTWV0aG9kKGZpbHRlcmVkU29GYXIsIFtjb2x1bW5JZF0sIGZpbHRlclZhbHVlKTtcbiAgICAgICAgICByZXR1cm4gY29sdW1uLmZpbHRlcmVkUm93cztcbiAgICAgICAgfSwgcm93cyk7IC8vIEFwcGx5IHRoZSBmaWx0ZXIgdG8gYW55IHN1YlJvd3NcbiAgICAgICAgLy8gV2UgdGVjaG5pY2FsbHkgY291bGQgZG8gdGhpcyByZWN1cnNpdmVseSBpbiB0aGUgYWJvdmUgbG9vcCxcbiAgICAgICAgLy8gYnV0IHRoYXQgd291bGQgc2V2ZXJlbHkgaGluZGVyIHRoZSBBUEkgZm9yIHRoZSB1c2VyLCBzaW5jZSB0aGV5XG4gICAgICAgIC8vIHdvdWxkIGJlIHJlcXVpcmVkIHRvIGRvIHRoYXQgcmVjdXJzaW9uIGluIHNvbWUgc2NlbmFyaW9zXG5cbiAgICAgICAgZmlsdGVyZWRSb3dzLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgIGZpbHRlcmVkRmxhdFJvd3MucHVzaChyb3cpO1xuICAgICAgICAgIGZpbHRlcmVkUm93c0J5SWRbcm93LmlkXSA9IHJvdztcblxuICAgICAgICAgIGlmICghcm93LnN1YlJvd3MpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3cuc3ViUm93cyA9IHJvdy5zdWJSb3dzICYmIHJvdy5zdWJSb3dzLmxlbmd0aCA+IDAgPyBmaWx0ZXJSb3dzKHJvdy5zdWJSb3dzLCBkZXB0aCArIDEpIDogcm93LnN1YlJvd3M7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmlsdGVyZWRSb3dzO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIFtmaWx0ZXJSb3dzKHJvd3MpLCBmaWx0ZXJlZEZsYXRSb3dzLCBmaWx0ZXJlZFJvd3NCeUlkXTtcbiAgICB9LCBbbWFudWFsRmlsdGVycywgZmlsdGVycywgcm93cywgZmxhdFJvd3MsIHJvd3NCeUlkLCBhbGxDb2x1bW5zLCB1c2VyRmlsdGVyVHlwZXNdKSxcbiAgICAgICAgZmlsdGVyZWRSb3dzID0gX1JlYWN0JHVzZU1lbW9bMF0sXG4gICAgICAgIGZpbHRlcmVkRmxhdFJvd3MgPSBfUmVhY3QkdXNlTWVtb1sxXSxcbiAgICAgICAgZmlsdGVyZWRSb3dzQnlJZCA9IF9SZWFjdCR1c2VNZW1vWzJdO1xuXG4gICAgUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBOb3cgdGhhdCBlYWNoIGZpbHRlcmVkIGNvbHVtbiBoYXMgaXQncyBwYXJ0aWFsbHkgZmlsdGVyZWQgcm93cyxcbiAgICAgIC8vIGxldHMgYXNzaWduIHRoZSBmaW5hbCBmaWx0ZXJlZCByb3dzIHRvIGFsbCBvZiB0aGUgb3RoZXIgY29sdW1uc1xuICAgICAgdmFyIG5vbkZpbHRlcmVkQ29sdW1ucyA9IGFsbENvbHVtbnMuZmlsdGVyKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgcmV0dXJuICFmaWx0ZXJzLmZpbmQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gZC5pZCA9PT0gY29sdW1uLmlkO1xuICAgICAgICB9KTtcbiAgICAgIH0pOyAvLyBUaGlzIGVzc2VudGlhbGx5IGVuYWJsZXMgZmFjZXRlZCBmaWx0ZXIgb3B0aW9ucyB0byBiZSBidWlsdCBlYXNpbHlcbiAgICAgIC8vIHVzaW5nIGV2ZXJ5IGNvbHVtbidzIHByZUZpbHRlcmVkUm93cyB2YWx1ZVxuXG4gICAgICBub25GaWx0ZXJlZENvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgIGNvbHVtbi5wcmVGaWx0ZXJlZFJvd3MgPSBmaWx0ZXJlZFJvd3M7XG4gICAgICAgIGNvbHVtbi5maWx0ZXJlZFJvd3MgPSBmaWx0ZXJlZFJvd3M7XG4gICAgICB9KTtcbiAgICB9LCBbZmlsdGVyZWRSb3dzLCBmaWx0ZXJzLCBhbGxDb2x1bW5zXSk7XG4gICAgdmFyIGdldEF1dG9SZXNldEZpbHRlcnMgPSB1c2VHZXRMYXRlc3QoYXV0b1Jlc2V0RmlsdGVycyk7XG4gICAgdXNlTW91bnRlZExheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZ2V0QXV0b1Jlc2V0RmlsdGVycygpKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb25zLnJlc2V0RmlsdGVyc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBbZGlzcGF0Y2gsIG1hbnVhbEZpbHRlcnMgPyBudWxsIDogZGF0YV0pO1xuICAgIE9iamVjdC5hc3NpZ24oaW5zdGFuY2UsIHtcbiAgICAgIHByZUZpbHRlcmVkUm93czogcm93cyxcbiAgICAgIHByZUZpbHRlcmVkRmxhdFJvd3M6IGZsYXRSb3dzLFxuICAgICAgcHJlRmlsdGVyZWRSb3dzQnlJZDogcm93c0J5SWQsXG4gICAgICBmaWx0ZXJlZFJvd3M6IGZpbHRlcmVkUm93cyxcbiAgICAgIGZpbHRlcmVkRmxhdFJvd3M6IGZpbHRlcmVkRmxhdFJvd3MsXG4gICAgICBmaWx0ZXJlZFJvd3NCeUlkOiBmaWx0ZXJlZFJvd3NCeUlkLFxuICAgICAgcm93czogZmlsdGVyZWRSb3dzLFxuICAgICAgZmxhdFJvd3M6IGZpbHRlcmVkRmxhdFJvd3MsXG4gICAgICByb3dzQnlJZDogZmlsdGVyZWRSb3dzQnlJZCxcbiAgICAgIHNldEZpbHRlcjogc2V0RmlsdGVyLFxuICAgICAgc2V0QWxsRmlsdGVyczogc2V0QWxsRmlsdGVyc1xuICAgIH0pO1xuICB9XG5cbiAgYWN0aW9ucy5yZXNldEdsb2JhbEZpbHRlciA9ICdyZXNldEdsb2JhbEZpbHRlcic7XG4gIGFjdGlvbnMuc2V0R2xvYmFsRmlsdGVyID0gJ3NldEdsb2JhbEZpbHRlcic7XG4gIHZhciB1c2VHbG9iYWxGaWx0ZXIgPSBmdW5jdGlvbiB1c2VHbG9iYWxGaWx0ZXIoaG9va3MpIHtcbiAgICBob29rcy5zdGF0ZVJlZHVjZXJzLnB1c2gocmVkdWNlciQzKTtcbiAgICBob29rcy51c2VJbnN0YW5jZS5wdXNoKHVzZUluc3RhbmNlJDMpO1xuICB9O1xuICB1c2VHbG9iYWxGaWx0ZXIucGx1Z2luTmFtZSA9ICd1c2VHbG9iYWxGaWx0ZXInO1xuXG4gIGZ1bmN0aW9uIHJlZHVjZXIkMyhzdGF0ZSwgYWN0aW9uLCBwcmV2aW91c1N0YXRlLCBpbnN0YW5jZSkge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5yZXNldEdsb2JhbEZpbHRlcikge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBnbG9iYWxGaWx0ZXI6IGluc3RhbmNlLmluaXRpYWxTdGF0ZS5nbG9iYWxGaWx0ZXIgfHwgdW5kZWZpbmVkXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuc2V0R2xvYmFsRmlsdGVyKSB7XG4gICAgICB2YXIgZmlsdGVyVmFsdWUgPSBhY3Rpb24uZmlsdGVyVmFsdWU7XG4gICAgICB2YXIgdXNlckZpbHRlclR5cGVzID0gaW5zdGFuY2UudXNlckZpbHRlclR5cGVzO1xuICAgICAgdmFyIGZpbHRlck1ldGhvZCA9IGdldEZpbHRlck1ldGhvZChpbnN0YW5jZS5nbG9iYWxGaWx0ZXIsIHVzZXJGaWx0ZXJUeXBlcyB8fCB7fSwgZmlsdGVyVHlwZXMpO1xuICAgICAgdmFyIG5ld0ZpbHRlciA9IGZ1bmN0aW9uYWxVcGRhdGUoZmlsdGVyVmFsdWUsIHN0YXRlLmdsb2JhbEZpbHRlcik7IC8vXG5cbiAgICAgIGlmIChzaG91bGRBdXRvUmVtb3ZlRmlsdGVyKGZpbHRlck1ldGhvZC5hdXRvUmVtb3ZlLCBuZXdGaWx0ZXIpKSB7XG4gICAgICAgIHZhciBnbG9iYWxGaWx0ZXIgPSBzdGF0ZS5nbG9iYWxGaWx0ZXIsXG4gICAgICAgICAgICBzdGF0ZVdpdGhvdXRHbG9iYWxGaWx0ZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzdGF0ZSwgW1wiZ2xvYmFsRmlsdGVyXCJdKTtcblxuICAgICAgICByZXR1cm4gc3RhdGVXaXRob3V0R2xvYmFsRmlsdGVyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGdsb2JhbEZpbHRlcjogbmV3RmlsdGVyXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1c2VJbnN0YW5jZSQzKGluc3RhbmNlKSB7XG4gICAgdmFyIGRhdGEgPSBpbnN0YW5jZS5kYXRhLFxuICAgICAgICByb3dzID0gaW5zdGFuY2Uucm93cyxcbiAgICAgICAgZmxhdFJvd3MgPSBpbnN0YW5jZS5mbGF0Um93cyxcbiAgICAgICAgcm93c0J5SWQgPSBpbnN0YW5jZS5yb3dzQnlJZCxcbiAgICAgICAgYWxsQ29sdW1ucyA9IGluc3RhbmNlLmFsbENvbHVtbnMsXG4gICAgICAgIHVzZXJGaWx0ZXJUeXBlcyA9IGluc3RhbmNlLmZpbHRlclR5cGVzLFxuICAgICAgICBnbG9iYWxGaWx0ZXIgPSBpbnN0YW5jZS5nbG9iYWxGaWx0ZXIsXG4gICAgICAgIG1hbnVhbEdsb2JhbEZpbHRlciA9IGluc3RhbmNlLm1hbnVhbEdsb2JhbEZpbHRlcixcbiAgICAgICAgZ2xvYmFsRmlsdGVyVmFsdWUgPSBpbnN0YW5jZS5zdGF0ZS5nbG9iYWxGaWx0ZXIsXG4gICAgICAgIGRpc3BhdGNoID0gaW5zdGFuY2UuZGlzcGF0Y2gsXG4gICAgICAgIF9pbnN0YW5jZSRhdXRvUmVzZXRHbCA9IGluc3RhbmNlLmF1dG9SZXNldEdsb2JhbEZpbHRlcixcbiAgICAgICAgYXV0b1Jlc2V0R2xvYmFsRmlsdGVyID0gX2luc3RhbmNlJGF1dG9SZXNldEdsID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJGF1dG9SZXNldEdsLFxuICAgICAgICBkaXNhYmxlR2xvYmFsRmlsdGVyID0gaW5zdGFuY2UuZGlzYWJsZUdsb2JhbEZpbHRlcjtcbiAgICB2YXIgc2V0R2xvYmFsRmlsdGVyID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGZpbHRlclZhbHVlKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMuc2V0R2xvYmFsRmlsdGVyLFxuICAgICAgICBmaWx0ZXJWYWx1ZTogZmlsdGVyVmFsdWVcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pOyAvLyBUT0RPOiBDcmVhdGUgYSBmaWx0ZXIgY2FjaGUgZm9yIGluY3JlbWVudGFsIGhpZ2ggc3BlZWQgbXVsdGktZmlsdGVyaW5nXG4gICAgLy8gVGhpcyBnZXRzIHByZXR0eSBjb21wbGljYXRlZCBwcmV0dHkgZmFzdCwgc2luY2UgeW91IGhhdmUgdG8gbWFpbnRhaW4gYVxuICAgIC8vIGNhY2hlIGZvciBlYWNoIHJvdyBncm91cCAodG9wLWxldmVsIHJvd3MsIGFuZCBlYWNoIHJvdydzIHJlY3Vyc2l2ZSBzdWJyb3dzKVxuICAgIC8vIFRoaXMgd291bGQgbWFrZSBtdWx0aS1maWx0ZXJpbmcgYSBsb3QgZmFzdGVyIHRob3VnaC4gVG9vIGZhcj9cblxuICAgIHZhciBfUmVhY3QkdXNlTWVtbyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG1hbnVhbEdsb2JhbEZpbHRlciB8fCB0eXBlb2YgZ2xvYmFsRmlsdGVyVmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBbcm93cywgZmxhdFJvd3MsIHJvd3NCeUlkXTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZpbHRlcmVkRmxhdFJvd3MgPSBbXTtcbiAgICAgIHZhciBmaWx0ZXJlZFJvd3NCeUlkID0ge307XG4gICAgICB2YXIgZmlsdGVyTWV0aG9kID0gZ2V0RmlsdGVyTWV0aG9kKGdsb2JhbEZpbHRlciwgdXNlckZpbHRlclR5cGVzIHx8IHt9LCBmaWx0ZXJUeXBlcyk7XG5cbiAgICAgIGlmICghZmlsdGVyTWV0aG9kKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIkNvdWxkIG5vdCBmaW5kIGEgdmFsaWQgJ2dsb2JhbEZpbHRlcicgb3B0aW9uLlwiKTtcbiAgICAgICAgcmV0dXJuIHJvd3M7XG4gICAgICB9XG5cbiAgICAgIGFsbENvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgIHZhciBjb2x1bW5EaXNhYmxlR2xvYmFsRmlsdGVyID0gY29sdW1uLmRpc2FibGVHbG9iYWxGaWx0ZXI7XG4gICAgICAgIGNvbHVtbi5jYW5GaWx0ZXIgPSBnZXRGaXJzdERlZmluZWQoY29sdW1uRGlzYWJsZUdsb2JhbEZpbHRlciA9PT0gdHJ1ZSA/IGZhbHNlIDogdW5kZWZpbmVkLCBkaXNhYmxlR2xvYmFsRmlsdGVyID09PSB0cnVlID8gZmFsc2UgOiB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgfSk7XG4gICAgICB2YXIgZmlsdGVyYWJsZUNvbHVtbnMgPSBhbGxDb2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgICAgICByZXR1cm4gYy5jYW5GaWx0ZXIgPT09IHRydWU7XG4gICAgICB9KTsgLy8gRmlsdGVycyB0b3AgbGV2ZWwgYW5kIG5lc3RlZCByb3dzXG5cbiAgICAgIHZhciBmaWx0ZXJSb3dzID0gZnVuY3Rpb24gZmlsdGVyUm93cyhmaWx0ZXJlZFJvd3MpIHtcbiAgICAgICAgZmlsdGVyZWRSb3dzID0gZmlsdGVyTWV0aG9kKGZpbHRlcmVkUm93cywgZmlsdGVyYWJsZUNvbHVtbnMubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIGQuaWQ7XG4gICAgICAgIH0pLCBnbG9iYWxGaWx0ZXJWYWx1ZSk7XG4gICAgICAgIGZpbHRlcmVkUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICBmaWx0ZXJlZEZsYXRSb3dzLnB1c2gocm93KTtcbiAgICAgICAgICBmaWx0ZXJlZFJvd3NCeUlkW3Jvdy5pZF0gPSByb3c7XG4gICAgICAgICAgcm93LnN1YlJvd3MgPSByb3cuc3ViUm93cyAmJiByb3cuc3ViUm93cy5sZW5ndGggPyBmaWx0ZXJSb3dzKHJvdy5zdWJSb3dzKSA6IHJvdy5zdWJSb3dzO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkUm93cztcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBbZmlsdGVyUm93cyhyb3dzKSwgZmlsdGVyZWRGbGF0Um93cywgZmlsdGVyZWRSb3dzQnlJZF07XG4gICAgfSwgW21hbnVhbEdsb2JhbEZpbHRlciwgZ2xvYmFsRmlsdGVyVmFsdWUsIGdsb2JhbEZpbHRlciwgdXNlckZpbHRlclR5cGVzLCBhbGxDb2x1bW5zLCByb3dzLCBmbGF0Um93cywgcm93c0J5SWQsIGRpc2FibGVHbG9iYWxGaWx0ZXJdKSxcbiAgICAgICAgZ2xvYmFsRmlsdGVyZWRSb3dzID0gX1JlYWN0JHVzZU1lbW9bMF0sXG4gICAgICAgIGdsb2JhbEZpbHRlcmVkRmxhdFJvd3MgPSBfUmVhY3QkdXNlTWVtb1sxXSxcbiAgICAgICAgZ2xvYmFsRmlsdGVyZWRSb3dzQnlJZCA9IF9SZWFjdCR1c2VNZW1vWzJdO1xuXG4gICAgdmFyIGdldEF1dG9SZXNldEdsb2JhbEZpbHRlciA9IHVzZUdldExhdGVzdChhdXRvUmVzZXRHbG9iYWxGaWx0ZXIpO1xuICAgIHVzZU1vdW50ZWRMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGdldEF1dG9SZXNldEdsb2JhbEZpbHRlcigpKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb25zLnJlc2V0R2xvYmFsRmlsdGVyXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIFtkaXNwYXRjaCwgbWFudWFsR2xvYmFsRmlsdGVyID8gbnVsbCA6IGRhdGFdKTtcbiAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCB7XG4gICAgICBwcmVHbG9iYWxGaWx0ZXJlZFJvd3M6IHJvd3MsXG4gICAgICBwcmVHbG9iYWxGaWx0ZXJlZEZsYXRSb3dzOiBmbGF0Um93cyxcbiAgICAgIHByZUdsb2JhbEZpbHRlcmVkUm93c0J5SWQ6IHJvd3NCeUlkLFxuICAgICAgZ2xvYmFsRmlsdGVyZWRSb3dzOiBnbG9iYWxGaWx0ZXJlZFJvd3MsXG4gICAgICBnbG9iYWxGaWx0ZXJlZEZsYXRSb3dzOiBnbG9iYWxGaWx0ZXJlZEZsYXRSb3dzLFxuICAgICAgZ2xvYmFsRmlsdGVyZWRSb3dzQnlJZDogZ2xvYmFsRmlsdGVyZWRSb3dzQnlJZCxcbiAgICAgIHJvd3M6IGdsb2JhbEZpbHRlcmVkUm93cyxcbiAgICAgIGZsYXRSb3dzOiBnbG9iYWxGaWx0ZXJlZEZsYXRSb3dzLFxuICAgICAgcm93c0J5SWQ6IGdsb2JhbEZpbHRlcmVkUm93c0J5SWQsXG4gICAgICBzZXRHbG9iYWxGaWx0ZXI6IHNldEdsb2JhbEZpbHRlcixcbiAgICAgIGRpc2FibGVHbG9iYWxGaWx0ZXI6IGRpc2FibGVHbG9iYWxGaWx0ZXJcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN1bSh2YWx1ZXMsIGFnZ3JlZ2F0ZWRWYWx1ZXMpIHtcbiAgICAvLyBJdCdzIGZhc3RlciB0byBqdXN0IGFkZCB0aGUgYWdncmVnYXRpb25zIHRvZ2V0aGVyIGluc3RlYWQgb2ZcbiAgICAvLyBwcm9jZXNzIGxlYWYgbm9kZXMgaW5kaXZpZHVhbGx5XG4gICAgcmV0dXJuIGFnZ3JlZ2F0ZWRWYWx1ZXMucmVkdWNlKGZ1bmN0aW9uIChzdW0sIG5leHQpIHtcbiAgICAgIHJldHVybiBzdW0gKyAodHlwZW9mIG5leHQgPT09ICdudW1iZXInID8gbmV4dCA6IDApO1xuICAgIH0sIDApO1xuICB9XG4gIGZ1bmN0aW9uIG1pbih2YWx1ZXMpIHtcbiAgICB2YXIgbWluID0gMDtcbiAgICB2YWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIG1pbiA9IE1hdGgubWluKG1pbiwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBtaW47XG4gIH1cbiAgZnVuY3Rpb24gbWF4KHZhbHVlcykge1xuICAgIHZhciBtYXggPSAwO1xuICAgIHZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgbWF4ID0gTWF0aC5tYXgobWF4LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG1heDtcbiAgfVxuICBmdW5jdGlvbiBtaW5NYXgodmFsdWVzKSB7XG4gICAgdmFyIG1pbiA9IDA7XG4gICAgdmFyIG1heCA9IDA7XG4gICAgdmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICBtaW4gPSBNYXRoLm1pbihtaW4sIHZhbHVlKTtcbiAgICAgICAgbWF4ID0gTWF0aC5tYXgobWF4LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG1pbiArIFwiLi5cIiArIG1heDtcbiAgfVxuICBmdW5jdGlvbiBhdmVyYWdlKHZhbHVlcykge1xuICAgIHJldHVybiBzdW0obnVsbCwgdmFsdWVzKSAvIHZhbHVlcy5sZW5ndGg7XG4gIH1cbiAgZnVuY3Rpb24gbWVkaWFuKHZhbHVlcykge1xuICAgIGlmICghdmFsdWVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1pbiA9IDA7XG4gICAgdmFyIG1heCA9IDA7XG4gICAgdmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICBtaW4gPSBNYXRoLm1pbihtaW4sIHZhbHVlKTtcbiAgICAgICAgbWF4ID0gTWF0aC5tYXgobWF4LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIChtaW4gKyBtYXgpIC8gMjtcbiAgfVxuICBmdW5jdGlvbiB1bmlxdWUodmFsdWVzKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldCh2YWx1ZXMpLnZhbHVlcygpKTtcbiAgfVxuICBmdW5jdGlvbiB1bmlxdWVDb3VudCh2YWx1ZXMpIHtcbiAgICByZXR1cm4gbmV3IFNldCh2YWx1ZXMpLnNpemU7XG4gIH1cbiAgZnVuY3Rpb24gY291bnQodmFsdWVzKSB7XG4gICAgcmV0dXJuIHZhbHVlcy5sZW5ndGg7XG4gIH1cblxuICB2YXIgYWdncmVnYXRpb25zID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICBzdW06IHN1bSxcbiAgICBtaW46IG1pbixcbiAgICBtYXg6IG1heCxcbiAgICBtaW5NYXg6IG1pbk1heCxcbiAgICBhdmVyYWdlOiBhdmVyYWdlLFxuICAgIG1lZGlhbjogbWVkaWFuLFxuICAgIHVuaXF1ZTogdW5pcXVlLFxuICAgIHVuaXF1ZUNvdW50OiB1bmlxdWVDb3VudCxcbiAgICBjb3VudDogY291bnRcbiAgfSk7XG5cbiAgdmFyIGVtcHR5QXJyYXkgPSBbXTtcbiAgdmFyIGVtcHR5T2JqZWN0ID0ge307IC8vIEFjdGlvbnNcblxuICBhY3Rpb25zLnJlc2V0R3JvdXBCeSA9ICdyZXNldEdyb3VwQnknO1xuICBhY3Rpb25zLnRvZ2dsZUdyb3VwQnkgPSAndG9nZ2xlR3JvdXBCeSc7XG4gIHZhciB1c2VHcm91cEJ5ID0gZnVuY3Rpb24gdXNlR3JvdXBCeShob29rcykge1xuICAgIGhvb2tzLmdldEdyb3VwQnlUb2dnbGVQcm9wcyA9IFtkZWZhdWx0R2V0R3JvdXBCeVRvZ2dsZVByb3BzXTtcbiAgICBob29rcy5zdGF0ZVJlZHVjZXJzLnB1c2gocmVkdWNlciQ0KTtcbiAgICBob29rcy52aXNpYmxlQ29sdW1uc0RlcHMucHVzaChmdW5jdGlvbiAoZGVwcywgX3JlZikge1xuICAgICAgdmFyIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZTtcbiAgICAgIHJldHVybiBbXS5jb25jYXQoZGVwcywgW2luc3RhbmNlLnN0YXRlLmdyb3VwQnldKTtcbiAgICB9KTtcbiAgICBob29rcy52aXNpYmxlQ29sdW1ucy5wdXNoKHZpc2libGVDb2x1bW5zKTtcbiAgICBob29rcy51c2VJbnN0YW5jZS5wdXNoKHVzZUluc3RhbmNlJDQpO1xuICAgIGhvb2tzLnByZXBhcmVSb3cucHVzaChwcmVwYXJlUm93JDEpO1xuICB9O1xuICB1c2VHcm91cEJ5LnBsdWdpbk5hbWUgPSAndXNlR3JvdXBCeSc7XG5cbiAgdmFyIGRlZmF1bHRHZXRHcm91cEJ5VG9nZ2xlUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0R3JvdXBCeVRvZ2dsZVByb3BzKHByb3BzLCBfcmVmMikge1xuICAgIHZhciBoZWFkZXIgPSBfcmVmMi5oZWFkZXI7XG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgb25DbGljazogaGVhZGVyLmNhbkdyb3VwQnkgPyBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnBlcnNpc3QoKTtcbiAgICAgICAgaGVhZGVyLnRvZ2dsZUdyb3VwQnkoKTtcbiAgICAgIH0gOiB1bmRlZmluZWQsXG4gICAgICBzdHlsZToge1xuICAgICAgICBjdXJzb3I6IGhlYWRlci5jYW5Hcm91cEJ5ID8gJ3BvaW50ZXInIDogdW5kZWZpbmVkXG4gICAgICB9LFxuICAgICAgdGl0bGU6ICdUb2dnbGUgR3JvdXBCeSdcbiAgICB9XTtcbiAgfTsgLy8gUmVkdWNlclxuXG5cbiAgZnVuY3Rpb24gcmVkdWNlciQ0KHN0YXRlLCBhY3Rpb24sIHByZXZpb3VzU3RhdGUsIGluc3RhbmNlKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmluaXQpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIGdyb3VwQnk6IFtdXG4gICAgICB9LCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnJlc2V0R3JvdXBCeSkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBncm91cEJ5OiBpbnN0YW5jZS5pbml0aWFsU3RhdGUuZ3JvdXBCeSB8fCBbXVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnRvZ2dsZUdyb3VwQnkpIHtcbiAgICAgIHZhciBjb2x1bW5JZCA9IGFjdGlvbi5jb2x1bW5JZCxcbiAgICAgICAgICBzZXRHcm91cEJ5ID0gYWN0aW9uLnZhbHVlO1xuICAgICAgdmFyIHJlc29sdmVkR3JvdXBCeSA9IHR5cGVvZiBzZXRHcm91cEJ5ICE9PSAndW5kZWZpbmVkJyA/IHNldEdyb3VwQnkgOiAhc3RhdGUuZ3JvdXBCeS5pbmNsdWRlcyhjb2x1bW5JZCk7XG5cbiAgICAgIGlmIChyZXNvbHZlZEdyb3VwQnkpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGdyb3VwQnk6IFtdLmNvbmNhdChzdGF0ZS5ncm91cEJ5LCBbY29sdW1uSWRdKVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBncm91cEJ5OiBzdGF0ZS5ncm91cEJ5LmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBkICE9PSBjb2x1bW5JZDtcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHZpc2libGVDb2x1bW5zKGNvbHVtbnMsIF9yZWYzKSB7XG4gICAgdmFyIGdyb3VwQnkgPSBfcmVmMy5pbnN0YW5jZS5zdGF0ZS5ncm91cEJ5O1xuICAgIC8vIFNvcnQgZ3JvdXBlZCBjb2x1bW5zIHRvIHRoZSBzdGFydCBvZiB0aGUgY29sdW1uIGxpc3RcbiAgICAvLyBiZWZvcmUgdGhlIGhlYWRlcnMgYXJlIGJ1aWx0XG4gICAgdmFyIGdyb3VwQnlDb2x1bW5zID0gZ3JvdXBCeS5tYXAoZnVuY3Rpb24gKGcpIHtcbiAgICAgIHJldHVybiBjb2x1bW5zLmZpbmQoZnVuY3Rpb24gKGNvbCkge1xuICAgICAgICByZXR1cm4gY29sLmlkID09PSBnO1xuICAgICAgfSk7XG4gICAgfSkuZmlsdGVyKEJvb2xlYW4pO1xuICAgIHZhciBub25Hcm91cEJ5Q29sdW1ucyA9IGNvbHVtbnMuZmlsdGVyKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgIHJldHVybiAhZ3JvdXBCeS5pbmNsdWRlcyhjb2wuaWQpO1xuICAgIH0pO1xuICAgIGNvbHVtbnMgPSBbXS5jb25jYXQoZ3JvdXBCeUNvbHVtbnMsIG5vbkdyb3VwQnlDb2x1bW5zKTtcbiAgICBjb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgY29sdW1uLmlzR3JvdXBlZCA9IGdyb3VwQnkuaW5jbHVkZXMoY29sdW1uLmlkKTtcbiAgICAgIGNvbHVtbi5ncm91cGVkSW5kZXggPSBncm91cEJ5LmluZGV4T2YoY29sdW1uLmlkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29sdW1ucztcbiAgfVxuXG4gIHZhciBkZWZhdWx0VXNlckFnZ3JlZ2F0aW9ucyA9IHt9O1xuXG4gIGZ1bmN0aW9uIHVzZUluc3RhbmNlJDQoaW5zdGFuY2UpIHtcbiAgICB2YXIgZGF0YSA9IGluc3RhbmNlLmRhdGEsXG4gICAgICAgIHJvd3MgPSBpbnN0YW5jZS5yb3dzLFxuICAgICAgICBmbGF0Um93cyA9IGluc3RhbmNlLmZsYXRSb3dzLFxuICAgICAgICByb3dzQnlJZCA9IGluc3RhbmNlLnJvd3NCeUlkLFxuICAgICAgICBhbGxDb2x1bW5zID0gaW5zdGFuY2UuYWxsQ29sdW1ucyxcbiAgICAgICAgZmxhdEhlYWRlcnMgPSBpbnN0YW5jZS5mbGF0SGVhZGVycyxcbiAgICAgICAgX2luc3RhbmNlJGdyb3VwQnlGbiA9IGluc3RhbmNlLmdyb3VwQnlGbixcbiAgICAgICAgZ3JvdXBCeUZuID0gX2luc3RhbmNlJGdyb3VwQnlGbiA9PT0gdm9pZCAwID8gZGVmYXVsdEdyb3VwQnlGbiA6IF9pbnN0YW5jZSRncm91cEJ5Rm4sXG4gICAgICAgIG1hbnVhbEdyb3VwQnkgPSBpbnN0YW5jZS5tYW51YWxHcm91cEJ5LFxuICAgICAgICBfaW5zdGFuY2UkYWdncmVnYXRpb24gPSBpbnN0YW5jZS5hZ2dyZWdhdGlvbnMsXG4gICAgICAgIHVzZXJBZ2dyZWdhdGlvbnMgPSBfaW5zdGFuY2UkYWdncmVnYXRpb24gPT09IHZvaWQgMCA/IGRlZmF1bHRVc2VyQWdncmVnYXRpb25zIDogX2luc3RhbmNlJGFnZ3JlZ2F0aW9uLFxuICAgICAgICBwbHVnaW5zID0gaW5zdGFuY2UucGx1Z2lucyxcbiAgICAgICAgZ3JvdXBCeSA9IGluc3RhbmNlLnN0YXRlLmdyb3VwQnksXG4gICAgICAgIGRpc3BhdGNoID0gaW5zdGFuY2UuZGlzcGF0Y2gsXG4gICAgICAgIF9pbnN0YW5jZSRhdXRvUmVzZXRHciA9IGluc3RhbmNlLmF1dG9SZXNldEdyb3VwQnksXG4gICAgICAgIGF1dG9SZXNldEdyb3VwQnkgPSBfaW5zdGFuY2UkYXV0b1Jlc2V0R3IgPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2UkYXV0b1Jlc2V0R3IsXG4gICAgICAgIGRpc2FibGVHcm91cEJ5ID0gaW5zdGFuY2UuZGlzYWJsZUdyb3VwQnksXG4gICAgICAgIGRlZmF1bHRDYW5Hcm91cEJ5ID0gaW5zdGFuY2UuZGVmYXVsdENhbkdyb3VwQnksXG4gICAgICAgIGdldEhvb2tzID0gaW5zdGFuY2UuZ2V0SG9va3M7XG4gICAgZW5zdXJlUGx1Z2luT3JkZXIocGx1Z2lucywgWyd1c2VGaWx0ZXJzJ10sICd1c2VHcm91cEJ5Jyk7XG4gICAgdmFyIGdldEluc3RhbmNlID0gdXNlR2V0TGF0ZXN0KGluc3RhbmNlKTtcbiAgICBhbGxDb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgdmFyIGFjY2Vzc29yID0gY29sdW1uLmFjY2Vzc29yLFxuICAgICAgICAgIGRlZmF1bHRDb2x1bW5Hcm91cEJ5ID0gY29sdW1uLmRlZmF1bHRHcm91cEJ5LFxuICAgICAgICAgIGNvbHVtbkRpc2FibGVHcm91cEJ5ID0gY29sdW1uLmRpc2FibGVHcm91cEJ5O1xuICAgICAgY29sdW1uLmNhbkdyb3VwQnkgPSBhY2Nlc3NvciA/IGdldEZpcnN0RGVmaW5lZChjb2x1bW4uY2FuR3JvdXBCeSwgY29sdW1uRGlzYWJsZUdyb3VwQnkgPT09IHRydWUgPyBmYWxzZSA6IHVuZGVmaW5lZCwgZGlzYWJsZUdyb3VwQnkgPT09IHRydWUgPyBmYWxzZSA6IHVuZGVmaW5lZCwgdHJ1ZSkgOiBnZXRGaXJzdERlZmluZWQoY29sdW1uLmNhbkdyb3VwQnksIGRlZmF1bHRDb2x1bW5Hcm91cEJ5LCBkZWZhdWx0Q2FuR3JvdXBCeSwgZmFsc2UpO1xuXG4gICAgICBpZiAoY29sdW1uLmNhbkdyb3VwQnkpIHtcbiAgICAgICAgY29sdW1uLnRvZ2dsZUdyb3VwQnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGluc3RhbmNlLnRvZ2dsZUdyb3VwQnkoY29sdW1uLmlkKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29sdW1uLkFnZ3JlZ2F0ZWQgPSBjb2x1bW4uQWdncmVnYXRlZCB8fCBjb2x1bW4uQ2VsbDtcbiAgICB9KTtcbiAgICB2YXIgdG9nZ2xlR3JvdXBCeSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChjb2x1bW5JZCwgdmFsdWUpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy50b2dnbGVHcm91cEJ5LFxuICAgICAgICBjb2x1bW5JZDogY29sdW1uSWQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgZmxhdEhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGVhZGVyKSB7XG4gICAgICBoZWFkZXIuZ2V0R3JvdXBCeVRvZ2dsZVByb3BzID0gbWFrZVByb3BHZXR0ZXIoZ2V0SG9va3MoKS5nZXRHcm91cEJ5VG9nZ2xlUHJvcHMsIHtcbiAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKCksXG4gICAgICAgIGhlYWRlcjogaGVhZGVyXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHZhciBfUmVhY3QkdXNlTWVtbyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG1hbnVhbEdyb3VwQnkgfHwgIWdyb3VwQnkubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBbcm93cywgZmxhdFJvd3MsIHJvd3NCeUlkLCBlbXB0eUFycmF5LCBlbXB0eU9iamVjdCwgZmxhdFJvd3MsIHJvd3NCeUlkXTtcbiAgICAgIH0gLy8gRW5zdXJlIHRoYXQgdGhlIGxpc3Qgb2YgZmlsdGVyZWQgY29sdW1ucyBleGlzdFxuXG5cbiAgICAgIHZhciBleGlzdGluZ0dyb3VwQnkgPSBncm91cEJ5LmZpbHRlcihmdW5jdGlvbiAoZykge1xuICAgICAgICByZXR1cm4gYWxsQ29sdW1ucy5maW5kKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgICByZXR1cm4gY29sLmlkID09PSBnO1xuICAgICAgICB9KTtcbiAgICAgIH0pOyAvLyBGaW5kIHRoZSBjb2x1bW5zIHRoYXQgY2FuIG9yIGFyZSBhZ2dyZWdhdGluZ1xuICAgICAgLy8gVXNlcyBlYWNoIGNvbHVtbiB0byBhZ2dyZWdhdGUgcm93cyBpbnRvIGEgc2luZ2xlIHZhbHVlXG5cbiAgICAgIHZhciBhZ2dyZWdhdGVSb3dzVG9WYWx1ZXMgPSBmdW5jdGlvbiBhZ2dyZWdhdGVSb3dzVG9WYWx1ZXMobGVhZlJvd3MsIGdyb3VwZWRSb3dzLCBkZXB0aCkge1xuICAgICAgICB2YXIgdmFsdWVzID0ge307XG4gICAgICAgIGFsbENvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgICAgLy8gRG9uJ3QgYWdncmVnYXRlIGNvbHVtbnMgdGhhdCBhcmUgaW4gdGhlIGdyb3VwQnlcbiAgICAgICAgICBpZiAoZXhpc3RpbmdHcm91cEJ5LmluY2x1ZGVzKGNvbHVtbi5pZCkpIHtcbiAgICAgICAgICAgIHZhbHVlc1tjb2x1bW4uaWRdID0gZ3JvdXBlZFJvd3NbMF0gPyBncm91cGVkUm93c1swXS52YWx1ZXNbY29sdW1uLmlkXSA6IG51bGw7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSAvLyBHZXQgdGhlIGNvbHVtblZhbHVlcyB0byBhZ2dyZWdhdGVcblxuXG4gICAgICAgICAgdmFyIGdyb3VwZWRWYWx1ZXMgPSBncm91cGVkUm93cy5tYXAoZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgcmV0dXJuIHJvdy52YWx1ZXNbY29sdW1uLmlkXTtcbiAgICAgICAgICB9KTsgLy8gR2V0IHRoZSBjb2x1bW5WYWx1ZXMgdG8gYWdncmVnYXRlXG5cbiAgICAgICAgICB2YXIgbGVhZlZhbHVlcyA9IGxlYWZSb3dzLm1hcChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICB2YXIgY29sdW1uVmFsdWUgPSByb3cudmFsdWVzW2NvbHVtbi5pZF07XG5cbiAgICAgICAgICAgIGlmICghZGVwdGggJiYgY29sdW1uLmFnZ3JlZ2F0ZVZhbHVlKSB7XG4gICAgICAgICAgICAgIHZhciBhZ2dyZWdhdGVWYWx1ZUZuID0gdHlwZW9mIGNvbHVtbi5hZ2dyZWdhdGVWYWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IGNvbHVtbi5hZ2dyZWdhdGVWYWx1ZSA6IHVzZXJBZ2dyZWdhdGlvbnNbY29sdW1uLmFnZ3JlZ2F0ZVZhbHVlXSB8fCBhZ2dyZWdhdGlvbnNbY29sdW1uLmFnZ3JlZ2F0ZVZhbHVlXTtcblxuICAgICAgICAgICAgICBpZiAoIWFnZ3JlZ2F0ZVZhbHVlRm4pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oe1xuICAgICAgICAgICAgICAgICAgY29sdW1uOiBjb2x1bW5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWFjdCBUYWJsZTogSW52YWxpZCBjb2x1bW4uYWdncmVnYXRlVmFsdWUgb3B0aW9uIGZvciBjb2x1bW4gbGlzdGVkIGFib3ZlXCIpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY29sdW1uVmFsdWUgPSBhZ2dyZWdhdGVWYWx1ZUZuKGNvbHVtblZhbHVlLCByb3csIGNvbHVtbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5WYWx1ZTtcbiAgICAgICAgICB9KTsgLy8gQWdncmVnYXRlIHRoZSB2YWx1ZXNcblxuICAgICAgICAgIHZhciBhZ2dyZWdhdGVGbiA9IHR5cGVvZiBjb2x1bW4uYWdncmVnYXRlID09PSAnZnVuY3Rpb24nID8gY29sdW1uLmFnZ3JlZ2F0ZSA6IHVzZXJBZ2dyZWdhdGlvbnNbY29sdW1uLmFnZ3JlZ2F0ZV0gfHwgYWdncmVnYXRpb25zW2NvbHVtbi5hZ2dyZWdhdGVdO1xuXG4gICAgICAgICAgaWYgKGFnZ3JlZ2F0ZUZuKSB7XG4gICAgICAgICAgICB2YWx1ZXNbY29sdW1uLmlkXSA9IGFnZ3JlZ2F0ZUZuKGxlYWZWYWx1ZXMsIGdyb3VwZWRWYWx1ZXMpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29sdW1uLmFnZ3JlZ2F0ZSkge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKHtcbiAgICAgICAgICAgICAgY29sdW1uOiBjb2x1bW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVhY3QgVGFibGU6IEludmFsaWQgY29sdW1uLmFnZ3JlZ2F0ZSBvcHRpb24gZm9yIGNvbHVtbiBsaXN0ZWQgYWJvdmVcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlc1tjb2x1bW4uaWRdID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgfTtcblxuICAgICAgdmFyIGdyb3VwZWRGbGF0Um93cyA9IFtdO1xuICAgICAgdmFyIGdyb3VwZWRSb3dzQnlJZCA9IHt9O1xuICAgICAgdmFyIG9ubHlHcm91cGVkRmxhdFJvd3MgPSBbXTtcbiAgICAgIHZhciBvbmx5R3JvdXBlZFJvd3NCeUlkID0ge307XG4gICAgICB2YXIgbm9uR3JvdXBlZEZsYXRSb3dzID0gW107XG4gICAgICB2YXIgbm9uR3JvdXBlZFJvd3NCeUlkID0ge307IC8vIFJlY3Vyc2l2ZWx5IGdyb3VwIHRoZSBkYXRhXG5cbiAgICAgIHZhciBncm91cFVwUmVjdXJzaXZlbHkgPSBmdW5jdGlvbiBncm91cFVwUmVjdXJzaXZlbHkocm93cywgZGVwdGgsIHBhcmVudElkKSB7XG4gICAgICAgIGlmIChkZXB0aCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgZGVwdGggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgbGFzdCBsZXZlbCwganVzdCByZXR1cm4gdGhlIHJvd3NcbiAgICAgICAgaWYgKGRlcHRoID09PSBleGlzdGluZ0dyb3VwQnkubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHJvd3M7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29sdW1uSWQgPSBleGlzdGluZ0dyb3VwQnlbZGVwdGhdOyAvLyBHcm91cCB0aGUgcm93cyB0b2dldGhlciBmb3IgdGhpcyBsZXZlbFxuXG4gICAgICAgIHZhciByb3dHcm91cHNNYXAgPSBncm91cEJ5Rm4ocm93cywgY29sdW1uSWQpOyAvLyBQZWZvcm0gYWdncmVnYXRpb25zIGZvciBlYWNoIGdyb3VwXG5cbiAgICAgICAgdmFyIGFnZ3JlZ2F0ZWRHcm91cGVkUm93cyA9IE9iamVjdC5lbnRyaWVzKHJvd0dyb3Vwc01hcCkubWFwKGZ1bmN0aW9uIChfcmVmNCwgaW5kZXgpIHtcbiAgICAgICAgICB2YXIgZ3JvdXBCeVZhbCA9IF9yZWY0WzBdLFxuICAgICAgICAgICAgICBncm91cGVkUm93cyA9IF9yZWY0WzFdO1xuICAgICAgICAgIHZhciBpZCA9IGNvbHVtbklkICsgXCI6XCIgKyBncm91cEJ5VmFsO1xuICAgICAgICAgIGlkID0gcGFyZW50SWQgPyBwYXJlbnRJZCArIFwiPlwiICsgaWQgOiBpZDsgLy8gRmlyc3QsIFJlY3Vyc2UgdG8gZ3JvdXAgc3ViIHJvd3MgYmVmb3JlIGFnZ3JlZ2F0aW9uXG5cbiAgICAgICAgICB2YXIgc3ViUm93cyA9IGdyb3VwVXBSZWN1cnNpdmVseShncm91cGVkUm93cywgZGVwdGggKyAxLCBpZCk7IC8vIEZsYXR0ZW4gdGhlIGxlYWYgcm93cyBvZiB0aGUgcm93cyBpbiB0aGlzIGdyb3VwXG5cbiAgICAgICAgICB2YXIgbGVhZlJvd3MgPSBkZXB0aCA/IGZsYXR0ZW5CeShncm91cGVkUm93cywgJ2xlYWZSb3dzJykgOiBncm91cGVkUm93cztcbiAgICAgICAgICB2YXIgdmFsdWVzID0gYWdncmVnYXRlUm93c1RvVmFsdWVzKGxlYWZSb3dzLCBncm91cGVkUm93cywgZGVwdGgpO1xuICAgICAgICAgIHZhciByb3cgPSB7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICBpc0dyb3VwZWQ6IHRydWUsXG4gICAgICAgICAgICBncm91cEJ5SUQ6IGNvbHVtbklkLFxuICAgICAgICAgICAgZ3JvdXBCeVZhbDogZ3JvdXBCeVZhbCxcbiAgICAgICAgICAgIHZhbHVlczogdmFsdWVzLFxuICAgICAgICAgICAgc3ViUm93czogc3ViUm93cyxcbiAgICAgICAgICAgIGxlYWZSb3dzOiBsZWFmUm93cyxcbiAgICAgICAgICAgIGRlcHRoOiBkZXB0aCxcbiAgICAgICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgICAgIH07XG4gICAgICAgICAgc3ViUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChzdWJSb3cpIHtcbiAgICAgICAgICAgIGdyb3VwZWRGbGF0Um93cy5wdXNoKHN1YlJvdyk7XG4gICAgICAgICAgICBncm91cGVkUm93c0J5SWRbc3ViUm93LmlkXSA9IHN1YlJvdztcblxuICAgICAgICAgICAgaWYgKHN1YlJvdy5pc0dyb3VwZWQpIHtcbiAgICAgICAgICAgICAgb25seUdyb3VwZWRGbGF0Um93cy5wdXNoKHN1YlJvdyk7XG4gICAgICAgICAgICAgIG9ubHlHcm91cGVkUm93c0J5SWRbc3ViUm93LmlkXSA9IHN1YlJvdztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5vbkdyb3VwZWRGbGF0Um93cy5wdXNoKHN1YlJvdyk7XG4gICAgICAgICAgICAgIG5vbkdyb3VwZWRSb3dzQnlJZFtzdWJSb3cuaWRdID0gc3ViUm93O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiByb3c7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWdncmVnYXRlZEdyb3VwZWRSb3dzO1xuICAgICAgfTtcblxuICAgICAgdmFyIGdyb3VwZWRSb3dzID0gZ3JvdXBVcFJlY3Vyc2l2ZWx5KHJvd3MpO1xuICAgICAgZ3JvdXBlZFJvd3MuZm9yRWFjaChmdW5jdGlvbiAoc3ViUm93KSB7XG4gICAgICAgIGdyb3VwZWRGbGF0Um93cy5wdXNoKHN1YlJvdyk7XG4gICAgICAgIGdyb3VwZWRSb3dzQnlJZFtzdWJSb3cuaWRdID0gc3ViUm93O1xuXG4gICAgICAgIGlmIChzdWJSb3cuaXNHcm91cGVkKSB7XG4gICAgICAgICAgb25seUdyb3VwZWRGbGF0Um93cy5wdXNoKHN1YlJvdyk7XG4gICAgICAgICAgb25seUdyb3VwZWRSb3dzQnlJZFtzdWJSb3cuaWRdID0gc3ViUm93O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vbkdyb3VwZWRGbGF0Um93cy5wdXNoKHN1YlJvdyk7XG4gICAgICAgICAgbm9uR3JvdXBlZFJvd3NCeUlkW3N1YlJvdy5pZF0gPSBzdWJSb3c7XG4gICAgICAgIH1cbiAgICAgIH0pOyAvLyBBc3NpZ24gdGhlIG5ldyBkYXRhXG5cbiAgICAgIHJldHVybiBbZ3JvdXBlZFJvd3MsIGdyb3VwZWRGbGF0Um93cywgZ3JvdXBlZFJvd3NCeUlkLCBvbmx5R3JvdXBlZEZsYXRSb3dzLCBvbmx5R3JvdXBlZFJvd3NCeUlkLCBub25Hcm91cGVkRmxhdFJvd3MsIG5vbkdyb3VwZWRSb3dzQnlJZF07XG4gICAgfSwgW21hbnVhbEdyb3VwQnksIGdyb3VwQnksIHJvd3MsIGZsYXRSb3dzLCByb3dzQnlJZCwgYWxsQ29sdW1ucywgdXNlckFnZ3JlZ2F0aW9ucywgZ3JvdXBCeUZuXSksXG4gICAgICAgIGdyb3VwZWRSb3dzID0gX1JlYWN0JHVzZU1lbW9bMF0sXG4gICAgICAgIGdyb3VwZWRGbGF0Um93cyA9IF9SZWFjdCR1c2VNZW1vWzFdLFxuICAgICAgICBncm91cGVkUm93c0J5SWQgPSBfUmVhY3QkdXNlTWVtb1syXSxcbiAgICAgICAgb25seUdyb3VwZWRGbGF0Um93cyA9IF9SZWFjdCR1c2VNZW1vWzNdLFxuICAgICAgICBvbmx5R3JvdXBlZFJvd3NCeUlkID0gX1JlYWN0JHVzZU1lbW9bNF0sXG4gICAgICAgIG5vbkdyb3VwZWRGbGF0Um93cyA9IF9SZWFjdCR1c2VNZW1vWzVdLFxuICAgICAgICBub25Hcm91cGVkUm93c0J5SWQgPSBfUmVhY3QkdXNlTWVtb1s2XTtcblxuICAgIHZhciBnZXRBdXRvUmVzZXRHcm91cEJ5ID0gdXNlR2V0TGF0ZXN0KGF1dG9SZXNldEdyb3VwQnkpO1xuICAgIHVzZU1vdW50ZWRMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGdldEF1dG9SZXNldEdyb3VwQnkoKSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogYWN0aW9ucy5yZXNldEdyb3VwQnlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgW2Rpc3BhdGNoLCBtYW51YWxHcm91cEJ5ID8gbnVsbCA6IGRhdGFdKTtcbiAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCB7XG4gICAgICBwcmVHcm91cGVkUm93czogcm93cyxcbiAgICAgIHByZUdyb3VwZWRGbGF0Um93OiBmbGF0Um93cyxcbiAgICAgIHByZUdyb3VwZWRSb3dzQnlJZDogcm93c0J5SWQsXG4gICAgICBncm91cGVkUm93czogZ3JvdXBlZFJvd3MsXG4gICAgICBncm91cGVkRmxhdFJvd3M6IGdyb3VwZWRGbGF0Um93cyxcbiAgICAgIGdyb3VwZWRSb3dzQnlJZDogZ3JvdXBlZFJvd3NCeUlkLFxuICAgICAgb25seUdyb3VwZWRGbGF0Um93czogb25seUdyb3VwZWRGbGF0Um93cyxcbiAgICAgIG9ubHlHcm91cGVkUm93c0J5SWQ6IG9ubHlHcm91cGVkUm93c0J5SWQsXG4gICAgICBub25Hcm91cGVkRmxhdFJvd3M6IG5vbkdyb3VwZWRGbGF0Um93cyxcbiAgICAgIG5vbkdyb3VwZWRSb3dzQnlJZDogbm9uR3JvdXBlZFJvd3NCeUlkLFxuICAgICAgcm93czogZ3JvdXBlZFJvd3MsXG4gICAgICBmbGF0Um93czogZ3JvdXBlZEZsYXRSb3dzLFxuICAgICAgcm93c0J5SWQ6IGdyb3VwZWRSb3dzQnlJZCxcbiAgICAgIHRvZ2dsZUdyb3VwQnk6IHRvZ2dsZUdyb3VwQnlcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXBhcmVSb3ckMShyb3cpIHtcbiAgICByb3cuYWxsQ2VsbHMuZm9yRWFjaChmdW5jdGlvbiAoY2VsbCkge1xuICAgICAgLy8gR3JvdXBlZCBjZWxscyBhcmUgaW4gdGhlIGdyb3VwQnkgYW5kIHRoZSBwaXZvdCBjZWxsIGZvciB0aGUgcm93XG4gICAgICBjZWxsLmlzR3JvdXBlZCA9IGNlbGwuY29sdW1uLmlzR3JvdXBlZCAmJiBjZWxsLmNvbHVtbi5pZCA9PT0gcm93Lmdyb3VwQnlJRDsgLy8gUGxhY2Vob2xkZXIgY2VsbHMgYXJlIGFueSBjb2x1bW5zIGluIHRoZSBncm91cEJ5IHRoYXQgYXJlIG5vdCBncm91cGVkXG5cbiAgICAgIGNlbGwuaXNQbGFjZWhvbGRlciA9ICFjZWxsLmlzR3JvdXBlZCAmJiBjZWxsLmNvbHVtbi5pc0dyb3VwZWQ7IC8vIEFnZ3JlZ2F0ZWQgY2VsbHMgYXJlIG5vdCBncm91cGVkLCBub3QgcmVwZWF0ZWQsIGJ1dCBzdGlsbCBoYXZlIHN1YlJvd3NcblxuICAgICAgY2VsbC5pc0FnZ3JlZ2F0ZWQgPSAhY2VsbC5pc0dyb3VwZWQgJiYgIWNlbGwuaXNQbGFjZWhvbGRlciAmJiByb3cuY2FuRXhwYW5kO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVmYXVsdEdyb3VwQnlGbihyb3dzLCBjb2x1bW5JZCkge1xuICAgIHJldHVybiByb3dzLnJlZHVjZShmdW5jdGlvbiAocHJldiwgcm93LCBpKSB7XG4gICAgICAvLyBUT0RPOiBNaWdodCB3YW50IHRvIGltcGxlbWVudCBhIGtleSBzZXJpYWxpemVyIGhlcmUgc29cbiAgICAgIC8vIGlycmVndWxhciBjb2x1bW4gdmFsdWVzIGNhbiBzdGlsbCBiZSBncm91cGVkIGlmIG5lZWRlZD9cbiAgICAgIHZhciByZXNLZXkgPSBcIlwiICsgcm93LnZhbHVlc1tjb2x1bW5JZF07XG4gICAgICBwcmV2W3Jlc0tleV0gPSBBcnJheS5pc0FycmF5KHByZXZbcmVzS2V5XSkgPyBwcmV2W3Jlc0tleV0gOiBbXTtcbiAgICAgIHByZXZbcmVzS2V5XS5wdXNoKHJvdyk7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9LCB7fSk7XG4gIH1cblxuICB2YXIgcmVTcGxpdEFscGhhTnVtZXJpYyA9IC8oWzAtOV0rKS9nbTsgLy8gTWl4ZWQgc29ydGluZyBpcyBzbG93LCBidXQgdmVyeSBpbmNsdXNpdmUgb2YgbWFueSBlZGdlIGNhc2VzLlxuICAvLyBJdCBoYW5kbGVzIG51bWJlcnMsIG1peGVkIGFscGhhbnVtZXJpYyBjb21iaW5hdGlvbnMsIGFuZCBldmVuXG4gIC8vIG51bGwsIHVuZGVmaW5lZCwgYW5kIEluZmluaXR5XG5cbiAgdmFyIGFscGhhbnVtZXJpYyA9IGZ1bmN0aW9uIGFscGhhbnVtZXJpYyhyb3dBLCByb3dCLCBjb2x1bW5JZCkge1xuICAgIHZhciBhID0gZ2V0Um93VmFsdWVCeUNvbHVtbklEKHJvd0EsIGNvbHVtbklkKTtcbiAgICB2YXIgYiA9IGdldFJvd1ZhbHVlQnlDb2x1bW5JRChyb3dCLCBjb2x1bW5JZCk7IC8vIEZvcmNlIHRvIHN0cmluZ3MgKG9yIFwiXCIgZm9yIHVuc3VwcG9ydGVkIHR5cGVzKVxuXG4gICAgYSA9IHRvU3RyaW5nKGEpO1xuICAgIGIgPSB0b1N0cmluZyhiKTsgLy8gU3BsaXQgb24gbnVtYmVyIGdyb3VwcywgYnV0IGtlZXAgdGhlIGRlbGltaXRlclxuICAgIC8vIFRoZW4gcmVtb3ZlIGZhbHNleSBzcGxpdCB2YWx1ZXNcblxuICAgIGEgPSBhLnNwbGl0KHJlU3BsaXRBbHBoYU51bWVyaWMpLmZpbHRlcihCb29sZWFuKTtcbiAgICBiID0gYi5zcGxpdChyZVNwbGl0QWxwaGFOdW1lcmljKS5maWx0ZXIoQm9vbGVhbik7IC8vIFdoaWxlXG5cbiAgICB3aGlsZSAoYS5sZW5ndGggJiYgYi5sZW5ndGgpIHtcbiAgICAgIHZhciBhYSA9IGEuc2hpZnQoKTtcbiAgICAgIHZhciBiYiA9IGIuc2hpZnQoKTtcbiAgICAgIHZhciBhbiA9IHBhcnNlSW50KGFhLCAxMCk7XG4gICAgICB2YXIgYm4gPSBwYXJzZUludChiYiwgMTApO1xuICAgICAgdmFyIGNvbWJvID0gW2FuLCBibl0uc29ydCgpOyAvLyBCb3RoIGFyZSBzdHJpbmdcblxuICAgICAgaWYgKGlzTmFOKGNvbWJvWzBdKSkge1xuICAgICAgICBpZiAoYWEgPiBiYikge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJiID4gYWEpIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gLy8gT25lIGlzIGEgc3RyaW5nLCBvbmUgaXMgYSBudW1iZXJcblxuXG4gICAgICBpZiAoaXNOYU4oY29tYm9bMV0pKSB7XG4gICAgICAgIHJldHVybiBpc05hTihhbikgPyAtMSA6IDE7XG4gICAgICB9IC8vIEJvdGggYXJlIG51bWJlcnNcblxuXG4gICAgICBpZiAoYW4gPiBibikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cblxuICAgICAgaWYgKGJuID4gYW4pIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhLmxlbmd0aCAtIGIubGVuZ3RoO1xuICB9O1xuICBmdW5jdGlvbiBkYXRldGltZShyb3dBLCByb3dCLCBjb2x1bW5JZCkge1xuICAgIHZhciBhID0gZ2V0Um93VmFsdWVCeUNvbHVtbklEKHJvd0EsIGNvbHVtbklkKTtcbiAgICB2YXIgYiA9IGdldFJvd1ZhbHVlQnlDb2x1bW5JRChyb3dCLCBjb2x1bW5JZCk7XG4gICAgYSA9IGEuZ2V0VGltZSgpO1xuICAgIGIgPSBiLmdldFRpbWUoKTtcbiAgICByZXR1cm4gY29tcGFyZUJhc2ljKGEsIGIpO1xuICB9XG4gIGZ1bmN0aW9uIGJhc2ljKHJvd0EsIHJvd0IsIGNvbHVtbklkKSB7XG4gICAgdmFyIGEgPSBnZXRSb3dWYWx1ZUJ5Q29sdW1uSUQocm93QSwgY29sdW1uSWQpO1xuICAgIHZhciBiID0gZ2V0Um93VmFsdWVCeUNvbHVtbklEKHJvd0IsIGNvbHVtbklkKTtcbiAgICByZXR1cm4gY29tcGFyZUJhc2ljKGEsIGIpO1xuICB9IC8vIFV0aWxzXG5cbiAgZnVuY3Rpb24gY29tcGFyZUJhc2ljKGEsIGIpIHtcbiAgICByZXR1cm4gYSA9PT0gYiA/IDAgOiBhID4gYiA/IDEgOiAtMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFJvd1ZhbHVlQnlDb2x1bW5JRChyb3csIGNvbHVtbklkKSB7XG4gICAgcmV0dXJuIHJvdy52YWx1ZXNbY29sdW1uSWRdO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9TdHJpbmcoYSkge1xuICAgIGlmICh0eXBlb2YgYSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGlmIChpc05hTihhKSB8fCBhID09PSBJbmZpbml0eSB8fCBhID09PSAtSW5maW5pdHkpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gU3RyaW5nKGEpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBhO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHZhciBzb3J0VHlwZXMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgX19wcm90b19fOiBudWxsLFxuICAgIGFscGhhbnVtZXJpYzogYWxwaGFudW1lcmljLFxuICAgIGRhdGV0aW1lOiBkYXRldGltZSxcbiAgICBiYXNpYzogYmFzaWNcbiAgfSk7XG5cbiAgYWN0aW9ucy5yZXNldFNvcnRCeSA9ICdyZXNldFNvcnRCeSc7XG4gIGFjdGlvbnMudG9nZ2xlU29ydEJ5ID0gJ3RvZ2dsZVNvcnRCeSc7XG4gIGFjdGlvbnMuY2xlYXJTb3J0QnkgPSAnY2xlYXJTb3J0QnknO1xuICBkZWZhdWx0Q29sdW1uLnNvcnRUeXBlID0gJ2FscGhhbnVtZXJpYyc7XG4gIGRlZmF1bHRDb2x1bW4uc29ydERlc2NGaXJzdCA9IGZhbHNlO1xuICB2YXIgdXNlU29ydEJ5ID0gZnVuY3Rpb24gdXNlU29ydEJ5KGhvb2tzKSB7XG4gICAgaG9va3MuZ2V0U29ydEJ5VG9nZ2xlUHJvcHMgPSBbZGVmYXVsdEdldFNvcnRCeVRvZ2dsZVByb3BzXTtcbiAgICBob29rcy5zdGF0ZVJlZHVjZXJzLnB1c2gocmVkdWNlciQ1KTtcbiAgICBob29rcy51c2VJbnN0YW5jZS5wdXNoKHVzZUluc3RhbmNlJDUpO1xuICB9O1xuICB1c2VTb3J0QnkucGx1Z2luTmFtZSA9ICd1c2VTb3J0QnknO1xuXG4gIHZhciBkZWZhdWx0R2V0U29ydEJ5VG9nZ2xlUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0U29ydEJ5VG9nZ2xlUHJvcHMocHJvcHMsIF9yZWYpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlLFxuICAgICAgICBjb2x1bW4gPSBfcmVmLmNvbHVtbjtcbiAgICB2YXIgX2luc3RhbmNlJGlzTXVsdGlTb3J0ID0gaW5zdGFuY2UuaXNNdWx0aVNvcnRFdmVudCxcbiAgICAgICAgaXNNdWx0aVNvcnRFdmVudCA9IF9pbnN0YW5jZSRpc011bHRpU29ydCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlLnNoaWZ0S2V5O1xuICAgIH0gOiBfaW5zdGFuY2UkaXNNdWx0aVNvcnQ7XG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgb25DbGljazogY29sdW1uLmNhblNvcnQgPyBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnBlcnNpc3QoKTtcbiAgICAgICAgY29sdW1uLnRvZ2dsZVNvcnRCeSh1bmRlZmluZWQsICFpbnN0YW5jZS5kaXNhYmxlTXVsdGlTb3J0ICYmIGlzTXVsdGlTb3J0RXZlbnQoZSkpO1xuICAgICAgfSA6IHVuZGVmaW5lZCxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGN1cnNvcjogY29sdW1uLmNhblNvcnQgPyAncG9pbnRlcicgOiB1bmRlZmluZWRcbiAgICAgIH0sXG4gICAgICB0aXRsZTogY29sdW1uLmNhblNvcnQgPyAnVG9nZ2xlIFNvcnRCeScgOiB1bmRlZmluZWRcbiAgICB9XTtcbiAgfTsgLy8gUmVkdWNlclxuXG5cbiAgZnVuY3Rpb24gcmVkdWNlciQ1KHN0YXRlLCBhY3Rpb24sIHByZXZpb3VzU3RhdGUsIGluc3RhbmNlKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmluaXQpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIHNvcnRCeTogW11cbiAgICAgIH0sIHN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMucmVzZXRTb3J0QnkpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgc29ydEJ5OiBpbnN0YW5jZS5pbml0aWFsU3RhdGUuc29ydEJ5IHx8IFtdXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuY2xlYXJTb3J0QnkpIHtcbiAgICAgIHZhciBzb3J0QnkgPSBzdGF0ZS5zb3J0Qnk7XG4gICAgICB2YXIgbmV3U29ydEJ5ID0gc29ydEJ5LmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5pZCAhPT0gYWN0aW9uLmNvbHVtbklkO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHNvcnRCeTogbmV3U29ydEJ5XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMudG9nZ2xlU29ydEJ5KSB7XG4gICAgICB2YXIgY29sdW1uSWQgPSBhY3Rpb24uY29sdW1uSWQsXG4gICAgICAgICAgZGVzYyA9IGFjdGlvbi5kZXNjLFxuICAgICAgICAgIG11bHRpID0gYWN0aW9uLm11bHRpO1xuICAgICAgdmFyIGFsbENvbHVtbnMgPSBpbnN0YW5jZS5hbGxDb2x1bW5zLFxuICAgICAgICAgIGRpc2FibGVNdWx0aVNvcnQgPSBpbnN0YW5jZS5kaXNhYmxlTXVsdGlTb3J0LFxuICAgICAgICAgIGRpc2FibGVTb3J0UmVtb3ZlID0gaW5zdGFuY2UuZGlzYWJsZVNvcnRSZW1vdmUsXG4gICAgICAgICAgZGlzYWJsZU11bHRpUmVtb3ZlID0gaW5zdGFuY2UuZGlzYWJsZU11bHRpUmVtb3ZlLFxuICAgICAgICAgIF9pbnN0YW5jZSRtYXhNdWx0aVNvciA9IGluc3RhbmNlLm1heE11bHRpU29ydENvbENvdW50LFxuICAgICAgICAgIG1heE11bHRpU29ydENvbENvdW50ID0gX2luc3RhbmNlJG1heE11bHRpU29yID09PSB2b2lkIDAgPyBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiA6IF9pbnN0YW5jZSRtYXhNdWx0aVNvcjtcbiAgICAgIHZhciBfc29ydEJ5ID0gc3RhdGUuc29ydEJ5OyAvLyBGaW5kIHRoZSBjb2x1bW4gZm9yIHRoaXMgY29sdW1uSWRcblxuICAgICAgdmFyIGNvbHVtbiA9IGFsbENvbHVtbnMuZmluZChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5pZCA9PT0gY29sdW1uSWQ7XG4gICAgICB9KTtcbiAgICAgIHZhciBzb3J0RGVzY0ZpcnN0ID0gY29sdW1uLnNvcnREZXNjRmlyc3Q7IC8vIEZpbmQgYW55IGV4aXN0aW5nIHNvcnRCeSBmb3IgdGhpcyBjb2x1bW5cblxuICAgICAgdmFyIGV4aXN0aW5nU29ydEJ5ID0gX3NvcnRCeS5maW5kKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmlkID09PSBjb2x1bW5JZDtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgZXhpc3RpbmdJbmRleCA9IF9zb3J0QnkuZmluZEluZGV4KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmlkID09PSBjb2x1bW5JZDtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgaGFzRGVzY0RlZmluZWQgPSB0eXBlb2YgZGVzYyAhPT0gJ3VuZGVmaW5lZCcgJiYgZGVzYyAhPT0gbnVsbDtcbiAgICAgIHZhciBfbmV3U29ydEJ5ID0gW107IC8vIFdoYXQgc2hvdWxkIHdlIGRvIHdpdGggdGhpcyBzb3J0IGFjdGlvbj9cblxuICAgICAgdmFyIHNvcnRBY3Rpb247XG5cbiAgICAgIGlmICghZGlzYWJsZU11bHRpU29ydCAmJiBtdWx0aSkge1xuICAgICAgICBpZiAoZXhpc3RpbmdTb3J0QnkpIHtcbiAgICAgICAgICBzb3J0QWN0aW9uID0gJ3RvZ2dsZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc29ydEFjdGlvbiA9ICdhZGQnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBOb3JtYWwgbW9kZVxuICAgICAgICBpZiAoZXhpc3RpbmdJbmRleCAhPT0gX3NvcnRCeS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgc29ydEFjdGlvbiA9ICdyZXBsYWNlJztcbiAgICAgICAgfSBlbHNlIGlmIChleGlzdGluZ1NvcnRCeSkge1xuICAgICAgICAgIHNvcnRBY3Rpb24gPSAndG9nZ2xlJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzb3J0QWN0aW9uID0gJ3JlcGxhY2UnO1xuICAgICAgICB9XG4gICAgICB9IC8vIEhhbmRsZSB0b2dnbGUgc3RhdGVzIHRoYXQgd2lsbCByZW1vdmUgdGhlIHNvcnRCeVxuXG5cbiAgICAgIGlmIChzb3J0QWN0aW9uID09PSAndG9nZ2xlJyAmJiAvLyBNdXN0IGJlIHRvZ2dsaW5nXG4gICAgICAhZGlzYWJsZVNvcnRSZW1vdmUgJiYgLy8gSWYgZGlzYWJsZVNvcnRSZW1vdmUsIGRpc2FibGUgaW4gZ2VuZXJhbFxuICAgICAgIWhhc0Rlc2NEZWZpbmVkICYmICggLy8gTXVzdCBub3QgYmUgc2V0dGluZyBkZXNjXG4gICAgICBtdWx0aSA/ICFkaXNhYmxlTXVsdGlSZW1vdmUgOiB0cnVlKSAmJiAoIC8vIElmIG11bHRpLCBkb24ndCBhbGxvdyBpZiBkaXNhYmxlTXVsdGlSZW1vdmVcbiAgICAgIGV4aXN0aW5nU29ydEJ5ICYmIC8vIEZpbmFsbHksIGRldGVjdCBpZiBpdCBzaG91bGQgaW5kZWVkIGJlIHJlbW92ZWRcbiAgICAgIGV4aXN0aW5nU29ydEJ5LmRlc2MgJiYgIXNvcnREZXNjRmlyc3QgfHwgIWV4aXN0aW5nU29ydEJ5LmRlc2MgJiYgc29ydERlc2NGaXJzdCkpIHtcbiAgICAgICAgc29ydEFjdGlvbiA9ICdyZW1vdmUnO1xuICAgICAgfVxuXG4gICAgICBpZiAoc29ydEFjdGlvbiA9PT0gJ3JlcGxhY2UnKSB7XG4gICAgICAgIF9uZXdTb3J0QnkgPSBbe1xuICAgICAgICAgIGlkOiBjb2x1bW5JZCxcbiAgICAgICAgICBkZXNjOiBoYXNEZXNjRGVmaW5lZCA/IGRlc2MgOiBzb3J0RGVzY0ZpcnN0XG4gICAgICAgIH1dO1xuICAgICAgfSBlbHNlIGlmIChzb3J0QWN0aW9uID09PSAnYWRkJykge1xuICAgICAgICBfbmV3U29ydEJ5ID0gW10uY29uY2F0KF9zb3J0QnksIFt7XG4gICAgICAgICAgaWQ6IGNvbHVtbklkLFxuICAgICAgICAgIGRlc2M6IGhhc0Rlc2NEZWZpbmVkID8gZGVzYyA6IHNvcnREZXNjRmlyc3RcbiAgICAgICAgfV0pOyAvLyBUYWtlIGxhdGVzdCBuIGNvbHVtbnNcblxuICAgICAgICBfbmV3U29ydEJ5LnNwbGljZSgwLCBfbmV3U29ydEJ5Lmxlbmd0aCAtIG1heE11bHRpU29ydENvbENvdW50KTtcbiAgICAgIH0gZWxzZSBpZiAoc29ydEFjdGlvbiA9PT0gJ3RvZ2dsZScpIHtcbiAgICAgICAgLy8gVGhpcyBmbGlwcyAob3Igc2V0cykgdGhlXG4gICAgICAgIF9uZXdTb3J0QnkgPSBfc29ydEJ5Lm1hcChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIGlmIChkLmlkID09PSBjb2x1bW5JZCkge1xuICAgICAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBkLCB7XG4gICAgICAgICAgICAgIGRlc2M6IGhhc0Rlc2NEZWZpbmVkID8gZGVzYyA6ICFleGlzdGluZ1NvcnRCeS5kZXNjXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHNvcnRBY3Rpb24gPT09ICdyZW1vdmUnKSB7XG4gICAgICAgIF9uZXdTb3J0QnkgPSBfc29ydEJ5LmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBkLmlkICE9PSBjb2x1bW5JZDtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgc29ydEJ5OiBfbmV3U29ydEJ5XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1c2VJbnN0YW5jZSQ1KGluc3RhbmNlKSB7XG4gICAgdmFyIGRhdGEgPSBpbnN0YW5jZS5kYXRhLFxuICAgICAgICByb3dzID0gaW5zdGFuY2Uucm93cyxcbiAgICAgICAgZmxhdFJvd3MgPSBpbnN0YW5jZS5mbGF0Um93cyxcbiAgICAgICAgYWxsQ29sdW1ucyA9IGluc3RhbmNlLmFsbENvbHVtbnMsXG4gICAgICAgIF9pbnN0YW5jZSRvcmRlckJ5Rm4gPSBpbnN0YW5jZS5vcmRlckJ5Rm4sXG4gICAgICAgIG9yZGVyQnlGbiA9IF9pbnN0YW5jZSRvcmRlckJ5Rm4gPT09IHZvaWQgMCA/IGRlZmF1bHRPcmRlckJ5Rm4gOiBfaW5zdGFuY2Ukb3JkZXJCeUZuLFxuICAgICAgICB1c2VyU29ydFR5cGVzID0gaW5zdGFuY2Uuc29ydFR5cGVzLFxuICAgICAgICBtYW51YWxTb3J0QnkgPSBpbnN0YW5jZS5tYW51YWxTb3J0QnksXG4gICAgICAgIGRlZmF1bHRDYW5Tb3J0ID0gaW5zdGFuY2UuZGVmYXVsdENhblNvcnQsXG4gICAgICAgIGRpc2FibGVTb3J0QnkgPSBpbnN0YW5jZS5kaXNhYmxlU29ydEJ5LFxuICAgICAgICBmbGF0SGVhZGVycyA9IGluc3RhbmNlLmZsYXRIZWFkZXJzLFxuICAgICAgICBzb3J0QnkgPSBpbnN0YW5jZS5zdGF0ZS5zb3J0QnksXG4gICAgICAgIGRpc3BhdGNoID0gaW5zdGFuY2UuZGlzcGF0Y2gsXG4gICAgICAgIHBsdWdpbnMgPSBpbnN0YW5jZS5wbHVnaW5zLFxuICAgICAgICBnZXRIb29rcyA9IGluc3RhbmNlLmdldEhvb2tzLFxuICAgICAgICBfaW5zdGFuY2UkYXV0b1Jlc2V0U28gPSBpbnN0YW5jZS5hdXRvUmVzZXRTb3J0QnksXG4gICAgICAgIGF1dG9SZXNldFNvcnRCeSA9IF9pbnN0YW5jZSRhdXRvUmVzZXRTbyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRhdXRvUmVzZXRTbztcbiAgICBlbnN1cmVQbHVnaW5PcmRlcihwbHVnaW5zLCBbJ3VzZUZpbHRlcnMnLCAndXNlR2xvYmFsRmlsdGVyJywgJ3VzZUdyb3VwQnknLCAndXNlUGl2b3RDb2x1bW5zJ10sICd1c2VTb3J0QnknKTsgLy8gVXBkYXRlcyBzb3J0aW5nIGJhc2VkIG9uIGEgY29sdW1uSWQsIGRlc2MgZmxhZyBhbmQgbXVsdGkgZmxhZ1xuXG4gICAgdmFyIHRvZ2dsZVNvcnRCeSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChjb2x1bW5JZCwgZGVzYywgbXVsdGkpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy50b2dnbGVTb3J0QnksXG4gICAgICAgIGNvbHVtbklkOiBjb2x1bW5JZCxcbiAgICAgICAgZGVzYzogZGVzYyxcbiAgICAgICAgbXVsdGk6IG11bHRpXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTsgLy8gdXNlIHJlZmVyZW5jZSB0byBhdm9pZCBtZW1vcnkgbGVhayBpbiAjMTYwOFxuXG4gICAgdmFyIGdldEluc3RhbmNlID0gdXNlR2V0TGF0ZXN0KGluc3RhbmNlKTsgLy8gQWRkIHRoZSBnZXRTb3J0QnlUb2dnbGVQcm9wcyBtZXRob2QgdG8gY29sdW1ucyBhbmQgaGVhZGVyc1xuXG4gICAgZmxhdEhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICB2YXIgYWNjZXNzb3IgPSBjb2x1bW4uYWNjZXNzb3IsXG4gICAgICAgICAgZGVmYXVsdENvbHVtbkNhblNvcnQgPSBjb2x1bW4uY2FuU29ydCxcbiAgICAgICAgICBjb2x1bW5EaXNhYmxlU29ydEJ5ID0gY29sdW1uLmRpc2FibGVTb3J0QnksXG4gICAgICAgICAgaWQgPSBjb2x1bW4uaWQ7XG4gICAgICB2YXIgY2FuU29ydCA9IGFjY2Vzc29yID8gZ2V0Rmlyc3REZWZpbmVkKGNvbHVtbkRpc2FibGVTb3J0QnkgPT09IHRydWUgPyBmYWxzZSA6IHVuZGVmaW5lZCwgZGlzYWJsZVNvcnRCeSA9PT0gdHJ1ZSA/IGZhbHNlIDogdW5kZWZpbmVkLCB0cnVlKSA6IGdldEZpcnN0RGVmaW5lZChkZWZhdWx0Q2FuU29ydCwgZGVmYXVsdENvbHVtbkNhblNvcnQsIGZhbHNlKTtcbiAgICAgIGNvbHVtbi5jYW5Tb3J0ID0gY2FuU29ydDtcblxuICAgICAgaWYgKGNvbHVtbi5jYW5Tb3J0KSB7XG4gICAgICAgIGNvbHVtbi50b2dnbGVTb3J0QnkgPSBmdW5jdGlvbiAoZGVzYywgbXVsdGkpIHtcbiAgICAgICAgICByZXR1cm4gdG9nZ2xlU29ydEJ5KGNvbHVtbi5pZCwgZGVzYywgbXVsdGkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbHVtbi5jbGVhclNvcnRCeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBhY3Rpb25zLmNsZWFyU29ydEJ5LFxuICAgICAgICAgICAgY29sdW1uSWQ6IGNvbHVtbi5pZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBjb2x1bW4uZ2V0U29ydEJ5VG9nZ2xlUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldFNvcnRCeVRvZ2dsZVByb3BzLCB7XG4gICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpLFxuICAgICAgICBjb2x1bW46IGNvbHVtblxuICAgICAgfSk7XG4gICAgICB2YXIgY29sdW1uU29ydCA9IHNvcnRCeS5maW5kKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmlkID09PSBpZDtcbiAgICAgIH0pO1xuICAgICAgY29sdW1uLmlzU29ydGVkID0gISFjb2x1bW5Tb3J0O1xuICAgICAgY29sdW1uLnNvcnRlZEluZGV4ID0gc29ydEJ5LmZpbmRJbmRleChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5pZCA9PT0gaWQ7XG4gICAgICB9KTtcbiAgICAgIGNvbHVtbi5pc1NvcnRlZERlc2MgPSBjb2x1bW4uaXNTb3J0ZWQgPyBjb2x1bW5Tb3J0LmRlc2MgOiB1bmRlZmluZWQ7XG4gICAgfSk7XG5cbiAgICB2YXIgX1JlYWN0JHVzZU1lbW8gPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChtYW51YWxTb3J0QnkgfHwgIXNvcnRCeS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFtyb3dzLCBmbGF0Um93c107XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3J0ZWRGbGF0Um93cyA9IFtdOyAvLyBGaWx0ZXIgb3V0IHNvcnRCeXMgdGhhdCBjb3JyZXNwb25kIHRvIG5vbiBleGlzdGluZyBjb2x1bW5zXG5cbiAgICAgIHZhciBhdmFpbGFibGVTb3J0QnkgPSBzb3J0QnkuZmlsdGVyKGZ1bmN0aW9uIChzb3J0KSB7XG4gICAgICAgIHJldHVybiBhbGxDb2x1bW5zLmZpbmQoZnVuY3Rpb24gKGNvbCkge1xuICAgICAgICAgIHJldHVybiBjb2wuaWQgPT09IHNvcnQuaWQ7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHZhciBzb3J0RGF0YSA9IGZ1bmN0aW9uIHNvcnREYXRhKHJvd3MpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBvcmRlckJ5Rm4gdG8gY29tcG9zZSBtdWx0aXBsZSBzb3J0QnkncyB0b2dldGhlci5cbiAgICAgICAgLy8gVGhpcyB3aWxsIGFsc28gcGVyZm9ybSBhIHN0YWJsZSBzb3J0aW5nIHVzaW5nIHRoZSByb3cgaW5kZXhcbiAgICAgICAgLy8gaWYgbmVlZGVkLlxuICAgICAgICB2YXIgc29ydGVkRGF0YSA9IG9yZGVyQnlGbihyb3dzLCBhdmFpbGFibGVTb3J0QnkubWFwKGZ1bmN0aW9uIChzb3J0KSB7XG4gICAgICAgICAgLy8gU3VwcG9ydCBjdXN0b20gc29ydGluZyBtZXRob2RzIGZvciBlYWNoIGNvbHVtblxuICAgICAgICAgIHZhciBjb2x1bW4gPSBhbGxDb2x1bW5zLmZpbmQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkLmlkID09PSBzb3J0LmlkO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKCFjb2x1bW4pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlYWN0LVRhYmxlOiBDb3VsZCBub3QgZmluZCBhIGNvbHVtbiB3aXRoIGlkOiBcIiArIHNvcnQuaWQgKyBcIiB3aGlsZSBzb3J0aW5nXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBzb3J0VHlwZSA9IGNvbHVtbi5zb3J0VHlwZTsgLy8gTG9vayB1cCBzb3J0QnkgZnVuY3Rpb25zIGluIHRoaXMgb3JkZXI6XG4gICAgICAgICAgLy8gY29sdW1uIGZ1bmN0aW9uXG4gICAgICAgICAgLy8gY29sdW1uIHN0cmluZyBsb29rdXAgb24gdXNlciBzb3J0VHlwZVxuICAgICAgICAgIC8vIGNvbHVtbiBzdHJpbmcgbG9va3VwIG9uIGJ1aWx0LWluIHNvcnRUeXBlXG4gICAgICAgICAgLy8gZGVmYXVsdCBmdW5jdGlvblxuICAgICAgICAgIC8vIGRlZmF1bHQgc3RyaW5nIGxvb2t1cCBvbiB1c2VyIHNvcnRUeXBlXG4gICAgICAgICAgLy8gZGVmYXVsdCBzdHJpbmcgbG9va3VwIG9uIGJ1aWx0LWluIHNvcnRUeXBlXG5cbiAgICAgICAgICB2YXIgc29ydE1ldGhvZCA9IGlzRnVuY3Rpb24oc29ydFR5cGUpIHx8ICh1c2VyU29ydFR5cGVzIHx8IHt9KVtzb3J0VHlwZV0gfHwgc29ydFR5cGVzW3NvcnRUeXBlXTtcblxuICAgICAgICAgIGlmICghc29ydE1ldGhvZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVhY3QtVGFibGU6IENvdWxkIG5vdCBmaW5kIGEgdmFsaWQgc29ydFR5cGUgb2YgJ1wiICsgc29ydFR5cGUgKyBcIicgZm9yIGNvbHVtbiAnXCIgKyBzb3J0LmlkICsgXCInLlwiKTtcbiAgICAgICAgICB9IC8vIFJldHVybiB0aGUgY29ycmVjdCBzb3J0Rm4uXG4gICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiBzaG91bGQgYWx3YXlzIHJldHVybiBpbiBhc2NlbmRpbmcgb3JkZXJcblxuXG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gc29ydE1ldGhvZChhLCBiLCBzb3J0LmlkLCBzb3J0LmRlc2MpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pLCAvLyBNYXAgdGhlIGRpcmVjdGlvbnNcbiAgICAgICAgYXZhaWxhYmxlU29ydEJ5Lm1hcChmdW5jdGlvbiAoc29ydCkge1xuICAgICAgICAgIC8vIERldGVjdCBhbmQgdXNlIHRoZSBzb3J0SW52ZXJ0ZWQgb3B0aW9uXG4gICAgICAgICAgdmFyIGNvbHVtbiA9IGFsbENvbHVtbnMuZmluZChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIGQuaWQgPT09IHNvcnQuaWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAoY29sdW1uICYmIGNvbHVtbi5zb3J0SW52ZXJ0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBzb3J0LmRlc2M7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuICFzb3J0LmRlc2M7XG4gICAgICAgIH0pKTsgLy8gSWYgdGhlcmUgYXJlIHN1Yi1yb3dzLCBzb3J0IHRoZW1cblxuICAgICAgICBzb3J0ZWREYXRhLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgIHNvcnRlZEZsYXRSb3dzLnB1c2gocm93KTtcblxuICAgICAgICAgIGlmICghcm93LnN1YlJvd3MgfHwgcm93LnN1YlJvd3MubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3cuc3ViUm93cyA9IHNvcnREYXRhKHJvdy5zdWJSb3dzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzb3J0ZWREYXRhO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIFtzb3J0RGF0YShyb3dzKSwgc29ydGVkRmxhdFJvd3NdO1xuICAgIH0sIFttYW51YWxTb3J0QnksIHNvcnRCeSwgcm93cywgZmxhdFJvd3MsIGFsbENvbHVtbnMsIG9yZGVyQnlGbiwgdXNlclNvcnRUeXBlc10pLFxuICAgICAgICBzb3J0ZWRSb3dzID0gX1JlYWN0JHVzZU1lbW9bMF0sXG4gICAgICAgIHNvcnRlZEZsYXRSb3dzID0gX1JlYWN0JHVzZU1lbW9bMV07XG5cbiAgICB2YXIgZ2V0QXV0b1Jlc2V0U29ydEJ5ID0gdXNlR2V0TGF0ZXN0KGF1dG9SZXNldFNvcnRCeSk7XG4gICAgdXNlTW91bnRlZExheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZ2V0QXV0b1Jlc2V0U29ydEJ5KCkpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IGFjdGlvbnMucmVzZXRTb3J0QnlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgW21hbnVhbFNvcnRCeSA/IG51bGwgOiBkYXRhXSk7XG4gICAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZSwge1xuICAgICAgcHJlU29ydGVkUm93czogcm93cyxcbiAgICAgIHByZVNvcnRlZEZsYXRSb3dzOiBmbGF0Um93cyxcbiAgICAgIHNvcnRlZFJvd3M6IHNvcnRlZFJvd3MsXG4gICAgICBzb3J0ZWRGbGF0Um93czogc29ydGVkRmxhdFJvd3MsXG4gICAgICByb3dzOiBzb3J0ZWRSb3dzLFxuICAgICAgZmxhdFJvd3M6IHNvcnRlZEZsYXRSb3dzLFxuICAgICAgdG9nZ2xlU29ydEJ5OiB0b2dnbGVTb3J0QnlcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlZmF1bHRPcmRlckJ5Rm4oYXJyLCBmdW5jcywgZGlycykge1xuICAgIHJldHVybiBbXS5jb25jYXQoYXJyKS5zb3J0KGZ1bmN0aW9uIChyb3dBLCByb3dCKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZ1bmNzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBzb3J0Rm4gPSBmdW5jc1tpXTtcbiAgICAgICAgdmFyIGRlc2MgPSBkaXJzW2ldID09PSBmYWxzZSB8fCBkaXJzW2ldID09PSAnZGVzYyc7XG4gICAgICAgIHZhciBzb3J0SW50ID0gc29ydEZuKHJvd0EsIHJvd0IpO1xuXG4gICAgICAgIGlmIChzb3J0SW50ICE9PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIGRlc2MgPyAtc29ydEludCA6IHNvcnRJbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRpcnNbMF0gPyByb3dBLmluZGV4IC0gcm93Qi5pbmRleCA6IHJvd0IuaW5kZXggLSByb3dBLmluZGV4O1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHBsdWdpbk5hbWUgPSAndXNlUGFnaW5hdGlvbic7IC8vIEFjdGlvbnNcblxuICBhY3Rpb25zLnJlc2V0UGFnZSA9ICdyZXNldFBhZ2UnO1xuICBhY3Rpb25zLmdvdG9QYWdlID0gJ2dvdG9QYWdlJztcbiAgYWN0aW9ucy5zZXRQYWdlU2l6ZSA9ICdzZXRQYWdlU2l6ZSc7XG4gIHZhciB1c2VQYWdpbmF0aW9uID0gZnVuY3Rpb24gdXNlUGFnaW5hdGlvbihob29rcykge1xuICAgIGhvb2tzLnN0YXRlUmVkdWNlcnMucHVzaChyZWR1Y2VyJDYpO1xuICAgIGhvb2tzLnVzZUluc3RhbmNlLnB1c2godXNlSW5zdGFuY2UkNik7XG4gIH07XG4gIHVzZVBhZ2luYXRpb24ucGx1Z2luTmFtZSA9IHBsdWdpbk5hbWU7XG5cbiAgZnVuY3Rpb24gcmVkdWNlciQ2KHN0YXRlLCBhY3Rpb24sIHByZXZpb3VzU3RhdGUsIGluc3RhbmNlKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmluaXQpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIHBhZ2VTaXplOiAxMCxcbiAgICAgICAgcGFnZUluZGV4OiAwXG4gICAgICB9LCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnJlc2V0UGFnZSkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBwYWdlSW5kZXg6IGluc3RhbmNlLmluaXRpYWxTdGF0ZS5wYWdlSW5kZXggfHwgMFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmdvdG9QYWdlKSB7XG4gICAgICB2YXIgcGFnZUNvdW50ID0gaW5zdGFuY2UucGFnZUNvdW50LFxuICAgICAgICAgIHBhZ2UgPSBpbnN0YW5jZS5wYWdlO1xuICAgICAgdmFyIG5ld1BhZ2VJbmRleCA9IGZ1bmN0aW9uYWxVcGRhdGUoYWN0aW9uLnBhZ2VJbmRleCwgc3RhdGUucGFnZUluZGV4KTtcbiAgICAgIHZhciBjYW5OYXZpZ2F0ZSA9IGZhbHNlO1xuXG4gICAgICBpZiAobmV3UGFnZUluZGV4ID4gc3RhdGUucGFnZUluZGV4KSB7XG4gICAgICAgIC8vIG5leHQgcGFnZVxuICAgICAgICBjYW5OYXZpZ2F0ZSA9IHBhZ2VDb3VudCA9PT0gLTEgPyBwYWdlLmxlbmd0aCA+PSBzdGF0ZS5wYWdlU2l6ZSA6IG5ld1BhZ2VJbmRleCA8IHBhZ2VDb3VudDtcbiAgICAgIH0gZWxzZSBpZiAobmV3UGFnZUluZGV4IDwgc3RhdGUucGFnZUluZGV4KSB7XG4gICAgICAgIC8vIHByZXYgcGFnZVxuICAgICAgICBjYW5OYXZpZ2F0ZSA9IG5ld1BhZ2VJbmRleCA+IC0xO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWNhbk5hdmlnYXRlKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBwYWdlSW5kZXg6IG5ld1BhZ2VJbmRleFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnNldFBhZ2VTaXplKSB7XG4gICAgICB2YXIgcGFnZVNpemUgPSBhY3Rpb24ucGFnZVNpemU7XG4gICAgICB2YXIgdG9wUm93SW5kZXggPSBzdGF0ZS5wYWdlU2l6ZSAqIHN0YXRlLnBhZ2VJbmRleDtcbiAgICAgIHZhciBwYWdlSW5kZXggPSBNYXRoLmZsb29yKHRvcFJvd0luZGV4IC8gcGFnZVNpemUpO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBwYWdlSW5kZXg6IHBhZ2VJbmRleCxcbiAgICAgICAgcGFnZVNpemU6IHBhZ2VTaXplXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1c2VJbnN0YW5jZSQ2KGluc3RhbmNlKSB7XG4gICAgdmFyIHJvd3MgPSBpbnN0YW5jZS5yb3dzLFxuICAgICAgICBfaW5zdGFuY2UkYXV0b1Jlc2V0UGEgPSBpbnN0YW5jZS5hdXRvUmVzZXRQYWdlLFxuICAgICAgICBhdXRvUmVzZXRQYWdlID0gX2luc3RhbmNlJGF1dG9SZXNldFBhID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJGF1dG9SZXNldFBhLFxuICAgICAgICBfaW5zdGFuY2UkbWFudWFsRXhwYW4gPSBpbnN0YW5jZS5tYW51YWxFeHBhbmRlZEtleSxcbiAgICAgICAgbWFudWFsRXhwYW5kZWRLZXkgPSBfaW5zdGFuY2UkbWFudWFsRXhwYW4gPT09IHZvaWQgMCA/ICdleHBhbmRlZCcgOiBfaW5zdGFuY2UkbWFudWFsRXhwYW4sXG4gICAgICAgIHBsdWdpbnMgPSBpbnN0YW5jZS5wbHVnaW5zLFxuICAgICAgICB1c2VyUGFnZUNvdW50ID0gaW5zdGFuY2UucGFnZUNvdW50LFxuICAgICAgICBfaW5zdGFuY2UkcGFnaW5hdGVFeHAgPSBpbnN0YW5jZS5wYWdpbmF0ZUV4cGFuZGVkUm93cyxcbiAgICAgICAgcGFnaW5hdGVFeHBhbmRlZFJvd3MgPSBfaW5zdGFuY2UkcGFnaW5hdGVFeHAgPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2UkcGFnaW5hdGVFeHAsXG4gICAgICAgIF9pbnN0YW5jZSRleHBhbmRTdWJSbyA9IGluc3RhbmNlLmV4cGFuZFN1YlJvd3MsXG4gICAgICAgIGV4cGFuZFN1YlJvd3MgPSBfaW5zdGFuY2UkZXhwYW5kU3ViUm8gPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2UkZXhwYW5kU3ViUm8sXG4gICAgICAgIF9pbnN0YW5jZSRzdGF0ZSA9IGluc3RhbmNlLnN0YXRlLFxuICAgICAgICBwYWdlU2l6ZSA9IF9pbnN0YW5jZSRzdGF0ZS5wYWdlU2l6ZSxcbiAgICAgICAgcGFnZUluZGV4ID0gX2luc3RhbmNlJHN0YXRlLnBhZ2VJbmRleCxcbiAgICAgICAgZXhwYW5kZWQgPSBfaW5zdGFuY2Ukc3RhdGUuZXhwYW5kZWQsXG4gICAgICAgIGdsb2JhbEZpbHRlciA9IF9pbnN0YW5jZSRzdGF0ZS5nbG9iYWxGaWx0ZXIsXG4gICAgICAgIGZpbHRlcnMgPSBfaW5zdGFuY2Ukc3RhdGUuZmlsdGVycyxcbiAgICAgICAgZ3JvdXBCeSA9IF9pbnN0YW5jZSRzdGF0ZS5ncm91cEJ5LFxuICAgICAgICBzb3J0QnkgPSBfaW5zdGFuY2Ukc3RhdGUuc29ydEJ5LFxuICAgICAgICBkaXNwYXRjaCA9IGluc3RhbmNlLmRpc3BhdGNoLFxuICAgICAgICBkYXRhID0gaW5zdGFuY2UuZGF0YSxcbiAgICAgICAgbWFudWFsUGFnaW5hdGlvbiA9IGluc3RhbmNlLm1hbnVhbFBhZ2luYXRpb247XG4gICAgZW5zdXJlUGx1Z2luT3JkZXIocGx1Z2lucywgWyd1c2VHbG9iYWxGaWx0ZXInLCAndXNlRmlsdGVycycsICd1c2VHcm91cEJ5JywgJ3VzZVNvcnRCeScsICd1c2VFeHBhbmRlZCddLCAndXNlUGFnaW5hdGlvbicpO1xuICAgIHZhciBnZXRBdXRvUmVzZXRQYWdlID0gdXNlR2V0TGF0ZXN0KGF1dG9SZXNldFBhZ2UpO1xuICAgIHVzZU1vdW50ZWRMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGdldEF1dG9SZXNldFBhZ2UoKSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogYWN0aW9ucy5yZXNldFBhZ2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgW2Rpc3BhdGNoLCBtYW51YWxQYWdpbmF0aW9uID8gbnVsbCA6IGRhdGEsIGdsb2JhbEZpbHRlciwgZmlsdGVycywgZ3JvdXBCeSwgc29ydEJ5XSk7XG4gICAgdmFyIHBhZ2VDb3VudCA9IG1hbnVhbFBhZ2luYXRpb24gPyB1c2VyUGFnZUNvdW50IDogTWF0aC5jZWlsKHJvd3MubGVuZ3RoIC8gcGFnZVNpemUpO1xuICAgIHZhciBwYWdlT3B0aW9ucyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHBhZ2VDb3VudCA+IDAgPyBbXS5jb25jYXQobmV3IEFycmF5KHBhZ2VDb3VudCkpLmZpbGwobnVsbCkubWFwKGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfSkgOiBbXTtcbiAgICB9LCBbcGFnZUNvdW50XSk7XG4gICAgdmFyIHBhZ2UgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwYWdlO1xuXG4gICAgICBpZiAobWFudWFsUGFnaW5hdGlvbikge1xuICAgICAgICBwYWdlID0gcm93cztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBwYWdlU3RhcnQgPSBwYWdlU2l6ZSAqIHBhZ2VJbmRleDtcbiAgICAgICAgdmFyIHBhZ2VFbmQgPSBwYWdlU3RhcnQgKyBwYWdlU2l6ZTtcbiAgICAgICAgcGFnZSA9IHJvd3Muc2xpY2UocGFnZVN0YXJ0LCBwYWdlRW5kKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhZ2luYXRlRXhwYW5kZWRSb3dzKSB7XG4gICAgICAgIHJldHVybiBwYWdlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXhwYW5kUm93cyhwYWdlLCB7XG4gICAgICAgIG1hbnVhbEV4cGFuZGVkS2V5OiBtYW51YWxFeHBhbmRlZEtleSxcbiAgICAgICAgZXhwYW5kZWQ6IGV4cGFuZGVkLFxuICAgICAgICBleHBhbmRTdWJSb3dzOiBleHBhbmRTdWJSb3dzXG4gICAgICB9KTtcbiAgICB9LCBbZXhwYW5kU3ViUm93cywgZXhwYW5kZWQsIG1hbnVhbEV4cGFuZGVkS2V5LCBtYW51YWxQYWdpbmF0aW9uLCBwYWdlSW5kZXgsIHBhZ2VTaXplLCBwYWdpbmF0ZUV4cGFuZGVkUm93cywgcm93c10pO1xuICAgIHZhciBjYW5QcmV2aW91c1BhZ2UgPSBwYWdlSW5kZXggPiAwO1xuICAgIHZhciBjYW5OZXh0UGFnZSA9IHBhZ2VDb3VudCA9PT0gLTEgPyBwYWdlLmxlbmd0aCA+PSBwYWdlU2l6ZSA6IHBhZ2VJbmRleCA8IHBhZ2VDb3VudCAtIDE7XG4gICAgdmFyIGdvdG9QYWdlID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHBhZ2VJbmRleCkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLmdvdG9QYWdlLFxuICAgICAgICBwYWdlSW5kZXg6IHBhZ2VJbmRleFxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgdmFyIHByZXZpb3VzUGFnZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBnb3RvUGFnZShmdW5jdGlvbiAob2xkKSB7XG4gICAgICAgIHJldHVybiBvbGQgLSAxO1xuICAgICAgfSk7XG4gICAgfSwgW2dvdG9QYWdlXSk7XG4gICAgdmFyIG5leHRQYWdlID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGdvdG9QYWdlKGZ1bmN0aW9uIChvbGQpIHtcbiAgICAgICAgcmV0dXJuIG9sZCArIDE7XG4gICAgICB9KTtcbiAgICB9LCBbZ290b1BhZ2VdKTtcbiAgICB2YXIgc2V0UGFnZVNpemUgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAocGFnZVNpemUpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy5zZXRQYWdlU2l6ZSxcbiAgICAgICAgcGFnZVNpemU6IHBhZ2VTaXplXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCB7XG4gICAgICBwYWdlT3B0aW9uczogcGFnZU9wdGlvbnMsXG4gICAgICBwYWdlQ291bnQ6IHBhZ2VDb3VudCxcbiAgICAgIHBhZ2U6IHBhZ2UsXG4gICAgICBjYW5QcmV2aW91c1BhZ2U6IGNhblByZXZpb3VzUGFnZSxcbiAgICAgIGNhbk5leHRQYWdlOiBjYW5OZXh0UGFnZSxcbiAgICAgIGdvdG9QYWdlOiBnb3RvUGFnZSxcbiAgICAgIHByZXZpb3VzUGFnZTogcHJldmlvdXNQYWdlLFxuICAgICAgbmV4dFBhZ2U6IG5leHRQYWdlLFxuICAgICAgc2V0UGFnZVNpemU6IHNldFBhZ2VTaXplXG4gICAgfSk7XG4gIH1cblxuICBhY3Rpb25zLnJlc2V0UGl2b3QgPSAncmVzZXRQaXZvdCc7XG4gIGFjdGlvbnMudG9nZ2xlUGl2b3QgPSAndG9nZ2xlUGl2b3QnO1xuICB2YXIgX1VOU1RBQkxFX3VzZVBpdm90Q29sdW1ucyA9IGZ1bmN0aW9uIF9VTlNUQUJMRV91c2VQaXZvdENvbHVtbnMoaG9va3MpIHtcbiAgICBob29rcy5nZXRQaXZvdFRvZ2dsZVByb3BzID0gW2RlZmF1bHRHZXRQaXZvdFRvZ2dsZVByb3BzXTtcbiAgICBob29rcy5zdGF0ZVJlZHVjZXJzLnB1c2gocmVkdWNlciQ3KTtcbiAgICBob29rcy51c2VJbnN0YW5jZUFmdGVyRGF0YS5wdXNoKHVzZUluc3RhbmNlQWZ0ZXJEYXRhKTtcbiAgICBob29rcy5hbGxDb2x1bW5zLnB1c2goYWxsQ29sdW1ucyk7XG4gICAgaG9va3MuYWNjZXNzVmFsdWUucHVzaChhY2Nlc3NWYWx1ZSk7XG4gICAgaG9va3MubWF0ZXJpYWxpemVkQ29sdW1ucy5wdXNoKG1hdGVyaWFsaXplZENvbHVtbnMpO1xuICAgIGhvb2tzLm1hdGVyaWFsaXplZENvbHVtbnNEZXBzLnB1c2gobWF0ZXJpYWxpemVkQ29sdW1uc0RlcHMpO1xuICAgIGhvb2tzLnZpc2libGVDb2x1bW5zLnB1c2godmlzaWJsZUNvbHVtbnMkMSk7XG4gICAgaG9va3MudmlzaWJsZUNvbHVtbnNEZXBzLnB1c2godmlzaWJsZUNvbHVtbnNEZXBzKTtcbiAgICBob29rcy51c2VJbnN0YW5jZS5wdXNoKHVzZUluc3RhbmNlJDcpO1xuICAgIGhvb2tzLnByZXBhcmVSb3cucHVzaChwcmVwYXJlUm93JDIpO1xuICB9O1xuICBfVU5TVEFCTEVfdXNlUGl2b3RDb2x1bW5zLnBsdWdpbk5hbWUgPSAndXNlUGl2b3RDb2x1bW5zJztcbiAgdmFyIGRlZmF1bHRQaXZvdENvbHVtbnMgPSBbXTtcblxuICB2YXIgZGVmYXVsdEdldFBpdm90VG9nZ2xlUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0UGl2b3RUb2dnbGVQcm9wcyhwcm9wcywgX3JlZikge1xuICAgIHZhciBoZWFkZXIgPSBfcmVmLmhlYWRlcjtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBvbkNsaWNrOiBoZWFkZXIuY2FuUGl2b3QgPyBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnBlcnNpc3QoKTtcbiAgICAgICAgaGVhZGVyLnRvZ2dsZVBpdm90KCk7XG4gICAgICB9IDogdW5kZWZpbmVkLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgY3Vyc29yOiBoZWFkZXIuY2FuUGl2b3QgPyAncG9pbnRlcicgOiB1bmRlZmluZWRcbiAgICAgIH0sXG4gICAgICB0aXRsZTogJ1RvZ2dsZSBQaXZvdCdcbiAgICB9XTtcbiAgfTsgLy8gUmVkdWNlclxuXG5cbiAgZnVuY3Rpb24gcmVkdWNlciQ3KHN0YXRlLCBhY3Rpb24sIHByZXZpb3VzU3RhdGUsIGluc3RhbmNlKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmluaXQpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIHBpdm90Q29sdW1uczogZGVmYXVsdFBpdm90Q29sdW1uc1xuICAgICAgfSwgc3RhdGUpO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5yZXNldFBpdm90KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHBpdm90Q29sdW1uczogaW5zdGFuY2UuaW5pdGlhbFN0YXRlLnBpdm90Q29sdW1ucyB8fCBkZWZhdWx0UGl2b3RDb2x1bW5zXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMudG9nZ2xlUGl2b3QpIHtcbiAgICAgIHZhciBjb2x1bW5JZCA9IGFjdGlvbi5jb2x1bW5JZCxcbiAgICAgICAgICBzZXRQaXZvdCA9IGFjdGlvbi52YWx1ZTtcbiAgICAgIHZhciByZXNvbHZlZFBpdm90ID0gdHlwZW9mIHNldFBpdm90ICE9PSAndW5kZWZpbmVkJyA/IHNldFBpdm90IDogIXN0YXRlLnBpdm90Q29sdW1ucy5pbmNsdWRlcyhjb2x1bW5JZCk7XG5cbiAgICAgIGlmIChyZXNvbHZlZFBpdm90KSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBwaXZvdENvbHVtbnM6IFtdLmNvbmNhdChzdGF0ZS5waXZvdENvbHVtbnMsIFtjb2x1bW5JZF0pXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHBpdm90Q29sdW1uczogc3RhdGUucGl2b3RDb2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBkICE9PSBjb2x1bW5JZDtcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZUluc3RhbmNlQWZ0ZXJEYXRhKGluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UuYWxsQ29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgIGNvbHVtbi5pc1Bpdm90U291cmNlID0gaW5zdGFuY2Uuc3RhdGUucGl2b3RDb2x1bW5zLmluY2x1ZGVzKGNvbHVtbi5pZCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhbGxDb2x1bW5zKGNvbHVtbnMsIF9yZWYyKSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZjIuaW5zdGFuY2U7XG4gICAgY29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgIGNvbHVtbi5pc1Bpdm90U291cmNlID0gaW5zdGFuY2Uuc3RhdGUucGl2b3RDb2x1bW5zLmluY2x1ZGVzKGNvbHVtbi5pZCk7XG4gICAgICBjb2x1bW4udW5pcXVlVmFsdWVzID0gbmV3IFNldCgpO1xuICAgIH0pO1xuICAgIHJldHVybiBjb2x1bW5zO1xuICB9XG5cbiAgZnVuY3Rpb24gYWNjZXNzVmFsdWUodmFsdWUsIF9yZWYzKSB7XG4gICAgdmFyIGNvbHVtbiA9IF9yZWYzLmNvbHVtbjtcblxuICAgIGlmIChjb2x1bW4udW5pcXVlVmFsdWVzICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbHVtbi51bmlxdWVWYWx1ZXMuYWRkKHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiBtYXRlcmlhbGl6ZWRDb2x1bW5zKG1hdGVyaWFsaXplZCwgX3JlZjQpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmNC5pbnN0YW5jZTtcbiAgICB2YXIgYWxsQ29sdW1ucyA9IGluc3RhbmNlLmFsbENvbHVtbnMsXG4gICAgICAgIHN0YXRlID0gaW5zdGFuY2Uuc3RhdGU7XG5cbiAgICBpZiAoIXN0YXRlLnBpdm90Q29sdW1ucy5sZW5ndGggfHwgIXN0YXRlLmdyb3VwQnkgfHwgIXN0YXRlLmdyb3VwQnkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbWF0ZXJpYWxpemVkO1xuICAgIH1cblxuICAgIHZhciBwaXZvdENvbHVtbnMgPSBzdGF0ZS5waXZvdENvbHVtbnMubWFwKGZ1bmN0aW9uIChpZCkge1xuICAgICAgcmV0dXJuIGFsbENvbHVtbnMuZmluZChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5pZCA9PT0gaWQ7XG4gICAgICB9KTtcbiAgICB9KS5maWx0ZXIoQm9vbGVhbik7XG4gICAgdmFyIHNvdXJjZUNvbHVtbnMgPSBhbGxDb2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuICFkLmlzUGl2b3RTb3VyY2UgJiYgIXN0YXRlLmdyb3VwQnkuaW5jbHVkZXMoZC5pZCkgJiYgIXN0YXRlLnBpdm90Q29sdW1ucy5pbmNsdWRlcyhkLmlkKTtcbiAgICB9KTtcblxuICAgIHZhciBidWlsZFBpdm90Q29sdW1ucyA9IGZ1bmN0aW9uIGJ1aWxkUGl2b3RDb2x1bW5zKGRlcHRoLCBwYXJlbnQsIHBpdm90RmlsdGVycykge1xuICAgICAgaWYgKGRlcHRoID09PSB2b2lkIDApIHtcbiAgICAgICAgZGVwdGggPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAocGl2b3RGaWx0ZXJzID09PSB2b2lkIDApIHtcbiAgICAgICAgcGl2b3RGaWx0ZXJzID0gW107XG4gICAgICB9XG5cbiAgICAgIHZhciBwaXZvdENvbHVtbiA9IHBpdm90Q29sdW1uc1tkZXB0aF07XG5cbiAgICAgIGlmICghcGl2b3RDb2x1bW4pIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZUNvbHVtbnMubWFwKGZ1bmN0aW9uIChzb3VyY2VDb2x1bW4pIHtcbiAgICAgICAgICAvLyBUT0RPOiBXZSBjb3VsZCBvZmZlciBzdXBwb3J0IGhlcmUgZm9yIHJlbmVzdGluZyBwaXZvdGVkXG4gICAgICAgICAgLy8gY29sdW1ucyBpbnNpZGUgY29waWVzIG9mIHRoZWlyIGhlYWRlciBncm91cHMuIEZvciBub3csXG4gICAgICAgICAgLy8gdGhhdCBzZWVtcyBsaWtlIGl0IHdvdWxkIGJlICgxKSBvdmVya2lsbCBvbiBuZXN0aW5nLCBjb25zaWRlcmluZ1xuICAgICAgICAgIC8vIHlvdSBhbHJlYWR5IGdldCBuZXN0aW5nIGZvciBldmVyeSBwaXZvdCBsZXZlbCBhbmQgKDIpXG4gICAgICAgICAgLy8gcmVhbGx5IGhhcmQuIDopXG4gICAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzb3VyY2VDb2x1bW4sIHtcbiAgICAgICAgICAgIGNhblBpdm90OiBmYWxzZSxcbiAgICAgICAgICAgIGlzUGl2b3RlZDogdHJ1ZSxcbiAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICAgICAgZGVwdGg6IGRlcHRoLFxuICAgICAgICAgICAgaWQ6IFwiXCIgKyAocGFyZW50ID8gcGFyZW50LmlkICsgXCIuXCIgKyBzb3VyY2VDb2x1bW4uaWQgOiBzb3VyY2VDb2x1bW4uaWQpLFxuICAgICAgICAgICAgYWNjZXNzb3I6IGZ1bmN0aW9uIGFjY2Vzc29yKG9yaWdpbmFsUm93LCBpLCByb3cpIHtcbiAgICAgICAgICAgICAgaWYgKHBpdm90RmlsdGVycy5ldmVyeShmdW5jdGlvbiAoZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlcihyb3cpO1xuICAgICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByb3cudmFsdWVzW3NvdXJjZUNvbHVtbi5pZF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHZhciB1bmlxdWVWYWx1ZXMgPSBBcnJheS5mcm9tKHBpdm90Q29sdW1uLnVuaXF1ZVZhbHVlcykuc29ydCgpO1xuICAgICAgcmV0dXJuIHVuaXF1ZVZhbHVlcy5tYXAoZnVuY3Rpb24gKHVuaXF1ZVZhbHVlKSB7XG4gICAgICAgIHZhciBjb2x1bW5Hcm91cCA9IF9leHRlbmRzKHt9LCBwaXZvdENvbHVtbiwge1xuICAgICAgICAgIEhlYWRlcjogcGl2b3RDb2x1bW4uUGl2b3RIZWFkZXIgfHwgdHlwZW9mIHBpdm90Q29sdW1uLmhlYWRlciA9PT0gJ3N0cmluZycgPyBwaXZvdENvbHVtbi5IZWFkZXIgKyBcIjogXCIgKyB1bmlxdWVWYWx1ZSA6IHVuaXF1ZVZhbHVlLFxuICAgICAgICAgIGlzUGl2b3RHcm91cDogdHJ1ZSxcbiAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICBkZXB0aDogZGVwdGgsXG4gICAgICAgICAgaWQ6IHBhcmVudCA/IHBhcmVudC5pZCArIFwiLlwiICsgcGl2b3RDb2x1bW4uaWQgKyBcIi5cIiArIHVuaXF1ZVZhbHVlIDogcGl2b3RDb2x1bW4uaWQgKyBcIi5cIiArIHVuaXF1ZVZhbHVlLFxuICAgICAgICAgIHBpdm90VmFsdWU6IHVuaXF1ZVZhbHVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbHVtbkdyb3VwLmNvbHVtbnMgPSBidWlsZFBpdm90Q29sdW1ucyhkZXB0aCArIDEsIGNvbHVtbkdyb3VwLCBbXS5jb25jYXQocGl2b3RGaWx0ZXJzLCBbZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgIHJldHVybiByb3cudmFsdWVzW3Bpdm90Q29sdW1uLmlkXSA9PT0gdW5pcXVlVmFsdWU7XG4gICAgICAgIH1dKSk7XG4gICAgICAgIHJldHVybiBjb2x1bW5Hcm91cDtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgbmV3TWF0ZXJpYWxpemVkID0gZmxhdHRlbkNvbHVtbnMoYnVpbGRQaXZvdENvbHVtbnMoKSk7XG4gICAgcmV0dXJuIFtdLmNvbmNhdChtYXRlcmlhbGl6ZWQsIG5ld01hdGVyaWFsaXplZCk7XG4gIH1cblxuICBmdW5jdGlvbiBtYXRlcmlhbGl6ZWRDb2x1bW5zRGVwcyhkZXBzLCBfcmVmNSkge1xuICAgIHZhciBfcmVmNSRpbnN0YW5jZSRzdGF0ZSA9IF9yZWY1Lmluc3RhbmNlLnN0YXRlLFxuICAgICAgICBwaXZvdENvbHVtbnMgPSBfcmVmNSRpbnN0YW5jZSRzdGF0ZS5waXZvdENvbHVtbnMsXG4gICAgICAgIGdyb3VwQnkgPSBfcmVmNSRpbnN0YW5jZSRzdGF0ZS5ncm91cEJ5O1xuICAgIHJldHVybiBbXS5jb25jYXQoZGVwcywgW3Bpdm90Q29sdW1ucywgZ3JvdXBCeV0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdmlzaWJsZUNvbHVtbnMkMSh2aXNpYmxlQ29sdW1ucywgX3JlZjYpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmNi5pbnN0YW5jZS5zdGF0ZTtcbiAgICB2aXNpYmxlQ29sdW1ucyA9IHZpc2libGVDb2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuICFkLmlzUGl2b3RTb3VyY2U7XG4gICAgfSk7XG5cbiAgICBpZiAoc3RhdGUucGl2b3RDb2x1bW5zLmxlbmd0aCAmJiBzdGF0ZS5ncm91cEJ5ICYmIHN0YXRlLmdyb3VwQnkubGVuZ3RoKSB7XG4gICAgICB2aXNpYmxlQ29sdW1ucyA9IHZpc2libGVDb2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgIHJldHVybiBjb2x1bW4uaXNHcm91cGVkIHx8IGNvbHVtbi5pc1Bpdm90ZWQ7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmlzaWJsZUNvbHVtbnM7XG4gIH1cblxuICBmdW5jdGlvbiB2aXNpYmxlQ29sdW1uc0RlcHMoZGVwcywgX3JlZjcpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmNy5pbnN0YW5jZTtcbiAgICByZXR1cm4gW10uY29uY2F0KGRlcHMsIFtpbnN0YW5jZS5zdGF0ZS5waXZvdENvbHVtbnMsIGluc3RhbmNlLnN0YXRlLmdyb3VwQnldKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZUluc3RhbmNlJDcoaW5zdGFuY2UpIHtcbiAgICB2YXIgY29sdW1ucyA9IGluc3RhbmNlLmNvbHVtbnMsXG4gICAgICAgIGFsbENvbHVtbnMgPSBpbnN0YW5jZS5hbGxDb2x1bW5zLFxuICAgICAgICBmbGF0SGVhZGVycyA9IGluc3RhbmNlLmZsYXRIZWFkZXJzLFxuICAgICAgICBnZXRIb29rcyA9IGluc3RhbmNlLmdldEhvb2tzLFxuICAgICAgICBwbHVnaW5zID0gaW5zdGFuY2UucGx1Z2lucyxcbiAgICAgICAgZGlzcGF0Y2ggPSBpbnN0YW5jZS5kaXNwYXRjaCxcbiAgICAgICAgX2luc3RhbmNlJGF1dG9SZXNldFBpID0gaW5zdGFuY2UuYXV0b1Jlc2V0UGl2b3QsXG4gICAgICAgIGF1dG9SZXNldFBpdm90ID0gX2luc3RhbmNlJGF1dG9SZXNldFBpID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJGF1dG9SZXNldFBpLFxuICAgICAgICBtYW5hdWxQaXZvdCA9IGluc3RhbmNlLm1hbmF1bFBpdm90LFxuICAgICAgICBkaXNhYmxlUGl2b3QgPSBpbnN0YW5jZS5kaXNhYmxlUGl2b3QsXG4gICAgICAgIGRlZmF1bHRDYW5QaXZvdCA9IGluc3RhbmNlLmRlZmF1bHRDYW5QaXZvdDtcbiAgICBlbnN1cmVQbHVnaW5PcmRlcihwbHVnaW5zLCBbJ3VzZUdyb3VwQnknXSwgJ3VzZVBpdm90Q29sdW1ucycpO1xuICAgIHZhciBnZXRJbnN0YW5jZSA9IHVzZUdldExhdGVzdChpbnN0YW5jZSk7XG4gICAgYWxsQ29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgIHZhciBhY2Nlc3NvciA9IGNvbHVtbi5hY2Nlc3NvcixcbiAgICAgICAgICBkZWZhdWx0Q29sdW1uUGl2b3QgPSBjb2x1bW4uZGVmYXVsdFBpdm90LFxuICAgICAgICAgIGNvbHVtbkRpc2FibGVQaXZvdCA9IGNvbHVtbi5kaXNhYmxlUGl2b3Q7XG4gICAgICBjb2x1bW4uY2FuUGl2b3QgPSBhY2Nlc3NvciA/IGdldEZpcnN0RGVmaW5lZChjb2x1bW4uY2FuUGl2b3QsIGNvbHVtbkRpc2FibGVQaXZvdCA9PT0gdHJ1ZSA/IGZhbHNlIDogdW5kZWZpbmVkLCBkaXNhYmxlUGl2b3QgPT09IHRydWUgPyBmYWxzZSA6IHVuZGVmaW5lZCwgdHJ1ZSkgOiBnZXRGaXJzdERlZmluZWQoY29sdW1uLmNhblBpdm90LCBkZWZhdWx0Q29sdW1uUGl2b3QsIGRlZmF1bHRDYW5QaXZvdCwgZmFsc2UpO1xuXG4gICAgICBpZiAoY29sdW1uLmNhblBpdm90KSB7XG4gICAgICAgIGNvbHVtbi50b2dnbGVQaXZvdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gaW5zdGFuY2UudG9nZ2xlUGl2b3QoY29sdW1uLmlkKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29sdW1uLkFnZ3JlZ2F0ZWQgPSBjb2x1bW4uQWdncmVnYXRlZCB8fCBjb2x1bW4uQ2VsbDtcbiAgICB9KTtcblxuICAgIHZhciB0b2dnbGVQaXZvdCA9IGZ1bmN0aW9uIHRvZ2dsZVBpdm90KGNvbHVtbklkLCB2YWx1ZSkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnRvZ2dsZVBpdm90LFxuICAgICAgICBjb2x1bW5JZDogY29sdW1uSWQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZsYXRIZWFkZXJzLmZvckVhY2goZnVuY3Rpb24gKGhlYWRlcikge1xuICAgICAgaGVhZGVyLmdldFBpdm90VG9nZ2xlUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldFBpdm90VG9nZ2xlUHJvcHMsIHtcbiAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKCksXG4gICAgICAgIGhlYWRlcjogaGVhZGVyXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB2YXIgZ2V0QXV0b1Jlc2V0UGl2b3QgPSB1c2VHZXRMYXRlc3QoYXV0b1Jlc2V0UGl2b3QpO1xuICAgIHVzZU1vdW50ZWRMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGdldEF1dG9SZXNldFBpdm90KCkpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IGFjdGlvbnMucmVzZXRQaXZvdFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBbZGlzcGF0Y2gsIG1hbmF1bFBpdm90ID8gbnVsbCA6IGNvbHVtbnNdKTtcbiAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCB7XG4gICAgICB0b2dnbGVQaXZvdDogdG9nZ2xlUGl2b3RcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXBhcmVSb3ckMihyb3cpIHtcbiAgICByb3cuYWxsQ2VsbHMuZm9yRWFjaChmdW5jdGlvbiAoY2VsbCkge1xuICAgICAgLy8gR3JvdXBlZCBjZWxscyBhcmUgaW4gdGhlIHBpdm90Q29sdW1ucyBhbmQgdGhlIHBpdm90IGNlbGwgZm9yIHRoZSByb3dcbiAgICAgIGNlbGwuaXNQaXZvdGVkID0gY2VsbC5jb2x1bW4uaXNQaXZvdGVkO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHBsdWdpbk5hbWUkMSA9ICd1c2VSb3dTZWxlY3QnOyAvLyBBY3Rpb25zXG5cbiAgYWN0aW9ucy5yZXNldFNlbGVjdGVkUm93cyA9ICdyZXNldFNlbGVjdGVkUm93cyc7XG4gIGFjdGlvbnMudG9nZ2xlQWxsUm93c1NlbGVjdGVkID0gJ3RvZ2dsZUFsbFJvd3NTZWxlY3RlZCc7XG4gIGFjdGlvbnMudG9nZ2xlUm93U2VsZWN0ZWQgPSAndG9nZ2xlUm93U2VsZWN0ZWQnO1xuICB2YXIgdXNlUm93U2VsZWN0ID0gZnVuY3Rpb24gdXNlUm93U2VsZWN0KGhvb2tzKSB7XG4gICAgaG9va3MuZ2V0VG9nZ2xlUm93U2VsZWN0ZWRQcm9wcyA9IFtkZWZhdWx0R2V0VG9nZ2xlUm93U2VsZWN0ZWRQcm9wc107XG4gICAgaG9va3MuZ2V0VG9nZ2xlQWxsUm93c1NlbGVjdGVkUHJvcHMgPSBbZGVmYXVsdEdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzXTtcbiAgICBob29rcy5zdGF0ZVJlZHVjZXJzLnB1c2gocmVkdWNlciQ4KTtcbiAgICBob29rcy51c2VJbnN0YW5jZS5wdXNoKHVzZUluc3RhbmNlJDgpO1xuICAgIGhvb2tzLnByZXBhcmVSb3cucHVzaChwcmVwYXJlUm93JDMpO1xuICB9O1xuICB1c2VSb3dTZWxlY3QucGx1Z2luTmFtZSA9IHBsdWdpbk5hbWUkMTtcblxuICB2YXIgZGVmYXVsdEdldFRvZ2dsZVJvd1NlbGVjdGVkUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0VG9nZ2xlUm93U2VsZWN0ZWRQcm9wcyhwcm9wcywgX3JlZikge1xuICAgIHZhciBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2UsXG4gICAgICAgIHJvdyA9IF9yZWYucm93O1xuICAgIHZhciBfaW5zdGFuY2UkbWFudWFsUm93U2UgPSBpbnN0YW5jZS5tYW51YWxSb3dTZWxlY3RlZEtleSxcbiAgICAgICAgbWFudWFsUm93U2VsZWN0ZWRLZXkgPSBfaW5zdGFuY2UkbWFudWFsUm93U2UgPT09IHZvaWQgMCA/ICdpc1NlbGVjdGVkJyA6IF9pbnN0YW5jZSRtYW51YWxSb3dTZTtcbiAgICB2YXIgY2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgaWYgKHJvdy5vcmlnaW5hbCAmJiByb3cub3JpZ2luYWxbbWFudWFsUm93U2VsZWN0ZWRLZXldKSB7XG4gICAgICBjaGVja2VkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hlY2tlZCA9IHJvdy5pc1NlbGVjdGVkO1xuICAgIH1cblxuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShlKSB7XG4gICAgICAgIHJvdy50b2dnbGVSb3dTZWxlY3RlZChlLnRhcmdldC5jaGVja2VkKTtcbiAgICAgIH0sXG4gICAgICBzdHlsZToge1xuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgICAgfSxcbiAgICAgIGNoZWNrZWQ6IGNoZWNrZWQsXG4gICAgICB0aXRsZTogJ1RvZ2dsZSBSb3cgU2VsZWN0ZWQnLFxuICAgICAgaW5kZXRlcm1pbmF0ZTogcm93LmlzU29tZVNlbGVjdGVkXG4gICAgfV07XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRHZXRUb2dnbGVBbGxSb3dzU2VsZWN0ZWRQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRUb2dnbGVBbGxSb3dzU2VsZWN0ZWRQcm9wcyhwcm9wcywgX3JlZjIpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmMi5pbnN0YW5jZTtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoZSkge1xuICAgICAgICBpbnN0YW5jZS50b2dnbGVBbGxSb3dzU2VsZWN0ZWQoZS50YXJnZXQuY2hlY2tlZCk7XG4gICAgICB9LFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgIH0sXG4gICAgICBjaGVja2VkOiBpbnN0YW5jZS5pc0FsbFJvd3NTZWxlY3RlZCxcbiAgICAgIHRpdGxlOiAnVG9nZ2xlIEFsbCBSb3dzIFNlbGVjdGVkJyxcbiAgICAgIGluZGV0ZXJtaW5hdGU6IEJvb2xlYW4oIWluc3RhbmNlLmlzQWxsUm93c1NlbGVjdGVkICYmIE9iamVjdC5rZXlzKGluc3RhbmNlLnN0YXRlLnNlbGVjdGVkUm93SWRzKS5sZW5ndGgpXG4gICAgfV07XG4gIH07XG5cbiAgZnVuY3Rpb24gcmVkdWNlciQ4KHN0YXRlLCBhY3Rpb24sIHByZXZpb3VzU3RhdGUsIGluc3RhbmNlKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmluaXQpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIHNlbGVjdGVkUm93SWRzOiB7fVxuICAgICAgfSwgc3RhdGUpO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5yZXNldFNlbGVjdGVkUm93cykge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBzZWxlY3RlZFJvd0lkczogaW5zdGFuY2UuaW5pdGlhbFN0YXRlLnNlbGVjdGVkUm93SWRzIHx8IHt9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMudG9nZ2xlQWxsUm93c1NlbGVjdGVkKSB7XG4gICAgICB2YXIgc2V0U2VsZWN0ZWQgPSBhY3Rpb24udmFsdWU7XG4gICAgICB2YXIgaXNBbGxSb3dzU2VsZWN0ZWQgPSBpbnN0YW5jZS5pc0FsbFJvd3NTZWxlY3RlZCxcbiAgICAgICAgICByb3dzQnlJZCA9IGluc3RhbmNlLnJvd3NCeUlkLFxuICAgICAgICAgIF9pbnN0YW5jZSRub25Hcm91cGVkUiA9IGluc3RhbmNlLm5vbkdyb3VwZWRSb3dzQnlJZCxcbiAgICAgICAgICBub25Hcm91cGVkUm93c0J5SWQgPSBfaW5zdGFuY2Ukbm9uR3JvdXBlZFIgPT09IHZvaWQgMCA/IHJvd3NCeUlkIDogX2luc3RhbmNlJG5vbkdyb3VwZWRSO1xuICAgICAgdmFyIHNlbGVjdEFsbCA9IHR5cGVvZiBzZXRTZWxlY3RlZCAhPT0gJ3VuZGVmaW5lZCcgPyBzZXRTZWxlY3RlZCA6ICFpc0FsbFJvd3NTZWxlY3RlZDsgLy8gT25seSByZW1vdmUvYWRkIHRoZSByb3dzIHRoYXQgYXJlIHZpc2libGUgb24gdGhlIHNjcmVlblxuICAgICAgLy8gIExlYXZlIGFsbCB0aGUgb3RoZXIgcm93cyB0aGF0IGFyZSBzZWxlY3RlZCBhbG9uZS5cblxuICAgICAgdmFyIHNlbGVjdGVkUm93SWRzID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc2VsZWN0ZWRSb3dJZHMpO1xuXG4gICAgICBpZiAoc2VsZWN0QWxsKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKG5vbkdyb3VwZWRSb3dzQnlJZCkuZm9yRWFjaChmdW5jdGlvbiAocm93SWQpIHtcbiAgICAgICAgICBzZWxlY3RlZFJvd0lkc1tyb3dJZF0gPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5rZXlzKG5vbkdyb3VwZWRSb3dzQnlJZCkuZm9yRWFjaChmdW5jdGlvbiAocm93SWQpIHtcbiAgICAgICAgICBkZWxldGUgc2VsZWN0ZWRSb3dJZHNbcm93SWRdO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBzZWxlY3RlZFJvd0lkczogc2VsZWN0ZWRSb3dJZHNcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy50b2dnbGVSb3dTZWxlY3RlZCkge1xuICAgICAgdmFyIGlkID0gYWN0aW9uLmlkLFxuICAgICAgICAgIF9zZXRTZWxlY3RlZCA9IGFjdGlvbi52YWx1ZTtcbiAgICAgIHZhciBfcm93c0J5SWQgPSBpbnN0YW5jZS5yb3dzQnlJZCxcbiAgICAgICAgICBfaW5zdGFuY2Ukc2VsZWN0U3ViUm8gPSBpbnN0YW5jZS5zZWxlY3RTdWJSb3dzLFxuICAgICAgICAgIHNlbGVjdFN1YlJvd3MgPSBfaW5zdGFuY2Ukc2VsZWN0U3ViUm8gPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2Ukc2VsZWN0U3ViUm87IC8vIEpvaW4gdGhlIGlkcyBvZiBkZWVwIHJvd3NcbiAgICAgIC8vIHRvIG1ha2UgYSBrZXksIHRoZW4gbWFuYWdlIGFsbCBvZiB0aGUga2V5c1xuICAgICAgLy8gaW4gYSBmbGF0IG9iamVjdFxuXG4gICAgICB2YXIgcm93ID0gX3Jvd3NCeUlkW2lkXTtcbiAgICAgIHZhciBpc1NlbGVjdGVkID0gcm93LmlzU2VsZWN0ZWQ7XG4gICAgICB2YXIgc2hvdWxkRXhpc3QgPSB0eXBlb2YgX3NldFNlbGVjdGVkICE9PSAndW5kZWZpbmVkJyA/IF9zZXRTZWxlY3RlZCA6ICFpc1NlbGVjdGVkO1xuXG4gICAgICBpZiAoaXNTZWxlY3RlZCA9PT0gc2hvdWxkRXhpc3QpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV3U2VsZWN0ZWRSb3dJZHMgPSBfZXh0ZW5kcyh7fSwgc3RhdGUuc2VsZWN0ZWRSb3dJZHMpO1xuXG4gICAgICB2YXIgaGFuZGxlUm93QnlJZCA9IGZ1bmN0aW9uIGhhbmRsZVJvd0J5SWQoaWQpIHtcbiAgICAgICAgdmFyIHJvdyA9IF9yb3dzQnlJZFtpZF07XG5cbiAgICAgICAgaWYgKCFyb3cuaXNHcm91cGVkKSB7XG4gICAgICAgICAgaWYgKHNob3VsZEV4aXN0KSB7XG4gICAgICAgICAgICBuZXdTZWxlY3RlZFJvd0lkc1tpZF0gPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgbmV3U2VsZWN0ZWRSb3dJZHNbaWRdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxlY3RTdWJSb3dzICYmIHJvdy5zdWJSb3dzKSB7XG4gICAgICAgICAgcmV0dXJuIHJvdy5zdWJSb3dzLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZVJvd0J5SWQocm93LmlkKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaGFuZGxlUm93QnlJZChpZCk7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHNlbGVjdGVkUm93SWRzOiBuZXdTZWxlY3RlZFJvd0lkc1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXNlSW5zdGFuY2UkOChpbnN0YW5jZSkge1xuICAgIHZhciBkYXRhID0gaW5zdGFuY2UuZGF0YSxcbiAgICAgICAgcm93cyA9IGluc3RhbmNlLnJvd3MsXG4gICAgICAgIGdldEhvb2tzID0gaW5zdGFuY2UuZ2V0SG9va3MsXG4gICAgICAgIHBsdWdpbnMgPSBpbnN0YW5jZS5wbHVnaW5zLFxuICAgICAgICByb3dzQnlJZCA9IGluc3RhbmNlLnJvd3NCeUlkLFxuICAgICAgICBfaW5zdGFuY2Ukbm9uR3JvdXBlZFIyID0gaW5zdGFuY2Uubm9uR3JvdXBlZFJvd3NCeUlkLFxuICAgICAgICBub25Hcm91cGVkUm93c0J5SWQgPSBfaW5zdGFuY2Ukbm9uR3JvdXBlZFIyID09PSB2b2lkIDAgPyByb3dzQnlJZCA6IF9pbnN0YW5jZSRub25Hcm91cGVkUjIsXG4gICAgICAgIF9pbnN0YW5jZSRhdXRvUmVzZXRTZSA9IGluc3RhbmNlLmF1dG9SZXNldFNlbGVjdGVkUm93cyxcbiAgICAgICAgYXV0b1Jlc2V0U2VsZWN0ZWRSb3dzID0gX2luc3RhbmNlJGF1dG9SZXNldFNlID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJGF1dG9SZXNldFNlLFxuICAgICAgICBzZWxlY3RlZFJvd0lkcyA9IGluc3RhbmNlLnN0YXRlLnNlbGVjdGVkUm93SWRzLFxuICAgICAgICBfaW5zdGFuY2Ukc2VsZWN0U3ViUm8yID0gaW5zdGFuY2Uuc2VsZWN0U3ViUm93cyxcbiAgICAgICAgc2VsZWN0U3ViUm93cyA9IF9pbnN0YW5jZSRzZWxlY3RTdWJSbzIgPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2Ukc2VsZWN0U3ViUm8yLFxuICAgICAgICBkaXNwYXRjaCA9IGluc3RhbmNlLmRpc3BhdGNoO1xuICAgIGVuc3VyZVBsdWdpbk9yZGVyKHBsdWdpbnMsIFsndXNlRmlsdGVycycsICd1c2VHcm91cEJ5JywgJ3VzZVNvcnRCeSddLCAndXNlUm93U2VsZWN0Jyk7XG4gICAgdmFyIHNlbGVjdGVkRmxhdFJvd3MgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzZWxlY3RlZEZsYXRSb3dzID0gW107XG4gICAgICByb3dzLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICB2YXIgaXNTZWxlY3RlZCA9IHNlbGVjdFN1YlJvd3MgPyBnZXRSb3dJc1NlbGVjdGVkKHJvdywgc2VsZWN0ZWRSb3dJZHMpIDogISFzZWxlY3RlZFJvd0lkc1tyb3cuaWRdO1xuICAgICAgICByb3cuaXNTZWxlY3RlZCA9ICEhaXNTZWxlY3RlZDtcbiAgICAgICAgcm93LmlzU29tZVNlbGVjdGVkID0gaXNTZWxlY3RlZCA9PT0gbnVsbDtcblxuICAgICAgICBpZiAoaXNTZWxlY3RlZCkge1xuICAgICAgICAgIHNlbGVjdGVkRmxhdFJvd3MucHVzaChyb3cpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzZWxlY3RlZEZsYXRSb3dzO1xuICAgIH0sIFtyb3dzLCBzZWxlY3RTdWJSb3dzLCBzZWxlY3RlZFJvd0lkc10pO1xuICAgIHZhciBpc0FsbFJvd3NTZWxlY3RlZCA9IEJvb2xlYW4oT2JqZWN0LmtleXMobm9uR3JvdXBlZFJvd3NCeUlkKS5sZW5ndGggJiYgT2JqZWN0LmtleXMoc2VsZWN0ZWRSb3dJZHMpLmxlbmd0aCk7XG5cbiAgICBpZiAoaXNBbGxSb3dzU2VsZWN0ZWQpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhub25Hcm91cGVkUm93c0J5SWQpLnNvbWUoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiAhc2VsZWN0ZWRSb3dJZHNbaWRdO1xuICAgICAgfSkpIHtcbiAgICAgICAgaXNBbGxSb3dzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZ2V0QXV0b1Jlc2V0U2VsZWN0ZWRSb3dzID0gdXNlR2V0TGF0ZXN0KGF1dG9SZXNldFNlbGVjdGVkUm93cyk7XG4gICAgdXNlTW91bnRlZExheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZ2V0QXV0b1Jlc2V0U2VsZWN0ZWRSb3dzKCkpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IGFjdGlvbnMucmVzZXRTZWxlY3RlZFJvd3NcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgW2Rpc3BhdGNoLCBkYXRhXSk7XG4gICAgdmFyIHRvZ2dsZUFsbFJvd3NTZWxlY3RlZCA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy50b2dnbGVBbGxSb3dzU2VsZWN0ZWQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgdmFyIHRvZ2dsZVJvd1NlbGVjdGVkID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGlkLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy50b2dnbGVSb3dTZWxlY3RlZCxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgIHZhciBnZXRJbnN0YW5jZSA9IHVzZUdldExhdGVzdChpbnN0YW5jZSk7XG4gICAgdmFyIGdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzID0gbWFrZVByb3BHZXR0ZXIoZ2V0SG9va3MoKS5nZXRUb2dnbGVBbGxSb3dzU2VsZWN0ZWRQcm9wcywge1xuICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICB9KTtcbiAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCB7XG4gICAgICBzZWxlY3RlZEZsYXRSb3dzOiBzZWxlY3RlZEZsYXRSb3dzLFxuICAgICAgaXNBbGxSb3dzU2VsZWN0ZWQ6IGlzQWxsUm93c1NlbGVjdGVkLFxuICAgICAgdG9nZ2xlUm93U2VsZWN0ZWQ6IHRvZ2dsZVJvd1NlbGVjdGVkLFxuICAgICAgdG9nZ2xlQWxsUm93c1NlbGVjdGVkOiB0b2dnbGVBbGxSb3dzU2VsZWN0ZWQsXG4gICAgICBnZXRUb2dnbGVBbGxSb3dzU2VsZWN0ZWRQcm9wczogZ2V0VG9nZ2xlQWxsUm93c1NlbGVjdGVkUHJvcHNcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXBhcmVSb3ckMyhyb3csIF9yZWYzKSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZjMuaW5zdGFuY2U7XG5cbiAgICByb3cudG9nZ2xlUm93U2VsZWN0ZWQgPSBmdW5jdGlvbiAoc2V0KSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2UudG9nZ2xlUm93U2VsZWN0ZWQocm93LmlkLCBzZXQpO1xuICAgIH07XG5cbiAgICByb3cuZ2V0VG9nZ2xlUm93U2VsZWN0ZWRQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGluc3RhbmNlLmdldEhvb2tzKCkuZ2V0VG9nZ2xlUm93U2VsZWN0ZWRQcm9wcywge1xuICAgICAgaW5zdGFuY2U6IGluc3RhbmNlLFxuICAgICAgcm93OiByb3dcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFJvd0lzU2VsZWN0ZWQocm93LCBzZWxlY3RlZFJvd0lkcykge1xuICAgIGlmIChzZWxlY3RlZFJvd0lkc1tyb3cuaWRdKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocm93LnN1YlJvd3MgJiYgcm93LnN1YlJvd3MubGVuZ3RoKSB7XG4gICAgICB2YXIgYWxsQ2hpbGRyZW5TZWxlY3RlZCA9IHRydWU7XG4gICAgICB2YXIgc29tZVNlbGVjdGVkID0gZmFsc2U7XG4gICAgICByb3cuc3ViUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChzdWJSb3cpIHtcbiAgICAgICAgLy8gQmFpbCBvdXQgZWFybHkgaWYgd2Uga25vdyBib3RoIG9mIHRoZXNlXG4gICAgICAgIGlmIChzb21lU2VsZWN0ZWQgJiYgIWFsbENoaWxkcmVuU2VsZWN0ZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ2V0Um93SXNTZWxlY3RlZChzdWJSb3csIHNlbGVjdGVkUm93SWRzKSkge1xuICAgICAgICAgIHNvbWVTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxsQ2hpbGRyZW5TZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhbGxDaGlsZHJlblNlbGVjdGVkID8gdHJ1ZSA6IHNvbWVTZWxlY3RlZCA/IG51bGwgOiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZGVmYXVsdEluaXRpYWxSb3dTdGF0ZUFjY2Vzc29yID0gZnVuY3Rpb24gZGVmYXVsdEluaXRpYWxSb3dTdGF0ZUFjY2Vzc29yKG9yaWdpbmFsUm93KSB7XG4gICAgcmV0dXJuIHt9O1xuICB9O1xuXG4gIHZhciBkZWZhdWx0SW5pdGlhbENlbGxTdGF0ZUFjY2Vzc29yID0gZnVuY3Rpb24gZGVmYXVsdEluaXRpYWxDZWxsU3RhdGVBY2Nlc3NvcihvcmlnaW5hbFJvdykge1xuICAgIHJldHVybiB7fTtcbiAgfTsgLy8gQWN0aW9uc1xuXG5cbiAgYWN0aW9ucy5zZXRSb3dTdGF0ZSA9ICdzZXRSb3dTdGF0ZSc7XG4gIGFjdGlvbnMuc2V0Q2VsbFN0YXRlID0gJ3NldENlbGxTdGF0ZSc7XG4gIGFjdGlvbnMucmVzZXRSb3dTdGF0ZSA9ICdyZXNldFJvd1N0YXRlJztcbiAgdmFyIHVzZVJvd1N0YXRlID0gZnVuY3Rpb24gdXNlUm93U3RhdGUoaG9va3MpIHtcbiAgICBob29rcy5zdGF0ZVJlZHVjZXJzLnB1c2gocmVkdWNlciQ5KTtcbiAgICBob29rcy51c2VJbnN0YW5jZS5wdXNoKHVzZUluc3RhbmNlJDkpO1xuICAgIGhvb2tzLnByZXBhcmVSb3cucHVzaChwcmVwYXJlUm93JDQpO1xuICB9O1xuICB1c2VSb3dTdGF0ZS5wbHVnaW5OYW1lID0gJ3VzZVJvd1N0YXRlJztcblxuICBmdW5jdGlvbiByZWR1Y2VyJDkoc3RhdGUsIGFjdGlvbiwgcHJldmlvdXNTdGF0ZSwgaW5zdGFuY2UpIHtcbiAgICB2YXIgX2luc3RhbmNlJGluaXRpYWxSb3dTID0gaW5zdGFuY2UuaW5pdGlhbFJvd1N0YXRlQWNjZXNzb3IsXG4gICAgICAgIGluaXRpYWxSb3dTdGF0ZUFjY2Vzc29yID0gX2luc3RhbmNlJGluaXRpYWxSb3dTID09PSB2b2lkIDAgPyBkZWZhdWx0SW5pdGlhbFJvd1N0YXRlQWNjZXNzb3IgOiBfaW5zdGFuY2UkaW5pdGlhbFJvd1MsXG4gICAgICAgIF9pbnN0YW5jZSRpbml0aWFsQ2VsbCA9IGluc3RhbmNlLmluaXRpYWxDZWxsU3RhdGVBY2Nlc3NvcixcbiAgICAgICAgaW5pdGlhbENlbGxTdGF0ZUFjY2Vzc29yID0gX2luc3RhbmNlJGluaXRpYWxDZWxsID09PSB2b2lkIDAgPyBkZWZhdWx0SW5pdGlhbENlbGxTdGF0ZUFjY2Vzc29yIDogX2luc3RhbmNlJGluaXRpYWxDZWxsLFxuICAgICAgICByb3dzQnlJZCA9IGluc3RhbmNlLnJvd3NCeUlkO1xuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmluaXQpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIHJvd1N0YXRlOiB7fVxuICAgICAgfSwgc3RhdGUpO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5yZXNldFJvd1N0YXRlKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHJvd1N0YXRlOiBpbnN0YW5jZS5pbml0aWFsU3RhdGUucm93U3RhdGUgfHwge31cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5zZXRSb3dTdGF0ZSkge1xuICAgICAgdmFyIF9leHRlbmRzMjtcblxuICAgICAgdmFyIHJvd0lkID0gYWN0aW9uLnJvd0lkLFxuICAgICAgICAgIHZhbHVlID0gYWN0aW9uLnZhbHVlO1xuICAgICAgdmFyIG9sZFJvd1N0YXRlID0gdHlwZW9mIHN0YXRlLnJvd1N0YXRlW3Jvd0lkXSAhPT0gJ3VuZGVmaW5lZCcgPyBzdGF0ZS5yb3dTdGF0ZVtyb3dJZF0gOiBpbml0aWFsUm93U3RhdGVBY2Nlc3Nvcihyb3dzQnlJZFtyb3dJZF0ub3JpZ2luYWwpO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICByb3dTdGF0ZTogX2V4dGVuZHMoe30sIHN0YXRlLnJvd1N0YXRlLCAoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltyb3dJZF0gPSBmdW5jdGlvbmFsVXBkYXRlKHZhbHVlLCBvbGRSb3dTdGF0ZSksIF9leHRlbmRzMikpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuc2V0Q2VsbFN0YXRlKSB7XG4gICAgICB2YXIgX29sZFJvd1N0YXRlJGNlbGxTdGF0LCBfZXh0ZW5kczMsIF9leHRlbmRzNDtcblxuICAgICAgdmFyIF9yb3dJZCA9IGFjdGlvbi5yb3dJZCxcbiAgICAgICAgICBjb2x1bW5JZCA9IGFjdGlvbi5jb2x1bW5JZCxcbiAgICAgICAgICBfdmFsdWUgPSBhY3Rpb24udmFsdWU7XG5cbiAgICAgIHZhciBfb2xkUm93U3RhdGUgPSB0eXBlb2Ygc3RhdGUucm93U3RhdGVbX3Jvd0lkXSAhPT0gJ3VuZGVmaW5lZCcgPyBzdGF0ZS5yb3dTdGF0ZVtfcm93SWRdIDogaW5pdGlhbFJvd1N0YXRlQWNjZXNzb3Iocm93c0J5SWRbX3Jvd0lkXS5vcmlnaW5hbCk7XG5cbiAgICAgIHZhciBvbGRDZWxsU3RhdGUgPSB0eXBlb2YgKF9vbGRSb3dTdGF0ZSA9PSBudWxsID8gdm9pZCAwIDogKF9vbGRSb3dTdGF0ZSRjZWxsU3RhdCA9IF9vbGRSb3dTdGF0ZS5jZWxsU3RhdGUpID09IG51bGwgPyB2b2lkIDAgOiBfb2xkUm93U3RhdGUkY2VsbFN0YXRbY29sdW1uSWRdKSAhPT0gJ3VuZGVmaW5lZCcgPyBfb2xkUm93U3RhdGUuY2VsbFN0YXRlW2NvbHVtbklkXSA6IGluaXRpYWxDZWxsU3RhdGVBY2Nlc3Nvcihyb3dzQnlJZFtfcm93SWRdLm9yaWdpbmFsKTtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgcm93U3RhdGU6IF9leHRlbmRzKHt9LCBzdGF0ZS5yb3dTdGF0ZSwgKF9leHRlbmRzNCA9IHt9LCBfZXh0ZW5kczRbX3Jvd0lkXSA9IF9leHRlbmRzKHt9LCBfb2xkUm93U3RhdGUsIHtcbiAgICAgICAgICBjZWxsU3RhdGU6IF9leHRlbmRzKHt9LCBfb2xkUm93U3RhdGUuY2VsbFN0YXRlIHx8IHt9LCAoX2V4dGVuZHMzID0ge30sIF9leHRlbmRzM1tjb2x1bW5JZF0gPSBmdW5jdGlvbmFsVXBkYXRlKF92YWx1ZSwgb2xkQ2VsbFN0YXRlKSwgX2V4dGVuZHMzKSlcbiAgICAgICAgfSksIF9leHRlbmRzNCkpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1c2VJbnN0YW5jZSQ5KGluc3RhbmNlKSB7XG4gICAgdmFyIF9pbnN0YW5jZSRhdXRvUmVzZXRSbyA9IGluc3RhbmNlLmF1dG9SZXNldFJvd1N0YXRlLFxuICAgICAgICBhdXRvUmVzZXRSb3dTdGF0ZSA9IF9pbnN0YW5jZSRhdXRvUmVzZXRSbyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRhdXRvUmVzZXRSbyxcbiAgICAgICAgZGF0YSA9IGluc3RhbmNlLmRhdGEsXG4gICAgICAgIGRpc3BhdGNoID0gaW5zdGFuY2UuZGlzcGF0Y2g7XG4gICAgdmFyIHNldFJvd1N0YXRlID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHJvd0lkLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy5zZXRSb3dTdGF0ZSxcbiAgICAgICAgcm93SWQ6IHJvd0lkLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgIHZhciBzZXRDZWxsU3RhdGUgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAocm93SWQsIGNvbHVtbklkLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy5zZXRDZWxsU3RhdGUsXG4gICAgICAgIHJvd0lkOiByb3dJZCxcbiAgICAgICAgY29sdW1uSWQ6IGNvbHVtbklkLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgIHZhciBnZXRBdXRvUmVzZXRSb3dTdGF0ZSA9IHVzZUdldExhdGVzdChhdXRvUmVzZXRSb3dTdGF0ZSk7XG4gICAgdXNlTW91bnRlZExheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZ2V0QXV0b1Jlc2V0Um93U3RhdGUoKSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogYWN0aW9ucy5yZXNldFJvd1N0YXRlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIFtkYXRhXSk7XG4gICAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZSwge1xuICAgICAgc2V0Um93U3RhdGU6IHNldFJvd1N0YXRlLFxuICAgICAgc2V0Q2VsbFN0YXRlOiBzZXRDZWxsU3RhdGVcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXBhcmVSb3ckNChyb3csIF9yZWYpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlO1xuICAgIHZhciBfaW5zdGFuY2UkaW5pdGlhbFJvd1MyID0gaW5zdGFuY2UuaW5pdGlhbFJvd1N0YXRlQWNjZXNzb3IsXG4gICAgICAgIGluaXRpYWxSb3dTdGF0ZUFjY2Vzc29yID0gX2luc3RhbmNlJGluaXRpYWxSb3dTMiA9PT0gdm9pZCAwID8gZGVmYXVsdEluaXRpYWxSb3dTdGF0ZUFjY2Vzc29yIDogX2luc3RhbmNlJGluaXRpYWxSb3dTMixcbiAgICAgICAgX2luc3RhbmNlJGluaXRpYWxDZWxsMiA9IGluc3RhbmNlLmluaXRpYWxDZWxsU3RhdGVBY2Nlc3NvcixcbiAgICAgICAgaW5pdGlhbENlbGxTdGF0ZUFjY2Vzc29yID0gX2luc3RhbmNlJGluaXRpYWxDZWxsMiA9PT0gdm9pZCAwID8gZGVmYXVsdEluaXRpYWxDZWxsU3RhdGVBY2Nlc3NvciA6IF9pbnN0YW5jZSRpbml0aWFsQ2VsbDIsXG4gICAgICAgIHJvd1N0YXRlID0gaW5zdGFuY2Uuc3RhdGUucm93U3RhdGU7XG5cbiAgICBpZiAocm93Lm9yaWdpbmFsKSB7XG4gICAgICByb3cuc3RhdGUgPSB0eXBlb2Ygcm93U3RhdGVbcm93LmlkXSAhPT0gJ3VuZGVmaW5lZCcgPyByb3dTdGF0ZVtyb3cuaWRdIDogaW5pdGlhbFJvd1N0YXRlQWNjZXNzb3Iocm93Lm9yaWdpbmFsKTtcblxuICAgICAgcm93LnNldFN0YXRlID0gZnVuY3Rpb24gKHVwZGF0ZXIpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLnNldFJvd1N0YXRlKHJvdy5pZCwgdXBkYXRlcik7XG4gICAgICB9O1xuXG4gICAgICByb3cuY2VsbHMuZm9yRWFjaChmdW5jdGlvbiAoY2VsbCkge1xuICAgICAgICBpZiAoIXJvdy5zdGF0ZS5jZWxsU3RhdGUpIHtcbiAgICAgICAgICByb3cuc3RhdGUuY2VsbFN0YXRlID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBjZWxsLnN0YXRlID0gdHlwZW9mIHJvdy5zdGF0ZS5jZWxsU3RhdGVbY2VsbC5jb2x1bW4uaWRdICE9PSAndW5kZWZpbmVkJyA/IHJvdy5zdGF0ZS5jZWxsU3RhdGVbY2VsbC5jb2x1bW4uaWRdIDogaW5pdGlhbENlbGxTdGF0ZUFjY2Vzc29yKHJvdy5vcmlnaW5hbCk7XG5cbiAgICAgICAgY2VsbC5zZXRTdGF0ZSA9IGZ1bmN0aW9uICh1cGRhdGVyKSB7XG4gICAgICAgICAgcmV0dXJuIGluc3RhbmNlLnNldENlbGxTdGF0ZShyb3cuaWQsIGNlbGwuY29sdW1uLmlkLCB1cGRhdGVyKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFjdGlvbnMucmVzZXRDb2x1bW5PcmRlciA9ICdyZXNldENvbHVtbk9yZGVyJztcbiAgYWN0aW9ucy5zZXRDb2x1bW5PcmRlciA9ICdzZXRDb2x1bW5PcmRlcic7XG4gIHZhciB1c2VDb2x1bW5PcmRlciA9IGZ1bmN0aW9uIHVzZUNvbHVtbk9yZGVyKGhvb2tzKSB7XG4gICAgaG9va3Muc3RhdGVSZWR1Y2Vycy5wdXNoKHJlZHVjZXIkYSk7XG4gICAgaG9va3MudmlzaWJsZUNvbHVtbnNEZXBzLnB1c2goZnVuY3Rpb24gKGRlcHMsIF9yZWYpIHtcbiAgICAgIHZhciBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2U7XG4gICAgICByZXR1cm4gW10uY29uY2F0KGRlcHMsIFtpbnN0YW5jZS5zdGF0ZS5jb2x1bW5PcmRlcl0pO1xuICAgIH0pO1xuICAgIGhvb2tzLnZpc2libGVDb2x1bW5zLnB1c2godmlzaWJsZUNvbHVtbnMkMik7XG4gICAgaG9va3MudXNlSW5zdGFuY2UucHVzaCh1c2VJbnN0YW5jZSRhKTtcbiAgfTtcbiAgdXNlQ29sdW1uT3JkZXIucGx1Z2luTmFtZSA9ICd1c2VDb2x1bW5PcmRlcic7XG5cbiAgZnVuY3Rpb24gcmVkdWNlciRhKHN0YXRlLCBhY3Rpb24sIHByZXZpb3VzU3RhdGUsIGluc3RhbmNlKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmluaXQpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIGNvbHVtbk9yZGVyOiBbXVxuICAgICAgfSwgc3RhdGUpO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5yZXNldENvbHVtbk9yZGVyKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGNvbHVtbk9yZGVyOiBpbnN0YW5jZS5pbml0aWFsU3RhdGUuY29sdW1uT3JkZXIgfHwgW11cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5zZXRDb2x1bW5PcmRlcikge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBjb2x1bW5PcmRlcjogZnVuY3Rpb25hbFVwZGF0ZShhY3Rpb24uY29sdW1uT3JkZXIsIHN0YXRlLmNvbHVtbk9yZGVyKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdmlzaWJsZUNvbHVtbnMkMihjb2x1bW5zLCBfcmVmMikge1xuICAgIHZhciBjb2x1bW5PcmRlciA9IF9yZWYyLmluc3RhbmNlLnN0YXRlLmNvbHVtbk9yZGVyO1xuXG4gICAgLy8gSWYgdGhlcmUgaXMgbm8gb3JkZXIsIHJldHVybiB0aGUgbm9ybWFsIGNvbHVtbnNcbiAgICBpZiAoIWNvbHVtbk9yZGVyIHx8ICFjb2x1bW5PcmRlci5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBjb2x1bW5zO1xuICAgIH1cblxuICAgIHZhciBjb2x1bW5PcmRlckNvcHkgPSBbXS5jb25jYXQoY29sdW1uT3JkZXIpOyAvLyBJZiB0aGVyZSBpcyBhbiBvcmRlciwgbWFrZSBhIGNvcHkgb2YgdGhlIGNvbHVtbnNcblxuICAgIHZhciBjb2x1bW5zQ29weSA9IFtdLmNvbmNhdChjb2x1bW5zKTsgLy8gQW5kIG1ha2UgYSBuZXcgb3JkZXJlZCBhcnJheSBvZiB0aGUgY29sdW1uc1xuXG4gICAgdmFyIGNvbHVtbnNJbk9yZGVyID0gW107IC8vIExvb3Agb3ZlciB0aGUgY29sdW1ucyBhbmQgcGxhY2UgdGhlbSBpbiBvcmRlciBpbnRvIHRoZSBuZXcgYXJyYXlcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKCkge1xuICAgICAgdmFyIHRhcmdldENvbHVtbklkID0gY29sdW1uT3JkZXJDb3B5LnNoaWZ0KCk7XG4gICAgICB2YXIgZm91bmRJbmRleCA9IGNvbHVtbnNDb3B5LmZpbmRJbmRleChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5pZCA9PT0gdGFyZ2V0Q29sdW1uSWQ7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGZvdW5kSW5kZXggPiAtMSkge1xuICAgICAgICBjb2x1bW5zSW5PcmRlci5wdXNoKGNvbHVtbnNDb3B5LnNwbGljZShmb3VuZEluZGV4LCAxKVswXSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdoaWxlIChjb2x1bW5zQ29weS5sZW5ndGggJiYgY29sdW1uT3JkZXJDb3B5Lmxlbmd0aCkge1xuICAgICAgX2xvb3AoKTtcbiAgICB9IC8vIElmIHRoZXJlIGFyZSBhbnkgY29sdW1ucyBsZWZ0LCBhZGQgdGhlbSB0byB0aGUgZW5kXG5cblxuICAgIHJldHVybiBbXS5jb25jYXQoY29sdW1uc0luT3JkZXIsIGNvbHVtbnNDb3B5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZUluc3RhbmNlJGEoaW5zdGFuY2UpIHtcbiAgICB2YXIgZGlzcGF0Y2ggPSBpbnN0YW5jZS5kaXNwYXRjaDtcbiAgICBpbnN0YW5jZS5zZXRDb2x1bW5PcmRlciA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChjb2x1bW5PcmRlcikge1xuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy5zZXRDb2x1bW5PcmRlcixcbiAgICAgICAgY29sdW1uT3JkZXI6IGNvbHVtbk9yZGVyXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgfVxuXG4gIGRlZmF1bHRDb2x1bW4uY2FuUmVzaXplID0gdHJ1ZTsgLy8gQWN0aW9uc1xuXG4gIGFjdGlvbnMuY29sdW1uU3RhcnRSZXNpemluZyA9ICdjb2x1bW5TdGFydFJlc2l6aW5nJztcbiAgYWN0aW9ucy5jb2x1bW5SZXNpemluZyA9ICdjb2x1bW5SZXNpemluZyc7XG4gIGFjdGlvbnMuY29sdW1uRG9uZVJlc2l6aW5nID0gJ2NvbHVtbkRvbmVSZXNpemluZyc7XG4gIHZhciB1c2VSZXNpemVDb2x1bW5zID0gZnVuY3Rpb24gdXNlUmVzaXplQ29sdW1ucyhob29rcykge1xuICAgIGhvb2tzLmdldFJlc2l6ZXJQcm9wcyA9IFtkZWZhdWx0R2V0UmVzaXplclByb3BzXTtcbiAgICBob29rcy5nZXRIZWFkZXJQcm9wcy5wdXNoKHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgICB9XG4gICAgfSk7XG4gICAgaG9va3Muc3RhdGVSZWR1Y2Vycy5wdXNoKHJlZHVjZXIkYik7XG4gICAgaG9va3MudXNlSW5zdGFuY2UucHVzaCh1c2VJbnN0YW5jZSRiKTtcbiAgICBob29rcy51c2VJbnN0YW5jZUJlZm9yZURpbWVuc2lvbnMucHVzaCh1c2VJbnN0YW5jZUJlZm9yZURpbWVuc2lvbnMkMSk7XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRHZXRSZXNpemVyUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0UmVzaXplclByb3BzKHByb3BzLCBfcmVmKSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZSxcbiAgICAgICAgaGVhZGVyID0gX3JlZi5oZWFkZXI7XG4gICAgdmFyIGRpc3BhdGNoID0gaW5zdGFuY2UuZGlzcGF0Y2g7XG5cbiAgICB2YXIgb25SZXNpemVTdGFydCA9IGZ1bmN0aW9uIG9uUmVzaXplU3RhcnQoZSwgaGVhZGVyKSB7XG4gICAgICB2YXIgaXNUb3VjaEV2ZW50ID0gZmFsc2U7XG5cbiAgICAgIGlmIChlLnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgICAgICAvLyBsZXRzIG5vdCByZXNwb25kIHRvIG11bHRpcGxlIHRvdWNoZXMgKGUuZy4gMiBvciAzIGZpbmdlcnMpXG4gICAgICAgIGlmIChlLnRvdWNoZXMgJiYgZS50b3VjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpc1RvdWNoRXZlbnQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgaGVhZGVyc1RvUmVzaXplID0gZ2V0TGVhZkhlYWRlcnMoaGVhZGVyKTtcbiAgICAgIHZhciBoZWFkZXJJZFdpZHRocyA9IGhlYWRlcnNUb1Jlc2l6ZS5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIFtkLmlkLCBkLnRvdGFsV2lkdGhdO1xuICAgICAgfSk7XG4gICAgICB2YXIgY2xpZW50WCA9IGlzVG91Y2hFdmVudCA/IE1hdGgucm91bmQoZS50b3VjaGVzWzBdLmNsaWVudFgpIDogZS5jbGllbnRYO1xuXG4gICAgICB2YXIgZGlzcGF0Y2hNb3ZlID0gZnVuY3Rpb24gZGlzcGF0Y2hNb3ZlKGNsaWVudFhQb3MpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IGFjdGlvbnMuY29sdW1uUmVzaXppbmcsXG4gICAgICAgICAgY2xpZW50WDogY2xpZW50WFBvc1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBkaXNwYXRjaEVuZCA9IGZ1bmN0aW9uIGRpc3BhdGNoRW5kKCkge1xuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IGFjdGlvbnMuY29sdW1uRG9uZVJlc2l6aW5nXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgdmFyIGhhbmRsZXJzQW5kRXZlbnRzID0ge1xuICAgICAgICBtb3VzZToge1xuICAgICAgICAgIG1vdmVFdmVudDogJ21vdXNlbW92ZScsXG4gICAgICAgICAgbW92ZUhhbmRsZXI6IGZ1bmN0aW9uIG1vdmVIYW5kbGVyKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaE1vdmUoZS5jbGllbnRYKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVwRXZlbnQ6ICdtb3VzZXVwJyxcbiAgICAgICAgICB1cEhhbmRsZXI6IGZ1bmN0aW9uIHVwSGFuZGxlcihlKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVyc0FuZEV2ZW50cy5tb3VzZS5tb3ZlSGFuZGxlcik7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlcnNBbmRFdmVudHMubW91c2UudXBIYW5kbGVyKTtcbiAgICAgICAgICAgIGRpc3BhdGNoRW5kKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0b3VjaDoge1xuICAgICAgICAgIG1vdmVFdmVudDogJ3RvdWNobW92ZScsXG4gICAgICAgICAgbW92ZUhhbmRsZXI6IGZ1bmN0aW9uIG1vdmVIYW5kbGVyKGUpIHtcbiAgICAgICAgICAgIGlmIChlLmNhbmNlbGFibGUpIHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkaXNwYXRjaE1vdmUoZS50b3VjaGVzWzBdLmNsaWVudFgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdXBFdmVudDogJ3RvdWNoZW5kJyxcbiAgICAgICAgICB1cEhhbmRsZXI6IGZ1bmN0aW9uIHVwSGFuZGxlcihlKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGhhbmRsZXJzQW5kRXZlbnRzLnRvdWNoLm1vdmVFdmVudCwgaGFuZGxlcnNBbmRFdmVudHMudG91Y2gubW92ZUhhbmRsZXIpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihoYW5kbGVyc0FuZEV2ZW50cy50b3VjaC51cEV2ZW50LCBoYW5kbGVyc0FuZEV2ZW50cy50b3VjaC5tb3ZlSGFuZGxlcik7XG4gICAgICAgICAgICBkaXNwYXRjaEVuZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHZhciBldmVudHMgPSBpc1RvdWNoRXZlbnQgPyBoYW5kbGVyc0FuZEV2ZW50cy50b3VjaCA6IGhhbmRsZXJzQW5kRXZlbnRzLm1vdXNlO1xuICAgICAgdmFyIHBhc3NpdmVJZlN1cHBvcnRlZCA9IHBhc3NpdmVFdmVudFN1cHBvcnRlZCgpID8ge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSA6IGZhbHNlO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudHMubW92ZUV2ZW50LCBldmVudHMubW92ZUhhbmRsZXIsIHBhc3NpdmVJZlN1cHBvcnRlZCk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50cy51cEV2ZW50LCBldmVudHMudXBIYW5kbGVyLCBwYXNzaXZlSWZTdXBwb3J0ZWQpO1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLmNvbHVtblN0YXJ0UmVzaXppbmcsXG4gICAgICAgIGNvbHVtbklkOiBoZWFkZXIuaWQsXG4gICAgICAgIGNvbHVtbldpZHRoOiBoZWFkZXIudG90YWxXaWR0aCxcbiAgICAgICAgaGVhZGVySWRXaWR0aHM6IGhlYWRlcklkV2lkdGhzLFxuICAgICAgICBjbGllbnRYOiBjbGllbnRYXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgb25Nb3VzZURvd246IGZ1bmN0aW9uIG9uTW91c2VEb3duKGUpIHtcbiAgICAgICAgcmV0dXJuIGUucGVyc2lzdCgpIHx8IG9uUmVzaXplU3RhcnQoZSwgaGVhZGVyKTtcbiAgICAgIH0sXG4gICAgICBvblRvdWNoU3RhcnQ6IGZ1bmN0aW9uIG9uVG91Y2hTdGFydChlKSB7XG4gICAgICAgIHJldHVybiBlLnBlcnNpc3QoKSB8fCBvblJlc2l6ZVN0YXJ0KGUsIGhlYWRlcik7XG4gICAgICB9LFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgY3Vyc29yOiAnZXctcmVzaXplJ1xuICAgICAgfSxcbiAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICByb2xlOiAnc2VwYXJhdG9yJ1xuICAgIH1dO1xuICB9O1xuXG4gIHVzZVJlc2l6ZUNvbHVtbnMucGx1Z2luTmFtZSA9ICd1c2VSZXNpemVDb2x1bW5zJztcblxuICBmdW5jdGlvbiByZWR1Y2VyJGIoc3RhdGUsIGFjdGlvbikge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5pbml0KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBjb2x1bW5SZXNpemluZzoge1xuICAgICAgICAgIGNvbHVtbldpZHRoczoge31cbiAgICAgICAgfVxuICAgICAgfSwgc3RhdGUpO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5jb2x1bW5TdGFydFJlc2l6aW5nKSB7XG4gICAgICB2YXIgY2xpZW50WCA9IGFjdGlvbi5jbGllbnRYLFxuICAgICAgICAgIGNvbHVtbklkID0gYWN0aW9uLmNvbHVtbklkLFxuICAgICAgICAgIGNvbHVtbldpZHRoID0gYWN0aW9uLmNvbHVtbldpZHRoLFxuICAgICAgICAgIGhlYWRlcklkV2lkdGhzID0gYWN0aW9uLmhlYWRlcklkV2lkdGhzO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBjb2x1bW5SZXNpemluZzogX2V4dGVuZHMoe30sIHN0YXRlLmNvbHVtblJlc2l6aW5nLCB7XG4gICAgICAgICAgc3RhcnRYOiBjbGllbnRYLFxuICAgICAgICAgIGhlYWRlcklkV2lkdGhzOiBoZWFkZXJJZFdpZHRocyxcbiAgICAgICAgICBjb2x1bW5XaWR0aDogY29sdW1uV2lkdGgsXG4gICAgICAgICAgaXNSZXNpemluZ0NvbHVtbjogY29sdW1uSWRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5jb2x1bW5SZXNpemluZykge1xuICAgICAgdmFyIF9jbGllbnRYID0gYWN0aW9uLmNsaWVudFg7XG4gICAgICB2YXIgX3N0YXRlJGNvbHVtblJlc2l6aW5nID0gc3RhdGUuY29sdW1uUmVzaXppbmcsXG4gICAgICAgICAgc3RhcnRYID0gX3N0YXRlJGNvbHVtblJlc2l6aW5nLnN0YXJ0WCxcbiAgICAgICAgICBfY29sdW1uV2lkdGggPSBfc3RhdGUkY29sdW1uUmVzaXppbmcuY29sdW1uV2lkdGgsXG4gICAgICAgICAgX2hlYWRlcklkV2lkdGhzID0gX3N0YXRlJGNvbHVtblJlc2l6aW5nLmhlYWRlcklkV2lkdGhzO1xuICAgICAgdmFyIGRlbHRhWCA9IF9jbGllbnRYIC0gc3RhcnRYO1xuICAgICAgdmFyIHBlcmNlbnRhZ2VEZWx0YVggPSBkZWx0YVggLyBfY29sdW1uV2lkdGg7XG4gICAgICB2YXIgbmV3Q29sdW1uV2lkdGhzID0ge307XG5cbiAgICAgIF9oZWFkZXJJZFdpZHRocy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICB2YXIgaGVhZGVySWQgPSBfcmVmMlswXSxcbiAgICAgICAgICAgIGhlYWRlcldpZHRoID0gX3JlZjJbMV07XG4gICAgICAgIG5ld0NvbHVtbldpZHRoc1toZWFkZXJJZF0gPSBNYXRoLm1heChoZWFkZXJXaWR0aCArIGhlYWRlcldpZHRoICogcGVyY2VudGFnZURlbHRhWCwgMCk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBjb2x1bW5SZXNpemluZzogX2V4dGVuZHMoe30sIHN0YXRlLmNvbHVtblJlc2l6aW5nLCB7XG4gICAgICAgICAgY29sdW1uV2lkdGhzOiBfZXh0ZW5kcyh7fSwgc3RhdGUuY29sdW1uUmVzaXppbmcuY29sdW1uV2lkdGhzLCB7fSwgbmV3Q29sdW1uV2lkdGhzKVxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmNvbHVtbkRvbmVSZXNpemluZykge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBjb2x1bW5SZXNpemluZzogX2V4dGVuZHMoe30sIHN0YXRlLmNvbHVtblJlc2l6aW5nLCB7XG4gICAgICAgICAgc3RhcnRYOiBudWxsLFxuICAgICAgICAgIGlzUmVzaXppbmdDb2x1bW46IG51bGxcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHZhciB1c2VJbnN0YW5jZUJlZm9yZURpbWVuc2lvbnMkMSA9IGZ1bmN0aW9uIHVzZUluc3RhbmNlQmVmb3JlRGltZW5zaW9ucyhpbnN0YW5jZSkge1xuICAgIHZhciBmbGF0SGVhZGVycyA9IGluc3RhbmNlLmZsYXRIZWFkZXJzLFxuICAgICAgICBkaXNhYmxlUmVzaXppbmcgPSBpbnN0YW5jZS5kaXNhYmxlUmVzaXppbmcsXG4gICAgICAgIGdldEhvb2tzID0gaW5zdGFuY2UuZ2V0SG9va3MsXG4gICAgICAgIGNvbHVtblJlc2l6aW5nID0gaW5zdGFuY2Uuc3RhdGUuY29sdW1uUmVzaXppbmc7XG4gICAgdmFyIGdldEluc3RhbmNlID0gdXNlR2V0TGF0ZXN0KGluc3RhbmNlKTtcbiAgICBmbGF0SGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChoZWFkZXIpIHtcbiAgICAgIHZhciBjYW5SZXNpemUgPSBnZXRGaXJzdERlZmluZWQoaGVhZGVyLmRpc2FibGVSZXNpemluZyA9PT0gdHJ1ZSA/IGZhbHNlIDogdW5kZWZpbmVkLCBkaXNhYmxlUmVzaXppbmcgPT09IHRydWUgPyBmYWxzZSA6IHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICBoZWFkZXIuY2FuUmVzaXplID0gY2FuUmVzaXplO1xuICAgICAgaGVhZGVyLndpZHRoID0gY29sdW1uUmVzaXppbmcuY29sdW1uV2lkdGhzW2hlYWRlci5pZF0gfHwgaGVhZGVyLndpZHRoO1xuICAgICAgaGVhZGVyLmlzUmVzaXppbmcgPSBjb2x1bW5SZXNpemluZy5pc1Jlc2l6aW5nQ29sdW1uID09PSBoZWFkZXIuaWQ7XG5cbiAgICAgIGlmIChjYW5SZXNpemUpIHtcbiAgICAgICAgaGVhZGVyLmdldFJlc2l6ZXJQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0UmVzaXplclByb3BzLCB7XG4gICAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKCksXG4gICAgICAgICAgaGVhZGVyOiBoZWFkZXJcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gdXNlSW5zdGFuY2UkYihfcmVmMykge1xuICAgIHZhciBwbHVnaW5zID0gX3JlZjMucGx1Z2lucztcbiAgICBlbnN1cmVQbHVnaW5PcmRlcihwbHVnaW5zLCBbJ3VzZUFic29sdXRlTGF5b3V0J10sICd1c2VSZXNpemVDb2x1bW5zJyk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRMZWFmSGVhZGVycyhoZWFkZXIpIHtcbiAgICB2YXIgbGVhZkhlYWRlcnMgPSBbXTtcblxuICAgIHZhciByZWN1cnNlSGVhZGVyID0gZnVuY3Rpb24gcmVjdXJzZUhlYWRlcihoZWFkZXIpIHtcbiAgICAgIGlmIChoZWFkZXIuY29sdW1ucyAmJiBoZWFkZXIuY29sdW1ucy5sZW5ndGgpIHtcbiAgICAgICAgaGVhZGVyLmNvbHVtbnMubWFwKHJlY3Vyc2VIZWFkZXIpO1xuICAgICAgfVxuXG4gICAgICBsZWFmSGVhZGVycy5wdXNoKGhlYWRlcik7XG4gICAgfTtcblxuICAgIHJlY3Vyc2VIZWFkZXIoaGVhZGVyKTtcbiAgICByZXR1cm4gbGVhZkhlYWRlcnM7XG4gIH1cblxuICB2YXIgY2VsbFN0eWxlcyA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDBcbiAgfTtcbiAgdmFyIHVzZUFic29sdXRlTGF5b3V0ID0gZnVuY3Rpb24gdXNlQWJzb2x1dGVMYXlvdXQoaG9va3MpIHtcbiAgICBob29rcy5nZXRUYWJsZUJvZHlQcm9wcy5wdXNoKGdldFJvd1N0eWxlcyk7XG4gICAgaG9va3MuZ2V0Um93UHJvcHMucHVzaChnZXRSb3dTdHlsZXMpO1xuICAgIGhvb2tzLmdldEhlYWRlckdyb3VwUHJvcHMucHVzaChnZXRSb3dTdHlsZXMpO1xuICAgIGhvb2tzLmdldEZvb3Rlckdyb3VwUHJvcHMucHVzaChnZXRSb3dTdHlsZXMpO1xuICAgIGhvb2tzLmdldEhlYWRlclByb3BzLnB1c2goZnVuY3Rpb24gKHByb3BzLCBfcmVmKSB7XG4gICAgICB2YXIgY29sdW1uID0gX3JlZi5jb2x1bW47XG4gICAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgY2VsbFN0eWxlcywge1xuICAgICAgICAgIGxlZnQ6IGNvbHVtbi50b3RhbExlZnQgKyBcInB4XCIsXG4gICAgICAgICAgd2lkdGg6IGNvbHVtbi50b3RhbFdpZHRoICsgXCJweFwiXG4gICAgICAgIH0pXG4gICAgICB9XTtcbiAgICB9KTtcbiAgICBob29rcy5nZXRDZWxsUHJvcHMucHVzaChmdW5jdGlvbiAocHJvcHMsIF9yZWYyKSB7XG4gICAgICB2YXIgY2VsbCA9IF9yZWYyLmNlbGw7XG4gICAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgY2VsbFN0eWxlcywge1xuICAgICAgICAgIGxlZnQ6IGNlbGwuY29sdW1uLnRvdGFsTGVmdCArIFwicHhcIixcbiAgICAgICAgICB3aWR0aDogY2VsbC5jb2x1bW4udG90YWxXaWR0aCArIFwicHhcIlxuICAgICAgICB9KVxuICAgICAgfV07XG4gICAgfSk7XG4gICAgaG9va3MuZ2V0Rm9vdGVyUHJvcHMucHVzaChmdW5jdGlvbiAocHJvcHMsIF9yZWYzKSB7XG4gICAgICB2YXIgY29sdW1uID0gX3JlZjMuY29sdW1uO1xuICAgICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgICBzdHlsZTogX2V4dGVuZHMoe30sIGNlbGxTdHlsZXMsIHtcbiAgICAgICAgICBsZWZ0OiBjb2x1bW4udG90YWxMZWZ0ICsgXCJweFwiLFxuICAgICAgICAgIHdpZHRoOiBjb2x1bW4udG90YWxXaWR0aCArIFwicHhcIlxuICAgICAgICB9KVxuICAgICAgfV07XG4gICAgfSk7XG4gIH07XG4gIHVzZUFic29sdXRlTGF5b3V0LnBsdWdpbk5hbWUgPSAndXNlQWJzb2x1dGVMYXlvdXQnO1xuXG4gIHZhciBnZXRSb3dTdHlsZXMgPSBmdW5jdGlvbiBnZXRSb3dTdHlsZXMocHJvcHMsIF9yZWY0KSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZjQuaW5zdGFuY2U7XG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiBpbnN0YW5jZS50b3RhbENvbHVtbnNXaWR0aCArIFwicHhcIlxuICAgICAgfVxuICAgIH1dO1xuICB9O1xuXG4gIHZhciBjZWxsU3R5bGVzJDEgPSB7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCdcbiAgfTtcblxuICB2YXIgZ2V0Um93U3R5bGVzJDEgPSBmdW5jdGlvbiBnZXRSb3dTdHlsZXMocHJvcHMsIF9yZWYpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlO1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgd2lkdGg6IGluc3RhbmNlLnRvdGFsQ29sdW1uc1dpZHRoICsgXCJweFwiXG4gICAgICB9XG4gICAgfV07XG4gIH07XG5cbiAgdmFyIHVzZUJsb2NrTGF5b3V0ID0gZnVuY3Rpb24gdXNlQmxvY2tMYXlvdXQoaG9va3MpIHtcbiAgICBob29rcy5nZXRSb3dQcm9wcy5wdXNoKGdldFJvd1N0eWxlcyQxKTtcbiAgICBob29rcy5nZXRIZWFkZXJHcm91cFByb3BzLnB1c2goZ2V0Um93U3R5bGVzJDEpO1xuICAgIGhvb2tzLmdldEZvb3Rlckdyb3VwUHJvcHMucHVzaChnZXRSb3dTdHlsZXMkMSk7XG4gICAgaG9va3MuZ2V0SGVhZGVyUHJvcHMucHVzaChmdW5jdGlvbiAocHJvcHMsIF9yZWYyKSB7XG4gICAgICB2YXIgY29sdW1uID0gX3JlZjIuY29sdW1uO1xuICAgICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgICBzdHlsZTogX2V4dGVuZHMoe30sIGNlbGxTdHlsZXMkMSwge1xuICAgICAgICAgIHdpZHRoOiBjb2x1bW4udG90YWxXaWR0aCArIFwicHhcIlxuICAgICAgICB9KVxuICAgICAgfV07XG4gICAgfSk7XG4gICAgaG9va3MuZ2V0Q2VsbFByb3BzLnB1c2goZnVuY3Rpb24gKHByb3BzLCBfcmVmMykge1xuICAgICAgdmFyIGNlbGwgPSBfcmVmMy5jZWxsO1xuICAgICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgICBzdHlsZTogX2V4dGVuZHMoe30sIGNlbGxTdHlsZXMkMSwge1xuICAgICAgICAgIHdpZHRoOiBjZWxsLmNvbHVtbi50b3RhbFdpZHRoICsgXCJweFwiXG4gICAgICAgIH0pXG4gICAgICB9XTtcbiAgICB9KTtcbiAgICBob29rcy5nZXRGb290ZXJQcm9wcy5wdXNoKGZ1bmN0aW9uIChwcm9wcywgX3JlZjQpIHtcbiAgICAgIHZhciBjb2x1bW4gPSBfcmVmNC5jb2x1bW47XG4gICAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgY2VsbFN0eWxlcyQxLCB7XG4gICAgICAgICAgd2lkdGg6IGNvbHVtbi50b3RhbFdpZHRoICsgXCJweFwiXG4gICAgICAgIH0pXG4gICAgICB9XTtcbiAgICB9KTtcbiAgfTtcbiAgdXNlQmxvY2tMYXlvdXQucGx1Z2luTmFtZSA9ICd1c2VCbG9ja0xheW91dCc7XG5cbiAgZnVuY3Rpb24gdXNlRmxleExheW91dChob29rcykge1xuICAgIGhvb2tzLmdldFRhYmxlUHJvcHMucHVzaChnZXRUYWJsZVByb3BzKTtcbiAgICBob29rcy5nZXRSb3dQcm9wcy5wdXNoKGdldFJvd1N0eWxlcyQyKTtcbiAgICBob29rcy5nZXRIZWFkZXJHcm91cFByb3BzLnB1c2goZ2V0Um93U3R5bGVzJDIpO1xuICAgIGhvb2tzLmdldEZvb3Rlckdyb3VwUHJvcHMucHVzaChnZXRSb3dTdHlsZXMkMik7XG4gICAgaG9va3MuZ2V0SGVhZGVyUHJvcHMucHVzaChnZXRIZWFkZXJQcm9wcyk7XG4gICAgaG9va3MuZ2V0Q2VsbFByb3BzLnB1c2goZ2V0Q2VsbFByb3BzKTtcbiAgICBob29rcy5nZXRGb290ZXJQcm9wcy5wdXNoKGdldEZvb3RlclByb3BzKTtcbiAgfVxuICB1c2VGbGV4TGF5b3V0LnBsdWdpbk5hbWUgPSAndXNlRmxleExheW91dCc7XG5cbiAgdmFyIGdldFRhYmxlUHJvcHMgPSBmdW5jdGlvbiBnZXRUYWJsZVByb3BzKHByb3BzLCBfcmVmKSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZTtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBtaW5XaWR0aDogaW5zdGFuY2UudG90YWxDb2x1bW5zV2lkdGggKyBcInB4XCJcbiAgICAgIH1cbiAgICB9XTtcbiAgfTtcblxuICB2YXIgZ2V0Um93U3R5bGVzJDIgPSBmdW5jdGlvbiBnZXRSb3dTdHlsZXMocHJvcHMsIF9yZWYyKSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZjIuaW5zdGFuY2U7XG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4OiAnMSAwIGF1dG8nLFxuICAgICAgICBtaW5XaWR0aDogaW5zdGFuY2UudG90YWxDb2x1bW5zTWluV2lkdGggKyBcInB4XCJcbiAgICAgIH1cbiAgICB9XTtcbiAgfTtcblxuICB2YXIgZ2V0SGVhZGVyUHJvcHMgPSBmdW5jdGlvbiBnZXRIZWFkZXJQcm9wcyhwcm9wcywgX3JlZjMpIHtcbiAgICB2YXIgY29sdW1uID0gX3JlZjMuY29sdW1uO1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBmbGV4OiBjb2x1bW4udG90YWxGbGV4V2lkdGggPyBjb2x1bW4udG90YWxGbGV4V2lkdGggKyBcIiAwIGF1dG9cIiA6IHVuZGVmaW5lZCxcbiAgICAgICAgbWluV2lkdGg6IGNvbHVtbi50b3RhbE1pbldpZHRoICsgXCJweFwiLFxuICAgICAgICB3aWR0aDogY29sdW1uLnRvdGFsV2lkdGggKyBcInB4XCJcbiAgICAgIH1cbiAgICB9XTtcbiAgfTtcblxuICB2YXIgZ2V0Q2VsbFByb3BzID0gZnVuY3Rpb24gZ2V0Q2VsbFByb3BzKHByb3BzLCBfcmVmNCkge1xuICAgIHZhciBjZWxsID0gX3JlZjQuY2VsbDtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZmxleDogY2VsbC5jb2x1bW4udG90YWxGbGV4V2lkdGggKyBcIiAwIGF1dG9cIixcbiAgICAgICAgbWluV2lkdGg6IGNlbGwuY29sdW1uLnRvdGFsTWluV2lkdGggKyBcInB4XCIsXG4gICAgICAgIHdpZHRoOiBjZWxsLmNvbHVtbi50b3RhbFdpZHRoICsgXCJweFwiXG4gICAgICB9XG4gICAgfV07XG4gIH07XG5cbiAgdmFyIGdldEZvb3RlclByb3BzID0gZnVuY3Rpb24gZ2V0Rm9vdGVyUHJvcHMocHJvcHMsIF9yZWY1KSB7XG4gICAgdmFyIGNvbHVtbiA9IF9yZWY1LmNvbHVtbjtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZmxleDogY29sdW1uLnRvdGFsRmxleFdpZHRoID8gY29sdW1uLnRvdGFsRmxleFdpZHRoICsgXCIgMCBhdXRvXCIgOiB1bmRlZmluZWQsXG4gICAgICAgIG1pbldpZHRoOiBjb2x1bW4udG90YWxNaW5XaWR0aCArIFwicHhcIixcbiAgICAgICAgd2lkdGg6IGNvbHVtbi50b3RhbFdpZHRoICsgXCJweFwiXG4gICAgICB9XG4gICAgfV07XG4gIH07XG5cbiAgZXhwb3J0cy5fVU5TVEFCTEVfdXNlUGl2b3RDb2x1bW5zID0gX1VOU1RBQkxFX3VzZVBpdm90Q29sdW1ucztcbiAgZXhwb3J0cy5hY3Rpb25zID0gYWN0aW9ucztcbiAgZXhwb3J0cy5kZWZhdWx0Q29sdW1uID0gZGVmYXVsdENvbHVtbjtcbiAgZXhwb3J0cy5kZWZhdWx0R3JvdXBCeUZuID0gZGVmYXVsdEdyb3VwQnlGbjtcbiAgZXhwb3J0cy5kZWZhdWx0T3JkZXJCeUZuID0gZGVmYXVsdE9yZGVyQnlGbjtcbiAgZXhwb3J0cy5lbnN1cmVQbHVnaW5PcmRlciA9IGVuc3VyZVBsdWdpbk9yZGVyO1xuICBleHBvcnRzLmZsZXhSZW5kZXIgPSBmbGV4UmVuZGVyO1xuICBleHBvcnRzLmZ1bmN0aW9uYWxVcGRhdGUgPSBmdW5jdGlvbmFsVXBkYXRlO1xuICBleHBvcnRzLmxvb3BIb29rcyA9IGxvb3BIb29rcztcbiAgZXhwb3J0cy5tYWtlUHJvcEdldHRlciA9IG1ha2VQcm9wR2V0dGVyO1xuICBleHBvcnRzLm1ha2VSZW5kZXJlciA9IG1ha2VSZW5kZXJlcjtcbiAgZXhwb3J0cy5yZWR1Y2VIb29rcyA9IHJlZHVjZUhvb2tzO1xuICBleHBvcnRzLnNhZmVVc2VMYXlvdXRFZmZlY3QgPSBzYWZlVXNlTGF5b3V0RWZmZWN0O1xuICBleHBvcnRzLnVzZUFic29sdXRlTGF5b3V0ID0gdXNlQWJzb2x1dGVMYXlvdXQ7XG4gIGV4cG9ydHMudXNlQXN5bmNEZWJvdW5jZSA9IHVzZUFzeW5jRGVib3VuY2U7XG4gIGV4cG9ydHMudXNlQmxvY2tMYXlvdXQgPSB1c2VCbG9ja0xheW91dDtcbiAgZXhwb3J0cy51c2VDb2x1bW5PcmRlciA9IHVzZUNvbHVtbk9yZGVyO1xuICBleHBvcnRzLnVzZUV4cGFuZGVkID0gdXNlRXhwYW5kZWQ7XG4gIGV4cG9ydHMudXNlRmlsdGVycyA9IHVzZUZpbHRlcnM7XG4gIGV4cG9ydHMudXNlRmxleExheW91dCA9IHVzZUZsZXhMYXlvdXQ7XG4gIGV4cG9ydHMudXNlR2V0TGF0ZXN0ID0gdXNlR2V0TGF0ZXN0O1xuICBleHBvcnRzLnVzZUdsb2JhbEZpbHRlciA9IHVzZUdsb2JhbEZpbHRlcjtcbiAgZXhwb3J0cy51c2VHcm91cEJ5ID0gdXNlR3JvdXBCeTtcbiAgZXhwb3J0cy51c2VNb3VudGVkTGF5b3V0RWZmZWN0ID0gdXNlTW91bnRlZExheW91dEVmZmVjdDtcbiAgZXhwb3J0cy51c2VQYWdpbmF0aW9uID0gdXNlUGFnaW5hdGlvbjtcbiAgZXhwb3J0cy51c2VSZXNpemVDb2x1bW5zID0gdXNlUmVzaXplQ29sdW1ucztcbiAgZXhwb3J0cy51c2VSb3dTZWxlY3QgPSB1c2VSb3dTZWxlY3Q7XG4gIGV4cG9ydHMudXNlUm93U3RhdGUgPSB1c2VSb3dTdGF0ZTtcbiAgZXhwb3J0cy51c2VTb3J0QnkgPSB1c2VTb3J0Qnk7XG4gIGV4cG9ydHMudXNlVGFibGUgPSB1c2VUYWJsZTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3QtdGFibGUuZGV2ZWxvcG1lbnQuanMubWFwXG4iLCJpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9yZWFjdC10YWJsZS5wcm9kdWN0aW9uLm1pbi5qcycpXG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9yZWFjdC10YWJsZS5kZXZlbG9wbWVudC5qcycpXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NSAqLyBcImRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1XCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzXCIpOyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCIvL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNoYWxsb3dFcXVhbChvYmpBLCBvYmpCLCBjb21wYXJlLCBjb21wYXJlQ29udGV4dCkge1xuICB2YXIgcmV0ID0gY29tcGFyZSA/IGNvbXBhcmUuY2FsbChjb21wYXJlQ29udGV4dCwgb2JqQSwgb2JqQikgOiB2b2lkIDA7XG5cbiAgaWYgKHJldCAhPT0gdm9pZCAwKSB7XG4gICAgcmV0dXJuICEhcmV0O1xuICB9XG5cbiAgaWYgKG9iakEgPT09IG9iakIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqQSAhPT0gXCJvYmplY3RcIiB8fCAhb2JqQSB8fCB0eXBlb2Ygb2JqQiAhPT0gXCJvYmplY3RcIiB8fCAhb2JqQikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpO1xuICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhvYmpCKTtcblxuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgYkhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5iaW5kKG9iakIpO1xuXG4gIC8vIFRlc3QgZm9yIEEncyBrZXlzIGRpZmZlcmVudCBmcm9tIEIuXG4gIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IGtleXNBLmxlbmd0aDsgaWR4KyspIHtcbiAgICB2YXIga2V5ID0ga2V5c0FbaWR4XTtcblxuICAgIGlmICghYkhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWVBID0gb2JqQVtrZXldO1xuICAgIHZhciB2YWx1ZUIgPSBvYmpCW2tleV07XG5cbiAgICByZXQgPSBjb21wYXJlID8gY29tcGFyZS5jYWxsKGNvbXBhcmVDb250ZXh0LCB2YWx1ZUEsIHZhbHVlQiwga2V5KSA6IHZvaWQgMDtcblxuICAgIGlmIChyZXQgPT09IGZhbHNlIHx8IChyZXQgPT09IHZvaWQgMCAmJiB2YWx1ZUEgIT09IHZhbHVlQikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCJpbXBvcnQgeyB0eXBlT2YsIGlzRWxlbWVudCwgaXNWYWxpZEVsZW1lbnRUeXBlIH0gZnJvbSAncmVhY3QtaXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VNZW1vLCB1c2VFZmZlY3QsIHVzZVJlZiwgY3JlYXRlRWxlbWVudCwgdXNlRGVidWdWYWx1ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzaGFsbG93ZXF1YWwgZnJvbSAnc2hhbGxvd2VxdWFsJztcbmltcG9ydCBTdHlsaXMgZnJvbSAnQGVtb3Rpb24vc3R5bGlzJztcbmltcG9ydCB1bml0bGVzcyBmcm9tICdAZW1vdGlvbi91bml0bGVzcyc7XG5pbXBvcnQgdmFsaWRBdHRyIGZyb20gJ0BlbW90aW9uL2lzLXByb3AtdmFsaWQnO1xuaW1wb3J0IGhvaXN0IGZyb20gJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbi8vIFxudmFyIGludGVybGVhdmUgPSAoZnVuY3Rpb24gKHN0cmluZ3MsIGludGVycG9sYXRpb25zKSB7XG4gIHZhciByZXN1bHQgPSBbc3RyaW5nc1swXV07XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGludGVycG9sYXRpb25zLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgcmVzdWx0LnB1c2goaW50ZXJwb2xhdGlvbnNbaV0sIHN0cmluZ3NbaSArIDFdKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59KTtcblxuLy8gXG52YXIgaXNQbGFpbk9iamVjdCA9IChmdW5jdGlvbiAoeCkge1xuICByZXR1cm4geCAhPT0gbnVsbCAmJiB0eXBlb2YgeCA9PT0gJ29iamVjdCcgJiYgKHgudG9TdHJpbmcgPyB4LnRvU3RyaW5nKCkgOiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeCkpID09PSAnW29iamVjdCBPYmplY3RdJyAmJiAhdHlwZU9mKHgpO1xufSk7XG5cbi8vIFxudmFyIEVNUFRZX0FSUkFZID0gT2JqZWN0LmZyZWV6ZShbXSk7XG52YXIgRU1QVFlfT0JKRUNUID0gT2JqZWN0LmZyZWV6ZSh7fSk7XG5cbi8vIFxuZnVuY3Rpb24gaXNGdW5jdGlvbih0ZXN0KSB7XG4gIHJldHVybiB0eXBlb2YgdGVzdCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuLy8gXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHRhcmdldCkge1xuICByZXR1cm4gKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyAmJiB0YXJnZXQgOiBmYWxzZSkgfHwgLy8gJEZsb3dGaXhNZVxuICB0YXJnZXQuZGlzcGxheU5hbWUgfHwgLy8gJEZsb3dGaXhNZVxuICB0YXJnZXQubmFtZSB8fCAnQ29tcG9uZW50Jztcbn1cblxuLy8gXG5mdW5jdGlvbiBpc1N0YXRlbGVzc0Z1bmN0aW9uKHRlc3QpIHtcbiAgcmV0dXJuIHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nICYmICEodGVzdC5wcm90b3R5cGUgJiYgdGVzdC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbi8vIFxuZnVuY3Rpb24gaXNTdHlsZWRDb21wb25lbnQodGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXQgJiYgdHlwZW9mIHRhcmdldC5zdHlsZWRDb21wb25lbnRJZCA9PT0gJ3N0cmluZyc7XG59XG5cbi8vIFxudmFyIFNDX0FUVFIgPSB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgKHByb2Nlc3MuZW52LlJFQUNUX0FQUF9TQ19BVFRSIHx8IHByb2Nlc3MuZW52LlNDX0FUVFIpIHx8ICdkYXRhLXN0eWxlZCc7XG52YXIgU0NfQVRUUl9BQ1RJVkUgPSAnYWN0aXZlJztcbnZhciBTQ19BVFRSX1ZFUlNJT04gPSAnZGF0YS1zdHlsZWQtdmVyc2lvbic7XG52YXIgU0NfVkVSU0lPTiA9IFwiNS4xLjFcIjtcbnZhciBTUExJVFRFUiA9ICcvKiFzYyovXFxuJztcbnZhciBJU19CUk9XU0VSID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ0hUTUxFbGVtZW50JyBpbiB3aW5kb3c7XG52YXIgRElTQUJMRV9TUEVFRFkgPSB0eXBlb2YgU0NfRElTQUJMRV9TUEVFRFkgPT09ICdib29sZWFuJyAmJiBTQ19ESVNBQkxFX1NQRUVEWSB8fCB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgKHByb2Nlc3MuZW52LlJFQUNUX0FQUF9TQ19ESVNBQkxFX1NQRUVEWSB8fCBwcm9jZXNzLmVudi5TQ19ESVNBQkxFX1NQRUVEWSkgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJzsgLy8gU2hhcmVkIGVtcHR5IGV4ZWN1dGlvbiBjb250ZXh0IHdoZW4gZ2VuZXJhdGluZyBzdGF0aWMgc3R5bGVzXG5cbnZhciBTVEFUSUNfRVhFQ1VUSU9OX0NPTlRFWFQgPSB7fTtcblxuLy8gXG5cbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSwgbm8tdW5kZWYgKi9cbnZhciBnZXROb25jZSA9IGZ1bmN0aW9uIGdldE5vbmNlKCkge1xuICByZXR1cm4gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbn07XG5cbnZhciBlcnJvck1hcCA9IHtcbiAgXCIxXCI6IFwiQ2Fubm90IGNyZWF0ZSBzdHlsZWQtY29tcG9uZW50IGZvciBjb21wb25lbnQ6ICVzLlxcblxcblwiLFxuICBcIjJcIjogXCJDYW4ndCBjb2xsZWN0IHN0eWxlcyBvbmNlIHlvdSd2ZSBjb25zdW1lZCBhIGBTZXJ2ZXJTdHlsZVNoZWV0YCdzIHN0eWxlcyEgYFNlcnZlclN0eWxlU2hlZXRgIGlzIGEgb25lIG9mZiBpbnN0YW5jZSBmb3IgZWFjaCBzZXJ2ZXItc2lkZSByZW5kZXIgY3ljbGUuXFxuXFxuLSBBcmUgeW91IHRyeWluZyB0byByZXVzZSBpdCBhY3Jvc3MgcmVuZGVycz9cXG4tIEFyZSB5b3UgYWNjaWRlbnRhbGx5IGNhbGxpbmcgY29sbGVjdFN0eWxlcyB0d2ljZT9cXG5cXG5cIixcbiAgXCIzXCI6IFwiU3RyZWFtaW5nIFNTUiBpcyBvbmx5IHN1cHBvcnRlZCBpbiBhIE5vZGUuanMgZW52aXJvbm1lbnQ7IFBsZWFzZSBkbyBub3QgdHJ5IHRvIGNhbGwgdGhpcyBtZXRob2QgaW4gdGhlIGJyb3dzZXIuXFxuXFxuXCIsXG4gIFwiNFwiOiBcIlRoZSBgU3R5bGVTaGVldE1hbmFnZXJgIGV4cGVjdHMgYSB2YWxpZCB0YXJnZXQgb3Igc2hlZXQgcHJvcCFcXG5cXG4tIERvZXMgdGhpcyBlcnJvciBvY2N1ciBvbiB0aGUgY2xpZW50IGFuZCBpcyB5b3VyIHRhcmdldCBmYWxzeT9cXG4tIERvZXMgdGhpcyBlcnJvciBvY2N1ciBvbiB0aGUgc2VydmVyIGFuZCBpcyB0aGUgc2hlZXQgZmFsc3k/XFxuXFxuXCIsXG4gIFwiNVwiOiBcIlRoZSBjbG9uZSBtZXRob2QgY2Fubm90IGJlIHVzZWQgb24gdGhlIGNsaWVudCFcXG5cXG4tIEFyZSB5b3UgcnVubmluZyBpbiBhIGNsaWVudC1saWtlIGVudmlyb25tZW50IG9uIHRoZSBzZXJ2ZXI/XFxuLSBBcmUgeW91IHRyeWluZyB0byBydW4gU1NSIG9uIHRoZSBjbGllbnQ/XFxuXFxuXCIsXG4gIFwiNlwiOiBcIlRyeWluZyB0byBpbnNlcnQgYSBuZXcgc3R5bGUgdGFnLCBidXQgdGhlIGdpdmVuIE5vZGUgaXMgdW5tb3VudGVkIVxcblxcbi0gQXJlIHlvdSB1c2luZyBhIGN1c3RvbSB0YXJnZXQgdGhhdCBpc24ndCBtb3VudGVkP1xcbi0gRG9lcyB5b3VyIGRvY3VtZW50IG5vdCBoYXZlIGEgdmFsaWQgaGVhZCBlbGVtZW50P1xcbi0gSGF2ZSB5b3UgYWNjaWRlbnRhbGx5IHJlbW92ZWQgYSBzdHlsZSB0YWcgbWFudWFsbHk/XFxuXFxuXCIsXG4gIFwiN1wiOiBcIlRoZW1lUHJvdmlkZXI6IFBsZWFzZSByZXR1cm4gYW4gb2JqZWN0IGZyb20geW91ciBcXFwidGhlbWVcXFwiIHByb3AgZnVuY3Rpb24sIGUuZy5cXG5cXG5gYGBqc1xcbnRoZW1lPXsoKSA9PiAoe30pfVxcbmBgYFxcblxcblwiLFxuICBcIjhcIjogXCJUaGVtZVByb3ZpZGVyOiBQbGVhc2UgbWFrZSB5b3VyIFxcXCJ0aGVtZVxcXCIgcHJvcCBhbiBvYmplY3QuXFxuXFxuXCIsXG4gIFwiOVwiOiBcIk1pc3NpbmcgZG9jdW1lbnQgYDxoZWFkPmBcXG5cXG5cIixcbiAgXCIxMFwiOiBcIkNhbm5vdCBmaW5kIGEgU3R5bGVTaGVldCBpbnN0YW5jZS4gVXN1YWxseSB0aGlzIGhhcHBlbnMgaWYgdGhlcmUgYXJlIG11bHRpcGxlIGNvcGllcyBvZiBzdHlsZWQtY29tcG9uZW50cyBsb2FkZWQgYXQgb25jZS4gQ2hlY2sgb3V0IHRoaXMgaXNzdWUgZm9yIGhvdyB0byB0cm91Ymxlc2hvb3QgYW5kIGZpeCB0aGUgY29tbW9uIGNhc2VzIHdoZXJlIHRoaXMgc2l0dWF0aW9uIGNhbiBoYXBwZW46IGh0dHBzOi8vZ2l0aHViLmNvbS9zdHlsZWQtY29tcG9uZW50cy9zdHlsZWQtY29tcG9uZW50cy9pc3N1ZXMvMTk0MSNpc3N1ZWNvbW1lbnQtNDE3ODYyMDIxXFxuXFxuXCIsXG4gIFwiMTFcIjogXCJfVGhpcyBlcnJvciB3YXMgcmVwbGFjZWQgd2l0aCBhIGRldi10aW1lIHdhcm5pbmcsIGl0IHdpbGwgYmUgZGVsZXRlZCBmb3IgdjQgZmluYWwuXyBbY3JlYXRlR2xvYmFsU3R5bGVdIHJlY2VpdmVkIGNoaWxkcmVuIHdoaWNoIHdpbGwgbm90IGJlIHJlbmRlcmVkLiBQbGVhc2UgdXNlIHRoZSBjb21wb25lbnQgd2l0aG91dCBwYXNzaW5nIGNoaWxkcmVuIGVsZW1lbnRzLlxcblxcblwiLFxuICBcIjEyXCI6IFwiSXQgc2VlbXMgeW91IGFyZSBpbnRlcnBvbGF0aW5nIGEga2V5ZnJhbWUgZGVjbGFyYXRpb24gKCVzKSBpbnRvIGFuIHVudGFnZ2VkIHN0cmluZy4gVGhpcyB3YXMgc3VwcG9ydGVkIGluIHN0eWxlZC1jb21wb25lbnRzIHYzLCBidXQgaXMgbm90IGxvbmdlciBzdXBwb3J0ZWQgaW4gdjQgYXMga2V5ZnJhbWVzIGFyZSBub3cgaW5qZWN0ZWQgb24tZGVtYW5kLiBQbGVhc2Ugd3JhcCB5b3VyIHN0cmluZyBpbiB0aGUgY3NzXFxcXGBcXFxcYCBoZWxwZXIgd2hpY2ggZW5zdXJlcyB0aGUgc3R5bGVzIGFyZSBpbmplY3RlZCBjb3JyZWN0bHkuIFNlZSBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9hcGkjY3NzXFxuXFxuXCIsXG4gIFwiMTNcIjogXCIlcyBpcyBub3QgYSBzdHlsZWQgY29tcG9uZW50IGFuZCBjYW5ub3QgYmUgcmVmZXJyZWQgdG8gdmlhIGNvbXBvbmVudCBzZWxlY3Rvci4gU2VlIGh0dHBzOi8vd3d3LnN0eWxlZC1jb21wb25lbnRzLmNvbS9kb2NzL2FkdmFuY2VkI3JlZmVycmluZy10by1vdGhlci1jb21wb25lbnRzIGZvciBtb3JlIGRldGFpbHMuXFxuXFxuXCIsXG4gIFwiMTRcIjogXCJUaGVtZVByb3ZpZGVyOiBcXFwidGhlbWVcXFwiIHByb3AgaXMgcmVxdWlyZWQuXFxuXFxuXCIsXG4gIFwiMTVcIjogXCJBIHN0eWxpcyBwbHVnaW4gaGFzIGJlZW4gc3VwcGxpZWQgdGhhdCBpcyBub3QgbmFtZWQuIFdlIG5lZWQgYSBuYW1lIGZvciBlYWNoIHBsdWdpbiB0byBiZSBhYmxlIHRvIHByZXZlbnQgc3R5bGluZyBjb2xsaXNpb25zIGJldHdlZW4gZGlmZmVyZW50IHN0eWxpcyBjb25maWd1cmF0aW9ucyB3aXRoaW4gdGhlIHNhbWUgYXBwLiBCZWZvcmUgeW91IHBhc3MgeW91ciBwbHVnaW4gdG8gYDxTdHlsZVNoZWV0TWFuYWdlciBzdHlsaXNQbHVnaW5zPXtbXX0+YCwgcGxlYXNlIG1ha2Ugc3VyZSBlYWNoIHBsdWdpbiBpcyB1bmlxdWVseS1uYW1lZCwgZS5nLlxcblxcbmBgYGpzXFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGltcG9ydGVkUGx1Z2luLCAnbmFtZScsIHsgdmFsdWU6ICdzb21lLXVuaXF1ZS1uYW1lJyB9KTtcXG5gYGBcXG5cXG5cIixcbiAgXCIxNlwiOiBcIlJlYWNoZWQgdGhlIGxpbWl0IG9mIGhvdyBtYW55IHN0eWxlZCBjb21wb25lbnRzIG1heSBiZSBjcmVhdGVkIGF0IGdyb3VwICVzLlxcbllvdSBtYXkgb25seSBjcmVhdGUgdXAgdG8gMSwwNzMsNzQxLDgyNCBjb21wb25lbnRzLiBJZiB5b3UncmUgY3JlYXRpbmcgY29tcG9uZW50cyBkeW5hbWljYWxseSxcXG5hcyBmb3IgaW5zdGFuY2UgaW4geW91ciByZW5kZXIgbWV0aG9kIHRoZW4geW91IG1heSBiZSBydW5uaW5nIGludG8gdGhpcyBsaW1pdGF0aW9uLlxcblxcblwiLFxuICBcIjE3XCI6IFwiQ1NTU3R5bGVTaGVldCBjb3VsZCBub3QgYmUgZm91bmQgb24gSFRNTFN0eWxlRWxlbWVudC5cXG5IYXMgc3R5bGVkLWNvbXBvbmVudHMnIHN0eWxlIHRhZyBiZWVuIHVubW91bnRlZCBvciBhbHRlcmVkIGJ5IGFub3RoZXIgc2NyaXB0P1xcblwiXG59O1xuXG4vLyBcbnZhciBFUlJPUlMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gZXJyb3JNYXAgOiB7fTtcbi8qKlxuICogc3VwZXIgYmFzaWMgdmVyc2lvbiBvZiBzcHJpbnRmXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0KCkge1xuICB2YXIgYSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1swXTtcbiAgdmFyIGIgPSBbXTtcblxuICBmb3IgKHZhciBjID0gMSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDsgYyA8IGxlbjsgYyArPSAxKSB7XG4gICAgYi5wdXNoKGMgPCAwIHx8IGFyZ3VtZW50cy5sZW5ndGggPD0gYyA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1tjXSk7XG4gIH1cblxuICBiLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICBhID0gYS5yZXBsYWNlKC8lW2Etel0vLCBkKTtcbiAgfSk7XG4gIHJldHVybiBhO1xufVxuLyoqXG4gKiBDcmVhdGUgYW4gZXJyb3IgZmlsZSBvdXQgb2YgZXJyb3JzLm1kIGZvciBkZXZlbG9wbWVudCBhbmQgYSBzaW1wbGUgd2ViIGxpbmsgdG8gdGhlIGZ1bGwgZXJyb3JzXG4gKiBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gKi9cblxuXG5mdW5jdGlvbiB0aHJvd1N0eWxlZENvbXBvbmVudHNFcnJvcihjb2RlKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBpbnRlcnBvbGF0aW9ucyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgaW50ZXJwb2xhdGlvbnNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zdHlsZWQtY29tcG9uZW50cy9zdHlsZWQtY29tcG9uZW50cy9ibG9iL21hc3Rlci9wYWNrYWdlcy9zdHlsZWQtY29tcG9uZW50cy9zcmMvdXRpbHMvZXJyb3JzLm1kI1wiICsgY29kZSArIFwiIGZvciBtb3JlIGluZm9ybWF0aW9uLlwiICsgKGludGVycG9sYXRpb25zLmxlbmd0aCA+IDAgPyBcIiBBZGRpdGlvbmFsIGFyZ3VtZW50czogXCIgKyBpbnRlcnBvbGF0aW9ucy5qb2luKCcsICcpIDogJycpKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZm9ybWF0LmFwcGx5KHZvaWQgMCwgW0VSUk9SU1tjb2RlXV0uY29uY2F0KGludGVycG9sYXRpb25zKSkudHJpbSgpKTtcbiAgfVxufVxuXG4vLyBcbnZhciBFTEVNRU5UX1RZUEUgPSAxO1xuLyogTm9kZS5FTEVNRU5UX1RZUEUgKi9cblxuLyoqIEZpbmQgbGFzdCBzdHlsZSBlbGVtZW50IGlmIGFueSBpbnNpZGUgdGFyZ2V0ICovXG5cbnZhciBmaW5kTGFzdFN0eWxlVGFnID0gZnVuY3Rpb24gZmluZExhc3RTdHlsZVRhZyh0YXJnZXQpIHtcbiAgdmFyIGNoaWxkTm9kZXMgPSB0YXJnZXQuY2hpbGROb2RlcztcblxuICBmb3IgKHZhciBpID0gY2hpbGROb2Rlcy5sZW5ndGg7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGNoaWxkID0gY2hpbGROb2Rlc1tpXTtcblxuICAgIGlmIChjaGlsZCAmJiBjaGlsZC5ub2RlVHlwZSA9PT0gRUxFTUVOVF9UWVBFICYmIGNoaWxkLmhhc0F0dHJpYnV0ZShTQ19BVFRSKSkge1xuICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuLyoqIENyZWF0ZSBhIHN0eWxlIGVsZW1lbnQgaW5zaWRlIGB0YXJnZXRgIG9yIDxoZWFkPiBhZnRlciB0aGUgbGFzdCAqL1xuXG5cbnZhciBtYWtlU3R5bGVUYWcgPSBmdW5jdGlvbiBtYWtlU3R5bGVUYWcodGFyZ2V0KSB7XG4gIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZDtcbiAgdmFyIHBhcmVudCA9IHRhcmdldCB8fCBoZWFkO1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgcHJldlN0eWxlID0gZmluZExhc3RTdHlsZVRhZyhwYXJlbnQpO1xuICB2YXIgbmV4dFNpYmxpbmcgPSBwcmV2U3R5bGUgIT09IHVuZGVmaW5lZCA/IHByZXZTdHlsZS5uZXh0U2libGluZyA6IG51bGw7XG4gIHN0eWxlLnNldEF0dHJpYnV0ZShTQ19BVFRSLCBTQ19BVFRSX0FDVElWRSk7XG4gIHN0eWxlLnNldEF0dHJpYnV0ZShTQ19BVFRSX1ZFUlNJT04sIFNDX1ZFUlNJT04pO1xuICB2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuICBpZiAobm9uY2UpIHN0eWxlLnNldEF0dHJpYnV0ZSgnbm9uY2UnLCBub25jZSk7XG4gIHBhcmVudC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcbiAgcmV0dXJuIHN0eWxlO1xufTtcbi8qKiBHZXQgdGhlIENTU1N0eWxlU2hlZXQgaW5zdGFuY2UgZm9yIGEgZ2l2ZW4gc3R5bGUgZWxlbWVudCAqL1xuXG52YXIgZ2V0U2hlZXQgPSBmdW5jdGlvbiBnZXRTaGVldCh0YWcpIHtcbiAgaWYgKHRhZy5zaGVldCkge1xuICAgIHJldHVybiB0YWcuc2hlZXQ7XG4gIH0gLy8gQXZvaWQgRmlyZWZveCBxdWlyayB3aGVyZSB0aGUgc3R5bGUgZWxlbWVudCBtaWdodCBub3QgaGF2ZSBhIHNoZWV0IHByb3BlcnR5XG5cblxuICB2YXIgX2RvY3VtZW50ID0gZG9jdW1lbnQsXG4gICAgICBzdHlsZVNoZWV0cyA9IF9kb2N1bWVudC5zdHlsZVNoZWV0cztcblxuICBmb3IgKHZhciBpID0gMCwgbCA9IHN0eWxlU2hlZXRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHZhciBzaGVldCA9IHN0eWxlU2hlZXRzW2ldO1xuXG4gICAgaWYgKHNoZWV0Lm93bmVyTm9kZSA9PT0gdGFnKSB7XG4gICAgICByZXR1cm4gc2hlZXQ7XG4gICAgfVxuICB9XG5cbiAgdGhyb3dTdHlsZWRDb21wb25lbnRzRXJyb3IoMTcpO1xuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxuLy8gXG4vKiogQ3JlYXRlIGEgQ1NTU3R5bGVTaGVldC1saWtlIHRhZyBkZXBlbmRpbmcgb24gdGhlIGVudmlyb25tZW50ICovXG5cbnZhciBtYWtlVGFnID0gZnVuY3Rpb24gbWFrZVRhZyhfcmVmKSB7XG4gIHZhciBpc1NlcnZlciA9IF9yZWYuaXNTZXJ2ZXIsXG4gICAgICB1c2VDU1NPTUluamVjdGlvbiA9IF9yZWYudXNlQ1NTT01JbmplY3Rpb24sXG4gICAgICB0YXJnZXQgPSBfcmVmLnRhcmdldDtcblxuICBpZiAoaXNTZXJ2ZXIpIHtcbiAgICByZXR1cm4gbmV3IFZpcnR1YWxUYWcodGFyZ2V0KTtcbiAgfSBlbHNlIGlmICh1c2VDU1NPTUluamVjdGlvbikge1xuICAgIHJldHVybiBuZXcgQ1NTT01UYWcodGFyZ2V0KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IFRleHRUYWcodGFyZ2V0KTtcbiAgfVxufTtcbnZhciBDU1NPTVRhZyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENTU09NVGFnKHRhcmdldCkge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50ID0gbWFrZVN0eWxlVGFnKHRhcmdldCk7IC8vIEF2b2lkIEVkZ2UgYnVnIHdoZXJlIGVtcHR5IHN0eWxlIGVsZW1lbnRzIGRvbid0IGNyZWF0ZSBzaGVldHNcblxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpKTtcbiAgICB0aGlzLnNoZWV0ID0gZ2V0U2hlZXQoZWxlbWVudCk7XG4gICAgdGhpcy5sZW5ndGggPSAwO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IENTU09NVGFnLnByb3RvdHlwZTtcblxuICBfcHJvdG8uaW5zZXJ0UnVsZSA9IGZ1bmN0aW9uIGluc2VydFJ1bGUoaW5kZXgsIHJ1bGUpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5zaGVldC5pbnNlcnRSdWxlKHJ1bGUsIGluZGV4KTtcbiAgICAgIHRoaXMubGVuZ3RoKys7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChfZXJyb3IpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmRlbGV0ZVJ1bGUgPSBmdW5jdGlvbiBkZWxldGVSdWxlKGluZGV4KSB7XG4gICAgdGhpcy5zaGVldC5kZWxldGVSdWxlKGluZGV4KTtcbiAgICB0aGlzLmxlbmd0aC0tO1xuICB9O1xuXG4gIF9wcm90by5nZXRSdWxlID0gZnVuY3Rpb24gZ2V0UnVsZShpbmRleCkge1xuICAgIHZhciBydWxlID0gdGhpcy5zaGVldC5jc3NSdWxlc1tpbmRleF07IC8vIEF2b2lkIElFMTEgcXVpcmsgd2hlcmUgY3NzVGV4dCBpcyBpbmFjY2Vzc2libGUgb24gc29tZSBpbnZhbGlkIHJ1bGVzXG5cbiAgICBpZiAocnVsZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBydWxlLmNzc1RleHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gcnVsZS5jc3NUZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBDU1NPTVRhZztcbn0oKTtcbi8qKiBBIFRhZyB0aGF0IGVtdWxhdGVzIHRoZSBDU1NTdHlsZVNoZWV0IEFQSSBidXQgdXNlcyB0ZXh0IG5vZGVzICovXG5cbnZhciBUZXh0VGFnID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVGV4dFRhZyh0YXJnZXQpIHtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudCA9IG1ha2VTdHlsZVRhZyh0YXJnZXQpO1xuICAgIHRoaXMubm9kZXMgPSBlbGVtZW50LmNoaWxkTm9kZXM7XG4gICAgdGhpcy5sZW5ndGggPSAwO1xuICB9XG5cbiAgdmFyIF9wcm90bzIgPSBUZXh0VGFnLnByb3RvdHlwZTtcblxuICBfcHJvdG8yLmluc2VydFJ1bGUgPSBmdW5jdGlvbiBpbnNlcnRSdWxlKGluZGV4LCBydWxlKSB7XG4gICAgaWYgKGluZGV4IDw9IHRoaXMubGVuZ3RoICYmIGluZGV4ID49IDApIHtcbiAgICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocnVsZSk7XG4gICAgICB2YXIgcmVmTm9kZSA9IHRoaXMubm9kZXNbaW5kZXhdO1xuICAgICAgdGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZShub2RlLCByZWZOb2RlIHx8IG51bGwpO1xuICAgICAgdGhpcy5sZW5ndGgrKztcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90bzIuZGVsZXRlUnVsZSA9IGZ1bmN0aW9uIGRlbGV0ZVJ1bGUoaW5kZXgpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5ub2Rlc1tpbmRleF0pO1xuICAgIHRoaXMubGVuZ3RoLS07XG4gIH07XG5cbiAgX3Byb3RvMi5nZXRSdWxlID0gZnVuY3Rpb24gZ2V0UnVsZShpbmRleCkge1xuICAgIGlmIChpbmRleCA8IHRoaXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2Rlc1tpbmRleF0udGV4dENvbnRlbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFRleHRUYWc7XG59KCk7XG4vKiogQSBjb21wbGV0ZWx5IHZpcnR1YWwgKHNlcnZlci1zaWRlKSBUYWcgdGhhdCBkb2Vzbid0IG1hbmlwdWxhdGUgdGhlIERPTSAqL1xuXG52YXIgVmlydHVhbFRhZyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFZpcnR1YWxUYWcoX3RhcmdldCkge1xuICAgIHRoaXMucnVsZXMgPSBbXTtcbiAgICB0aGlzLmxlbmd0aCA9IDA7XG4gIH1cblxuICB2YXIgX3Byb3RvMyA9IFZpcnR1YWxUYWcucHJvdG90eXBlO1xuXG4gIF9wcm90bzMuaW5zZXJ0UnVsZSA9IGZ1bmN0aW9uIGluc2VydFJ1bGUoaW5kZXgsIHJ1bGUpIHtcbiAgICBpZiAoaW5kZXggPD0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMucnVsZXMuc3BsaWNlKGluZGV4LCAwLCBydWxlKTtcbiAgICAgIHRoaXMubGVuZ3RoKys7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8zLmRlbGV0ZVJ1bGUgPSBmdW5jdGlvbiBkZWxldGVSdWxlKGluZGV4KSB7XG4gICAgdGhpcy5ydWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMubGVuZ3RoLS07XG4gIH07XG5cbiAgX3Byb3RvMy5nZXRSdWxlID0gZnVuY3Rpb24gZ2V0UnVsZShpbmRleCkge1xuICAgIGlmIChpbmRleCA8IHRoaXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5ydWxlc1tpbmRleF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFZpcnR1YWxUYWc7XG59KCk7XG5cbi8vIFxuLyoqIENyZWF0ZSBhIEdyb3VwZWRUYWcgd2l0aCBhbiB1bmRlcmx5aW5nIFRhZyBpbXBsZW1lbnRhdGlvbiAqL1xuXG52YXIgbWFrZUdyb3VwZWRUYWcgPSBmdW5jdGlvbiBtYWtlR3JvdXBlZFRhZyh0YWcpIHtcbiAgcmV0dXJuIG5ldyBEZWZhdWx0R3JvdXBlZFRhZyh0YWcpO1xufTtcbnZhciBCQVNFX1NJWkUgPSAxIDw8IDk7XG5cbnZhciBEZWZhdWx0R3JvdXBlZFRhZyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIERlZmF1bHRHcm91cGVkVGFnKHRhZykge1xuICAgIHRoaXMuZ3JvdXBTaXplcyA9IG5ldyBVaW50MzJBcnJheShCQVNFX1NJWkUpO1xuICAgIHRoaXMubGVuZ3RoID0gQkFTRV9TSVpFO1xuICAgIHRoaXMudGFnID0gdGFnO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IERlZmF1bHRHcm91cGVkVGFnLnByb3RvdHlwZTtcblxuICBfcHJvdG8uaW5kZXhPZkdyb3VwID0gZnVuY3Rpb24gaW5kZXhPZkdyb3VwKGdyb3VwKSB7XG4gICAgdmFyIGluZGV4ID0gMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXA7IGkrKykge1xuICAgICAgaW5kZXggKz0gdGhpcy5ncm91cFNpemVzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRleDtcbiAgfTtcblxuICBfcHJvdG8uaW5zZXJ0UnVsZXMgPSBmdW5jdGlvbiBpbnNlcnRSdWxlcyhncm91cCwgcnVsZXMpIHtcbiAgICBpZiAoZ3JvdXAgPj0gdGhpcy5ncm91cFNpemVzLmxlbmd0aCkge1xuICAgICAgdmFyIG9sZEJ1ZmZlciA9IHRoaXMuZ3JvdXBTaXplcztcbiAgICAgIHZhciBvbGRTaXplID0gb2xkQnVmZmVyLmxlbmd0aDtcbiAgICAgIHZhciBuZXdTaXplID0gb2xkU2l6ZTtcblxuICAgICAgd2hpbGUgKGdyb3VwID49IG5ld1NpemUpIHtcbiAgICAgICAgbmV3U2l6ZSA8PD0gMTtcblxuICAgICAgICBpZiAobmV3U2l6ZSA8IDApIHtcbiAgICAgICAgICB0aHJvd1N0eWxlZENvbXBvbmVudHNFcnJvcigxNiwgXCJcIiArIGdyb3VwKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmdyb3VwU2l6ZXMgPSBuZXcgVWludDMyQXJyYXkobmV3U2l6ZSk7XG4gICAgICB0aGlzLmdyb3VwU2l6ZXMuc2V0KG9sZEJ1ZmZlcik7XG4gICAgICB0aGlzLmxlbmd0aCA9IG5ld1NpemU7XG5cbiAgICAgIGZvciAodmFyIGkgPSBvbGRTaXplOyBpIDwgbmV3U2l6ZTsgaSsrKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBTaXplc1tpXSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHJ1bGVJbmRleCA9IHRoaXMuaW5kZXhPZkdyb3VwKGdyb3VwICsgMSk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDAsIGwgPSBydWxlcy5sZW5ndGg7IF9pIDwgbDsgX2krKykge1xuICAgICAgaWYgKHRoaXMudGFnLmluc2VydFJ1bGUocnVsZUluZGV4LCBydWxlc1tfaV0pKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBTaXplc1tncm91cF0rKztcbiAgICAgICAgcnVsZUluZGV4Kys7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jbGVhckdyb3VwID0gZnVuY3Rpb24gY2xlYXJHcm91cChncm91cCkge1xuICAgIGlmIChncm91cCA8IHRoaXMubGVuZ3RoKSB7XG4gICAgICB2YXIgbGVuZ3RoID0gdGhpcy5ncm91cFNpemVzW2dyb3VwXTtcbiAgICAgIHZhciBzdGFydEluZGV4ID0gdGhpcy5pbmRleE9mR3JvdXAoZ3JvdXApO1xuICAgICAgdmFyIGVuZEluZGV4ID0gc3RhcnRJbmRleCArIGxlbmd0aDtcbiAgICAgIHRoaXMuZ3JvdXBTaXplc1tncm91cF0gPSAwO1xuXG4gICAgICBmb3IgKHZhciBpID0gc3RhcnRJbmRleDsgaSA8IGVuZEluZGV4OyBpKyspIHtcbiAgICAgICAgdGhpcy50YWcuZGVsZXRlUnVsZShzdGFydEluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldEdyb3VwID0gZnVuY3Rpb24gZ2V0R3JvdXAoZ3JvdXApIHtcbiAgICB2YXIgY3NzID0gJyc7XG5cbiAgICBpZiAoZ3JvdXAgPj0gdGhpcy5sZW5ndGggfHwgdGhpcy5ncm91cFNpemVzW2dyb3VwXSA9PT0gMCkge1xuICAgICAgcmV0dXJuIGNzcztcbiAgICB9XG5cbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5ncm91cFNpemVzW2dyb3VwXTtcbiAgICB2YXIgc3RhcnRJbmRleCA9IHRoaXMuaW5kZXhPZkdyb3VwKGdyb3VwKTtcbiAgICB2YXIgZW5kSW5kZXggPSBzdGFydEluZGV4ICsgbGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IHN0YXJ0SW5kZXg7IGkgPCBlbmRJbmRleDsgaSsrKSB7XG4gICAgICBjc3MgKz0gXCJcIiArIHRoaXMudGFnLmdldFJ1bGUoaSkgKyBTUExJVFRFUjtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9O1xuXG4gIHJldHVybiBEZWZhdWx0R3JvdXBlZFRhZztcbn0oKTtcblxuLy8gXG52YXIgTUFYX1NNSSA9IDEgPDwgMzEgLSAxO1xudmFyIGdyb3VwSURSZWdpc3RlciA9IG5ldyBNYXAoKTtcbnZhciByZXZlcnNlUmVnaXN0ZXIgPSBuZXcgTWFwKCk7XG52YXIgbmV4dEZyZWVHcm91cCA9IDE7XG52YXIgZ2V0R3JvdXBGb3JJZCA9IGZ1bmN0aW9uIGdldEdyb3VwRm9ySWQoaWQpIHtcbiAgaWYgKGdyb3VwSURSZWdpc3Rlci5oYXMoaWQpKSB7XG4gICAgcmV0dXJuIGdyb3VwSURSZWdpc3Rlci5nZXQoaWQpO1xuICB9XG5cbiAgdmFyIGdyb3VwID0gbmV4dEZyZWVHcm91cCsrO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICgoZ3JvdXAgfCAwKSA8IDAgfHwgZ3JvdXAgPiBNQVhfU01JKSkge1xuICAgIHRocm93U3R5bGVkQ29tcG9uZW50c0Vycm9yKDE2LCBcIlwiICsgZ3JvdXApO1xuICB9XG5cbiAgZ3JvdXBJRFJlZ2lzdGVyLnNldChpZCwgZ3JvdXApO1xuICByZXZlcnNlUmVnaXN0ZXIuc2V0KGdyb3VwLCBpZCk7XG4gIHJldHVybiBncm91cDtcbn07XG52YXIgZ2V0SWRGb3JHcm91cCA9IGZ1bmN0aW9uIGdldElkRm9yR3JvdXAoZ3JvdXApIHtcbiAgcmV0dXJuIHJldmVyc2VSZWdpc3Rlci5nZXQoZ3JvdXApO1xufTtcbnZhciBzZXRHcm91cEZvcklkID0gZnVuY3Rpb24gc2V0R3JvdXBGb3JJZChpZCwgZ3JvdXApIHtcbiAgaWYgKGdyb3VwID49IG5leHRGcmVlR3JvdXApIHtcbiAgICBuZXh0RnJlZUdyb3VwID0gZ3JvdXAgKyAxO1xuICB9XG5cbiAgZ3JvdXBJRFJlZ2lzdGVyLnNldChpZCwgZ3JvdXApO1xuICByZXZlcnNlUmVnaXN0ZXIuc2V0KGdyb3VwLCBpZCk7XG59O1xuXG4vLyBcbnZhciBTRUxFQ1RPUiA9IFwic3R5bGVbXCIgKyBTQ19BVFRSICsgXCJdW1wiICsgU0NfQVRUUl9WRVJTSU9OICsgXCI9XFxcIlwiICsgU0NfVkVSU0lPTiArIFwiXFxcIl1cIjtcbnZhciBNQVJLRVJfUkUgPSBuZXcgUmVnRXhwKFwiXlwiICsgU0NfQVRUUiArIFwiXFxcXC5nKFxcXFxkKylcXFxcW2lkPVxcXCIoW1xcXFx3XFxcXGQtXSspXFxcIlxcXFxdLio/XFxcIihbXlxcXCJdKilcIik7XG52YXIgb3V0cHV0U2hlZXQgPSBmdW5jdGlvbiBvdXRwdXRTaGVldChzaGVldCkge1xuICB2YXIgdGFnID0gc2hlZXQuZ2V0VGFnKCk7XG4gIHZhciBsZW5ndGggPSB0YWcubGVuZ3RoO1xuICB2YXIgY3NzID0gJyc7XG5cbiAgZm9yICh2YXIgZ3JvdXAgPSAwOyBncm91cCA8IGxlbmd0aDsgZ3JvdXArKykge1xuICAgIHZhciBpZCA9IGdldElkRm9yR3JvdXAoZ3JvdXApO1xuICAgIGlmIChpZCA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcbiAgICB2YXIgbmFtZXMgPSBzaGVldC5uYW1lcy5nZXQoaWQpO1xuICAgIHZhciBydWxlcyA9IHRhZy5nZXRHcm91cChncm91cCk7XG4gICAgaWYgKG5hbWVzID09PSB1bmRlZmluZWQgfHwgcnVsZXMubGVuZ3RoID09PSAwKSBjb250aW51ZTtcbiAgICB2YXIgc2VsZWN0b3IgPSBTQ19BVFRSICsgXCIuZ1wiICsgZ3JvdXAgKyBcIltpZD1cXFwiXCIgKyBpZCArIFwiXFxcIl1cIjtcbiAgICB2YXIgY29udGVudCA9ICcnO1xuXG4gICAgaWYgKG5hbWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG5hbWVzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgaWYgKG5hbWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnRlbnQgKz0gbmFtZSArIFwiLFwiO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IC8vIE5PVEU6IEl0J3MgZWFzaWVyIHRvIGNvbGxlY3QgcnVsZXMgYW5kIGhhdmUgdGhlIG1hcmtlclxuICAgIC8vIGFmdGVyIHRoZSBhY3R1YWwgcnVsZXMgdG8gc2ltcGxpZnkgdGhlIHJlaHlkcmF0aW9uXG5cblxuICAgIGNzcyArPSBcIlwiICsgcnVsZXMgKyBzZWxlY3RvciArIFwie2NvbnRlbnQ6XFxcIlwiICsgY29udGVudCArIFwiXFxcIn1cIiArIFNQTElUVEVSO1xuICB9XG5cbiAgcmV0dXJuIGNzcztcbn07XG5cbnZhciByZWh5ZHJhdGVOYW1lc0Zyb21Db250ZW50ID0gZnVuY3Rpb24gcmVoeWRyYXRlTmFtZXNGcm9tQ29udGVudChzaGVldCwgaWQsIGNvbnRlbnQpIHtcbiAgdmFyIG5hbWVzID0gY29udGVudC5zcGxpdCgnLCcpO1xuICB2YXIgbmFtZTtcblxuICBmb3IgKHZhciBpID0gMCwgbCA9IG5hbWVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIGlmIChuYW1lID0gbmFtZXNbaV0pIHtcbiAgICAgIHNoZWV0LnJlZ2lzdGVyTmFtZShpZCwgbmFtZSk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgcmVoeWRyYXRlU2hlZXRGcm9tVGFnID0gZnVuY3Rpb24gcmVoeWRyYXRlU2hlZXRGcm9tVGFnKHNoZWV0LCBzdHlsZSkge1xuICB2YXIgcGFydHMgPSBzdHlsZS5pbm5lckhUTUwuc3BsaXQoU1BMSVRURVIpO1xuICB2YXIgcnVsZXMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMCwgbCA9IHBhcnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHZhciBwYXJ0ID0gcGFydHNbaV0udHJpbSgpO1xuICAgIGlmICghcGFydCkgY29udGludWU7XG4gICAgdmFyIG1hcmtlciA9IHBhcnQubWF0Y2goTUFSS0VSX1JFKTtcblxuICAgIGlmIChtYXJrZXIpIHtcbiAgICAgIHZhciBncm91cCA9IHBhcnNlSW50KG1hcmtlclsxXSwgMTApIHwgMDtcbiAgICAgIHZhciBpZCA9IG1hcmtlclsyXTtcblxuICAgICAgaWYgKGdyb3VwICE9PSAwKSB7XG4gICAgICAgIC8vIFJlaHlkcmF0ZSBjb21wb25lbnRJZCB0byBncm91cCBpbmRleCBtYXBwaW5nXG4gICAgICAgIHNldEdyb3VwRm9ySWQoaWQsIGdyb3VwKTsgLy8gUmVoeWRyYXRlIG5hbWVzIGFuZCBydWxlc1xuICAgICAgICAvLyBsb29rcyBsaWtlOiBkYXRhLXN0eWxlZC5nMTFbaWQ9XCJpZEFcIl17Y29udGVudDpcIm5hbWVBLFwifVxuXG4gICAgICAgIHJlaHlkcmF0ZU5hbWVzRnJvbUNvbnRlbnQoc2hlZXQsIGlkLCBtYXJrZXJbM10pO1xuICAgICAgICBzaGVldC5nZXRUYWcoKS5pbnNlcnRSdWxlcyhncm91cCwgcnVsZXMpO1xuICAgICAgfVxuXG4gICAgICBydWxlcy5sZW5ndGggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBydWxlcy5wdXNoKHBhcnQpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIHJlaHlkcmF0ZVNoZWV0ID0gZnVuY3Rpb24gcmVoeWRyYXRlU2hlZXQoc2hlZXQpIHtcbiAgdmFyIG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUik7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBub2Rlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB2YXIgbm9kZSA9IG5vZGVzW2ldO1xuXG4gICAgaWYgKG5vZGUgJiYgbm9kZS5nZXRBdHRyaWJ1dGUoU0NfQVRUUikgIT09IFNDX0FUVFJfQUNUSVZFKSB7XG4gICAgICByZWh5ZHJhdGVTaGVldEZyb21UYWcoc2hlZXQsIG5vZGUpO1xuXG4gICAgICBpZiAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbnZhciBTSE9VTERfUkVIWURSQVRFID0gSVNfQlJPV1NFUjtcbnZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgaXNTZXJ2ZXI6ICFJU19CUk9XU0VSLFxuICB1c2VDU1NPTUluamVjdGlvbjogIURJU0FCTEVfU1BFRURZXG59O1xuLyoqIENvbnRhaW5zIHRoZSBtYWluIHN0eWxlc2hlZXQgbG9naWMgZm9yIHN0cmluZ2lmaWNhdGlvbiBhbmQgY2FjaGluZyAqL1xuXG52YXIgU3R5bGVTaGVldCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKiBSZWdpc3RlciBhIGdyb3VwIElEIHRvIGdpdmUgaXQgYW4gaW5kZXggKi9cbiAgU3R5bGVTaGVldC5yZWdpc3RlcklkID0gZnVuY3Rpb24gcmVnaXN0ZXJJZChpZCkge1xuICAgIHJldHVybiBnZXRHcm91cEZvcklkKGlkKTtcbiAgfTtcblxuICBmdW5jdGlvbiBTdHlsZVNoZWV0KG9wdGlvbnMsIGdsb2JhbFN0eWxlcywgbmFtZXMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKGdsb2JhbFN0eWxlcyA9PT0gdm9pZCAwKSB7XG4gICAgICBnbG9iYWxTdHlsZXMgPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdE9wdGlvbnMsIHt9LCBvcHRpb25zKTtcbiAgICB0aGlzLmdzID0gZ2xvYmFsU3R5bGVzO1xuICAgIHRoaXMubmFtZXMgPSBuZXcgTWFwKG5hbWVzKTsgLy8gV2UgcmVoeWRyYXRlIG9ubHkgb25jZSBhbmQgdXNlIHRoZSBzaGVldCB0aGF0IGlzIGNyZWF0ZWQgZmlyc3RcblxuICAgIGlmICghdGhpcy5vcHRpb25zLmlzU2VydmVyICYmIElTX0JST1dTRVIgJiYgU0hPVUxEX1JFSFlEUkFURSkge1xuICAgICAgU0hPVUxEX1JFSFlEUkFURSA9IGZhbHNlO1xuICAgICAgcmVoeWRyYXRlU2hlZXQodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIF9wcm90byA9IFN0eWxlU2hlZXQucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZWNvbnN0cnVjdFdpdGhPcHRpb25zID0gZnVuY3Rpb24gcmVjb25zdHJ1Y3RXaXRoT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBTdHlsZVNoZWV0KF9leHRlbmRzKHt9LCB0aGlzLm9wdGlvbnMsIHt9LCBvcHRpb25zKSwgdGhpcy5ncywgdGhpcy5uYW1lcyk7XG4gIH07XG5cbiAgX3Byb3RvLmFsbG9jYXRlR1NJbnN0YW5jZSA9IGZ1bmN0aW9uIGFsbG9jYXRlR1NJbnN0YW5jZShpZCkge1xuICAgIHJldHVybiB0aGlzLmdzW2lkXSA9ICh0aGlzLmdzW2lkXSB8fCAwKSArIDE7XG4gIH1cbiAgLyoqIExhemlseSBpbml0aWFsaXNlcyBhIEdyb3VwZWRUYWcgZm9yIHdoZW4gaXQncyBhY3R1YWxseSBuZWVkZWQgKi9cbiAgO1xuXG4gIF9wcm90by5nZXRUYWcgPSBmdW5jdGlvbiBnZXRUYWcoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFnIHx8ICh0aGlzLnRhZyA9IG1ha2VHcm91cGVkVGFnKG1ha2VUYWcodGhpcy5vcHRpb25zKSkpO1xuICB9XG4gIC8qKiBDaGVjayB3aGV0aGVyIGEgbmFtZSBpcyBrbm93biBmb3IgY2FjaGluZyAqL1xuICA7XG5cbiAgX3Byb3RvLmhhc05hbWVGb3JJZCA9IGZ1bmN0aW9uIGhhc05hbWVGb3JJZChpZCwgbmFtZSkge1xuICAgIHJldHVybiB0aGlzLm5hbWVzLmhhcyhpZCkgJiYgdGhpcy5uYW1lcy5nZXQoaWQpLmhhcyhuYW1lKTtcbiAgfVxuICAvKiogTWFyayBhIGdyb3VwJ3MgbmFtZSBhcyBrbm93biBmb3IgY2FjaGluZyAqL1xuICA7XG5cbiAgX3Byb3RvLnJlZ2lzdGVyTmFtZSA9IGZ1bmN0aW9uIHJlZ2lzdGVyTmFtZShpZCwgbmFtZSkge1xuICAgIGdldEdyb3VwRm9ySWQoaWQpO1xuXG4gICAgaWYgKCF0aGlzLm5hbWVzLmhhcyhpZCkpIHtcbiAgICAgIHZhciBncm91cE5hbWVzID0gbmV3IFNldCgpO1xuICAgICAgZ3JvdXBOYW1lcy5hZGQobmFtZSk7XG4gICAgICB0aGlzLm5hbWVzLnNldChpZCwgZ3JvdXBOYW1lcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubmFtZXMuZ2V0KGlkKS5hZGQobmFtZSk7XG4gICAgfVxuICB9XG4gIC8qKiBJbnNlcnQgbmV3IHJ1bGVzIHdoaWNoIGFsc28gbWFya3MgdGhlIG5hbWUgYXMga25vd24gKi9cbiAgO1xuXG4gIF9wcm90by5pbnNlcnRSdWxlcyA9IGZ1bmN0aW9uIGluc2VydFJ1bGVzKGlkLCBuYW1lLCBydWxlcykge1xuICAgIHRoaXMucmVnaXN0ZXJOYW1lKGlkLCBuYW1lKTtcbiAgICB0aGlzLmdldFRhZygpLmluc2VydFJ1bGVzKGdldEdyb3VwRm9ySWQoaWQpLCBydWxlcyk7XG4gIH1cbiAgLyoqIENsZWFycyBhbGwgY2FjaGVkIG5hbWVzIGZvciBhIGdpdmVuIGdyb3VwIElEICovXG4gIDtcblxuICBfcHJvdG8uY2xlYXJOYW1lcyA9IGZ1bmN0aW9uIGNsZWFyTmFtZXMoaWQpIHtcbiAgICBpZiAodGhpcy5uYW1lcy5oYXMoaWQpKSB7XG4gICAgICB0aGlzLm5hbWVzLmdldChpZCkuY2xlYXIoKTtcbiAgICB9XG4gIH1cbiAgLyoqIENsZWFycyBhbGwgcnVsZXMgZm9yIGEgZ2l2ZW4gZ3JvdXAgSUQgKi9cbiAgO1xuXG4gIF9wcm90by5jbGVhclJ1bGVzID0gZnVuY3Rpb24gY2xlYXJSdWxlcyhpZCkge1xuICAgIHRoaXMuZ2V0VGFnKCkuY2xlYXJHcm91cChnZXRHcm91cEZvcklkKGlkKSk7XG4gICAgdGhpcy5jbGVhck5hbWVzKGlkKTtcbiAgfVxuICAvKiogQ2xlYXJzIHRoZSBlbnRpcmUgdGFnIHdoaWNoIGRlbGV0ZXMgYWxsIHJ1bGVzIGJ1dCBub3QgaXRzIG5hbWVzICovXG4gIDtcblxuICBfcHJvdG8uY2xlYXJUYWcgPSBmdW5jdGlvbiBjbGVhclRhZygpIHtcbiAgICAvLyBOT1RFOiBUaGlzIGRvZXMgbm90IGNsZWFyIHRoZSBuYW1lcywgc2luY2UgaXQncyBvbmx5IHVzZWQgZHVyaW5nIFNTUlxuICAgIC8vIHNvIHRoYXQgd2UgY2FuIGNvbnRpbnVvdXNseSBvdXRwdXQgb25seSBuZXcgcnVsZXNcbiAgICB0aGlzLnRhZyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvKiogT3V0cHV0cyB0aGUgY3VycmVudCBzaGVldCBhcyBhIENTUyBzdHJpbmcgd2l0aCBtYXJrZXJzIGZvciBTU1IgKi9cbiAgO1xuXG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBvdXRwdXRTaGVldCh0aGlzKTtcbiAgfTtcblxuICByZXR1cm4gU3R5bGVTaGVldDtcbn0oKTtcblxuLy8gXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG52YXIgU0VFRCA9IDUzODE7IC8vIFdoZW4gd2UgaGF2ZSBzZXBhcmF0ZSBzdHJpbmdzIGl0J3MgdXNlZnVsIHRvIHJ1biBhIHByb2dyZXNzaXZlXG4vLyB2ZXJzaW9uIG9mIGRqYjIgd2hlcmUgd2UgcHJldGVuZCB0aGF0IHdlJ3JlIHN0aWxsIGxvb3Bpbmcgb3ZlclxuLy8gdGhlIHNhbWUgc3RyaW5nXG5cbnZhciBwaGFzaCA9IGZ1bmN0aW9uIHBoYXNoKGgsIHgpIHtcbiAgdmFyIGkgPSB4Lmxlbmd0aDtcblxuICB3aGlsZSAoaSkge1xuICAgIGggPSBoICogMzMgXiB4LmNoYXJDb2RlQXQoLS1pKTtcbiAgfVxuXG4gIHJldHVybiBoO1xufTsgLy8gVGhpcyBpcyBhIGRqYjIgaGFzaGluZyBmdW5jdGlvblxuXG52YXIgaGFzaCA9IGZ1bmN0aW9uIGhhc2goeCkge1xuICByZXR1cm4gcGhhc2goU0VFRCwgeCk7XG59O1xuXG4vKipcbiAqIE1JVCBMaWNlbnNlXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE2IFN1bHRhbiBUYXJpbW9cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mXG4gKiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLFxuICogdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcbiAqIE9SIElNUExJRUQgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLFxuICogV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUlxuICogSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuZnVuY3Rpb24gaW5zZXJ0UnVsZVBsdWdpbiAoaW5zZXJ0UnVsZSkge1xuICB2YXIgZGVsaW1pdGVyID0gJy8qfCovJztcbiAgdmFyIG5lZWRsZSA9IGRlbGltaXRlciArIFwifVwiO1xuXG4gIGZ1bmN0aW9uIHRvU2hlZXQoYmxvY2spIHtcbiAgICBpZiAoYmxvY2spIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGluc2VydFJ1bGUoYmxvY2sgKyBcIn1cIik7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBydWxlU2hlZXQoY29udGV4dCwgY29udGVudCwgc2VsZWN0b3JzLCBwYXJlbnRzLCBsaW5lLCBjb2x1bW4sIGxlbmd0aCwgbnMsIGRlcHRoLCBhdCkge1xuICAgIHN3aXRjaCAoY29udGV4dCkge1xuICAgICAgLy8gcHJvcGVydHlcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgLy8gQGltcG9ydFxuICAgICAgICBpZiAoZGVwdGggPT09IDAgJiYgY29udGVudC5jaGFyQ29kZUF0KDApID09PSA2NCkgcmV0dXJuIGluc2VydFJ1bGUoY29udGVudCArIFwiO1wiKSwgJyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gc2VsZWN0b3JcblxuICAgICAgY2FzZSAyOlxuICAgICAgICBpZiAobnMgPT09IDApIHJldHVybiBjb250ZW50ICsgZGVsaW1pdGVyO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIGF0LXJ1bGVcblxuICAgICAgY2FzZSAzOlxuICAgICAgICBzd2l0Y2ggKG5zKSB7XG4gICAgICAgICAgLy8gQGZvbnQtZmFjZSwgQHBhZ2VcbiAgICAgICAgICBjYXNlIDEwMjpcbiAgICAgICAgICBjYXNlIDExMjpcbiAgICAgICAgICAgIHJldHVybiBpbnNlcnRSdWxlKHNlbGVjdG9yc1swXSArIGNvbnRlbnQpLCAnJztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gY29udGVudCArIChhdCA9PT0gMCA/IGRlbGltaXRlciA6ICcnKTtcbiAgICAgICAgfVxuXG4gICAgICBjYXNlIC0yOlxuICAgICAgICBjb250ZW50LnNwbGl0KG5lZWRsZSkuZm9yRWFjaCh0b1NoZWV0KTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBDT01NRU5UX1JFR0VYID0gL15cXHMqXFwvXFwvLiokL2dtO1xuZnVuY3Rpb24gY3JlYXRlU3R5bGlzSW5zdGFuY2UoX3RlbXApIHtcbiAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8gRU1QVFlfT0JKRUNUIDogX3RlbXAsXG4gICAgICBfcmVmJG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBvcHRpb25zID0gX3JlZiRvcHRpb25zID09PSB2b2lkIDAgPyBFTVBUWV9PQkpFQ1QgOiBfcmVmJG9wdGlvbnMsXG4gICAgICBfcmVmJHBsdWdpbnMgPSBfcmVmLnBsdWdpbnMsXG4gICAgICBwbHVnaW5zID0gX3JlZiRwbHVnaW5zID09PSB2b2lkIDAgPyBFTVBUWV9BUlJBWSA6IF9yZWYkcGx1Z2lucztcblxuICB2YXIgc3R5bGlzID0gbmV3IFN0eWxpcyhvcHRpb25zKTsgLy8gV3JhcCBgaW5zZXJ0UnVsZVBsdWdpbiB0byBidWlsZCBhIGxpc3Qgb2YgcnVsZXMsXG4gIC8vIGFuZCB0aGVuIG1ha2Ugb3VyIG93biBwbHVnaW4gdG8gcmV0dXJuIHRoZSBydWxlcy4gVGhpc1xuICAvLyBtYWtlcyBpdCBlYXNpZXIgdG8gaG9vayBpbnRvIHRoZSBleGlzdGluZyBTU1IgYXJjaGl0ZWN0dXJlXG5cbiAgdmFyIHBhcnNpbmdSdWxlcyA9IFtdOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cblxuICB2YXIgcmV0dXJuUnVsZXNQbHVnaW4gPSBmdW5jdGlvbiByZXR1cm5SdWxlc1BsdWdpbihjb250ZXh0KSB7XG4gICAgaWYgKGNvbnRleHQgPT09IC0yKSB7XG4gICAgICB2YXIgcGFyc2VkUnVsZXMgPSBwYXJzaW5nUnVsZXM7XG4gICAgICBwYXJzaW5nUnVsZXMgPSBbXTtcbiAgICAgIHJldHVybiBwYXJzZWRSdWxlcztcbiAgICB9XG4gIH07XG5cbiAgdmFyIHBhcnNlUnVsZXNQbHVnaW4gPSBpbnNlcnRSdWxlUGx1Z2luKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgcGFyc2luZ1J1bGVzLnB1c2gocnVsZSk7XG4gIH0pO1xuXG4gIHZhciBfY29tcG9uZW50SWQ7XG5cbiAgdmFyIF9zZWxlY3RvcjtcblxuICB2YXIgX3NlbGVjdG9yUmVnZXhwO1xuXG4gIHZhciBzZWxmUmVmZXJlbmNlUmVwbGFjZXIgPSBmdW5jdGlvbiBzZWxmUmVmZXJlbmNlUmVwbGFjZXIobWF0Y2gsIG9mZnNldCwgc3RyaW5nKSB7XG4gICAgaWYgKCAvLyB0aGUgZmlyc3Qgc2VsZi1yZWYgaXMgYWx3YXlzIHVudG91Y2hlZFxuICAgIG9mZnNldCA+IDAgJiYgLy8gdGhlcmUgc2hvdWxkIGJlIGF0IGxlYXN0IHR3byBzZWxmLXJlZnMgdG8gZG8gYSByZXBsYWNlbWVudCAoLmIgPiAuYilcbiAgICBzdHJpbmcuc2xpY2UoMCwgb2Zmc2V0KS5pbmRleE9mKF9zZWxlY3RvcikgIT09IC0xICYmIC8vIG5vIGNvbnNlY3V0aXZlIHNlbGYgcmVmcyAoLmIuYik7IHRoYXQgaXMgYSBwcmVjZWRlbmNlIGJvb3N0IGFuZCB0cmVhdGVkIGRpZmZlcmVudGx5XG4gICAgc3RyaW5nLnNsaWNlKG9mZnNldCAtIF9zZWxlY3Rvci5sZW5ndGgsIG9mZnNldCkgIT09IF9zZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIFwiLlwiICsgX2NvbXBvbmVudElkO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaDtcbiAgfTtcbiAgLyoqXG4gICAqIFdoZW4gd3JpdGluZyBhIHN0eWxlIGxpa2VcbiAgICpcbiAgICogJiArICYge1xuICAgKiAgIGNvbG9yOiByZWQ7XG4gICAqIH1cbiAgICpcbiAgICogVGhlIHNlY29uZCBhbXBlcnNhbmQgc2hvdWxkIGJlIGEgcmVmZXJlbmNlIHRvIHRoZSBzdGF0aWMgY29tcG9uZW50IGNsYXNzLiBzdHlsaXNcbiAgICogaGFzIG5vIGtub3dsZWRnZSBvZiBzdGF0aWMgY2xhc3Mgc28gd2UgaGF2ZSB0byBpbnRlbGxpZ2VudGx5IHJlcGxhY2UgdGhlIGJhc2Ugc2VsZWN0b3IuXG4gICAqXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS90aHlzdWx0YW4vc3R5bGlzLmpzI3BsdWdpbnMgPC0gbW9yZSBpbmZvIGFib3V0IHRoZSBjb250ZXh0IHBoYXNlIHZhbHVlc1xuICAgKiBcIjJcIiBtZWFucyB0aGlzIHBsdWdpbiBpcyB0YWtpbmcgZWZmZWN0IGF0IHRoZSB2ZXJ5IGVuZCBhZnRlciBhbGwgb3RoZXIgcHJvY2Vzc2luZyBpcyBjb21wbGV0ZVxuICAgKi9cblxuXG4gIHZhciBzZWxmUmVmZXJlbmNlUmVwbGFjZW1lbnRQbHVnaW4gPSBmdW5jdGlvbiBzZWxmUmVmZXJlbmNlUmVwbGFjZW1lbnRQbHVnaW4oY29udGV4dCwgXywgc2VsZWN0b3JzKSB7XG4gICAgaWYgKGNvbnRleHQgPT09IDIgJiYgc2VsZWN0b3JzLmxlbmd0aCAmJiBzZWxlY3RvcnNbMF0ubGFzdEluZGV4T2YoX3NlbGVjdG9yKSA+IDApIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgc2VsZWN0b3JzWzBdID0gc2VsZWN0b3JzWzBdLnJlcGxhY2UoX3NlbGVjdG9yUmVnZXhwLCBzZWxmUmVmZXJlbmNlUmVwbGFjZXIpO1xuICAgIH1cbiAgfTtcblxuICBzdHlsaXMudXNlKFtdLmNvbmNhdChwbHVnaW5zLCBbc2VsZlJlZmVyZW5jZVJlcGxhY2VtZW50UGx1Z2luLCBwYXJzZVJ1bGVzUGx1Z2luLCByZXR1cm5SdWxlc1BsdWdpbl0pKTtcblxuICBmdW5jdGlvbiBzdHJpbmdpZnlSdWxlcyhjc3MsIHNlbGVjdG9yLCBwcmVmaXgsIGNvbXBvbmVudElkKSB7XG4gICAgaWYgKGNvbXBvbmVudElkID09PSB2b2lkIDApIHtcbiAgICAgIGNvbXBvbmVudElkID0gJyYnO1xuICAgIH1cblxuICAgIHZhciBmbGF0Q1NTID0gY3NzLnJlcGxhY2UoQ09NTUVOVF9SRUdFWCwgJycpO1xuICAgIHZhciBjc3NTdHIgPSBzZWxlY3RvciAmJiBwcmVmaXggPyBwcmVmaXggKyBcIiBcIiArIHNlbGVjdG9yICsgXCIgeyBcIiArIGZsYXRDU1MgKyBcIiB9XCIgOiBmbGF0Q1NTOyAvLyBzdHlsaXMgaGFzIG5vIGNvbmNlcHQgb2Ygc3RhdGUgdG8gYmUgcGFzc2VkIHRvIHBsdWdpbnNcbiAgICAvLyBidXQgc2luY2UgSlMgaXMgc2luZ2xlPXRocmVhZGVkLCB3ZSBjYW4gcmVseSBvbiB0aGF0IHRvIGVuc3VyZVxuICAgIC8vIHRoZXNlIHByb3BlcnRpZXMgc3RheSBpbiBzeW5jIHdpdGggdGhlIGN1cnJlbnQgc3R5bGlzIHJ1blxuXG4gICAgX2NvbXBvbmVudElkID0gY29tcG9uZW50SWQ7XG4gICAgX3NlbGVjdG9yID0gc2VsZWN0b3I7XG4gICAgX3NlbGVjdG9yUmVnZXhwID0gbmV3IFJlZ0V4cChcIlxcXFxcIiArIF9zZWxlY3RvciArIFwiXFxcXGJcIiwgJ2cnKTtcbiAgICByZXR1cm4gc3R5bGlzKHByZWZpeCB8fCAhc2VsZWN0b3IgPyAnJyA6IHNlbGVjdG9yLCBjc3NTdHIpO1xuICB9XG5cbiAgc3RyaW5naWZ5UnVsZXMuaGFzaCA9IHBsdWdpbnMubGVuZ3RoID8gcGx1Z2lucy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGx1Z2luKSB7XG4gICAgaWYgKCFwbHVnaW4ubmFtZSkge1xuICAgICAgdGhyb3dTdHlsZWRDb21wb25lbnRzRXJyb3IoMTUpO1xuICAgIH1cblxuICAgIHJldHVybiBwaGFzaChhY2MsIHBsdWdpbi5uYW1lKTtcbiAgfSwgU0VFRCkudG9TdHJpbmcoKSA6ICcnO1xuICByZXR1cm4gc3RyaW5naWZ5UnVsZXM7XG59XG5cbi8vIFxudmFyIFN0eWxlU2hlZXRDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xudmFyIFN0eWxlU2hlZXRDb25zdW1lciA9IFN0eWxlU2hlZXRDb250ZXh0LkNvbnN1bWVyO1xudmFyIFN0eWxpc0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG52YXIgU3R5bGlzQ29uc3VtZXIgPSBTdHlsaXNDb250ZXh0LkNvbnN1bWVyO1xudmFyIG1hc3RlclNoZWV0ID0gbmV3IFN0eWxlU2hlZXQoKTtcbnZhciBtYXN0ZXJTdHlsaXMgPSBjcmVhdGVTdHlsaXNJbnN0YW5jZSgpO1xuZnVuY3Rpb24gdXNlU3R5bGVTaGVldCgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoU3R5bGVTaGVldENvbnRleHQpIHx8IG1hc3RlclNoZWV0O1xufVxuZnVuY3Rpb24gdXNlU3R5bGlzKCkge1xuICByZXR1cm4gdXNlQ29udGV4dChTdHlsaXNDb250ZXh0KSB8fCBtYXN0ZXJTdHlsaXM7XG59XG5mdW5jdGlvbiBTdHlsZVNoZWV0TWFuYWdlcihwcm9wcykge1xuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUocHJvcHMuc3R5bGlzUGx1Z2lucyksXG4gICAgICBwbHVnaW5zID0gX3VzZVN0YXRlWzBdLFxuICAgICAgc2V0UGx1Z2lucyA9IF91c2VTdGF0ZVsxXTtcblxuICB2YXIgY29udGV4dFN0eWxlU2hlZXQgPSB1c2VTdHlsZVNoZWV0KCk7XG4gIHZhciBzdHlsZVNoZWV0ID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNoZWV0ID0gY29udGV4dFN0eWxlU2hlZXQ7XG5cbiAgICBpZiAocHJvcHMuc2hlZXQpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgc2hlZXQgPSBwcm9wcy5zaGVldDtcbiAgICB9IGVsc2UgaWYgKHByb3BzLnRhcmdldCkge1xuICAgICAgc2hlZXQgPSBzaGVldC5yZWNvbnN0cnVjdFdpdGhPcHRpb25zKHtcbiAgICAgICAgdGFyZ2V0OiBwcm9wcy50YXJnZXRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5kaXNhYmxlQ1NTT01JbmplY3Rpb24pIHtcbiAgICAgIHNoZWV0ID0gc2hlZXQucmVjb25zdHJ1Y3RXaXRoT3B0aW9ucyh7XG4gICAgICAgIHVzZUNTU09NSW5qZWN0aW9uOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNoZWV0O1xuICB9LCBbcHJvcHMuZGlzYWJsZUNTU09NSW5qZWN0aW9uLCBwcm9wcy5zaGVldCwgcHJvcHMudGFyZ2V0XSk7XG4gIHZhciBzdHlsaXMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY3JlYXRlU3R5bGlzSW5zdGFuY2Uoe1xuICAgICAgb3B0aW9uczoge1xuICAgICAgICBwcmVmaXg6ICFwcm9wcy5kaXNhYmxlVmVuZG9yUHJlZml4ZXNcbiAgICAgIH0sXG4gICAgICBwbHVnaW5zOiBwbHVnaW5zXG4gICAgfSk7XG4gIH0sIFtwcm9wcy5kaXNhYmxlVmVuZG9yUHJlZml4ZXMsIHBsdWdpbnNdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXNoYWxsb3dlcXVhbChwbHVnaW5zLCBwcm9wcy5zdHlsaXNQbHVnaW5zKSkgc2V0UGx1Z2lucyhwcm9wcy5zdHlsaXNQbHVnaW5zKTtcbiAgfSwgW3Byb3BzLnN0eWxpc1BsdWdpbnNdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlU2hlZXRDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHN0eWxlU2hlZXRcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGlzQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBzdHlsaXNcbiAgfSwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IFJlYWN0LkNoaWxkcmVuLm9ubHkocHJvcHMuY2hpbGRyZW4pIDogcHJvcHMuY2hpbGRyZW4pKTtcbn1cblxuLy8gXG5cbnZhciBLZXlmcmFtZXMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBLZXlmcmFtZXMobmFtZSwgc3RyaW5naWZ5QXJncykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLmluamVjdCA9IGZ1bmN0aW9uIChzdHlsZVNoZWV0KSB7XG4gICAgICBpZiAoIXN0eWxlU2hlZXQuaGFzTmFtZUZvcklkKF90aGlzLmlkLCBfdGhpcy5uYW1lKSkge1xuICAgICAgICBzdHlsZVNoZWV0Lmluc2VydFJ1bGVzKF90aGlzLmlkLCBfdGhpcy5uYW1lLCBtYXN0ZXJTdHlsaXMuYXBwbHkodm9pZCAwLCBfdGhpcy5zdHJpbmdpZnlBcmdzKSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhyb3dTdHlsZWRDb21wb25lbnRzRXJyb3IoMTIsIFN0cmluZyhfdGhpcy5uYW1lKSk7XG4gICAgfTtcblxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pZCA9IFwic2Mta2V5ZnJhbWVzLVwiICsgbmFtZTtcbiAgICB0aGlzLnN0cmluZ2lmeUFyZ3MgPSBzdHJpbmdpZnlBcmdzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEtleWZyYW1lcy5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmdldE5hbWUgPSBmdW5jdGlvbiBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH07XG5cbiAgcmV0dXJuIEtleWZyYW1lcztcbn0oKTtcblxuLy8gXG5cbi8qKlxuICogaW5saW5lZCB2ZXJzaW9uIG9mXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmJqcy9ibG9iL21hc3Rlci9wYWNrYWdlcy9mYmpzL3NyYy9jb3JlL2h5cGhlbmF0ZVN0eWxlTmFtZS5qc1xuICovXG52YXIgdXBwZXJjYXNlUGF0dGVybiA9IC8oW0EtWl0pL2c7XG52YXIgbXNQYXR0ZXJuID0gL15tcy0vO1xuLyoqXG4gKiBIeXBoZW5hdGVzIGEgY2FtZWxjYXNlZCBDU1MgcHJvcGVydHkgbmFtZSwgZm9yIGV4YW1wbGU6XG4gKlxuICogICA+IGh5cGhlbmF0ZVN0eWxlTmFtZSgnYmFja2dyb3VuZENvbG9yJylcbiAqICAgPCBcImJhY2tncm91bmQtY29sb3JcIlxuICogICA+IGh5cGhlbmF0ZVN0eWxlTmFtZSgnTW96VHJhbnNpdGlvbicpXG4gKiAgIDwgXCItbW96LXRyYW5zaXRpb25cIlxuICogICA+IGh5cGhlbmF0ZVN0eWxlTmFtZSgnbXNUcmFuc2l0aW9uJylcbiAqICAgPCBcIi1tcy10cmFuc2l0aW9uXCJcbiAqXG4gKiBBcyBNb2Rlcm5penIgc3VnZ2VzdHMgKGh0dHA6Ly9tb2Rlcm5penIuY29tL2RvY3MvI3ByZWZpeGVkKSwgYW4gYG1zYCBwcmVmaXhcbiAqIGlzIGNvbnZlcnRlZCB0byBgLW1zLWAuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIGh5cGhlbmF0ZVN0eWxlTmFtZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKHVwcGVyY2FzZVBhdHRlcm4sICctJDEnKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UobXNQYXR0ZXJuLCAnLW1zLScpO1xufVxuXG4vLyBcblxuZnVuY3Rpb24gYWRkVW5pdElmTmVlZGVkKG5hbWUsIHZhbHVlKSB7XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbWlsYWphY2svZXNsaW50LXBsdWdpbi1mbG93dHlwZS1lcnJvcnMvaXNzdWVzLzEzM1xuICAvLyAkRmxvd0ZpeE1lXG4gIGlmICh2YWx1ZSA9PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nIHx8IHZhbHVlID09PSAnJykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHZhbHVlICE9PSAwICYmICEobmFtZSBpbiB1bml0bGVzcykpIHtcbiAgICByZXR1cm4gdmFsdWUgKyBcInB4XCI7IC8vIFByZXN1bWVzIGltcGxpY2l0ICdweCcgc3VmZml4IGZvciB1bml0bGVzcyBudW1iZXJzXG4gIH1cblxuICByZXR1cm4gU3RyaW5nKHZhbHVlKS50cmltKCk7XG59XG5cbi8vIFxuLyoqXG4gKiBJdCdzIGZhbHNpc2ggbm90IGZhbHN5IGJlY2F1c2UgMCBpcyBhbGxvd2VkLlxuICovXG5cbnZhciBpc0ZhbHNpc2ggPSBmdW5jdGlvbiBpc0ZhbHNpc2goY2h1bmspIHtcbiAgcmV0dXJuIGNodW5rID09PSB1bmRlZmluZWQgfHwgY2h1bmsgPT09IG51bGwgfHwgY2h1bmsgPT09IGZhbHNlIHx8IGNodW5rID09PSAnJztcbn07XG5cbnZhciBvYmpUb0Nzc0FycmF5ID0gZnVuY3Rpb24gb2JqVG9Dc3NBcnJheShvYmosIHByZXZLZXkpIHtcbiAgdmFyIHJ1bGVzID0gW107XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoIWlzRmFsc2lzaChvYmpba2V5XSkpIHtcbiAgICAgIGlmIChpc1BsYWluT2JqZWN0KG9ialtrZXldKSkge1xuICAgICAgICBydWxlcy5wdXNoLmFwcGx5KHJ1bGVzLCBvYmpUb0Nzc0FycmF5KG9ialtrZXldLCBrZXkpKTtcbiAgICAgICAgcmV0dXJuIHJ1bGVzO1xuICAgICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKG9ialtrZXldKSkge1xuICAgICAgICBydWxlcy5wdXNoKGh5cGhlbmF0ZVN0eWxlTmFtZShrZXkpICsgXCI6XCIsIG9ialtrZXldLCAnOycpO1xuICAgICAgICByZXR1cm4gcnVsZXM7XG4gICAgICB9XG5cbiAgICAgIHJ1bGVzLnB1c2goaHlwaGVuYXRlU3R5bGVOYW1lKGtleSkgKyBcIjogXCIgKyBhZGRVbml0SWZOZWVkZWQoa2V5LCBvYmpba2V5XSkgKyBcIjtcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9KTtcbiAgcmV0dXJuIHByZXZLZXkgPyBbcHJldktleSArIFwiIHtcIl0uY29uY2F0KHJ1bGVzLCBbJ30nXSkgOiBydWxlcztcbn07XG5mdW5jdGlvbiBmbGF0dGVuKGNodW5rLCBleGVjdXRpb25Db250ZXh0LCBzdHlsZVNoZWV0KSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGNodW5rKSkge1xuICAgIHZhciBydWxlU2V0ID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2h1bmsubGVuZ3RoLCByZXN1bHQ7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgcmVzdWx0ID0gZmxhdHRlbihjaHVua1tpXSwgZXhlY3V0aW9uQ29udGV4dCwgc3R5bGVTaGVldCk7XG4gICAgICBpZiAocmVzdWx0ID09PSAnJykgY29udGludWU7ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSBydWxlU2V0LnB1c2guYXBwbHkocnVsZVNldCwgcmVzdWx0KTtlbHNlIHJ1bGVTZXQucHVzaChyZXN1bHQpO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlU2V0O1xuICB9XG5cbiAgaWYgKGlzRmFsc2lzaChjaHVuaykpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgLyogSGFuZGxlIG90aGVyIGNvbXBvbmVudHMgKi9cblxuXG4gIGlmIChpc1N0eWxlZENvbXBvbmVudChjaHVuaykpIHtcbiAgICByZXR1cm4gXCIuXCIgKyBjaHVuay5zdHlsZWRDb21wb25lbnRJZDtcbiAgfVxuICAvKiBFaXRoZXIgZXhlY3V0ZSBvciBkZWZlciB0aGUgZnVuY3Rpb24gKi9cblxuXG4gIGlmIChpc0Z1bmN0aW9uKGNodW5rKSkge1xuICAgIGlmIChpc1N0YXRlbGVzc0Z1bmN0aW9uKGNodW5rKSAmJiBleGVjdXRpb25Db250ZXh0KSB7XG4gICAgICB2YXIgX3Jlc3VsdCA9IGNodW5rKGV4ZWN1dGlvbkNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpc0VsZW1lbnQoX3Jlc3VsdCkpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS53YXJuKGdldENvbXBvbmVudE5hbWUoY2h1bmspICsgXCIgaXMgbm90IGEgc3R5bGVkIGNvbXBvbmVudCBhbmQgY2Fubm90IGJlIHJlZmVycmVkIHRvIHZpYSBjb21wb25lbnQgc2VsZWN0b3IuIFNlZSBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9hZHZhbmNlZCNyZWZlcnJpbmctdG8tb3RoZXItY29tcG9uZW50cyBmb3IgbW9yZSBkZXRhaWxzLlwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZsYXR0ZW4oX3Jlc3VsdCwgZXhlY3V0aW9uQ29udGV4dCwgc3R5bGVTaGVldCk7XG4gICAgfSBlbHNlIHJldHVybiBjaHVuaztcbiAgfVxuXG4gIGlmIChjaHVuayBpbnN0YW5jZW9mIEtleWZyYW1lcykge1xuICAgIGlmIChzdHlsZVNoZWV0KSB7XG4gICAgICBjaHVuay5pbmplY3Qoc3R5bGVTaGVldCk7XG4gICAgICByZXR1cm4gY2h1bmsuZ2V0TmFtZSgpO1xuICAgIH0gZWxzZSByZXR1cm4gY2h1bms7XG4gIH1cbiAgLyogSGFuZGxlIG9iamVjdHMgKi9cblxuXG4gIHJldHVybiBpc1BsYWluT2JqZWN0KGNodW5rKSA/IG9ialRvQ3NzQXJyYXkoY2h1bmspIDogY2h1bmsudG9TdHJpbmcoKTtcbn1cblxuLy8gXG5mdW5jdGlvbiBjc3Moc3R5bGVzKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBpbnRlcnBvbGF0aW9ucyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgaW50ZXJwb2xhdGlvbnNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKGlzRnVuY3Rpb24oc3R5bGVzKSB8fCBpc1BsYWluT2JqZWN0KHN0eWxlcykpIHtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgcmV0dXJuIGZsYXR0ZW4oaW50ZXJsZWF2ZShFTVBUWV9BUlJBWSwgW3N0eWxlc10uY29uY2F0KGludGVycG9sYXRpb25zKSkpO1xuICB9XG5cbiAgaWYgKGludGVycG9sYXRpb25zLmxlbmd0aCA9PT0gMCAmJiBzdHlsZXMubGVuZ3RoID09PSAxICYmIHR5cGVvZiBzdHlsZXNbMF0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfSAvLyAkRmxvd0ZpeE1lXG5cblxuICByZXR1cm4gZmxhdHRlbihpbnRlcmxlYXZlKHN0eWxlcywgaW50ZXJwb2xhdGlvbnMpKTtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0V2l0aE9wdGlvbnMoY29tcG9uZW50Q29uc3RydWN0b3IsIHRhZywgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IEVNUFRZX09CSkVDVDtcbiAgfVxuXG4gIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKHRhZykpIHtcbiAgICByZXR1cm4gdGhyb3dTdHlsZWRDb21wb25lbnRzRXJyb3IoMSwgU3RyaW5nKHRhZykpO1xuICB9XG4gIC8qIFRoaXMgaXMgY2FsbGFibGUgZGlyZWN0bHkgYXMgYSB0ZW1wbGF0ZSBmdW5jdGlvbiAqL1xuICAvLyAkRmxvd0ZpeE1lOiBOb3QgdHlwZWQgdG8gYXZvaWQgZGVzdHJ1Y3R1cmluZyBhcmd1bWVudHNcblxuXG4gIHZhciB0ZW1wbGF0ZUZ1bmN0aW9uID0gZnVuY3Rpb24gdGVtcGxhdGVGdW5jdGlvbigpIHtcbiAgICByZXR1cm4gY29tcG9uZW50Q29uc3RydWN0b3IodGFnLCBvcHRpb25zLCBjc3MuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpKTtcbiAgfTtcbiAgLyogSWYgY29uZmlnIG1ldGhvZHMgYXJlIGNhbGxlZCwgd3JhcCB1cCBhIG5ldyB0ZW1wbGF0ZSBmdW5jdGlvbiBhbmQgbWVyZ2Ugb3B0aW9ucyAqL1xuXG5cbiAgdGVtcGxhdGVGdW5jdGlvbi53aXRoQ29uZmlnID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgIHJldHVybiBjb25zdHJ1Y3RXaXRoT3B0aW9ucyhjb21wb25lbnRDb25zdHJ1Y3RvciwgdGFnLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge30sIGNvbmZpZykpO1xuICB9O1xuICAvKiBNb2RpZnkvaW5qZWN0IG5ldyBwcm9wcyBhdCBydW50aW1lICovXG5cblxuICB0ZW1wbGF0ZUZ1bmN0aW9uLmF0dHJzID0gZnVuY3Rpb24gKGF0dHJzKSB7XG4gICAgcmV0dXJuIGNvbnN0cnVjdFdpdGhPcHRpb25zKGNvbXBvbmVudENvbnN0cnVjdG9yLCB0YWcsIF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBhdHRyczogQXJyYXkucHJvdG90eXBlLmNvbmNhdChvcHRpb25zLmF0dHJzLCBhdHRycykuZmlsdGVyKEJvb2xlYW4pXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiB0ZW1wbGF0ZUZ1bmN0aW9uO1xufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4vKipcbiAgbWl4aW4tZGVlcDsgaHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvbWl4aW4tZGVlcFxuICBJbmxpbmVkIHN1Y2ggdGhhdCBpdCB3aWxsIGJlIGNvbnNpc3RlbnRseSB0cmFuc3BpbGVkIHRvIGFuIElFLWNvbXBhdGlibGUgc3ludGF4LlxuXG4gIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXG4gIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBKb24gU2NobGlua2VydC5cblxuICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAgVEhFIFNPRlRXQVJFLlxuKi9cbnZhciBpc09iamVjdCA9IGZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgdmFsID09PSAnb2JqZWN0JyAmJiB2YWwgIT09IG51bGwgJiYgIUFycmF5LmlzQXJyYXkodmFsKTtcbn07XG5cbnZhciBpc1ZhbGlkS2V5ID0gZnVuY3Rpb24gaXNWYWxpZEtleShrZXkpIHtcbiAgcmV0dXJuIGtleSAhPT0gJ19fcHJvdG9fXycgJiYga2V5ICE9PSAnY29uc3RydWN0b3InICYmIGtleSAhPT0gJ3Byb3RvdHlwZSc7XG59O1xuXG5mdW5jdGlvbiBtaXhpbih0YXJnZXQsIHZhbCwga2V5KSB7XG4gIHZhciBvYmogPSB0YXJnZXRba2V5XTtcblxuICBpZiAoaXNPYmplY3QodmFsKSAmJiBpc09iamVjdChvYmopKSB7XG4gICAgbWl4aW5EZWVwKG9iaiwgdmFsKTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXRba2V5XSA9IHZhbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBtaXhpbkRlZXAodGFyZ2V0KSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0ID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICByZXN0W19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGZvciAodmFyIF9pID0gMCwgX3Jlc3QgPSByZXN0OyBfaSA8IF9yZXN0Lmxlbmd0aDsgX2krKykge1xuICAgIHZhciBvYmogPSBfcmVzdFtfaV07XG5cbiAgICBpZiAoaXNPYmplY3Qob2JqKSkge1xuICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICBpZiAoaXNWYWxpZEtleShrZXkpKSB7XG4gICAgICAgICAgbWl4aW4odGFyZ2V0LCBvYmpba2V5XSwga2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbi8vIFxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1iaXR3aXNlICovXG52YXIgQURfUkVQTEFDRVJfUiA9IC8oYSkoZCkvZ2k7XG4vKiBUaGlzIGlzIHRoZSBcImNhcGFjaXR5XCIgb2Ygb3VyIGFscGhhYmV0IGkuZS4gMngyNiBmb3IgYWxsIGxldHRlcnMgcGx1cyB0aGVpciBjYXBpdGFsaXNlZFxuICogY291bnRlcnBhcnRzICovXG5cbnZhciBjaGFyc0xlbmd0aCA9IDUyO1xuLyogc3RhcnQgYXQgNzUgZm9yICdhJyB1bnRpbCAneicgKDI1KSBhbmQgdGhlbiBzdGFydCBhdCA2NSBmb3IgY2FwaXRhbGlzZWQgbGV0dGVycyAqL1xuXG52YXIgZ2V0QWxwaGFiZXRpY0NoYXIgPSBmdW5jdGlvbiBnZXRBbHBoYWJldGljQ2hhcihjb2RlKSB7XG4gIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUgKyAoY29kZSA+IDI1ID8gMzkgOiA5NykpO1xufTtcbi8qIGlucHV0IGEgbnVtYmVyLCB1c3VhbGx5IGEgaGFzaCBhbmQgY29udmVydCBpdCB0byBiYXNlLTUyICovXG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVBbHBoYWJldGljTmFtZShjb2RlKSB7XG4gIHZhciBuYW1lID0gJyc7XG4gIHZhciB4O1xuICAvKiBnZXQgYSBjaGFyIGFuZCBkaXZpZGUgYnkgYWxwaGFiZXQtbGVuZ3RoICovXG5cbiAgZm9yICh4ID0gTWF0aC5hYnMoY29kZSk7IHggPiBjaGFyc0xlbmd0aDsgeCA9IHggLyBjaGFyc0xlbmd0aCB8IDApIHtcbiAgICBuYW1lID0gZ2V0QWxwaGFiZXRpY0NoYXIoeCAlIGNoYXJzTGVuZ3RoKSArIG5hbWU7XG4gIH1cblxuICByZXR1cm4gKGdldEFscGhhYmV0aWNDaGFyKHggJSBjaGFyc0xlbmd0aCkgKyBuYW1lKS5yZXBsYWNlKEFEX1JFUExBQ0VSX1IsICckMS0kMicpO1xufVxuXG4vLyBcbmZ1bmN0aW9uIGlzU3RhdGljUnVsZXMocnVsZXMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBydWxlID0gcnVsZXNbaV07XG5cbiAgICBpZiAoaXNGdW5jdGlvbihydWxlKSAmJiAhaXNTdHlsZWRDb21wb25lbnQocnVsZSkpIHtcbiAgICAgIC8vIGZ1bmN0aW9ucyBhcmUgYWxsb3dlZCB0byBiZSBzdGF0aWMgaWYgdGhleSdyZSBqdXN0IGJlaW5nXG4gICAgICAvLyB1c2VkIHRvIGdldCB0aGUgY2xhc3NuYW1lIG9mIGEgbmVzdGVkIHN0eWxlZCBjb21wb25lbnRcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gXG4vKlxuIENvbXBvbmVudFN0eWxlIGlzIGFsbCB0aGUgQ1NTLXNwZWNpZmljIHN0dWZmLCBub3RcbiB0aGUgUmVhY3Qtc3BlY2lmaWMgc3R1ZmYuXG4gKi9cblxudmFyIENvbXBvbmVudFN0eWxlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ29tcG9uZW50U3R5bGUocnVsZXMsIGNvbXBvbmVudElkKSB7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuc3RhdGljUnVsZXNJZCA9ICcnO1xuICAgIHRoaXMuaXNTdGF0aWMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIGlzU3RhdGljUnVsZXMocnVsZXMpO1xuICAgIHRoaXMuY29tcG9uZW50SWQgPSBjb21wb25lbnRJZDtcbiAgICB0aGlzLmJhc2VIYXNoID0gaGFzaChjb21wb25lbnRJZCk7IC8vIE5PVEU6IFRoaXMgcmVnaXN0ZXJzIHRoZSBjb21wb25lbnRJZCwgd2hpY2ggZW5zdXJlcyBhIGNvbnNpc3RlbnQgb3JkZXJcbiAgICAvLyBmb3IgdGhpcyBjb21wb25lbnQncyBzdHlsZXMgY29tcGFyZWQgdG8gb3RoZXJzXG5cbiAgICBTdHlsZVNoZWV0LnJlZ2lzdGVySWQoY29tcG9uZW50SWQpO1xuICB9XG4gIC8qXG4gICAqIEZsYXR0ZW5zIGEgcnVsZSBzZXQgaW50byB2YWxpZCBDU1NcbiAgICogSGFzaGVzIGl0LCB3cmFwcyB0aGUgd2hvbGUgY2h1bmsgaW4gYSAuaGFzaDEyMzQge31cbiAgICogUmV0dXJucyB0aGUgaGFzaCB0byBiZSBpbmplY3RlZCBvbiByZW5kZXIoKVxuICAgKiAqL1xuXG5cbiAgdmFyIF9wcm90byA9IENvbXBvbmVudFN0eWxlLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMgPSBmdW5jdGlvbiBnZW5lcmF0ZUFuZEluamVjdFN0eWxlcyhleGVjdXRpb25Db250ZXh0LCBzdHlsZVNoZWV0LCBzdHlsaXMpIHtcbiAgICB2YXIgY29tcG9uZW50SWQgPSB0aGlzLmNvbXBvbmVudElkOyAvLyBmb3JjZSBkeW5hbWljIGNsYXNzbmFtZXMgaWYgdXNlci1zdXBwbGllZCBzdHlsaXMgcGx1Z2lucyBhcmUgaW4gdXNlXG5cbiAgICBpZiAodGhpcy5pc1N0YXRpYyAmJiAhc3R5bGlzLmhhc2gpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRpY1J1bGVzSWQgJiYgc3R5bGVTaGVldC5oYXNOYW1lRm9ySWQoY29tcG9uZW50SWQsIHRoaXMuc3RhdGljUnVsZXNJZCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGljUnVsZXNJZDtcbiAgICAgIH1cblxuICAgICAgdmFyIGNzc1N0YXRpYyA9IGZsYXR0ZW4odGhpcy5ydWxlcywgZXhlY3V0aW9uQ29udGV4dCwgc3R5bGVTaGVldCkuam9pbignJyk7XG4gICAgICB2YXIgbmFtZSA9IGdlbmVyYXRlQWxwaGFiZXRpY05hbWUocGhhc2godGhpcy5iYXNlSGFzaCwgY3NzU3RhdGljLmxlbmd0aCkgPj4+IDApO1xuXG4gICAgICBpZiAoIXN0eWxlU2hlZXQuaGFzTmFtZUZvcklkKGNvbXBvbmVudElkLCBuYW1lKSkge1xuICAgICAgICB2YXIgY3NzU3RhdGljRm9ybWF0dGVkID0gc3R5bGlzKGNzc1N0YXRpYywgXCIuXCIgKyBuYW1lLCB1bmRlZmluZWQsIGNvbXBvbmVudElkKTtcbiAgICAgICAgc3R5bGVTaGVldC5pbnNlcnRSdWxlcyhjb21wb25lbnRJZCwgbmFtZSwgY3NzU3RhdGljRm9ybWF0dGVkKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGF0aWNSdWxlc0lkID0gbmFtZTtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbGVuZ3RoID0gdGhpcy5ydWxlcy5sZW5ndGg7XG4gICAgICB2YXIgZHluYW1pY0hhc2ggPSBwaGFzaCh0aGlzLmJhc2VIYXNoLCBzdHlsaXMuaGFzaCk7XG4gICAgICB2YXIgY3NzID0gJyc7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHBhcnRSdWxlID0gdGhpcy5ydWxlc1tpXTtcblxuICAgICAgICBpZiAodHlwZW9mIHBhcnRSdWxlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNzcyArPSBwYXJ0UnVsZTtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZHluYW1pY0hhc2ggPSBwaGFzaChkeW5hbWljSGFzaCwgcGFydFJ1bGUgKyBpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcGFydENodW5rID0gZmxhdHRlbihwYXJ0UnVsZSwgZXhlY3V0aW9uQ29udGV4dCwgc3R5bGVTaGVldCk7XG4gICAgICAgICAgdmFyIHBhcnRTdHJpbmcgPSBBcnJheS5pc0FycmF5KHBhcnRDaHVuaykgPyBwYXJ0Q2h1bmsuam9pbignJykgOiBwYXJ0Q2h1bms7XG4gICAgICAgICAgZHluYW1pY0hhc2ggPSBwaGFzaChkeW5hbWljSGFzaCwgcGFydFN0cmluZyArIGkpO1xuICAgICAgICAgIGNzcyArPSBwYXJ0U3RyaW5nO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBfbmFtZSA9IGdlbmVyYXRlQWxwaGFiZXRpY05hbWUoZHluYW1pY0hhc2ggPj4+IDApO1xuXG4gICAgICBpZiAoIXN0eWxlU2hlZXQuaGFzTmFtZUZvcklkKGNvbXBvbmVudElkLCBfbmFtZSkpIHtcbiAgICAgICAgdmFyIGNzc0Zvcm1hdHRlZCA9IHN0eWxpcyhjc3MsIFwiLlwiICsgX25hbWUsIHVuZGVmaW5lZCwgY29tcG9uZW50SWQpO1xuICAgICAgICBzdHlsZVNoZWV0Lmluc2VydFJ1bGVzKGNvbXBvbmVudElkLCBfbmFtZSwgY3NzRm9ybWF0dGVkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9uYW1lO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gQ29tcG9uZW50U3R5bGU7XG59KCk7XG5cbi8vIFxudmFyIExJTUlUID0gMjAwO1xudmFyIGNyZWF0ZVdhcm5Ub29NYW55Q2xhc3NlcyA9IChmdW5jdGlvbiAoZGlzcGxheU5hbWUsIGNvbXBvbmVudElkKSB7XG4gIHZhciBnZW5lcmF0ZWRDbGFzc2VzID0ge307XG4gIHZhciB3YXJuaW5nU2VlbiA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgIGlmICghd2FybmluZ1NlZW4pIHtcbiAgICAgIGdlbmVyYXRlZENsYXNzZXNbY2xhc3NOYW1lXSA9IHRydWU7XG5cbiAgICAgIGlmIChPYmplY3Qua2V5cyhnZW5lcmF0ZWRDbGFzc2VzKS5sZW5ndGggPj0gTElNSVQpIHtcbiAgICAgICAgLy8gVW5hYmxlIHRvIGZpbmQgbGF0ZXN0UnVsZSBpbiB0ZXN0IGVudmlyb25tZW50LlxuXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUsIHByZWZlci10ZW1wbGF0ZSAqL1xuICAgICAgICB2YXIgcGFyc2VkSWRTdHJpbmcgPSBjb21wb25lbnRJZCA/IFwiIHdpdGggdGhlIGlkIG9mIFxcXCJcIiArIGNvbXBvbmVudElkICsgXCJcXFwiXCIgOiAnJztcbiAgICAgICAgY29uc29sZS53YXJuKFwiT3ZlciBcIiArIExJTUlUICsgXCIgY2xhc3NlcyB3ZXJlIGdlbmVyYXRlZCBmb3IgY29tcG9uZW50IFwiICsgZGlzcGxheU5hbWUgKyBwYXJzZWRJZFN0cmluZyArIFwiLlxcblwiICsgJ0NvbnNpZGVyIHVzaW5nIHRoZSBhdHRycyBtZXRob2QsIHRvZ2V0aGVyIHdpdGggYSBzdHlsZSBvYmplY3QgZm9yIGZyZXF1ZW50bHkgY2hhbmdlZCBzdHlsZXMuXFxuJyArICdFeGFtcGxlOlxcbicgKyAnICBjb25zdCBDb21wb25lbnQgPSBzdHlsZWQuZGl2LmF0dHJzKHByb3BzID0+ICh7XFxuJyArICcgICAgc3R5bGU6IHtcXG4nICsgJyAgICAgIGJhY2tncm91bmQ6IHByb3BzLmJhY2tncm91bmQsXFxuJyArICcgICAgfSxcXG4nICsgJyAgfSkpYHdpZHRoOiAxMDAlO2BcXG5cXG4nICsgJyAgPENvbXBvbmVudCAvPicpO1xuICAgICAgICB3YXJuaW5nU2VlbiA9IHRydWU7XG4gICAgICAgIGdlbmVyYXRlZENsYXNzZXMgPSB7fTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59KTtcblxuLy8gXG52YXIgaW52YWxpZEhvb2tDYWxsUmUgPSAvaW52YWxpZCBob29rIGNhbGwvaTtcbnZhciBzZWVuID0gbmV3IFNldCgpO1xudmFyIGNoZWNrRHluYW1pY0NyZWF0aW9uID0gZnVuY3Rpb24gY2hlY2tEeW5hbWljQ3JlYXRpb24oZGlzcGxheU5hbWUsIGNvbXBvbmVudElkKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFyIHBhcnNlZElkU3RyaW5nID0gY29tcG9uZW50SWQgPyBcIiB3aXRoIHRoZSBpZCBvZiBcXFwiXCIgKyBjb21wb25lbnRJZCArIFwiXFxcIlwiIDogJyc7XG4gICAgdmFyIG1lc3NhZ2UgPSBcIlRoZSBjb21wb25lbnQgXCIgKyBkaXNwbGF5TmFtZSArIHBhcnNlZElkU3RyaW5nICsgXCIgaGFzIGJlZW4gY3JlYXRlZCBkeW5hbWljYWxseS5cXG5cIiArICdZb3UgbWF5IHNlZSB0aGlzIHdhcm5pbmcgYmVjYXVzZSB5b3VcXCd2ZSBjYWxsZWQgc3R5bGVkIGluc2lkZSBhbm90aGVyIGNvbXBvbmVudC5cXG4nICsgJ1RvIHJlc29sdmUgdGhpcyBvbmx5IGNyZWF0ZSBuZXcgU3R5bGVkQ29tcG9uZW50cyBvdXRzaWRlIG9mIGFueSByZW5kZXIgbWV0aG9kIGFuZCBmdW5jdGlvbiBjb21wb25lbnQuJztcblxuICAgIHRyeSB7XG4gICAgICAvLyBXZSBwdXJwb3NlZnVsbHkgY2FsbCBgdXNlUmVmYCBvdXRzaWRlIG9mIGEgY29tcG9uZW50IGFuZCBleHBlY3QgaXQgdG8gdGhyb3dcbiAgICAgIC8vIElmIGl0IGRvZXNuJ3QsIHRoZW4gd2UncmUgaW5zaWRlIGFub3RoZXIgY29tcG9uZW50LlxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgICB1c2VSZWYoKTtcblxuICAgICAgaWYgKCFzZWVuLmhhcyhtZXNzYWdlKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgICAgIHNlZW4uYWRkKG1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBUaGUgZXJyb3IgaGVyZSBpcyBleHBlY3RlZCwgc2luY2Ugd2UncmUgZXhwZWN0aW5nIGFueXRoaW5nIHRoYXQgdXNlcyBgY2hlY2tEeW5hbWljQ3JlYXRpb25gIHRvXG4gICAgICAvLyBiZSBjYWxsZWQgb3V0c2lkZSBvZiBhIFJlYWN0IGNvbXBvbmVudC5cbiAgICAgIGlmIChpbnZhbGlkSG9va0NhbGxSZS50ZXN0KGVycm9yLm1lc3NhZ2UpKSB7XG4gICAgICAgIC8vIFRoaXMgc2hvdWxkbid0IGhhcHBlbiwgYnV0IHJlc2V0cyBgd2FybmluZ1NlZW5gIGlmIHdlIGhhZCB0aGlzIGVycm9yIGhhcHBlbiBpbnRlcm1pdHRlbnRseVxuICAgICAgICBzZWVuW1wiZGVsZXRlXCJdKG1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLy8gXG52YXIgZGV0ZXJtaW5lVGhlbWUgPSAoZnVuY3Rpb24gKHByb3BzLCBwcm92aWRlZFRoZW1lLCBkZWZhdWx0UHJvcHMpIHtcbiAgaWYgKGRlZmF1bHRQcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgZGVmYXVsdFByb3BzID0gRU1QVFlfT0JKRUNUO1xuICB9XG5cbiAgcmV0dXJuIHByb3BzLnRoZW1lICE9PSBkZWZhdWx0UHJvcHMudGhlbWUgJiYgcHJvcHMudGhlbWUgfHwgcHJvdmlkZWRUaGVtZSB8fCBkZWZhdWx0UHJvcHMudGhlbWU7XG59KTtcblxuLy8gXG4vLyBTb3VyY2U6IGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3NvbS0xLyNzZXJpYWxpemUtYW4taWRlbnRpZmllclxuLy8gQ29udHJvbCBjaGFyYWN0ZXJzIGFuZCBub24tbGV0dGVyIGZpcnN0IHN5bWJvbHMgYXJlIG5vdCBzdXBwb3J0ZWRcbnZhciBlc2NhcGVSZWdleCA9IC9bIVwiIyQlJicoKSorLC4vOjs8PT4/QFtcXFxcXFxdXmB7fH1+LV0rL2c7XG52YXIgZGFzaGVzQXRFbmRzID0gLyheLXwtJCkvZztcbi8qKlxuICogVE9ETzogRXhwbG9yZSB1c2luZyBDU1MuZXNjYXBlIHdoZW4gaXQgYmVjb21lcyBtb3JlIGF2YWlsYWJsZVxuICogaW4gZXZlcmdyZWVuIGJyb3dzZXJzLlxuICovXG5cbmZ1bmN0aW9uIGVzY2FwZShzdHIpIHtcbiAgcmV0dXJuIHN0ciAvLyBSZXBsYWNlIGFsbCBwb3NzaWJsZSBDU1Mgc2VsZWN0b3JzXG4gIC5yZXBsYWNlKGVzY2FwZVJlZ2V4LCAnLScpIC8vIFJlbW92ZSBleHRyYW5lb3VzIGh5cGhlbnMgYXQgdGhlIHN0YXJ0IGFuZCBlbmRcbiAgLnJlcGxhY2UoZGFzaGVzQXRFbmRzLCAnJyk7XG59XG5cbi8vIFxuZnVuY3Rpb24gaXNUYWcodGFyZ2V0KSB7XG4gIHJldHVybiB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyAmJiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHRhcmdldC5jaGFyQXQoMCkgPT09IHRhcmdldC5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSA6IHRydWUpO1xufVxuXG4vLyBcbmZ1bmN0aW9uIGdlbmVyYXRlRGlzcGxheU5hbWUodGFyZ2V0KSB7XG4gIC8vICRGbG93Rml4TWVcbiAgcmV0dXJuIGlzVGFnKHRhcmdldCkgPyBcInN0eWxlZC5cIiArIHRhcmdldCA6IFwiU3R5bGVkKFwiICsgZ2V0Q29tcG9uZW50TmFtZSh0YXJnZXQpICsgXCIpXCI7XG59XG5cbi8vIFxudmFyIGdlbmVyYXRlQ29tcG9uZW50SWQgPSAoZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gZ2VuZXJhdGVBbHBoYWJldGljTmFtZShoYXNoKHN0cikgPj4+IDApO1xufSk7XG5cbi8qKlxuICogQ29udmVuaWVuY2UgZnVuY3Rpb24gZm9yIGpvaW5pbmcgc3RyaW5ncyB0byBmb3JtIGNsYXNzTmFtZSBjaGFpbnNcbiAqL1xuZnVuY3Rpb24gam9pblN0cmluZ3MoYSwgYikge1xuICByZXR1cm4gYSAmJiBiID8gYSArIFwiIFwiICsgYiA6IGEgfHwgYjtcbn1cblxudmFyIFRoZW1lQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcbnZhciBUaGVtZUNvbnN1bWVyID0gVGhlbWVDb250ZXh0LkNvbnN1bWVyO1xuXG5mdW5jdGlvbiBtZXJnZVRoZW1lKHRoZW1lLCBvdXRlclRoZW1lKSB7XG4gIGlmICghdGhlbWUpIHtcbiAgICByZXR1cm4gdGhyb3dTdHlsZWRDb21wb25lbnRzRXJyb3IoMTQpO1xuICB9XG5cbiAgaWYgKGlzRnVuY3Rpb24odGhlbWUpKSB7XG4gICAgdmFyIG1lcmdlZFRoZW1lID0gdGhlbWUob3V0ZXJUaGVtZSk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAobWVyZ2VkVGhlbWUgPT09IG51bGwgfHwgQXJyYXkuaXNBcnJheShtZXJnZWRUaGVtZSkgfHwgdHlwZW9mIG1lcmdlZFRoZW1lICE9PSAnb2JqZWN0JykpIHtcbiAgICAgIHJldHVybiB0aHJvd1N0eWxlZENvbXBvbmVudHNFcnJvcig3KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVyZ2VkVGhlbWU7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheSh0aGVtZSkgfHwgdHlwZW9mIHRoZW1lICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiB0aHJvd1N0eWxlZENvbXBvbmVudHNFcnJvcig4KTtcbiAgfVxuXG4gIHJldHVybiBvdXRlclRoZW1lID8gX2V4dGVuZHMoe30sIG91dGVyVGhlbWUsIHt9LCB0aGVtZSkgOiB0aGVtZTtcbn1cbi8qKlxuICogUHJvdmlkZSBhIHRoZW1lIHRvIGFuIGVudGlyZSByZWFjdCBjb21wb25lbnQgdHJlZSB2aWEgY29udGV4dFxuICovXG5cblxuZnVuY3Rpb24gVGhlbWVQcm92aWRlcihwcm9wcykge1xuICB2YXIgb3V0ZXJUaGVtZSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcbiAgdmFyIHRoZW1lQ29udGV4dCA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBtZXJnZVRoZW1lKHByb3BzLnRoZW1lLCBvdXRlclRoZW1lKTtcbiAgfSwgW3Byb3BzLnRoZW1lLCBvdXRlclRoZW1lXSk7XG5cbiAgaWYgKCFwcm9wcy5jaGlsZHJlbikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRoZW1lQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiB0aGVtZUNvbnRleHRcbiAgfSwgcHJvcHMuY2hpbGRyZW4pO1xufVxuXG4vKiBnbG9iYWwgJENhbGwgKi9cblxudmFyIGlkZW50aWZpZXJzID0ge307XG4vKiBXZSBkZXBlbmQgb24gY29tcG9uZW50cyBoYXZpbmcgdW5pcXVlIElEcyAqL1xuXG5mdW5jdGlvbiBnZW5lcmF0ZUlkKGRpc3BsYXlOYW1lLCBwYXJlbnRDb21wb25lbnRJZCkge1xuICB2YXIgbmFtZSA9IHR5cGVvZiBkaXNwbGF5TmFtZSAhPT0gJ3N0cmluZycgPyAnc2MnIDogZXNjYXBlKGRpc3BsYXlOYW1lKTsgLy8gRW5zdXJlIHRoYXQgbm8gZGlzcGxheU5hbWUgY2FuIGxlYWQgdG8gZHVwbGljYXRlIGNvbXBvbmVudElkc1xuXG4gIGlkZW50aWZpZXJzW25hbWVdID0gKGlkZW50aWZpZXJzW25hbWVdIHx8IDApICsgMTtcbiAgdmFyIGNvbXBvbmVudElkID0gbmFtZSArIFwiLVwiICsgZ2VuZXJhdGVDb21wb25lbnRJZChuYW1lICsgaWRlbnRpZmllcnNbbmFtZV0pO1xuICByZXR1cm4gcGFyZW50Q29tcG9uZW50SWQgPyBwYXJlbnRDb21wb25lbnRJZCArIFwiLVwiICsgY29tcG9uZW50SWQgOiBjb21wb25lbnRJZDtcbn1cblxuZnVuY3Rpb24gdXNlUmVzb2x2ZWRBdHRycyh0aGVtZSwgcHJvcHMsIGF0dHJzKSB7XG4gIGlmICh0aGVtZSA9PT0gdm9pZCAwKSB7XG4gICAgdGhlbWUgPSBFTVBUWV9PQkpFQ1Q7XG4gIH1cblxuICAvLyBOT1RFOiBjYW4ndCBtZW1vaXplIHRoaXNcbiAgLy8gcmV0dXJucyBbY29udGV4dCwgcmVzb2x2ZWRBdHRyc11cbiAgLy8gd2hlcmUgcmVzb2x2ZWRBdHRycyBpcyBvbmx5IHRoZSB0aGluZ3MgaW5qZWN0ZWQgYnkgdGhlIGF0dHJzIHRoZW1zZWx2ZXNcbiAgdmFyIGNvbnRleHQgPSBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICB0aGVtZTogdGhlbWVcbiAgfSk7XG5cbiAgdmFyIHJlc29sdmVkQXR0cnMgPSB7fTtcbiAgYXR0cnMuZm9yRWFjaChmdW5jdGlvbiAoYXR0ckRlZikge1xuICAgIHZhciByZXNvbHZlZEF0dHJEZWYgPSBhdHRyRGVmO1xuICAgIHZhciBrZXk7XG5cbiAgICBpZiAoaXNGdW5jdGlvbihyZXNvbHZlZEF0dHJEZWYpKSB7XG4gICAgICByZXNvbHZlZEF0dHJEZWYgPSByZXNvbHZlZEF0dHJEZWYoY29udGV4dCk7XG4gICAgfVxuICAgIC8qIGVzbGludC1kaXNhYmxlIGd1YXJkLWZvci1pbiAqL1xuXG5cbiAgICBmb3IgKGtleSBpbiByZXNvbHZlZEF0dHJEZWYpIHtcbiAgICAgIGNvbnRleHRba2V5XSA9IHJlc29sdmVkQXR0cnNba2V5XSA9IGtleSA9PT0gJ2NsYXNzTmFtZScgPyBqb2luU3RyaW5ncyhyZXNvbHZlZEF0dHJzW2tleV0sIHJlc29sdmVkQXR0ckRlZltrZXldKSA6IHJlc29sdmVkQXR0ckRlZltrZXldO1xuICAgIH1cbiAgICAvKiBlc2xpbnQtZW5hYmxlIGd1YXJkLWZvci1pbiAqL1xuXG4gIH0pO1xuICByZXR1cm4gW2NvbnRleHQsIHJlc29sdmVkQXR0cnNdO1xufVxuXG5mdW5jdGlvbiB1c2VJbmplY3RlZFN0eWxlKGNvbXBvbmVudFN0eWxlLCBoYXNBdHRycywgcmVzb2x2ZWRBdHRycywgd2FyblRvb01hbnlDbGFzc2VzKSB7XG4gIHZhciBzdHlsZVNoZWV0ID0gdXNlU3R5bGVTaGVldCgpO1xuICB2YXIgc3R5bGlzID0gdXNlU3R5bGlzKCk7IC8vIHN0YXRpY2FsbHkgc3R5bGVkLWNvbXBvbmVudHMgZG9uJ3QgbmVlZCB0byBidWlsZCBhbiBleGVjdXRpb24gY29udGV4dCBvYmplY3QsXG4gIC8vIGFuZCBzaG91bGRuJ3QgYmUgaW5jcmVhc2luZyB0aGUgbnVtYmVyIG9mIGNsYXNzIG5hbWVzXG5cbiAgdmFyIGlzU3RhdGljID0gY29tcG9uZW50U3R5bGUuaXNTdGF0aWMgJiYgIWhhc0F0dHJzO1xuICB2YXIgY2xhc3NOYW1lID0gaXNTdGF0aWMgPyBjb21wb25lbnRTdHlsZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyhFTVBUWV9PQkpFQ1QsIHN0eWxlU2hlZXQsIHN0eWxpcykgOiBjb21wb25lbnRTdHlsZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyhyZXNvbHZlZEF0dHJzLCBzdHlsZVNoZWV0LCBzdHlsaXMpO1xuICB1c2VEZWJ1Z1ZhbHVlKGNsYXNzTmFtZSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWlzU3RhdGljICYmIHdhcm5Ub29NYW55Q2xhc3Nlcykge1xuICAgIHdhcm5Ub29NYW55Q2xhc3NlcyhjbGFzc05hbWUpO1xuICB9XG5cbiAgcmV0dXJuIGNsYXNzTmFtZTtcbn1cblxuZnVuY3Rpb24gdXNlU3R5bGVkQ29tcG9uZW50SW1wbChmb3J3YXJkZWRDb21wb25lbnQsIHByb3BzLCBmb3J3YXJkZWRSZWYpIHtcbiAgdmFyIGNvbXBvbmVudEF0dHJzID0gZm9yd2FyZGVkQ29tcG9uZW50LmF0dHJzLFxuICAgICAgY29tcG9uZW50U3R5bGUgPSBmb3J3YXJkZWRDb21wb25lbnQuY29tcG9uZW50U3R5bGUsXG4gICAgICBkZWZhdWx0UHJvcHMgPSBmb3J3YXJkZWRDb21wb25lbnQuZGVmYXVsdFByb3BzLFxuICAgICAgZm9sZGVkQ29tcG9uZW50SWRzID0gZm9yd2FyZGVkQ29tcG9uZW50LmZvbGRlZENvbXBvbmVudElkcyxcbiAgICAgIHNob3VsZEZvcndhcmRQcm9wID0gZm9yd2FyZGVkQ29tcG9uZW50LnNob3VsZEZvcndhcmRQcm9wLFxuICAgICAgc3R5bGVkQ29tcG9uZW50SWQgPSBmb3J3YXJkZWRDb21wb25lbnQuc3R5bGVkQ29tcG9uZW50SWQsXG4gICAgICB0YXJnZXQgPSBmb3J3YXJkZWRDb21wb25lbnQudGFyZ2V0O1xuICB1c2VEZWJ1Z1ZhbHVlKHN0eWxlZENvbXBvbmVudElkKTsgLy8gTk9URTogdGhlIG5vbi1ob29rcyB2ZXJzaW9uIG9ubHkgc3Vic2NyaWJlcyB0byB0aGlzIHdoZW4gIWNvbXBvbmVudFN0eWxlLmlzU3RhdGljLFxuICAvLyBidXQgdGhhdCdkIGJlIGFnYWluc3QgdGhlIHJ1bGVzLW9mLWhvb2tzLiBXZSBjb3VsZCBiZSBuYXVnaHR5IGFuZCBkbyBpdCBhbnl3YXkgYXMgaXRcbiAgLy8gc2hvdWxkIGJlIGFuIGltbXV0YWJsZSB2YWx1ZSwgYnV0IGJlaGF2ZSBmb3Igbm93LlxuXG4gIHZhciB0aGVtZSA9IGRldGVybWluZVRoZW1lKHByb3BzLCB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCksIGRlZmF1bHRQcm9wcyk7XG5cbiAgdmFyIF91c2VSZXNvbHZlZEF0dHJzID0gdXNlUmVzb2x2ZWRBdHRycyh0aGVtZSB8fCBFTVBUWV9PQkpFQ1QsIHByb3BzLCBjb21wb25lbnRBdHRycyksXG4gICAgICBjb250ZXh0ID0gX3VzZVJlc29sdmVkQXR0cnNbMF0sXG4gICAgICBhdHRycyA9IF91c2VSZXNvbHZlZEF0dHJzWzFdO1xuXG4gIHZhciBnZW5lcmF0ZWRDbGFzc05hbWUgPSB1c2VJbmplY3RlZFN0eWxlKGNvbXBvbmVudFN0eWxlLCBjb21wb25lbnRBdHRycy5sZW5ndGggPiAwLCBjb250ZXh0LCBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gZm9yd2FyZGVkQ29tcG9uZW50Lndhcm5Ub29NYW55Q2xhc3NlcyA6IHVuZGVmaW5lZCk7XG4gIHZhciByZWZUb0ZvcndhcmQgPSBmb3J3YXJkZWRSZWY7XG4gIHZhciBlbGVtZW50VG9CZUNyZWF0ZWQgPSBhdHRycy4kYXMgfHwgcHJvcHMuJGFzIHx8IGF0dHJzLmFzIHx8IHByb3BzLmFzIHx8IHRhcmdldDtcbiAgdmFyIGlzVGFyZ2V0VGFnID0gaXNUYWcoZWxlbWVudFRvQmVDcmVhdGVkKTtcbiAgdmFyIGNvbXB1dGVkUHJvcHMgPSBhdHRycyAhPT0gcHJvcHMgPyBfZXh0ZW5kcyh7fSwgcHJvcHMsIHt9LCBhdHRycykgOiBwcm9wcztcbiAgdmFyIHByb3BGaWx0ZXJGbiA9IHNob3VsZEZvcndhcmRQcm9wIHx8IGlzVGFyZ2V0VGFnICYmIHZhbGlkQXR0cjtcbiAgdmFyIHByb3BzRm9yRWxlbWVudCA9IHt9OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ3VhcmQtZm9yLWluXG5cbiAgZm9yICh2YXIga2V5IGluIGNvbXB1dGVkUHJvcHMpIHtcbiAgICBpZiAoa2V5WzBdID09PSAnJCcgfHwga2V5ID09PSAnYXMnKSBjb250aW51ZTtlbHNlIGlmIChrZXkgPT09ICdmb3J3YXJkZWRBcycpIHtcbiAgICAgIHByb3BzRm9yRWxlbWVudC5hcyA9IGNvbXB1dGVkUHJvcHNba2V5XTtcbiAgICB9IGVsc2UgaWYgKCFwcm9wRmlsdGVyRm4gfHwgcHJvcEZpbHRlckZuKGtleSwgdmFsaWRBdHRyKSkge1xuICAgICAgLy8gRG9uJ3QgcGFzcyB0aHJvdWdoIG5vbiBIVE1MIHRhZ3MgdGhyb3VnaCB0byBIVE1MIGVsZW1lbnRzXG4gICAgICBwcm9wc0ZvckVsZW1lbnRba2V5XSA9IGNvbXB1dGVkUHJvcHNba2V5XTtcbiAgICB9XG4gIH1cblxuICBpZiAocHJvcHMuc3R5bGUgJiYgYXR0cnMuc3R5bGUgIT09IHByb3BzLnN0eWxlKSB7XG4gICAgcHJvcHNGb3JFbGVtZW50LnN0eWxlID0gX2V4dGVuZHMoe30sIHByb3BzLnN0eWxlLCB7fSwgYXR0cnMuc3R5bGUpO1xuICB9XG5cbiAgcHJvcHNGb3JFbGVtZW50LmNsYXNzTmFtZSA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQoZm9sZGVkQ29tcG9uZW50SWRzLCBzdHlsZWRDb21wb25lbnRJZCwgZ2VuZXJhdGVkQ2xhc3NOYW1lICE9PSBzdHlsZWRDb21wb25lbnRJZCA/IGdlbmVyYXRlZENsYXNzTmFtZSA6IG51bGwsIHByb3BzLmNsYXNzTmFtZSwgYXR0cnMuY2xhc3NOYW1lKS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuICBwcm9wc0ZvckVsZW1lbnQucmVmID0gcmVmVG9Gb3J3YXJkO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChlbGVtZW50VG9CZUNyZWF0ZWQsIHByb3BzRm9yRWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlZENvbXBvbmVudCh0YXJnZXQsIG9wdGlvbnMsIHJ1bGVzKSB7XG4gIHZhciBpc1RhcmdldFN0eWxlZENvbXAgPSBpc1N0eWxlZENvbXBvbmVudCh0YXJnZXQpO1xuICB2YXIgaXNDb21wb3NpdGVDb21wb25lbnQgPSAhaXNUYWcodGFyZ2V0KTtcbiAgdmFyIF9vcHRpb25zJGRpc3BsYXlOYW1lID0gb3B0aW9ucy5kaXNwbGF5TmFtZSxcbiAgICAgIGRpc3BsYXlOYW1lID0gX29wdGlvbnMkZGlzcGxheU5hbWUgPT09IHZvaWQgMCA/IGdlbmVyYXRlRGlzcGxheU5hbWUodGFyZ2V0KSA6IF9vcHRpb25zJGRpc3BsYXlOYW1lLFxuICAgICAgX29wdGlvbnMkY29tcG9uZW50SWQgPSBvcHRpb25zLmNvbXBvbmVudElkLFxuICAgICAgY29tcG9uZW50SWQgPSBfb3B0aW9ucyRjb21wb25lbnRJZCA9PT0gdm9pZCAwID8gZ2VuZXJhdGVJZChvcHRpb25zLmRpc3BsYXlOYW1lLCBvcHRpb25zLnBhcmVudENvbXBvbmVudElkKSA6IF9vcHRpb25zJGNvbXBvbmVudElkLFxuICAgICAgX29wdGlvbnMkYXR0cnMgPSBvcHRpb25zLmF0dHJzLFxuICAgICAgYXR0cnMgPSBfb3B0aW9ucyRhdHRycyA9PT0gdm9pZCAwID8gRU1QVFlfQVJSQVkgOiBfb3B0aW9ucyRhdHRycztcbiAgdmFyIHN0eWxlZENvbXBvbmVudElkID0gb3B0aW9ucy5kaXNwbGF5TmFtZSAmJiBvcHRpb25zLmNvbXBvbmVudElkID8gZXNjYXBlKG9wdGlvbnMuZGlzcGxheU5hbWUpICsgXCItXCIgKyBvcHRpb25zLmNvbXBvbmVudElkIDogb3B0aW9ucy5jb21wb25lbnRJZCB8fCBjb21wb25lbnRJZDsgLy8gZm9sZCB0aGUgdW5kZXJseWluZyBTdHlsZWRDb21wb25lbnQgYXR0cnMgdXAgKGltcGxpY2l0IGV4dGVuZClcblxuICB2YXIgZmluYWxBdHRycyA9IC8vICRGbG93Rml4TWVcbiAgaXNUYXJnZXRTdHlsZWRDb21wICYmIHRhcmdldC5hdHRycyA/IEFycmF5LnByb3RvdHlwZS5jb25jYXQodGFyZ2V0LmF0dHJzLCBhdHRycykuZmlsdGVyKEJvb2xlYW4pIDogYXR0cnM7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBzaG91bGRGb3J3YXJkUHJvcCA9IG9wdGlvbnMuc2hvdWxkRm9yd2FyZFByb3A7IC8vICRGbG93Rml4TWVcblxuICBpZiAoaXNUYXJnZXRTdHlsZWRDb21wICYmIHRhcmdldC5zaG91bGRGb3J3YXJkUHJvcCkge1xuICAgIGlmIChzaG91bGRGb3J3YXJkUHJvcCkge1xuICAgICAgLy8gY29tcG9zZSBuZXN0ZWQgc2hvdWxkRm9yd2FyZFByb3AgY2FsbHNcbiAgICAgIHNob3VsZEZvcndhcmRQcm9wID0gZnVuY3Rpb24gc2hvdWxkRm9yd2FyZFByb3AocHJvcCwgZmlsdGVyRm4pIHtcbiAgICAgICAgcmV0dXJuICgvLyAkRmxvd0ZpeE1lXG4gICAgICAgICAgdGFyZ2V0LnNob3VsZEZvcndhcmRQcm9wKHByb3AsIGZpbHRlckZuKSAmJiBvcHRpb25zLnNob3VsZEZvcndhcmRQcm9wKHByb3AsIGZpbHRlckZuKVxuICAgICAgICApO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICBzaG91bGRGb3J3YXJkUHJvcCA9IHRhcmdldC5zaG91bGRGb3J3YXJkUHJvcDtcbiAgICB9XG4gIH1cblxuICB2YXIgY29tcG9uZW50U3R5bGUgPSBuZXcgQ29tcG9uZW50U3R5bGUoaXNUYXJnZXRTdHlsZWRDb21wID8gLy8gZm9sZCB0aGUgdW5kZXJseWluZyBTdHlsZWRDb21wb25lbnQgcnVsZXMgdXAgKGltcGxpY2l0IGV4dGVuZClcbiAgLy8gJEZsb3dGaXhNZVxuICB0YXJnZXQuY29tcG9uZW50U3R5bGUucnVsZXMuY29uY2F0KHJ1bGVzKSA6IHJ1bGVzLCBzdHlsZWRDb21wb25lbnRJZCk7XG4gIC8qKlxuICAgKiBmb3J3YXJkUmVmIGNyZWF0ZXMgYSBuZXcgaW50ZXJpbSBjb21wb25lbnQsIHdoaWNoIHdlJ2xsIHRha2UgYWR2YW50YWdlIG9mXG4gICAqIGluc3RlYWQgb2YgZXh0ZW5kaW5nIFBhcmVudENvbXBvbmVudCB0byBjcmVhdGUgX2Fub3RoZXJfIGludGVyaW0gY2xhc3NcbiAgICovXG5cbiAgdmFyIFdyYXBwZWRTdHlsZWRDb21wb25lbnQ7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuXG4gIHZhciBmb3J3YXJkUmVmID0gZnVuY3Rpb24gZm9yd2FyZFJlZihwcm9wcywgcmVmKSB7XG4gICAgcmV0dXJuIHVzZVN0eWxlZENvbXBvbmVudEltcGwoV3JhcHBlZFN0eWxlZENvbXBvbmVudCwgcHJvcHMsIHJlZik7XG4gIH07XG5cbiAgZm9yd2FyZFJlZi5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lOyAvLyAkRmxvd0ZpeE1lIHRoaXMgaXMgYSBmb3JjZWQgY2FzdCB0byBtZXJnZSBpdCBTdHlsZWRDb21wb25lbnRXcmFwcGVyUHJvcGVydGllc1xuXG4gIFdyYXBwZWRTdHlsZWRDb21wb25lbnQgPSBSZWFjdC5mb3J3YXJkUmVmKGZvcndhcmRSZWYpO1xuICBXcmFwcGVkU3R5bGVkQ29tcG9uZW50LmF0dHJzID0gZmluYWxBdHRycztcbiAgV3JhcHBlZFN0eWxlZENvbXBvbmVudC5jb21wb25lbnRTdHlsZSA9IGNvbXBvbmVudFN0eWxlO1xuICBXcmFwcGVkU3R5bGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gIFdyYXBwZWRTdHlsZWRDb21wb25lbnQuc2hvdWxkRm9yd2FyZFByb3AgPSBzaG91bGRGb3J3YXJkUHJvcDsgLy8gdGhpcyBzdGF0aWMgaXMgdXNlZCB0byBwcmVzZXJ2ZSB0aGUgY2FzY2FkZSBvZiBzdGF0aWMgY2xhc3NlcyBmb3IgY29tcG9uZW50IHNlbGVjdG9yXG4gIC8vIHB1cnBvc2VzOyB0aGlzIGlzIGVzcGVjaWFsbHkgaW1wb3J0YW50IHdpdGggdXNhZ2Ugb2YgdGhlIGNzcyBwcm9wXG5cbiAgV3JhcHBlZFN0eWxlZENvbXBvbmVudC5mb2xkZWRDb21wb25lbnRJZHMgPSBpc1RhcmdldFN0eWxlZENvbXAgPyAvLyAkRmxvd0ZpeE1lXG4gIEFycmF5LnByb3RvdHlwZS5jb25jYXQodGFyZ2V0LmZvbGRlZENvbXBvbmVudElkcywgdGFyZ2V0LnN0eWxlZENvbXBvbmVudElkKSA6IEVNUFRZX0FSUkFZO1xuICBXcmFwcGVkU3R5bGVkQ29tcG9uZW50LnN0eWxlZENvbXBvbmVudElkID0gc3R5bGVkQ29tcG9uZW50SWQ7IC8vIGZvbGQgdGhlIHVuZGVybHlpbmcgU3R5bGVkQ29tcG9uZW50IHRhcmdldCB1cCBzaW5jZSB3ZSBmb2xkZWQgdGhlIHN0eWxlc1xuXG4gIFdyYXBwZWRTdHlsZWRDb21wb25lbnQudGFyZ2V0ID0gaXNUYXJnZXRTdHlsZWRDb21wID8gLy8gJEZsb3dGaXhNZVxuICB0YXJnZXQudGFyZ2V0IDogdGFyZ2V0OyAvLyAkRmxvd0ZpeE1lXG5cbiAgV3JhcHBlZFN0eWxlZENvbXBvbmVudC53aXRoQ29tcG9uZW50ID0gZnVuY3Rpb24gd2l0aENvbXBvbmVudCh0YWcpIHtcbiAgICB2YXIgcHJldmlvdXNDb21wb25lbnRJZCA9IG9wdGlvbnMuY29tcG9uZW50SWQsXG4gICAgICAgIG9wdGlvbnNUb0NvcHkgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShvcHRpb25zLCBbXCJjb21wb25lbnRJZFwiXSk7XG5cbiAgICB2YXIgbmV3Q29tcG9uZW50SWQgPSBwcmV2aW91c0NvbXBvbmVudElkICYmIHByZXZpb3VzQ29tcG9uZW50SWQgKyBcIi1cIiArIChpc1RhZyh0YWcpID8gdGFnIDogZXNjYXBlKGdldENvbXBvbmVudE5hbWUodGFnKSkpO1xuXG4gICAgdmFyIG5ld09wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgb3B0aW9uc1RvQ29weSwge1xuICAgICAgYXR0cnM6IGZpbmFsQXR0cnMsXG4gICAgICBjb21wb25lbnRJZDogbmV3Q29tcG9uZW50SWRcbiAgICB9KTtcblxuICAgIHJldHVybiBjcmVhdGVTdHlsZWRDb21wb25lbnQodGFnLCBuZXdPcHRpb25zLCBydWxlcyk7XG4gIH07IC8vICRGbG93Rml4TWVcblxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXcmFwcGVkU3R5bGVkQ29tcG9uZW50LCAnZGVmYXVsdFByb3BzJywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2ZvbGRlZERlZmF1bHRQcm9wcztcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KG9iaikge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgdGhpcy5fZm9sZGVkRGVmYXVsdFByb3BzID0gaXNUYXJnZXRTdHlsZWRDb21wID8gbWl4aW5EZWVwKHt9LCB0YXJnZXQuZGVmYXVsdFByb3BzLCBvYmopIDogb2JqO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaGVja0R5bmFtaWNDcmVhdGlvbihkaXNwbGF5TmFtZSwgc3R5bGVkQ29tcG9uZW50SWQpO1xuICAgIFdyYXBwZWRTdHlsZWRDb21wb25lbnQud2FyblRvb01hbnlDbGFzc2VzID0gY3JlYXRlV2FyblRvb01hbnlDbGFzc2VzKGRpc3BsYXlOYW1lLCBzdHlsZWRDb21wb25lbnRJZCk7XG4gIH0gLy8gJEZsb3dGaXhNZVxuXG5cbiAgV3JhcHBlZFN0eWxlZENvbXBvbmVudC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXCIuXCIgKyBXcmFwcGVkU3R5bGVkQ29tcG9uZW50LnN0eWxlZENvbXBvbmVudElkO1xuICB9O1xuXG4gIGlmIChpc0NvbXBvc2l0ZUNvbXBvbmVudCkge1xuICAgIGhvaXN0KFdyYXBwZWRTdHlsZWRDb21wb25lbnQsIHRhcmdldCwge1xuICAgICAgLy8gYWxsIFNDLXNwZWNpZmljIHRoaW5ncyBzaG91bGQgbm90IGJlIGhvaXN0ZWRcbiAgICAgIGF0dHJzOiB0cnVlLFxuICAgICAgY29tcG9uZW50U3R5bGU6IHRydWUsXG4gICAgICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgICAgIGZvbGRlZENvbXBvbmVudElkczogdHJ1ZSxcbiAgICAgIHNob3VsZEZvcndhcmRQcm9wOiB0cnVlLFxuICAgICAgc2VsZjogdHJ1ZSxcbiAgICAgIHN0eWxlZENvbXBvbmVudElkOiB0cnVlLFxuICAgICAgdGFyZ2V0OiB0cnVlLFxuICAgICAgd2l0aENvbXBvbmVudDogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIFdyYXBwZWRTdHlsZWRDb21wb25lbnQ7XG59XG5cbi8vIFxuLy8gVGhhbmtzIHRvIFJlYWN0RE9NRmFjdG9yaWVzIGZvciB0aGlzIGhhbmR5IGxpc3QhXG52YXIgZG9tRWxlbWVudHMgPSBbJ2EnLCAnYWJicicsICdhZGRyZXNzJywgJ2FyZWEnLCAnYXJ0aWNsZScsICdhc2lkZScsICdhdWRpbycsICdiJywgJ2Jhc2UnLCAnYmRpJywgJ2JkbycsICdiaWcnLCAnYmxvY2txdW90ZScsICdib2R5JywgJ2JyJywgJ2J1dHRvbicsICdjYW52YXMnLCAnY2FwdGlvbicsICdjaXRlJywgJ2NvZGUnLCAnY29sJywgJ2NvbGdyb3VwJywgJ2RhdGEnLCAnZGF0YWxpc3QnLCAnZGQnLCAnZGVsJywgJ2RldGFpbHMnLCAnZGZuJywgJ2RpYWxvZycsICdkaXYnLCAnZGwnLCAnZHQnLCAnZW0nLCAnZW1iZWQnLCAnZmllbGRzZXQnLCAnZmlnY2FwdGlvbicsICdmaWd1cmUnLCAnZm9vdGVyJywgJ2Zvcm0nLCAnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAnaGVhZCcsICdoZWFkZXInLCAnaGdyb3VwJywgJ2hyJywgJ2h0bWwnLCAnaScsICdpZnJhbWUnLCAnaW1nJywgJ2lucHV0JywgJ2lucycsICdrYmQnLCAna2V5Z2VuJywgJ2xhYmVsJywgJ2xlZ2VuZCcsICdsaScsICdsaW5rJywgJ21haW4nLCAnbWFwJywgJ21hcmsnLCAnbWFycXVlZScsICdtZW51JywgJ21lbnVpdGVtJywgJ21ldGEnLCAnbWV0ZXInLCAnbmF2JywgJ25vc2NyaXB0JywgJ29iamVjdCcsICdvbCcsICdvcHRncm91cCcsICdvcHRpb24nLCAnb3V0cHV0JywgJ3AnLCAncGFyYW0nLCAncGljdHVyZScsICdwcmUnLCAncHJvZ3Jlc3MnLCAncScsICdycCcsICdydCcsICdydWJ5JywgJ3MnLCAnc2FtcCcsICdzY3JpcHQnLCAnc2VjdGlvbicsICdzZWxlY3QnLCAnc21hbGwnLCAnc291cmNlJywgJ3NwYW4nLCAnc3Ryb25nJywgJ3N0eWxlJywgJ3N1YicsICdzdW1tYXJ5JywgJ3N1cCcsICd0YWJsZScsICd0Ym9keScsICd0ZCcsICd0ZXh0YXJlYScsICd0Zm9vdCcsICd0aCcsICd0aGVhZCcsICd0aW1lJywgJ3RpdGxlJywgJ3RyJywgJ3RyYWNrJywgJ3UnLCAndWwnLCAndmFyJywgJ3ZpZGVvJywgJ3dicicsIC8vIFNWR1xuJ2NpcmNsZScsICdjbGlwUGF0aCcsICdkZWZzJywgJ2VsbGlwc2UnLCAnZm9yZWlnbk9iamVjdCcsICdnJywgJ2ltYWdlJywgJ2xpbmUnLCAnbGluZWFyR3JhZGllbnQnLCAnbWFya2VyJywgJ21hc2snLCAncGF0aCcsICdwYXR0ZXJuJywgJ3BvbHlnb24nLCAncG9seWxpbmUnLCAncmFkaWFsR3JhZGllbnQnLCAncmVjdCcsICdzdG9wJywgJ3N2ZycsICd0ZXh0JywgJ3RzcGFuJ107XG5cbi8vIFxuXG52YXIgc3R5bGVkID0gZnVuY3Rpb24gc3R5bGVkKHRhZykge1xuICByZXR1cm4gY29uc3RydWN0V2l0aE9wdGlvbnMoY3JlYXRlU3R5bGVkQ29tcG9uZW50LCB0YWcpO1xufTsgLy8gU2hvcnRoYW5kcyBmb3IgYWxsIHZhbGlkIEhUTUwgRWxlbWVudHNcblxuXG5kb21FbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChkb21FbGVtZW50KSB7XG4gIHN0eWxlZFtkb21FbGVtZW50XSA9IHN0eWxlZChkb21FbGVtZW50KTtcbn0pO1xuXG4vLyBcblxudmFyIEdsb2JhbFN0eWxlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gR2xvYmFsU3R5bGUocnVsZXMsIGNvbXBvbmVudElkKSB7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuY29tcG9uZW50SWQgPSBjb21wb25lbnRJZDtcbiAgICB0aGlzLmlzU3RhdGljID0gaXNTdGF0aWNSdWxlcyhydWxlcyk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gR2xvYmFsU3R5bGUucHJvdG90eXBlO1xuXG4gIF9wcm90by5jcmVhdGVTdHlsZXMgPSBmdW5jdGlvbiBjcmVhdGVTdHlsZXMoaW5zdGFuY2UsIGV4ZWN1dGlvbkNvbnRleHQsIHN0eWxlU2hlZXQsIHN0eWxpcykge1xuICAgIHZhciBmbGF0Q1NTID0gZmxhdHRlbih0aGlzLnJ1bGVzLCBleGVjdXRpb25Db250ZXh0LCBzdHlsZVNoZWV0KTtcbiAgICB2YXIgY3NzID0gc3R5bGlzKGZsYXRDU1Muam9pbignJyksICcnKTtcbiAgICB2YXIgaWQgPSB0aGlzLmNvbXBvbmVudElkICsgaW5zdGFuY2U7IC8vIE5PVEU6IFdlIHVzZSB0aGUgaWQgYXMgYSBuYW1lIGFzIHdlbGwsIHNpbmNlIHRoZXNlIHJ1bGVzIG5ldmVyIGNoYW5nZVxuXG4gICAgc3R5bGVTaGVldC5pbnNlcnRSdWxlcyhpZCwgaWQsIGNzcyk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZVN0eWxlcyA9IGZ1bmN0aW9uIHJlbW92ZVN0eWxlcyhpbnN0YW5jZSwgc3R5bGVTaGVldCkge1xuICAgIHN0eWxlU2hlZXQuY2xlYXJSdWxlcyh0aGlzLmNvbXBvbmVudElkICsgaW5zdGFuY2UpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXJTdHlsZXMgPSBmdW5jdGlvbiByZW5kZXJTdHlsZXMoaW5zdGFuY2UsIGV4ZWN1dGlvbkNvbnRleHQsIHN0eWxlU2hlZXQsIHN0eWxpcykge1xuICAgIFN0eWxlU2hlZXQucmVnaXN0ZXJJZCh0aGlzLmNvbXBvbmVudElkICsgaW5zdGFuY2UpOyAvLyBOT1RFOiBSZW1vdmUgb2xkIHN0eWxlcywgdGhlbiBpbmplY3QgdGhlIG5ldyBvbmVzXG5cbiAgICB0aGlzLnJlbW92ZVN0eWxlcyhpbnN0YW5jZSwgc3R5bGVTaGVldCk7XG4gICAgdGhpcy5jcmVhdGVTdHlsZXMoaW5zdGFuY2UsIGV4ZWN1dGlvbkNvbnRleHQsIHN0eWxlU2hlZXQsIHN0eWxpcyk7XG4gIH07XG5cbiAgcmV0dXJuIEdsb2JhbFN0eWxlO1xufSgpO1xuXG5mdW5jdGlvbiBjcmVhdGVHbG9iYWxTdHlsZShzdHJpbmdzKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBpbnRlcnBvbGF0aW9ucyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgaW50ZXJwb2xhdGlvbnNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIHJ1bGVzID0gY3NzLmFwcGx5KHZvaWQgMCwgW3N0cmluZ3NdLmNvbmNhdChpbnRlcnBvbGF0aW9ucykpO1xuICB2YXIgc3R5bGVkQ29tcG9uZW50SWQgPSBcInNjLWdsb2JhbC1cIiArIGdlbmVyYXRlQ29tcG9uZW50SWQoSlNPTi5zdHJpbmdpZnkocnVsZXMpKTtcbiAgdmFyIGdsb2JhbFN0eWxlID0gbmV3IEdsb2JhbFN0eWxlKHJ1bGVzLCBzdHlsZWRDb21wb25lbnRJZCk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaGVja0R5bmFtaWNDcmVhdGlvbihzdHlsZWRDb21wb25lbnRJZCk7XG4gIH1cblxuICBmdW5jdGlvbiBHbG9iYWxTdHlsZUNvbXBvbmVudChwcm9wcykge1xuICAgIHZhciBzdHlsZVNoZWV0ID0gdXNlU3R5bGVTaGVldCgpO1xuICAgIHZhciBzdHlsaXMgPSB1c2VTdHlsaXMoKTtcbiAgICB2YXIgdGhlbWUgPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG4gICAgdmFyIGluc3RhbmNlUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gICAgaWYgKGluc3RhbmNlUmVmLmN1cnJlbnQgPT09IG51bGwpIHtcbiAgICAgIGluc3RhbmNlUmVmLmN1cnJlbnQgPSBzdHlsZVNoZWV0LmFsbG9jYXRlR1NJbnN0YW5jZShzdHlsZWRDb21wb25lbnRJZCk7XG4gICAgfVxuXG4gICAgdmFyIGluc3RhbmNlID0gaW5zdGFuY2VSZWYuY3VycmVudDtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIFJlYWN0LkNoaWxkcmVuLmNvdW50KHByb3BzLmNoaWxkcmVuKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlRoZSBnbG9iYWwgc3R5bGUgY29tcG9uZW50IFwiICsgc3R5bGVkQ29tcG9uZW50SWQgKyBcIiB3YXMgZ2l2ZW4gY2hpbGQgSlNYLiBjcmVhdGVHbG9iYWxTdHlsZSBkb2VzIG5vdCByZW5kZXIgY2hpbGRyZW4uXCIpO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHJ1bGVzLnNvbWUoZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgcnVsZSA9PT0gJ3N0cmluZycgJiYgcnVsZS5pbmRleE9mKCdAaW1wb3J0JykgIT09IC0xO1xuICAgIH0pKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJQbGVhc2UgZG8gbm90IHVzZSBAaW1wb3J0IENTUyBzeW50YXggaW4gY3JlYXRlR2xvYmFsU3R5bGUgYXQgdGhpcyB0aW1lLCBhcyB0aGUgQ1NTT00gQVBJcyB3ZSB1c2UgaW4gcHJvZHVjdGlvbiBkbyBub3QgaGFuZGxlIGl0IHdlbGwuIEluc3RlYWQsIHdlIHJlY29tbWVuZCB1c2luZyBhIGxpYnJhcnkgc3VjaCBhcyByZWFjdC1oZWxtZXQgdG8gaW5qZWN0IGEgdHlwaWNhbCA8bGluaz4gbWV0YSB0YWcgdG8gdGhlIHN0eWxlc2hlZXQsIG9yIHNpbXBseSBlbWJlZGRpbmcgaXQgbWFudWFsbHkgaW4geW91ciBpbmRleC5odG1sIDxoZWFkPiBzZWN0aW9uIGZvciBhIHNpbXBsZXIgYXBwLlwiKTtcbiAgICB9XG5cbiAgICBpZiAoZ2xvYmFsU3R5bGUuaXNTdGF0aWMpIHtcbiAgICAgIGdsb2JhbFN0eWxlLnJlbmRlclN0eWxlcyhpbnN0YW5jZSwgU1RBVElDX0VYRUNVVElPTl9DT05URVhULCBzdHlsZVNoZWV0LCBzdHlsaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY29udGV4dCA9IF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICB0aGVtZTogZGV0ZXJtaW5lVGhlbWUocHJvcHMsIHRoZW1lLCBHbG9iYWxTdHlsZUNvbXBvbmVudC5kZWZhdWx0UHJvcHMpXG4gICAgICB9KTtcblxuICAgICAgZ2xvYmFsU3R5bGUucmVuZGVyU3R5bGVzKGluc3RhbmNlLCBjb250ZXh0LCBzdHlsZVNoZWV0LCBzdHlsaXMpO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZ2xvYmFsU3R5bGUucmVtb3ZlU3R5bGVzKGluc3RhbmNlLCBzdHlsZVNoZWV0KTtcbiAgICAgIH07XG4gICAgfSwgRU1QVFlfQVJSQVkpO1xuICAgIHJldHVybiBudWxsO1xuICB9IC8vICRGbG93Rml4TWVcblxuXG4gIHJldHVybiBSZWFjdC5tZW1vKEdsb2JhbFN0eWxlQ29tcG9uZW50KTtcbn1cblxuLy8gXG5mdW5jdGlvbiBrZXlmcmFtZXMoc3RyaW5ncykge1xuICAvKiBXYXJuaW5nIGlmIHlvdSd2ZSB1c2VkIGtleWZyYW1lcyBvbiBSZWFjdCBOYXRpdmUgKi9cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybignYGtleWZyYW1lc2AgY2Fubm90IGJlIHVzZWQgb24gUmVhY3ROYXRpdmUsIG9ubHkgb24gdGhlIHdlYi4gVG8gZG8gYW5pbWF0aW9uIGluIFJlYWN0TmF0aXZlIHBsZWFzZSB1c2UgQW5pbWF0ZWQuJyk7XG4gIH1cblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgaW50ZXJwb2xhdGlvbnMgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGludGVycG9sYXRpb25zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBydWxlcyA9IGNzcy5hcHBseSh2b2lkIDAsIFtzdHJpbmdzXS5jb25jYXQoaW50ZXJwb2xhdGlvbnMpKS5qb2luKCcnKTtcbiAgdmFyIG5hbWUgPSBnZW5lcmF0ZUNvbXBvbmVudElkKHJ1bGVzKTtcbiAgcmV0dXJuIG5ldyBLZXlmcmFtZXMobmFtZSwgW3J1bGVzLCBuYW1lLCAnQGtleWZyYW1lcyddKTtcbn1cblxudmFyIFNlcnZlclN0eWxlU2hlZXQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTZXJ2ZXJTdHlsZVNoZWV0KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLl9lbWl0U2hlZXRDU1MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY3NzID0gX3RoaXMuaW5zdGFuY2UudG9TdHJpbmcoKTtcblxuICAgICAgdmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcbiAgICAgIHZhciBhdHRycyA9IFtub25jZSAmJiBcIm5vbmNlPVxcXCJcIiArIG5vbmNlICsgXCJcXFwiXCIsIFNDX0FUVFIgKyBcIj1cXFwidHJ1ZVxcXCJcIiwgU0NfQVRUUl9WRVJTSU9OICsgXCI9XFxcIlwiICsgU0NfVkVSU0lPTiArIFwiXFxcIlwiXTtcbiAgICAgIHZhciBodG1sQXR0ciA9IGF0dHJzLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG4gICAgICByZXR1cm4gXCI8c3R5bGUgXCIgKyBodG1sQXR0ciArIFwiPlwiICsgY3NzICsgXCI8L3N0eWxlPlwiO1xuICAgIH07XG5cbiAgICB0aGlzLmdldFN0eWxlVGFncyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5zZWFsZWQpIHtcbiAgICAgICAgcmV0dXJuIHRocm93U3R5bGVkQ29tcG9uZW50c0Vycm9yKDIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3RoaXMuX2VtaXRTaGVldENTUygpO1xuICAgIH07XG5cbiAgICB0aGlzLmdldFN0eWxlRWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfcHJvcHM7XG5cbiAgICAgIGlmIChfdGhpcy5zZWFsZWQpIHtcbiAgICAgICAgcmV0dXJuIHRocm93U3R5bGVkQ29tcG9uZW50c0Vycm9yKDIpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJvcHMgPSAoX3Byb3BzID0ge30sIF9wcm9wc1tTQ19BVFRSXSA9ICcnLCBfcHJvcHNbU0NfQVRUUl9WRVJTSU9OXSA9IFNDX1ZFUlNJT04sIF9wcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCA9IHtcbiAgICAgICAgX19odG1sOiBfdGhpcy5pbnN0YW5jZS50b1N0cmluZygpXG4gICAgICB9LCBfcHJvcHMpO1xuICAgICAgdmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblxuICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgIHByb3BzLm5vbmNlID0gbm9uY2U7XG4gICAgICB9IC8vIHY0IHJldHVybmVkIGFuIGFycmF5IGZvciB0aGlzIGZuLCBzbyB3ZSdsbCBkbyB0aGUgc2FtZSBmb3IgdjUgZm9yIGJhY2t3YXJkIGNvbXBhdFxuXG5cbiAgICAgIHJldHVybiBbLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAga2V5OiBcInNjLTAtMFwiXG4gICAgICB9KSldO1xuICAgIH07XG5cbiAgICB0aGlzLnNlYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5zZWFsZWQgPSB0cnVlO1xuICAgIH07XG5cbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFN0eWxlU2hlZXQoe1xuICAgICAgaXNTZXJ2ZXI6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLnNlYWxlZCA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFNlcnZlclN0eWxlU2hlZXQucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb2xsZWN0U3R5bGVzID0gZnVuY3Rpb24gY29sbGVjdFN0eWxlcyhjaGlsZHJlbikge1xuICAgIGlmICh0aGlzLnNlYWxlZCkge1xuICAgICAgcmV0dXJuIHRocm93U3R5bGVkQ29tcG9uZW50c0Vycm9yKDIpO1xuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZVNoZWV0TWFuYWdlciwge1xuICAgICAgc2hlZXQ6IHRoaXMuaW5zdGFuY2VcbiAgICB9LCBjaGlsZHJlbik7XG4gIH07XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIF9wcm90by5pbnRlcmxlYXZlV2l0aE5vZGVTdHJlYW0gPSBmdW5jdGlvbiBpbnRlcmxlYXZlV2l0aE5vZGVTdHJlYW0oaW5wdXQpIHtcbiAgICB7XG4gICAgICByZXR1cm4gdGhyb3dTdHlsZWRDb21wb25lbnRzRXJyb3IoMyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBTZXJ2ZXJTdHlsZVNoZWV0O1xufSgpO1xuXG4vLyBleHBvcnQgZGVmYXVsdCA8Q29uZmlnOiB7IHRoZW1lPzogYW55IH0sIEluc3RhbmNlPihcbi8vICBDb21wb25lbnQ6IEFic3RyYWN0Q29tcG9uZW50PENvbmZpZywgSW5zdGFuY2U+XG4vLyApOiBBYnN0cmFjdENvbXBvbmVudDwkRGlmZjxDb25maWcsIHsgdGhlbWU/OiBhbnkgfT4gJiB7IHRoZW1lPzogYW55IH0sIEluc3RhbmNlPlxuLy9cbi8vIGJ1dCB0aGUgb2xkIGJ1aWxkIHN5c3RlbSB0b29saW5nIGRvZXNuJ3Qgc3VwcG9ydCB0aGUgc3ludGF4XG5cbnZhciB3aXRoVGhlbWUgPSAoZnVuY3Rpb24gKENvbXBvbmVudCkge1xuICAvLyAkRmxvd0ZpeE1lIFRoaXMgc2hvdWxkIGJlIFJlYWN0LmZvcndhcmRSZWY8Q29uZmlnLCBJbnN0YW5jZT5cbiAgdmFyIFdpdGhUaGVtZSA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgICB2YXIgdGhlbWUgPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7IC8vICRGbG93Rml4TWUgZGVmYXVsdFByb3BzIGlzbid0IGRlY2xhcmVkIHNvIGl0IGNhbiBiZSBpbmZlcnJhYmxlXG5cbiAgICB2YXIgZGVmYXVsdFByb3BzID0gQ29tcG9uZW50LmRlZmF1bHRQcm9wcztcbiAgICB2YXIgdGhlbWVQcm9wID0gZGV0ZXJtaW5lVGhlbWUocHJvcHMsIHRoZW1lLCBkZWZhdWx0UHJvcHMpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhlbWVQcm9wID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJbd2l0aFRoZW1lXSBZb3UgYXJlIG5vdCB1c2luZyBhIFRoZW1lUHJvdmlkZXIgbm9yIHBhc3NpbmcgYSB0aGVtZSBwcm9wIG9yIGEgdGhlbWUgaW4gZGVmYXVsdFByb3BzIGluIGNvbXBvbmVudCBjbGFzcyBcXFwiXCIgKyBnZXRDb21wb25lbnROYW1lKENvbXBvbmVudCkgKyBcIlxcXCJcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICB0aGVtZTogdGhlbWVQcm9wLFxuICAgICAgcmVmOiByZWZcbiAgICB9KSk7XG4gIH0pO1xuICBob2lzdChXaXRoVGhlbWUsIENvbXBvbmVudCk7XG4gIFdpdGhUaGVtZS5kaXNwbGF5TmFtZSA9IFwiV2l0aFRoZW1lKFwiICsgZ2V0Q29tcG9uZW50TmFtZShDb21wb25lbnQpICsgXCIpXCI7XG4gIHJldHVybiBXaXRoVGhlbWU7XG59KTtcblxuLy8gXG5cbnZhciB1c2VUaGVtZSA9IGZ1bmN0aW9uIHVzZVRoZW1lKCkge1xuICByZXR1cm4gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xufTtcblxuLy8gXG52YXIgX19QUklWQVRFX18gPSB7XG4gIFN0eWxlU2hlZXQ6IFN0eWxlU2hlZXQsXG4gIG1hc3RlclNoZWV0OiBtYXN0ZXJTaGVldFxufTtcblxuLy8gXG4vKiBEZWZpbmUgYnVuZGxlIHZlcnNpb24gZm9yIGV4cG9ydCAqL1xuXG52YXIgdmVyc2lvbiA9IFwiNS4xLjFcIjtcbi8qIFdhcm5pbmcgaWYgeW91J3ZlIGltcG9ydGVkIHRoaXMgZmlsZSBvbiBSZWFjdCBOYXRpdmUgKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgY29uc29sZS53YXJuKFwiSXQgbG9va3MgbGlrZSB5b3UndmUgaW1wb3J0ZWQgJ3N0eWxlZC1jb21wb25lbnRzJyBvbiBSZWFjdCBOYXRpdmUuXFxuXCIgKyBcIlBlcmhhcHMgeW91J3JlIGxvb2tpbmcgdG8gaW1wb3J0ICdzdHlsZWQtY29tcG9uZW50cy9uYXRpdmUnP1xcblwiICsgJ1JlYWQgbW9yZSBhYm91dCB0aGlzIGF0IGh0dHBzOi8vd3d3LnN0eWxlZC1jb21wb25lbnRzLmNvbS9kb2NzL2Jhc2ljcyNyZWFjdC1uYXRpdmUnKTtcbn1cbi8qIFdhcm5pbmcgaWYgdGhlcmUgYXJlIHNldmVyYWwgaW5zdGFuY2VzIG9mIHN0eWxlZC1jb21wb25lbnRzICovXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB3aW5kb3dbJ19fc3R5bGVkLWNvbXBvbmVudHMtaW5pdF9fJ10gPSB3aW5kb3dbJ19fc3R5bGVkLWNvbXBvbmVudHMtaW5pdF9fJ10gfHwgMDtcblxuICBpZiAod2luZG93WydfX3N0eWxlZC1jb21wb25lbnRzLWluaXRfXyddID09PSAxKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oXCJJdCBsb29rcyBsaWtlIHRoZXJlIGFyZSBzZXZlcmFsIGluc3RhbmNlcyBvZiAnc3R5bGVkLWNvbXBvbmVudHMnIGluaXRpYWxpemVkIGluIHRoaXMgYXBwbGljYXRpb24uIFwiICsgJ1RoaXMgbWF5IGNhdXNlIGR5bmFtaWMgc3R5bGVzIG5vdCByZW5kZXJpbmcgcHJvcGVybHksIGVycm9ycyBoYXBwZW5pbmcgZHVyaW5nIHJlaHlkcmF0aW9uIHByb2Nlc3MsICcgKyAnbWlzc2luZyB0aGVtZSBwcm9wLCBhbmQgbWFrZXMgeW91ciBhcHBsaWNhdGlvbiBiaWdnZXIgd2l0aG91dCBhIGdvb2QgcmVhc29uLlxcblxcbicgKyAnU2VlIGh0dHBzOi8vcy1jLnNoLzJCQVh6ZWQgZm9yIG1vcmUgaW5mby4nKTtcbiAgfVxuXG4gIHdpbmRvd1snX19zdHlsZWQtY29tcG9uZW50cy1pbml0X18nXSArPSAxO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHlsZWQ7XG5leHBvcnQgeyBTZXJ2ZXJTdHlsZVNoZWV0LCBTdHlsZVNoZWV0Q29uc3VtZXIsIFN0eWxlU2hlZXRDb250ZXh0LCBTdHlsZVNoZWV0TWFuYWdlciwgVGhlbWVDb25zdW1lciwgVGhlbWVDb250ZXh0LCBUaGVtZVByb3ZpZGVyLCBfX1BSSVZBVEVfXywgY3JlYXRlR2xvYmFsU3R5bGUsIGNzcywgaXNTdHlsZWRDb21wb25lbnQsIGtleWZyYW1lcywgdXNlVGhlbWUsIHZlcnNpb24sIHdpdGhUaGVtZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVkLWNvbXBvbmVudHMuYnJvd3Nlci5lc20uanMubWFwXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0IEZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy90YWJsZSc7XHJcblxyXG5jb25zdCBTdHlsZXMgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gIHRhYmxlIHtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcblxyXG4gICAgdHIge1xyXG4gICAgICA6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgdGQge1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aCxcclxuICAgIHRkIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcblxyXG4gICAgICA6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUm9vdCA9ICh7IHByb2R1Y3RzIH0pID0+IHtcclxuICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAge1xyXG4gICAgICBIZWFkZXI6ICdJRCcsXHJcbiAgICAgIGFjY2Vzc29yOiAnaWQnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgSGVhZGVyOiAnU2VydmljZScsXHJcbiAgICAgIGFjY2Vzc29yOiAnc2VydmljZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBIZWFkZXI6ICdQcm9kdWNlcicsXHJcbiAgICAgIGFjY2Vzc29yOiAncHJvZHVjZXInLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgSGVhZGVyOiAnTmFtZScsXHJcbiAgICAgIGFjY2Vzc29yOiAnbmFtZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBIZWFkZXI6ICdFQU4nLFxyXG4gICAgICBhY2Nlc3NvcjogJ2VhbicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBIZWFkZXI6ICdQcmljZScsXHJcbiAgICAgIGFjY2Vzc29yOiAncHJpY2UnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgSGVhZGVyOiAnQ2VuZW9QcmljZScsXHJcbiAgICAgIGFjY2Vzc29yOiAnY2VuZW9QcmljZScsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVzPlxyXG4gICAgICA8VGFibGUgY29sdW1ucz17Y29sdW1uc30gZGF0YT17cHJvZHVjdHN9PjwvVGFibGU+XHJcbiAgICA8L1N0eWxlcz5cclxuICApO1xyXG59O1xyXG5cclxuUm9vdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgRmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ2V0UHJvZHVjdHMnKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvZHVjdHM6IGRhdGEsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvb3Q7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1OyJdLCJzb3VyY2VSb290IjoiIn0=