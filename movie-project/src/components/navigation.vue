<template>
  <div class="hello">
  <el-tabs v-model="activeName" type="card" >
   <el-tab-pane label="Home" name="Home"></el-tab-pane>
   <el-tab-pane label="Explore" name="Explore"></el-tab-pane>
  </el-tabs>

  <component :is="activeName"></component>

  </div>
</template>

<script>
import Home from "./Home.vue";
export default {
  name: 'Navigation',
  components:{Home},
  data(){
    return {
      activeName:'Home'
    }
  },
  methods:{
    handleClick(tab,event){
    // this.dynamicComponent=tab.name;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
