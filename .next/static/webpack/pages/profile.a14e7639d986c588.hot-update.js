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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Account; },\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Services_branch_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/branch_services */ \"./Services/branch_services.js\");\n/* harmony import */ var _Userchats__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Userchats */ \"./Components/Userchats.js\");\n/* harmony import */ var _Services_user_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/user_services */ \"./Services/user_services.js\");\n/* harmony import */ var _Listitem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Listitem */ \"./Components/Listitem.js\");\n/* harmony import */ var _Services_chat_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Services/chat_services */ \"./Services/chat_services.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nasync function getServerSideProps() {\n    var token = JSON.parse(localStorage.getItem(\"tokenKey\").replaceAll(\"\", \"\"));\n    const res = await fetch(\"http://localhost:5000/users/data\", {\n        method: \"GET\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"Authorization\": \"Bearer \".concat(token)\n        }\n    });\n    const data = await res.json();\n    return {\n        props: {\n            userdata: data\n        }\n    };\n}\nfunction Account() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [userdata, setUserdata] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [chatdata, setChatdata] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const datafeeder = [];\n    const [button, setButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [bio, setBio] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [branches, setBranches] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // message input stored here\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const upload = function() {\n        router.push(\"/upload\");\n    };\n    // useEffect(() => {\n    // // get user data service/function\n    // getUserData().then((data) => setUserdata(data))\n    // userChats().then((data) => setChatdata(data));\n    // }, [])\n    const dropdownInput = function() {\n        setNewBranch(true);\n    };\n    const updateBio = function() {\n        setButton(false);\n        (0,_Services_user_services__WEBPACK_IMPORTED_MODULE_7__.editBio)(bio).then(()=>location.reload());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: styles.profileContainer,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: styles.header\n            }, void 0, false, {\n                fileName: \"/home/charapp/Components/Account.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: styles.headerContainer,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: styles.infoContainer,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: styles.profilePic,\n                                src: \"https://i.pravatar.cc/300\",\n                                height: 70,\n                                width: 70\n                            }, void 0, false, {\n                                fileName: \"/home/charapp/Components/Account.js\",\n                                lineNumber: 96,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: styles.userName,\n                                children: userdata.map((ob)=>ob.username)\n                            }, void 0, false, {\n                                fileName: \"/home/charapp/Components/Account.js\",\n                                lineNumber: 97,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/charapp/Components/Account.js\",\n                        lineNumber: 95,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: styles.bioContainer,\n                        children: button ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            placeholder: \"new bio here\",\n                            onChange: (evt)=>setBio(evt.target.value),\n                            className: styles.editbio\n                        }, void 0, false, {\n                            fileName: \"/home/charapp/Components/Account.js\",\n                            lineNumber: 100,\n                            columnNumber: 25\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: styles.bio,\n                            children: userdata.map((ob)=>ob.bio)\n                        }, void 0, false, {\n                            fileName: \"/home/charapp/Components/Account.js\",\n                            lineNumber: 100,\n                            columnNumber: 139\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/charapp/Components/Account.js\",\n                        lineNumber: 99,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: styles.editbuttoncontainer,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: styles.editbutton,\n                                onClick: ()=>setButton(true),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        src: \"/editprofile.png\",\n                                        width: 20,\n                                        height: 17\n                                    }, void 0, false, {\n                                        fileName: \"/home/charapp/Components/Account.js\",\n                                        lineNumber: 103,\n                                        columnNumber: 84\n                                    }, this),\n                                    \"Edit\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/charapp/Components/Account.js\",\n                                lineNumber: 103,\n                                columnNumber: 17\n                            }, this),\n                            button ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: styles.editbutton,\n                                onClick: ()=>updateBio(),\n                                children: \"Save Changes\"\n                            }, void 0, false, {\n                                fileName: \"/home/charapp/Components/Account.js\",\n                                lineNumber: 104,\n                                columnNumber: 27\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n                            button ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: styles.cancelbutton,\n                                onClick: ()=>setButton(false),\n                                children: \"Cancel\"\n                            }, void 0, false, {\n                                fileName: \"/home/charapp/Components/Account.js\",\n                                lineNumber: 105,\n                                columnNumber: 27\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/charapp/Components/Account.js\",\n                        lineNumber: 102,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/charapp/Components/Account.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: styles.branchWindow,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/chat/createchat\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: styles.chatButton,\n                        children: \"Start Chat\"\n                    }, void 0, false, {\n                        fileName: \"/home/charapp/Components/Account.js\",\n                        lineNumber: 112,\n                        columnNumber: 39\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/charapp/Components/Account.js\",\n                    lineNumber: 112,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/charapp/Components/Account.js\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: styles.windowList,\n                children: chatdata.map((obj)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Listitem__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        chatname: obj.chatname,\n                        members: obj.participants.map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: el\n                            }, void 0, false, void 0, void 0))\n                    }, void 0, false, {\n                        fileName: \"/home/charapp/Components/Account.js\",\n                        lineNumber: 115,\n                        columnNumber: 28\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/charapp/Components/Account.js\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/charapp/Components/Account.js\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, this);\n}\n_s(Account, \"+S5syR4bW1+gFoBgc+3fpJ6war8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Account;\nconst styles = {\n    profileContainer: \" h-[82vh] w-[100vw] overflow-x-hidden flex flex-col \",\n    headerContainer: \"h-auto  w-100%  border-b-1 border-slate-200\",\n    branchWindow: \"shadow flex flex-col h-auto w-full align-center justify-center items-center border-t-2 \",\n    windowList: \"overflow-y-scroll scrollbar-none \",\n    treeText: \"text-slate-500 mt-12\",\n    editbio: \"p-1 rounded-full px-2 text-sm border-2 border-slate-200\",\n    input: \" rounded-xl p-2 w-[90vw] m-4 mb-5 py-3 bg-slate-200\",\n    profilePic: \"rounded-full\",\n    infoContainer: \"w-5/5 ml-auto h-contain flex gap-5 items-center content-center ml-5 mt-0\",\n    userName: \"text-3xl\",\n    addBranch: \"flex items-center gap-1 cursor-pointer my-5 mb-5\",\n    bioContainer: \"w-4/5 mr-auto pl-6 flex flex-col h-contain py-6 flex gap-2 \",\n    Location: \"text-l text-slate-600\",\n    bio: \"text-l\",\n    editbutton: \"flex text-sm align-center items-center border-1 bg-green-200 rounded-full px-3 py-1 flex w-auto ml-4 mb-4 gap-2\",\n    cancelbutton: \"flex text-sm align-center items-center border-1 bg-red-300 rounded-full px-3 py-1 flex w-auto ml-4 mb-4 gap-2\",\n    editbuttoncontainer: \"flex w-auto\",\n    disclaimer: \"text-xs pl-12 pb-0\",\n    postForm: \"flex flex-col gap-5 w-4/5 bg-yellow-100 rounded-lg p-5 m-5 mx-5\",\n    postInput: \"bg-blue-200 mx-10 align-center rounded-md p-1 px-2 resize-none\",\n    buttonContainer: \"flex ml-auto mr-12\",\n    postButton: \"flex flex-end p-3 w-contain mt-5 bg-green-400 text-white rounded-lg mb-12\",\n    branchBubble: \" break-words text-lg, h-contain py-5 px-5 w-4/5 mx-24 mb-12 bg-white rounded-md border-2\",\n    branchText: \"flex break-words break-all text-md w-contain\",\n    branchTime: \"flex text-right text-sm\",\n    chatButton: \"bg-blue-100 p-2 pb-3 rounded-full my-6 px-5\"\n};\nvar _c;\n$RefreshReg$(_c, \"Account\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WEMsaUJBQWlCO0lBQ2pCQyxZQUFZO0lBQ1pDLGNBQWM7SUFDZEMsWUFBWTtJQUNaQyxZQUFZO0lBQ1pqQixZQUFZO0FBQ2hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvQWNjb3VudC5qcz8yYTYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGZldGNoQnJhbmNoZXMgfSBmcm9tIFwiLi4vU2VydmljZXMvYnJhbmNoX3NlcnZpY2VzXCI7XG5pbXBvcnQgVXNlcmNoYXRzIGZyb20gJy4vVXNlcmNoYXRzJzsgXG5pbXBvcnQgeyBlZGl0QmlvLCBnZXRVc2VyRGF0YSB9IGZyb20gXCIuLi9TZXJ2aWNlcy91c2VyX3NlcnZpY2VzXCI7XG5cbmltcG9ydCBMaXN0aXRlbSBmcm9tIFwiLi9MaXN0aXRlbVwiO1xuaW1wb3J0IHsgdXNlckNoYXRzIH0gZnJvbSBcIi4uL1NlcnZpY2VzL2NoYXRfc2VydmljZXNcIjtcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICB2YXIgdG9rZW4gPSAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuS2V5XCIpLnJlcGxhY2VBbGwoXCJcIiwgJycpKSlcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC91c2Vycy9kYXRhJyx7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgICB9XG4gIH0pO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTsgIFxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICB1c2VyZGF0YSA6ZGF0YSxcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gIFxuICB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjY291bnQoKSB7XG5cbiAgXG5cbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cbmNvbnN0IFt1c2VyZGF0YSwgc2V0VXNlcmRhdGFdID0gdXNlU3RhdGUgKFtdKVxuY29uc3QgW2NoYXRkYXRhLCBzZXRDaGF0ZGF0YV0gPSB1c2VTdGF0ZShbXSlcbmNvbnN0IGRhdGFmZWVkZXIgPSBbXVxuXG5jb25zdCBbYnV0dG9uLCBzZXRCdXR0b25dID0gdXNlU3RhdGUoZmFsc2UpXG5cblxuY29uc3QgW2Jpbywgc2V0QmlvXSA9IHVzZVN0YXRlKClcblxuY29uc3QgW2JyYW5jaGVzLCBzZXRCcmFuY2hlc10gPSB1c2VTdGF0ZShbXSlcblxuLy8gbWVzc2FnZSBpbnB1dCBzdG9yZWQgaGVyZVxuY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoKVxuXG5jb25zdCB1cGxvYWQgPSBmdW5jdGlvbigpe1xuICByb3V0ZXIucHVzaCgnL3VwbG9hZCcpXG59XG5cblxuLy8gdXNlRWZmZWN0KCgpID0+IHtcblxuICBcbi8vIC8vIGdldCB1c2VyIGRhdGEgc2VydmljZS9mdW5jdGlvblxuLy8gZ2V0VXNlckRhdGEoKS50aGVuKChkYXRhKSA9PiBzZXRVc2VyZGF0YShkYXRhKSlcbi8vIHVzZXJDaGF0cygpLnRoZW4oKGRhdGEpID0+IHNldENoYXRkYXRhKGRhdGEpKTtcblxuICBcbi8vIH0sIFtdKVxuXG5cbmNvbnN0IGRyb3Bkb3duSW5wdXQgPSBmdW5jdGlvbigpIHtcblxuICBzZXROZXdCcmFuY2godHJ1ZSlcblxufVxuXG5jb25zdCB1cGRhdGVCaW8gPSBmdW5jdGlvbigpIHtcbiAgc2V0QnV0dG9uKGZhbHNlKVxuICBlZGl0QmlvKGJpbykudGhlbigoKSA9PiBsb2NhdGlvbi5yZWxvYWQoKSlcbn1cblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVDb250YWluZXJ9PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cblxuXG5cbiAgICAgIDwvc2VjdGlvbj5cblxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJDb250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlUGljfSBzcmM9XCJodHRwczovL2kucHJhdmF0YXIuY2MvMzAwXCIgaGVpZ2h0PXs3MH0gd2lkdGg9ezcwfS8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlck5hbWV9Pnt1c2VyZGF0YS5tYXAob2I9Pm9iLnVzZXJuYW1lKX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iaW9Db250YWluZXJ9PlxuICAgICAgICAgICAgICB7YnV0dG9uID8gPGlucHV0IHBsYWNlaG9sZGVyPVwibmV3IGJpbyBoZXJlXCIgb25DaGFuZ2U9e2V2dCA9PiBzZXRCaW8oZXZ0LnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRiaW99PjwvaW5wdXQ+OiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJpb30+e3VzZXJkYXRhLm1hcChvYj0+b2IuYmlvKX08L2Rpdj59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdGJ1dHRvbmNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0YnV0dG9ufSBvbkNsaWNrPXsoKSA9PiBzZXRCdXR0b24odHJ1ZSl9PjxJbWFnZSBzcmM9XCIvZWRpdHByb2ZpbGUucG5nXCIgd2lkdGg9ezIwfSBoZWlnaHQ9ezE3fT48L0ltYWdlPkVkaXQ8L2Rpdj5cbiAgICAgICAgICAgICAgICB7YnV0dG9uID8gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0YnV0dG9ufSBvbkNsaWNrPXsoKSA9PiB1cGRhdGVCaW8oKX0+U2F2ZSBDaGFuZ2VzPC9kaXY+IDogPD48Lz59XG4gICAgICAgICAgICAgICAge2J1dHRvbiA/IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FuY2VsYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiBzZXRCdXR0b24oZmFsc2UpfT5DYW5jZWw8L2Rpdj4gOiA8PjwvPn1cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICBcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmJyYW5jaFdpbmRvd30+XG4gICAgICAgIDxMaW5rIGhyZWY9Jy9jaGF0L2NyZWF0ZWNoYXQnPjxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdEJ1dHRvbn0+U3RhcnQgQ2hhdDwvZGl2PjwvTGluaz5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLndpbmRvd0xpc3R9PlxuICAgICAge2NoYXRkYXRhLm1hcChvYmogPT4gPExpc3RpdGVtIGNoYXRuYW1lPXtvYmouY2hhdG5hbWV9IG1lbWJlcnM9e29iai5wYXJ0aWNpcGFudHMubWFwKGVsPT48ZGl2PntlbH08L2Rpdj4pfS8+KX1cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIHsvKiA8Zm9ybSBjbGFzc05hbWU9XCJiZy1ibHVlLTUwXCI+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gcGxhY2Vob2xkZXI9XCJUeXBlIGEgbWVzc2FnZS4uLlwiPjwvaW5wdXQ+XG4gICAgICA8L2Zvcm0+ICovfVxuICAgICAgXG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBwcm9maWxlQ29udGFpbmVyOiBcIiBoLVs4MnZoXSB3LVsxMDB2d10gb3ZlcmZsb3cteC1oaWRkZW4gZmxleCBmbGV4LWNvbCBcIixcbiAgICBoZWFkZXJDb250YWluZXI6IFwiaC1hdXRvICB3LTEwMCUgIGJvcmRlci1iLTEgYm9yZGVyLXNsYXRlLTIwMFwiLFxuICAgIGJyYW5jaFdpbmRvdzogXCJzaGFkb3cgZmxleCBmbGV4LWNvbCBoLWF1dG8gdy1mdWxsIGFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYm9yZGVyLXQtMiBcIixcbiAgICB3aW5kb3dMaXN0OiBcIm92ZXJmbG93LXktc2Nyb2xsIHNjcm9sbGJhci1ub25lIFwiLFxuICAgIHRyZWVUZXh0OiBcInRleHQtc2xhdGUtNTAwIG10LTEyXCIsXG4gICAgZWRpdGJpbzogXCJwLTEgcm91bmRlZC1mdWxsIHB4LTIgdGV4dC1zbSBib3JkZXItMiBib3JkZXItc2xhdGUtMjAwXCIsXG4gICAgaW5wdXQ6IFwiIHJvdW5kZWQteGwgcC0yIHctWzkwdnddIG0tNCBtYi01IHB5LTMgYmctc2xhdGUtMjAwXCIsXG4gICAgcHJvZmlsZVBpYzogXCJyb3VuZGVkLWZ1bGxcIixcbiAgICBpbmZvQ29udGFpbmVyOiBcInctNS81IG1sLWF1dG8gaC1jb250YWluIGZsZXggZ2FwLTUgaXRlbXMtY2VudGVyIGNvbnRlbnQtY2VudGVyIG1sLTUgbXQtMFwiLFxuICAgIHVzZXJOYW1lOiBcInRleHQtM3hsXCIsXG4gICAgYWRkQnJhbmNoOiBcImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIGN1cnNvci1wb2ludGVyIG15LTUgbWItNVwiLFxuICAgIGJpb0NvbnRhaW5lcjogXCJ3LTQvNSBtci1hdXRvIHBsLTYgZmxleCBmbGV4LWNvbCBoLWNvbnRhaW4gcHktNiBmbGV4IGdhcC0yIFwiLFxuICAgIExvY2F0aW9uOiBcInRleHQtbCB0ZXh0LXNsYXRlLTYwMFwiLFxuICAgIGJpbzogXCJ0ZXh0LWxcIixcbiAgICBlZGl0YnV0dG9uOiAnZmxleCB0ZXh0LXNtIGFsaWduLWNlbnRlciBpdGVtcy1jZW50ZXIgYm9yZGVyLTEgYmctZ3JlZW4tMjAwIHJvdW5kZWQtZnVsbCBweC0zIHB5LTEgZmxleCB3LWF1dG8gbWwtNCBtYi00IGdhcC0yJyxcbiAgICBjYW5jZWxidXR0b246ICdmbGV4IHRleHQtc20gYWxpZ24tY2VudGVyIGl0ZW1zLWNlbnRlciBib3JkZXItMSBiZy1yZWQtMzAwIHJvdW5kZWQtZnVsbCBweC0zIHB5LTEgZmxleCB3LWF1dG8gbWwtNCBtYi00IGdhcC0yJyxcblxuICAgIGVkaXRidXR0b25jb250YWluZXI6ICdmbGV4IHctYXV0bycsXG4gICAgZGlzY2xhaW1lcjogXCJ0ZXh0LXhzIHBsLTEyIHBiLTBcIixcbiAgICBwb3N0Rm9ybTogXCJmbGV4IGZsZXgtY29sIGdhcC01IHctNC81IGJnLXllbGxvdy0xMDAgcm91bmRlZC1sZyBwLTUgbS01IG14LTVcIixcbiAgICBwb3N0SW5wdXQ6IFwiYmctYmx1ZS0yMDAgbXgtMTAgYWxpZ24tY2VudGVyIHJvdW5kZWQtbWQgcC0xIHB4LTIgcmVzaXplLW5vbmVcIixcbiAgICBidXR0b25Db250YWluZXI6IFwiZmxleCBtbC1hdXRvIG1yLTEyXCIsXG4gICAgcG9zdEJ1dHRvbjogXCJmbGV4IGZsZXgtZW5kIHAtMyB3LWNvbnRhaW4gbXQtNSBiZy1ncmVlbi00MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnIG1iLTEyXCIsXG4gICAgYnJhbmNoQnViYmxlOiBcIiBicmVhay13b3JkcyB0ZXh0LWxnLCBoLWNvbnRhaW4gcHktNSBweC01IHctNC81IG14LTI0IG1iLTEyIGJnLXdoaXRlIHJvdW5kZWQtbWQgYm9yZGVyLTJcIixcbiAgICBicmFuY2hUZXh0OiBcImZsZXggYnJlYWstd29yZHMgYnJlYWstYWxsIHRleHQtbWQgdy1jb250YWluXCIsXG4gICAgYnJhbmNoVGltZTogXCJmbGV4IHRleHQtcmlnaHQgdGV4dC1zbVwiLFxuICAgIGNoYXRCdXR0b246IFwiYmctYmx1ZS0xMDAgcC0yIHBiLTMgcm91bmRlZC1mdWxsIG15LTYgcHgtNVwiXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiSW1hZ2UiLCJSb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZldGNoQnJhbmNoZXMiLCJVc2VyY2hhdHMiLCJlZGl0QmlvIiwiZ2V0VXNlckRhdGEiLCJMaXN0aXRlbSIsInVzZXJDaGF0cyIsImdldFNlcnZlclNpZGVQcm9wcyIsInRva2VuIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlcGxhY2VBbGwiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJkYXRhIiwianNvbiIsInByb3BzIiwidXNlcmRhdGEiLCJBY2NvdW50Iiwicm91dGVyIiwic2V0VXNlcmRhdGEiLCJjaGF0ZGF0YSIsInNldENoYXRkYXRhIiwiZGF0YWZlZWRlciIsImJ1dHRvbiIsInNldEJ1dHRvbiIsImJpbyIsInNldEJpbyIsImJyYW5jaGVzIiwic2V0QnJhbmNoZXMiLCJ0ZXh0Iiwic2V0VGV4dCIsInVwbG9hZCIsInB1c2giLCJkcm9wZG93bklucHV0Iiwic2V0TmV3QnJhbmNoIiwidXBkYXRlQmlvIiwidGhlbiIsImxvY2F0aW9uIiwicmVsb2FkIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGVzIiwicHJvZmlsZUNvbnRhaW5lciIsInNlY3Rpb24iLCJoZWFkZXIiLCJoZWFkZXJDb250YWluZXIiLCJpbmZvQ29udGFpbmVyIiwiaW1nIiwicHJvZmlsZVBpYyIsInNyYyIsImhlaWdodCIsIndpZHRoIiwidXNlck5hbWUiLCJtYXAiLCJvYiIsInVzZXJuYW1lIiwiYmlvQ29udGFpbmVyIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZXZ0IiwidGFyZ2V0IiwidmFsdWUiLCJlZGl0YmlvIiwiZWRpdGJ1dHRvbmNvbnRhaW5lciIsImVkaXRidXR0b24iLCJvbkNsaWNrIiwiY2FuY2VsYnV0dG9uIiwiYnJhbmNoV2luZG93IiwiaHJlZiIsImNoYXRCdXR0b24iLCJ3aW5kb3dMaXN0Iiwib2JqIiwiY2hhdG5hbWUiLCJtZW1iZXJzIiwicGFydGljaXBhbnRzIiwiZWwiLCJ0cmVlVGV4dCIsImFkZEJyYW5jaCIsIkxvY2F0aW9uIiwiZGlzY2xhaW1lciIsInBvc3RGb3JtIiwicG9zdElucHV0IiwiYnV0dG9uQ29udGFpbmVyIiwicG9zdEJ1dHRvbiIsImJyYW5jaEJ1YmJsZSIsImJyYW5jaFRleHQiLCJicmFuY2hUaW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Account.js\n"));

/***/ })

});