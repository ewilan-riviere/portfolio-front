<template>
  <div class="container">
    <!-- <figure v-for="(project, projectId) in projects" :key="projectId">
      <img
        :src="project.assets.image"
        :alt="project.title"
        :title="project.title"
      />
      <figcaption><a href="#">1</a></figcaption>
    </figure> -->
    <article
      v-for="(project, projectId) in projects"
      :key="projectId"
      :data-index="projectId"
      class="m-block"
    >
      <section
        class="relative flex flex-col col-span-1 my-5 text-center transition-colors duration-100 bg-white divide-y divide-gray-200 rounded-lg shadow  hover:bg-gray-100"
      >
        <nuxt-link
          :to="{
            name: 'projects-slug',
            params: { slug: project.slug },
          }"
          class="pb-20 bg-opacity-70"
        >
          <div class="flex flex-col flex-1 px-8 pt-8">
            <img
              class="flex-shrink-0 w-32 h-32 mx-auto rounded-full"
              :src="project.assets.image"
              :alt="project.title"
              loading="lazy"
              width="200"
              height="200"
            />
            <div class="">
              <div v-if="project.assets.imageTitle">
                <h3 class="sr-only">
                  {{ project.title }}
                </h3>
                <img :src="project.assets.imageTitle" :alt="project.title" />
              </div>
              <h3 v-else class="mt-6 text-lg font-semibold text-gray-900">
                {{ project.title }}
              </h3>
            </div>
            <dl class="flex flex-col justify-between flex-grow mt-1">
              <dt class="sr-only">
                {{ project.title }}
              </dt>
              <p
                class="mt-5 text-sm italic text-left word-wraping"
                v-html="$limitLength(project.description, 150)"
              />
              <dt class="sr-only">Type</dt>
              <dd class="mt-3">
                <span
                  class="px-2 py-1 text-xs font-medium bg-green-200 rounded-full "
                  >{{ project.formation.title }}</span
                >
              </dd>
            </dl>
          </div>
        </nuxt-link>
        <section v-if="project.links" class="absolute bottom-0 w-full">
          <div
            class="flex -mt-px border-t border-gray-200 divide-x divide-gray-200 "
          >
            <div v-if="project.links.front" class="flex flex-1 w-0 group">
              <a
                v-if="project.links.front.repository"
                :href="project.links.front.repository"
                target="_blank"
                rel="noopener noreferrer"
                class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-700 border border-transparent rounded-br-lg "
              >
                <div class="flex items-center">
                  <icon
                    name="git"
                    :size="20"
                    class="transition-colors duration-300  group-hover:text-red-600"
                  />
                  <span
                    class="ml-1 font-semibold transition-colors duration-300  group-hover:text-gray-500"
                    >Dépôt Git</span
                  >
                </div>
              </a>
              <span
                v-else
                class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm italic font-medium text-gray-400 border border-transparent rounded-br-lg "
              >
                Non open-source
              </span>
            </div>
            <div
              v-if="project.links.front"
              class="flex flex-1 w-0 -ml-px group"
            >
              <a
                v-if="project.links.front.project"
                :href="project.links.front.project"
                target="_blank"
                rel="noopener noreferrer"
                class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-700 border border-transparent rounded-br-lg "
              >
                <div class="flex items-center">
                  <icon
                    name="sparkles"
                    :size="20"
                    class="transition-colors duration-300  group-hover:text-yellow-300"
                  />
                  <span
                    class="ml-1 font-semibold transition-colors duration-300  group-hover:text-gray-500"
                    >Découvrir</span
                  >
                </div>
              </a>
              <span
                v-else
                class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm italic font-medium text-gray-400 border border-transparent rounded-br-lg "
              >
                Bientôt disponible
              </span>
            </div>
          </div>
        </section>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  name: 'ListProjects',
  props: {
    projects: {
      type: Array,
      default: () => [],
    },
    limited: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="postcss" scoped>
.m-block {
  margin: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  margin-bottom: 10px;
  break-inside: avoid;
}

.container {
  column-count: 1;
  column-gap: 10px;
}

@screen md {
  .container {
    column-count: 2;
  }
}

@screen lg {
  .container {
    column-count: 3;
  }
}

@screen xl {
  .container {
    column-count: 4;
  }
}
</style>
