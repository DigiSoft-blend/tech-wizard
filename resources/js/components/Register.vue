<template>
 
 <div class="container mt-4 d-flex justify-content-center myfont">
        
         <div class="col-md-6 text-dark">

         <spinner v-if="getLoading"></spinner>
         <notification-danger v-if="getNotify"></notification-danger>
      

            <form @submit="register">  
                  <h3 class="card-title text-center">Sign Up with <span class="text-warning" >Tech<span style="color:#259f">Wizards</span></span></h3>
                  <div class="">
                       <label for="name">Name</label>
                   </div>
                  <div class="add-items d-flex">
                    <input  v-model="name" type="text" class="form-control bg-light text-dark" placeholder="Name">
                  </div>
                  <div class="">
                       <label for="email">Email</label>
                   </div>
                  <div class="add-items d-flex">
                      <input  v-model="email" type="email" class="form-control bg-light text-dark" placeholder="Email">
                  </div>
                  <div class="">
                       <label for="password">Password</label>
                   </div>
                    <div class="add-items d-flex">
                      <input  v-model="password" type="password" class="form-control bg-light text-dark" placeholder="Password">
                  </div>
                  <div class="">
                       <label for="password">Confirm Password</label>
                   </div>
                  <div class="add-items d-flex">
                      <input v-model="password_confirmation" type="password" class="form-control bg-light text-dark" placeholder="Confirm Password">
                  </div>
                  
                  <div class="list-wrapper d-flex justify-content-center">
                      <button class="btn btn-info" type="submit">Sign Up</button>
                  </div>
              </form>
        </div>
                  
                  </div>
             

</template>

<script>

export default {
    name: "register",

    computed:{
      getLoading(){
        return this.$store.getters.getLoading
      },
      getNotify(){
      return this.$store.getters.getNotify
      }
    }, 
    
    data(){
     return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        }
    },
    methods:{
        
        register(e){
             e.preventDefault();
             this.$store.dispatch('registerUser', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
             })
        }
    }
}
</script>

<style scoped>
  .colr{
    color: black;
  }
</style>