<template>
  <div>
    <navigation></navigation>
    <nuxt/>
    <contactForm></contactForm>
    <siteFooter></siteFooter>
  </div>
</template>

<script>
  import Navigation from '../components/Navigation'
  import siteFooter from '../components/Footer'
  import contactForm from '../components/ContactForm'

  export default {
    components: {
      Navigation,
      siteFooter,
      contactForm
    }
  }
</script>

<style>
html {
  background-color: config('colors.white');
  font-family: config('fonts.sans');
}
</style>
