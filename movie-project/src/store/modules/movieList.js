import Vue from "vue";
export default {
  state: {
    latestMovies: [],
    trendingMovies: [],
    mostWatchedMoviews: []
  },
  getters: {
    getLatestMovies() {
      return state.latestMovies;
    },
    getTrendingMovies() {
      return state.trendingMovies;
    },
    getMostWatchedMoviews() {
      return state.mostWatchedMoviews;
    }
  },
  mutations: {

  },
  actions: {
    getLatestMovies({state, dispatch, rootState}){
        dispatch("getAjaxData"{
          url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${rootState.API_KEY}&language=en-US&include_adult=false`,
        }).then(response => {
          Vue.set(state, "latestMovies", response);
        }).catch(err => {})
    },
    getTrendingMovies({state, dispatch, rootState}){
        dispatch("getAjaxData"{
          url: `https://api.themoviedb.org/3/trending/movie/week?api_key=${rootState.API_KEY}`
        }).then(response => {
          Vue.set(state, "trendingMovies", response);
        }).catch(err => {})
    },
    getMostWatchedMoviews({state, dispatch, rootState}){
      alert('gaet')
      dispatch("getAjaxData", {
        url:  `https://api.themoviedb.org/3/movie/popular?api_key=${rootState.API_KEY}&language=en-US&page=1`
      }).then(response => {
        Vue.set(state, "mostWatchedMoviews", response);
      }).catch(err => {})
  }
}
