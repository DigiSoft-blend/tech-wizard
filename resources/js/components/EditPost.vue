<template>
  <div class="row">
       
       <div class=" col-md-12 col-xl-12 m-0 p-0">
           <spinner v-if="getLoading"></spinner>
       </div>
  
       <div v-for="post in getPostWithId"   :key="post.id" class=" col-md-12 col-xl-12 m-0 p-0" >
        <form @submit.prevent="updatePost"  >
                <div class="preview-item border-bottom">
                <div class="preview-item-content d-sm-flex flex-grow">
                    <div class="flex-grow">
                    <h4 class="preview-subject text-dark">Edit this post</h4>
                    </div>
                    <div class="mr-auto text-sm-right pt-2 pt-sm-0">
                    <button class="btn btn-large  btn-primary mb-3" type="submit"> <span class="mdi mdi-cloud" style="font-size:16px"> Update</span></button>
                    </div>
                </div>
                </div>
          
        <div class="add-items d-flex m-0 p-0">
            <input v-model="title" type="text" :placeholder="post.title" class="form-control text-dark" >
        </div>
        </form>

        <div class="add-items d-flex m-0 p-0" >
           <textarea  v-model="post.editordata" class="bg-dark text-gray"  id="" cols="135" rows="7"></textarea>
        </div>
        <ckeditor   class="text-dark" v-model="editordata" :config="editorConfig" ></ckeditor>
     </div>
  </div>
    
</template>


<script>
export default {

   props:['title'],

   created(){
     this.showPost(this.$route.params.id)
   },

    data() {
      return {
        postId: this.$route.params.id,
        title: this.title,
        editordata:'',
        editorConfig: {

        }
      };  
    },

   computed: {
     getPostWithId() {
       return this.$store.getters.getPostWithId
     },
    getLoading(){
      return this.$store.getters.getLoading
    }
   },
   
   
   methods:{
      showPost(id){
        this.$store.dispatch('getPostWithId', id)
      },

       updatePost(){
            this.$store.dispatch('updatePostWithId', {
              postId: this.postId,
              title: this.title,
              editordata: this.editordata
            })
            .then(response => {
              this.$router.push({ name: 'Home'})
              alert('Post Updated')
            })
            .catch(error => {
              console.log(error)
            })
        },
   }

  
}
</script>

