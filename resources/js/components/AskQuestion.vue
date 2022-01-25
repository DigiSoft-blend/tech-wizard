<template>
  <div class="row">
      <div class="col-md-12 col-xl-12 m-0 p-0">
        <spinner v-if="getLoading"></spinner>
         <notification-danger v-if="getNotify"></notification-danger>
          <notification-warning v-if="getNotifyWarning"></notification-warning>
       </div>
       <div class=" col-md-12 col-xl-12 m-0 p-0" >
        <form @submit="addThisQuestion">
                <div class="preview-item border-bottom">
                <div class="preview-item-content d-sm-flex flex-grow">
                    <div class="flex-grow">
                    <h4 class="preview-subject text-dark">Ask a question here</h4>
                    </div>
                    <div class="mr-auto text-sm-right pt-2 pt-sm-0">
                    <button class="btn btn-large  btn-primary mb-3" type="submit"> <span class="mdi mdi-cloud" style="font-size:16px"> Send</span></button>
                    </div>
                </div>
                </div>

        <div class="add-items d-flex m-0 p-0">
            <input v-model="title" type="text" class="form-control text-dark" placeholder="Add a title to your question..">
        </div>
        </form>
            <ckeditor v-model="editordata" :config="editorConfig" tag-name="textarea"></ckeditor>
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
            editordata: '',
            title: '',
            editorConfig: {
            
            },
        }
    },  

    methods: {
        addThisQuestion(e){
             e.preventDefault();
             this.$store.dispatch('addQuestion', {
                editordata: this.editordata,
                title: this.title,
             })
             .then(response => {
              //  this.$router.push({ name: 'user-profile'})
              alert('Question added');
             })
             .catch(error => {
               if(error.response.status == 400){
                    alert('an error occured');
               }
            })
        },
    }
}
</script>
    

