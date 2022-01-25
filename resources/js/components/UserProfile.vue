<template>
  
    <div class="row myfont">
      
      <div class="col-md-12 col-xl-12  text-dark m-0 p-0">
         <spinner v-if="getLoading"></spinner>
         <notification-danger v-if="getNotify"></notification-danger>
         <notification-warning v-if="getNotifyWarning"></notification-warning>
      </div>
             <div v-for="user in getUser" :key="user.name" class="col-md-12 col-xl-12 bc m-0 p-0 rounded">
              <div class="d-flex flex-row justify-content-between border-bottom border-secondary pt-2">
               <h4 class="card-title text-primary mt-2 ml-3">
                {{ user.name }}
                <br>
                 <span v-if="user.profile !== null"><code class="text-muted">{{ user.profile.nickname }}</code></span>  
               </h4>    
                  <span>
                  <p  class="text-primary bg-dark rounded p-2 mr-2"><span class="text-warning">Tech</span>Wizard</p>
                  </span>
              </div>
              </div>

                <div  class="col-md-6  border-secondary border-bottom text-center curv">
                   <i class="mdi mdi-account text-secondary mt-4" style="font-size:100px"></i>
                </div>
                 
                <div v-for="user in getUser" :key="user.id" class="col-md-6 text-center text-primary border-secondary border-bottom border-rounded curv">
                  
                   <h3 class="preview-subject pt-4"> {{ user.name }}</h3>
                   <p  class="text-secondary">You are now a TechWizard</p>
                   <p  v-if="user.profile !== null" class="text-warning text-small"><span class="text-secondary">Nickname:</span> {{ user.profile.nickname }}</p>
                   <p  v-if="user.profile == null" class="text-muted text-small">No nickname</p>
                   <span v-if="user.profile !== null" class="text-muted"> <span>Phone : {{ user.profile.mobile }}</span></span>
                  <span v-if="user.profile == null" class="text-muted"> <span> No mobile contact</span></span>
                  <h6 v-if="user.profile !== null" class="preview-subject mt-2"> <span  class="text-muted" >From : </span>{{ user.profile.country }}</h6>
                  <h6 v-if="user.profile == null" class="preview-subject mt-2"> <span  class="text-muted" >From </span>No country specified</h6>
                  <p v-if="user.profile !== null" class="badge bg-dark" style="color:beige; font-size:10px"> {{ user.profile.languageorframework }}</p>
                  <p v-if="user.profile == null" class="badge" style="background-color:#259f; color:beige; font-size:10px">No language</p>
                  <p class="text-primary" v-if="user.profile !== null"> <span  v-if="user.profile !== null"> {{ user.profile.workexperience }}</span></p>
                  <p v-if="user.profile == null" class="text-primary mdi mdi-pentagon "> <span> Add a work experience to your profile by updating your profile</span></p>       
                </div>
             
                 <!-- <div class="col-md-12 col-xl-12 m-0 pt-3 mb-2 rounded ">
                    <form @submit="addThisPost">
                          <div class="preview-item border-bottom m-0 p-0">
                            <div class="preview-item-content d-sm-flex flex-grow">
                              <div class="mr-auto text-sm-right pt-2 pt-sm-0">
                                <router-link to="/ask-question">
                                    <button class="btn btn-large  btn-primary mb-3" type="submit">Ask a question</button>
                                </router-link>
                                <button class="btn btn-large  btn-success mb-3" type="submit">Upload Post</button>
                              </div>
                            </div>
                          </div>

                    <div class="add-items d-flex">
                      <input v-model="title" type="text" class="bg-light text-light form-control text-dark" placeholder="Add a title to your post..">
                    </div>
                    </form>
                  </div> -->

             <div class="col-md-12 col-xl-12  m-0 p-0 mb-2">
              <form @submit="addThisPost">
                    <div class="add-items d-flex mt-2">
                      <input v-model="title" type="text" class="form-control bg-light text-light form-control text-dark" placeholder="Add a title to your post..">
                    </div>
              <div class="d-flex flex-row justify-content-between">
                  <router-link to="/ask-question">
                    <button class="btn  btn-info  mb-3 p-2 m-2" type="submit">Ask a question</button>
                  </router-link> 
                  <button class="btn btn-large  btn-info mb-3 p-2 m-2" type="submit">Upload Post</button>            
              </div>
                </form>
              </div>


                   <div class="col-md-12 m-0 p-0">
                       <ckeditor v-model="editordata" :config="editorConfig" tag-name="textarea"></ckeditor>
                   </div>
                  
      </div>

      
             
</template>

<script>

export default {

  data(){
    return {
      editordata: '',
      title: '',
      editorConfig: {
       
      },
    }
  },

    created(){
     this.showUser()
     this.showQuestions()
    },

   computed: {
     getUser() {
       return this.$store.getters.getUser
     },
     getRole(){
         return this.$store.getters.getRole
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
      
      // showRole(){
      //  this.$store.dispatch('getRole')
      // },

        addThisPost(e){
             e.preventDefault();
             this.$store.dispatch('addPost', {
                editordata: this.editordata,
                title: this.title,
             })
             .then(response => {
              alert('Post added');
             })
             .catch(error => {
               console.log(error)
             })
        },

      showUser(){
        this.$store.dispatch('getUser')
      },
     
      showQuestions(){
        this.$store.dispatch('getQuestions');
      }
      
   }

}
</script>