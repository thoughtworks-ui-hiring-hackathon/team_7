<template>

<div class="MovieModal">
  <el-dialog
    title="Tips"
    :title="modalData.cardData.original_title"
     :visible.sync="outerVisible"
    width="50%"
    :before-close="handleClose">

<div class="movieDescription">
  <div> <img  class="modalImg":src="ImgPath"/> </div>
 <div class="movieInfo">{{modalData.cardData.overview.slice(0, 300)}}... </div>
 </div>
 <el-row class="movieDetails textLeft">
   <el-col :span="5" class="label">Genre </el-col>
   <el-col :span="19" >{{modalData.generes}} </el-col>
   <el-col :span="5"  class="label">Cast </el-col>
   <el-col :span="19"> {{ castNames.join(", ") }}  </el-col>
   <el-col :span="5" class="label">Director </el-col>
   <el-col :span="19"> {{ director }}</el-col>
   <el-col :span="5"  class="label">Movie Rating </el-col>
   <el-col :span="19"  <el-rate v-model="modalData.cardData.vote_average/2" disabled></el-rate></el-col>

 </el-row>
  </el-dialog>
</div>

</template>

<script>
import axios from 'axios';

export default {
    name: 'MovieModal',

    created(){
      axios({
          method: "get",
          url: `https://api.themoviedb.org/3/movie/${this.modalData.cardData.id}?api_key=${this.apiKey}&language=en-US&append_to_response=credits `,
          headers: {}
      }).then(response => {
          console.log(response);
          this.movieDetails = response.data;

          this.castNames = this.movieDetails.credits.cast.map(c => c.name);
          this.director = this.movieDetails.credits.crew.find(c => c.job === "Director").name;
      }).catch(err => {
          console.error("Err", err);
      })
    },
    data(){
      return {
       outerVisible:true,
       movieDetails:null,
       castNames: [],
       director: ""
      }
    },
    computed:{
      ImgPath() {
          return `https://image.tmdb.org/t/p/original/${this.modalData.cardData.backdrop_path}`;
      }
    },
    props:['modalData','apiKey'],
    methods:{
        handleClose(done) {
          this.$emit("hideModal")
        }
    }

}

</script>
<style>
.modalImg{
  height: 250px;
  width: 400px;
}
.movieDescription{
  display: flex;
}
.movieInfo{
  padding-left: 20px;

}
.textLeft{
  text-align:left
}
.movieDetails .label{
  font-weight: bold;
}
</style>
