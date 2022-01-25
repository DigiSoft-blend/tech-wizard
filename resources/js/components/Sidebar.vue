<template>
    <nav class="sidebar sidebar-offcanvas  border border-gray bg-light" id="sidebar">
        <div class="sidebar-brand-wrapper  border-bottom border-gray d-none d-lg-flex align-items-center justify-content-center fixed-top bc">
         <h3><span class="mdi mdi-fire  text-warning"></span><span>Tech<span style="color:#259f">Wizard</span><span class="mdi mdi-fire text-warning"></span></span></h3>
        </div>
        <ul class="nav">

          

          <li class="nav-item profile">
            <div  v-if="loggedin" class="profile-desc">
              <div class="profile-pic">
                <div class="count-indicator">
                  <img class="img-xs rounded-circle " src="/assets/images/faces/face15.jpg" alt="">
                  <span class="count bg-success"></span>
                </div>
                <div class="profile-name">
                  <h5 class="mb-0 font-weight-normal">Silas Udofia</h5>
                  <span>Web Developer</span>
                </div>
              </div>
              <a href="#" id="profile-dropdown" data-toggle="dropdown"><i class="mdi mdi-dots-vertical"></i></a>
              <div class="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list" aria-labelledby="profile-dropdown">
                <a href="#" class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-dark rounded-circle">
                      <i class="mdi mdi-settings text-primary"></i>
                    </div>
                  </div>
                  <div class="preview-item-content">
                    <p class="preview-subject ellipsis mb-1 text-small">Account settings</p>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-dark rounded-circle">
                      <i class="mdi mdi-onepassword  text-info"></i>
                    </div>
                  </div>
                  <div class="preview-item-content">
                    <p class="preview-subject ellipsis mb-1 text-small">Change Password</p>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-dark rounded-circle">
                      <i class="mdi mdi-calendar-today text-success"></i>
                    </div>
                  </div>
                  <div class="preview-item-content">
                    <p class="preview-subject ellipsis mb-1 text-small">To-do list</p>
                  </div>
                </a>
              </div>
            </div>
          </li>
          <li class="nav-item nav-category">
            <span class="nav-link">Navigation</span>
          </li>
          <li v-if="loggedIn" class="nav-item menu-items">
           <router-link class="nav-link" to="/user-profile">
              <span class="menu-icon">
                <i class="mdi mdi-speedometer"></i>
              </span>
              <span class="menu-title">Your Account</span>
            </router-link>
          </li>
         
          <li class="nav-item menu-items">
            <router-link class="nav-link" to="/">
              <span class="menu-icon">
                <i style="font-size:20px" class="mdi mdi-home"></i>
              </span>
              <span class="menu-title">Home</span>
            </router-link>
          </li>
          
          <li v-if="!loggedIn" class="nav-item menu-items">
            <router-link  class="nav-link"  to="/register">
              <span class="menu-icon">
                <i style="font-size:20px" class="mdi mdi-label"></i>
              </span>
              <span class="menu-title">Sign Up</span>
             </router-link>
          </li>
           <li v-if="!loggedIn" class="nav-item menu-items">
            <router-link  class="nav-link"  to="/login">
              <span class="menu-icon">
                <i style="font-size:20px" class="mdi mdi-login"></i>
              </span>
              <span class="menu-title">log in</span>
             </router-link>
          </li>
           <li v-if="loggedIn" class="nav-item menu-items">
           <router-link  class="nav-link"  to="/logout">
              <span class="menu-icon">
                <i style="font-size:20px" class="mdi mdi-logout"></i>
              </span>
              <span class="menu-title">log out</span>
            </router-link>
          </li>
           <li class="nav-item menu-items">
           <router-link  class="nav-link"  to="/users">
              <span class="menu-icon">
                <i style="font-size:20px" class="mdi mdi-face"></i>
              </span>
              <span class="menu-title">Developers</span>
            </router-link>
          </li>
           <li  class="nav-item menu-items">
           <router-link  class="nav-link"  to="/all-questions">
              <span class="menu-icon">
                <i style="font-size:20px" class="mdi mdi-message"></i>
              </span>
              <span class="menu-title">Questions</span>
            </router-link>
          </li>
          
           <li v-if="getRole != null" class="nav-item menu-items">
            <router-link  class="nav-link"  to="/Admins">
              <span class="menu-icon">
                <i style="font-size:20px" class="mdi mdi-settings"></i>
              </span>
              <span class="menu-title">App information</span>
             </router-link>
          </li>
          
        </ul>
      </nav>
</template>

<script>
export default {
   computed: {
      loggedIn() {
       return this.$store.getters.loggedIn
     },
      getRole(){
         return this.$store.getters.getRole
     },
   }
}
</script>