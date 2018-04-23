<template>
  <div>
    <nav relative-element-selector="#content" class="navbar md:fixed w-full z-50 bg-red-dark h-16 md:h-auto" role="navigation" aria-label="main navigation">
      <div class="container mx-auto flex items-center justify-between bg-red-dark h-full md:h-auto">
        <div class="navbar__left flex items-center w-full flex-wrap justify-between md:justify-start">
          <div class="navbar__logo mr-8 text-white">
            <h1>logo</h1>
          </div>
          <div class="navbar__links flex bg-white md:bg-red-dark">
            <a href="#about" class="text-white hover:text-red-lighter py-4 block mr-2">about</a>
            <a href="#services" class="text-white hover:text-red-lighter py-4 block mr-2">services</a>
            <a href="#contact" class="text-white hover:text-red-lighter py-4 block">contact</a>
          </div>
          <div class="navbar__mobile block md:hidden">
            <svg class="w-16 h-12 fill-current" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
          </div>
        </div><!-- /.navbar__left -->
      </div>
    </nav>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 100%;
}

.navbar__links {
  position: absolute;
  top: -30rem;
  left: 0;
  transition: opacity 0.1s linear;
  width: 100%;
  height: 0;
  opacity: 0;
  background: #22292f;
}

.navbar__links.active {
  height: 100%;
  opacity: 1;
  z-index: 40;
  display: block;
  text-align: center;
  top: 4rem;
}

.navbar__links a {
  font-size: 2rem;
  padding: 1rem 0;
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.navbar__links a:hover {
  background: rgba(0, 0, 0, 0.5);
  color: white;
}

.navbar__mobile {
  transform: rotate(0deg);
  transition: transform 0.3s linear;
  cursor: pointer;
}

.navbar__mobile:hover,
.navbar__links.active + .navbar__mobile {
  transform: rotate(-90deg);
}

@media (min-width: 768px) {
  .navbar__links {
    top: 0;
    position: relative;
    opacity: 1;
    width: auto;
    height: auto;
    background: transparent;
  }

  .navbar__links a {
    margin-top: 0.25rem;
    text-decoration: none;
    border-bottom: 0.25rem solid transparent;
    font-size: 1.5rem;
  }

  .navbar__links a:hover {
    border-bottom: 0.25rem solid white;
    background: transparent;
  }
}
</style>