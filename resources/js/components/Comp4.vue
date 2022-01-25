<template>
  <div class="row mt-4 border border-secondary rounded">
              <div class="col-sm-6 grid-margin mt-4">
                <div class="card">
                  <div class="card-body">
                    <h5>Social</h5>
                    <div class="row">
                      <div class="col-8 col-sm-12 col-xl-8 my-auto">
                        <div class="d-flex d-sm-block d-md-flex align-items-center">
                          <h2 class="mb-0">ChatBox</h2>
                          <!-- <p class="text-success ml-2 mb-0 font-weight-medium">+3.5%</p> -->
                        </div>
                        <h6 class="text-muted font-weight-normal">Connecting Developers with the specific technologies they use the most</h6>
                      </div>
                      <div class="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                        <i class="icon-lg mdi mdi-codepen text-primary ml-auto"></i>
                      </div>
                     <span>
                        <router-link class="nav-link"  to="/loginuser">
                          <a target="_blank" class="btn btn-outline-light btn-rounded ">Join Chat</a>
                        </router-link>
                     </span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="col-sm-4 grid-margin">
                <div class="card">
                  <div class="card-body">
                    <h5>Sales</h5>
                    <div class="row">
                      <div class="col-8 col-sm-12 col-xl-8 my-auto">
                        <div class="d-flex d-sm-block d-md-flex align-items-center">
                          <h2 class="mb-0">$45850</h2>
                          <p class="text-success ml-2 mb-0 font-weight-medium">+8.3%</p>
                        </div>
                        <h6 class="text-muted font-weight-normal"> 9.61% Since last month</h6>
                      </div>
                      <div class="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                        <i class="icon-lg mdi mdi-wallet-travel text-danger ml-auto"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
              <div class="col-sm-6 grid-margin mt-4">
                <div class="card">
                  <div class="card-body">
                    <h5>Advertising</h5>
                    <div class="row">
                      <div class="col-8 col-sm-12 col-xl-8 my-auto">
                        <div class="d-flex d-sm-block d-md-flex align-items-center">
                          <h2 class="mb-0">$100</h2>
                          <!-- <p class="text-danger ml-2 mb-0 font-weight-medium">-2.1% </p> -->
                        </div>
                        <h6 class="text-muted font-weight-normal">Reach the world's largest audience of developers and technologies</h6>
                      </div>
                      <div class="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                        <i class="icon-lg mdi mdi-monitor text-success ml-auto"></i>
                      </div>
                       <span>
                        <router-link class="nav-link"  to="/loginuser">
                          <a target="_blank" class="btn btn-outline-light btn-rounded ">Buy Space</a>
                        </router-link>
                    </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
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