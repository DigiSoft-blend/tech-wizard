import axios from 'axios';
import { reject } from 'lodash';

axios.defaults.baseURL = 'http://localhost:8000/ap' //'https://tech-wizard.herokuapp.com/api' //'http://localhost:8000/api'// //     

const state = { 
  id: '',
  token: localStorage.getItem('token') || null,
  users:[],
  questions:[],
  profiles:[],
  profile: '' ,
  question: '' ,
  user: [],
  unAuthUserWithId: [],
  projects: [],
  posts:'',
  userQuestions: [],
  userPost: [],
  postWithId:[],
  data: 'storedata',
  authUser: [],
  answerWithId: [],
  admin_key: localStorage.getItem('admin_key') || null ,
  showLoading: false,
  notification: false,
  notifyWarning: false,
  like: '' ,
  likesCount: ''
};

const getters = {
  getLike(state){
     return state.like
  },
  getLikesCount(state){
    return state.likesCount
  },
   getLoading(state){
     return state.showLoading
   },
   getNotify(state){
     return state.notification
   },
   getNotifyWarning(state){
     return state.notifyWarning
   },
   getdata(state){
      return state.data
   },
   getAuthUser(state){
      return state.authUser
   },
   loggedIn(state){
     return state.token != null
   },
   getUsers(state){
    return state.users 
   },
   getUser(state){
     return state.user
   },
   getUserQuestions(state){
     return state.userQuestions
   },
   getUserPost(state){
    return state.userPost
   },
   getUserWithId(state){
     return state.unAuthUserWithId
   },
   getProjects(state){
     return state.projects
   },
   getPost(state){
     return state.posts
   },
   getPostWithId(state){
     return state.postWithId
   },
   getAnswerWithId(state){
     return state.answerWithId
   },
   getProfileWithId(state){
    return state.profile
   },

   getQuestionWithId(state){
     return state.question
   }
   ,
   getQuestions(state){
     return state.questions
   },
   getProfiles(state){
     return state.profiles
   },
   getToken(state){
     return state.token
   },
   getRole(state){
     return state.admin_key
   }
};

const actions = {

  getLikesCount(context , credentials){
    //Tell axios the header you want
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

  return new Promise((resolve, reject) => {
   axios.post('/getlikes', {
     id: credentials.id,
   })
   .then(response => {
     context.commit('getLikesCount', response.data)
     resolve(response)
   })
   .catch(error => {
     console.log(error)
     reject(error)
    })
  })
  },


 like(context, id){
  //Tell axios the header you want
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
    
  axios.get('likePost/'+id)
  .then(response => {
    context.commit('getLike', response.data)
  })
  .catch(error => {
    console.log(error)
    if(error.response.status == 404){
      alert('No result found');
    }
  })


    //  return new Promise((resolve, reject) => {
    //   axios.post('likePost/'+id)
    //   .then(response => {
    //     context.commit('getLike', response.data)
    //     resolve(response)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //     reject(error)
    //    })
    //  })
  },

  adminLogin(context, credentials){
    return new Promise(( resolve, reject) => {
      axios.post('/Admin-Login', {
        email: credentials.email,
        password: credentials.password,
      })
      .then(response => {
        const token = response.data.token 
        const admin_key = response.data.admin_key
        localStorage.setItem('token', token)
        localStorage.setItem('admin_key', admin_key)
        context.commit('adminLogin', token)
        context.commit('setAdminKey', admin_key)
        resolve(response)
      })
      .catch(error => {
          console.log(error)
        reject(error)
      })
     })
    },
 
 loginDev(context, credentials){

  context.commit('getLoading', true)
  context.commit('getNotify',false)

  return new Promise(( resolve, reject) => {
      axios.post('/login', {
      email: credentials.email,
      password: credentials.password,
    })
    .then(response => {
      const token = response.data.token 
      localStorage.setItem('token', token)
      context.commit('login', token)
      resolve(response)
      context.commit('getLoading', false)
    })
    .catch(error => {
      context.commit('getNotify',true),
      context.commit('getLoading',false)
      console.log(error)
      reject(error)
    })
   })
  },


  addProject(context, credentials){

    //Tell axios the header you want
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

    context.commit('getLoading', true),
    context.commit('getNotify',false),
    context.commit('getNotifyWarning',false)

    return new Promise(( resolve, reject) => {
      axios.post('/add-project', {
        editordata: credentials.editordata,
      })
      .then(response => {
        resolve(response)
        context.commit('getLoading', false)
      })
      .catch(error => {
        if(error.response.status == 400 || error.response.status == 500){
          context.commit('getNotify',true),
          context.commit('getLoading',false)
         
        }
        if(error.response.status == 422){
          context.commit('getNotifyWarning',true)
          context.commit('getLoading',false)
        }
        console.log(error)
        reject(error)
      })
     })
    },


  updateProfile(context, credentials){

    //Tell axios the header you want
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

      context.commit('getLoading', true)
  
    return new Promise(( resolve, reject) => {
      axios.put('/update-profile', {
        nickname: credentials.nickname,
        sex: credentials.sex,
        mobile: credentials.mobile,
        country: credentials.country,
        workexperience: credentials.workexperience,
        languageorframework: credentials.languageorframework,
      })
      .then(response => {
        resolve(response)
        context.commit('getLoading', false)
      })
      .catch(error => {
          console.log(error)
        reject(error)
      })
     })
     },
  

  getUsers(context){
    //Tell axios the header you want
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
   
   if(context.getters.getUsers == ''){
     context.commit('getLoading', true)
     context.commit('getNotify',false)
   } 
    axios.get('/users')
    .then(response => {
       context.commit('getUsers', response.data.data)
       context.commit('getLoading', false)
    })
    .catch(error => {
      context.commit('getNotify',true)
      console.log(error)
    })
  
  },

  getUser(context){
    //Tell axios the header you want
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      
    if(context.getters.getUser == ''){
      context.commit('getLoading', true)
      context.commit('getNotify',false)
    }

    axios.get('/user-profile')
    .then(response => {
       context.commit('getUser', response.data.data)
       context.commit('getLoading', false)
    })
    .catch(error => {
      if(error.response.status == 400 || error.response.status == 500){
        context.commit('getNotify',true)
      }
      console.log(error)
    })
  
  },

  getAuthUser(context){
    //Tell axios the header you want
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
    
    if(context.getters.getAuthUser == ''){
      context.commit('getLoading', true)
    }

    axios.get('/getAuthUser')
    .then( response => {
       context.commit('getAuthUser', response.data)
       context.commit('getLoading', false)
    })
    .catch(error => {
      console.log(error)
    })
  }, 

  getQuestions(context){
    //Tell axios the header you want
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
    
    if(context.getters.getQuestions == ''){
      context.commit('getLoading', true),
      context.commit('getNotify',false)
    }

    axios.get('/renderQuestions')
    .then(response => {
       context.commit('getQuestions', response.data.data)
       context.commit('getLoading', false)
    })
    .catch(error => {
      console.log(error)
      context.commit('getNotify',true)
    })
  },
  
  getProfiles(context){
    //Tell axios the header you want
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

    axios.get('/showProfile')
    .then(response => {
      context.commit('getProfiles', response.data.data)
    })
    .catch(error => {
      console.log(error)
    })
  },

 

  destroyToken(context){ 

    //Tell axios the header you want
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

    if(context.getters.loggedIn){

      context.commit('getLoading', true),
      context.commit('getNotify',false)

      return new Promise(( resolve, reject) => {
        axios.post('/logout')
        .then(response => {
          localStorage.removeItem('token')
          localStorage.removeItem('admin_key')
          context.commit('destroyToken')
          resolve(response)
          context.commit('getLoading', false)
        })
        .catch(error => {
          localStorage.removeItem('token')
          localStorage.removeItem('admin_key')
          context.commit('destroyToken')
          context.commit('getNotify',true),
          context.commit('getLoading',false)
          reject(error)
        })
       })
    }
  },

 
  deleteUser(context, id){

            //Tell axios the header you want
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

        axios.delete('/delete/'+id)
        .then(response => {
          context.commit('deleteUser', id)
        })
        .catch(error => {
          console.log(error)
          if(error.response.status == 404){
            Swal.fire({
              icon: 'warning',
              title: '404',
              text: 'This User does not exist!',
              footer: '<a href="">Why do I have this issue?</a>'
            })
          }
        })

      },
  //   })
  // },

  deleteQuestion(context, id)
  {
    //Tell axios the header you want
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
    axios.delete('/deleteQuestion/'+id)
    .then(response => {
      context.commit('deleteQuestion', id)
    })
    .catch(error => {
      console.log(error)
    })
  },

  deletePost(context, id)
  {
    //Tell axios the header you want
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
    axios.delete('/deletePost/'+id)
    .then(response => {
      context.commit('deletePost', id)
    })
    .catch(error => {
      console.log(error)
    })
  },
   
  deleteAnswer(context, id)
  {
    //Tell axios the header you want
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
    axios.delete('/deleteAnswer/'+id)
    .then(response => {
      context.commit('deleteAnswer', id)
    })
    .catch(error => {
      console.log(error)
    })
  },

  getProfileWithId(context, id){
    //Tell axios the header you want
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

    axios.get('/single/'+id)
    .then(response => {
      context.commit('getProfileWithId',  response.data.data)
    })
    .catch(error => {
      console.log(error)
      if(error.response.status == 404){
        alert('Profile not found');
      }
    })
  },

  getUserWithId(context, id){
    //Tell axios the header you want
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

    if(context.getters.getUserWithId == ''){
      context.commit('getLoading', true)
      context.commit('getNotify',false)
    }

    axios.get('/user/'+id)
    .then(response => {
      context.commit('getUserWithId',  response.data.data)
      context.commit('getLoading', false)
    })
    .catch(error => {
      context.commit('getNotify',true)
      console.log(error)
      if(error.response.status == 404){
        alert('User not found');
      }
    })
  },


  getPostWithId(context, id){
    //Tell axios the header you want
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
    context.commit('getLoading', true)
    axios.get('/getPostWithId/'+id)
    .then(response => {
      context.commit('getPostWithId',  response.data.data)
      context.commit('getLoading', false)
    })
    .catch(error => {
      console.log(error)
      if(error.response.status == 404){
        alert('User not found');
      }
    })
  },

  getQuestionWithId(context, id){
    //Tell axios the header you want
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
   
    if(context.getters.getQuestionWithId == ''){
      context.commit('getLoading', true)
      context.commit('getNotify', false)
    }

    axios.get('/singleQ/'+id)
    .then(response => {
      context.commit('getQuestionWithId',  response.data.data)
      context.commit('getLoading', false)
    })
    .catch(error => {
      context.commit('getNotify',true)
      console.log(error)
      if(error.response.status == 404){
        alert('No result found');
      }
    })
  },

  getAnswerWithId(context, id){
    //Tell axios the header you want
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

    axios.get('/getAnswerWithId/'+id)
    .then(response => {
      context.commit('getAnswerWithId',  response.data.data)
    })
    .catch(error => {
      console.log(error)
      if(error.response.status == 404){
        alert('No result found');
      }
    })
  },

  updatePostWithId(context, credentials){
   //Tell axios the header you want
   axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
   context.commit('getLoading', true)
   return new Promise(( resolve, reject) => {
      axios.post('/updatePostWithId' , {
        postId: credentials.postId,
        title: credentials.title,
        editordata: credentials.editordata
      })
      .then(response => {
        resolve(response)
        context.commit('getLoading', false)
      })
      .catch(error => {
        console.log(error)
        reject(error)
      })
   })
  },


  updateAnswerWithId(context, credentials){
    //Tell axios the header you want
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
 
    return new Promise(( resolve, reject) => {
       axios.post('/updateAnswerWithId' , {
         answerId: credentials.answerId,
         editordata: credentials.editordata
       })
       .then(response => {
         resolve(response)
       })
       .catch(error => {
         console.log(error)
         reject(error)
       })
    })
   },

  updateQuestionWithId(context, credentials){
    //Tell axios the header you want
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
    context.commit('getLoading', true)
    return new Promise(( resolve, reject) => {
       axios.post('/updateQuestionWithId' , {
         questionId: credentials.questionId,
         title: credentials.title,
         editordata: credentials.editordata
       })
       .then(response => {
         resolve(response)
         context.commit('getLoading',false)
       })
       .catch(error => {
         console.log(error)
         reject(error)
       })
    })
   },

   addPost(context, credentials){

    context.commit('getLoading', true)
    context.commit('getNotifyWarning',false)
    context.commit('getNotify',false)

    return new Promise(( resolve, reject) => {
      axios.post('/addPost', {
        title: credentials.title,
        editordata: credentials.editordata,
      })
      .then(response => {
        resolve(response)
        context.commit('getLoading', false)
      })
      .catch(error => {
        if(error.response.status == 400 || error.response.status == 500){
          context.commit('getNotify',true),
          context.commit('getLoading',false)  
        }
        if(error.response.status == 422){
          context.commit('getNotifyWarning',true),
          context.commit('getLoading',false)
        }
        console.log(error)
        reject(error)
      })
     })
    },

    addQuestion(context, credentials){
       //Tell axios the header you want
       axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
 
      context.commit('getLoading', true),
      context.commit('getNotify',false),
      context.commit('getNotifyWarning',false)

      return new Promise(( resolve, reject) => {
        axios.post('/ask', {
          title: credentials.title,
          editordata: credentials.editordata,
        })
        .then(response => {
          resolve(response)
          context.commit('getLoading', false)
        })
        .catch(error => {
          if(error.response.status == 400 || error.response.status == 500){
            context.commit('getNotify',true),
            context.commit('getLoading',false)  
          }
          if(error.response.status == 422){
            context.commit('getNotifyWarning',true),
            context.commit('getLoading',false)
          }
          console.log(error)
          reject(error)
        })
       })
      },

    addAnswer(context, credentials){

      context.commit('getLoading', true),
      context.commit('getNotifyWarning',false),
      context.commit('getNotify',false)

      return new Promise((resolve, reject) => {
        axios.post('/ans', {
          question_id: credentials.question_id,
          editordata: credentials.editordata
        })
        .then(response => {
          resolve(response)
          context.commit('getLoading',false)
        })
        .catch(error => {
          if(error.response.status == 400 || error.response.status == 500){
            context.commit('getNotify',true),
            context.commit('getLoading',false)  
          }
          if(error.response.status == 422){
            context.commit('getNotifyWarning',true),
            context.commit('getLoading',false)
          }
          console.log(error)
          reject(error)
        })
      })
    },  

    getPost(context){
      //Tell axios the header you want
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
     
    if(context.getters.getPost == ''){
      context.commit('getLoading', true)
    }
  
      axios.get('/allPost')
      .then(response => {
        context.commit('getPost', response.data.data)
        context.commit('getLoading', false)
        context.commit('getNotify',false)
      })
      .catch(error => {
        console.log(error)
        if(error.response.status == 400){
          context.commit('getNotify',true)
        }
      })
    },

    getUserQuestions(context){
      //Tell axios the header you want
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
       
      if(context.getters.getUserQuestions == ''){
        context.commit('getLoading', true)
        context.commit('getNotify',false)
      }

      axios.get('/getQuest')
      .then(response => {
        context.commit('getUserQuestions', response.data.data)
        context.commit('getLoading', false)
      })
      .catch(error => {
        context.commit('getNotify',true)
        console.log(error)
      })
      
    },

    getUserPost(context){
      //Tell axios the header you want
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

      if(context.getters.getUserPost == ''){
        context.commit('getLoading', true)
        context.commit('getNotify',false)
      }

      axios.get('/getPost')
      .then(response => {
        context.commit('getUserPost', response.data.data)
        context.commit('getLoading', false)
      })
      .catch(error => {
        context.commit('getNotify',true)
        console.log(error)
      })
      
    }
  

};

const mutations = {
 getLike(state, like){
   state.like = like
 },
 getLikesCount(state, likesCount){
   state.likesCount = likesCount
 },
 getLoading(state, payLoad){
    state.showLoading = payLoad
 }, 
 getNotify(state, notify){
  state.notification = notify
 },
 getNotifyWarning(state, notify){
  state.notifyWarning = notify
 },
 login(state, token){
   state.token = token
 },
 adminLogin(state, token){
   state.token = token
 },

 setAdminKey(state, admin_key){
  state.admin_key = admin_key
 },
 destroyToken(state){
   state.token = null
   state.admin_key = null
 },
 getUsers(state, users){
  state.users = users
 },
 getUser(state, user){
   state.user = user
 },
 getAuthUser(state, authUser){
   state.authUser = authUser
 },
 
 getQuestions(state, questions){
   state.questions = questions
 },
 getProfiles(state, profiles){
   state.profiles = profiles
 },
 getPost(state, posts){
    state.posts = posts
 },
 getUserWithId(state, unAuthUserWithId){
   state.unAuthUserWithId = unAuthUserWithId;
 },
 getAnswerWithId(state, answerWithId){
   state.answerWithId = answerWithId
 },
 getProfileWithId(state, profile){
   state.profile = profile
 },
 getQuestionWithId(state, question){
   state.question = question
 },
 getPostWithId(state, postWithId){
  state.postWithId = postWithId;
 },
 getUserQuestions(state, userQuestions){
   state.userQuestions = userQuestions
 },
 getUserPost(state, userPost ){
  state.userPost = userPost
 }
 ,
 deleteUser(state, id){
  const index =state.users.findIndex(item => item.id == id)
  state.users.splice(index, 1)
 },

 deleteQuestion(state, id){
  const index =state. userQuestions.findIndex(item => item.id == id)
  state. userQuestions.splice(index, 1)
 },
 
 deletePost(state, id){
  const index =state.userPost.findIndex(item => item.id == id)
  state.userPost.splice(index, 1)
 },

 deleteAnswer(state, id){
  const index =state.answerWithId.findIndex(item => item.id == id)
  state.answerWithId.splice(index, 1)
 },

};

export default {
 state,
 getters,
 actions,
 mutations
};