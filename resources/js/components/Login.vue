<template>

  
<div class="container mt-4 d-flex justify-content-center  p-4 bg-muted myfont">
          <div class="col-md-6 pt-4 text-dark">
            <spinner v-if="getLoading"></spinner>
            <notification-danger v-if="getNotify"></notification-danger>
                <h3 class="card-title text-center">Log in with <span class="text-warning" >Tech<span style="color:#259f">Wizard</span></span></h3>
                  <form @submit="login" class="mt-4">  
                   
                   <div class="">
                       <label for="email">Email</label>
                   </div>
                    <div class="add-items d-flex">
                       <input v-model="email" type="email" class="bg-secondary form-control todo-list-input text-primary" placeholder="Email">
                    </div>

                    <div class="">
                       <label for="email">Password</label>
                   </div>
                     <div class="add-items d-flex">
                        <input v-model="password" type="password" class="bg-secondary form-control todo-list-input text-primary" placeholder="Password">
                    </div>

                     <div class="add-items d-flex">
                     <label>
                        <input type="checkbox" value="remember-me"> Remember me 
                      </label>
                      </div>
                    
                    <div class="list-wrapper d-flex justify-content-center">
                       <button class="btn btn-large  btn-info" type="submit">login</button>
                    </div>

                     <p class="mt-4 text-center"><a href="">forgot password</a></p>


                  </form>
                  </div>
           
    </div>

</template>


<script>

export default {
    name: "login",

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
            email: '',
            password: '',
        }
    },
    methods:{
        login(e){
             e.preventDefault();
             this.$store.dispatch('loginDev', {
                email: this.email,
                password: this.password,
             })
             .then(response => {
               this.$router.push({ name: 'user-profile'})
             })
             .catch(error => {
               if(error.response.status == 400){
                 console.log(error)
               }
             })
        },
    },

    
}
</script>

