<template>
  <div id="app">
    <div class="container">
      <sidenav :mobile_nav="mobile_nav"/>
      <div class="main-sec" :class="[mobile_nav ? 'pushed' : 'npushed']">
        <header class="head-sec" :class=" this.$route.path == '/' ? 'head-h-m' : 'head-h-s'">
          <div class="head">
            <div id="m-top-nav" :class="[mobile_nav ? 'fa fa-times' : 'fa fa-bars']" v-on:click="showMobileNav"></div>
            <div class="head-info">
              <h1 class="website-title">SHB Hiking</h1>
              <p>وب سایت رسمی گروه طبیعت‌گردی SHB</p>
            </div>
            <topnav/>
          </div>
          <div class="buti-line"></div>
          <div id="achieve-sec" class="blur-sec">
            <div class="icon">
              <div>
                <img src="./assets/icons/Hiking-512.png" alt="hiking-icon"><br>
                کوهنوردی
              </div>
            </div>
            <div class="icon">
              <div>
                <img src="./assets/icons/offroad-512.png" alt="offroud-icon"><br>
                تور آفرود
              </div>
            </div>
            <div class="icon">
              <div>
                <img src="./assets/icons/outdoor-512.png" alt="camping-icon"><br>
                کمپینگ
              </div>
            </div>
          </div>
        </header>
        <div class="main-co">
          <router-view/>
        </div>
        <foot/>
      </div>
    </div>
  </div>
</template>

<script>
import topnav from './components/topnav.vue'
import sidenav from './components/sidenav.vue'
import foot from './components/foot.vue'

export default {
  name: "app",
  components: {
    topnav,
    sidenav,
    foot
  },
  data() {
    return {
      mobile_nav: false,
      height_resize: true
    }
  },
  methods: {
    showMobileNav() {
      this.mobile_nav = !this.mobile_nav 
    }
  }
}
</script>