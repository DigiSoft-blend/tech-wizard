<template>
  <div class="row">
       <div v-for="answer in getAnswerWithId"   :key="answer.id" class=" col-md-12 col-xl-12 m-0 p-0" >

        <form @submit.prevent="updateAnswer"  >
                <div class="preview-item border-bottom">
                <div class="preview-item-content d-sm-flex flex-grow">
                    <div class="flex-grow">
                    <h4 class="preview-subject text-dark">Edit this Answer</h4>
                    </div>
                    <div class="mr-auto text-sm-right pt-2 pt-sm-0">
                    <button class="btn btn-large  btn-primary mb-3" type="submit"> <span class="mdi mdi-cloud" style="font-size:16px"> Update</span></button>
                    </div>
                </div>
                </div>
        </form>
        <div class="add-items d-flex m-0 p-0" >
           <textarea  v-model="answer.editordata" class="bg-dark text-gray"  id="" cols="135" rows="7"></textarea>
        </div>
            <ckeditor   class="text-dark" v-model="editordata" :config="editorConfig" ></ckeditor>
     </div>
  </div>
    
</template>


<script>
export default {

  
   created(){
     this.showAnswer(this.$route.params.id)
   },

    data() {
      return {
        answerId: this.$route.params.id,
        editordata:'',
        editorConfig: {

        }
      };  
    },

   computed: {
     getAnswerWithId() {
       return this.$store.getters.getAnswerWithId
     },
   },
   
   
   methods:{
      showAnswer(id){
        this.$store.dispatch('getAnswerWithId', id)
      },

       updateAnswer(){
            this.$store.dispatch('updateAnswerWithId', {
              answerId: this.answerId, 
              editordata: this.editordata
            })
            .then(response => {
              alert('Answer Updated')
            })
            .catch(error => {
              console.log(error)
            })
        },
   }

  
}
</script>

