<template>
    <div id="top-nav" class="navbar">
        <router-link to="/">صفحه اصلی</router-link>|<!--
        --><router-link to="/history">برنامه‌های گذشته</router-link>|<!--
        --><router-link to="/schedule">برنامه‌های پیش‌رو</router-link>|<!--
        --><router-link to="/about">درباره ما</router-link>|<!--
        --><router-link to="/contact">تماس با ما</router-link>
    </div>
</template>

<script>
export default {
    name: 'topnav'
}
</script>
