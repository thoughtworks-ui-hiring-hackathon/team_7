import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import movieDetails from "./modules/movieDetails"
import genres from "./modules/genres"
import movieList from "./modules/movieList"

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    API_KEY: "8dd67f39ba8c6c6b8f70d20802600856"
  },
  modules: {
    movieDetails,
    genres,
    movieList
  },
  mutations: {

  },
  actions: {
    getAjaxData({
       commit
      },
    {
      url
    }){
      return new Promise((resolve, reject) => {
        axios({
            method: "get",
            url: url,
          }).then(response => {
            console.log(response);
            resolve(response.data);
        }).catch(err => {
            reject(err);
        })
      })
    }
  }
})
