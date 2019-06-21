

<template>

<div class="hello">
    <MovieModal v-if="modalVisibility" :modalData="modalData" :apiKey="API_KEY" @hideModal="hideModal"> </MovieModal>
    <div class="latestHeader"> Latest</div>
    <el-carousel indicator-position="outside">
        <div class="latestMovie">
            <div class="flex-item" v-for="card in latestMovies">
                <movieCard :card="card" :movieGeneres="movieGeneres" @showModal="showModal"></movieCard>
            </div>
        </div>
    </el-carousel>


    <div class="latestHeader"> Trending</div>
    <el-carousel indicator-position="outside">
        <div class="latestMovie">
            <div class="flex-item" v-for="card in trendingMovies" >
                <movieCard :card="card" :movieGeneres="movieGeneres" @showModal="showModal"></movieCard>
            </div>
        </div>
    </el-carousel>

    <div class="latestHeader"> Most Watched</div>
    <el-carousel indicator-position="outside">
        <div class="latestMovie">
            <div class="flex-item" v-for="card in mostWatchedMoviews" >
                <movieCard :card="card" :movieGeneres="movieGeneres" @showModal="showModal"></movieCard>
            </div>
        </div>
    </el-carousel>
</div>

</template>

<script>

import movieCard from "./movieCard.vue";
import axios from 'axios';
import MovieModal from "./MovieDeatilsModal.vue";

export default {
    name: 'ListView',
    data() {
        return {
            API_KEY: "8dd67f39ba8c6c6b8f70d20802600856",
            latestMovies: [],
            trendingMovies: [],
            mostWatchedMoviews: [],
            movieGeneres: [],
            modalVisibility: false,
            modalData: null
        }
    },
    components: {
      MovieModal,
      movieCard
    },
    computed:{
      // mostWatchedMoviews() {
      //   return this.$store.getters.getMostWatchedMoviews;
      // },
      // trendingMovies() {
      //   return this.$store.getters.getTrendingMovies;
      // },
      // latestMovies() {
      //   return this.$store.getters.getLatestMovies;
      // },
      // movieGeneres() {
      //   return this.$store.getters.getMovieGenres;
      // }
    },
    created() {


        axios({
            method: "get",
            url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.API_KEY}&language=en-US `,
            headers: {}
        }).then(response => {
            console.log(response);
            this.movieGeneres = response.data.genres;
        }).catch(err => {
            console.error("Err", err);
        })
        axios({
            method: "get",
            url: `https://api.themoviedb.org/3/trending/movie/week?api_key=${this.API_KEY}`,
            headers: {}
        }).then(response => {
            console.log(response);
            this.trendingMovies = response.data.results;
        }).catch(err => {
            console.error("Err", err);
        })
        axios({
            method: "get",
            url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.API_KEY}&language=en-US&include_adult=false`,
            headers: {}
        }).then(response => {
            console.log(response);
            this.latestMovies = response.data.results;
        }).catch(err => {
            console.error("Err", err);
        })
        axios({
            method: "get",
            url: `  https://api.themoviedb.org/3/movie/popular?api_key=${this.API_KEY}&language=en-US&page=1`,
            headers: {}
        }).then(response => {
            console.log(response);
            this.mostWatchedMoviews = response.data.results;
        }).catch(err => {
            console.error("Err", err);
        })

        // this.$store.dispatch("getMostWatchedMoviews");
        // this.$store.dispatch("getLatestMovies");
        // this.$store.dispatch("getTrendingMovies");
        // this.$store.dispatch("getMovieGenres");




    },
    methods: {
      showModal(modalData) {
        this.modalVisibility = true;
        this.modalData = modalData;
      },
      hideModal() {
        this.modalVisibility  = false;
      }
    }




}

</script>


<style scoped>

.latestHeader {
    text-align: left;
    padding: 10px 0px 10px 25px;
}

.latestMovie {
    display: flex;
    flex-wrap: nowrap;
}

.flex-item {
    width: 25%;
    padding: 0px 25px;
}

</style>
