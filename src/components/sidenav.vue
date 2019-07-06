<template>
    <div id="mobile-nav" class="m-nav-container" v-bind:class="[mobile_nav ? 'm-nav-show' : 'm-nav-hide']">
        <div class="navs">
            <router-link to="/">صفحه اصلی</router-link>
            <router-link to="/history">برنامه‌های گذشته</router-link>
            <router-link to="/schedule">برنامه‌های پیش‌رو</router-link>
            <router-link to="/about">درباره ما</router-link>
            <router-link to="/contact">تماس با ما</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sidenav',
    props: [
        "mobile_nav"
    ],
    data() {
        return {
            yo: true
        }
    }
}
</script>

