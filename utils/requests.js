const API_KEY = process.env.API_KEY;

export default {
    fetchTrending: {
        title: 'Trending',
        // using back ticks for URL to interpolate api key into the string.
        url: `trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated: {
        title: 'Top Rated',
        // using back ticks for URL to interpolate api key into the string.
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies: {
        title: 'Action',
        // using back ticks for URL to interpolate api key into the string.
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedyMovies: {
        title: 'Comedy',
        // using back ticks for URL to interpolate api key into the string.
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorrorMovies: {
        title: 'Horror',
        // using back ticks for URL to interpolate api key into the string.
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomaceMovies: {
        title: 'Romance',
        // using back ticks for URL to interpolate api key into the string.
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    fetchMystery: {
        title: 'Mystery',
        // using back ticks for URL to interpolate api key into the string.
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    fetchSciFi: {
        title: 'Sci-Fi',
        // using back ticks for URL to interpolate api key into the string.
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`
    },
    fetchWestern: {
        title: 'Western',
        // using back ticks for URL to interpolate api key into the string.
        url: `/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    fetchAnimation: {
        title: 'Animation',
        // using back ticks for URL to interpolate api key into the string.
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    fetchTv: {
        title: 'TV',
        // using back ticks for URL to interpolate api key into the string.
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`
    }
}