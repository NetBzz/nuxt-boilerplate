<template>
  <div>
    <Navigation/>
    <nuxt/>
    <SiteFooter/>
  </div>
</template>

<script>
import Navigation from '../components/Navigation'
import SiteFooter from '../components/SiteFooter'

export default {
  components: {
    Navigation,
    SiteFooter
  }
}
</script>

<style>
html {
  background-color: config('colors.white');
  font-family: config('fonts.sans');
}
</style>
