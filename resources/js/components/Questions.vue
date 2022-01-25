<template>
    <div class="row">

      <div class="col-md-12 col-xl-12  text-dark m-0 p-0">
         <spinner v-if="getLoading"></spinner>
         <notification-danger v-if="getNotify"></notification-danger>
         <notification-warning v-if="getNotifyWarning"></notification-warning>
      </div>
     
              <div v-for="question in getQuestionWithId" :key="question.id" class="col-md-12 col-xl-12  text-dark m-0 p-0">
                    <div class="d-flex flex-row justify-content-between">
                      <h4 class="card-title myfont">Questions</h4>
                      <!-- <p class="text-muted mb-1 small">Show Newest</p> -->
                        <span>
                         <p  class="text-primary bg-dark rounded p-2 myfont"><span class="text-warning">Tech</span>Wizard</p>
                        </span>
                    </div>
                    <div class="preview-list">
                     
                      <div class="preview-item border-bottom m-0 p-0 border-bottom border-secondary curv">
                        <div class="p-1 border-right border-secondary curv text-dark">
                          <p> <i style="font-size:20px" class="mdi mdi-box"></i></p>
                           
                          <p><i style="font-size:20px" class="mdi mdi-triangle"></i></p>
                        </div>
                        <div class="preview-item-content d-flex flex-grow">
                          <div class="flex-grow">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between">
                              <h6 class="mt-4 preview-subject text-primary myfont">{{ question.title }}</h6>
                            </div>
                             <p class="mt-1 text-warning text-small myfont"> <span class="text-primary text-small">{{ question.user.name }} :</span>  {{ question.created_at }}</p>
                          </div>
                        </div>
                      </div>
                     
                       
                            
                                <div class="row mt-4 mb-4 bg-light rounded border border-info">
                           <div  class="col-12  mt-1">
                            <div class="preview-item border-bottom border-secondary curv2">
                            <div class="preview-item-content d-sm-flex flex-grow">
                              <div class="flex-grow mt-3">
                                <span class="text-dark myfont" style="font-size:20px"> {{ question.title }}</span>
                              </div>
                              <div class="mr-auto text-sm-right pt-2 pt-sm-0 mt-3"> 
                               <p class="bg-secondary p-1 text-info rounded myfont">{{ question.user.name }} : asked a question</p>
                              </div>
                            </div>
                          </div>
                                   <code class="text-dark" v-html="question.editordata" >{{ question.editordata }}</code>
                                 </div>
                                </div>

                          
                      <div  v-for="answer in question.answers" :key="answer.id"  class="row bg-light mb-1 rounded">
                          <div class="col-12 m-0">
                               <div class="row bg-light rounded border border-primary">
                                    <div  class="col-12">

                              <div class="d-flex flex-row justify-content-between mt-2 bg-secondary rounded p-2">
                               <div v-if="answer.ans_user.email != getAuthUser.email"  class="flex-grow mt-1">
                                <span class="mdi mdi-account text-muted bg-light p-2  rounded myfont" style="font-size:15px"> <span class="text-primary"> {{ answer.ans_user.name }}</span> <span class="bg-success p-1 text-dark rounded">answerd</span></span>
                              </div>
                               <div v-if="answer.ans_user.email === getAuthUser.email" class="flex-grow mt-1">
                                <span class="mdi mdi-account text-muted bg-light p-2 rounded" style="font-size:15px"> <span class="text-primary"> You</span> <span class="bg-success p-1 text-dark rounded">answerd</span></span>
                              </div>
                                        
                                                              
                              <div v-if="answer.ans_user.email === getAuthUser.email" class="ml-auto p-1 mr-1">     
                                  <div class="nav-item dropdown">
                                      <i id="createbuttonDropdown" data-toggle="dropdown" aria-expanded="false" class="mdi mdi-view-list pr-3 text-gray"></i>
                                      <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="createbuttonDropdown">
                                        <div class="dropdown-divider"></div>
                                        <router-link :to="'/edit-answer/'+answer.id">
                                           
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
                                        
                                        <a @click="removeAnswer(answer.id)" class="dropdown-item preview-item text-light">
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
                            
                              <div class="mr-auto text-sm-right pt-1 pt-sm-0">
                                 <span class="text-muted myfont" style="font-size:15px"> {{ answer.created_at }}</span>
                              </div>
                                      </div>

                                   <code class="text-dark" v-html="answer.editordata" >{{ answer.editordata }}</code>
                                 </div>
                                
                                     <p class="ml-2 pl-4 rounded" style="font-size:25px"> <i class="text-primary mdi mdi-thumb-up "></i></p><span class="text-muted mt-2 ml-1" style="font-size:18px"> 0</span>
                                </div>
                            
                          </div>
                       </div>

                    </div>


                   


                       <div class="preview-item mb-2 mt-4">
                            <div class="preview-item-content d-sm-flex flex-grow">
                              <div class="flex-grow">
                                <span class="text-light" style="font-size:20px"> Type your answers here</span>
                              </div>
                            <form @submit="postAnswer">
                              <div class="mr-auto text-sm-right pt-2 pt-sm-0">
                                 <button class="btn btn-large  btn-primary myfont" type="submit"> <span class="mdi mdi-thumb-up"> Post your answer</span></button>
                              </div>
                            </form>  
                            </div>
                          </div>
                 
                    <ckeditor class="mb-2" v-model="editordata" :config="editorConfig"  tag-name="textarea"></ckeditor>

                    <div style="text-align:center">
                      <h6 style="font-size:10px">By clicking "Post Your Answer", you agree to our <router-link to="/questions">terms of service,</router-link> <router-link to="/questions">privacy policy</router-link> and <router-link to="/questions">cookie policy</router-link></h6>
                    </div>
                 
                  </div>

                 
                </div>

</template>


<script>
export default {

   data(){
    return {
      question_id: this.$route.params.id,
      editordata: '',
      editorConfig: {
       
      },
      ans: ''
    }
  },

   created(){
     this.show(this.$route.params.id),
     this.showAuthUser()
   },

   computed: {
     getQuestionWithId() {
       return this.$store.getters.getQuestionWithId
     },
     getAuthUser(){
       return this.$store.getters.getAuthUser
     },
     loggedIn() {
       return this.$store.getters.loggedIn
     },
      getLoading(){
        return this.$store.getters.getLoading
      },
     getNotify(){
      return this.$store.getters.getNotify
     },
      getNotifyWarning(){
       return this.$store.getters.getNotifyWarning
     }
   },

   methods:{

      show(id){
        this.$store.dispatch('getQuestionWithId', id)
      },

      showAuthUser(){
        this.$store.dispatch('getAuthUser')
      },

      postAnswer(e){
        e.preventDefault();
         this.$store.dispatch('addAnswer', {
            question_id: this.question_id,
            editordata: this.editordata,
          })
          .then(response => {
          this.show(this.$route.params.id);
          })
          .catch(error => {
            if(error.response.status == 401){
                this.$router.push({ name: 'login'})
            }
          })
      },


       removeAnswer(id){
        this.$store.dispatch('deleteAnswer', id)
         this.show(this.$route.params.id),
         this.showAuthUser()
      }

   }
}
</script>


<style scoped>
   code{
    word-break: break-all;
    overflow-x: auto;
    max-width: 100%;
  }
  .curv2{
    border-radius: 10%;
  }
  .pre{
     color:rgb(36, 35, 35);
     background-color: rgb(224, 221, 221);
     border-radius: 5px;
  }

  .question{
    background-color: rgb(238, 234, 234);
    color: black;
     border-radius: 5px;
  }

  @media only screen and (max-width: 600px){
    code{
    word-break: break-all;
    overflow-x: auto;
    overflow-y: auto;
    max-width: 290px;
    max-height: 500px;
    font-size: 17px;
  }
  }
</style>


