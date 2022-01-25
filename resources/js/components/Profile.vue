<template>
    <!-- <div class="row" >
        <div v-for="profile in getProfileWithId" :key="profile.id"  style="color:white">
          <h1>{{ profile.id }}</h1>
          <h1>{{ profile.nickname }}</h1>
          <h1>{{ profile.sex }}</h1>
          <h1>{{ profile.mobile }}</h1>
          <h1>{{ profile.country }}</h1>
          <h1>{{ profile.nickname }}</h1>
          <h1>{{ profile.workexperience }}</h1>
          <h1>{{ profile.languageorframework }}</h1>
          <h1></h1>
           
        </div>
    </div> -->

    <div  class="row">
              <div class="col-md-12">
                <notification-danger v-if="getNotify"></notification-danger>
              </div>
             <div v-for="user in getUserWithId" :key="user.id" class="col-md-12 col-xl-12 bc m-0 p-0 footer rounded">
              <div class="d-flex flex-row justify-content-between border-bottom border-secondary pt-2">
               <h4 class="card-title text-primary myfont mt-2 ml-3">
                {{ user.name }}
                <br>
                 <span><code class="text-muted myfont">{{ user.profile.nickname }}</code></span>  
               </h4>    
                  <span>
                  <p  class="text-primary bg-dark rounded myfont p-2 mr-2"><span class="text-warning">Tech</span>Wizard</p>
                  </span>
              </div>
              </div>
             
                <div  class="col-md-6 text-center  m-0 p-0 border-bottom curv border-secondary">
                  <spinner v-if="getLoading"></spinner>
                  <div class="col-md-12  m-0">
                    <i class="mdi mdi-account text-secondary person-icon m-0 p-0"></i>
                  </div>
                  <!-- <div v-for="user in getUserWithId" :key="user.id" class="col-md-12 bg-gray">
                     <h2 class="text-danger pt-0">{{ user.name }}</h2>
                     <h3 class="text-muted pt-0"> {{ user.profile.nickname }} </h3>
                  </div> -->
                </div>
             


                <div v-for="user in getUserWithId" :key="user.id"   class="col-md-6 curv text-primary rounded p-2 mt-4 text-center myfont  border-bottom border-secondary pad">
                   <!-- <h2 class="preview-subject pt-4"> {{ user.name }}</h2>
                   <p  v-if="user.profile !== null" class="text-muted text-small">{{ user.profile.nickname }}</p> -->
                   <p  v-if="user.profile == null" class="text-muted text-small">No nickname</p>
                   <span v-if="user.profile !== null" class="text-muted">Phone : <span> {{ user.profile.mobile }}</span></span>
                  <span v-if="user.profile == null" class="text-light"> <span> No mobile contact</span></span>
                  <h5 v-if="user.profile !== null" class="preview-subject mt-2 text-muted"> <span  class="text-muted" >From : </span>{{ user.profile.country }}</h5>
                  <h5 v-if="user.profile == null" class="preview-subject mt-2 text-muted"> <span  class="text-muted" >From </span>No country specified</h5>
                  <p v-if="user.profile !== null" class="badge bc" style="color:beige; font-size:10px"> {{ user.profile.languageorframework }}</p>
                  <p v-if="user.profile == null" class="badge bc" style="color:beige; font-size:10px">No language</p>
                  <p class="text-primary" v-if="user.profile !== null"> <span  v-if="user.profile !== null"> {{ user.profile.workexperience }}</span></p>
                  <p v-if="user.profile == null" class="text-primary mdi mdi-pentagon "> <span> Add a work experience to your profile by updating your profile</span></p>       
              
                </div>

                <div class="col-md-12 mt-4" v-for="user in getUserWithId" :key="user.id">
                   <!-- <div v-for="pro in user.projects" :key="pro.id"  class="col-md-12 bc text-center">
                 </div>  -->
                   <h3 class="text-muted">Github Projects</h3>
                  <span class="bc p-1 m-4 rounded" v-if="user.projects == ''">No project added</span>
                  <div v-for="project in user.projects" :key="project.id" class="row">
                      <div class="col-12">
                        <div class="preview-list">
                          <div class="preview-item border-bottom border-secondary curv">
                            <div class="preview-thumbnail mb-4">
                              <div class="preview-icon bg-primary curv">
                                <i class="mdi mdi-gitlab"></i>
                              </div>
                            </div>
                            <div class="preview-item-content d-sm-flex flex-grow">
                              <div  class="flex-grow">
                                <p class="preview-subject text-dark" v-html="project.editordata">{{ project.editordata }}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                     <spinner v-if="getLoading"></spinner>
                </div>
                </div>
                      
</template>

<script>
export default {

   created(){
     this.show(this.$route.params.id)
   },

   computed: {
     getUserWithId() {
       return this.$store.getters.getUserWithId
     },
     getLoading(){
        return this.$store.getters.getLoading
      },
     getNotify(){
      return this.$store.getters.getNotify
     }
   },

   methods:{
      show(id){
        this.$store.dispatch('getUserWithId', id)
      },
   }
}
</script>

<style scoped>
  
 .person-icon{
   font-size: 230px;
 }

 .pad{
   margin-top: 70px !important;
 }

 .grad{
   background-image: linear-gradient(to bottom right, rgb(96, 96, 238), rgb(226, 224, 224), rgb(192, 209, 255));
 }

 @media(max-width:720px) {
 .pad{
   margin-top: 10px !important;
 }
 }


</style>