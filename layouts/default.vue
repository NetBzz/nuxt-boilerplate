<template>
  <div>
    <navigation></navigation>
    <nuxt/>
    <siteFooter></siteFooter>
  </div>
</template>

<script>
  import Navigation from '../components/Navigation'
  import siteFooter from '../components/Footer'

  export default {
    components: {
      Navigation,
      siteFooter
    }
  }
</script>

<style>
html {
  background-color: config('colors.white');
  font-family: config('fonts.sans');
}
</style>
