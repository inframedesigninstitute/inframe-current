(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/common/UserControl.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "LoginForm": ()=>LoginForm,
    "Register": ()=>Register,
    "default": ()=>UserControl
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function UserControl(param) {
    let { activePage, setActivePage } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            activePage == "login" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoginForm, {
                activePage: activePage,
                setActivePage: setActivePage
            }, void 0, false, {
                fileName: "[project]/src/app/common/UserControl.jsx",
                lineNumber: 10,
                columnNumber: 9
            }, this),
            activePage == "register" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Register, {
                activePage: activePage,
                setActivePage: setActivePage
            }, void 0, false, {
                fileName: "[project]/src/app/common/UserControl.jsx",
                lineNumber: 13,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_c = UserControl;
function LoginForm(param) {
    let { activePage, setActivePage } = param;
    let userLogin = (event)=>{
        event.preventDefault();
        // Swal.fire({
        //   title: "Login Successfully !",
        //   text: "You are now login",
        //   icon: "success",
        //   background: "white",
        //   iconColor: "red",
        //   confirmButtonColor: "red",
        // });
        // Swal.fire({
        //   title: "OTP Sent",
        //   text: "Check your email Id to Verify",
        //   icon: "success",
        //   background: "white",
        //   iconColor: "red",
        //   confirmButtonColor: "red",
        // });
        // Swal.fire({
        //     title : 'OTP Verified',
        //     icon : 'success',
        //     background : 'white',
        //     iconColor : 'red',
        //     confirmButtonColor : 'red'
        // })
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
            title: "OTP Is Invalid",
            icon: "error",
            iconColor: "red",
            background: "white",
            confirmButtonColor: "red"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed lg:w-[350px] w-[320px] h-[auto] z-[1000] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-[10px] shadow-md shadow-red-600",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[25px] text-gray-900 my-4 uppercase",
                        children: "Login"
                    }, void 0, false, {
                        fileName: "[project]/src/app/common/UserControl.jsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        onClick: ()=>setActivePage(""),
                        className: "text-[25px] hover:text-red-600 duration-300 cursor-pointer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiMiniArrowRightStartOnRectangle"], {}, void 0, false, {
                            fileName: "[project]/src/app/common/UserControl.jsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/common/UserControl.jsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/common/UserControl.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: userLogin,
                className: "my-[15px] space-y-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        required: true,
                        className: "border border-gray-300 w-full rounded-[15px] px-[8px] py-[12px] focus:outline-none focus:ring-2 focus:ring-red-500 transition",
                        placeholder: "Enter Your Email",
                        type: "text"
                    }, void 0, false, {
                        fileName: "[project]/src/app/common/UserControl.jsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        required: true,
                        className: "border border-gray-300 w-full rounded-[15px] px-[8px] py-[12px] focus:outline-none focus:ring-2 focus:ring-red-500 transition",
                        placeholder: "Enter Your Password",
                        type: "text"
                    }, void 0, false, {
                        fileName: "[project]/src/app/common/UserControl.jsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full bg-red-600 hover:bg-gray-700 duration-300 cursor-pointer text-white rounded-[15px] uppercase py-[12px] ",
                        children: "Login"
                    }, void 0, false, {
                        fileName: "[project]/src/app/common/UserControl.jsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center",
                        children: [
                            "Not a member yet ?",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                onClick: ()=>setActivePage("register"),
                                className: "text-red-600   hover:underline cursor-pointer",
                                children: "Sign Up"
                            }, void 0, false, {
                                fileName: "[project]/src/app/common/UserControl.jsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/common/UserControl.jsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/common/UserControl.jsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/common/UserControl.jsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c1 = LoginForm;
function Register(param) {
    let { activePage, setActivePage } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed lg:w-[420px] w-[320px] h-[auto] z-[1000] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-[10px] shadow-md shadow-red-600",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-[25px] text-gray-900 my-4 uppercase ",
                            children: "Register"
                        }, void 0, false, {
                            fileName: "[project]/src/app/common/UserControl.jsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            onClick: ()=>setActivePage(""),
                            className: "text-[25px] hover:text-red-600 duration-300 cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiMiniArrowRightStartOnRectangle"], {}, void 0, false, {
                                fileName: "[project]/src/app/common/UserControl.jsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/common/UserControl.jsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/common/UserControl.jsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "my-[15px] space-y-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            required: true,
                            className: "border border-gray-300 w-full rounded-[15px] px-[8px] py-[12px] focus:outline-none focus:ring-2 focus:ring-red-500 transition",
                            placeholder: "Enter Your Name",
                            type: "text"
                        }, void 0, false, {
                            fileName: "[project]/src/app/common/UserControl.jsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            required: true,
                            className: "border border-gray-300 w-full rounded-[15px] px-[8px] py-[12px] focus:outline-none focus:ring-2 focus:ring-red-500 transition",
                            placeholder: "Enter Your Email",
                            type: "email"
                        }, void 0, false, {
                            fileName: "[project]/src/app/common/UserControl.jsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            required: true,
                            className: "border border-gray-300 w-full rounded-[15px] px-[8px] py-[12px] focus:outline-none focus:ring-2 focus:ring-red-500 transition",
                            placeholder: "Create a Password",
                            type: "password"
                        }, void 0, false, {
                            fileName: "[project]/src/app/common/UserControl.jsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "w-full bg-red-600 hover:bg-gray-700 duration-300 cursor-pointer text-white rounded-[15px] uppercase py-[12px] focus:outline-none focus:ring-2 focus:ring-red-500 transition",
                            children: "Request OTP"
                        }, void 0, false, {
                            fileName: "[project]/src/app/common/UserControl.jsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center",
                            children: [
                                "Already a member ?",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    onClick: ()=>setActivePage("login"),
                                    className: "text-red-600   hover:underline cursor-pointer",
                                    children: "Sign In"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/common/UserControl.jsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/common/UserControl.jsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/common/UserControl.jsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/common/UserControl.jsx",
            lineNumber: 99,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_c2 = Register;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "UserControl");
__turbopack_context__.k.register(_c1, "LoginForm");
__turbopack_context__.k.register(_c2, "Register");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/ApiData/categoryApi.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "megaMenuData": ()=>megaMenuData
});
const megaMenuData = [
    {
        parentCategory: 'Online Courses',
        subCategory: [
            {
                name: 'UG EXAMS',
                subSubCategory: [
                    {
                        name: 'Design UG Exams',
                        courses: [
                            'NIFT Offline Course',
                            'NID Offline Course',
                            'UCEED Offline Course',
                            'COMBOS NIFT/NID/UCEED'
                        ]
                    },
                    {
                        name: 'Architecture UG Exams',
                        courses: [
                            'NATA Online Course',
                            'JEE B.Arch Online Course',
                            'COMBOS NATA/JEE'
                        ]
                    }
                ]
            },
            {
                name: 'PG EXAMS',
                subSubCategory: [
                    {
                        name: 'Design PG Exams',
                        courses: [
                            'CEED Online Course',
                            'FDDI Online Courses',
                            'NIFT Online Courses',
                            'NIDOnline Courses'
                        ]
                    },
                    {
                        name: 'Architecture PG Exams',
                        courses: [
                            'GATE Architecture'
                        ]
                    }
                ]
            },
            {
                name: 'Short Courses',
                subSubCategory: [
                    {
                        name: 'Short term Courses',
                        courses: [
                            'Situation/Studio test',
                            'Portfolio'
                        ]
                    }
                ]
            },
            {
                name: 'Fast Track Courses',
                subSubCategory: [
                    {
                        name: 'Short term Course',
                        courses: [
                            'Brushup 30 days',
                            'Brushup 45 days'
                        ]
                    }
                ]
            }
        ]
    },
    {
        parentCategory: 'Offline courses',
        subCategory: [
            {
                name: 'Design Material',
                subSubCategory: [
                    {
                        name: 'NIFT Books',
                        courses: [
                            'NIFT Book Set',
                            'NIFT Sketching Guide'
                        ]
                    },
                    {
                        name: 'NID Books',
                        courses: [
                            'NID Preparation Book',
                            'NID Previous Year Papers'
                        ]
                    }
                ]
            },
            {
                name: 'Study Material',
                subSubCategory: [
                    {
                        name: 'NATA Books',
                        courses: [
                            'NATA Full Study Kit',
                            'Drawing Practice Sheets'
                        ]
                    },
                    {
                        name: 'JEE B.Arch Books',
                        courses: [
                            'JEE B.Arch Guide',
                            'Mock Test Papers'
                        ]
                    }
                ]
            },
            {
                name: 'Combo Material Packs',
                subSubCategory: [
                    {
                        name: 'UG Material Combo',
                        courses: [
                            'NIFT + NID + UCEED Books'
                        ]
                    },
                    {
                        name: 'PG Material Combo',
                        courses: [
                            'CEED + NID PG Books'
                        ]
                    }
                ]
            }
        ]
    },
    {
        parentCategory: 'Study Material',
        subCategory: [
            {
                name: 'Online Workshops',
                subSubCategory: [
                    {
                        name: 'Design Workshops',
                        courses: [
                            'NIFT Crash Workshop',
                            'UCEED Mock Series'
                        ]
                    },
                    {
                        name: 'Architecture Workshops',
                        courses: [
                            'NATA Live Workshop',
                            'B.Arch Portfolio Workshop'
                        ]
                    }
                ]
            },
            {
                name: 'Offline Workshops',
                subSubCategory: [
                    {
                        name: 'Delhi Center',
                        courses: [
                            'Design Bootcamp Delhi',
                            'Architecture Bootcamp Delhi'
                        ]
                    },
                    {
                        name: 'Mumbai Center',
                        courses: [
                            'Design Bootcamp Mumbai',
                            'Architecture Bootcamp Mumbai'
                        ]
                    }
                ]
            },
            {
                name: 'Webinars',
                subSubCategory: [
                    {
                        name: 'Free Webinars',
                        courses: [
                            'How to Crack NID',
                            'Intro to Architecture Exams'
                        ]
                    },
                    {
                        name: 'Paid Webinars',
                        courses: [
                            'Advanced UCEED Workshop',
                            'JEE B.Arch Strategy Session'
                        ]
                    }
                ]
            }
        ]
    },
    {
        parentCategory: 'Test Series',
        subCategory: [
            {
                name: 'Design Test Series',
                subSubCategory: [
                    {
                        name: 'NIFT Series',
                        courses: [
                            'NIFT Full Test Series',
                            'NIFT Sketch Tests'
                        ]
                    },
                    {
                        name: 'UCEED Series',
                        courses: [
                            'UCEED Online Tests',
                            'UCEED Mock Series'
                        ]
                    }
                ]
            },
            {
                name: 'Architecture Test Series',
                subSubCategory: [
                    {
                        name: 'NATA Series',
                        courses: [
                            'NATA Full Tests',
                            'NATA Drawing Tests'
                        ]
                    },
                    {
                        name: 'JEE B.Arch Series',
                        courses: [
                            'JEE B.Arch Mocks',
                            'JEE Sample Papers'
                        ]
                    }
                ]
            },
            {
                name: 'Combo Test Series',
                subSubCategory: [
                    {
                        name: 'UG Combo Series',
                        courses: [
                            'NATA + JEE Mock Pack'
                        ]
                    },
                    {
                        name: 'PG Combo Series',
                        courses: [
                            'CEED + NID PG Mock Pack'
                        ]
                    }
                ]
            }
        ]
    },
    {
        parentCategory: 'Free Resources',
        subCategory: [
            {
                name: 'Design Test Series',
                subSubCategory: [
                    {
                        name: 'NIFT Series',
                        courses: [
                            'NIFT Full Test Series',
                            'NIFT Sketch Tests'
                        ]
                    },
                    {
                        name: 'UCEED Series',
                        courses: [
                            'UCEED Online Tests',
                            'UCEED Mock Series'
                        ]
                    }
                ]
            },
            {
                name: 'Architecture Test Series',
                subSubCategory: [
                    {
                        name: 'NATA Series',
                        courses: [
                            'NATA Full Tests',
                            'NATA Drawing Tests'
                        ]
                    },
                    {
                        name: 'JEE B.Arch Series',
                        courses: [
                            'JEE B.Arch Mocks',
                            'JEE Sample Papers'
                        ]
                    }
                ]
            },
            {
                name: 'Combo Test Series',
                subSubCategory: [
                    {
                        name: 'UG Combo Series',
                        courses: [
                            'NATA + JEE Mock Pack'
                        ]
                    },
                    {
                        name: 'PG Combo Series',
                        courses: [
                            'CEED + NID PG Mock Pack'
                        ]
                    }
                ]
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/homePageComponents/MegaMenuContent.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>MegaMenuContent
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ApiData$2f$categoryApi$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ApiData/categoryApi.jsx [app-client] (ecmascript)");
;
;
;
function MegaMenuContent(param) {
    let { category, setMegaMenuOpen } = param;
    const categoryData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ApiData$2f$categoryApi$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["megaMenuData"].find((item)=>item.parentCategory === category);
    if (!categoryData) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-0",
        children: categoryData.subCategory.map((sub, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-auto mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "border-red-500 border-l-4 bg-red-50 text-red-500 rounded-xl w-full px-[10px] py-[14px]",
                        children: sub.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/homePageComponents/MegaMenuContent.jsx",
                        lineNumber: 15,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-5 mt-5 w-full",
                        children: sub.subSubCategory.map((subSub, subIdx)=>subSub.courses.map((course, courseIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/course/".concat(course.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-")),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setMegaMenuOpen(false),
                                        className: "w-full text-left bg-gray-100 border-l-4 border-red-500 hover:border-transparent hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300 rounded-xl px-4 py-2 text-sm font-medium",
                                        children: course
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/homePageComponents/MegaMenuContent.jsx",
                                        lineNumber: 27,
                                        columnNumber: 37
                                    }, this)
                                }, courseIdx, false, {
                                    fileName: "[project]/src/app/homePageComponents/MegaMenuContent.jsx",
                                    lineNumber: 21,
                                    columnNumber: 33
                                }, this)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/homePageComponents/MegaMenuContent.jsx",
                        lineNumber: 18,
                        columnNumber: 21
                    }, this)
                ]
            }, idx, true, {
                fileName: "[project]/src/app/homePageComponents/MegaMenuContent.jsx",
                lineNumber: 14,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/homePageComponents/MegaMenuContent.jsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
_c = MegaMenuContent;
var _c;
__turbopack_context__.k.register(_c, "MegaMenuContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/homePageComponents/MegaMenu.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>MegaMenu
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ApiData$2f$categoryApi$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ApiData/categoryApi.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$homePageComponents$2f$MegaMenuContent$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/homePageComponents/MegaMenuContent.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function MegaMenu(param) {
    let { MegaMenuOpen, setMegaMenuOpen } = param;
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("onlineCourse");
    const tabMap = {
        onlineCourse: "Online Courses",
        offlineCourse: "Offline courses",
        studyMaterial: "Study Material",
        testSeries: "Test Series",
        freeRes: "Free Resources"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: (e)=>e.stopPropagation(),
        className: "".concat(MegaMenuOpen ? "translate-y-0 block opacity-100 visible" : "invisible -translate-y-10 opacity-0 hidden", " absolute duration-400 transition-all ease-in-out top-[100%] left-[170px] bg-white shadow-2xl rounded-b-[15px] w-[900px] origin-top h-[auto] z-[100] px-5 py-5 lg:block hidden text-gray-900"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-[25%_auto] gap-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                onClick: ()=>setActiveTab("onlineCourse"),
                                className: "menu-tab w-full hover:bg-gray-300 duration-300 rounded-[10px] text-[17px] text-start px-2 py-3",
                                children: "Online Course"
                            }, void 0, false, {
                                fileName: "[project]/src/app/homePageComponents/MegaMenu.jsx",
                                lineNumber: 28,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                onClick: ()=>setActiveTab("offlineCourse"),
                                className: "menu-tab w-full hover:bg-gray-300 duration-300 rounded-[10px] text-[17px] text-start px-2 py-3",
                                children: "Offline Course"
                            }, void 0, false, {
                                fileName: "[project]/src/app/homePageComponents/MegaMenu.jsx",
                                lineNumber: 29,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                onClick: ()=>setActiveTab("studyMaterial"),
                                className: "menu-tab w-full hover:bg-gray-300 duration-300 rounded-[10px] text-[17px] text-start px-2 py-3",
                                children: "Study Material"
                            }, void 0, false, {
                                fileName: "[project]/src/app/homePageComponents/MegaMenu.jsx",
                                lineNumber: 30,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                onClick: ()=>setActiveTab("testSeries"),
                                className: "menu-tab w-full hover:bg-gray-300 duration-300 rounded-[10px] text-[17px] text-start px-2 py-3",
                                children: "Test Series"
                            }, void 0, false, {
                                fileName: "[project]/src/app/homePageComponents/MegaMenu.jsx",
                                lineNumber: 31,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                onClick: ()=>setActiveTab("freeRes"),
                                className: "menu-tab w-full hover:bg-gray-300 duration-300 rounded-[10px] text-[17px] text-start px-2 py-3",
                                children: "Free Resources"
                            }, void 0, false, {
                                fileName: "[project]/src/app/homePageComponents/MegaMenu.jsx",
                                lineNumber: 32,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/homePageComponents/MegaMenu.jsx",
                        lineNumber: 27,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/homePageComponents/MegaMenu.jsx",
                    lineNumber: 26,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[80vh] overflow-y-scroll",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$homePageComponents$2f$MegaMenuContent$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        category: tabMap[activeTab],
                        setMegaMenuOpen: setMegaMenuOpen
                    }, void 0, false, {
                        fileName: "[project]/src/app/homePageComponents/MegaMenu.jsx",
                        lineNumber: 36,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/homePageComponents/MegaMenu.jsx",
                    lineNumber: 35,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/homePageComponents/MegaMenu.jsx",
            lineNumber: 25,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/homePageComponents/MegaMenu.jsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
_s(MegaMenu, "ET0YCemfE7pmsJLT04cy6r8N8Dk=");
_c = MegaMenu;
var _c;
__turbopack_context__.k.register(_c, "MegaMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/common/Header.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Header
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$vsc$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/vsc/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$common$2f$UserControl$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/common/UserControl.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$homePageComponents$2f$MegaMenu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/homePageComponents/MegaMenu.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ApiData$2f$categoryApi$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ApiData/categoryApi.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function Header() {
    _s();
    const [mobileMenu, setMobileMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activePage, setActivePage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [MegaMenuOpen, setMegaMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-[100] bg-white",
        children: [
            activePage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[100%] h-[100vh] fixed top-0 left-0 bg-[rgba(0,0,0,0.8)] z-[40]"
            }, void 0, false, {
                fileName: "[project]/src/app/common/Header.jsx",
                lineNumber: 28,
                columnNumber: 9
            }, this),
            activePage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$common$2f$UserControl$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                activePage: activePage,
                setActivePage: setActivePage
            }, void 0, false, {
                fileName: "[project]/src/app/common/Header.jsx",
                lineNumber: 32,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full shadow-lg z-[100] lg:block hidden px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1320px] mx-auto flex items-center justify-between py-[0px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: "w-[160px] h-[70] object-cover",
                                    src: "/logo.jpg",
                                    alt: ""
                                }, void 0, false, {
                                    fileName: "[project]/src/app/common/Header.jsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMegaMenuOpen(!MegaMenuOpen),
                                    className: "".concat(MegaMenuOpen ? 'bg-red-600 text-white' : 'bg-white', " flex items-center  gap-2 border-[2px] border-red-600 rounded-[10px] px-[15px] py-[8px] text-red-600    cursor-pointer  font-semibold duration-300 hover:bg-red-600 hover:text-white hover:border-transparent"),
                                    children: [
                                        "All Courses ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaAngleDown"], {
                                            className: "".concat(MegaMenuOpen ? 'rotate-180' : 'rotate-0', " duration-200")
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/common/Header.jsx",
                                            lineNumber: 44,
                                            columnNumber: 27
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$homePageComponents$2f$MegaMenu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            MegaMenuOpen: MegaMenuOpen,
                                            setMegaMenuOpen: setMegaMenuOpen
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/common/Header.jsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this),
                                        MegaMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-[100%] z-50 left-0 w-full h-screen bg-[rgba(0,0,0,0.6)] "
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/common/Header.jsx",
                                            lineNumber: 47,
                                            columnNumber: 32
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/common/Header.jsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/common/Header.jsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "flex items-center ",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ApiData$2f$categoryApi$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["megaMenuData"].map((items, index)=>{
                                        const { subCategory } = items;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "text-[14px] font-semibold hover:bg-red-50 px-[10px] py-[35px] duration-300 cursor-pointer uppercase text-gray-500 group",
                                            children: [
                                                items.parentCategory,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "invisible opacity-0 group-hover:opacity-100 origin-top transition-all brightness-110  duration-300 ease-in-out group-hover:visible absolute top-[100%] left-1/2 -translate-x-1/2 w-[1100px] h-auto bg-white shadow-2xl border-[1px] border-gray-300 grid grid-cols-4 gap-4 p-5 rounded-b-[35px]",
                                                    children: subCategory.map((subCat, ind)=>{
                                                        const { subSubCategory } = subCat;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "text-[20px] uppercase text-red-600  mb-2",
                                                                    children: subCat.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/common/Header.jsx",
                                                                    lineNumber: 64,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    children: subSubCategory.map((subSubCat, indx)=>{
                                                                        const { courses } = subSubCat;
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    className: "text-[18px] capitalize my-4 ml-2 text-gray-700 flex items-center  gap-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$vsc$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VscTriangleRight"], {}, void 0, false, {
                                                                                            fileName: "[project]/src/app/common/Header.jsx",
                                                                                            lineNumber: 72,
                                                                                            columnNumber: 125
                                                                                        }, this),
                                                                                        " ",
                                                                                        subSubCat.name
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/common/Header.jsx",
                                                                                    lineNumber: 72,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                courses.map((course, indexs)=>{
                                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                        href: "/course/".concat(course.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-")),
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                            className: "ml-8 my-[10px] text-gray-600 hover:text-red-600 duration-300",
                                                                                            children: course
                                                                                        }, indexs, false, {
                                                                                            fileName: "[project]/src/app/common/Header.jsx",
                                                                                            lineNumber: 75,
                                                                                            columnNumber: 118
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/common/Header.jsx",
                                                                                        lineNumber: 75,
                                                                                        columnNumber: 41
                                                                                    }, this);
                                                                                })
                                                                            ]
                                                                        }, indx, true, {
                                                                            fileName: "[project]/src/app/common/Header.jsx",
                                                                            lineNumber: 71,
                                                                            columnNumber: 35
                                                                        }, this);
                                                                    })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/common/Header.jsx",
                                                                    lineNumber: 67,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, ind, true, {
                                                            fileName: "[project]/src/app/common/Header.jsx",
                                                            lineNumber: 63,
                                                            columnNumber: 27
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/common/Header.jsx",
                                                    lineNumber: 59,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/app/common/Header.jsx",
                                            lineNumber: 57,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/common/Header.jsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setActivePage("login");
                                        setMegaMenuOpen(false);
                                    },
                                    className: "bg-red-600  duration-300 cursor-pointer px-[25px] rounded-[10px] hover:bg-gray-700 py-[10px] text-white  text-[16px]",
                                    children: "Login / Register"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/common/Header.jsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/common/Header.jsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/common/Header.jsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/common/Header.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-0 py-[20px] px-2 shadow-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setMobileMenu(!mobileMenu),
                                        className: "text-[30px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlineBars3CenterLeft"], {}, void 0, false, {
                                            fileName: "[project]/src/app/common/Header.jsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/common/Header.jsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "w-[100px] object-cover",
                                        src: "https://inframestudios.co.nz/wp-content/uploads/2025/01/Copy-of-Original-size-inframe-studios-removebg-preview-removebg-preview.png",
                                        alt: ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/common/Header.jsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/common/Header.jsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setActivePage("login");
                                    setMegaMenuOpen(false);
                                },
                                className: "bg-red-600 hover:bg-red-500 duration-300 cursor-pointer px-[25px] rounded-[10px] py-[5px] text-white text-[16px]",
                                children: "Login"
                            }, void 0, false, {
                                fileName: "[project]/src/app/common/Header.jsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/common/Header.jsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "".concat(mobileMenu ? "left-0" : "-left-[100%]", " duration-300 fixed top-0 w-[100%] h-[150vh] bg-white px-3 py-8"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between pr-[6px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "w-[200px] object-cover",
                                        src: "https://inframestudios.co.nz/wp-content/uploads/2025/01/Copy-of-Original-size-inframe-studios-removebg-preview-removebg-preview.png",
                                        alt: ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/common/Header.jsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setMobileMenu(false),
                                        className: "text-[30px] ",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdClose"], {}, void 0, false, {
                                            fileName: "[project]/src/app/common/Header.jsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/common/Header.jsx",
                                        lineNumber: 141,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/common/Header.jsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "px-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "my-[35px] text-[22px] border-b-[1px] border-gray-100 pb-2 flex items-center gap-1 justify-between",
                                        children: [
                                            "All Courses ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaAngleRight"], {}, void 0, false, {
                                                fileName: "[project]/src/app/common/Header.jsx",
                                                lineNumber: 150,
                                                columnNumber: 27
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/common/Header.jsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "my-[35px] text-[22px] border-b-[1px] border-gray-100 pb-2",
                                        children: "Online Courses"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/common/Header.jsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "my-[35px] text-[22px] border-b-[1px] border-gray-100 pb-2",
                                        children: "Offline Courses"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/common/Header.jsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "my-[35px] text-[22px] border-b-[1px] border-gray-100 pb-2",
                                        children: "Study Materials"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/common/Header.jsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "my-[35px] text-[22px] border-b-[1px] border-gray-100 pb-2",
                                        children: "Free Resources"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/common/Header.jsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "my-[35px] text-[22px] border-b-[1px] border-gray-100 pb-2",
                                        children: "Test Series"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/common/Header.jsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setActivePage("login");
                                            setMobileMenu(false);
                                            setMegaMenuOpen(false);
                                        },
                                        className: "w-full bg-red-600 hover:bg-gray-900 duration-300 text-white rounded-[10px] py-[10px] text-[22px]",
                                        children: "Login / Register"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/common/Header.jsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/common/Header.jsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/common/Header.jsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/common/Header.jsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/common/Header.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(Header, "CGfmVfCU1FCwzhQJ0IL/qSjlJoo=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/common/FooterNew.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>FooterNew
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ri/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ApiData$2f$categoryApi$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ApiData/categoryApi.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function FooterNew() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full lg:mt-[60px] mt-[30px]  bg-gradient-to-r from-red-700 via-red-800 to-black text-white lg:px-6 px-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1320px] mx-auto py-[30px] grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-10",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ApiData$2f$categoryApi$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["megaMenuData"].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "uppercase text-[20px] tracking-widest mb-4 font-extrabold border-b-[1] border-white",
                                    children: item.parentCategory
                                }, void 0, false, {
                                    fileName: "[project]/src/app/common/FooterNew.jsx",
                                    lineNumber: 14,
                                    columnNumber: 29
                                }, this),
                                item.subCategory.map((subCat)=>subCat.subSubCategory.map((subSubCat)=>subSubCat.courses.map((course, courseIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/course/".concat(course.replace(/[^a-zA-Z0-9]/g, "-")),
                                                children: [
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "my-2 text-[16px] cursor-pointer hover:text-gray-200 hover:underline duration-300 ",
                                                        children: course
                                                    }, courseIndex, false, {
                                                        fileName: "[project]/src/app/common/FooterNew.jsx",
                                                        lineNumber: 18,
                                                        columnNumber: 105
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/common/FooterNew.jsx",
                                                lineNumber: 18,
                                                columnNumber: 41
                                            }, this))))
                            ]
                        }, index, true, {
                            fileName: "[project]/src/app/common/FooterNew.jsx",
                            lineNumber: 13,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/common/FooterNew.jsx",
                    lineNumber: 11,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/common/FooterNew.jsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full lg:py-[30px] py-[20px] bg-black lg:px-6 px-3 ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1320] mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-3 justify-center items-center gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-white md:border-r-[1] pr-10 border-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[24px] mb-2 font-semibold uppercase",
                                        children: "About Us"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/common/FooterNew.jsx",
                                        lineNumber: 32,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[18px] text-justify tracking-tight",
                                        children: "InFrame Design Institute (IDI), established in 2013, is a premier design education center located in Jodhpur, Rajasthan. Founded by a group of artists, IDI offers comprehensive coaching for various design entrance examinations, including NIFT, NID, and UCEED."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/common/FooterNew.jsx",
                                        lineNumber: 33,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/common/FooterNew.jsx",
                                lineNumber: 31,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-white md:border-r-[1] pr-3 h-[100%] border-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[24px] font-semibold mb-4 uppercase  ",
                                        children: "Connect with us"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/common/FooterNew.jsx",
                                        lineNumber: 42,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "my-[5px] text-[18px]",
                                        children: [
                                            "EMAIL : ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hover:underline duration-100 cursor-pointer",
                                                children: "Inframe@gmail.com"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/common/FooterNew.jsx",
                                                lineNumber: 43,
                                                columnNumber: 73
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/common/FooterNew.jsx",
                                        lineNumber: 43,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "my-[5px] text-[18px]",
                                        children: [
                                            "PHONE : ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hover:underline duration-100 cursor-pointer",
                                                children: "+91-8079025145"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/common/FooterNew.jsx",
                                                lineNumber: 44,
                                                columnNumber: 73
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/common/FooterNew.jsx",
                                        lineNumber: 44,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "flex flex-wrap gap-5 items-center my-[15px] text-[18px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "cursor-pointer hover:text-gray-300 duration-100",
                                                children: "Terms and condition   | "
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/common/FooterNew.jsx",
                                                lineNumber: 46,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "cursor-pointer hover:text-gray-300 duration-100",
                                                children: "Privacy Policy   | "
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/common/FooterNew.jsx",
                                                lineNumber: 47,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "cursor-pointer hover:text-gray-300 duration-100",
                                                children: "Refund Policy   |"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/common/FooterNew.jsx",
                                                lineNumber: 48,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: '/contact-us',
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "cursor-pointer hover:text-gray-300 duration-100",
                                                    children: "Contact Us   |"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/common/FooterNew.jsx",
                                                    lineNumber: 49,
                                                    columnNumber: 60
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/common/FooterNew.jsx",
                                                lineNumber: 49,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/about-us",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "cursor-pointer hover:text-gray-300 duration-100",
                                                    children: "About Us"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/common/FooterNew.jsx",
                                                    lineNumber: 50,
                                                    columnNumber: 56
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/common/FooterNew.jsx",
                                                lineNumber: 50,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/common/FooterNew.jsx",
                                        lineNumber: 45,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/common/FooterNew.jsx",
                                lineNumber: 41,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-white  h-[100%]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-[24px] font-semibold uppercase",
                                        children: "Social Channels"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/common/FooterNew.jsx",
                                        lineNumber: 54,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-5 text-[25px] cursor-pointer my-[10px] mr-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaYoutube"], {
                                                className: "hover:text-gray-400 duration-100"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/common/FooterNew.jsx",
                                                lineNumber: 56,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFacebookSquare"], {
                                                className: "hover:text-gray-400 duration-100"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/common/FooterNew.jsx",
                                                lineNumber: 57,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiInstagramFill"], {
                                                className: "hover:text-gray-400 duration-100"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/common/FooterNew.jsx",
                                                lineNumber: 58,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTwitterSquare"], {
                                                className: "hover:text-gray-400 duration-100"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/common/FooterNew.jsx",
                                                lineNumber: 59,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLinkedin"], {
                                                className: "hover:text-gray-400 duration-100"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/common/FooterNew.jsx",
                                                lineNumber: 60,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/common/FooterNew.jsx",
                                        lineNumber: 55,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-[20px] mt-[25px] font-semibold uppercase",
                                        children: "Get the app for better Experience"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/common/FooterNew.jsx",
                                        lineNumber: 62,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "w-[180] -ml-3 cursor-pointer object-cover",
                                        src: "https://cdn.toprankers.net.in/images/google-play-badge1699151081.png",
                                        alt: ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/common/FooterNew.jsx",
                                        lineNumber: 63,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/common/FooterNew.jsx",
                                lineNumber: 53,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/common/FooterNew.jsx",
                        lineNumber: 30,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/common/FooterNew.jsx",
                    lineNumber: 29,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/common/FooterNew.jsx",
                lineNumber: 28,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full bg-black text-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center py-[15px] border-t-[1] border-white",
                    children: "© Copyrights 2013 - 2025 IDI Jodhpur. All Rights Reserved"
                }, void 0, false, {
                    fileName: "[project]/src/app/common/FooterNew.jsx",
                    lineNumber: 69,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/common/FooterNew.jsx",
                lineNumber: 68,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_c = FooterNew;
var _c;
__turbopack_context__.k.register(_c, "FooterNew");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_050566d9._.js.map