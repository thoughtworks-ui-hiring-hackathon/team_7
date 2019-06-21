<template>
<div>
  <div>
     <img  class="modalImg":src="ImgPath"/> </div>
 </div>
 <div class="movieDescription">
  <div class="movieDetails">
  </div>
  <div class="movieCastGenere">
  </div>
</div>
  </el-dialog>
</div>

</template>

<script>
import axios from 'axios';

export default {
    name: 'DetailsPage',
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
