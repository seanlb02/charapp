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

/***/ "./Services/chat_services.js":
/*!***********************************!*\
  !*** ./Services/chat_services.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chatData\": function() { return /* binding */ chatData; },\n/* harmony export */   \"newChat\": function() { return /* binding */ newChat; },\n/* harmony export */   \"theirChats\": function() { return /* binding */ theirChats; },\n/* harmony export */   \"userChats\": function() { return /* binding */ userChats; }\n/* harmony export */ });\nconst newChat = async function(chatname, members) {\n    const array = members.filter((el)=>el != \"undefined\");\n    const body = {\n        chatname: \"\".concat(chatname),\n        members: array\n    };\n    var token = JSON.parse(localStorage.getItem(\"tokenKey\").replaceAll(\"\", \"\"));\n    const res = await fetch(\"http://localhost:5000/chats/create\", {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"Authorization\": \"Bearer \".concat(token)\n        },\n        body: JSON.stringify(body)\n    });\n    return res.json();\n};\nconst chatData = async function(chatname) {\n    var token = JSON.parse(localStorage.getItem(\"tokenKey\").replaceAll(\"\", \"\"));\n    const res = await fetch(\"http://localhost:5000/chats/chatdata/\".concat(chatname), {\n        method: \"GET\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"Authorization\": \"Bearer \".concat(token)\n        }\n    });\n    return res.json();\n};\nconst userChats = async function() {\n    var token = JSON.parse(localStorage.getItem(\"tokenKey\").replaceAll(\"\", \"\"));\n    const res = await fetch(\"http://localhost:5000/chats/userchats\", {\n        method: \"GET\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"Authorization\": \"Bearer \".concat(token)\n        }\n    });\n    return res.json();\n};\nconst theirChats = async function(user) {\n    var token = JSON.parse(localStorage.getItem(\"tokenKey\").replaceAll(\"\", \"\"));\n    const res = await fetch(\"http://localhost:5000/chats/theirchats/\".concat(their), {\n        method: \"GET\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"Authorization\": \"Bearer \".concat(token)\n        }\n    });\n    return res.json();\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9TZXJ2aWNlcy9jaGF0X3NlcnZpY2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFTyxNQUFNQSxVQUFVLGVBQWVDLFFBQVEsRUFBRUMsT0FBTyxFQUFFO0lBQ3pELE1BQU1DLFFBQVFELFFBQVFFLE1BQU0sQ0FBQyxDQUFDQyxLQUFPQSxNQUFNO0lBQzNDLE1BQU1DLE9BQU87UUFBQ0wsVUFBVSxHQUFZLE9BQVRBO1FBQVlDLFNBQVNDO0lBQUs7SUFDckQsSUFBSUksUUFBU0MsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUMsWUFBWUMsVUFBVSxDQUFDLElBQUk7SUFFcEUsTUFBTUMsTUFBTSxNQUFNQyxNQUFPLHNDQUFzQztRQUMzREMsUUFBUTtRQUNSQyxTQUFTO1lBQ0wsZ0JBQWdCO1lBQ2hCLGlCQUFpQixVQUFnQixPQUFOVDtRQUMvQjtRQUNBRCxNQUFNRSxLQUFLUyxTQUFTLENBQUNYO0lBRXpCO0lBQ0EsT0FBT08sSUFBSUssSUFBSTtBQUVuQixFQUFDO0FBRU0sTUFBTUMsV0FBVyxlQUFlbEIsUUFBUSxFQUFFO0lBQzdDLElBQUlNLFFBQVNDLEtBQUtDLEtBQUssQ0FBQ0MsYUFBYUMsT0FBTyxDQUFDLFlBQVlDLFVBQVUsQ0FBQyxJQUFJO0lBRXBFLE1BQU1DLE1BQU0sTUFBTUMsTUFBTyx3Q0FBaUQsT0FBVGIsV0FBWTtRQUN6RWMsUUFBUTtRQUNSQyxTQUFTO1lBQ0wsZ0JBQWdCO1lBQ2hCLGlCQUFpQixVQUFnQixPQUFOVDtRQUMvQjtJQUVKO0lBQ0EsT0FBT00sSUFBSUssSUFBSTtBQUN2QixFQUFDO0FBRU0sTUFBTUUsWUFBWSxpQkFBaUI7SUFDdEMsSUFBSWIsUUFBU0MsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUMsWUFBWUMsVUFBVSxDQUFDLElBQUk7SUFFeEUsTUFBTUMsTUFBTSxNQUFNQyxNQUFRLHlDQUF3QztRQUM5REMsUUFBUTtRQUNSQyxTQUFTO1lBQ0wsZ0JBQWdCO1lBQ2hCLGlCQUFpQixVQUFnQixPQUFOVDtRQUMvQjtJQUVKO0lBQ0EsT0FBT00sSUFBSUssSUFBSTtBQUNuQixFQUFDO0FBRU0sTUFBTUcsYUFBYSxlQUFlQyxJQUFJLEVBQUU7SUFDM0MsSUFBSWYsUUFBU0MsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUMsWUFBWUMsVUFBVSxDQUFDLElBQUk7SUFFeEUsTUFBTUMsTUFBTSxNQUFNQyxNQUFPLDBDQUFnRCxPQUFOUyxRQUFTO1FBQ3hFUixRQUFRO1FBQ1JDLFNBQVM7WUFDTCxnQkFBZ0I7WUFDaEIsaUJBQWlCLFVBQWdCLE9BQU5UO1FBQy9CO0lBRUo7SUFDQSxPQUFPTSxJQUFJSyxJQUFJO0FBQ25CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vU2VydmljZXMvY2hhdF9zZXJ2aWNlcy5qcz9hNTZiIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZXhwb3J0IGNvbnN0IG5ld0NoYXQgPSBhc3luYyBmdW5jdGlvbihjaGF0bmFtZSwgbWVtYmVycykge1xyXG5jb25zdCBhcnJheSA9IG1lbWJlcnMuZmlsdGVyKChlbCkgPT4gZWwgIT0gXCJ1bmRlZmluZWRcIilcclxuY29uc3QgYm9keSA9IHtjaGF0bmFtZTogYCR7Y2hhdG5hbWV9YCwgbWVtYmVyczogYXJyYXl9XHJcbnZhciB0b2tlbiA9IChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5LZXlcIikucmVwbGFjZUFsbChcIlwiLCAnJykpKVxyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoICgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2NoYXRzL2NyZWF0ZScsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KVxyXG5cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2hhdERhdGEgPSBhc3luYyBmdW5jdGlvbihjaGF0bmFtZSkge1xyXG4gICAgdmFyIHRva2VuID0gKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlbktleVwiKS5yZXBsYWNlQWxsKFwiXCIsICcnKSkpO1xyXG5cclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCAoYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9jaGF0cy9jaGF0ZGF0YS8ke2NoYXRuYW1lfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlckNoYXRzID0gYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgdG9rZW4gPSAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuS2V5XCIpLnJlcGxhY2VBbGwoXCJcIiwgJycpKSk7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2ggKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvY2hhdHMvdXNlcmNoYXRzYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXMuanNvbigpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdGhlaXJDaGF0cyA9IGFzeW5jIGZ1bmN0aW9uKHVzZXIpIHtcclxuICAgIHZhciB0b2tlbiA9IChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5LZXlcIikucmVwbGFjZUFsbChcIlwiLCAnJykpKTtcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCAoYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9jaGF0cy90aGVpcmNoYXRzLyR7dGhlaXJ9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXMuanNvbigpO1xyXG59Il0sIm5hbWVzIjpbIm5ld0NoYXQiLCJjaGF0bmFtZSIsIm1lbWJlcnMiLCJhcnJheSIsImZpbHRlciIsImVsIiwiYm9keSIsInRva2VuIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlcGxhY2VBbGwiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJzdHJpbmdpZnkiLCJqc29uIiwiY2hhdERhdGEiLCJ1c2VyQ2hhdHMiLCJ0aGVpckNoYXRzIiwidXNlciIsInRoZWlyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Services/chat_services.js\n"));

/***/ })

});