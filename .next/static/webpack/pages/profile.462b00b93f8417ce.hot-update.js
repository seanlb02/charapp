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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Account; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Services_branch_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/branch_services */ \"./Services/branch_services.js\");\n/* harmony import */ var _Userchats__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Userchats */ \"./Components/Userchats.js\");\n/* harmony import */ var _Services_user_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/user_services */ \"./Services/user_services.js\");\n/* harmony import */ var _Listitem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Listitem */ \"./Components/Listitem.js\");\n/* harmony import */ var _Services_chat_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Services/chat_services */ \"./Services/chat_services.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Account() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [userdata, setUserdata] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [chatdata, setChatdata] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const datafeeder = [];\n    const [button, setButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [bio, setBio] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [branches, setBranches] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // message input stored here\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const upload = function() {\n        router.push(\"/upload\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // get user data service/function\n        (0,_Services_user_services__WEBPACK_IMPORTED_MODULE_7__.getUserData)().then((data)=>setUserdata(data));\n        (0,_Services_chat_services__WEBPACK_IMPORTED_MODULE_9__.userChats)().then((data)=>setChatdata(data));\n    }, []);\n    const dropdownInput = function() {\n        setNewBranch(true);\n    };\n    const updateBio = function(bio) {\n        setButton(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: styles.profileContainer,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: styles.header\n            }, void 0, false, {\n                fileName: \"/home/charapp/Components/Account.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: styles.headerContainer,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: styles.infoContainer,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: styles.profilePic,\n                                src: \"https://i.pravatar.cc/300\",\n                                height: 70,\n                                width: 70\n                            }, void 0, false, {\n                                fileName: \"/home/charapp/Components/Account.js\",\n                                lineNumber: 71,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: styles.userName,\n                                children: userdata.map((ob)=>ob.username)\n                            }, void 0, false, {\n                                fileName: \"/home/charapp/Components/Account.js\",\n                                lineNumber: 72,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/charapp/Components/Account.js\",\n                        lineNumber: 70,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: styles.bioContainer,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: styles.bio,\n                            children: userdata.map((ob)=>ob.bio)\n                        }, void 0, false, {\n                            fileName: \"/home/charapp/Components/Account.js\",\n                            lineNumber: 75,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/charapp/Components/Account.js\",\n                        lineNumber: 74,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: styles.editbuttoncontainer,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: styles.editbutton,\n                                onClick: ()=>setButton(true),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        src: \"/editprofile.png\",\n                                        width: 20,\n                                        height: 17\n                                    }, void 0, false, {\n                                        fileName: \"/home/charapp/Components/Account.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 84\n                                    }, this),\n                                    \"Edit\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/charapp/Components/Account.js\",\n                                lineNumber: 78,\n                                columnNumber: 17\n                            }, this),\n                            button ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: styles.editbutton,\n                                onClick: ()=>updatebio(),\n                                children: \"Save\"\n                            }, void 0, false, {\n                                fileName: \"/home/charapp/Components/Account.js\",\n                                lineNumber: 79,\n                                columnNumber: 27\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/charapp/Components/Account.js\",\n                        lineNumber: 77,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/charapp/Components/Account.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: styles.branchWindow,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/chat/createchat\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: styles.chatButton,\n                        children: \"Start Chat\"\n                    }, void 0, false, {\n                        fileName: \"/home/charapp/Components/Account.js\",\n                        lineNumber: 84,\n                        columnNumber: 39\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/charapp/Components/Account.js\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/charapp/Components/Account.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: styles.windowList,\n                children: chatdata.map((obj)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Listitem__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        chatname: obj.chatname,\n                        members: obj.participants.map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: el\n                            }, void 0, false, void 0, void 0))\n                    }, void 0, false, {\n                        fileName: \"/home/charapp/Components/Account.js\",\n                        lineNumber: 87,\n                        columnNumber: 28\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/charapp/Components/Account.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/charapp/Components/Account.js\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s(Account, \"/CmkvcYPBYI605h2dyI1SVgmnZM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Account;\nconst styles = {\n    profileContainer: \" h-[80vh] w-[100vw] overflow-x-hidden flex flex-col \",\n    headerContainer: \"h-auto  w-100%  border-b-1 border-slate-200\",\n    branchWindow: \"shadow flex flex-col h-auto w-full align-center justify-center items-center  border-t-2 \",\n    windowList: \"overflow-y-scroll scrollbar-none\",\n    treeText: \"text-slate-500 mt-12\",\n    input: \" rounded-xl p-2 w-[90vw] m-4 mb-5 py-3 bg-slate-200\",\n    profilePic: \"rounded-full\",\n    infoContainer: \"w-5/5 ml-auto h-contain flex gap-5 items-center content-center ml-5 mt-0\",\n    userName: \"text-3xl\",\n    addBranch: \"flex items-center gap-1 cursor-pointer my-5 mb-5\",\n    bioContainer: \"w-4/5 mr-auto pl-6 flex flex-col h-contain py-6 flex gap-2 \",\n    Location: \"text-l text-slate-600\",\n    bio: \"text-l\",\n    editbutton: \"flex text-sm align-center items-center border-1 bg-green-200 rounded-full px-3 py-1 flex w-auto ml-4 mb-4 gap-2\",\n    editbuttoncontainer: \"flex w-auto\",\n    disclaimer: \"text-xs pl-12 pb-0\",\n    postForm: \"flex flex-col gap-5 w-4/5 bg-yellow-100 rounded-lg p-5 m-5 mx-5\",\n    postInput: \"bg-blue-200 mx-10 align-center rounded-md p-1 px-2 resize-none\",\n    buttonContainer: \"flex ml-auto mr-12\",\n    postButton: \"flex flex-end p-3 w-contain mt-5 bg-green-400 text-white rounded-lg mb-12\",\n    branchBubble: \" break-words text-lg, h-contain py-5 px-5 w-4/5 mx-24 mb-12 bg-white rounded-md border-2\",\n    branchText: \"flex break-words break-all text-md w-contain\",\n    branchTime: \"flex text-right text-sm\",\n    chatButton: \"bg-blue-100 p-2 pb-3 rounded-full my-6 px-5\"\n};\nvar _c;\n$RefreshReg$(_c, \"Account\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ2xELGlEQUFRQTt3QkFBQ21ELFVBQVVELElBQUlDLFFBQVE7d0JBQUVDLFNBQVNGLElBQUlHLFlBQVksQ0FBQ2YsR0FBRyxDQUFDZ0IsQ0FBQUEsbUJBQUksOERBQUM5QjswQ0FBSzhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRckcsQ0FBQztHQWxGdUJwRDs7UUFFVFIsa0RBQVNBOzs7S0FGQVE7QUFvRnhCLE1BQU13QixTQUFTO0lBQ2JDLGtCQUFrQjtJQUNoQkcsaUJBQWlCO0lBQ2pCZ0IsY0FBYztJQUNkRyxZQUFZO0lBQ1pNLFVBQVU7SUFDVkMsT0FBTztJQUNQdkIsWUFBWTtJQUNaRixlQUFlO0lBQ2ZNLFVBQVU7SUFDVm9CLFdBQVc7SUFDWGhCLGNBQWM7SUFDZGlCLFVBQVU7SUFDVi9DLEtBQUs7SUFDTGdDLFlBQVk7SUFDWkQscUJBQXFCO0lBQ3JCaUIsWUFBWTtJQUNaQyxVQUFVO0lBQ1ZDLFdBQVc7SUFDWEMsaUJBQWlCO0lBQ2pCQyxZQUFZO0lBQ1pDLGNBQWM7SUFDZEMsWUFBWTtJQUNaQyxZQUFZO0lBQ1psQixZQUFZO0FBQ2hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvQWNjb3VudC5qcz8yYTYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGZldGNoQnJhbmNoZXMgfSBmcm9tIFwiLi4vU2VydmljZXMvYnJhbmNoX3NlcnZpY2VzXCI7XG5pbXBvcnQgVXNlcmNoYXRzIGZyb20gJy4vVXNlcmNoYXRzJzsgXG5pbXBvcnQgeyBnZXRVc2VyRGF0YSB9IGZyb20gXCIuLi9TZXJ2aWNlcy91c2VyX3NlcnZpY2VzXCI7XG5cbmltcG9ydCBMaXN0aXRlbSBmcm9tIFwiLi9MaXN0aXRlbVwiO1xuaW1wb3J0IHsgdXNlckNoYXRzIH0gZnJvbSBcIi4uL1NlcnZpY2VzL2NoYXRfc2VydmljZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWNjb3VudCgpIHtcblxuY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cblxuY29uc3QgW3VzZXJkYXRhLCBzZXRVc2VyZGF0YV0gPSB1c2VTdGF0ZSAoW10pXG5jb25zdCBbY2hhdGRhdGEsIHNldENoYXRkYXRhXSA9IHVzZVN0YXRlKFtdKVxuY29uc3QgZGF0YWZlZWRlciA9IFtdXG5cbmNvbnN0IFtidXR0b24sIHNldEJ1dHRvbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuXG5jb25zdCBbYmlvLCBzZXRCaW9dID0gdXNlU3RhdGUoKVxuXG5jb25zdCBbYnJhbmNoZXMsIHNldEJyYW5jaGVzXSA9IHVzZVN0YXRlKFtdKVxuXG4vLyBtZXNzYWdlIGlucHV0IHN0b3JlZCBoZXJlXG5jb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgpXG5cbmNvbnN0IHVwbG9hZCA9IGZ1bmN0aW9uKCl7XG4gIHJvdXRlci5wdXNoKCcvdXBsb2FkJylcbn1cblxuXG51c2VFZmZlY3QoKCkgPT4ge1xuXG4gIFxuLy8gZ2V0IHVzZXIgZGF0YSBzZXJ2aWNlL2Z1bmN0aW9uXG5nZXRVc2VyRGF0YSgpLnRoZW4oKGRhdGEpID0+IHNldFVzZXJkYXRhKGRhdGEpKVxudXNlckNoYXRzKCkudGhlbigoZGF0YSkgPT4gc2V0Q2hhdGRhdGEoZGF0YSkpO1xuXG4gIFxufSwgW10pXG5cblxuY29uc3QgZHJvcGRvd25JbnB1dCA9IGZ1bmN0aW9uKCkge1xuXG4gIHNldE5ld0JyYW5jaCh0cnVlKVxuXG59XG5cbmNvbnN0IHVwZGF0ZUJpbyA9IGZ1bmN0aW9uKGJpbykge1xuICBzZXRCdXR0b24oZmFsc2UpXG59XG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlQ29udGFpbmVyfT5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG5cblxuXG4gICAgICA8L3NlY3Rpb24+XG5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZVBpY30gc3JjPVwiaHR0cHM6Ly9pLnByYXZhdGFyLmNjLzMwMFwiIGhlaWdodD17NzB9IHdpZHRoPXs3MH0vPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJOYW1lfT57dXNlcmRhdGEubWFwKG9iPT5vYi51c2VybmFtZSl9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmlvQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iaW99Pnt1c2VyZGF0YS5tYXAob2I9Pm9iLmJpbyl9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdGJ1dHRvbmNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0YnV0dG9ufSBvbkNsaWNrPXsoKSA9PiBzZXRCdXR0b24odHJ1ZSl9PjxJbWFnZSBzcmM9XCIvZWRpdHByb2ZpbGUucG5nXCIgd2lkdGg9ezIwfSBoZWlnaHQ9ezE3fT48L0ltYWdlPkVkaXQ8L2Rpdj5cbiAgICAgICAgICAgICAgICB7YnV0dG9uID8gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0YnV0dG9ufSBvbkNsaWNrPXsoKSA9PiB1cGRhdGViaW8oKX0+U2F2ZTwvZGl2PiA6IDw+PC8+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICBcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmJyYW5jaFdpbmRvd30+XG4gICAgICAgIDxMaW5rIGhyZWY9Jy9jaGF0L2NyZWF0ZWNoYXQnPjxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdEJ1dHRvbn0+U3RhcnQgQ2hhdDwvZGl2PjwvTGluaz5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLndpbmRvd0xpc3R9PlxuICAgICAge2NoYXRkYXRhLm1hcChvYmogPT4gPExpc3RpdGVtIGNoYXRuYW1lPXtvYmouY2hhdG5hbWV9IG1lbWJlcnM9e29iai5wYXJ0aWNpcGFudHMubWFwKGVsPT48ZGl2PntlbH08L2Rpdj4pfS8+KX1cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIHsvKiA8Zm9ybSBjbGFzc05hbWU9XCJiZy1ibHVlLTUwXCI+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gcGxhY2Vob2xkZXI9XCJUeXBlIGEgbWVzc2FnZS4uLlwiPjwvaW5wdXQ+XG4gICAgICA8L2Zvcm0+ICovfVxuICAgICAgXG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBwcm9maWxlQ29udGFpbmVyOiBcIiBoLVs4MHZoXSB3LVsxMDB2d10gb3ZlcmZsb3cteC1oaWRkZW4gZmxleCBmbGV4LWNvbCBcIixcbiAgICBoZWFkZXJDb250YWluZXI6IFwiaC1hdXRvICB3LTEwMCUgIGJvcmRlci1iLTEgYm9yZGVyLXNsYXRlLTIwMFwiLFxuICAgIGJyYW5jaFdpbmRvdzogXCJzaGFkb3cgZmxleCBmbGV4LWNvbCBoLWF1dG8gdy1mdWxsIGFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgIGJvcmRlci10LTIgXCIsXG4gICAgd2luZG93TGlzdDogXCJvdmVyZmxvdy15LXNjcm9sbCBzY3JvbGxiYXItbm9uZVwiLFxuICAgIHRyZWVUZXh0OiBcInRleHQtc2xhdGUtNTAwIG10LTEyXCIsXG4gICAgaW5wdXQ6IFwiIHJvdW5kZWQteGwgcC0yIHctWzkwdnddIG0tNCBtYi01IHB5LTMgYmctc2xhdGUtMjAwXCIsXG4gICAgcHJvZmlsZVBpYzogXCJyb3VuZGVkLWZ1bGxcIixcbiAgICBpbmZvQ29udGFpbmVyOiBcInctNS81IG1sLWF1dG8gaC1jb250YWluIGZsZXggZ2FwLTUgaXRlbXMtY2VudGVyIGNvbnRlbnQtY2VudGVyIG1sLTUgbXQtMFwiLFxuICAgIHVzZXJOYW1lOiBcInRleHQtM3hsXCIsXG4gICAgYWRkQnJhbmNoOiBcImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIGN1cnNvci1wb2ludGVyIG15LTUgbWItNVwiLFxuICAgIGJpb0NvbnRhaW5lcjogXCJ3LTQvNSBtci1hdXRvIHBsLTYgZmxleCBmbGV4LWNvbCBoLWNvbnRhaW4gcHktNiBmbGV4IGdhcC0yIFwiLFxuICAgIExvY2F0aW9uOiBcInRleHQtbCB0ZXh0LXNsYXRlLTYwMFwiLFxuICAgIGJpbzogXCJ0ZXh0LWxcIixcbiAgICBlZGl0YnV0dG9uOiAnZmxleCB0ZXh0LXNtIGFsaWduLWNlbnRlciBpdGVtcy1jZW50ZXIgYm9yZGVyLTEgYmctZ3JlZW4tMjAwIHJvdW5kZWQtZnVsbCBweC0zIHB5LTEgZmxleCB3LWF1dG8gbWwtNCBtYi00IGdhcC0yJyxcbiAgICBlZGl0YnV0dG9uY29udGFpbmVyOiAnZmxleCB3LWF1dG8nLFxuICAgIGRpc2NsYWltZXI6IFwidGV4dC14cyBwbC0xMiBwYi0wXCIsXG4gICAgcG9zdEZvcm06IFwiZmxleCBmbGV4LWNvbCBnYXAtNSB3LTQvNSBiZy15ZWxsb3ctMTAwIHJvdW5kZWQtbGcgcC01IG0tNSBteC01XCIsXG4gICAgcG9zdElucHV0OiBcImJnLWJsdWUtMjAwIG14LTEwIGFsaWduLWNlbnRlciByb3VuZGVkLW1kIHAtMSBweC0yIHJlc2l6ZS1ub25lXCIsXG4gICAgYnV0dG9uQ29udGFpbmVyOiBcImZsZXggbWwtYXV0byBtci0xMlwiLFxuICAgIHBvc3RCdXR0b246IFwiZmxleCBmbGV4LWVuZCBwLTMgdy1jb250YWluIG10LTUgYmctZ3JlZW4tNDAwIHRleHQtd2hpdGUgcm91bmRlZC1sZyBtYi0xMlwiLFxuICAgIGJyYW5jaEJ1YmJsZTogXCIgYnJlYWstd29yZHMgdGV4dC1sZywgaC1jb250YWluIHB5LTUgcHgtNSB3LTQvNSBteC0yNCBtYi0xMiBiZy13aGl0ZSByb3VuZGVkLW1kIGJvcmRlci0yXCIsXG4gICAgYnJhbmNoVGV4dDogXCJmbGV4IGJyZWFrLXdvcmRzIGJyZWFrLWFsbCB0ZXh0LW1kIHctY29udGFpblwiLFxuICAgIGJyYW5jaFRpbWU6IFwiZmxleCB0ZXh0LXJpZ2h0IHRleHQtc21cIixcbiAgICBjaGF0QnV0dG9uOiBcImJnLWJsdWUtMTAwIHAtMiBwYi0zIHJvdW5kZWQtZnVsbCBteS02IHB4LTVcIlxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkltYWdlIiwiUm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmZXRjaEJyYW5jaGVzIiwiVXNlcmNoYXRzIiwiZ2V0VXNlckRhdGEiLCJMaXN0aXRlbSIsInVzZXJDaGF0cyIsIkFjY291bnQiLCJyb3V0ZXIiLCJ1c2VyZGF0YSIsInNldFVzZXJkYXRhIiwiY2hhdGRhdGEiLCJzZXRDaGF0ZGF0YSIsImRhdGFmZWVkZXIiLCJidXR0b24iLCJzZXRCdXR0b24iLCJiaW8iLCJzZXRCaW8iLCJicmFuY2hlcyIsInNldEJyYW5jaGVzIiwidGV4dCIsInNldFRleHQiLCJ1cGxvYWQiLCJwdXNoIiwidGhlbiIsImRhdGEiLCJkcm9wZG93bklucHV0Iiwic2V0TmV3QnJhbmNoIiwidXBkYXRlQmlvIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGVzIiwicHJvZmlsZUNvbnRhaW5lciIsInNlY3Rpb24iLCJoZWFkZXIiLCJoZWFkZXJDb250YWluZXIiLCJpbmZvQ29udGFpbmVyIiwiaW1nIiwicHJvZmlsZVBpYyIsInNyYyIsImhlaWdodCIsIndpZHRoIiwidXNlck5hbWUiLCJtYXAiLCJvYiIsInVzZXJuYW1lIiwiYmlvQ29udGFpbmVyIiwiZWRpdGJ1dHRvbmNvbnRhaW5lciIsImVkaXRidXR0b24iLCJvbkNsaWNrIiwidXBkYXRlYmlvIiwiYnJhbmNoV2luZG93IiwiaHJlZiIsImNoYXRCdXR0b24iLCJ3aW5kb3dMaXN0Iiwib2JqIiwiY2hhdG5hbWUiLCJtZW1iZXJzIiwicGFydGljaXBhbnRzIiwiZWwiLCJ0cmVlVGV4dCIsImlucHV0IiwiYWRkQnJhbmNoIiwiTG9jYXRpb24iLCJkaXNjbGFpbWVyIiwicG9zdEZvcm0iLCJwb3N0SW5wdXQiLCJidXR0b25Db250YWluZXIiLCJwb3N0QnV0dG9uIiwiYnJhbmNoQnViYmxlIiwiYnJhbmNoVGV4dCIsImJyYW5jaFRpbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/Account.js\n"));

/***/ })

});