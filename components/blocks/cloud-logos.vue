<template>
  <div class="bg-indigo-800">
    <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-10 sm:px-6 lg:px-8">
      <div class="lg:space-y-10">
        <h2 class="text-3xl font-bold leading-9 text-white">
          Des technologies solides et connues
        </h2>
        <div class="loop">
          <div class="flex items-center space-x-16">
            <a
              v-for="technology in randomTechnologies"
              :key="technology.id"
              :href="technology.link"
              target="_blank"
              rel="noopener noreferrer"
              class="block p-3 text-gray-300 text-opacity-50 rounded-sm  hover:bg-gray-50 hover:bg-opacity-10"
              :title="technology.name"
            >
              <icon
                :name="`${technology.logo}`"
                :size="160"
                ratio
                loading="lazy"
                width="200"
                height="200"
                :alt="technology.name"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CloudLogos',
  data() {
    return {
      technologies: [
        {
          name: 'Laravel',
          logo: 'techno-laravel',
          link: 'https://laravel.com',
        },
        { name: 'PHP', logo: 'techno-php', link: 'https://www.php.net' },
        {
          name: 'Backpack',
          logo: 'techno-backpack',
          link: 'https://backpackforlaravel.com',
        },
        { name: 'Nuxt.js', logo: 'techno-nuxtjs', link: 'https://nuxtjs.org' },
        { name: 'Vue.js', logo: 'techno-vuejs', link: 'https://vuejs.org' },
        {
          name: 'Tailwind CSS',
          logo: 'techno-tailwindcss',
          link: 'https://tailwindcss.com',
        },
        {
          name: 'Flutter',
          logo: 'techno-flutter',
          link: 'https://flutter.dev',
        },
        { name: 'Dart', logo: 'techno-dart', link: 'https://dart.dev' },
        {
          name: 'Node.js',
          logo: 'techno-node',
          link: 'https://nodejs.org/en',
        },
        {
          name: 'Bash',
          logo: 'techno-bash',
          link: 'https://www.gnu.org/software/bash',
        },
        {
          name: 'Bootstrap',
          logo: 'techno-bootstrap',
          link: 'https://getbootstrap.com',
        },
        { name: 'Git', logo: 'techno-git', link: 'https://git-scm.com' },
        {
          name: 'Javascript',
          logo: 'techno-javascript',
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          name: 'LaTeX',
          logo: 'techno-latex',
          link: 'https://www.latex-project.org',
        },
        {
          name: 'Linux',
          logo: 'techno-linux',
          link: 'https://www.linux.org',
        },
        {
          name: 'MySQL',
          logo: 'techno-mysql',
          link: 'https://www.mysql.com',
        },
        {
          name: 'NGINX',
          logo: 'techno-nginx',
          link: 'https://www.nginx.com',
        },
        {
          name: 'Sass',
          logo: 'techno-sass',
          link: 'https://sass-lang.com',
        },
        {
          name: 'TypeScript',
          logo: 'techno-typescript',
          link: 'https://www.typescriptlang.org',
        },
        {
          name: 'Markdown',
          logo: 'techno-markdown',
          link: 'https://en.wikipedia.org/wiki/Markdown',
        },
      ],
      randomTechnologies: [],
    }
  },
  created() {
    this.randomTechnologies = this.shuffle(this.technologies)
  },
  methods: {
    shuffle(array) {
      let currentIndex = array.length
      let temporaryValue
      let randomIndex

      // While there remain elements to shuffle...
      while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // And swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }

      return array
    },
  },
}
</script>

<style lang="postcss" scoped>
.loop {
  @apply inline-block whitespace-nowrap;
  animation: loop 50s infinite linear;
  padding-left: 100%;
}

.loop:hover {
  /* animation-play-state: paused; */
}

@keyframes loop {
  to {
    transform: translateX(-100%);
  }
}
</style>
