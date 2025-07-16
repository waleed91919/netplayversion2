module.exports = {

"[project]/.next-internal/server/app/api/series/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route.runtime.dev.js [external] (next/dist/compiled/next-server/app-route.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}}),
"[project]/src/lib/db.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "prisma": (()=>prisma),
    "saveGenres": (()=>saveGenres),
    "saveMovie": (()=>saveMovie),
    "saveSeries": (()=>saveSeries),
    "tmdbMovieToPrisma": (()=>tmdbMovieToPrisma),
    "tmdbSeriesToPrisma": (()=>tmdbSeriesToPrisma),
    "updateTrendingMovies": (()=>updateTrendingMovies),
    "updateTrendingSeries": (()=>updateTrendingSeries)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const prisma = new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
const tmdbMovieToPrisma = (movie)=>{
    return {
        id: movie.id,
        title: movie.title,
        overview: movie.overview || null,
        posterPath: movie.poster_path,
        backdropPath: movie.backdrop_path,
        releaseDate: movie.release_date ? new Date(movie.release_date) : null,
        voteAverage: movie.vote_average,
        originalLanguage: movie.original_language,
        runtime: movie.runtime || null,
        popularity: 0
    };
};
const tmdbSeriesToPrisma = (series)=>{
    return {
        id: series.id,
        name: series.name,
        overview: series.overview || null,
        posterPath: series.poster_path,
        backdropPath: series.backdrop_path,
        firstAirDate: series.first_air_date ? new Date(series.first_air_date) : null,
        voteAverage: series.vote_average,
        originalLanguage: series.original_language,
        numberOfSeasons: null,
        numberOfEpisodes: null,
        popularity: 0
    };
};
async function saveMovie(movie) {
    try {
        const movieData = tmdbMovieToPrisma(movie);
        // Use upsert to handle both insert and update
        const result = await prisma.movie.upsert({
            where: {
                id: movie.id
            },
            update: movieData,
            create: movieData
        });
        // Handle genres if available
        if (movie.genre_ids && movie.genre_ids.length > 0) {
            // Delete existing connections first to avoid duplicates
            await prisma.movieGenre.deleteMany({
                where: {
                    movieId: movie.id
                }
            });
            // Create new connections
            for (const genreId of movie.genre_ids){
                await prisma.movieGenre.create({
                    data: {
                        movieId: movie.id,
                        genreId: genreId
                    }
                });
            }
        }
        return result;
    } catch (error) {
        console.error('Error saving movie:', error);
        throw error;
    }
}
async function saveSeries(series) {
    try {
        const seriesData = tmdbSeriesToPrisma(series);
        // Use upsert to handle both insert and update
        const result = await prisma.series.upsert({
            where: {
                id: series.id
            },
            update: seriesData,
            create: seriesData
        });
        // Handle genres if available
        if (series.genre_ids && series.genre_ids.length > 0) {
            // Delete existing connections first to avoid duplicates
            await prisma.seriesGenre.deleteMany({
                where: {
                    seriesId: series.id
                }
            });
            // Create new connections
            for (const genreId of series.genre_ids){
                await prisma.seriesGenre.create({
                    data: {
                        seriesId: series.id,
                        genreId: genreId
                    }
                });
            }
        }
        return result;
    } catch (error) {
        console.error('Error saving series:', error);
        throw error;
    }
}
async function updateTrendingMovies(movies) {
    try {
        // First clear all existing trending movies
        await prisma.trendingMovie.deleteMany({});
        // Then save each movie and add to trending
        for(let i = 0; i < movies.length; i++){
            const movie = movies[i];
            // Save or update the movie first
            await saveMovie(movie);
            // Add to trending with rank
            await prisma.trendingMovie.create({
                data: {
                    movieId: movie.id,
                    rank: i + 1
                }
            });
        }
        return {
            success: true,
            count: movies.length
        };
    } catch (error) {
        console.error('Error updating trending movies:', error);
        throw error;
    }
}
async function updateTrendingSeries(series) {
    try {
        // First clear all existing trending series
        await prisma.trendingSeries.deleteMany({});
        // Then save each series and add to trending
        for(let i = 0; i < series.length; i++){
            const show = series[i];
            // Save or update the series first
            await saveSeries(show);
            // Add to trending with rank
            await prisma.trendingSeries.create({
                data: {
                    seriesId: show.id,
                    rank: i + 1
                }
            });
        }
        return {
            success: true,
            count: series.length
        };
    } catch (error) {
        console.error('Error updating trending series:', error);
        throw error;
    }
}
async function saveGenres(genres) {
    try {
        for (const genre of genres){
            await prisma.genre.upsert({
                where: {
                    id: genre.id
                },
                update: {
                    name: genre.name
                },
                create: {
                    id: genre.id,
                    name: genre.name
                }
            });
        }
        return {
            success: true,
            count: genres.length
        };
    } catch (error) {
        console.error('Error saving genres:', error);
        throw error;
    }
}
}}),
"[project]/src/app/api/series/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-route] (ecmascript)");
;
;
async function GET(request) {
    try {
        // Get query parameters from the URL
        const { searchParams } = new URL(request.url);
        const page = Number(searchParams.get('page')) || 1;
        const limit = Number(searchParams.get('limit')) || 20;
        const genreId = searchParams.get('genreId') ? Number(searchParams.get('genreId')) : undefined;
        // Calculate skip for pagination
        const skip = (page - 1) * limit;
        // Build query filters
        const where = genreId ? {
            genres: {
                some: {
                    genreId
                }
            }
        } : {};
        // Fetch series with pagination
        const seriesList = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].series.findMany({
            where,
            include: {
                genres: {
                    include: {
                        genre: true
                    }
                }
            },
            orderBy: {
                popularity: 'desc'
            },
            skip,
            take: limit
        });
        // Get total count for pagination
        const total = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].series.count({
            where
        });
        // Transform the data to match the expected format
        const formattedSeries = seriesList.map((series)=>{
            return {
                id: series.id,
                name: series.name,
                overview: series.overview,
                poster_path: series.posterPath,
                backdrop_path: series.backdropPath,
                first_air_date: series.firstAirDate ? series.firstAirDate.toISOString().split('T')[0] : null,
                vote_average: series.voteAverage,
                genres: series.genres.map((sg)=>({
                        id: sg.genre.id,
                        name: sg.genre.name
                    })),
                original_language: series.originalLanguage,
                number_of_seasons: series.numberOfSeasons,
                number_of_episodes: series.numberOfEpisodes
            };
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            results: formattedSeries,
            page,
            total_pages: Math.ceil(total / limit),
            total_results: total
        }, {
            status: 200
        });
    } catch (error) {
        console.error('Error fetching series:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to fetch series'
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__f90d1e10._.js.map