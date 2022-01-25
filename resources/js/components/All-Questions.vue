<template>
    <div class="row">
              <div class="col-md-12 col-xl-12 text-dark m-0 p-0 ">
                <spinner v-if="getLoading"></spinner>
                   <notification-danger v-if="getNotify"></notification-danger>
                    <div class="d-flex flex-row justify-content-between border-bottom border-secondary mb-4">
                      <h4 class="card-title myfont">All questions</h4>
                  
                        <span>
                         <a target="_blank" class="btn btn-outline-light get-started-btn">Show Newest</a>
                        </span>
                    </div>
                    <div class="preview-list">

                      <div v-for="question in  getQuestions" :key="question.id" class="preview-item border-bottom border-secondary curv m-0 p-0">
                        <div class="p-1  border-right border-secondary border-right">
                          <p> <i style="font-size:20px" class="mdi mdi-box"></i></p>
                          <p><i style="font-size:20px" class="mdi mdi-triangle text-primary"></i></p>
                        </div>
                        <div  class="preview-item-content d-flex flex-grow mt-3">
                          <div class="flex-grow">
                            <p class="myfont"> {{ question.user.name }}: <span class="text-muted text-small">{{ question.created_at }}</span></p>
                           <router-link :to="'/question/'+ question.id">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between">
                              <p class="preview-subject text-info myfont">{{ question.title }}</p>
                            </div>
                           </router-link> 
                            <!-- <p>{{ question.created_at }}</p> -->
                            <!-- <p  style="color:#259f"> <span class="text-muted text-small">{{ question.created_at }}</span></p> -->
                            <!-- <p class="text-muted text-small"></p> -->
                          </div>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
            <!-- </div>
    </div> -->
</template>


<script>
export default {

   created(){
      this.showQuestions();
   },

   computed: {
     getQuestions() {
       return this.$store.getters.getQuestions
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
      showQuestions(){
        this.$store.dispatch('getQuestions');
      }
   }

      
};
</script>
