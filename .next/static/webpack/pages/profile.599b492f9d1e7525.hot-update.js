"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./Components/Account.js":
/*!*******************************!*\
  !*** ./Components/Account.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Account; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Services_branch_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/branch_services */ \"./Services/branch_services.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Account() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [userdata, setUserdata] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const datafeeder = [];\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [bio, setBio] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [branches, setBranches] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const upload = function() {\n        router.push(\"/upload\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n    // get user data service/function\n    }, []);\n    const dropdownInput = function() {\n        setNewBranch(true);\n    };\n    // onSubmit:\n    const postBranch = async function(e) {\n        e.preventDefault();\n        const token = JSON.parse(localStorage.getItem(\"tokenKey\").replaceAll(\"\", \"\"));\n        const postContent = {\n            vip_user: \"\".concat(userdata.username),\n            text: \"\".concat(text),\n            file_url: \"\".concat(file_url),\n            timestamp: new Date()\n        };\n        const res = await fetch(\"http://127.0.0.1:8000/branches/new/\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"Authorization\": \"Bearer \".concat(token)\n            },\n            body: JSON.stringify(postContent)\n        }).then((res)=>res.json()).then((data)=>console.log(\"branch posted\")).catch((error)=>{\n            console.error(\"Error:\", error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: styles.profileContainer,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: styles.header\n            }, void 0, false, {\n                fileName: \"/home/lucian2/chatchair/chatchair_front/Components/Account.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: styles.headerContainer,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: styles.infoContainer,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: styles.profilePic,\n                                src: \"https://i.pravatar.cc/300\",\n                                height: 70,\n                                width: 70\n                            }, void 0, false, {\n                                fileName: \"/home/lucian2/chatchair/chatchair_front/Components/Account.js\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: styles.userName,\n                                children: userdata.username\n                            }, void 0, false, {\n                                fileName: \"/home/lucian2/chatchair/chatchair_front/Components/Account.js\",\n                                lineNumber: 77,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/lucian2/chatchair/chatchair_front/Components/Account.js\",\n                        lineNumber: 75,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: styles.bioContainer,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: styles.bio,\n                            children: userdata.bio\n                        }, void 0, false, {\n                            fileName: \"/home/lucian2/chatchair/chatchair_front/Components/Account.js\",\n                            lineNumber: 80,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/lucian2/chatchair/chatchair_front/Components/Account.js\",\n                        lineNumber: 79,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: styles.editbutton,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/edit\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: \"/editprofile.png\",\n                                    width: 22,\n                                    height: 20\n                                }, void 0, false, {\n                                    fileName: \"/home/lucian2/chatchair/chatchair_front/Components/Account.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 36\n                                }, this),\n                                \"Edit\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/lucian2/chatchair/chatchair_front/Components/Account.js\",\n                            lineNumber: 83,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/lucian2/chatchair/chatchair_front/Components/Account.js\",\n                        lineNumber: 82,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/lucian2/chatchair/chatchair_front/Components/Account.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: styles.branchWindow,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"chats go here\"\n                }, void 0, false, {\n                    fileName: \"/home/lucian2/chatchair/chatchair_front/Components/Account.js\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/lucian2/chatchair/chatchair_front/Components/Account.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/lucian2/chatchair/chatchair_front/Components/Account.js\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(Account, \"j542sJSO7nH+E1YiqzM0gKENbR0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Account;\nconst styles = {\n    profileContainer: \" h-screen w-[100vw] overflow-x-hidden flex flex-col \",\n    headerContainer: \"h-contain  w-100%  border-b-2 border-slate-200\",\n    branchWindow: \" flex flex-col h-screen w-full overflow-y-scroll items-center bg-blue-200 border-t-2 \",\n    treeText: \"text-slate-500 mt-12\",\n    profilePic: \"rounded-full\",\n    infoContainer: \"w-5/5 ml-auto h-contain flex gap-5 items-center content-center ml-5 mt-16\",\n    userName: \"text-3xl\",\n    addBranch: \"flex items-center gap-1 cursor-pointer my-5 mb-5\",\n    bioContainer: \"w-4/5 ml-auto flex flex-col h-contain py-6 flex gap-2 \",\n    Location: \"text-l text-slate-600\",\n    bio: \"text-l\",\n    editbutton: \"text-s border-2 rounded px-3 py-1 flex gap-2\",\n    disclaimer: \"text-xs pl-12 pb-0\",\n    postForm: \"flex flex-col gap-5 w-4/5 bg-yellow-100 rounded-lg p-5 m-5 mx-5\",\n    postInput: \"bg-blue-200 mx-10 align-center rounded-md p-1 px-2 resize-none\",\n    buttonContainer: \"flex ml-auto mr-12\",\n    postButton: \"flex flex-end p-3 w-contain mt-5 bg-green-400 text-white rounded-lg mb-12\",\n    branchBubble: \" break-words text-lg, h-contain py-5 px-5 w-4/5 mx-24 mb-12 bg-white rounded-md border-2\",\n    branchText: \"flex break-words break-all text-md w-contain\",\n    branchTime: \"flex text-right text-sm\"\n};\nvar _c;\n$RefreshReg$(_c, \"Account\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtJQUNqQlcsY0FBYztJQUNkQyxVQUFVO0lBQ1ZULFlBQVk7SUFDWkYsZUFBZTtJQUNmTSxVQUFVO0lBQ1ZNLFdBQVc7SUFDWEwsY0FBYztJQUNkTSxVQUFVO0lBQ1Z4RCxLQUFLO0lBQ0xtRCxZQUFZO0lBQ1pNLFlBQVk7SUFDWkMsVUFBVTtJQUNWQyxXQUFXO0lBQ1hDLGlCQUFpQjtJQUNqQkMsWUFBWTtJQUNaQyxjQUFjO0lBQ2RDLFlBQVk7SUFDWkMsWUFBWTtBQUNoQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL0FjY291bnQuanM/MmE2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBmZXRjaEJyYW5jaGVzIH0gZnJvbSBcIi4uL1NlcnZpY2VzL2JyYW5jaF9zZXJ2aWNlc1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjY291bnQoKSB7XG5cbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cbmNvbnN0IFt1c2VyZGF0YSwgc2V0VXNlcmRhdGFdID0gdXNlU3RhdGUgKFtdKVxuY29uc3QgZGF0YWZlZWRlciA9IFtdXG5cbmNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoKVxuY29uc3QgW2Jpbywgc2V0QmlvXSA9IHVzZVN0YXRlKClcblxuY29uc3QgW2JyYW5jaGVzLCBzZXRCcmFuY2hlc10gPSB1c2VTdGF0ZShbXSlcblxuXG5cbmNvbnN0IHVwbG9hZCA9IGZ1bmN0aW9uKCl7XG4gIHJvdXRlci5wdXNoKCcvdXBsb2FkJylcbn1cblxuXG51c2VFZmZlY3QoKCkgPT4ge1xuXG5cbi8vIGdldCB1c2VyIGRhdGEgc2VydmljZS9mdW5jdGlvblxuXG4gIFxufSwgW10pXG5cblxuY29uc3QgZHJvcGRvd25JbnB1dCA9IGZ1bmN0aW9uKCkge1xuXG4gIHNldE5ld0JyYW5jaCh0cnVlKVxuXG59XG5cbi8vIG9uU3VibWl0OlxuY29uc3QgcG9zdEJyYW5jaCA9IGFzeW5jIGZ1bmN0aW9uKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB0b2tlbiA9IChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5LZXlcIikucmVwbGFjZUFsbChcIlwiLCAnJykpKVxuICBjb25zdCBwb3N0Q29udGVudCA9IHt2aXBfdXNlcjogYCR7dXNlcmRhdGEudXNlcm5hbWV9YCwgdGV4dDogYCR7dGV4dH1gLCBmaWxlX3VybDogYCR7ZmlsZV91cmx9YCwgdGltZXN0YW1wOiBuZXcgRGF0ZSgpIH1cblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vMTI3LjAuMC4xOjgwMDAvYnJhbmNoZXMvbmV3L2AsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCBcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3RDb250ZW50KVxuICAgIH0pXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhcImJyYW5jaCBwb3N0ZWRcIikpXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICAgICAgfSlcbn1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZUNvbnRhaW5lcn0+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuXG5cblxuICAgICAgPC9zZWN0aW9uPlxuXG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm9Db250YWluZXJ9PlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVQaWN9IHNyYz1cImh0dHBzOi8vaS5wcmF2YXRhci5jYy8zMDBcIiBoZWlnaHQ9ezcwfSB3aWR0aD17NzB9Lz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyTmFtZX0+e3VzZXJkYXRhLnVzZXJuYW1lfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJpb0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmlvfT57dXNlcmRhdGEuYmlvfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRidXR0b259PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZWRpdFwiPjxJbWFnZSBzcmM9XCIvZWRpdHByb2ZpbGUucG5nXCIgd2lkdGg9ezIyfSBoZWlnaHQ9ezIwfT48L0ltYWdlPkVkaXQ8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuYnJhbmNoV2luZG93fT5cbiAgICAgICAgPGRpdj5jaGF0cyBnbyBoZXJlPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBwcm9maWxlQ29udGFpbmVyOiBcIiBoLXNjcmVlbiB3LVsxMDB2d10gb3ZlcmZsb3cteC1oaWRkZW4gZmxleCBmbGV4LWNvbCBcIixcbiAgICBoZWFkZXJDb250YWluZXI6IFwiaC1jb250YWluICB3LTEwMCUgIGJvcmRlci1iLTIgYm9yZGVyLXNsYXRlLTIwMFwiLFxuICAgIGJyYW5jaFdpbmRvdzogXCIgZmxleCBmbGV4LWNvbCBoLXNjcmVlbiB3LWZ1bGwgb3ZlcmZsb3cteS1zY3JvbGwgaXRlbXMtY2VudGVyIGJnLWJsdWUtMjAwIGJvcmRlci10LTIgXCIsXG4gICAgdHJlZVRleHQ6IFwidGV4dC1zbGF0ZS01MDAgbXQtMTJcIixcbiAgICBwcm9maWxlUGljOiBcInJvdW5kZWQtZnVsbFwiLFxuICAgIGluZm9Db250YWluZXI6IFwidy01LzUgbWwtYXV0byBoLWNvbnRhaW4gZmxleCBnYXAtNSBpdGVtcy1jZW50ZXIgY29udGVudC1jZW50ZXIgbWwtNSBtdC0xNlwiLFxuICAgIHVzZXJOYW1lOiBcInRleHQtM3hsXCIsXG4gICAgYWRkQnJhbmNoOiBcImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIGN1cnNvci1wb2ludGVyIG15LTUgbWItNVwiLFxuICAgIGJpb0NvbnRhaW5lcjogXCJ3LTQvNSBtbC1hdXRvIGZsZXggZmxleC1jb2wgaC1jb250YWluIHB5LTYgZmxleCBnYXAtMiBcIixcbiAgICBMb2NhdGlvbjogXCJ0ZXh0LWwgdGV4dC1zbGF0ZS02MDBcIixcbiAgICBiaW86IFwidGV4dC1sXCIsXG4gICAgZWRpdGJ1dHRvbjogJ3RleHQtcyBib3JkZXItMiByb3VuZGVkIHB4LTMgcHktMSBmbGV4IGdhcC0yJyxcbiAgICBkaXNjbGFpbWVyOiBcInRleHQteHMgcGwtMTIgcGItMFwiLFxuICAgIHBvc3RGb3JtOiBcImZsZXggZmxleC1jb2wgZ2FwLTUgdy00LzUgYmcteWVsbG93LTEwMCByb3VuZGVkLWxnIHAtNSBtLTUgbXgtNVwiLFxuICAgIHBvc3RJbnB1dDogXCJiZy1ibHVlLTIwMCBteC0xMCBhbGlnbi1jZW50ZXIgcm91bmRlZC1tZCBwLTEgcHgtMiByZXNpemUtbm9uZVwiLFxuICAgIGJ1dHRvbkNvbnRhaW5lcjogXCJmbGV4IG1sLWF1dG8gbXItMTJcIixcbiAgICBwb3N0QnV0dG9uOiBcImZsZXggZmxleC1lbmQgcC0zIHctY29udGFpbiBtdC01IGJnLWdyZWVuLTQwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcgbWItMTJcIixcbiAgICBicmFuY2hCdWJibGU6IFwiIGJyZWFrLXdvcmRzIHRleHQtbGcsIGgtY29udGFpbiBweS01IHB4LTUgdy00LzUgbXgtMjQgbWItMTIgYmctd2hpdGUgcm91bmRlZC1tZCBib3JkZXItMlwiLFxuICAgIGJyYW5jaFRleHQ6IFwiZmxleCBicmVhay13b3JkcyBicmVhay1hbGwgdGV4dC1tZCB3LWNvbnRhaW5cIixcbiAgICBicmFuY2hUaW1lOiBcImZsZXggdGV4dC1yaWdodCB0ZXh0LXNtXCJcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJJbWFnZSIsIlJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmV0Y2hCcmFuY2hlcyIsIkFjY291bnQiLCJyb3V0ZXIiLCJ1c2VyZGF0YSIsInNldFVzZXJkYXRhIiwiZGF0YWZlZWRlciIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJiaW8iLCJzZXRCaW8iLCJicmFuY2hlcyIsInNldEJyYW5jaGVzIiwidXBsb2FkIiwicHVzaCIsImRyb3Bkb3duSW5wdXQiLCJzZXROZXdCcmFuY2giLCJwb3N0QnJhbmNoIiwiZSIsInByZXZlbnREZWZhdWx0IiwidG9rZW4iLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVwbGFjZUFsbCIsInBvc3RDb250ZW50IiwidmlwX3VzZXIiLCJ0ZXh0IiwiZmlsZV91cmwiLCJ0aW1lc3RhbXAiLCJEYXRlIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsInN0cmluZ2lmeSIsInRoZW4iLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGVzIiwicHJvZmlsZUNvbnRhaW5lciIsInNlY3Rpb24iLCJoZWFkZXIiLCJoZWFkZXJDb250YWluZXIiLCJpbmZvQ29udGFpbmVyIiwiaW1nIiwicHJvZmlsZVBpYyIsInNyYyIsImhlaWdodCIsIndpZHRoIiwidXNlck5hbWUiLCJiaW9Db250YWluZXIiLCJlZGl0YnV0dG9uIiwiaHJlZiIsImJyYW5jaFdpbmRvdyIsInRyZWVUZXh0IiwiYWRkQnJhbmNoIiwiTG9jYXRpb24iLCJkaXNjbGFpbWVyIiwicG9zdEZvcm0iLCJwb3N0SW5wdXQiLCJidXR0b25Db250YWluZXIiLCJwb3N0QnV0dG9uIiwiYnJhbmNoQnViYmxlIiwiYnJhbmNoVGV4dCIsImJyYW5jaFRpbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/Account.js\n"));

/***/ })

});