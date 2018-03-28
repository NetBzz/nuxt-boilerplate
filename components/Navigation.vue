<template>
  <nav class="navbar md:fixed w-full z-50 relative bg-orange-light  py-4" role="navigation" aria-label="main navigation">
    <div class="container mx-auto flex items-center justify-between">
      <div class="navbar__left flex items-center w-full flex-wrap justify-between">
        <div class="navbar__logo mr-8">
          Project Logo
        </div>
        <div class="navbar__links bg-white md:bg-orange-light">
          <a class="mr-0 md:mr-8" href="#" v-scroll-to="'#about'">About</a>
          <a class="mr-0 md:mr-8" href="#" v-scroll-to="'#services'">Services</a>
          <a class="mr-0 md:mr-8" href="#" v-scroll-to="'#contact'">Contact</a>
        </div>
        <div class="navbar__mobile block md:hidden">
          <svg class="w-16 h-12 fill-current" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
        </div>
      </div><!-- /.navbar__left -->
    </div>
  </nav>
</template>

<style scoped>
  @media (max-width: 768px) {
    .navbar__links {
      position: absolute;
      top: -12rem;
      left: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transition: all .5s linear;
      width: 100%;
    }

    .navbar__links.active {
      top: 4.9rem;
      z-index: -1;
    }

    .navbar__links a {
      padding: 1rem 0;
    }
  }
</style>
