<template>
     <div class="row mt-4 bg-light" >
            <div v-for="post in getPost" :key="post.id" class="col-12 m-0 p-0 mt-4">

                          <div class="preview-item">
                            <div class="preview-item-content d-sm-flex flex-grow">
                              <div class="flex-grow">
                                <span class="p-1 myfont col2" style="font-size:20px;"> <span> <b>{{ post.user.name }}</b></span></span>
                                  
                              </div>
                              <div class="mr-auto text-sm-right pt-sm-0 myfont"> 
                               <p class="p-1 text-muted rounded"> Created : {{ post.created_at }}</p>
                              </div>
                            </div>
                          </div>

                  <div class="col-md-12 m-0 p-0 text-center mb-4 border border-secondary rounded">
                    <p class="preview-subject col1 p-2   text-center myfont mb-4" style="font-size:20px"> <b class="mt-4">{{ post.title }}</b></p>
                    <p class="mt-4 text-muted p-2">
                       Sign up with TechWizard or contact us via our social media platforms, We create and broadcast local contents to a global audience using latest technologies and broadcast channels.
                    </p>
                   </div>
                  
                 


                    <div class="col-md-12 m-0 p-0 text-center border-bottom border-secondary curv" style="font-size:30px">
                                <a href="https://web.facebook.com/silas.udofia.52/"><span class="mdi mdi-facebook text-primary"></span></a> 
                                <a href="https://api.whatsapp.com/send?phone=2348160595927"><span class="mdi mdi-whatsapp text-success ml-4 mleft"></span></a>  
                                <a href="https://www.linkedin.com/in/silas-udofia-5244b8229/"><span class="mdi mdi-linkedin text-primary ml-4 mleft"></span></a>
                                <a href="https://github.com/DigiSoft-blend"><span class="mdi mdi-github-box text-dark ml-4 mleft"></span></a> 
                      </div>

      <code class="text-dark" v-html="post.editordata" >{{ post.editordata }}</code>   
        <div class="col-md-12 border-bottom border-secondary border-top">
            <p  @click="like(post.id)"  class="ml-2 mt-3 pl-4 rounded" style="font-size:25px"> <i class="text-primary mdi mdi-thumb-up "></i><span v-for="like in post.likes_count" :key="like.id"  class="text-muted" style="font-size:18px"> {{ like.count }} </span> </p>       
        </div>
      </div>

    </div>
</template>

<script>
export default {

    created(){
     this.showPost()
    },

    data(){
     return{
       likesCount: 0,
     }
    },

   computed: {
     getPost() {
       return this.$store.getters.getPost
     },
     getLike(){
       return this.$store.getters.getLike
     },

     filterPost(){
        return this.getPost.filter( post => post.like[0].id == 271);  
     },

     total(){
       return this.getPost.reduce((total, post) => total + post.like[0].likes_count,1);
     }
    
   },


   methods: {
     
      showPost(){
        this.$store.dispatch('getPost')
      },
      
    
      like(id){
          this.$store.dispatch('like', id),
          this.$store.dispatch('getPost')
      }


   }
}
</script>

<style scoped>
 .mleft{
   margin-left: 0px;
 }

 .col1{
    background-color: rgb(224, 17, 62);
    color: cornsilk;
 }
 .col2{
   color: rgb(2, 180, 250);
 }
</style>