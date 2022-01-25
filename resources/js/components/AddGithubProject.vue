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

      <div class="row">
       
       <div class="col-md-12 col-xl-12 m-0 p-0">
        <spinner v-if="getLoading"></spinner>
         <notification-danger v-if="getNotify"></notification-danger>
          <notification-warning v-if="getNotifyWarning"></notification-warning>
       </div>

       <div class="col-md-12 col-xl-12 m-0 p-0" >
        <form @submit="addProject">
                <div class="preview-item border-bottom border-secondary curv">
                <div class="preview-item-content d-sm-flex flex-grow">
                   
             <div  class="col-md-12 col-xl-12 m-0 p-0">
              <div class="d-flex flex-row justify-content-between pt-2">
                <h4 class="preview-subject text-dark myfont">Add a github project</h4> 
                  <span>
                    <button class="btn btn-large  btn-info mb-3" type="submit"> <span class="mdi mdi-cloud" style="font-size:16px"> Add</span></button>
                  </span>
              </div>
              </div>
                </div>
                </div>
        </form>
            <ckeditor class="mt-2" v-model="editordata" :config="editorConfig" tag-name="textarea"></ckeditor>
     </div>
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
     },
     getNotifyWarning(){
       return this.$store.getters.getNotifyWarning
     }
  },
 
    data(){
        return {
           editordata:'',
           editorConfig: {

           }
        }
    },

  
   methods:{

       addProject(e){
            e.preventDefault();
            this.$store.dispatch('addProject', {
            editordata: this.editordata,
            })
            .then(response => {
              this.$router.push({ name: 'all-projects'})
              alert('Project Added')
            })
            .catch(error => {
            if(error.response.status == 400){
             alert('An error occured')   
            }
            })
        },
   }

}
</script>