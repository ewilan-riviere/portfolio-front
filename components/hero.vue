<template>
  <div class="relative">
    <div>
      <div class="relative">
        <div class="absolute inset-0 h-96">
          <img
            src="/images/forest.jpg"
            class="object-cover w-full h-full gradient"
          />
        </div>
        <div
          class="relative px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 lg:pb-32 pt-32"
        >
          <h1
            class="
              text-3xl
              tracking-tight
              text-center
              sm:text-5xl
              font-morpheus
            "
          >
            <span class="block text-black dark:text-white">{{
              $t($store.state.header.title)
            }}</span>
          </h1>
          <p
            class="
              max-w-lg
              mx-auto
              mt-6
              text-xl text-center text-gray-800
              dark:text-gray-200
              sm:max-w-3xl
              lg:font-pelagiad lg:text-2xl
            "
          >
            {{ $t($store.state.header.abstract) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      displayIfScrolled: false,
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 50) {
        this.displayIfScrolled = true
      } else {
        this.displayIfScrolled = false
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.gradient {
  mask-image: linear-gradient(to bottom, white 0%, transparent 100%);
}
</style>
