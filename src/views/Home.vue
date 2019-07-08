<template>
  <div>
    <info id="about-sec" class="sec"/>
    <app-nav id="app-sec" class="mini-sec"/>
    <content-section id="content-sec" class="sec"/>
    <div id="article-sec" class="sec"></div>
    <div id="button-nav" class="mini-sec"></div>
  </div>
</template>

<script>
import info from '../components/infoSection.vue'
import appNav from '../components/appNav.vue'
import contentSection from '../components/contentSection.vue'

export default {
  name: 'home',
  components: {
    info,
    appNav,
    contentSection
  }
}
</script>

<style scoped>
  .sec {
    margin: 25px auto;
    text-align: center;
  }

  .mini-sec {
    width: 100%;
  }

  @media only screen and (min-width: 960px) {
    #content-sec {
      position: relative;
      border: 5px solid #17212D;
      border-bottom: none;
      border-radius: 6px;
      margin: 30px 20px;
      padding-top: 30px;
    }
  }

</style>

