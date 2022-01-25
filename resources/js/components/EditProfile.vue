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

   
      <div class="container mt-4 d-flex justify-content-center myfont">
         <div class="col-md-6 text-dark">
            <spinner v-if="getLoading"></spinner>
              <form @submit="updateProfile">
                 <h3 class="card-title text-center">Add a profile to your <span class="text-warning" >Tech<span style="color:#259f">Wizards</span></span> account</h3>
                    <div class="mt-4">
                       <label for="name">Nick Name</label>
                   </div>
                    <div class="add-items d-flex">
                      <input v-model="nickname" type="text" class="form-control text-dark" placeholder="Enter a nick name..">
                    </div>
                     <div class="mt-4">
                       <label for="name">Gender</label>
                     </div>
                     <div class="add-items d-flex">
                      <input v-model="sex" type="text" class="form-control text-dark" placeholder="Enter your Gender..">
                    </div>
                     <div class="mt-4">
                       <label for="name">Contact</label>
                     </div>
                     <div class="add-items d-flex">
                      <input v-model="mobile" type="text" class="form-control text-dark" placeholder="Enter your phone contact">
                    </div>
                     <div class="mt-4">
                       <label for="name">Country</label>
                     </div>
                     <div class="add-items d-flex">
                      <input v-model="country" type="text" class="form-control text-dark" placeholder="Enter your country..">
                    </div>
                     <div class="mt-4">
                       <label for="name">Work Expertise</label>
                     </div>
                     <div class="add-items d-flex">
                      <input v-model="workexperience" type="text" class="form-control text-dark" placeholder=" Enter your work expertise..">
                    </div>
                     <div class="mt-4">
                       <label for="name">Languages and Frameworks</label>
                     </div>
                     <div class="add-items d-flex">
                      <input v-model="languageorframework" type="text" class="form-control text-dark" placeholder="Enter your Programming Language / Framework..">
                    </div>
                    <div class="list-wrapper d-flex justify-content-center">
                     <button class="add btn btn-info" type="submit">Udate Profile</button>
                    </div>
                   </form>
        </div>
                  
                  </div>
             
  
</template>

<script>
export default {

   
   computed: {
      getLoading(){
        return this.$store.getters.getLoading
      }
   },


    data(){
        return {
            nickname: '',
            sex: '',
            mobile: '',
            country: '',
            workexperience: '',
            languageorframework: '',
        }
    },

  
   methods:{

      show(){
        this.$store.dispatch('getUser')
      },
     
    
       updateProfile(e){
            e.preventDefault();
            this.$store.dispatch('updateProfile', {
            nickname: this.nickname,
            sex: this.sex,
            mobile: this.mobile,
            country: this.country,
            workexperience: this.workexperience,
            languageorframework: this.languageorframework,
            })
            .then(response => {
              this.show()
              this.$router.push({ name: 'user-profile'})
              alert('Profile Updated')
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