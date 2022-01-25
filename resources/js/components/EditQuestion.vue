<template>
  <div class="row">
      <div class=" col-md-12 col-xl-12 m-0 p-0">
         <spinner v-if="getLoading"></spinner>
      </div>

       <div v-for="question in getQuestionWithId"   :key="question.id" class=" col-md-12 col-xl-12 m-0 p-0" >

        <form @submit.prevent="updateQuestion"  >
                <div class="preview-item border-bottom">
                <div class="preview-item-content d-sm-flex flex-grow">
                    <div class="flex-grow">
                    <h4 class="preview-subject text-dark">Edit this question</h4>
                    </div>
                    <div class="mr-auto text-sm-right pt-2 pt-sm-0">
                    <button class="btn btn-large  btn-primary mb-3" type="submit"> <span class="mdi mdi-cloud" style="font-size:16px"> Update</span></button>
                    </div>
                </div>
                </div>
           <!-- <div class="add-items d-flex justify-content-center p-0 m-0  border border-gray">
              <p class="text-gray text-center p-2">Set the editor to <span class="text-light bg-muted rounded p-1 border" >source</span> and copy the post on the tech-wizard terminal to the editor and click back on the  <span class="text-light rounded p-1 border" >source</span>  on the editor </p>
           </div> -->
      
        <div class="add-items d-flex m-0 p-0">
            <input v-model="title" type="text" :placeholder="question.title" class="form-control text-dark" >
        </div>
    
        </form>
        <div class="add-items d-flex m-0 p-0" >
           <textarea  v-model="question.editordata" class="bg-dark text-gray"  id="" cols="135" rows="7"></textarea>
        </div>
            <ckeditor   class="text-dark" v-model="editordata" :config="editorConfig" ></ckeditor>
     </div>
  </div>
    
</template>


<script>
export default {

   props:['title'],

   created(){
     this.showQuestion(this.$route.params.id)
   },

    data() {
      return {
        questionId: this.$route.params.id,
        title: this.title,
        editordata:'',
        editorConfig: {

        }
      };  
    },

   computed: {
     getQuestionWithId() {
       return this.$store.getters.getQuestionWithId
     },
      getLoading(){
      return this.$store.getters.getLoading
    }
   },
   
   
   methods:{
      showQuestion(id){
        this.$store.dispatch('getQuestionWithId', id)
      },

       updateQuestion(){
            this.$store.dispatch('updateQuestionWithId', {
              questionId: this.questionId,
              title: this.title,
              editordata: this.editordata
            })
            .then(response => {
              this.$router.push({ name: 'Home'})
              alert('Question Updated')
            })
            .catch(error => {
              console.log(error)
            })
        },
   }

  
}
</script>

