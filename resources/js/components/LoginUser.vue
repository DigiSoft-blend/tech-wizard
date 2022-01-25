<template>

<div class="container mt-4">

              <comp1></comp1> 

                  <form @submit="addUser" class="mt-4" style="color:#259f">  
                    <h4 class="card-title">Sign in</h4>
                   
                    <div class="add-items d-flex">
                        <label for="email">Email</label>
                       <input v-model="email" type="email" class="form-control todo-list-input" placeholder="Email">
                    </div>
                   
                     <div class="add-items d-flex">
                         <label for="password">Password</label>
                        <input v-model="password" type="password" class="form-control todo-list-input" placeholder="Password">
                    </div>

                      <div class="add-items d-flex">
                       <label>
                        <input type="checkbox" value="remember-me"> Remember me 
                      </label>
                      </div>
                    
                    <div class="list-wrapper">
                           <button class="add btn btn-block btn-primary btn-outline-dark" type="submit">login</button>
                    </div>

                           <!-- <span>
                               <a @click="removeUser(user.id)" target="_blank" class="btn btn-block btn-outline-light btn-rounded get-started-btn">Delete</a>
                           </span> -->

                  </form>
                  </div>
              


 
 
</template>


<script>
    export default {
        data(){
           return{
                 email: '',
                 password: ''
            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        methods: {
             addUser(e){
               e.preventDefault();
                 axios.post('/login', {
                    email: this.email,
                    password: this.password
                 })
                 .then(response => {
                    if(response.status == 200){
                       
                        if(response.status === 200){
                let timerInterval
                Swal.fire({
                icon: 'success',
                title: 'Congratulation',
                html: ' You just earned $500 <b></b> milliseconds.',
                timer: 4000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
                }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
                })
               }

                        // Swal.fire({
                        // icon: 'success',
                        // title: 'Congratulation',
                        // text: 'You just earned $500',
                        //  })
                    }
                 })
                 .catch(error => {
                     if(error.response.status == 422){
                         Swal.fire({
                          icon: 'warning',
                          title: 'Oops..',
                          text: 'Looks like the email has already been taken',
                          footer: '<a href="">Why do I have this issue?</a>',
                        })
                     }
                 })
             } 
        }
    }
</script>

