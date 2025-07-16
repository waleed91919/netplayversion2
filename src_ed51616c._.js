(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_ed51616c._.js", {

"[project]/src/lib/tmdb-api.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "IMAGE_SIZES": (()=>IMAGE_SIZES),
    "apiEndpoints": (()=>apiEndpoints),
    "default": (()=>__TURBOPACK__default__export__),
    "getImageUrl": (()=>getImageUrl)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const API_KEY = ("TURBOPACK compile-time value", "3582f2c0038f846e0a5071bd31fafd95") || '';
const BASE_URL = ("TURBOPACK compile-time value", "https://api.themoviedb.org/3") || 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = ("TURBOPACK compile-time value", "https://image.tmdb.org/t/p") || 'https://image.tmdb.org/t/p';
const IMAGE_SIZES = {
    poster: {
        small: 'w185',
        medium: 'w342',
        large: 'w500',
        original: 'original'
    },
    backdrop: {
        small: 'w300',
        medium: 'w780',
        large: 'w1280',
        original: 'original'
    },
    profile: {
        small: 'w45',
        medium: 'w185',
        large: 'h632',
        original: 'original'
    }
};
const getImageUrl = (path, size)=>{
    if (!path) {
        // Return a placeholder image from placeholder.com
        if (size.includes('original')) {
            return 'https://via.placeholder.com/1280x720?text=No+Image';
        } else if (size.includes('w500')) {
            return 'https://via.placeholder.com/500x750?text=No+Image';
        } else if (size.includes('w342')) {
            return 'https://via.placeholder.com/342x513?text=No+Image';
        } else if (size.includes('w185')) {
            return 'https://via.placeholder.com/185x278?text=No+Image';
        }
        return 'https://via.placeholder.com/300x450?text=No+Image';
    }
    // Check if path is already a full URL
    if (path.startsWith('http')) {
        return path;
    }
    return `${IMAGE_BASE_URL}/${size}${path}`;
};
const tmdbApi = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
        language: 'de-DE'
    }
});
const apiEndpoints = {
    // Movies
    getTrendingMovies: ()=>tmdbApi.get('/trending/movie/week'),
    getPopularMovies: (page = 1)=>tmdbApi.get('/movie/popular', {
            params: {
                page
            }
        }),
    getMovieById: (id)=>tmdbApi.get(`/movie/${id}`),
    getMoviesByGenre: (genreId, page = 1)=>tmdbApi.get('/discover/movie', {
            params: {
                with_genres: genreId,
                page
            }
        }),
    // TV Series
    getTrendingTVSeries: ()=>tmdbApi.get('/trending/tv/week'),
    getPopularTVSeries: (page = 1)=>tmdbApi.get('/tv/popular', {
            params: {
                page
            }
        }),
    getTVSeriesById: (id)=>tmdbApi.get(`/tv/${id}`),
    getTVSeriesByGenre: (genreId, page = 1)=>tmdbApi.get('/discover/tv', {
            params: {
                with_genres: genreId,
                page
            }
        }),
    // Genres
    getMovieGenres: ()=>tmdbApi.get('/genre/movie/list'),
    getTVGenres: ()=>tmdbApi.get('/genre/tv/list'),
    // Search
    searchMulti: (query, page = 1)=>tmdbApi.get('/search/multi', {
            params: {
                query,
                page,
                include_adult: false
            }
        }),
    searchMovies: (query, page = 1)=>tmdbApi.get('/search/movie', {
            params: {
                query,
                page,
                include_adult: false
            }
        }),
    searchTVSeries: (query, page = 1)=>tmdbApi.get('/search/tv', {
            params: {
                query,
                page,
                include_adult: false
            }
        })
};
const __TURBOPACK__default__export__ = tmdbApi;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/hero-banner.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "HeroBanner": (()=>HeroBanner)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tmdb$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/tmdb-api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function HeroBanner({ items, onPlay }) {
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTransitioning, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('next');
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Fix for hydration issue - only load/render on the client side
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroBanner.useEffect": ()=>{
            setIsClient(true);
            setIsLoaded(true);
        }
    }["HeroBanner.useEffect"], []);
    // Banner auto-rotation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroBanner.useEffect": ()=>{
            if (!isClient) return;
            const startRotation = {
                "HeroBanner.useEffect.startRotation": ()=>{
                    if (items.length > 1) {
                        intervalRef.current = setInterval({
                            "HeroBanner.useEffect.startRotation": ()=>{
                                goToNext();
                            }
                        }["HeroBanner.useEffect.startRotation"], 8000); // Change banner every 8 seconds
                    }
                }
            }["HeroBanner.useEffect.startRotation"];
            startRotation();
            return ({
                "HeroBanner.useEffect": ()=>{
                    if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                    }
                }
            })["HeroBanner.useEffect"];
        }
    }["HeroBanner.useEffect"], [
        items.length,
        isClient,
        currentIndex
    ]);
    // Reset interval on manual navigation
    const resetInterval = ()=>{
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = setInterval(goToNext, 8000);
        }
    };
    const goToNext = ()=>{
        setDirection('next');
        setIsTransitioning(true);
        setIsLoaded(false);
        setTimeout(()=>{
            setCurrentIndex((prev)=>(prev + 1) % items.length);
            setTimeout(()=>{
                setIsLoaded(true);
                setTimeout(()=>{
                    setIsTransitioning(false);
                }, 500);
            }, 100);
        }, 300);
    };
    const goToPrev = ()=>{
        setDirection('prev');
        setIsTransitioning(true);
        setIsLoaded(false);
        setTimeout(()=>{
            setCurrentIndex((prev)=>prev === 0 ? items.length - 1 : prev - 1);
            setTimeout(()=>{
                setIsLoaded(true);
                setTimeout(()=>{
                    setIsTransitioning(false);
                }, 500);
            }, 100);
        }, 300);
    };
    const handleDotClick = (index)=>{
        if (index === currentIndex || isTransitioning) return;
        setDirection(index > currentIndex ? 'next' : 'prev');
        setIsTransitioning(true);
        setIsLoaded(false);
        setTimeout(()=>{
            setCurrentIndex(index);
            setTimeout(()=>{
                setIsLoaded(true);
                setTimeout(()=>{
                    setIsTransitioning(false);
                }, 500);
            }, 100);
        }, 300);
        resetInterval();
    };
    if (!items.length) {
        return null;
    }
    // Always use first item for server-side rendering to prevent hydration mismatch
    // Client will take over after hydration completes
    const currentItem = isClient ? items[currentIndex] : items[0];
    const title = 'title' in currentItem ? currentItem.title : currentItem.name;
    const overview = currentItem.overview;
    const backdropPath = currentItem.backdrop_path;
    const releaseDate = 'release_date' in currentItem ? currentItem.release_date : currentItem.first_air_date;
    const year = releaseDate ? new Date(releaseDate).getFullYear() : '';
    const rating = currentItem.vote_average.toFixed(1);
    const itemType = 'title' in currentItem ? 'movie' : 'tv';
    const detailPath = itemType === 'movie' ? `/movie/${currentItem.id}` : `/series/${currentItem.id}`;
    const handlePlay = ()=>{
        if (onPlay) {
            onPlay(currentItem);
        }
    };
    const imageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tmdb$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageUrl"])(backdropPath, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tmdb$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMAGE_SIZES"].backdrop.original);
    // Server side rendering with just the placeholder for initial load
    if (!isClient) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative h-[80vh] md:h-[75vh] w-full overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-black/90"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/hero-banner.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-full container mx-auto px-4 md:px-6 flex flex-col justify-end pb-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-2xl animate-pulse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center px-2 py-1 rounded-full bg-accent-color/30 backdrop-blur-sm mb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-4 w-12 bg-gray-300 rounded"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/hero-banner.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/hero-banner.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-12 w-48 bg-gray-300 rounded mb-2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/hero-banner.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 w-24 bg-gray-300 rounded mb-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/hero-banner.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 w-full bg-gray-300 rounded mb-2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/hero-banner.tsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 w-3/4 bg-gray-300 rounded mb-6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/hero-banner.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-10 w-28 bg-accent-color rounded"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/hero-banner.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-10 w-28 bg-gray-500/50 rounded"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/hero-banner.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/hero-banner.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/hero-banner.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/hero-banner.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/hero-banner.tsx",
            lineNumber: 137,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative h-[80vh] md:h-[75vh] w-full overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-full h-full transition-all duration-700 transform ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'} ${direction === 'next' ? 'origin-left' : 'origin-right'}`,
                        children: imageUrl.startsWith('https') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: imageUrl,
                            alt: title,
                            className: "w-full h-full object-cover",
                            onLoad: ()=>setIsLoaded(true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/hero-banner.tsx",
                            lineNumber: 170,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: imageUrl,
                            alt: title,
                            fill: true,
                            priority: true,
                            className: "object-cover",
                            onLoad: ()=>setIsLoaded(true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/hero-banner.tsx",
                            lineNumber: 177,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/hero-banner.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-background from-5% via-background/80 via-30% to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/hero-banner.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-background/90 from-0% via-background/50 via-20% to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/hero-banner.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/hero-banner.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            items.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goToPrev,
                        disabled: isTransitioning,
                        className: "absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm opacity-60 hover:opacity-100",
                        "aria-label": "Previous banner",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronLeft"], {
                            className: "text-lg"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/hero-banner.tsx",
                            lineNumber: 202,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/hero-banner.tsx",
                        lineNumber: 196,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goToNext,
                        disabled: isTransitioning,
                        className: "absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm opacity-60 hover:opacity-100",
                        "aria-label": "Next banner",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronRight"], {
                            className: "text-lg"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/hero-banner.tsx",
                            lineNumber: 210,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/hero-banner.tsx",
                        lineNumber: 204,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-full container mx-auto px-4 md:px-6 flex flex-col justify-end pb-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `max-w-2xl transition-all duration-700 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center px-3 py-1 rounded-full bg-accent-color/30 backdrop-blur-sm mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaStar"], {
                                    className: "text-rating-color mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/hero-banner.tsx",
                                    lineNumber: 224,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-white",
                                    children: rating
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/hero-banner.tsx",
                                    lineNumber: 225,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/hero-banner.tsx",
                            lineNumber: 223,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-6xl font-bold mb-3 md:mb-4 text-white",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/hero-banner.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 mb-4 text-sm md:text-base text-white/80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: year
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/hero-banner.tsx",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-white/20 px-2 py-0.5 rounded-md text-white text-xs font-medium uppercase",
                                    children: itemType
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/hero-banner.tsx",
                                    lineNumber: 232,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/hero-banner.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm md:text-base mb-8 line-clamp-3 text-white/80 max-w-xl",
                            children: overview
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/hero-banner.tsx",
                            lineNumber: 237,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "flex items-center gap-2 bg-button-bg hover:bg-button-hover text-white px-6 py-6 transition-transform hover:scale-105 shadow-md",
                                    onClick: handlePlay,
                                    size: "lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPlay"], {
                                            className: "text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/hero-banner.tsx",
                                            lineNumber: 247,
                                            columnNumber: 15
                                        }, this),
                                        " Play now"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/hero-banner.tsx",
                                    lineNumber: 242,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: detailPath,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        className: "flex items-center gap-2 bg-button-secondary-bg hover:bg-button-secondary-hover border-none text-white px-6 py-6 transition-transform hover:scale-105 shadow-md",
                                        size: "lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInfoCircle"], {
                                                className: "text-base"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/hero-banner.tsx",
                                                lineNumber: 255,
                                                columnNumber: 17
                                            }, this),
                                            " More Info"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/hero-banner.tsx",
                                        lineNumber: 250,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/hero-banner.tsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/hero-banner.tsx",
                            lineNumber: 241,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/hero-banner.tsx",
                    lineNumber: 217,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/hero-banner.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            items.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20",
                children: items.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `h-1 transition-all duration-300 rounded-full ${index === currentIndex ? 'w-8 bg-accent-color' : 'w-2 bg-white/50 hover:bg-white/80'}`,
                        onClick: ()=>handleDotClick(index),
                        disabled: isTransitioning,
                        "aria-label": `Show banner ${index + 1}`
                    }, index, false, {
                        fileName: "[project]/src/components/ui/hero-banner.tsx",
                        lineNumber: 266,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/hero-banner.tsx",
                lineNumber: 264,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/hero-banner.tsx",
        lineNumber: 159,
        columnNumber: 5
    }, this);
}
_s(HeroBanner, "cKb5d6HxzX9hPfJXXSsENMFQMX8=");
_c = HeroBanner;
var _c;
__turbopack_context__.k.register(_c, "HeroBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-xl border bg-card text-card-foreground shadow", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 48,
        columnNumber: 3
    }, this));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, this));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 68,
        columnNumber: 3
    }, this));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/media-card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "MediaCard": (()=>MediaCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tmdb$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/tmdb-api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function MediaCard({ item, type, onAction, featured = false, index = 0 }) {
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isImageLoaded, setIsImageLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isInView, setIsInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // For animated entrance
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MediaCard.useEffect": ()=>{
            // Simple delay based on index for staggered animation
            const timer = setTimeout({
                "MediaCard.useEffect.timer": ()=>setIsInView(true)
            }["MediaCard.useEffect.timer"], index * 100);
            return ({
                "MediaCard.useEffect": ()=>clearTimeout(timer)
            })["MediaCard.useEffect"];
        }
    }["MediaCard.useEffect"], [
        index
    ]);
    const title = 'title' in item ? item.title : item.name;
    const releaseDate = 'release_date' in item ? item.release_date : item.first_air_date;
    const year = releaseDate ? new Date(releaseDate).getFullYear() : '';
    const rating = item.vote_average.toFixed(1);
    const posterPath = item.poster_path;
    const id = item.id;
    // Route based on item type
    const detailPath = type === 'movie' ? `/movie/${id}` : type === 'tv' ? `/series/${id}` : 'title' in item ? `/movie/${id}` : `/series/${id}`;
    const handleAction = (action)=>{
        if (onAction) {
            onAction(action, item);
        }
    };
    const imageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tmdb$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageUrl"])(posterPath, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tmdb$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMAGE_SIZES"].poster.medium);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `transform transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`,
        style: {
            transitionDelay: `${index * 50}ms`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: `overflow-hidden border-none rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 ${featured ? 'scale-105 shadow-lg' : ''}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative card-hover-effect",
                onMouseEnter: ()=>setIsHovered(true),
                onMouseLeave: ()=>setIsHovered(false),
                children: [
                    featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-2 left-2 z-20 bg-accent-color text-white px-2 py-1 text-xs rounded-full animate-pulse-custom",
                        children: "Featured"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/media-card.tsx",
                        lineNumber: 69,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: detailPath,
                        className: "block relative aspect-[2/3] w-full overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full overflow-hidden",
                                children: imageUrl.startsWith('https') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: imageUrl,
                                    alt: title,
                                    className: `w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'} ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`,
                                    onLoad: ()=>setIsImageLoaded(true)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/media-card.tsx",
                                    lineNumber: 79,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full h-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: imageUrl,
                                        alt: title,
                                        fill: true,
                                        className: `object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'} ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`,
                                        onLoad: ()=>setIsImageLoaded(true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/media-card.tsx",
                                        lineNumber: 89,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/media-card.tsx",
                                    lineNumber: 88,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/media-card.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            !isImageLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center justify-center bg-card",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "skeleton-loading w-full h-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/media-card.tsx",
                                    lineNumber: 105,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/media-card.tsx",
                                lineNumber: 104,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/media-card.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute inset-0 flex items-center justify-center gap-3 bg-black/50 transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                            handleAction('play');
                                        },
                                        className: "bg-accent-color hover:bg-hover-color text-white w-12 h-12 rounded-full flex items-center justify-center transition-transform transform hover:scale-110 duration-300",
                                        "aria-label": "Play",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPlay"], {
                                            className: "text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/media-card.tsx",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/media-card.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this),
                                    (type === 'movie' || type === 'tv') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                            handleAction('add');
                                        },
                                        className: "bg-white/20 hover:bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center transition-transform transform hover:scale-110 duration-300",
                                        "aria-label": "Add to watchlist",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPlus"], {
                                            className: "text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/media-card.tsx",
                                            lineNumber: 140,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/media-card.tsx",
                                        lineNumber: 131,
                                        columnNumber: 17
                                    }, this),
                                    type === 'watchlist' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                            handleAction('remove');
                                        },
                                        className: "bg-white/20 hover:bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center transition-transform transform hover:scale-110 duration-300",
                                        "aria-label": "Remove from watchlist",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaMinus"], {
                                            className: "text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/media-card.tsx",
                                            lineNumber: 154,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/media-card.tsx",
                                        lineNumber: 145,
                                        columnNumber: 17
                                    }, this),
                                    type === 'history' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                            handleAction('remove');
                                        },
                                        className: "bg-white/20 hover:bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center transition-transform transform hover:scale-110 duration-300",
                                        "aria-label": "Remove from history",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTrash"], {
                                            className: "text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/media-card.tsx",
                                            lineNumber: 168,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/media-card.tsx",
                                        lineNumber: 159,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/media-card.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute bottom-0 left-0 right-0 p-3 transform transition-transform duration-500 ${isHovered ? 'translate-y-0' : 'translate-y-full'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-base text-white truncate",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/media-card.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mt-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center text-sm text-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaStar"], {
                                                        className: "text-rating-color mr-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/media-card.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: rating
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/media-card.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ui/media-card.tsx",
                                                lineNumber: 181,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-white/80",
                                                children: year
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/media-card.tsx",
                                                lineNumber: 185,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/media-card.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/media-card.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/media-card.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-3 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-medium text-sm truncate",
                                title: title,
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/media-card.tsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center text-xs text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaStar"], {
                                                className: "text-rating-color text-[10px] mr-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/media-card.tsx",
                                                lineNumber: 203,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: rating
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/media-card.tsx",
                                                lineNumber: 204,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/media-card.tsx",
                                        lineNumber: 202,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-muted-foreground",
                                        children: year
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/media-card.tsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/media-card.tsx",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/media-card.tsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/media-card.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/media-card.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/media-card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(MediaCard, "TW99edlJsCDsXgM1skdux8OzH50=");
_c = MediaCard;
var _c;
__turbopack_context__.k.register(_c, "MediaCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/media-carousel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "MediaCarousel": (()=>MediaCarousel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$media$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/media-card.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function MediaCarousel({ title, items, type, onAction, featured = false }) {
    _s();
    const carouselRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [scrollPosition, setScrollPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [maxScroll, setMaxScroll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showLeftArrow, setShowLeftArrow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showRightArrow, setShowRightArrow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // For entrance animation and recalculating sizes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MediaCarousel.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "MediaCarousel.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                }
            }["MediaCarousel.useEffect"], {
                threshold: 0.1
            });
            if (carouselRef.current) {
                observer.observe(carouselRef.current);
            }
            return ({
                "MediaCarousel.useEffect": ()=>{
                    observer.disconnect();
                }
            })["MediaCarousel.useEffect"];
        }
    }["MediaCarousel.useEffect"], []);
    // Update maxScroll when window resizes or items change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MediaCarousel.useEffect": ()=>{
            const updateScrollData = {
                "MediaCarousel.useEffect.updateScrollData": ()=>{
                    if (carouselRef.current) {
                        const { scrollWidth, clientWidth } = carouselRef.current;
                        setMaxScroll(scrollWidth - clientWidth);
                    }
                }
            }["MediaCarousel.useEffect.updateScrollData"];
            updateScrollData();
            window.addEventListener('resize', updateScrollData);
            return ({
                "MediaCarousel.useEffect": ()=>{
                    window.removeEventListener('resize', updateScrollData);
                }
            })["MediaCarousel.useEffect"];
        }
    }["MediaCarousel.useEffect"], [
        items
    ]);
    const handleScroll = ()=>{
        if (carouselRef.current) {
            const position = carouselRef.current.scrollLeft;
            setScrollPosition(position);
            setShowLeftArrow(position > 0);
            setShowRightArrow(position < maxScroll - 5); // 5px buffer for browser rounding errors
        }
    };
    const scroll = (direction)=>{
        if (carouselRef.current) {
            const containerWidth = carouselRef.current.clientWidth;
            const itemWidth = containerWidth > 768 ? containerWidth / 5 : containerWidth / 2.5; // Show 5 items on desktop, 2.5 on mobile
            const scrollAmount = Math.floor(itemWidth * (direction === 'left' ? -1 : 1));
            // Use the scroll animation
            carouselRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };
    if (!items.length) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `px-4 md:px-6 mb-10 md:mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`,
        style: {
            transitionDelay: isVisible ? '100ms' : '0ms'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-screen-2xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/media-carousel.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scroll('left'),
                                    disabled: !showLeftArrow,
                                    className: `w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${showLeftArrow ? 'bg-muted hover:bg-accent-color hover:text-white opacity-100' : 'opacity-0 cursor-default'}`,
                                    "aria-label": "Scroll left",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronLeft"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/media-carousel.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/media-carousel.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scroll('right'),
                                    disabled: !showRightArrow,
                                    className: `w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${showRightArrow ? 'bg-muted hover:bg-accent-color hover:text-white opacity-100' : 'opacity-0 cursor-default'}`,
                                    "aria-label": "Scroll right",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronRight"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/media-carousel.tsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/media-carousel.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/media-carousel.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/media-carousel.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: carouselRef,
                    className: "relative flex gap-4 overflow-x-auto pb-6 hide-scrollbar snap-x",
                    style: {
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    },
                    onScroll: handleScroll,
                    children: [
                        items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${featured && index === 0 ? 'min-w-[280px] md:min-w-[340px]' : 'min-w-[180px] md:min-w-[220px]'} snap-start`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$media$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaCard"], {
                                    item: item,
                                    type: type,
                                    onAction: onAction,
                                    featured: featured && index === 0,
                                    index: index
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/media-carousel.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this)
                            }, `${type}-${item.id}`, false, {
                                fileName: "[project]/src/components/ui/media-carousel.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this)),
                        showRightArrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/media-carousel.tsx",
                            lineNumber: 156,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/media-carousel.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this),
                maxScroll > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-2 h-0.5 bg-muted/30 rounded-full overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full bg-accent-color transition-all duration-300 rounded-full",
                        style: {
                            width: `${maxScroll > 0 ? scrollPosition / maxScroll * 100 : 0}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/media-carousel.tsx",
                        lineNumber: 163,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/media-carousel.tsx",
                    lineNumber: 162,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/media-carousel.tsx",
            lineNumber: 98,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/media-carousel.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_s(MediaCarousel, "FGFt83CSeT6VD47RlBKZ4oSRbR4=");
_c = MediaCarousel;
var _c;
__turbopack_context__.k.register(_c, "MediaCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$hero$2d$banner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/hero-banner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$media$2d$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/media-carousel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// Mock-Daten für die Entwicklung und Demo
const mockTrendingMovies = [
    {
        id: 1,
        title: 'Dune: Part Two',
        overview: 'Paul Atreides joins forces with the Fremen to take revenge on those who destroyed his family.',
        poster_path: '/jQNOzoiaIQWxJAx8OUighnvnhRA.jpg',
        backdrop_path: '/uUiIGztTrfDhPfAkQVBQCYcBxjt.jpg',
        release_date: '2024-03-01',
        vote_average: 8.5,
        genre_ids: [
            878,
            12
        ],
        original_language: 'en'
    },
    {
        id: 2,
        title: 'Civil War',
        overview: 'In a near-future America caught in the grip of a civil war, a team of journalists risk their lives to report on the conflict.',
        poster_path: '/mBuZMXipxlTeBJfxXN2YZUdg6B.jpg',
        backdrop_path: '/x9v4Y1R1mXBvHx3yP9mNCmTumwk.jpg',
        release_date: '2024-04-12',
        vote_average: 7.8,
        genre_ids: [
            28,
            18,
            53
        ],
        original_language: 'en'
    },
    {
        id: 3,
        title: 'Thieves of the Wood',
        overview: 'Charismatic highwayman Jan de Lichte leads the oppressed and downtrodden in a revolt against the corrupt aristocracy of 18th-century Flanders.',
        poster_path: '/jQNOzoiaIQWxJAx8OUighnvnhRA.jpg',
        backdrop_path: '/uUiIGztTrfDhPfAkQVBQCYcBxjt.jpg',
        release_date: '2024-03-29',
        vote_average: 6.9,
        genre_ids: [
            878,
            28,
            12
        ],
        original_language: 'en'
    }
];
const mockTrendingTVSeries = [
    {
        id: 94605,
        name: 'Arcane',
        overview: 'Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war.',
        poster_path: '/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg',
        backdrop_path: '/q54qEgagGOYCq5D1903eBVMNkbo.jpg',
        first_air_date: '2021-11-06',
        vote_average: 8.7,
        genre_ids: [
            16,
            10765,
            10759,
            18
        ],
        original_language: 'en'
    },
    {
        id: 134224,
        name: 'Shōgun',
        overview: 'An English navigator becomes a samurai in feudal Japan.',
        poster_path: '/a2zqo1IgsOhimQXdswggMbhUfTJ.jpg',
        backdrop_path: '/xmW4jEKk5V7qGgxQ2HRgIBLKUKq.jpg',
        first_air_date: '2024-02-27',
        vote_average: 8.6,
        genre_ids: [
            18,
            10759
        ],
        original_language: 'en'
    },
    {
        id: 124389,
        name: 'Fallout',
        overview: 'In a retrofuturistic world devastated by nuclear war, a vault dweller emerges into the wasteland.',
        poster_path: '/3Wz8TlfHuFQh7HsZCaqT1OmUvRC.jpg',
        backdrop_path: '/rMvPXy8PUjj1o8o1pzgQbdNCsvj.jpg',
        first_air_date: '2024-04-11',
        vote_average: 8.2,
        genre_ids: [
            10765,
            18,
            10759
        ],
        original_language: 'en'
    }
];
const mockPopularMovies = [
    {
        id: 4,
        title: 'The Fall Guy',
        overview: 'After a near-fatal accident, a stuntman must track down a missing movie star.',
        poster_path: '/aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg',
        backdrop_path: '/cH6rBA5WiF7nPxYnY1qcWxO9SSK.jpg',
        release_date: '2024-05-03',
        vote_average: 7.2,
        genre_ids: [
            28,
            35,
            10749
        ],
        original_language: 'en'
    },
    {
        id: 5,
        title: 'Ghostbusters: Frozen Empire',
        overview: 'The Spengler family returns to where it all started – the iconic New York City firehouse.',
        poster_path: '/bKfMavRvjXLgCQ9IB9Vg0X1bLUt.jpg',
        backdrop_path: '/8rpDcsfLJypbO6vREc0547VKqEv.jpg',
        release_date: '2024-03-22',
        vote_average: 7.0,
        genre_ids: [
            14,
            35,
            28
        ],
        original_language: 'en'
    },
    {
        id: 6,
        title: 'Kung Fu Panda 4',
        overview: 'Po is gearing up to become the spiritual leader of his Valley of Peace.',
        poster_path: '/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg',
        backdrop_path: '/gJL5kp5FMopB2sN4WZYnNT5uO4Y.jpg',
        release_date: '2024-03-08',
        vote_average: 7.0,
        genre_ids: [
            16,
            12,
            10751,
            35
        ],
        original_language: 'en'
    },
    {
        id: 7,
        title: 'Kingdom of the Planet of the Apes',
        overview: 'Many years after the reign of Caesar, a young ape goes on a journey that leads him to question everything.',
        poster_path: '/3OuShMVyZwKBQrESDfcWW4L8mGZ.jpg',
        backdrop_path: '/bX547SDHRUmjQTFLTpWL7tV6rCj.jpg',
        release_date: '2024-05-10',
        vote_average: 7.1,
        genre_ids: [
            28,
            12,
            878
        ],
        original_language: 'en'
    }
];
const mockPopularTVSeries = [
    {
        id: 76479,
        name: 'The Boys',
        overview: 'A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.',
        poster_path: '/stTEycfG9928HYGEISBFaG1ngjM.jpg',
        backdrop_path: '/mGVrXeIjyecj6TKmwPVpHlscEmw.jpg',
        first_air_date: '2019-07-25',
        vote_average: 8.4,
        genre_ids: [
            10759,
            10765
        ],
        original_language: 'en'
    },
    {
        id: 60735,
        name: 'The Flash',
        overview: 'After being struck by lightning, Barry Allen wakes up from his coma to discover he\'s been given the power of super speed.',
        poster_path: '/4N2L2PqKSFVejG9aBuvUU7K6DNj.jpg',
        backdrop_path: '/8X2LC1P7tR6SRkLdQETJDVNIuU2.jpg',
        first_air_date: '2014-10-07',
        vote_average: 7.8,
        genre_ids: [
            18,
            10765
        ],
        original_language: 'en'
    },
    {
        id: 120168,
        name: 'Doctor Who',
        overview: 'The Doctor, a Time Lord from the race whose home planet is Gallifrey, travels through time and space in their ship the TARDIS.',
        poster_path: '/l1fPCGaYQlmCh9OT3Vgu3UNAJq.jpg',
        backdrop_path: '/kXJrECI3DkNX9jLXUU6wXzZXzZZ.jpg',
        first_air_date: '2023-11-25',
        vote_average: 7.2,
        genre_ids: [
            10759,
            10765,
            18
        ],
        original_language: 'en'
    },
    {
        id: 215803,
        name: 'House of the Dragon',
        overview: 'The prequel series finds the Targaryen dynasty at the absolute apex of its power.',
        poster_path: '/72J25JvQtVc9i3FiqMoHvDNTF9H.jpg',
        backdrop_path: '/9zcbqSxdsRMZWHYtyCd1nXPr2xq.jpg',
        first_air_date: '2022-08-21',
        vote_average: 8.4,
        genre_ids: [
            10765,
            18,
            10759
        ],
        original_language: 'en'
    }
];
const mockTopRatedMovies = [
    {
        id: 278,
        title: 'The Shawshank Redemption',
        overview: 'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison.',
        poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
        backdrop_path: '/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg',
        release_date: '1994-09-23',
        vote_average: 8.7,
        genre_ids: [
            18,
            80
        ],
        original_language: 'en'
    },
    {
        id: 238,
        title: 'The Godfather',
        overview: 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family.',
        poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
        backdrop_path: '/tmU7GeKVybMWFButWEGl2M4GeiP.jpg',
        release_date: '1972-03-14',
        vote_average: 8.7,
        genre_ids: [
            18,
            80
        ],
        original_language: 'en'
    },
    {
        id: 424,
        title: 'Schindler\'s List',
        overview: 'The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis.',
        poster_path: '/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg',
        backdrop_path: '/loRmRzQXZeqG78TqZuyvSlEQfZb.jpg',
        release_date: '1993-12-15',
        vote_average: 8.6,
        genre_ids: [
            18,
            36,
            10752
        ],
        original_language: 'en'
    },
    {
        id: 240,
        title: 'The Godfather Part II',
        overview: 'In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York.',
        poster_path: '/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg',
        backdrop_path: '/poec6RqOKY9iSiIUmfyfPfiLtvB.jpg',
        release_date: '1974-12-20',
        vote_average: 8.6,
        genre_ids: [
            18,
            80
        ],
        original_language: 'en'
    }
];
// Combine hero items in stable order
const heroItems = [
    mockTrendingMovies[0],
    mockTrendingTVSeries[0],
    mockTrendingMovies[1],
    mockTrendingTVSeries[1],
    mockTrendingTVSeries[2]
];
function Home() {
    _s();
    const [initialized, setInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Only run this effect on the client side to prevent hydration mismatch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            setInitialized(true);
            // Add some space for the fixed header
            document.body.style.paddingTop = '64px';
            return ({
                "Home.useEffect": ()=>{
                    document.body.style.paddingTop = '0';
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    const handleMediaAction = (action, item)=>{
        const title = 'title' in item ? item.title : item.name;
        if (action === 'play') {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(`Playing ${title}`, {
                position: 'bottom-center',
                duration: 3000
            });
        } else if (action === 'add') {
            // Add to watchlist logic
            const savedWatchlist = localStorage.getItem('watchlist');
            let watchlist = [];
            if (savedWatchlist) {
                try {
                    watchlist = JSON.parse(savedWatchlist);
                } catch (error) {
                    console.error('Error parsing watchlist:', error);
                }
            }
            if (!watchlist.some((i)=>i.id === item.id)) {
                watchlist.push(item);
                localStorage.setItem('watchlist', JSON.stringify(watchlist));
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Added ${title} to watchlist`, {
                    position: 'bottom-center',
                    duration: 3000
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(`${title} is already in your watchlist`, {
                    position: 'bottom-center',
                    duration: 3000
                });
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: initialized && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "pb-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$hero$2d$banner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroBanner"], {
                    items: heroItems,
                    onPlay: (item)=>handleMediaAction('play', item)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 288,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 md:mt-12 space-y-12 md:space-y-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$media$2d$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaCarousel"], {
                            title: "Trending Movies",
                            items: mockTrendingMovies,
                            type: "movie",
                            onAction: handleMediaAction,
                            featured: true
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 296,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$media$2d$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaCarousel"], {
                            title: "Trending TV Shows",
                            items: mockTrendingTVSeries,
                            type: "tv",
                            onAction: handleMediaAction,
                            featured: true
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 305,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$media$2d$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaCarousel"], {
                            title: "Popular Movies",
                            items: mockPopularMovies,
                            type: "movie",
                            onAction: handleMediaAction
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 314,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$media$2d$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaCarousel"], {
                            title: "Popular TV Shows",
                            items: mockPopularTVSeries,
                            type: "tv",
                            onAction: handleMediaAction
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 322,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$media$2d$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaCarousel"], {
                            title: "Top Rated Movies",
                            items: mockTopRatedMovies,
                            type: "movie",
                            onAction: handleMediaAction
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 330,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 294,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 286,
            columnNumber: 9
        }, this)
    }, void 0, false);
}
_s(Home, "Kqi3FOcoZthoTYGDbMGQxPYNq5w=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_ed51616c._.js.map