<template>

      <nav class="navbar p-0 fixed-top d-flex flex-row  border-bottom border-gray bc">
          <div class="navbar-brand-wrapper  ml-4 d-flex d-lg-none align-items-center justify-content-center bc">
            <!-- <a class="navbar-brand brand-logo-mini" href="index.html"><img src="assets/images/logo-mini.svg" alt="logo" /></a> -->
           <span class="mdi mdi-fire ml-4 text-warning"></span><span> Tech<span style="color:#259f">Wizard</span></span><span class="mdi mdi-fire text-warning"></span>
          
          </div>
         
           
          <div class="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
           
            <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
              <span class="mdi mdi-menu"></span>
            </button>

            <ul class="navbar-nav w-100">
              <li class="nav-item w-100">
                <form class="nav-link mt-2 mt-md-0 d-none d-lg-flex search ">
                  <input type="text" class="form-control bg-gray" placeholder="Search key word">
                </form>
              </li>
            </ul>
            <ul class="navbar-nav navbar-nav-right">
              <li class="nav-item dropdown d-none d-lg-block">
                <router-link v-if="!loggedIn" class="nav-link btn btn-success create-new-button" id="createbuttonDropdown" data-toggle="dropdown" aria-expanded="false" to="/register">Sign Up</router-link>
              </li>
              <li class="nav-item nav-settings d-none d-lg-block">
                <router-link v-if="!loggedIn" class="nav-link btn btn-success create-new-button" id="createbuttonDropdown" data-toggle="dropdown" aria-expanded="false" to="/login">Log in</router-link>
              </li>
              
              <li v-if="loggedIn" class="nav-item dropdown">
                <!-- <a v-if="loggedIn" class="nav-link btn btn-success create-new-button" id="createbuttonDropdown" data-toggle="dropdown" aria-expanded="false" href="#">+ Add a Post</a> -->
                 <!-- <router-link v-if="!loggedIn" class="nav-link btn btn-success create-new-button" id="createbuttonDropdown" data-toggle="dropdown" aria-expanded="false" to="/register">Sign Up</router-link> -->
                 <i id="createbuttonDropdown" data-toggle="dropdown" aria-expanded="false" class="mdi mdi-view-grid pr-3"></i>
                <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="createbuttonDropdown">
                
                  <h6 class="p-3 mb-0">Projects</h6>
                  <div class="dropdown-divider"></div>
                  <router-link to="/add-github-project">
                  <a class="dropdown-item preview-item">
                    <div class="preview-thumbnail">
                      <div class="preview-icon bg-dark rounded-circle">
                        <i class="mdi mdi-file-outline text-success"></i>
                      </div>
                    </div>
                    <div class="preview-item-content">
                      <p class="preview-subject ellipsis mb-1">Add gitHub project</p>
                    </div>
                  </a>
                  </router-link>
                  <div class="dropdown-divider"></div>
                   <router-link to="/all-projects">
                  <a class="dropdown-item preview-item">
                    <div class="preview-thumbnail">
                      <div class="preview-icon bg-dark rounded-circle">
                        <i class="mdi mdi-web text-info"></i>
                      </div>
                    </div>
                    <div class="preview-item-content">
                      <p class="preview-subject ellipsis mb-1">View your project </p>
                    </div>
                  </a>
                   </router-link>
                  <div class="dropdown-divider"></div>
                   <router-link to="/user-post">
                  <a class="dropdown-item preview-item">
                    <div class="preview-thumbnail">
                      <div class="preview-icon bg-dark rounded-circle">
                        <i class="mdi mdi-history text-warning"></i>
                      </div>
                    </div>
                    <div class="preview-item-content">
                      <p class="preview-subject ellipsis mb-1">View your Post </p>
                    </div>
                  </a>
                   </router-link>
                   <div class="dropdown-divider"></div>
                   <router-link to="/user-questions">
                  <a class="dropdown-item preview-item">
                    <div class="preview-thumbnail">
                      <div class="preview-icon bg-dark rounded-circle">
                        <i class="mdi mdi-comment-outline text-danger"></i>
                      </div>
                    </div>
                    <div class="preview-item-content">
                      <p class="preview-subject ellipsis mb-1">View your questions</p>
                    </div>
                  </a>
                   </router-link>
                </div>
              </li>
              

             
              <li class="nav-item dropdown border-left">
                <a v-if="loggedIn" class="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
                  <i  class="mdi mdi-bell"></i>
                  <span class="count bg-danger"></span>
                </a>
                <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                  <h6 class="p-3 mb-0">Notifications</h6>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item preview-item">
                    <div class="preview-thumbnail">
                      <div class="preview-icon bg-dark rounded-circle">
                        <i class="mdi mdi-calendar text-success"></i>
                      </div>
                    </div>
                    <div class="preview-item-content">
                      <p class="preview-subject mb-1">Event today</p>
                      <p class="text-muted ellipsis mb-0"> Just a reminder that you have an event today </p>
                    </div>
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item preview-item">
                    <div class="preview-thumbnail">
                      <div class="preview-icon bg-dark rounded-circle">
                        <i class="mdi mdi-settings text-danger"></i>
                      </div>
                    </div>
                    <div class="preview-item-content">
                      <p class="preview-subject mb-1">Settings</p>
                      <p class="text-muted ellipsis mb-0"> Update dashboard </p>
                    </div>
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item preview-item">
                    <div class="preview-thumbnail">
                      <div class="preview-icon bg-dark rounded-circle">
                        <i class="mdi mdi-link-variant text-warning"></i>
                      </div>
                    </div>
                    <div class="preview-item-content">
                      <p class="preview-subject mb-1">Launch Admin</p>
                      <p class="text-muted ellipsis mb-0"> New admin wow! </p>
                    </div>
                  </a>
                  <div class="dropdown-divider"></div>
                  <p class="p-3 mb-0 text-center">See all notifications</p>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" id="profileDropdown" href="#" data-toggle="dropdown">
                  <div v-if="loggedIn" class="navbar-profile">
                    <!-- <img class="img-xs rounded-circle" src="/assets/images/faces/IMG_20211211_091807_821.jpg" alt="">
                    <p class="mb-0 d-none d-sm-block navbar-profile-name">Silas Udofia</p> -->
                    <i class="mdi mdi-settings d-none d-sm-block"></i>
                  </div>
                </a>
                <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="profileDropdown">
                  <h6 class="p-3 mb-0">Settings</h6>
                  <div class="dropdown-divider"></div>
                  <router-link to="/edit-profile">
                  <a class="dropdown-item preview-item">
                    <div class="preview-thumbnail">
                      <div class="preview-icon bg-dark rounded-circle">
                        <i class="mdi mdi-pen text-success"></i>
                      </div>
                    </div>
                    <div class="preview-item-content">
                       <p class="preview-subject mb-1">Edit Profile</p>
                    </div>
                  </a>
                  </router-link>
                 <div class="dropdown-divider"></div>
                  <router-link v-if="loggedIn" to="/logout">
                    <a class="dropdown-item preview-item">
                      <div class="preview-thumbnail">
                        <div class="preview-icon bg-dark rounded-circle">
                          <i class="mdi mdi-onepassword text-danger"></i>
                        </div>
                      </div>
                      <div class="preview-item-content">
                        <p class="preview-subject mb-1">Change Password</p>
                      </div>
                    </a>
                    
                  </router-link>
                  <div class="dropdown-divider"></div>
                  <div class="dropdown-divider"></div>
                  <router-link v-if="loggedIn" to="/logout">
                    <a class="dropdown-item preview-item">
                      <div class="preview-thumbnail">
                        <div class="preview-icon bg-dark rounded-circle">
                          <i class="mdi mdi-logout text-warning"></i>
                        </div>
                      </div>
                      <div class="preview-item-content">
                        <p class="preview-subject mb-1">Log out</p>
                      </div>
                    </a>
                  </router-link>
                  <div class="dropdown-divider"></div>
                </div>
              </li>
            </ul>
            <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
              <span class="mdi mdi-format-line-spacing"></span>
            </button>
          </div>
        </nav>
   
</template>

<script>
export default {
   computed: {
     loggedIn() {
       return this.$store.getters.loggedIn
     }
   }
}
</script>

<style>
  .bc{
   background-color: hsl(0, 0%, 13%) !important;
  }
</style>