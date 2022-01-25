<template>
   
    <div class="row">
              <div class="col-md-12 col-xl-12 grid-margin stretch-card p-0 m-0">
                <div class="card bg-light border border-light">
                  <div class="card-body p-0 m-0">
                     <spinner v-if="getLoading"></spinner>
                     <notification-danger v-if="getNotify"></notification-danger>
                    <div class="d-flex flex-row justify-content-between mb-3 border-secondary border-bottom">
                      <h4 class="card-title text-dark myfont">Developers</h4>
                      <!-- <p class="text-muted mb-1 small">View all</p> -->
                    </div>
                    <div  v-for="user in getUsers" :key="user.id" class="preview-list">
                      <div class="preview-item border-bottom border-secondary curv">
                        <div class="preview-thumbnail">
                          <!-- <img src="assets/images/faces/face6.jpg" alt="image" class="rounded-circle" /> -->
                          <i class="mdi mdi-account text-info border border-primary p-2 user"></i>
                        </div>
                        <div class="preview-item-content d-flex flex-grow">
                          <div class="flex-grow">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between">
                              <h6 class="preview-subject text-primary myfont">{{ user.name }}</h6>
                             <router-link v-if="user.profile != null" :to="'/user/'+ user.id">
                              <p class="text-primary text-large  myfont">View profile</p>
                             </router-link>
                            </div>
                            <p class="text-muted myfont" style="font-size:10px" v-if="user.profile != null">{{ user.profile.workexperience }}</p>
                             <p class="text-muted myfont" style="font-size:10px" v-if="user.profile == null">No profile yet</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
         
</template>

<script>
export default {

   created(){
      this.showUsers();
      this.getA();
   },


  
   computed: {
     getUsers() {
       return this.$store.getters.getUsers
     },
      loggedIn() {
       return this.$store.getters.loggedIn
     },
      getLoading(){
        return this.$store.getters.getLoading
      },
      getNotify(){
      return this.$store.getters.getNotify
      }
     
   },

   methods:{
      // removeUser(id){
      //   this.$store.dispatch('deleteUser', id)
      // },
      showUsers(){
        this.$store.dispatch('getUsers');
      }
   }

      
};
</script>

<style>
   /* .div{
     background-color: hsla(0, 1%, 13%, 0.904);
   } */

   .user{
     font-size:20px;
     border-radius: 100%;
   }

   .curv{
      border-radius: 30%!important;
   }

   .myfont{
    font-family: Verdana, Geneva, Tahoma, sans-serif
   }
</style>


