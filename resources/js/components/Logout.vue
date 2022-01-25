<template>
  <div>
     <spinner v-if="getLoading"></spinner>
     <notification-danger v-if="getNotify"></notification-danger>
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
    },

    created(){
        this.$store.dispatch('destroyToken')
        .then(response => {

             if(response.status == 200){
             this.$router.push({ name: 'Home'});
         }

        })
        .catch(error => {
            if(error.response.status != 200){
                  Swal.fire({
                    position: 'center',
                    icon: 'warning',
                    showConfirmButton: false,
                    timer: 3000
            })
             }
        })
    }
}

</script>