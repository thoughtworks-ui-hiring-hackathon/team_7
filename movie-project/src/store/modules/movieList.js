import Vue from "vue";
export default {
    state: {
        latestMovies: [],
        trendingMovies: [],
        mostWatchedMoviews: []
    },
    getters: {
        getLatestMovies(state) {
            return state.latestMovies;
        },
        getTrendingMovies(state) {
            return state.trendingMovies;
        },
        getMostWatchedMoviews(state) {
            return state.mostWatchedMoviews;
        }
    },
    mutations: {

    },
    actions: {
        getLatestMovies({
            state,
            dispatch,
            rootState
        }) {
            dispatch("getAjaxData", {
                url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${rootState.API_KEY}&language=en-US&include_adult=false`,
            }).then(response => {
                Vue.set(state, "latestMovies", response.results);
            }).catch(err => {})
        },
        getTrendingMovies({
            state,
            dispatch,
            rootState
        }) {
            dispatch("getAjaxData", {
                url: `https://api.themoviedb.org/3/trending/movie/week?api_key=${rootState.API_KEY}`
            }).then(response => {
                Vue.set(state, "trendingMovies", response.results);
            }).catch(err => {})
        },
        getMostWatchedMoviews({
            state,
            dispatch,
            rootState
        }) {
            alert('gaet')
            let urlKey = `https://api.themoviedb.org/3/movie/popular?api_key=${rootState.API_KEY}&language=en-US&page=1`;
            dispatch("getAjaxData", {
                url: urlKey
            }).then(response => {
                Vue.set(state, "mostWatchedMoviews", response.results);
            }).catch(err => {})
        }
    }
}
