<template>
  <div id="app">
    <div class="container">
      <sidenav v-bind:mobile_nav="mobile_nav"/>
      <div class="main-sec" v-bind:class="[mobile_nav ? 'pushed' : 'npushed']">
        <header class="head-sec">
          <div class="head">
            <div id="m-top-nav" v-bind:class="[mobile_nav ? 'fa fa-times' : 'fa fa-bars']" v-on:click="showMobileNav"></div>
            <h1 class="website-title">SHB Hiking</h1>
            <topnav/>
          </div>
          <div class="buti-line"></div>
        </header>
        <router-view/>
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
      mobile_nav: false
    }
  },
  methods: {
    showMobileNav() {
      this.mobile_nav = !this.mobile_nav 
    }
  }
}
</script>