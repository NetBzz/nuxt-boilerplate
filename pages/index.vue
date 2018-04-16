<template>
  <div>
    <header class="hero">
      <h1>I'm a hero</h1>
    </header>
    <main>
      <section id="about" class="section">
        <div class="container mx-auto">
          <h2>About</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores neque labore, totam eum voluptate cupiditate rem tempora fugiat placeat, consectetur repellendus perspiciatis animi nisi eaque. Dicta minima inventore aperiam dolorum?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis magni dolore fugiat excepturi qui minima voluptate consequatur? Sed, obcaecati qui nulla rem exercitationem nesciunt in, iure ratione, culpa excepturi reprehenderit.</p>
        </div>
      </section><!-- /#about -->
      <section id="services" class="section">
        <div class="container mx-auto">
          <h2>Services</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores neque labore, totam eum voluptate cupiditate rem tempora fugiat placeat, consectetur repellendus perspiciatis animi nisi eaque. Dicta minima inventore aperiam dolorum?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis magni dolore fugiat excepturi qui minima voluptate consequatur? Sed, obcaecati qui nulla rem exercitationem nesciunt in, iure ratione, culpa excepturi reprehenderit.</p>
        </div>
      </section><!-- /#services -->
      <section id="contact" class="section">
        <div class="container mx-auto">
          <h2>Contact</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores neque labore, totam eum voluptate cupiditate rem tempora fugiat placeat, consectetur repellendus perspiciatis animi nisi eaque. Dicta minima inventore aperiam dolorum?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis magni dolore fugiat excepturi qui minima voluptate consequatur? Sed, obcaecati qui nulla rem exercitationem nesciunt in, iure ratione, culpa excepturi reprehenderit.</p>
        </div>
      </section><!-- /#contact -->
      <div v-lazy-container="{ selector: 'img' }">
        <img data-src="//fillmurray.com/200/300" alt="">
        <img data-src="//fillmurray.com/200/300" alt="">
        <img data-src="//fillmurray.com/200/300" alt="">
        <img data-src="//fillmurray.com/200/300" alt="">
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Index',
      meta: [{ hid: 'description', name: 'description', content: 'home' }]
    },
  }
</script>
