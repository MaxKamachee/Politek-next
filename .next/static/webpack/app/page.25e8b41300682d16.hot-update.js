"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/Navbar.js":
/*!**********************************!*\
  !*** ./app/components/Navbar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst Navbar = ()=>{\n    _s();\n    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [mobileMenuOpen, setMobileMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            if (window.scrollY > 20) {\n                setIsScrolled(true);\n            } else {\n                setIsScrolled(false);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"fixed top-0 left-0 right-0 z-50 transition-all duration-300 \".concat(isScrolled ? \"bg-slate-900/90 backdrop-blur-md shadow-md py-3\" : \"bg-transparent py-5\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto px-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: \"/\",\n                            className: \"text-white font-bold text-2xl flex items-center group\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-blue-500 mr-2 transform transition-transform group-hover:scale-110\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        className: \"h-8 w-8\",\n                                        viewBox: \"0 0 24 24\",\n                                        fill: \"none\",\n                                        stroke: \"currentColor\",\n                                        strokeWidth: \"2\",\n                                        strokeLinecap: \"round\",\n                                        strokeLinejoin: \"round\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            d: \"M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mkamachee/Politek-next/app/components/Navbar.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mkamachee/Politek-next/app/components/Navbar.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mkamachee/Politek-next/app/components/Navbar.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-baseline\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 font-extrabold\",\n                                            children: \"Politek\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mkamachee/Politek-next/app/components/Navbar.js\",\n                                            lineNumber: 50,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-xs text-blue-400 ml-1 font-medium rounded-full px-1.5 py-0.5 border border-blue-500/30 bg-blue-500/10\",\n                                            children: \"BETA\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mkamachee/Politek-next/app/components/Navbar.js\",\n                                            lineNumber: 51,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/mkamachee/Politek-next/app/components/Navbar.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mkamachee/Politek-next/app/components/Navbar.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hidden md:flex items-center space-x-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center space-x-1\",\n                                    children: navLinks.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                                            href: link.href,\n                                            label: link.label\n                                        }, link.href, false, {\n                                            fileName: \"/Users/mkamachee/Politek-next/app/components/Navbar.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 17\n                                        }, undefined))\n                                }, void 0, false, {\n                                    fileName: \"/Users/mkamachee/Politek-next/app/components/Navbar.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center space-x-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"text-slate-300 hover:text-white transition-colors px-3 py-1.5\",\n                                            children: \"Sign in\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mkamachee/Politek-next/app/components/Navbar.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-4 py-2 rounded-md transition-all shadow-md hover:shadow-lg hover:shadow-blue-900/20\",\n                                            children: \"Get Started\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mkamachee/Politek-next/app/components/Navbar.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/mkamachee/Politek-next/app/components/Navbar.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mkamachee/Politek-next/app/components/Navbar.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"md:hidden text-slate-200 hover:text-white focus:outline-none\",\n                            onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),\n                            \"aria-label\": \"Toggle menu\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-6 h-6 flex flex-col justify-center items-center relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"block w-5 h-0.5 bg-current transform transition-all duration-300 ease-in-out \".concat(mobileMenuOpen ? \"rotate-45 translate-y-0.5\" : \"-translate-y-1\")\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mkamachee/Politek-next/app/components/Navbar.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"block w-5 h-0.5 bg-current transform transition-all duration-300 ease-in-out \".concat(mobileMenuOpen ? \"opacity-0\" : \"opacity-100\")\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mkamachee/Politek-next/app/components/Navbar.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"block w-5 h-0.5 bg-current transform transition-all duration-300 ease-in-out \".concat(mobileMenuOpen ? \"-rotate-45 -translate-y-0.5\" : \"translate-y-1\")\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mkamachee/Politek-next/app/components/Navbar.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mkamachee/Politek-next/app/components/Navbar.js\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mkamachee/Politek-next/app/components/Navbar.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mkamachee/Politek-next/app/components/Navbar.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"md:hidden overflow-hidden transition-all duration-300 ease-in-out \".concat(mobileMenuOpen ? \"max-h-96 opacity-100 mt-4 pb-4\" : \"max-h-0 opacity-0\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col space-y-1 pt-2\",\n                            children: navLinks.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: link.href,\n                                    className: \"text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors py-3 px-4 rounded-md\",\n                                    onClick: ()=>setMobileMenuOpen(false),\n                                    children: link.label\n                                }, link.href, false, {\n                                    fileName: \"/Users/mkamachee/Politek-next/app/components/Navbar.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/mkamachee/Politek-next/app/components/Navbar.js\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col space-y-3 pt-4 pb-2 mt-2 border-t border-slate-700/50\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors py-3 px-4 rounded-md text-left\",\n                                    children: \"Sign in\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mkamachee/Politek-next/app/components/Navbar.js\",\n                                    lineNumber: 109,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-4 py-2.5 rounded-md transition-colors shadow-md mx-4\",\n                                    children: \"Get Started\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mkamachee/Politek-next/app/components/Navbar.js\",\n                                    lineNumber: 112,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mkamachee/Politek-next/app/components/Navbar.js\",\n                            lineNumber: 108,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mkamachee/Politek-next/app/components/Navbar.js\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mkamachee/Politek-next/app/components/Navbar.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mkamachee/Politek-next/app/components/Navbar.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"Tz1YhpjmJIU2IHcimEech/T/LuY=\");\n_c = Navbar;\nconst navLinks = [\n    {\n        href: \"#features\",\n        label: \"Features\"\n    },\n    {\n        href: \"#how-it-works\",\n        label: \"How It Works\"\n    },\n    {\n        href: \"#demo\",\n        label: \"Demo\"\n    },\n    {\n        href: \"#pricing\",\n        label: \"Pricing\"\n    }\n];\nconst NavLink = (param)=>{\n    let { href, label } = param;\n    _s1();\n    const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            if (href === \"#\") return;\n            const section = document.querySelector(href);\n            if (section) {\n                const rect = section.getBoundingClientRect();\n                const isInView = rect.top <= 200 && rect.bottom >= 200;\n                setIsActive(isInView);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        handleScroll(); // Check on mount\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    }, [\n        href\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: href,\n        className: \"relative px-3 py-2 rounded-md transition-all \".concat(isActive ? \"text-white\" : \"text-slate-300 hover:text-white\"),\n        children: [\n            label,\n            isActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"absolute bottom-0 left-1/2 transform -translate-x-1/2 w-5 h-0.5 bg-blue-500 rounded-full\"\n            }, void 0, false, {\n                fileName: \"/Users/mkamachee/Politek-next/app/components/Navbar.js\",\n                lineNumber: 157,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mkamachee/Politek-next/app/components/Navbar.js\",\n        lineNumber: 151,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(NavLink, \"Got/rvXObncgVYAtKDAIOlzhTAc=\");\n_c1 = NavLink;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c, _c1;\n$RefreshReg$(_c, \"Navbar\");\n$RefreshReg$(_c1, \"NavLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL05hdmJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRW1EO0FBQ3RCO0FBRTdCLE1BQU1JLFNBQVM7O0lBQ2IsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdMLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ00sZ0JBQWdCQyxrQkFBa0IsR0FBR1AsK0NBQVFBLENBQUM7SUFFckRDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU8sZUFBZTtZQUNuQixJQUFJQyxPQUFPQyxPQUFPLEdBQUcsSUFBSTtnQkFDdkJMLGNBQWM7WUFDaEIsT0FBTztnQkFDTEEsY0FBYztZQUNoQjtRQUNGO1FBRUFJLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVIO1FBQ2xDLE9BQU8sSUFBTUMsT0FBT0csbUJBQW1CLENBQUMsVUFBVUo7SUFDcEQsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNLO1FBQ0NDLFdBQVcsK0RBSVYsT0FIQ1YsYUFDSSxvREFDQTtrQkFHTiw0RUFBQ1c7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFJRCxXQUFVOztzQ0FFYiw4REFBQ1osaURBQUlBOzRCQUFDYyxNQUFLOzRCQUFJRixXQUFVOzs4Q0FDdkIsOERBQUNHO29DQUFLSCxXQUFVOzhDQUNkLDRFQUFDSTt3Q0FDQ0MsT0FBTTt3Q0FDTkwsV0FBVTt3Q0FDVk0sU0FBUTt3Q0FDUkMsTUFBSzt3Q0FDTEMsUUFBTzt3Q0FDUEMsYUFBWTt3Q0FDWkMsZUFBYzt3Q0FDZEMsZ0JBQWU7a0RBRWYsNEVBQUNDOzRDQUFLQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzhDQUdaLDhEQUFDWjtvQ0FBSUQsV0FBVTs7c0RBQ2IsOERBQUNHOzRDQUFLSCxXQUFVO3NEQUE0Rjs7Ozs7O3NEQUM1Ryw4REFBQ0c7NENBQUtILFdBQVU7c0RBQTZHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBS2pJLDhEQUFDQzs0QkFBSUQsV0FBVTs7OENBQ2IsOERBQUNDO29DQUFJRCxXQUFVOzhDQUNaYyxTQUFTQyxHQUFHLENBQUMsQ0FBQ0MscUJBQ2IsOERBQUNDOzRDQUF3QmYsTUFBTWMsS0FBS2QsSUFBSTs0Q0FBRWdCLE9BQU9GLEtBQUtFLEtBQUs7MkNBQTdDRixLQUFLZCxJQUFJOzs7Ozs7Ozs7OzhDQUczQiw4REFBQ0Q7b0NBQUlELFdBQVU7O3NEQUNiLDhEQUFDbUI7NENBQU9uQixXQUFVO3NEQUFnRTs7Ozs7O3NEQUdsRiw4REFBQ21COzRDQUFPbkIsV0FBVTtzREFBeUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FPL00sOERBQUNtQjs0QkFDQ25CLFdBQVU7NEJBQ1ZvQixTQUFTLElBQU0zQixrQkFBa0IsQ0FBQ0Q7NEJBQ2xDNkIsY0FBVztzQ0FFWCw0RUFBQ3BCO2dDQUFJRCxXQUFVOztrREFDYiw4REFBQ0c7d0NBQ0NILFdBQVcsZ0ZBQWdKLE9BQWhFUixpQkFBaUIsOEJBQThCOzs7Ozs7a0RBRTVJLDhEQUFDVzt3Q0FDQ0gsV0FBVyxnRkFBNkgsT0FBN0NSLGlCQUFpQixjQUFjOzs7Ozs7a0RBRTVILDhEQUFDVzt3Q0FDQ0gsV0FBVyxnRkFBaUosT0FBakVSLGlCQUFpQixnQ0FBZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQU9wSiw4REFBQ1M7b0JBQ0NELFdBQVcscUVBQTZJLE9BQXhFUixpQkFBaUIsbUNBQW1DOztzQ0FFcEksOERBQUNTOzRCQUFJRCxXQUFVO3NDQUNaYyxTQUFTQyxHQUFHLENBQUMsQ0FBQ0MscUJBQ2IsOERBQUNNO29DQUVDcEIsTUFBTWMsS0FBS2QsSUFBSTtvQ0FDZkYsV0FBVTtvQ0FDVm9CLFNBQVMsSUFBTTNCLGtCQUFrQjs4Q0FFaEN1QixLQUFLRSxLQUFLO21DQUxORixLQUFLZCxJQUFJOzs7Ozs7Ozs7O3NDQVNwQiw4REFBQ0Q7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDbUI7b0NBQU9uQixXQUFVOzhDQUF5Rzs7Ozs7OzhDQUczSCw4REFBQ21CO29DQUFPbkIsV0FBVTs4Q0FBMEo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXhMO0dBbEhNWDtLQUFBQTtBQW9ITixNQUFNeUIsV0FBVztJQUNmO1FBQUVaLE1BQU07UUFBYWdCLE9BQU87SUFBVztJQUN2QztRQUFFaEIsTUFBTTtRQUFpQmdCLE9BQU87SUFBZTtJQUMvQztRQUFFaEIsTUFBTTtRQUFTZ0IsT0FBTztJQUFPO0lBQy9CO1FBQUVoQixNQUFNO1FBQVlnQixPQUFPO0lBQVU7Q0FDdEM7QUFFRCxNQUFNRCxVQUFVO1FBQUMsRUFBRWYsSUFBSSxFQUFFZ0IsS0FBSyxFQUFFOztJQUM5QixNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR3RDLCtDQUFRQSxDQUFDO0lBRXpDQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1PLGVBQWU7WUFDbkIsSUFBSVEsU0FBUyxLQUFLO1lBRWxCLE1BQU11QixVQUFVQyxTQUFTQyxhQUFhLENBQUN6QjtZQUN2QyxJQUFJdUIsU0FBUztnQkFDWCxNQUFNRyxPQUFPSCxRQUFRSSxxQkFBcUI7Z0JBQzFDLE1BQU1DLFdBQVdGLEtBQUtHLEdBQUcsSUFBSSxPQUFPSCxLQUFLSSxNQUFNLElBQUk7Z0JBQ25EUixZQUFZTTtZQUNkO1FBQ0Y7UUFFQW5DLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVIO1FBQ2xDQSxnQkFBZ0IsaUJBQWlCO1FBRWpDLE9BQU8sSUFBTUMsT0FBT0csbUJBQW1CLENBQUMsVUFBVUo7SUFDcEQsR0FBRztRQUFDUTtLQUFLO0lBRVQscUJBQ0UsOERBQUNvQjtRQUNDcEIsTUFBTUE7UUFDTkYsV0FBVyxnREFBNEcsT0FBNUR1QixXQUFXLGVBQWU7O1lBRXBGTDtZQUNBSywwQkFDQyw4REFBQ3BCO2dCQUFLSCxXQUFVOzs7Ozs7Ozs7Ozs7QUFJeEI7SUFoQ01pQjtNQUFBQTtBQWtDTiwrREFBZTVCLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvTmF2YmFyLmpzPzIxY2UiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgY29uc3QgW2lzU2Nyb2xsZWQsIHNldElzU2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbW9iaWxlTWVudU9wZW4sIHNldE1vYmlsZU1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDIwKSB7XG4gICAgICAgIHNldElzU2Nyb2xsZWQodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRJc1Njcm9sbGVkKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IFxuICAgICAgY2xhc3NOYW1lPXtgZml4ZWQgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgei01MCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgJHtcbiAgICAgICAgaXNTY3JvbGxlZCBcbiAgICAgICAgICA/ICdiZy1zbGF0ZS05MDAvOTAgYmFja2Ryb3AtYmx1ci1tZCBzaGFkb3ctbWQgcHktMycgXG4gICAgICAgICAgOiAnYmctdHJhbnNwYXJlbnQgcHktNSdcbiAgICAgIH1gfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIHsvKiBMb2dvICovfVxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC0yeGwgZmxleCBpdGVtcy1jZW50ZXIgZ3JvdXBcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgbXItMiB0cmFuc2Zvcm0gdHJhbnNpdGlvbi10cmFuc2Zvcm0gZ3JvdXAtaG92ZXI6c2NhbGUtMTEwXCI+XG4gICAgICAgICAgICAgIDxzdmcgXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtOCB3LThcIiBcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk05IDE3VjdtMCAxMGEyIDIgMCAwMS0yIDJINWEyIDIgMCAwMS0yLTJWN2EyIDIgMCAwMTItMmgyYTIgMiAwIDAxMiAybTAgMTBhMiAyIDAgMDAyIDJoMmEyIDIgMCAwMDItMk05IDdhMiAyIDAgMDEyLTJoMmEyIDIgMCAwMTIgMm0wIDEwVjdtMCAxMGEyIDIgMCAwMDIgMmgyYTIgMiAwIDAwMi0yVjdhMiAyIDAgMDAtMi0yaC0yYTIgMiAwIDAwLTIgMlwiIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWJhc2VsaW5lXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLWNsaXAtdGV4dCB0ZXh0LXRyYW5zcGFyZW50IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTQwMCB0by1pbmRpZ28tNTAwIGZvbnQtZXh0cmFib2xkXCI+UG9saXRlazwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWJsdWUtNDAwIG1sLTEgZm9udC1tZWRpdW0gcm91bmRlZC1mdWxsIHB4LTEuNSBweS0wLjUgYm9yZGVyIGJvcmRlci1ibHVlLTUwMC8zMCBiZy1ibHVlLTUwMC8xMFwiPkJFVEE8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICB7LyogRGVza3RvcCBOYXZpZ2F0aW9uICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtOFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTFcIj5cbiAgICAgICAgICAgICAge25hdkxpbmtzLm1hcCgobGluaykgPT4gKFxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIGtleT17bGluay5ocmVmfSBocmVmPXtsaW5rLmhyZWZ9IGxhYmVsPXtsaW5rLmxhYmVsfSAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTNcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTMwMCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzIHB4LTMgcHktMS41XCI+XG4gICAgICAgICAgICAgICAgU2lnbiBpblxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tYmx1ZS02MDAgdG8taW5kaWdvLTYwMCBob3Zlcjpmcm9tLWJsdWUtNTAwIGhvdmVyOnRvLWluZGlnby01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZC1tZCB0cmFuc2l0aW9uLWFsbCBzaGFkb3ctbWQgaG92ZXI6c2hhZG93LWxnIGhvdmVyOnNoYWRvdy1ibHVlLTkwMC8yMFwiPlxuICAgICAgICAgICAgICAgIEdldCBTdGFydGVkXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogTW9iaWxlIE1lbnUgQnV0dG9uICovfVxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtZDpoaWRkZW4gdGV4dC1zbGF0ZS0yMDAgaG92ZXI6dGV4dC13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIiBcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vYmlsZU1lbnVPcGVuKCFtb2JpbGVNZW51T3Blbil9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG1lbnVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy02IGgtNiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICA8c3BhbiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BibG9jayB3LTUgaC0wLjUgYmctY3VycmVudCB0cmFuc2Zvcm0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0ICR7bW9iaWxlTWVudU9wZW4gPyAncm90YXRlLTQ1IHRyYW5zbGF0ZS15LTAuNScgOiAnLXRyYW5zbGF0ZS15LTEnfWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxzcGFuIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJsb2NrIHctNSBoLTAuNSBiZy1jdXJyZW50IHRyYW5zZm9ybSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgJHttb2JpbGVNZW51T3BlbiA/ICdvcGFjaXR5LTAnIDogJ29wYWNpdHktMTAwJ31gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3BhbiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BibG9jayB3LTUgaC0wLjUgYmctY3VycmVudCB0cmFuc2Zvcm0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0ICR7bW9iaWxlTWVudU9wZW4gPyAnLXJvdGF0ZS00NSAtdHJhbnNsYXRlLXktMC41JyA6ICd0cmFuc2xhdGUteS0xJ31gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBNb2JpbGUgTWVudSAqL31cbiAgICAgICAgPGRpdiBcbiAgICAgICAgICBjbGFzc05hbWU9e2BtZDpoaWRkZW4gb3ZlcmZsb3ctaGlkZGVuIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCAke21vYmlsZU1lbnVPcGVuID8gJ21heC1oLTk2IG9wYWNpdHktMTAwIG10LTQgcGItNCcgOiAnbWF4LWgtMCBvcGFjaXR5LTAnfWB9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS0xIHB0LTJcIj5cbiAgICAgICAgICAgIHtuYXZMaW5rcy5tYXAoKGxpbmspID0+IChcbiAgICAgICAgICAgICAgPGEgXG4gICAgICAgICAgICAgICAga2V5PXtsaW5rLmhyZWZ9IFxuICAgICAgICAgICAgICAgIGhyZWY9e2xpbmsuaHJlZn0gXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS0zMDAgaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy1zbGF0ZS04MDAvNTAgdHJhbnNpdGlvbi1jb2xvcnMgcHktMyBweC00IHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vYmlsZU1lbnVPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtsaW5rLmxhYmVsfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS0zIHB0LTQgcGItMiBtdC0yIGJvcmRlci10IGJvcmRlci1zbGF0ZS03MDAvNTBcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS0zMDAgaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy1zbGF0ZS04MDAvNTAgdHJhbnNpdGlvbi1jb2xvcnMgcHktMyBweC00IHJvdW5kZWQtbWQgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgIFNpZ24gaW5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tYmx1ZS02MDAgdG8taW5kaWdvLTYwMCBob3Zlcjpmcm9tLWJsdWUtNTAwIGhvdmVyOnRvLWluZGlnby01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIuNSByb3VuZGVkLW1kIHRyYW5zaXRpb24tY29sb3JzIHNoYWRvdy1tZCBteC00XCI+XG4gICAgICAgICAgICAgIEdldCBTdGFydGVkXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmNvbnN0IG5hdkxpbmtzID0gW1xuICB7IGhyZWY6IFwiI2ZlYXR1cmVzXCIsIGxhYmVsOiBcIkZlYXR1cmVzXCIgfSxcbiAgeyBocmVmOiBcIiNob3ctaXQtd29ya3NcIiwgbGFiZWw6IFwiSG93IEl0IFdvcmtzXCIgfSxcbiAgeyBocmVmOiBcIiNkZW1vXCIsIGxhYmVsOiBcIkRlbW9cIiB9LFxuICB7IGhyZWY6IFwiI3ByaWNpbmdcIiwgbGFiZWw6IFwiUHJpY2luZ1wiIH0sXG5dO1xuXG5jb25zdCBOYXZMaW5rID0gKHsgaHJlZiwgbGFiZWwgfSkgPT4ge1xuICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgaWYgKGhyZWYgPT09IFwiI1wiKSByZXR1cm47XG4gICAgICBcbiAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhyZWYpO1xuICAgICAgaWYgKHNlY3Rpb24pIHtcbiAgICAgICAgY29uc3QgcmVjdCA9IHNlY3Rpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGlzSW5WaWV3ID0gcmVjdC50b3AgPD0gMjAwICYmIHJlY3QuYm90dG9tID49IDIwMDtcbiAgICAgICAgc2V0SXNBY3RpdmUoaXNJblZpZXcpO1xuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgaGFuZGxlU2Nyb2xsKCk7IC8vIENoZWNrIG9uIG1vdW50XG4gICAgXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICB9LCBbaHJlZl0pO1xuICBcbiAgcmV0dXJuIChcbiAgICA8YSBcbiAgICAgIGhyZWY9e2hyZWZ9IFxuICAgICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgcHgtMyBweS0yIHJvdW5kZWQtbWQgdHJhbnNpdGlvbi1hbGwgJHtpc0FjdGl2ZSA/ICd0ZXh0LXdoaXRlJyA6ICd0ZXh0LXNsYXRlLTMwMCBob3Zlcjp0ZXh0LXdoaXRlJ31gfVxuICAgID5cbiAgICAgIHtsYWJlbH1cbiAgICAgIHtpc0FjdGl2ZSAmJiAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIGxlZnQtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIHctNSBoLTAuNSBiZy1ibHVlLTUwMCByb3VuZGVkLWZ1bGxcIiAvPlxuICAgICAgKX1cbiAgICA8L2E+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJOYXZiYXIiLCJpc1Njcm9sbGVkIiwic2V0SXNTY3JvbGxlZCIsIm1vYmlsZU1lbnVPcGVuIiwic2V0TW9iaWxlTWVudU9wZW4iLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJocmVmIiwic3BhbiIsInN2ZyIsInhtbG5zIiwidmlld0JveCIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInBhdGgiLCJkIiwibmF2TGlua3MiLCJtYXAiLCJsaW5rIiwiTmF2TGluayIsImxhYmVsIiwiYnV0dG9uIiwib25DbGljayIsImFyaWEtbGFiZWwiLCJhIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsInNlY3Rpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaXNJblZpZXciLCJ0b3AiLCJib3R0b20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Navbar.js\n"));

/***/ })

});