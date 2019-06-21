export default {
  state: {
    movieGeneres: []
  },
  getters: {
    getMovieGenres(state) {
      return state.movieGeneres;
    }
  },
  mutations: {

  },
  actions: {
    getMovieGenres({state, dispatch, rootState}){
        dispatch("getAjaxData", {
          url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${rootState.API_KEY}&language=en-US`
        }).then(response => {
          Vue.set(state, "movieGeneres", response.genres);
        }).catch(err => {})
    }
  }
}
