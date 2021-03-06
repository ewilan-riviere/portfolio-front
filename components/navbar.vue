<template>
  <section
    :class="displayIfScrolled ? 'bg-black bg-opacity-65 h-16' : 'h-20'"
    class="fixed top-0 z-40 w-full text-white transition-all duration-300"
  >
    <div
      :class="
        displayIfScrolled ? 'h-16 border-transparent' : 'h-20 border-white'
      "
      class="
        relative
        mx-auto
        transition-all
        duration-300
        border-b border-opacity-50
        max-w-7xl
      "
    >
      <div
        class="
          absolute
          items-center
          px-5
          py-3
          transform
          -translate-y-1/2
          lg:ml-10
          top-1/2
          hover:text-gray-300
        "
      >
        <nuxt-link to="/">
          <svg-icon
            name="logo"
            :class="displayIfScrolled ? 'w-10' : 'w-10 lg:w-12 lg:h-12'"
            class="transition-all duration-300"
          />
        </nuxt-link>
      </div>
      <div
        class="
          items-center
          h-full
          mx-auto
          font-sans
          text-lg
          font-semibold
          w-max
          hidden
          md:flex
        "
      >
        <h1 class="text-xl font-normal sm:text-2xl lg:text-3xl font-morpheus">
          &ndash; Ewilan Rivière &ndash;
        </h1>
      </div>

      <div
        class="
          absolute
          right-0
          px-5
          py-3
          ml-10
          transform
          -translate-y-1/2
          top-1/2
        "
      >
        <div class="flex items-center">
          <layout-color-switch
            :size="displayIfScrolled ? 'w-8 h-8' : 'w-8 h-8 lg:w-10 lg:h-10'"
          />
          <layout-language-switch
            class="ml-4"
            :size="displayIfScrolled ? 'w-8 h-8' : 'w-8 h-8 lg:w-10 lg:h-10'"
          />
        </div>
      </div>
      <div
        class="
          p-1
          rounded-md
          hover:bg-gray-300 hover:bg-opacity-60
          transition-colors
          duration-300
          fixed
          top-2
          right-2
          cursor-pointer
          hidden
          2xl:block
        "
      >
        <svg-icon
          v-if="dev"
          name="router"
          class="w-10 h-10 text-white"
          @click="showRoutes"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      displayIfScrolled: false,
      dev: process.env.NODE_ENV !== 'production',
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    showRoutes() {
      const items = []
      this.$router.options.routes.forEach((route) => {
        items.push({
          name: route.name,
          path: route.path,
        })
      })
    },
    scrollTo() {
      return window.scrollTo({
        bottom: document.querySelector('#__nuxt'),
        behavior: 'smooth',
      })
    },
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
