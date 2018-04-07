<template>
  <section class="section">
    <div class="container mx-auto">
      <h2 class="text-center section--header">Reach <strong>Out</strong></h2>
      <form id="contactform" class="w-full max-w-md mx-auto mt-12" method="POST">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="name">
              Name
            </label>
            <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" name="name" type="text" placeholder="Jane Doe">
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="email">
              Email
            </label>
            <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" name="_replyto" type="email" placeholder="janedoe@gmail.com">
          </div>
        </div>
        <input type="hidden" name="_subject" value="Salem website contact" />
        <div class="flex flex-wrap -mx-3 mb-4">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="message">
              Message
            </label>
            <textarea class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" type="text" name="message" placeholder="What can I do for you?" rows="5"></textarea>
          </div>
        </div>
        <input type="text" name="_gotcha" style="display:none" />
        <div class="flex flex-wrap -mx-3">
          <div class="w-full px-3">
            <input class="py-2 px-4 text-lg border-2 border-eggplant text-eggplant inline-block no-underline rounded-full bg-white hover:bg-eggplant hover:text-white" type="submit" value="Send">
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
  export default {
    head: {
      script: [
        { src: '/js/contactform.js', type: 'text/javascript', body: true }
      ]
    }
  }
</script>