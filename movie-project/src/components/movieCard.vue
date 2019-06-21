

<template>

<div class="movieCard">
    <el-card :body-style="{ padding: '0px' }">
        <img @click="showModal" :src="ImgPath" class="movieImg">
        <div class="movieDetails">
            <div>{{card.original_title}}</div>
            <div class="bottom clearfix">
                <div class="generesInfo"> {{getMovieGeneres(card.genre_ids)}}</div>
                <div class="flex-display">
                    <el-rate v-model="card.vote_average/2"
 disabled></el-rate>
                    <div><a href=""> Show More</a> </div>
                </div>
            </div>
        </div>
    </el-card>
</div>

</template>

<script>

import Home from "./Home.vue";

export default {
    name: 'movieCard',
    data() {
        return {
            activeName: 'Home',
            generes:[]
        }
    },
    computed: {
        ImgPath() {
            return `https://image.tmdb.org/t/p/original/${this.card.backdrop_path}`;
        }
        // movieGeneres() {
        //   return this.$store.getters.getMovieGenres;
        // }
    },

    props: ['card', "movieGeneres"], //'movieGeneres'
    methods: {
        getMovieGeneres(ids) {
                var generes = "";
                ids.forEach((id) => {
                    generes = generes ? generes + "," + this.movieGeneres.find((gen) => gen.id == id).name : this.movieGeneres.find((gen) => gen.id == id).name;

                })

                return generes;
            },
            showModal(){
              let modalData = {
                cardData : this.card,
                generes : this.getMovieGeneres(this.card.genre_ids)
              }
              this.$emit("showModal", modalData);
            }

    },

}

</script>
<style>

.movieImg {
    height: 170px;
    width: 320px;
}

.movieDetails {
    line-height: 30px;
}

.flex-display {
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>
