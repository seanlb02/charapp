"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/branchlist",{

/***/ "./pages/branchlist.js":
/*!*****************************!*\
  !*** ./pages/branchlist.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ branchlist; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Navbar */ \"./Components/Navbar.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Components_Sideslide_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/Sideslide.js */ \"./Components/Sideslide.js\");\n/* harmony import */ var _Components_Account_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/Account.js */ \"./Components/Account.js\");\n/* harmony import */ var _Components_BranchList_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/BranchList.js */ \"./Components/BranchList.js\");\n/* harmony import */ var _Components_Footnav_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Components/Footnav.js */ \"./Components/Footnav.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction branchlist() {\n    _s();\n    const [onMobile, SetonMobile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [screen, Setscreen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // window is accessible here.\n        console.log(window.innerWidth);\n        if (window.innerWidth < 600) {\n            SetonMobile(true);\n        }\n        ;\n        console.log(onMobile);\n    }, []);\n    if (true) {\n        window.addEventListener(\"resize\", function() {\n            if (window.innerWidth > 600) {\n                SetonMobile(false);\n            } else {\n                SetonMobile(true);\n            }\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: styles.pageContainer,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Sideslide_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                className: styles.slider\n            }, void 0, false, {\n                fileName: \"/home/charapp/pages/branchlist.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_BranchList_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                className: styles.branchlist\n            }, void 0, false, {\n                fileName: \"/home/charapp/pages/branchlist.js\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Footnav_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                className: styles.footer\n            }, void 0, false, {\n                fileName: \"/home/charapp/pages/branchlist.js\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/charapp/pages/branchlist.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(branchlist, \"kSY8yhgziIp7rkrqD40M7KjAEPw=\");\nconst styles = {\n    pageContainer: \"h-[100vh] flex flex-col w-[100vw] \",\n    slider: \"h-[15vh]\",\n    branchlist: \"h-[75vh]\",\n    footer: \"h-[20vh] border-t-2 border-slate-800\"\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9icmFuY2hsaXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUF5QjtBQUNHO0FBQ0U7QUFDRjtBQUNhO0FBQ0E7QUFDRjtBQUNXO0FBQ0o7QUFDTTtBQUNOO0FBSy9CLFNBQVNZLGFBQWE7O0lBRWpDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNXLFFBQVFDLFVBQVUsR0FBR1osK0NBQVFBLENBQUM7SUFFbkNDLGdEQUFTQSxDQUFDLElBQU07UUFDWiw2QkFBNkI7UUFDN0JZLFFBQVFDLEdBQUcsQ0FBQ0MsT0FBT0MsVUFBVTtRQUM3QixJQUFJRCxPQUFPQyxVQUFVLEdBQUcsS0FBSztZQUN6Qk4sWUFBWSxJQUFJO1FBQ3BCLENBQUM7O1FBRURHLFFBQVFDLEdBQUcsQ0FBQ0w7SUFFZCxHQUFHLEVBQUU7SUFFTCxJQUFHLElBQTZCLEVBQUM7UUFDL0JNLE9BQU9FLGdCQUFnQixDQUFDLFVBQVUsV0FBVztZQUMzQyxJQUFHRixPQUFPQyxVQUFVLEdBQUcsS0FBSTtnQkFBQ04sWUFBWSxLQUFLO1lBQUMsT0FDMUM7Z0JBQUNBLFlBQVksSUFBSTtZQUFDLENBQUM7UUFDekI7SUFDSixDQUFDO0lBRUgscUJBRUEsOERBQUNRO1FBQUlDLFdBQVdDLE9BQU9DLGFBQWE7OzBCQUNoQyw4REFBQ2pCLGdFQUFTQTtnQkFBQ2UsV0FBV0MsT0FBT0UsTUFBTTs7Ozs7OzBCQUNuQyw4REFBQ2hCLGlFQUFVQTtnQkFBQ2EsV0FBV0MsT0FBT1osVUFBVTs7Ozs7OzBCQUN4Qyw4REFBQ0QsK0RBQU9BO2dCQUFDWSxXQUFXQyxPQUFPRyxNQUFNOzs7Ozs7Ozs7Ozs7QUFLekMsQ0FBQztHQWpDdUJmO0FBbUN4QixNQUFNWSxTQUFTO0lBQ1hDLGVBQWU7SUFDZkMsUUFBUTtJQUNSZCxZQUFZO0lBQ1plLFFBQVE7QUFDWiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9icmFuY2hsaXN0LmpzPzYzNGMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL0NvbXBvbmVudHMvTmF2YmFyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgU2lkZXNsaWRlIGZyb20gJy4uL0NvbXBvbmVudHMvU2lkZXNsaWRlLmpzJ1xuaW1wb3J0IEFjY291bnQgZnJvbSAnLi4vQ29tcG9uZW50cy9BY2NvdW50LmpzJ1xuaW1wb3J0IEJyYW5jaExpc3QgZnJvbSAnLi4vQ29tcG9uZW50cy9CcmFuY2hMaXN0LmpzJ1xuaW1wb3J0IEZvb3RuYXYgZnJvbSAnLi4vQ29tcG9uZW50cy9Gb290bmF2LmpzJ1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBicmFuY2hsaXN0KCkge1xuXG4gICAgY29uc3QgW29uTW9iaWxlLCBTZXRvbk1vYmlsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbc2NyZWVuLCBTZXRzY3JlZW5dID0gdXNlU3RhdGUoXCJcIik7XG4gIFxuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAvLyB3aW5kb3cgaXMgYWNjZXNzaWJsZSBoZXJlLlxuICAgICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5pbm5lcldpZHRoKVxuICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDYwMCkge1xuICAgICAgICAgICAgICBTZXRvbk1vYmlsZSh0cnVlKVxuICAgICAgICAgIH07XG4gICAgICAgICAgXG4gICAgICAgICAgY29uc29sZS5sb2cob25Nb2JpbGUpXG4gICAgICAgICAgXG4gICAgICAgIH0sIFtdKTtcbiAgXG4gICAgICAgIGlmKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpe1xuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPiA2MDApe1NldG9uTW9iaWxlKGZhbHNlKX1cbiAgICAgICAgICAgIGVsc2V7U2V0b25Nb2JpbGUodHJ1ZSl9XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gIFxuICAgIHJldHVybiAoXG4gICAgXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlQ29udGFpbmVyfT5cbiAgICAgICAgPFNpZGVzbGlkZSBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZXJ9Lz5cbiAgICAgICAgPEJyYW5jaExpc3QgY2xhc3NOYW1lPXtzdHlsZXMuYnJhbmNobGlzdH0vPlxuICAgICAgICA8Rm9vdG5hdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9Lz5cbiAgXG4gICAgPC9kaXY+XG4gICAgXG4gICAgKVxufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgcGFnZUNvbnRhaW5lcjogXCJoLVsxMDB2aF0gZmxleCBmbGV4LWNvbCB3LVsxMDB2d10gXCIsXG4gICAgc2xpZGVyOiBcImgtWzE1dmhdXCIsXG4gICAgYnJhbmNobGlzdDogXCJoLVs3NXZoXVwiLFxuICAgIGZvb3RlcjogXCJoLVsyMHZoXSBib3JkZXItdC0yIGJvcmRlci1zbGF0ZS04MDBcIlxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJJbWFnZSIsIkxpbmsiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5hdmJhciIsInVzZVJvdXRlciIsIlNpZGVzbGlkZSIsIkFjY291bnQiLCJCcmFuY2hMaXN0IiwiRm9vdG5hdiIsImJyYW5jaGxpc3QiLCJvbk1vYmlsZSIsIlNldG9uTW9iaWxlIiwic2NyZWVuIiwiU2V0c2NyZWVuIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGVzIiwicGFnZUNvbnRhaW5lciIsInNsaWRlciIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/branchlist.js\n"));

/***/ })

});