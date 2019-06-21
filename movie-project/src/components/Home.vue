

<template>

<div class="hello">
<component :is="activeView" @changeView="changeView"/>
</div>

</template>

<script>
import ListView from './listView.vue';
import detailsPage from './DetailsPage.vue';
export default {
    name: 'Home',
    data() {
        return {
          activeView:"ListView"
        }
    },
    components: {
        ListView,
        detailsPage
    },
    methods:{
      changeView(viewName){
        this.activeView=viewName;
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
