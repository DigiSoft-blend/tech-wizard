<template>
    <div class="row myfont">

          <div class="col-md-12 p-0 m-0">
              <spinner v-if="getLoading"></spinner>
              <notification-danger v-if="getNotify"></notification-danger>
           </div>
      <div class="col-md-12 border-bottom border-secondary pb-3 p-0 m-0">
            <h5 v-if="getUserQuestions != ''" class="text-dark">your questions</h5>
            <h5 v-if="getUserQuestions == ''" class="text-dark">No questions yet</h5>
         </div>    
            <div v-for="user_question in getUserQuestions" :key="user_question.id" class="col-md-12 col-xl-12 border-secondary  border-bottom curv mt-4">
                    <div class="d-flex flex-row justify-content-between">
                      <p class="card-title text-primary">{{ user_question.title }}</p>
                         <!-- <i class="mdi mdi-view-list mb-3 text-gray" style="font-size:20px"></i>  -->
               
               <div v-if="loggedIn" class="nav-item dropdown">
                 <i id="createbuttonDropdown" data-toggle="dropdown" aria-expanded="false" class="mdi mdi-view-list pr-3 text-gray"></i>
                <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="createbuttonDropdown">
                
                  <h6 class="p-3 mb-0">Projects</h6>
                  <div class="dropdown-divider"></div>
                  <router-link :to="'/edit-question/'+ user_question.id">
                  <a class="dropdown-item preview-item text-light">
                    <div class="preview-thumbnail">
                      <div class="preview-icon bg-dark rounded-circle">
                        <i class="mdi mdi-pen text-primary"></i>
                      </div>
                    </div>
                    <div class="preview-item-content">
                      <p class="preview-subject ellipsis mt-2">Edit</p>
                    </div>
                  </a>
                  </router-link>
                  <div class="dropdown-divider"></div>
                   
                  <a @click="removeUser(user_question.id)" class="dropdown-item preview-item text-light">
                    <div class="preview-thumbnail">
                      <div class="preview-icon bg-dark rounded-circle">
                        <i class="mdi mdi-delete text-danger"></i>
                      </div>
                    </div>
                    <div class="preview-item-content">
                      <p  class="preview-subject ellipsis mt-2">Delete </p>
                    </div>
                  </a>
                 
                </div>
              </div>
                     
                    </div>
                     <p class="text-gray">{{ user_question.created_at }}</p>
                    </div>
            </div>
</template>


<script>
export default {

   created(){
      this.showUserQuestions();
   },

   computed: {
     getUserQuestions() {
       return this.$store.getters.getUserQuestions
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
      showUserQuestions(){
        this.$store.dispatch('getUserQuestions');
      },
      removeUser(id){
        this.$store.dispatch('deleteQuestion', id)
      }
   }

      
};
</script>
