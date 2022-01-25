<template>
   <div class="row mt-1">
       
       <div class="col-md-12">
         <spinner v-if="getLoading"></spinner>
         <notification-danger v-if="getNotify"></notification-danger>
       </div>
                    <div  v-for="user in getUser" :key="user.id" class="col-md-12 mt-4 mb-4">
                      <div class="d-flex flex-row justify-content-between mb-2 border-bottom border-secondary">
                      <h4 class="card-title text-dark myfont">Github projects</h4>
                       
                      <!-- <p class="text-muted mb-1">Your data status</p> -->
                     <p v-if=" user.projects == ''" class="preview-subject text-primary myfont">No projects added</p>
                    </div>

                   <div v-for="project in user.projects" :key="project.id" class="row myfont">
                      <div class="col-12">
                        <div class="preview-list">
                          <div class="preview-item border-bottom border-secondary curv">
                            <div class="preview-thumbnail">
                              <div class="preview-icon bg-primary curv mb-4">
                                <i class="mdi mdi-gitlab"></i>
                              </div>
                            </div>
                            <div class="preview-item-content d-sm-flex flex-grow">
                              <div  class="flex-grow text-dark">
                                <p class="preview-subject" v-html="project.editordata">{{ project.editordata }}</p>
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
      this.showUser();
    },

   computed: {
     getUser() {
       return this.$store.getters.getUser
     },
      getLoading(){
        return this.$store.getters.getLoading
      },
    getNotify(){
      return this.$store.getters.getNotify
    }
   },

   methods:{
      showUser(){
        this.$store.dispatch('getUser');
      }
   }

}
</script>