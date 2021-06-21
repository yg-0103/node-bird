module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9hbnRkL2Rpc3QvYW50ZC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/antd/dist/antd.css\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_store_configureStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/store/configureStore */ \"./src/store/configureStore.ts\");\n/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-saga */ \"next-redux-saga\");\n/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/yeongoo/Documents/dev/node-bird/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nconst App = ({\n  Component,\n  pageProps\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"title\", {\n        children: \"Node Bird\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_src_store_configureStore__WEBPACK_IMPORTED_MODULE_2__[\"default\"].withRedux(next_redux_saga__WEBPACK_IMPORTED_MODULE_3___default()(App)));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJ3aXRoUmVkdXhTYWdhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7OztBQUVBLE1BQU1BLEdBQUcsR0FBRyxDQUFDO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFELEtBQXdDO0FBQ2xELHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRSxxRUFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQSxrQkFERjtBQVFELENBVEQ7O0FBV2VDLGdJQUFPLENBQUNDLFNBQVIsQ0FBa0JDLHNEQUFhLENBQUNMLEdBQUQsQ0FBL0IsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3NyYy9zdG9yZS9jb25maWd1cmVTdG9yZSc7XG5pbXBvcnQgd2l0aFJlZHV4U2FnYSBmcm9tICduZXh0LXJlZHV4LXNhZ2EnO1xuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk5vZGUgQmlyZDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eCh3aXRoUmVkdXhTYWdhKEFwcCkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./src/modules/index.ts":
/*!******************************!*\
  !*** ./src/modules/index.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ \"./src/modules/user.ts\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ \"./src/modules/post.ts\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  index: (state = {}, action) => {\n    switch (action.type) {\n      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__[\"HYDRATE\"]:\n        return _objectSpread(_objectSpread({}, state), action.payload);\n\n      default:\n        return state;\n    }\n  },\n  user: _user__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  post: _post__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9pbmRleC50cz82MDBmIl0sIm5hbWVzIjpbInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwicGF5bG9hZCIsInVzZXIiLCJ1c2VyUmVkdWNlciIsInBvc3QiLCJwb3N0UmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsV0FBVyxHQUFHQyw2REFBZSxDQUFDO0FBQ2xDQyxPQUFLLEVBQUUsQ0FBQ0MsS0FBVSxHQUFHLEVBQWQsRUFBa0JDLE1BQWxCLEtBQXdDO0FBQzdDLFlBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFdBQUtDLDBEQUFMO0FBQ0UsK0NBQVlILEtBQVosR0FBc0JDLE1BQU0sQ0FBQ0csT0FBN0I7O0FBQ0Y7QUFDRSxlQUFPSixLQUFQO0FBSko7QUFNRCxHQVJpQztBQVNsQ0ssTUFBSSxFQUFFQyw2Q0FUNEI7QUFVbENDLE1BQUksRUFBRUMsNkNBQVdBO0FBVmlCLENBQUQsQ0FBbkM7QUFhZVgsMEVBQWYiLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycywgQW55QWN0aW9uIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHVzZXJSZWR1Y2VyIGZyb20gJy4vdXNlcic7XG5pbXBvcnQgcG9zdFJlZHVjZXIgZnJvbSAnLi9wb3N0JztcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGluZGV4OiAoc3RhdGU6IGFueSA9IHt9LCBhY3Rpb246IEFueUFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgSFlEUkFURTpcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9LFxuICB1c2VyOiB1c2VyUmVkdWNlcixcbiAgcG9zdDogcG9zdFJlZHVjZXIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG5cbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHJvb3RSZWR1Y2VyPjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/index.ts\n");

/***/ }),

/***/ "./src/modules/post.ts":
/*!*****************************!*\
  !*** ./src/modules/post.ts ***!
  \*****************************/
/*! exports provided: ADD_POST, addPost, addPostSuccess, addPostError, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST\", function() { return ADD_POST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPostSuccess\", function() { return addPostSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPostError\", function() { return addPostError; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst ADD_POST = 'ADD_POST';\nconst ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';\nconst ADD_POST_ERROR = 'ADD_POST_ERROR';\nconst addPost = {\n  type: ADD_POST\n};\nconst addPostSuccess = () => ({\n  type: ADD_POST_SUCCESS\n});\nconst addPostError = e => ({\n  type: ADD_POST_ERROR,\n  payload: e\n});\nconst initialState = {\n  mainPosts: [{\n    id: 1,\n    user: {\n      id: 1,\n      nickname: 'yg'\n    },\n    content: '첫 번째 게시글 #해시태그 #익스프레스',\n    images: [{\n      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?update=20180726'\n    }, {\n      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?update=20180726'\n    }, {\n      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?update=20180726'\n    }],\n    comments: [{\n      user: {\n        nickname: 'sr'\n      },\n      content: 'srsrrsrsr'\n    }, {\n      user: {\n        nickname: 'ed'\n      },\n      content: 'ededed'\n    }]\n  }],\n  imagePath: [],\n  postAdded: false\n};\nconst dummyPost = {\n  id: 2,\n  content: '더미데이터',\n  user: {\n    id: 1,\n    nickname: '연구'\n  },\n  images: [],\n  comments: []\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case ADD_POST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mainPosts: [dummyPost, ...state.mainPosts],\n        postAdded: true\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9wb3N0LnRzP2QxZDAiXSwibmFtZXMiOlsiQUREX1BPU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRVJST1IiLCJhZGRQb3N0IiwidHlwZSIsImFkZFBvc3RTdWNjZXNzIiwiYWRkUG9zdEVycm9yIiwiZSIsInBheWxvYWQiLCJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsInVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJpbWFnZXMiLCJzcmMiLCJjb21tZW50cyIsImltYWdlUGF0aCIsInBvc3RBZGRlZCIsImR1bW15UG9zdCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHTyxNQUFNQSxRQUFRLEdBQUcsVUFBakI7QUFDUCxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBRU8sTUFBTUMsT0FBTyxHQUFHO0FBQ3JCQyxNQUFJLEVBQUVKO0FBRGUsQ0FBaEI7QUFHQSxNQUFNSyxjQUFjLEdBQUcsT0FBTztBQUFFRCxNQUFJLEVBQUVIO0FBQVIsQ0FBUCxDQUF2QjtBQUNBLE1BQU1LLFlBQVksR0FBSUMsQ0FBRCxLQUFlO0FBQ3pDSCxNQUFJLEVBQUVGLGNBRG1DO0FBRXpDTSxTQUFPLEVBQUVEO0FBRmdDLENBQWYsQ0FBckI7QUFLUCxNQUFNRSxZQUFzQixHQUFHO0FBQzdCQyxXQUFTLEVBQUUsQ0FDVDtBQUNFQyxNQUFFLEVBQUUsQ0FETjtBQUVFQyxRQUFJLEVBQUU7QUFDSkQsUUFBRSxFQUFFLENBREE7QUFFSkUsY0FBUSxFQUFFO0FBRk4sS0FGUjtBQU1FQyxXQUFPLEVBQUUsdUJBTlg7QUFPRUMsVUFBTSxFQUFFLENBQ047QUFDRUMsU0FBRyxFQUNEO0FBRkosS0FETSxFQUtOO0FBQ0VBLFNBQUcsRUFDRDtBQUZKLEtBTE0sRUFTTjtBQUNFQSxTQUFHLEVBQ0Q7QUFGSixLQVRNLENBUFY7QUFxQkVDLFlBQVEsRUFBRSxDQUNSO0FBQ0VMLFVBQUksRUFBRTtBQUNKQyxnQkFBUSxFQUFFO0FBRE4sT0FEUjtBQUlFQyxhQUFPLEVBQUU7QUFKWCxLQURRLEVBT1I7QUFDRUYsVUFBSSxFQUFFO0FBQ0pDLGdCQUFRLEVBQUU7QUFETixPQURSO0FBSUVDLGFBQU8sRUFBRTtBQUpYLEtBUFE7QUFyQlosR0FEUyxDQURrQjtBQXVDN0JJLFdBQVMsRUFBRSxFQXZDa0I7QUF3QzdCQyxXQUFTLEVBQUU7QUF4Q2tCLENBQS9CO0FBMkNBLE1BQU1DLFNBQVMsR0FBRztBQUNoQlQsSUFBRSxFQUFFLENBRFk7QUFFaEJHLFNBQU8sRUFBRSxPQUZPO0FBR2hCRixNQUFJLEVBQUU7QUFDSkQsTUFBRSxFQUFFLENBREE7QUFFSkUsWUFBUSxFQUFFO0FBRk4sR0FIVTtBQU9oQkUsUUFBTSxFQUFFLEVBUFE7QUFRaEJFLFVBQVEsRUFBRTtBQVJNLENBQWxCOztBQVdBLE1BQU1JLE9BQU8sR0FBRyxDQUFDQyxLQUFLLEdBQUdiLFlBQVQsRUFBdUJjLE1BQXZCLEtBQXVEO0FBQ3JFLFVBQVFBLE1BQU0sQ0FBQ25CLElBQWY7QUFDRSxTQUFLSixRQUFMO0FBQ0UsNkNBQ0tzQixLQURMO0FBRUVaLGlCQUFTLEVBQUUsQ0FBQ1UsU0FBRCxFQUFZLEdBQUdFLEtBQUssQ0FBQ1osU0FBckIsQ0FGYjtBQUdFUyxpQkFBUyxFQUFFO0FBSGI7O0FBS0Y7QUFDRSxhQUFPRyxLQUFQO0FBUko7QUFVRCxDQVhEOztBQWFlRCxzRUFBZiIsImZpbGUiOiIuL3NyYy9tb2R1bGVzL3Bvc3QudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBQb3N0RGF0YSB9IGZyb20gJy4uL3R5cGVzL3Bvc3QnO1xuXG5leHBvcnQgY29uc3QgQUREX1BPU1QgPSAnQUREX1BPU1QnIGFzIGNvbnN0O1xuY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJyBhcyBjb25zdDtcbmNvbnN0IEFERF9QT1NUX0VSUk9SID0gJ0FERF9QT1NUX0VSUk9SJyBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSB7XG4gIHR5cGU6IEFERF9QT1NULFxufTtcbmV4cG9ydCBjb25zdCBhZGRQb3N0U3VjY2VzcyA9ICgpID0+ICh7IHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MgfSk7XG5leHBvcnQgY29uc3QgYWRkUG9zdEVycm9yID0gKGU6IEVycm9yKSA9PiAoe1xuICB0eXBlOiBBRERfUE9TVF9FUlJPUixcbiAgcGF5bG9hZDogZSxcbn0pO1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IFBvc3REYXRhID0ge1xuICBtYWluUG9zdHM6IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIHVzZXI6IHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5pY2tuYW1lOiAneWcnLFxuICAgICAgfSxcbiAgICAgIGNvbnRlbnQ6ICfssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICPsnbXsiqTtlITroIjsiqQnLFxuICAgICAgaW1hZ2VzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAnaHR0cHM6Ly9ib29rdGh1bWItcGhpbmYucHN0YXRpYy5uZXQvY292ZXIvMTM3Lzk5NS8xMzc5OTU4NS5qcGc/dXBkYXRlPTIwMTgwNzI2JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICdodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91cGRhdGU9MjAxODA3MjYnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3JjOlxuICAgICAgICAgICAgJ2h0dHBzOi8vYm9va3RodW1iLXBoaW5mLnBzdGF0aWMubmV0L2NvdmVyLzEzNy85OTUvMTM3OTk1ODUuanBnP3VwZGF0ZT0yMDE4MDcyNicsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgY29tbWVudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgIG5pY2tuYW1lOiAnc3InLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGVudDogJ3Nyc3Jyc3JzcicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICBuaWNrbmFtZTogJ2VkJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRlbnQ6ICdlZGVkZWQnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxuICBpbWFnZVBhdGg6IFtdLFxuICBwb3N0QWRkZWQ6IGZhbHNlLFxufTtcblxuY29uc3QgZHVtbXlQb3N0ID0ge1xuICBpZDogMixcbiAgY29udGVudDogJ+uNlOuvuOuNsOydtO2EsCcsXG4gIHVzZXI6IHtcbiAgICBpZDogMSxcbiAgICBuaWNrbmFtZTogJ+yXsOq1rCcsXG4gIH0sXG4gIGltYWdlczogW10sXG4gIGNvbW1lbnRzOiBbXSxcbn07XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogQW55QWN0aW9uKTogUG9zdERhdGEgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBRERfUE9TVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb3N0c10sXG4gICAgICAgIHBvc3RBZGRlZDogdHJ1ZSxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/post.ts\n");

/***/ }),

/***/ "./src/modules/user.ts":
/*!*****************************!*\
  !*** ./src/modules/user.ts ***!
  \*****************************/
/*! exports provided: LOG_IN, LOG_OUT, loginAction, loginActionSuccess, loginActionError, logoutAction, logoutActionSuccess, logoutActionError, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN\", function() { return LOG_IN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT\", function() { return LOG_OUT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginAction\", function() { return loginAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginActionSuccess\", function() { return loginActionSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginActionError\", function() { return loginActionError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutAction\", function() { return logoutAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutActionSuccess\", function() { return logoutActionSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutActionError\", function() { return logoutActionError; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst LOG_IN = 'LOG_IN';\nconst LOG_IN_SUCCESS = 'LOG_IN_SUCESS';\nconst LOG_IN_ERROR = 'LOG_IN_ERROR';\nconst LOG_OUT = 'LOG_OUT';\nconst LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';\nconst LOG_OUT_ERROR = 'LOG_OUT_ERROR';\nconst loginAction = user => ({\n  type: LOG_IN,\n  payload: user\n});\nconst loginActionSuccess = data => ({\n  type: LOG_IN_SUCCESS,\n  payload: data\n});\nconst loginActionError = e => ({\n  type: LOG_IN_ERROR,\n  payload: e\n});\nconst logoutAction = () => ({\n  type: LOG_OUT\n});\nconst logoutActionSuccess = () => ({\n  type: LOG_OUT_SUCCESS\n});\nconst logoutActionError = () => ({\n  type: LOG_OUT_ERROR\n});\nconst initialState = {\n  isLogin: false,\n  loading: false,\n  me: null,\n  signUpData: {},\n  loginData: {}\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case LOG_IN:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: true\n      });\n\n    case LOG_IN_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLogin: true,\n        loading: false,\n        me: _objectSpread(_objectSpread({}, action.payload), {}, {\n          nickname: 'yg'\n        })\n      });\n\n    case LOG_IN_ERROR:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: false,\n        isLogin: false,\n        me: action.payload\n      });\n\n    case LOG_OUT:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: true\n      });\n\n    case LOG_OUT_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: false,\n        isLogin: false,\n        me: null\n      });\n\n    case LOG_OUT_ERROR:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: false\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy91c2VyLnRzP2U5NmQiXSwibmFtZXMiOlsiTE9HX0lOIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRVJST1IiLCJMT0dfT1VUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9FUlJPUiIsImxvZ2luQWN0aW9uIiwidXNlciIsInR5cGUiLCJwYXlsb2FkIiwibG9naW5BY3Rpb25TdWNjZXNzIiwiZGF0YSIsImxvZ2luQWN0aW9uRXJyb3IiLCJlIiwibG9nb3V0QWN0aW9uIiwibG9nb3V0QWN0aW9uU3VjY2VzcyIsImxvZ291dEFjdGlvbkVycm9yIiwiaW5pdGlhbFN0YXRlIiwiaXNMb2dpbiIsImxvYWRpbmciLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJuaWNrbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBR08sTUFBTUEsTUFBTSxHQUFHLFFBQWY7QUFDUCxNQUFNQyxjQUFjLEdBQUcsZUFBdkI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFFTyxNQUFNQyxPQUFPLEdBQUcsU0FBaEI7QUFDUCxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLGVBQXRCO0FBRU8sTUFBTUMsV0FBVyxHQUFJQyxJQUFELEtBQWdCO0FBQUVDLE1BQUksRUFBRVIsTUFBUjtBQUFnQlMsU0FBTyxFQUFFRjtBQUF6QixDQUFoQixDQUFwQjtBQUNBLE1BQU1HLGtCQUFrQixHQUFJQyxJQUFELEtBQWdCO0FBQ2hESCxNQUFJLEVBQUVQLGNBRDBDO0FBRWhEUSxTQUFPLEVBQUVFO0FBRnVDLENBQWhCLENBQTNCO0FBSUEsTUFBTUMsZ0JBQWdCLEdBQUlDLENBQUQsS0FBZTtBQUM3Q0wsTUFBSSxFQUFFTixZQUR1QztBQUU3Q08sU0FBTyxFQUFFSTtBQUZvQyxDQUFmLENBQXpCO0FBS0EsTUFBTUMsWUFBWSxHQUFHLE9BQU87QUFBRU4sTUFBSSxFQUFFTDtBQUFSLENBQVAsQ0FBckI7QUFDQSxNQUFNWSxtQkFBbUIsR0FBRyxPQUFPO0FBQUVQLE1BQUksRUFBRUo7QUFBUixDQUFQLENBQTVCO0FBQ0EsTUFBTVksaUJBQWlCLEdBQUcsT0FBTztBQUFFUixNQUFJLEVBQUVIO0FBQVIsQ0FBUCxDQUExQjtBQUVQLE1BQU1ZLFlBQXNCLEdBQUc7QUFDN0JDLFNBQU8sRUFBRSxLQURvQjtBQUU3QkMsU0FBTyxFQUFFLEtBRm9CO0FBRzdCQyxJQUFFLEVBQUUsSUFIeUI7QUFJN0JDLFlBQVUsRUFBRSxFQUppQjtBQUs3QkMsV0FBUyxFQUFFO0FBTGtCLENBQS9COztBQVFBLE1BQU1DLE9BQU8sR0FBRyxDQUFDQyxLQUFLLEdBQUdQLFlBQVQsRUFBdUJRLE1BQXZCLEtBQXVEO0FBQ3JFLFVBQVFBLE1BQU0sQ0FBQ2pCLElBQWY7QUFDRSxTQUFLUixNQUFMO0FBQ0UsNkNBQ0t3QixLQURMO0FBRUVMLGVBQU8sRUFBRTtBQUZYOztBQUlGLFNBQUtsQixjQUFMO0FBQ0UsNkNBQ0t1QixLQURMO0FBRUVOLGVBQU8sRUFBRSxJQUZYO0FBR0VDLGVBQU8sRUFBRSxLQUhYO0FBSUVDLFVBQUUsa0NBQU9LLE1BQU0sQ0FBQ2hCLE9BQWQ7QUFBdUJpQixrQkFBUSxFQUFFO0FBQWpDO0FBSko7O0FBTUYsU0FBS3hCLFlBQUw7QUFDRSw2Q0FDS3NCLEtBREw7QUFFRUwsZUFBTyxFQUFFLEtBRlg7QUFHRUQsZUFBTyxFQUFFLEtBSFg7QUFJRUUsVUFBRSxFQUFFSyxNQUFNLENBQUNoQjtBQUpiOztBQU1GLFNBQUtOLE9BQUw7QUFDRSw2Q0FDS3FCLEtBREw7QUFFRUwsZUFBTyxFQUFFO0FBRlg7O0FBSUYsU0FBS2YsZUFBTDtBQUNFLDZDQUNLb0IsS0FETDtBQUVFTCxlQUFPLEVBQUUsS0FGWDtBQUdFRCxlQUFPLEVBQUUsS0FIWDtBQUlFRSxVQUFFLEVBQUU7QUFKTjs7QUFNRixTQUFLZixhQUFMO0FBQ0UsNkNBQ0ttQixLQURMO0FBRUVMLGVBQU8sRUFBRTtBQUZYOztBQUlGO0FBQ0UsYUFBT0ssS0FBUDtBQXRDSjtBQXdDRCxDQXpDRDs7QUEyQ2VELHNFQUFmIiwiZmlsZSI6Ii4vc3JjL21vZHVsZXMvdXNlci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IFVzZXJEYXRhIH0gZnJvbSAnLi4vdHlwZXMvdXNlcic7XG5cbmV4cG9ydCBjb25zdCBMT0dfSU4gPSAnTE9HX0lOJyBhcyBjb25zdDtcbmNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNFU1MnIGFzIGNvbnN0O1xuY29uc3QgTE9HX0lOX0VSUk9SID0gJ0xPR19JTl9FUlJPUicgYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBMT0dfT1VUID0gJ0xPR19PVVQnIGFzIGNvbnN0O1xuY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUycgYXMgY29uc3Q7XG5jb25zdCBMT0dfT1VUX0VSUk9SID0gJ0xPR19PVVRfRVJST1InIGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSAodXNlcjogYW55KSA9PiAoeyB0eXBlOiBMT0dfSU4sIHBheWxvYWQ6IHVzZXIgfSk7XG5leHBvcnQgY29uc3QgbG9naW5BY3Rpb25TdWNjZXNzID0gKGRhdGE6IGFueSkgPT4gKHtcbiAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXG4gIHBheWxvYWQ6IGRhdGEsXG59KTtcbmV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbkVycm9yID0gKGU6IEVycm9yKSA9PiAoe1xuICB0eXBlOiBMT0dfSU5fRVJST1IsXG4gIHBheWxvYWQ6IGUsXG59KTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dEFjdGlvbiA9ICgpID0+ICh7IHR5cGU6IExPR19PVVQgfSk7XG5leHBvcnQgY29uc3QgbG9nb3V0QWN0aW9uU3VjY2VzcyA9ICgpID0+ICh7IHR5cGU6IExPR19PVVRfU1VDQ0VTUyB9KTtcbmV4cG9ydCBjb25zdCBsb2dvdXRBY3Rpb25FcnJvciA9ICgpID0+ICh7IHR5cGU6IExPR19PVVRfRVJST1IgfSk7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogVXNlckRhdGEgPSB7XG4gIGlzTG9naW46IGZhbHNlLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgbWU6IG51bGwsXG4gIHNpZ25VcERhdGE6IHt9LFxuICBsb2dpbkRhdGE6IHt9LFxufTtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBBbnlBY3Rpb24pOiBVc2VyRGF0YSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIExPR19JTjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgfTtcbiAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9naW46IHRydWUsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBtZTogeyAuLi5hY3Rpb24ucGF5bG9hZCwgbmlja25hbWU6ICd5ZycgfSxcbiAgICAgIH07XG4gICAgY2FzZSBMT0dfSU5fRVJST1I6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGlzTG9naW46IGZhbHNlLFxuICAgICAgICBtZTogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuICAgIGNhc2UgTE9HX09VVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgfTtcbiAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgaXNMb2dpbjogZmFsc2UsXG4gICAgICAgIG1lOiBudWxsLFxuICAgICAgfTtcbiAgICBjYXNlIExPR19PVVRfRVJST1I6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/user.ts\n");

/***/ }),

/***/ "./src/sagas/index.ts":
/*!****************************!*\
  !*** ./src/sagas/index.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rootSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ \"./src/sagas/post.ts\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ \"./src/sagas/user.ts\");\n\n\n\nfunction* rootSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(_post__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), Object(_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvaW5kZXgudHM/MDNmMSJdLCJuYW1lcyI6WyJyb290U2FnYSIsImFsbCIsInBvc3RTYWdhIiwidXNlclNhZ2EiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVlLFVBQVVBLFFBQVYsR0FBcUI7QUFDbEMsUUFBTUMsOERBQUcsQ0FBQyxDQUFDQyxxREFBUSxFQUFULEVBQWFDLHFEQUFRLEVBQXJCLENBQUQsQ0FBVDtBQUNEIiwiZmlsZSI6Ii4vc3JjL3NhZ2FzL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCBwb3N0U2FnYSBmcm9tICcuL3Bvc3QnO1xuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgeWllbGQgYWxsKFtwb3N0U2FnYSgpLCB1c2VyU2FnYSgpXSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/sagas/index.ts\n");

/***/ }),

/***/ "./src/sagas/post.ts":
/*!***************************!*\
  !*** ./src/sagas/post.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return postSaga; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/post */ \"./src/modules/post.ts\");\n\n\n\n\nconst postApi = async () => {\n  const {\n    data\n  } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api', {\n    name: '22'\n  });\n  return data;\n};\n\nfunction* addPostSaga() {\n  try {\n    const {\n      data\n    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(postApi);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])(Object(_modules_post__WEBPACK_IMPORTED_MODULE_2__[\"addPostSuccess\"])());\n  } catch (e) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])(Object(_modules_post__WEBPACK_IMPORTED_MODULE_2__[\"addPostError\"])(e));\n  }\n}\n\nfunction* postSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeEvery\"])(_modules_post__WEBPACK_IMPORTED_MODULE_2__[\"ADD_POST\"], addPostSaga);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvcG9zdC50cz80ZDA3Il0sIm5hbWVzIjpbInBvc3RBcGkiLCJkYXRhIiwiYXhpb3MiLCJwb3N0IiwibmFtZSIsImFkZFBvc3RTYWdhIiwiY2FsbCIsInB1dCIsImFkZFBvc3RTdWNjZXNzIiwiZSIsImFkZFBvc3RFcnJvciIsInBvc3RTYWdhIiwidGFrZUV2ZXJ5IiwiQUREX1BPU1QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE9BQU8sR0FBRyxZQUFZO0FBQzFCLFFBQU07QUFBRUM7QUFBRixNQUFXLE1BQU1DLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxNQUFYLEVBQW1CO0FBQUVDLFFBQUksRUFBRTtBQUFSLEdBQW5CLENBQXZCO0FBQ0EsU0FBT0gsSUFBUDtBQUNELENBSEQ7O0FBS0EsVUFBVUksV0FBVixHQUF3QjtBQUN0QixNQUFJO0FBQ0YsVUFBTTtBQUFFSjtBQUFGLFFBQVcsTUFBTUssK0RBQUksQ0FBQ04sT0FBRCxDQUEzQjtBQUVBLFVBQU1PLDhEQUFHLENBQUNDLG9FQUFjLEVBQWYsQ0FBVDtBQUNELEdBSkQsQ0FJRSxPQUFPQyxDQUFQLEVBQVU7QUFDVixVQUFNRiw4REFBRyxDQUFDRyxrRUFBWSxDQUFDRCxDQUFELENBQWIsQ0FBVDtBQUNEO0FBQ0Y7O0FBRWMsVUFBVUUsUUFBVixHQUFxQjtBQUNsQyxRQUFNQyxvRUFBUyxDQUFDQyxzREFBRCxFQUFXUixXQUFYLENBQWY7QUFDRCIsImZpbGUiOiIuL3NyYy9zYWdhcy9wb3N0LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IGNhbGwsIHB1dCwgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7IGFkZFBvc3RFcnJvciwgYWRkUG9zdFN1Y2Nlc3MsIEFERF9QT1NUIH0gZnJvbSAnLi4vbW9kdWxlcy9wb3N0JztcblxuY29uc3QgcG9zdEFwaSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpJywgeyBuYW1lOiAnMjInIH0pO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmZ1bmN0aW9uKiBhZGRQb3N0U2FnYSgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwocG9zdEFwaSk7XG5cbiAgICB5aWVsZCBwdXQoYWRkUG9zdFN1Y2Nlc3MoKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB5aWVsZCBwdXQoYWRkUG9zdEVycm9yKGUpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XG4gIHlpZWxkIHRha2VFdmVyeShBRERfUE9TVCwgYWRkUG9zdFNhZ2EpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sagas/post.ts\n");

/***/ }),

/***/ "./src/sagas/user.ts":
/*!***************************!*\
  !*** ./src/sagas/user.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return userSaga; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/user */ \"./src/modules/user.ts\");\n\n\n\n\nconst loginApi = async () => {\n  const {\n    data\n  } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('api');\n  return data;\n};\n\nfunction* loginSaga(action) {\n  try {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])(Object(_modules_user__WEBPACK_IMPORTED_MODULE_2__[\"loginActionSuccess\"])(action.payload));\n  } catch (e) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])(Object(_modules_user__WEBPACK_IMPORTED_MODULE_2__[\"loginActionError\"])(e));\n  }\n}\n\nfunction* logoutSaga() {\n  try {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])(Object(_modules_user__WEBPACK_IMPORTED_MODULE_2__[\"logoutActionSuccess\"])());\n  } catch {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])(Object(_modules_user__WEBPACK_IMPORTED_MODULE_2__[\"logoutActionError\"])());\n  }\n}\n\nfunction* userSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeEvery\"])(_modules_user__WEBPACK_IMPORTED_MODULE_2__[\"LOG_IN\"], loginSaga);\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeEvery\"])(_modules_user__WEBPACK_IMPORTED_MODULE_2__[\"LOG_OUT\"], logoutSaga);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvdXNlci50cz85MjM5Il0sIm5hbWVzIjpbImxvZ2luQXBpIiwiZGF0YSIsImF4aW9zIiwiZ2V0IiwibG9naW5TYWdhIiwiYWN0aW9uIiwicHV0IiwibG9naW5BY3Rpb25TdWNjZXNzIiwicGF5bG9hZCIsImUiLCJsb2dpbkFjdGlvbkVycm9yIiwibG9nb3V0U2FnYSIsImxvZ291dEFjdGlvblN1Y2Nlc3MiLCJsb2dvdXRBY3Rpb25FcnJvciIsInVzZXJTYWdhIiwidGFrZUV2ZXJ5IiwiTE9HX0lOIiwiTE9HX09VVCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBVUEsTUFBTUEsUUFBUSxHQUFHLFlBQVk7QUFDM0IsUUFBTTtBQUFFQztBQUFGLE1BQVcsTUFBTUMsNENBQUssQ0FBQ0MsR0FBTixDQUFVLEtBQVYsQ0FBdkI7QUFDQSxTQUFPRixJQUFQO0FBQ0QsQ0FIRDs7QUFLQSxVQUFVRyxTQUFWLENBQW9CQyxNQUFwQixFQUE0RDtBQUMxRCxNQUFJO0FBQ0YsVUFBTUMsOERBQUcsQ0FBQ0Msd0VBQWtCLENBQUNGLE1BQU0sQ0FBQ0csT0FBUixDQUFuQixDQUFUO0FBQ0QsR0FGRCxDQUVFLE9BQU9DLENBQVAsRUFBVTtBQUNWLFVBQU1ILDhEQUFHLENBQUNJLHNFQUFnQixDQUFDRCxDQUFELENBQWpCLENBQVQ7QUFDRDtBQUNGOztBQUVELFVBQVVFLFVBQVYsR0FBdUI7QUFDckIsTUFBSTtBQUNGLFVBQU1MLDhEQUFHLENBQUNNLHlFQUFtQixFQUFwQixDQUFUO0FBQ0QsR0FGRCxDQUVFLE1BQU07QUFDTixVQUFNTiw4REFBRyxDQUFDTyx1RUFBaUIsRUFBbEIsQ0FBVDtBQUNEO0FBQ0Y7O0FBRWMsVUFBVUMsUUFBVixHQUFxQjtBQUNsQyxRQUFNQyxvRUFBUyxDQUFDQyxvREFBRCxFQUFTWixTQUFULENBQWY7QUFDQSxRQUFNVyxvRUFBUyxDQUFDRSxxREFBRCxFQUFVTixVQUFWLENBQWY7QUFDRCIsImZpbGUiOiIuL3NyYy9zYWdhcy91c2VyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHB1dCwgY2FsbCwgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7XG4gIExPR19JTixcbiAgbG9naW5BY3Rpb24sXG4gIGxvZ2luQWN0aW9uRXJyb3IsXG4gIGxvZ2luQWN0aW9uU3VjY2VzcyxcbiAgbG9nb3V0QWN0aW9uU3VjY2VzcyxcbiAgbG9nb3V0QWN0aW9uRXJyb3IsXG4gIExPR19PVVQsXG59IGZyb20gJy4uL21vZHVsZXMvdXNlcic7XG5cbmNvbnN0IGxvZ2luQXBpID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnYXBpJyk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZnVuY3Rpb24qIGxvZ2luU2FnYShhY3Rpb246IFJldHVyblR5cGU8dHlwZW9mIGxvZ2luQWN0aW9uPikge1xuICB0cnkge1xuICAgIHlpZWxkIHB1dChsb2dpbkFjdGlvblN1Y2Nlc3MoYWN0aW9uLnBheWxvYWQpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHlpZWxkIHB1dChsb2dpbkFjdGlvbkVycm9yKGUpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiogbG9nb3V0U2FnYSgpIHtcbiAgdHJ5IHtcbiAgICB5aWVsZCBwdXQobG9nb3V0QWN0aW9uU3VjY2VzcygpKTtcbiAgfSBjYXRjaCB7XG4gICAgeWllbGQgcHV0KGxvZ291dEFjdGlvbkVycm9yKCkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KExPR19JTiwgbG9naW5TYWdhKTtcbiAgeWllbGQgdGFrZUV2ZXJ5KExPR19PVVQsIGxvZ291dFNhZ2EpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sagas/user.ts\n");

/***/ }),

/***/ "./src/store/configureStore.ts":
/*!*************************************!*\
  !*** ./src/store/configureStore.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules */ \"./src/modules/index.ts\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ \"./src/sagas/index.ts\");\n\n\n\n\n\n\n\nconst configureStore = () => {\n  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_4___default()();\n  const middlewares = [sagaMiddleware];\n  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(...middlewares));\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(_modules__WEBPACK_IMPORTED_MODULE_2__[\"default\"], enhancer);\n  sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  return store;\n};\n\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"createWrapper\"])(configureStore, {\n  debug: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (wrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvY29uZmlndXJlU3RvcmUudHM/ZDUyZCJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicm9vdFJlZHVjZXIiLCJydW4iLCJyb290U2FnYSIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsY0FBYyxHQUFHLE1BQU07QUFDM0IsUUFBTUMsY0FBYyxHQUFHQyxpREFBb0IsRUFBM0M7QUFDQSxRQUFNQyxXQUFnQixHQUFHLENBQUNGLGNBQUQsQ0FBekI7QUFDQSxRQUFNRyxRQUFRLEdBQ1osUUFDSUMsU0FESixHQUVJQyxvRkFBbUIsQ0FBQ0MsNkRBQWUsQ0FBQyxHQUFHSixXQUFKLENBQWhCLENBSHpCO0FBSUEsUUFBTUssS0FBSyxHQUFHQyx5REFBVyxDQUFDQyxnREFBRCxFQUFjTixRQUFkLENBQXpCO0FBQ0FILGdCQUFjLENBQUNVLEdBQWYsQ0FBbUJDLDhDQUFuQjtBQUNBLFNBQU9KLEtBQVA7QUFDRCxDQVZEOztBQVlBLE1BQU1LLE9BQU8sR0FBR0Msd0VBQWEsQ0FBQ2QsY0FBRCxFQUFpQjtBQUM1Q2UsT0FBSztBQUR1QyxDQUFqQixDQUE3QjtBQUllRixzRUFBZiIsImZpbGUiOiIuL3NyYy9zdG9yZS9jb25maWd1cmVTdG9yZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuLi9tb2R1bGVzJztcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJztcblxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcbiAgY29uc3QgbWlkZGxld2FyZXM6IGFueSA9IFtzYWdhTWlkZGxld2FyZV07XG4gIGNvbnN0IGVuaGFuY2VyID1cbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXG4gICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcbiAgICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKTtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgZW5oYW5jZXIpO1xuICBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xuICByZXR1cm4gc3RvcmU7XG59O1xuXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/configureStore.ts\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-saga\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXNhZ2FcIj81MGI1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtc2FnYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtc2FnYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-saga\n");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCI/Mzg3YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWR1eC1zYWdhLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga\n");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIj80MGI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LXNhZ2EvZWZmZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga/effects\n");

/***/ })

/******/ });