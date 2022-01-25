
const state = { 
   token: null,
   users:[]
};

const getters = {
   
};

//we il move this registration to auth store. lets have one central store
const actions = {
  
  registerUser(context, credentials){
   
    context.commit('getLoading', true)
    context.commit('getNotify',false)

    axios.post('/register', {

      name: credentials.name,
      email: credentials.email,
      password: credentials.password,
      password_confirmation: credentials.password_confirmation

    })
    .then(response => {

      const token = response.data.token 
      localStorage.setItem('token', token)
      context.commit('registerUser', token)

      context.commit('getLoading',false)
      
      this.$router.push({ name: 'edit-profile'})

    })
    .catch(error => {
      console.log(error)
      if(error.response.status == 422){
        console.log(error)
        context.commit('getNotify',true)
        context.commit('getLoading',false)
      }
    })
  }

};

const mutations = {
  registerUser(state, token){
    state.token = token
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};