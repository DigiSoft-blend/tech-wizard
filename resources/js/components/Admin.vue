<template>

  
<div class="container mt-4 d-flex justify-content-center  p-4 bg-muted">

      <!-- <comp1></comp1>     -->

          <div class="col-md-6 pt-4 text-dark m-0 p-0">
                <h3 class="card-title text-center text-muted">Admin { <span class="text-warning" >Tech<span style="color:#259f">Wizard</span></span> } </h3>
                  <form @submit="login" class="mt-4">  
                   
                   <div class="">
                       <label for="email">Email</label>
                   </div>
                    <div class="add-items d-flex">
                       <input v-model="email" type="email" class="form-control todo-list-input text-primary" placeholder="Email">
                    </div>

                    <div class="">
                       <label for="email">Password</label>
                   </div>
                     <div class="add-items d-flex">
                        <input v-model="password" type="password" class="form-control todo-list-input text-primary" placeholder="Password">
                    </div>

                     <div class="add-items d-flex">
                     <label>
                        <input type="checkbox" value="remember-me"> Remember me 
                      </label>
                      </div>
                    
                    <div class="list-wrapper d-flex justify-content-center">
                       <button class="btn btn-large  btn-primary" type="submit">login</button>
                    </div>

                     <p class="mt-4 text-center"><a href="">forgot password</a></p>


                  </form>
                  </div>
           
    </div>

</template>


<script>

export default {

    data(){
     return {
            email: '',
            password: '',
        }
    },

    methods:{
        login(e){
             e.preventDefault();
             this.$store.dispatch('adminLogin', {
                email: this.email,
                password: this.password,
             })
             .then(response => {
               this.$router.push({ name: 'user-profile'})
             })
             .catch(error => {
               if(error.response.status == 400){
                Swal.fire({
                    icon: 'warning',
                    title: 'Unauthorised',
                    text: 'Incorrect Email or Password!',
                    footer: '<a href="">Why do I have this issue?</a>'
                  })
               }
             })
        },
    },

    
}
</script>

