(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/supabase/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)");
;
function createClient() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://kbzuzrmxutdgoljjmaqc.supabase.co"), ("TURBOPACK compile-time value", "sb_publishable_bGDbo97RdNhpcYtPlidExA_tjv3e5V6"));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-client] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const navigation = [
    {
        name: 'Tableau de bord',
        href: '/dashboard',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
    },
    {
        name: 'Devis',
        href: '/quotes',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
    },
    {
        name: 'Factures',
        href: '/invoices',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"]
    },
    {
        name: 'Clients',
        href: '/clients',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    },
    {
        name: 'Historique',
        href: '/history',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"]
    },
    {
        name: 'Paramètres',
        href: '/settings',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
    }
];
function Sidebar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleLogout = async ()=>{
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        await supabase.auth.signOut();
        router.push('/login');
    };
    const NavContent = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 px-4 py-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                className: "w-7 h-7 text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Sidebar.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Sidebar.tsx",
                            lineNumber: 45,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold text-gray-800",
                                    children: "Ankès"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Sidebar.tsx",
                                    lineNumber: 49,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-400",
                                    children: "Devis & Factures"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Sidebar.tsx",
                                    lineNumber: 50,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Sidebar.tsx",
                            lineNumber: 48,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Sidebar.tsx",
                    lineNumber: 44,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex-1 px-3 py-4 space-y-1",
                    children: navigation.map((item)=>{
                        const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            onClick: ()=>setMobileOpen(false),
                            className: `
                flex items-center gap-3 px-4 py-3.5 rounded-xl
                font-medium transition-all duration-200
                ${isActive ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'}
              `,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Sidebar.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this),
                                item.name
                            ]
                        }, item.name, true, {
                            fileName: "[project]/src/components/layout/Sidebar.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Sidebar.tsx",
                    lineNumber: 55,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 border-t border-gray-100",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleLogout,
                        className: "flex items-center gap-3 w-full px-4 py-3.5 rounded-xl text-gray-600 font-medium hover:bg-red-50 hover:text-red-600 transition-all duration-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Sidebar.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            "Déconnexion"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Sidebar.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Sidebar.tsx",
                    lineNumber: 80,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setMobileOpen(true),
                className: "lg:hidden fixed top-4 left-4 z-40 p-3 bg-white rounded-xl shadow-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                    className: "w-6 h-6 text-gray-600"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Sidebar.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Sidebar.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden fixed inset-0 z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gray-900/50 backdrop-blur-sm",
                        onClick: ()=>setMobileOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Sidebar.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-0 top-0 bottom-0 w-72 bg-white shadow-2xl flex flex-col animate-slideIn",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setMobileOpen(false),
                                className: "absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5 text-gray-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Sidebar.tsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Sidebar.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavContent, {}, void 0, false, {
                                fileName: "[project]/src/components/layout/Sidebar.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Sidebar.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Sidebar.tsx",
                lineNumber: 107,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "hidden lg:flex lg:flex-col lg:w-72 lg:fixed lg:inset-y-0 bg-white border-r border-gray-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavContent, {}, void 0, false, {
                    fileName: "[project]/src/components/layout/Sidebar.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Sidebar.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Sidebar, "F7+0Abk4GAcgh5CrnDoBDBBNHIM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/AppLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Sidebar.tsx [app-client] (ecmascript)");
'use client';
;
;
function AppLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/AppLayout.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "lg:pl-72",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 sm:px-6 lg:px-8 py-8 pt-20 lg:pt-8",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/AppLayout.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/AppLayout.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/AppLayout.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = AppLayout;
var _c;
__turbopack_context__.k.register(_c, "AppLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
'use client';
;
;
;
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ children, variant = 'primary', size = 'md', isLoading = false, icon, className = '', disabled, ...props }, ref)=>{
    const baseStyles = `
      inline-flex items-center justify-center gap-2 
      font-semibold rounded-2xl 
      transition-all duration-200 ease-out
      focus:outline-none focus:ring-4
      disabled:opacity-50 disabled:cursor-not-allowed
      active:scale-[0.98]
    `;
    const variants = {
        primary: `
        bg-gradient-to-b from-blue-500 to-blue-600 
        text-white 
        shadow-lg shadow-blue-500/30
        hover:from-blue-400 hover:to-blue-500 hover:shadow-xl hover:shadow-blue-500/40
        focus:ring-blue-500/30
      `,
        secondary: `
        bg-white 
        text-gray-700 
        border-2 border-gray-200
        shadow-sm
        hover:bg-gray-50 hover:border-gray-300 hover:shadow-md
        focus:ring-gray-500/20
      `,
        danger: `
        bg-gradient-to-b from-red-500 to-red-600 
        text-white 
        shadow-lg shadow-red-500/30
        hover:from-red-400 hover:to-red-500 hover:shadow-xl hover:shadow-red-500/40
        focus:ring-red-500/30
      `,
        ghost: `
        bg-transparent 
        text-gray-600 
        hover:bg-gray-100 hover:text-gray-800
        focus:ring-gray-500/20
      `
    };
    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
        xl: 'px-10 py-5 text-xl'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        className: `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`,
        disabled: disabled || isLoading,
        ...props,
        children: [
            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "w-5 h-5 animate-spin"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Button.tsx",
                lineNumber: 79,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)) : icon ? icon : null,
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Button.tsx",
        lineNumber: 72,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = 'Button';
const __TURBOPACK__default__export__ = Button;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const Input = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ label, error, hint, icon, className = '', ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-gray-700 mb-2",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Input.tsx",
                lineNumber: 17,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400",
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Input.tsx",
                        lineNumber: 23,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: ref,
                        className: `
              w-full px-4 py-3.5 
              ${icon ? 'pl-12' : ''}
              bg-white 
              border-2 border-gray-200 
              rounded-xl
              text-gray-800 
              placeholder:text-gray-400
              transition-all duration-200
              focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10
              hover:border-gray-300
              disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
              ${error ? 'border-red-400 focus:border-red-500 focus:ring-red-500/10' : ''}
              ${className}
            `,
                        ...props
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Input.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Input.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            hint && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm text-gray-500",
                children: hint
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Input.tsx",
                lineNumber: 48,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm text-red-500 flex items-center gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-1 h-1 bg-red-500 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Input.tsx",
                        lineNumber: 52,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Input.tsx",
                lineNumber: 51,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Input.tsx",
        lineNumber: 15,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = 'Input';
const __TURBOPACK__default__export__ = Input;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ children, variant = 'default', padding = 'md', hover = false, className = '', ...props }, ref)=>{
    const variants = {
        default: 'bg-white shadow-sm border border-gray-100',
        elevated: 'bg-white shadow-xl shadow-gray-200/50',
        outlined: 'bg-white border-2 border-gray-200'
    };
    const paddings = {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8'
    };
    const hoverStyles = hover ? 'transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/50 hover:-translate-y-1 cursor-pointer' : '';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `
          rounded-2xl 
          ${variants[variant]} 
          ${paddings[padding]}
          ${hoverStyles}
          ${className}
        `,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Card.tsx",
        lineNumber: 38,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Card;
Card.displayName = 'Card';
const __TURBOPACK__default__export__ = Card;
var _c, _c1;
__turbopack_context__.k.register(_c, "Card$forwardRef");
__turbopack_context__.k.register(_c1, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Formatage des montants en euros
__turbopack_context__.s([
    "calculateLineTotal",
    ()=>calculateLineTotal,
    "calculateTTC",
    ()=>calculateTTC,
    "calculateVAT",
    ()=>calculateVAT,
    "formatCurrency",
    ()=>formatCurrency,
    "formatCurrencyPDF",
    ()=>formatCurrencyPDF,
    "formatDate",
    ()=>formatDate,
    "formatDateForInput",
    ()=>formatDateForInput,
    "formatSIRET",
    ()=>formatSIRET,
    "generateDocumentNumber",
    ()=>generateDocumentNumber,
    "generateId",
    ()=>generateId,
    "getStatusColor",
    ()=>getStatusColor,
    "getStatusLabel",
    ()=>getStatusLabel,
    "isValidSIRET",
    ()=>isValidSIRET
]);
function formatCurrency(amount) {
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR'
    }).format(amount);
}
function formatCurrencyPDF(amount) {
    // Formater le nombre avec séparateur de milliers
    const parts = amount.toFixed(2).split('.');
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    const decimalPart = parts[1];
    return `${integerPart},${decimalPart} €`;
}
function formatDate(date) {
    const d = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).format(d);
}
function formatDateForInput(date) {
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toISOString().split('T')[0];
}
function calculateLineTotal(quantity, unitPrice) {
    return Math.round(quantity * unitPrice * 100) / 100;
}
function calculateVAT(amountHT, vatRate) {
    return Math.round(amountHT * (vatRate / 100) * 100) / 100;
}
function calculateTTC(amountHT, vatRate) {
    return Math.round(amountHT * (1 + vatRate / 100) * 100) / 100;
}
function generateDocumentNumber(type, count) {
    const prefix = type === 'quote' ? 'DEV' : 'FAC';
    const number = String(count + 1).padStart(3, '0');
    return `${prefix}-${number}`;
}
function getStatusColor(status) {
    const colors = {
        draft: {
            bg: 'bg-gray-100',
            text: 'text-gray-700',
            dot: 'bg-gray-400'
        },
        sent: {
            bg: 'bg-amber-100',
            text: 'text-amber-700',
            dot: 'bg-amber-400'
        },
        accepted: {
            bg: 'bg-emerald-100',
            text: 'text-emerald-700',
            dot: 'bg-emerald-400'
        },
        refused: {
            bg: 'bg-red-100',
            text: 'text-red-700',
            dot: 'bg-red-400'
        },
        paid: {
            bg: 'bg-emerald-100',
            text: 'text-emerald-700',
            dot: 'bg-emerald-400'
        },
        unpaid: {
            bg: 'bg-red-100',
            text: 'text-red-700',
            dot: 'bg-red-400'
        }
    };
    return colors[status] || colors.draft;
}
function getStatusLabel(status) {
    const labels = {
        draft: 'Brouillon',
        sent: 'Envoyé',
        accepted: 'Accepté',
        refused: 'Refusé',
        paid: 'Payé',
        unpaid: 'Impayé'
    };
    return labels[status] || status;
}
function isValidSIRET(siret) {
    const cleaned = siret.replace(/\s/g, '');
    return /^\d{14}$/.test(cleaned);
}
function formatSIRET(siret) {
    const cleaned = siret.replace(/\s/g, '');
    if (cleaned.length !== 14) return siret;
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 9)} ${cleaned.slice(9)}`;
}
function generateId() {
    return Math.random().toString(36).substring(2, 15);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
function Badge({ status, size = 'md' }) {
    const colors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStatusColor"])(status);
    const label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStatusLabel"])(status);
    const sizes = {
        sm: 'px-2.5 py-1 text-xs',
        md: 'px-3 py-1.5 text-sm',
        lg: 'px-4 py-2 text-base'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `
        inline-flex items-center gap-2 
        font-medium rounded-full
        ${colors.bg} ${colors.text}
        ${sizes[size]}
      `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `w-2 h-2 rounded-full ${colors.dot}`
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Badge.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            label
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Badge.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = Badge;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Modal({ isOpen, onClose, title, children, size = 'md' }) {
    _s();
    const overlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            const handleEscape = {
                "Modal.useEffect.handleEscape": (e)=>{
                    if (e.key === 'Escape') onClose();
                }
            }["Modal.useEffect.handleEscape"];
            if (isOpen) {
                document.addEventListener('keydown', handleEscape);
                document.body.style.overflow = 'hidden';
            }
            return ({
                "Modal.useEffect": ()=>{
                    document.removeEventListener('keydown', handleEscape);
                    document.body.style.overflow = 'unset';
                }
            })["Modal.useEffect"];
        }
    }["Modal.useEffect"], [
        isOpen,
        onClose
    ]);
    if (!isOpen) return null;
    const sizes = {
        sm: 'max-w-md',
        md: 'max-w-lg',
        lg: 'max-w-2xl',
        xl: 'max-w-4xl'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: overlayRef,
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        onClick: (e)=>{
            if (e.target === overlayRef.current) onClose();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gray-900/60 backdrop-blur-sm animate-fadeIn"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Modal.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
          relative w-full ${sizes[size]}
          bg-white rounded-3xl shadow-2xl
          animate-scaleIn
          max-h-[90vh] overflow-hidden flex flex-col
        `,
                children: [
                    title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-6 py-4 border-b border-gray-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-gray-800",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Modal.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-2 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Modal.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Modal.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/Modal.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-6",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Modal.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Modal.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Modal.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(Modal, "rmj6vZ+Vy6O1wOWphXugz2fiTMw=");
_c = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
'use client';
;
;
;
const Select = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ label, error, options, className = '', ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-gray-700 mb-2",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Select.tsx",
                lineNumber: 17,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        ref: ref,
                        className: `
              w-full px-4 py-3.5 pr-10
              bg-white 
              border-2 border-gray-200 
              rounded-xl
              text-gray-800 
              appearance-none
              cursor-pointer
              transition-all duration-200
              focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10
              hover:border-gray-300
              disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
              ${error ? 'border-red-400 focus:border-red-500 focus:ring-red-500/10' : ''}
              ${className}
            `,
                        ...props,
                        children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: option.value,
                                children: option.label
                            }, option.value, false, {
                                fileName: "[project]/src/components/ui/Select.tsx",
                                lineNumber: 42,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Select.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: "absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Select.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Select.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm text-red-500 flex items-center gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-1 h-1 bg-red-500 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Select.tsx",
                        lineNumber: 51,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Select.tsx",
                lineNumber: 50,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Select.tsx",
        lineNumber: 15,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Select;
Select.displayName = 'Select';
const __TURBOPACK__default__export__ = Select;
var _c, _c1;
__turbopack_context__.k.register(_c, "Select$forwardRef");
__turbopack_context__.k.register(_c1, "Select");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/StatCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Card.tsx [app-client] (ecmascript)");
'use client';
;
;
function StatCard({ title, value, icon, trend, color = 'blue' }) {
    const colors = {
        blue: {
            bg: 'bg-blue-50',
            icon: 'bg-blue-500',
            iconShadow: 'shadow-blue-500/30'
        },
        green: {
            bg: 'bg-emerald-50',
            icon: 'bg-emerald-500',
            iconShadow: 'shadow-emerald-500/30'
        },
        orange: {
            bg: 'bg-amber-50',
            icon: 'bg-amber-500',
            iconShadow: 'shadow-amber-500/30'
        },
        red: {
            bg: 'bg-red-50',
            icon: 'bg-red-500',
            iconShadow: 'shadow-red-500/30'
        },
        purple: {
            bg: 'bg-purple-50',
            icon: 'bg-purple-500',
            iconShadow: 'shadow-purple-500/30'
        }
    };
    const colorStyles = colors[color];
    // Déterminer la taille du texte en fonction de la longueur de la valeur
    const valueLength = String(value).length;
    const textSizeClass = valueLength > 12 ? 'text-xl' : valueLength > 9 ? 'text-2xl' : 'text-3xl';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        variant: "default",
        padding: "lg",
        hover: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-medium text-gray-500 mb-1",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/StatCard.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `${textSizeClass} font-bold text-gray-800`,
                            children: value
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/StatCard.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        trend && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `text-sm mt-2 font-medium ${trend.isPositive ? 'text-emerald-600' : 'text-red-600'}`,
                            children: [
                                trend.isPositive ? '↑' : '↓',
                                " ",
                                Math.abs(trend.value),
                                "%",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-400 font-normal ml-1",
                                    children: "vs mois dernier"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/StatCard.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/StatCard.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/StatCard.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `p-4 rounded-2xl ${colorStyles.icon} shadow-lg ${colorStyles.iconShadow} flex-shrink-0`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-white",
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/StatCard.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/StatCard.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/StatCard.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/StatCard.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_c = StatCard;
var _c;
__turbopack_context__.k.register(_c, "StatCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Button.tsx [app-client] (ecmascript) <export default as Button>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
}),
"[project]/src/components/ui/PDFPreviewModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PDFPreviewModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$2f$lib$2f$react$2d$pdf$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-pdf/renderer/lib/react-pdf.browser.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ui/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript) <export default as Button>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function PDFPreviewModal({ isOpen, onClose, document, fileName }) {
    _s();
    const [pdfUrl, setPdfUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PDFPreviewModal.useEffect": ()=>{
            if (isOpen) {
                generatePDF();
            } else {
                // Cleanup URL when modal closes
                if (pdfUrl) {
                    URL.revokeObjectURL(pdfUrl);
                    setPdfUrl(null);
                }
            }
        }
    }["PDFPreviewModal.useEffect"], [
        isOpen
    ]);
    const generatePDF = async ()=>{
        setIsLoading(true);
        try {
            const blob = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$pdf$2f$renderer$2f$lib$2f$react$2d$pdf$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["pdf"])(document).toBlob();
            const url = URL.createObjectURL(blob);
            setPdfUrl(url);
        } catch (error) {
            console.error('Erreur génération PDF:', error);
        } finally{
            setIsLoading(false);
        }
    };
    const handleDownload = ()=>{
        if (!pdfUrl) return;
        const a = window.document.createElement('a');
        a.href = pdfUrl;
        a.download = `${fileName}.pdf`;
        a.click();
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/src/components/ui/PDFPreviewModal.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-5xl h-[90vh] mx-4 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-scaleIn",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-gray-800",
                                        children: "Prévisualisation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/PDFPreviewModal.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500",
                                        children: [
                                            fileName,
                                            ".pdf"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/PDFPreviewModal.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/PDFPreviewModal.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                        variant: "secondary",
                                        size: "sm",
                                        onClick: handleDownload,
                                        disabled: isLoading,
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/PDFPreviewModal.tsx",
                                            lineNumber: 76,
                                            columnNumber: 21
                                        }, void 0),
                                        children: "Télécharger"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/PDFPreviewModal.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClose,
                                        className: "p-2 rounded-lg hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/PDFPreviewModal.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/PDFPreviewModal.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/PDFPreviewModal.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/PDFPreviewModal.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 bg-gray-100 overflow-auto",
                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center h-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "w-10 h-10 animate-spin text-blue-500 mx-auto mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/PDFPreviewModal.tsx",
                                        lineNumber: 94,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: "Génération du PDF..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/PDFPreviewModal.tsx",
                                        lineNumber: 95,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/PDFPreviewModal.tsx",
                                lineNumber: 93,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/PDFPreviewModal.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this) : pdfUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            src: pdfUrl,
                            className: "w-full h-full",
                            title: "Prévisualisation PDF"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/PDFPreviewModal.tsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center h-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500",
                                children: "Impossible de générer la prévisualisation"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/PDFPreviewModal.tsx",
                                lineNumber: 106,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/PDFPreviewModal.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/PDFPreviewModal.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/PDFPreviewModal.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/PDFPreviewModal.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(PDFPreviewModal, "X+scyMd38VcwYS1wb4V+Dw45Wqg=");
_c = PDFPreviewModal;
var _c;
__turbopack_context__.k.register(_c, "PDFPreviewModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Input.tsx [app-client] (ecmascript) <export default as Input>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Input.tsx [app-client] (ecmascript)");
}),
"[project]/src/services/clients.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clientsService",
    ()=>clientsService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client.ts [app-client] (ecmascript)");
;
const clientsService = {
    // Récupérer tous les clients
    async getAll () {
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('clients').select('*').order('created_at', {
            ascending: false
        });
        if (error) {
            console.error('Erreur getAll clients:', error);
            throw error;
        }
        return data || [];
    },
    // Récupérer un client par ID
    async getById (id) {
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('clients').select('*').eq('id', id).single();
        if (error) {
            console.error('Erreur getById client:', error);
            throw error;
        }
        return data;
    },
    // Créer un nouveau client
    async create (client) {
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            console.error('Utilisateur non authentifié');
            throw new Error('Non authentifié');
        }
        console.log('Création client pour user:', user.id, client);
        const { data, error } = await supabase.from('clients').insert({
            ...client,
            user_id: user.id
        }).select().single();
        if (error) {
            console.error('Erreur création client:', error);
            throw error;
        }
        console.log('Client créé:', data);
        return data;
    },
    // Mettre à jour un client
    async update (id, client) {
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('clients').update(client).eq('id', id).select().single();
        if (error) {
            console.error('Erreur update client:', error);
            throw error;
        }
        return data;
    },
    // Supprimer un client
    async delete (id) {
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        const { error } = await supabase.from('clients').delete().eq('id', id);
        if (error) {
            console.error('Erreur delete client:', error);
            throw error;
        }
    },
    // Rechercher des clients
    async search (query) {
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('clients').select('*').or(`name.ilike.%${query}%,email.ilike.%${query}%`).order('name');
        if (error) {
            console.error('Erreur search clients:', error);
            throw error;
        }
        return data || [];
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/CreateClientModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateClientModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ui/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__ = __turbopack_context__.i("[project]/src/components/ui/Input.tsx [app-client] (ecmascript) <export default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/clients.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function CreateClientModal({ isOpen, onClose, onClientCreated }) {
    _s();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postal_code: ''
    });
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!formData.name.trim()) {
            alert('Le nom du client est obligatoire');
            return;
        }
        setIsLoading(true);
        try {
            const newClient = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clientsService"].create(formData);
            onClientCreated(newClient);
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                address: '',
                city: '',
                postal_code: ''
            });
            onClose();
        } catch (error) {
            console.error('Erreur création client:', error);
            alert('Erreur lors de la création du client');
        } finally{
            setIsLoading(false);
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CreateClientModal.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-lg mx-4 bg-white rounded-2xl shadow-2xl animate-scaleIn",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-6 border-b border-gray-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                                            className: "w-5 h-5 text-blue-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/CreateClientModal.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/CreateClientModal.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold text-gray-800",
                                                children: "Nouveau client"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/CreateClientModal.tsx",
                                                lineNumber: 61,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500",
                                                children: "Ajoutez rapidement un client"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/CreateClientModal.tsx",
                                                lineNumber: 62,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/CreateClientModal.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/CreateClientModal.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/CreateClientModal.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/CreateClientModal.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/CreateClientModal.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "p-6 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                label: "Nom du client *",
                                placeholder: "Entreprise ou particulier",
                                value: formData.name,
                                onChange: (e)=>setFormData((prev)=>({
                                            ...prev,
                                            name: e.target.value
                                        })),
                                autoFocus: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/CreateClientModal.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                        label: "Email",
                                        type: "email",
                                        placeholder: "contact@exemple.com",
                                        value: formData.email,
                                        onChange: (e)=>setFormData((prev)=>({
                                                    ...prev,
                                                    email: e.target.value
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/CreateClientModal.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                        label: "Téléphone",
                                        type: "tel",
                                        placeholder: "06 12 34 56 78",
                                        value: formData.phone,
                                        onChange: (e)=>setFormData((prev)=>({
                                                    ...prev,
                                                    phone: e.target.value
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/CreateClientModal.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/CreateClientModal.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                label: "Adresse",
                                placeholder: "123 rue de la Paix",
                                value: formData.address,
                                onChange: (e)=>setFormData((prev)=>({
                                            ...prev,
                                            address: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/CreateClientModal.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                        label: "Code postal",
                                        placeholder: "75001",
                                        value: formData.postal_code,
                                        onChange: (e)=>setFormData((prev)=>({
                                                    ...prev,
                                                    postal_code: e.target.value
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/CreateClientModal.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                        label: "Ville",
                                        placeholder: "Paris",
                                        value: formData.city,
                                        onChange: (e)=>setFormData((prev)=>({
                                                    ...prev,
                                                    city: e.target.value
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/CreateClientModal.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/CreateClientModal.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 pt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                        type: "button",
                                        variant: "secondary",
                                        className: "flex-1",
                                        onClick: onClose,
                                        children: "Annuler"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/CreateClientModal.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                        type: "submit",
                                        className: "flex-1",
                                        isLoading: isLoading,
                                        children: "Créer le client"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/CreateClientModal.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/CreateClientModal.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/CreateClientModal.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/CreateClientModal.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/CreateClientModal.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(CreateClientModal, "FhWyTKw3lIGhZaEQihHj8oea3Hs=");
_c = CreateClientModal;
var _c;
__turbopack_context__.k.register(_c, "CreateClientModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/email.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Service d'envoi d'emails
__turbopack_context__.s([
    "emailService",
    ()=>emailService
]);
const emailService = {
    async send (params) {
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            });
            const data = await response.json();
            if (!response.ok) {
                return {
                    success: false,
                    error: data.error
                };
            }
            return {
                success: true
            };
        } catch (error) {
            console.error('Erreur envoi email:', error);
            return {
                success: false,
                error: 'Erreur de connexion'
            };
        }
    },
    // Génère le HTML du mail à partir du template et des variables
    generateEmailHTML (template, variables) {
        let html = template;
        Object.entries(variables).forEach(([key, value])=>{
            html = html.replace(new RegExp(`{{${key}}}`, 'g'), value);
        });
        return html;
    },
    // Templates par défaut
    getDefaultQuoteTemplate () {
        return {
            subject: 'Devis {{document_number}} - {{company_name}}',
            body: `Bonjour {{client_name}},

Veuillez trouver ci-joint notre devis {{document_number}} d'un montant de {{amount}} TTC.

Ce devis est valable jusqu'au {{validity_date}}.

N'hésitez pas à nous contacter si vous avez des questions.

Cordialement,
{{company_name}}
{{company_phone}}`
        };
    },
    getDefaultInvoiceTemplate () {
        return {
            subject: 'Facture {{document_number}} - {{company_name}}',
            body: `Bonjour {{client_name}},

Veuillez trouver ci-joint notre facture {{document_number}} d'un montant de {{amount}} TTC.

Cette facture est à régler avant le {{due_date}}.

N'hésitez pas à nous contacter si vous avez des questions.

Cordialement,
{{company_name}}
{{company_phone}}`
        };
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/SendEmailModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SendEmailModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-client] (ecmascript) <export default as Paperclip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ui/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__ = __turbopack_context__.i("[project]/src/components/ui/Input.tsx [app-client] (ecmascript) <export default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$email$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/email.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// Convertit le texte pur en HTML compact
function textToHtml(text) {
    // Remplacer les doubles sauts de ligne par un <br>, et les simples par rien (même paragraphe)
    const paragraphs = text.split(/\n\n+/);
    return paragraphs.map((p)=>{
        // Mettre en gras les éléments importants (numéro doc, montant, date)
        let html = p.replace(/\n/g, '<br>');
        // Mettre en gras les patterns comme DEV-XXX, FAC-XXX, les montants, et les dates
        html = html.replace(/(DEV-\d+|FAC-\d+)/g, '<strong>$1</strong>');
        html = html.replace(/(\d[\d\s]*,\d{2}\s*€\s*TTC)/g, '<strong>$1</strong>');
        html = html.replace(/(\d{2}\/\d{2}\/\d{4})/g, '<strong>$1</strong>');
        return `<p style="margin: 0 0 8px 0;">${html}</p>`;
    }).join('');
}
function SendEmailModal({ isOpen, onClose, onSuccess, documentType, documentNumber, clientName, clientEmail, amount, validityDate, dueDate, companyName, companyEmail, companyPhone, displayName, templateSubject, templateBody, pdfBlob }) {
    _s();
    const [isSending, setIsSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [to, setTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(clientEmail);
    const [subject, setSubject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [body, setBody] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Variables pour le template
    const variables = {
        client_name: clientName,
        document_number: documentNumber,
        amount: amount,
        company_name: companyName,
        company_email: companyEmail,
        company_phone: companyPhone,
        validity_date: validityDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(validityDate) : '',
        due_date: dueDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(dueDate) : ''
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SendEmailModal.useEffect": ()=>{
            if (isOpen) {
                setTo(clientEmail);
                setSubject(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$email$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emailService"].generateEmailHTML(templateSubject, variables));
                setBody(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$email$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emailService"].generateEmailHTML(templateBody, variables));
            }
        }
    }["SendEmailModal.useEffect"], [
        isOpen,
        clientEmail,
        templateSubject,
        templateBody
    ]);
    const handleSend = async ()=>{
        if (!to) {
            alert('Veuillez saisir une adresse email');
            return;
        }
        if (!pdfBlob) {
            alert('Erreur: PDF non généré');
            return;
        }
        setIsSending(true);
        try {
            // Convertir le blob en base64
            const buffer = await pdfBlob.arrayBuffer();
            const base64 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(buffer).toString('base64');
            // Convertir le texte en HTML pour l'email
            const htmlBody = `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">${textToHtml(body)}</div>`;
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$email$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emailService"].send({
                to,
                subject,
                html: htmlBody,
                from_name: companyName,
                attachments: [
                    {
                        filename: `${documentNumber}.pdf`,
                        content: base64,
                        content_type: 'application/pdf'
                    }
                ]
            });
            if (result.success) {
                onSuccess();
                onClose();
            } else {
                alert(`Erreur: ${result.error}`);
            }
        } catch (error) {
            console.error('Erreur envoi:', error);
            alert('Erreur lors de l\'envoi');
        } finally{
            setIsSending(false);
        }
    };
    if (!isOpen) return null;
    const docLabel = documentType === 'quote' ? 'devis' : 'facture';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/src/components/ui/SendEmailModal.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-2xl animate-scaleIn max-h-[90vh] overflow-hidden flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-6 border-b border-gray-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                            className: "w-5 h-5 text-blue-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/SendEmailModal.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/SendEmailModal.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold text-gray-800",
                                                children: [
                                                    "Envoyer le ",
                                                    docLabel
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ui/SendEmailModal.tsx",
                                                lineNumber: 153,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500",
                                                children: [
                                                    documentNumber,
                                                    " • ",
                                                    clientName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ui/SendEmailModal.tsx",
                                                lineNumber: 154,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/SendEmailModal.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/SendEmailModal.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SendEmailModal.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/SendEmailModal.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/SendEmailModal.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 space-y-4 overflow-y-auto flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                label: "Destinataire",
                                type: "email",
                                placeholder: "email@exemple.com",
                                value: to,
                                onChange: (e)=>setTo(e.target.value),
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SendEmailModal.tsx",
                                    lineNumber: 169,
                                    columnNumber: 19
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/SendEmailModal.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                label: "Sujet",
                                placeholder: "Sujet de l'email",
                                value: subject,
                                onChange: (e)=>setSubject(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/SendEmailModal.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Message"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/SendEmailModal.tsx",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        className: "w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 resize-none",
                                        rows: 10,
                                        value: body,
                                        onChange: (e)=>setBody(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/SendEmailModal.tsx",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/SendEmailModal.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 p-3 bg-gray-50 rounded-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                                        className: "w-5 h-5 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/SendEmailModal.tsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-gray-600",
                                        children: [
                                            documentNumber,
                                            ".pdf"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/SendEmailModal.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-400",
                                        children: [
                                            "(",
                                            pdfBlob ? Math.round(pdfBlob.size / 1024) : 0,
                                            " Ko)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/SendEmailModal.tsx",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/SendEmailModal.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/SendEmailModal.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 p-6 border-t border-gray-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                variant: "secondary",
                                className: "flex-1",
                                onClick: onClose,
                                children: "Annuler"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/SendEmailModal.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                className: "flex-1",
                                onClick: handleSend,
                                isLoading: isSending,
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SendEmailModal.tsx",
                                    lineNumber: 207,
                                    columnNumber: 19
                                }, void 0),
                                children: "Envoyer"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/SendEmailModal.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/SendEmailModal.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/SendEmailModal.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/SendEmailModal.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_s(SendEmailModal, "zhbDJwe+eamzrK8XPvW2wqpVs7U=");
_c = SendEmailModal;
var _c;
__turbopack_context__.k.register(_c, "SendEmailModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/StatCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PDFPreviewModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/PDFPreviewModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CreateClientModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/CreateClientModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SendEmailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SendEmailModal.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Card.tsx [app-client] (ecmascript) <export default as Card>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Card.tsx [app-client] (ecmascript)");
}),
"[project]/src/components/ui/StatCard.tsx [app-client] (ecmascript) <export default as StatCard>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatCard",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/StatCard.tsx [app-client] (ecmascript)");
}),
"[project]/src/components/ui/Badge.tsx [app-client] (ecmascript) <export default as Badge>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Badge.tsx [app-client] (ecmascript)");
}),
"[project]/src/services/documents.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "documentsService",
    ()=>documentsService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
const documentsService = {
    // Récupérer tous les documents d'un type
    async getAll (type) {
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        let query = supabase.from('documents').select(`
        *,
        client:clients(*)
      `).order('created_at', {
            ascending: false
        });
        if (type) {
            query = query.eq('type', type);
        }
        const { data, error } = await query;
        if (error) {
            console.error('Erreur getAll documents:', error);
            throw error;
        }
        return data || [];
    },
    // Récupérer les devis
    async getQuotes () {
        return this.getAll('quote');
    },
    // Récupérer les factures
    async getInvoices () {
        return this.getAll('invoice');
    },
    // Récupérer un document par ID avec ses lignes
    async getById (id) {
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('documents').select(`
        *,
        client:clients(*),
        line_items(*)
      `).eq('id', id).single();
        if (error) {
            console.error('Erreur getById document:', error);
            throw error;
        }
        return data;
    },
    // Générer le prochain numéro de document
    async getNextNumber (type) {
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: { user } } = await supabase.auth.getUser();
        const { count, error } = await supabase.from('documents').select('*', {
            count: 'exact',
            head: true
        }).eq('type', type).eq('user_id', user?.id || '');
        if (error) {
            console.error('Erreur getNextNumber:', error);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateDocumentNumber"])(type, (count || 0) + 1);
    },
    // Créer un nouveau document
    async create (input) {
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            console.error('Utilisateur non authentifié');
            throw new Error('Non authentifié');
        }
        console.log('Création document pour user:', user.id, input);
        // Calculer les totaux
        let total_ht = 0;
        let total_vat = 0;
        const lineItemsWithTotals = input.line_items.map((item, index)=>{
            const line_total_ht = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateLineTotal"])(item.quantity, item.unit_price);
            const line_vat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateVAT"])(line_total_ht, item.vat_rate);
            const line_total_ttc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateTTC"])(line_total_ht, item.vat_rate);
            total_ht += line_total_ht;
            total_vat += line_vat;
            return {
                ...item,
                total_ht: line_total_ht,
                total_ttc: line_total_ttc,
                order_index: index
            };
        });
        const total_ttc = total_ht + total_vat;
        // Générer le numéro
        const number = await this.getNextNumber(input.type);
        // Créer le document avec le statut passé en paramètre (draft par défaut)
        const { data: document, error: docError } = await supabase.from('documents').insert({
            user_id: user.id,
            client_id: input.client_id,
            type: input.type,
            number,
            status: input.status || 'draft',
            issue_date: input.issue_date,
            due_date: input.due_date || null,
            validity_date: input.validity_date || null,
            notes: input.notes || null,
            total_ht,
            total_vat,
            total_ttc
        }).select().single();
        if (docError) {
            console.error('Erreur création document:', docError);
            throw docError;
        }
        console.log('Document créé:', document);
        // Créer les lignes
        const { error: linesError } = await supabase.from('line_items').insert(lineItemsWithTotals.map((item)=>({
                document_id: document.id,
                description: item.description,
                quantity: item.quantity,
                unit_price: item.unit_price,
                vat_rate: item.vat_rate,
                total_ht: item.total_ht,
                total_ttc: item.total_ttc,
                order_index: item.order_index
            })));
        if (linesError) {
            console.error('Erreur création line_items:', linesError);
            throw linesError;
        }
        console.log('Line items créés');
        return document;
    },
    // Mettre à jour un document
    async update (id, input) {
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        const updates = {};
        if (input.client_id) updates.client_id = input.client_id;
        if (input.issue_date) updates.issue_date = input.issue_date;
        if (input.due_date !== undefined) updates.due_date = input.due_date;
        if (input.validity_date !== undefined) updates.validity_date = input.validity_date;
        if (input.notes !== undefined) updates.notes = input.notes;
        // Si on met à jour les lignes
        if (input.line_items) {
            let total_ht = 0;
            let total_vat = 0;
            const lineItemsWithTotals = input.line_items.map((item, index)=>{
                const line_total_ht = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateLineTotal"])(item.quantity, item.unit_price);
                const line_vat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateVAT"])(line_total_ht, item.vat_rate);
                const line_total_ttc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateTTC"])(line_total_ht, item.vat_rate);
                total_ht += line_total_ht;
                total_vat += line_vat;
                return {
                    ...item,
                    total_ht: line_total_ht,
                    total_ttc: line_total_ttc,
                    order_index: index
                };
            });
            updates.total_ht = total_ht;
            updates.total_vat = total_vat;
            updates.total_ttc = total_ht + total_vat;
            // Supprimer les anciennes lignes
            await supabase.from('line_items').delete().eq('document_id', id);
            // Créer les nouvelles
            await supabase.from('line_items').insert(lineItemsWithTotals.map((item)=>({
                    document_id: id,
                    description: item.description,
                    quantity: item.quantity,
                    unit_price: item.unit_price,
                    vat_rate: item.vat_rate,
                    total_ht: item.total_ht,
                    total_ttc: item.total_ttc,
                    order_index: item.order_index
                })));
        }
        const { data, error } = await supabase.from('documents').update(updates).eq('id', id).select().single();
        if (error) {
            console.error('Erreur update document:', error);
            throw error;
        }
        return data;
    },
    // Mettre à jour le statut
    async updateStatus (id, status) {
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('documents').update({
            status
        }).eq('id', id).select().single();
        if (error) {
            console.error('Erreur updateStatus:', error);
            throw error;
        }
        return data;
    },
    // Supprimer un document
    async delete (id) {
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        // Les line_items sont supprimés en cascade
        const { error } = await supabase.from('documents').delete().eq('id', id);
        if (error) {
            console.error('Erreur delete document:', error);
            throw error;
        }
    },
    // Convertir un devis en facture
    async convertQuoteToInvoice (quoteId) {
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        const quote = await this.getById(quoteId);
        if (!quote) throw new Error('Devis non trouvé');
        if (quote.type !== 'quote') throw new Error('Ce document n\'est pas un devis');
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) throw new Error('Non authentifié');
        const number = await this.getNextNumber('invoice');
        // Créer la facture
        const { data: invoice, error: invoiceError } = await supabase.from('documents').insert({
            user_id: user.id,
            client_id: quote.client_id,
            type: 'invoice',
            number,
            status: 'draft',
            issue_date: new Date().toISOString().split('T')[0],
            due_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            notes: quote.notes,
            total_ht: quote.total_ht,
            total_vat: quote.total_vat,
            total_ttc: quote.total_ttc
        }).select().single();
        if (invoiceError) {
            console.error('Erreur conversion devis:', invoiceError);
            throw invoiceError;
        }
        // Copier les lignes
        if (quote.line_items && quote.line_items.length > 0) {
            const { error: linesError } = await supabase.from('line_items').insert(quote.line_items.map((item)=>({
                    document_id: invoice.id,
                    description: item.description,
                    quantity: item.quantity,
                    unit_price: item.unit_price,
                    vat_rate: item.vat_rate,
                    total_ht: item.total_ht,
                    total_ttc: item.total_ttc,
                    order_index: item.order_index
                })));
            if (linesError) {
                console.error('Erreur copie line_items:', linesError);
                throw linesError;
            }
        }
        return invoice;
    },
    // Stats pour le dashboard
    async getStats () {
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        const startOfMonth = new Date();
        startOfMonth.setDate(1);
        startOfMonth.setHours(0, 0, 0, 0);
        // CA du mois (factures payées)
        const { data: paidInvoices } = await supabase.from('documents').select('total_ttc').eq('type', 'invoice').eq('status', 'paid').gte('issue_date', startOfMonth.toISOString().split('T')[0]);
        const monthly_revenue = paidInvoices?.reduce((sum, inv)=>sum + (inv.total_ttc || 0), 0) || 0;
        // Devis en attente
        const { count: pending_quotes } = await supabase.from('documents').select('*', {
            count: 'exact',
            head: true
        }).eq('type', 'quote').eq('status', 'sent');
        // Factures en cours
        const { count: pending_invoices } = await supabase.from('documents').select('*', {
            count: 'exact',
            head: true
        }).eq('type', 'invoice').eq('status', 'sent');
        // Factures impayées
        const { count: unpaid_invoices } = await supabase.from('documents').select('*', {
            count: 'exact',
            head: true
        }).eq('type', 'invoice').eq('status', 'unpaid');
        return {
            monthly_revenue,
            pending_quotes: pending_quotes || 0,
            pending_invoices: pending_invoices || 0,
            unpaid_invoices: unpaid_invoices || 0
        };
    },
    // Vérifier et mettre à jour les factures dont la date d'échéance est dépassée
    async checkAndUpdateOverdueInvoices () {
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        const today = new Date().toISOString().split('T')[0];
        // Trouver les factures "sent" dont la due_date est passée
        const { data: overdueInvoices, error: selectError } = await supabase.from('documents').select('id').eq('type', 'invoice').eq('status', 'sent').lt('due_date', today);
        if (selectError) {
            console.error('Erreur vérification factures impayées:', selectError);
            return 0;
        }
        if (!overdueInvoices || overdueInvoices.length === 0) {
            return 0;
        }
        // Mettre à jour en "unpaid"
        const ids = overdueInvoices.map((inv)=>inv.id);
        const { error: updateError } = await supabase.from('documents').update({
            status: 'unpaid'
        }).in('id', ids);
        if (updateError) {
            console.error('Erreur mise à jour factures impayées:', updateError);
            return 0;
        }
        console.log(`${ids.length} facture(s) passée(s) en impayé`);
        return ids.length;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/user.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "userService",
    ()=>userService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client.ts [app-client] (ecmascript)");
;
const userService = {
    // Récupérer le profil de l'utilisateur connecté
    async getProfile () {
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return null;
        const { data, error } = await supabase.from('users').select('*').eq('id', user.id).single();
        if (error && error.code !== 'PGRST116') {
            console.error('Erreur getProfile:', error);
            throw error;
        }
        return data;
    },
    // Créer ou mettre à jour le profil
    async updateProfile (profile) {
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) throw new Error('Non authentifié');
        console.log('Update profile pour user:', user.id, profile);
        const { data, error } = await supabase.from('users').upsert({
            id: user.id,
            email: profile.email || user.email,
            ...profile
        }).select().single();
        if (error) {
            console.error('Erreur updateProfile:', error);
            throw error;
        }
        console.log('Profil mis à jour:', data);
        return data;
    },
    // Vérifier si le profil est complet (onboarding terminé)
    async isProfileComplete () {
        const profile = await this.getProfile();
        if (!profile) return false;
        return !!(profile.company_name && profile.siret);
    },
    // Mettre à jour les mentions légales
    async updateLegalMentions (mentions) {
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) throw new Error('Non authentifié');
        const { data, error } = await supabase.from('users').update({
            legal_mentions: mentions
        }).eq('id', user.id).select().single();
        if (error) {
            console.error('Erreur updateLegalMentions:', error);
            throw error;
        }
        return data;
    },
    // Mettre à jour le logo
    async updateLogo (logoFile) {
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) throw new Error('Non authentifié');
        const fileExt = logoFile.name.split('.').pop();
        const fileName = `${user.id}/logo-${Date.now()}.${fileExt}`;
        console.log('Upload logo:', fileName);
        // Upload le fichier
        const { error: uploadError } = await supabase.storage.from('logos').upload(fileName, logoFile, {
            upsert: true
        });
        if (uploadError) {
            console.error('Erreur upload logo:', uploadError);
            throw uploadError;
        }
        // Récupérer l'URL publique
        const { data: { publicUrl } } = supabase.storage.from('logos').getPublicUrl(fileName);
        console.log('Logo URL:', publicUrl);
        // Mettre à jour le profil
        const { error: updateError } = await supabase.from('users').update({
            logo_url: publicUrl
        }).eq('id', user.id);
        if (updateError) {
            console.error('Erreur update logo_url:', updateError);
            throw updateError;
        }
        return publicUrl;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-client] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$euro$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Euro$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/euro.js [app-client] (ecmascript) <export default as Euro>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$AppLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/AppLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ui/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/src/components/ui/Card.tsx [app-client] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StatCard$3e$__ = __turbopack_context__.i("[project]/src/components/ui/StatCard.tsx [app-client] (ecmascript) <export default as StatCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__ = __turbopack_context__.i("[project]/src/components/ui/Badge.tsx [app-client] (ecmascript) <export default as Badge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$documents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/documents.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/clients.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/user.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
function DashboardPage() {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        monthly_revenue: 0,
        pending_quotes: 0,
        pending_invoices: 0,
        unpaid_invoices: 0
    });
    const [recentDocuments, setRecentDocuments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [allDocuments, setAllDocuments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [clients, setClients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [greeting, setGreeting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Bonjour');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            const hour = new Date().getHours();
            if (hour < 12) setGreeting('Bonjour');
            else if (hour < 18) setGreeting('Bon après-midi');
            else setGreeting('Bonsoir');
            loadData();
        }
    }["DashboardPage.useEffect"], []);
    const loadData = async ()=>{
        try {
            // Vérifier les factures impayées en premier
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$documents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["documentsService"].checkAndUpdateOverdueInvoices();
            const [profileData, statsData, documentsData, clientsData] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userService"].getProfile(),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$documents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["documentsService"].getStats(),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$documents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["documentsService"].getAll(),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clientsService"].getAll()
            ]);
            setUser(profileData);
            setStats(statsData);
            setAllDocuments(documentsData);
            setRecentDocuments(documentsData.slice(0, 5));
            setClients(clientsData);
        } catch (error) {
            console.error('Erreur chargement données:', error);
        } finally{
            setIsLoading(false);
        }
    };
    // Calculer les stats avancées
    const totalQuotes = allDocuments.filter((d)=>d.type === 'quote').length;
    const totalInvoices = allDocuments.filter((d)=>d.type === 'invoice').length;
    const acceptedQuotes = allDocuments.filter((d)=>d.type === 'quote' && d.status === 'accepted').length;
    const paidInvoices = allDocuments.filter((d)=>d.type === 'invoice' && d.status === 'paid').length;
    const conversionRate = totalQuotes > 0 ? Math.round(acceptedQuotes / totalQuotes * 100) : 0;
    const paymentRate = totalInvoices > 0 ? Math.round(paidInvoices / totalInvoices * 100) : 0;
    // CA total (toutes les factures payées)
    const totalRevenue = allDocuments.filter((d)=>d.type === 'invoice' && d.status === 'paid').reduce((sum, d)=>sum + d.total_ttc, 0);
    // CA par mois (6 derniers mois)
    const getMonthlyRevenue = ()=>{
        const months = [];
        const now = new Date();
        for(let i = 5; i >= 0; i--){
            const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
            const monthName = date.toLocaleDateString('fr-FR', {
                month: 'short'
            });
            const year = date.getFullYear();
            const month = date.getMonth();
            const monthDocs = allDocuments.filter((d)=>{
                const docDate = new Date(d.issue_date);
                return d.type === 'invoice' && d.status === 'paid' && docDate.getMonth() === month && docDate.getFullYear() === year;
            });
            months.push({
                month: monthName,
                revenue: monthDocs.reduce((sum, d)=>sum + d.total_ttc, 0),
                invoices: monthDocs.length
            });
        }
        return months;
    };
    const monthlyData = getMonthlyRevenue();
    const maxRevenue = Math.max(...monthlyData.map((m)=>m.revenue), 1);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$AppLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center min-h-[50vh]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "w-8 h-8 animate-spin text-blue-500"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/page.tsx",
                    lineNumber: 103,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 102,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/page.tsx",
            lineNumber: 101,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$AppLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-bold text-gray-800",
                                    children: [
                                        greeting,
                                        user?.display_name || user?.company_name ? `, ${user?.display_name || user?.company_name}` : '',
                                        " 👋"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 mt-1",
                                    children: "Voici un aperçu de votre activité"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/quotes/new",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                        variant: "secondary",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 122,
                                            columnNumber: 49
                                        }, void 0),
                                        children: "Nouveau devis"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/invoices/new",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 125,
                                            columnNumber: 29
                                        }, void 0),
                                        children: "Nouvelle facture"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/page.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StatCard$3e$__["StatCard"], {
                            title: "CA ce mois",
                            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(stats.monthly_revenue),
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$euro$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Euro$3e$__["Euro"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/page.tsx",
                                lineNumber: 132,
                                columnNumber: 92
                            }, void 0),
                            color: "green"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StatCard$3e$__["StatCard"], {
                            title: "Devis en attente",
                            value: stats.pending_quotes,
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/page.tsx",
                                lineNumber: 133,
                                columnNumber: 81
                            }, void 0),
                            color: "orange"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StatCard$3e$__["StatCard"], {
                            title: "Factures en cours",
                            value: stats.pending_invoices,
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/page.tsx",
                                lineNumber: 134,
                                columnNumber: 84
                            }, void 0),
                            color: "blue"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StatCard$3e$__["StatCard"], {
                            title: "Impayés",
                            value: stats.unpaid_invoices,
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/page.tsx",
                                lineNumber: 135,
                                columnNumber: 73
                            }, void 0),
                            color: "red"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/page.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                            variant: "default",
                            padding: "lg",
                            className: "lg:col-span-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-lg font-bold text-gray-800",
                                                    children: "Évolution du CA"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-500",
                                                    children: "6 derniers mois"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold text-gray-800",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(totalRevenue)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-500",
                                                    children: "CA total"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-end justify-between gap-2 h-48",
                                    children: monthlyData.map((data, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 flex flex-col items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full flex flex-col items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-medium text-gray-600 mb-1",
                                                            children: data.revenue > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(data.revenue) : ''
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg transition-all hover:from-blue-600 hover:to-blue-500",
                                                            style: {
                                                                height: `${Math.max(data.revenue / maxRevenue * 150, data.revenue > 0 ? 20 : 4)}px`,
                                                                minHeight: '4px'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-500 font-medium",
                                                    children: data.month
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 156,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                            variant: "default",
                            padding: "lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-bold text-gray-800 mb-6",
                                    children: "Performances"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-600",
                                                            children: "Taux de conversion"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-bold text-gray-800",
                                                            children: [
                                                                conversionRate,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-2 bg-gray-100 rounded-full overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all",
                                                        style: {
                                                            width: `${conversionRate}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: [
                                                        acceptedQuotes,
                                                        " devis acceptés sur ",
                                                        totalQuotes
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-600",
                                                            children: "Taux de paiement"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-bold text-gray-800",
                                                            children: [
                                                                paymentRate,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 199,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-2 bg-gray-100 rounded-full overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all",
                                                        style: {
                                                            width: `${paymentRate}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: [
                                                        paidInvoices,
                                                        " factures payées sur ",
                                                        totalInvoices
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-4 border-t border-gray-100",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                            className: "w-5 h-5 text-purple-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 214,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-2xl font-bold text-gray-800",
                                                                children: clients.length
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                                lineNumber: 217,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-500",
                                                                children: "Clients"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                                lineNumber: 218,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 212,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 211,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-4 border-t border-gray-100",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                            className: "w-5 h-5 text-amber-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 227,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-2xl font-bold text-gray-800",
                                                                children: allDocuments.length
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                                lineNumber: 230,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-500",
                                                                children: "Documents créés"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                                lineNumber: 231,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 225,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 224,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/page.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                            variant: "default",
                            padding: "lg",
                            hover: true,
                            className: "group",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/quotes/new",
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "w-7 h-7 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 244,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-gray-800 text-lg",
                                                        children: "Créer un devis"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-500 text-sm",
                                                        children: "En moins de 5 minutes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 247,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 243,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 252,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/page.tsx",
                                lineNumber: 242,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 241,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                            variant: "default",
                            padding: "lg",
                            hover: true,
                            className: "group",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/invoices/new",
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                                                    className: "w-7 h-7 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 259,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-gray-800 text-lg",
                                                        children: "Créer une facture"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-500 text-sm",
                                                        children: "Depuis un devis ou de zéro"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 262,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 258,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "w-5 h-5 text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 267,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/page.tsx",
                                lineNumber: 257,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 256,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/page.tsx",
                    lineNumber: 240,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                    variant: "default",
                    padding: "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 border-b border-gray-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-gray-800",
                                        children: "Documents récents"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 276,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/quotes",
                                        className: "text-blue-500 hover:text-blue-600 font-medium text-sm flex items-center gap-1",
                                        children: [
                                            "Voir tout ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 278,
                                                columnNumber: 27
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 277,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/page.tsx",
                                lineNumber: 275,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 274,
                            columnNumber: 11
                        }, this),
                        recentDocuments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-12 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                    className: "w-12 h-12 text-gray-300 mx-auto mb-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 285,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500",
                                    children: "Aucun document pour l'instant"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 286,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400 text-sm mt-1",
                                    children: "Créez votre premier devis ou facture"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 287,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 284,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "divide-y divide-gray-100",
                            children: recentDocuments.map((doc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/${doc.type === 'quote' ? 'quotes' : 'invoices'}/${doc.id}/edit`,
                                    className: "block p-4 sm:p-6 hover:bg-gray-50 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${doc.type === 'quote' ? 'bg-blue-100 text-blue-600' : 'bg-emerald-100 text-emerald-600'}`,
                                                        children: doc.type === 'quote' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 49
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 84
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 flex-wrap",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-gray-800",
                                                                        children: doc.number
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                                        lineNumber: 304,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__["Badge"], {
                                                                        status: doc.status,
                                                                        size: "sm"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                                        lineNumber: 305,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                                lineNumber: 303,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-500 truncate",
                                                                children: doc.client?.name || 'Client'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                                lineNumber: 307,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 302,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 298,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-right flex-shrink-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold text-gray-800",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(doc.total_ttc)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 311,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-400",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(doc.issue_date)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 312,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 310,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 297,
                                        columnNumber: 19
                                    }, this)
                                }, doc.id, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 292,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 290,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/page.tsx",
                    lineNumber: 273,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/page.tsx",
            lineNumber: 111,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/page.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
_s(DashboardPage, "/Y6/bUNnvB3s9hteOAwrf9yXlAk=");
_c = DashboardPage;
var _c;
__turbopack_context__.k.register(_c, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_e0e1e05c._.js.map