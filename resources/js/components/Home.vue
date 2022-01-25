<template>
    <div><spinner v-if="getLoading"></spinner>
     <notification-danger v-if="getNotify"></notification-danger>
        <comp2></comp2>
        <post-component></post-component>
        <comp8></comp8>
        <comp3></comp3>
        <comp4></comp4>
    </div>
      
     
      
</template>

<script>

export default {
  computed:{
     getLoading(){
      return this.$store.getters.getLoading
    },
    getNotify(){
      return this.$store.getters.getNotify
    }
  }
}

</script>


<style scoped>
  /* .spinner-margin{
    margin-top:15%
  } */
</style>


