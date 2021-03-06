<template>
  <footer
    class="
      relative
      w-full
      text-gray-100
      bg-gray-900
      border-t
      dark:border-gray-800 dark:bg-gray-900
    "
  >
    <div
      class="
        max-w-screen-xl
        px-4
        py-6
        mx-auto
        space-y-2
        overflow-hidden
        sm:px-6
        lg:px-8
      "
    >
      <nav
        class="flex flex-wrap justify-center -mx-5 -my-2"
        aria-label="Footer"
      >
        <div v-for="link in footerLinks" :key="link.id" class="px-5 py-2">
          <nuxt-link
            :to="link.route"
            class="text-base text-gray-400 hover:text-gray-300"
          >
            {{ link.label }}
          </nuxt-link>
        </div>
      </nav>
      <div>
        <div class="flex flex-wrap justify-center">
          <a
            v-for="social in socialLinks"
            :key="social.id"
            class="
              p-3
              text-gray-400
              transition-colors
              duration-300
              rounded-md
              hover:bg-gray-200 hover:bg-opacity-25
            "
            :href="social.link"
            target="_blank"
            rel="noopener noreferrer"
            :class="`hover:icon-${social.icon}`"
            :title="social.name"
          >
            <svg-icon :name="social.icon" class="w-5 h-5" />
          </a>
        </div>
      </div>
      <div
        class="
          flex
          items-center
          justify-center
          text-base text-center text-gray-400
        "
      >
        <div class="items-center block lg:flex w-max-content">
          <a
            href="https://creativecommons.org"
            target="_blank"
            rel="noopener noreferrer"
            class="
              flex flex-wrap
              items-center
              justify-center
              px-1
              py-2
              text-base
              leading-6
              text-center text-gray-400
              transition-colors
              duration-300
              rounded-md
              hover:text-gray-600
            "
          >
            <svg-icon
              v-for="icon in copyrights"
              :key="icon.id"
              :name="icon"
              class="w-5 h-5 mr-1"
            />
            <span class="ml-1">
              {{ date(2019) }}
            </span>
          </a>
          <span class="mx-1"> · </span>
          <a
            :href="github"
            target="_blank"
            rel="noopener noreferrer"
            class="
              flex
              items-center
              justify-center
              px-1
              py-2
              text-base
              leading-6
              text-center text-gray-400
              transition-colors
              duration-300
              rounded-md
              hover:text-gray-600
            "
          >
            {{ packageJson.author.name }}.
          </a>
          <a
            :href="license"
            target="_blank"
            rel="noopener noreferrer"
            class="
              flex
              items-center
              justify-center
              px-1
              py-2
              text-base
              leading-6
              text-center text-gray-400
              transition-colors
              duration-300
              rounded-md
              hover:text-gray-600
            "
          >
            MIT License.</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import packageJson from '~/package.json'

export default {
  name: 'AppFooter',
  data() {
    return {
      packageJson,
      modes: ['system', 'light', 'dark', 'sepia'],
      footerLinks: [
        // {
        //   label: 'About',
        //   route: 'home',
        // },
        // {
        //   label: 'Documentation',
        //   route: 'home',
        // },
        // {
        //   label: 'Articles',
        //   route: 'home',
        // },
      ],
      socialLinks: [
        {
          name: 'GitHub',
          link: 'https://github.com/ewilan-riviere',
          icon: 'social/github',
        },
        {
          name: 'GitLab',
          link: 'https://gitlab.com/ewilan-riviere',
          icon: 'social/gitlab',
        },
        {
          name: 'StackOverflow',
          link: 'https://stackoverflow.com/users/story/11008206',
          icon: 'social/stackoverflow',
        },
        // {
        //   name: 'Bit.dev',
        //   link: 'https://bit.dev/ewilan-riviere',
        //   icon: 'social/bit',
        // },
        {
          name: 'Twitter',
          link: 'https://twitter.com/ewilanriviere',
          icon: 'social/twitter',
        },
        {
          name: 'LinkedIn',
          link: 'https://www.linkedin.com/in/ewilan-riviere',
          icon: 'social/linkedin',
        },
        {
          name: 'E-mail',
          link: 'mailto:contact@ewilan-riviere.com',
          icon: 'social/mail',
        },
      ],
      copyrights: [
        'creative-commons',
        'creative-commons-by',
        'creative-commons-nc',
      ],
    }
  },
  computed: {
    github() {
      return 'https://github.com/ewilan-riviere'
    },
    license() {
      return 'https://github.com/ewilan-riviere/portfolio-front/blob/master/LICENSE'
    },
  },
  mounted() {
    // this.$colorMode.preference = 'system'
  },
  methods: {
    date(begin) {
      begin = parseInt(begin)
      const current = new Date().getFullYear()
      const year = `${begin} - ${current}`
      if (begin === current) {
        return begin
      }
      return year
    },
    // changeMode(mode) {
    //   this.$colorMode.preference = mode
    // },
  },
}
</script>

<style scoped>
/* @variants hover {
  /deep/ path {
    @apply transition-colors duration-300;
  }
  /deep/ .nuxt-icon:hover path:nth-child(1) {
    fill: #00c58e;
  }
  /deep/ .nuxt-icon:hover path:nth-child(2) {
    fill: #2f495e;
  }
  /deep/ .nuxt-icon:hover path:nth-child(3) {
    fill: #108775;
  }

  /deep/ .icon-github:hover path {
    fill: #181717;
  }
  /deep/ .icon-gitlab:hover path {
    fill: #fc6d26;
  }
  /deep/ .icon-twitter:hover path {
    fill: #1da1f2;
  }
  /deep/ .icon-linkedin:hover path {
    fill: #0077b5;
  }
  /deep/ .icon-portfolio:hover path {
    @apply text-primary-600;
  }
  /deep/ .icon-mail:hover path {
    fill: #d14836;
  }

  /deep/ .icon-bit:hover path {
    fill: #73398d;
  }
} */
</style>
