<template>
    <div  class="row">
              <div class="col-md-12 col-xl-12 grid-margin stretch-card p-0 m-0">
                <div class="card bg-light border border-light">
                  <div class="card-body p-0 m-0">
                    <div class="d-flex flex-row justify-content-between mb-3">
                      <h4 class="card-title text-danger">all developers</h4>
                      <p class="text-muted mb-1 small">View all</p>
                    </div>
                    <div  v-for="user in getUsers" :key="user.id" class="preview-list">
                      <div class="preview-item border-bottom">
                        <div class="preview-thumbnail">
                          <!-- <img src="assets/images/faces/face6.jpg" alt="image" class="rounded-circle" /> -->
                          <i class="mdi mdi-account text-light border rounded border-primary bg-dark p-2" style="font-size:20px"></i>
                        </div>
                        <div class="preview-item-content d-flex flex-grow">
                          <div class="flex-grow">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between">
                              <h6 class="preview-subject">{{ user.name }}</h6>
                            
                              <p @click="removeUser(user.id)" class="btn text-secondary text-large mt-1 border p-1 rounded bc"> <i class="mdi mdi-delete text-danger"></i> Remove</p>
                            
                            </div>
                            <p class="text-muted" v-if="user.profile != null">{{ user.profile.workexperience }}</p>
                             <p class="text-muted" v-if="user.profile == null">No profile yet</p>
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

   },

   methods:{
      removeUser(id){
        this.$store.dispatch('deleteUser', id)
      },
      showUsers(){
        this.$store.dispatch('getUsers');
      }
   }

      
};
</script>

<style scoped>
   .div{
     background-color: hsla(0, 1%, 13%, 0.904);
   }
</style>




           
 
