<script setup lang="ts">
import ExternalLinkIcon from "@heroicons/vue/24/solid/ArrowTopRightOnSquareIcon";

const props = defineProps<{
  title: string;
  image?: { src: string };
  to?: string;
  github?: string;
}>();
</script>

<template>
  <div
    class="bg-zinc-800 p-4 rounded-xl space-y-2 flex flex-col justify-between"
  >
    <div>
      <nuxt-img v-if="image" v-bind="props.image" />
      <h1 class="text-xl font-extrabold">{{ props.title }}</h1>

      <slot />
    </div>

    <div class="flex flex-row space-x-3 justify-between">
      <NuxtLink
        v-if="props.to"
        v-bind="props"
        class="bg-blue-600 px-3 py-2 rounded-xl w-full flex items-center"
        ><ExternalLinkIcon class="h-6 w-6" />&nbsp;Visit</NuxtLink
      >
      <NuxtLink
        v-if="props.github"
        :to="'https://github.com/' + props.github"
        class="bg-zinc-100 text-zinc-900 px-3 py-2 rounded-xl w-full flex items-center"
        target="_blank"
      >
        <nuxt-img
          src="/icon_github.svg"
          height="24"
          width="24"
          class="inline-block"
        />
        <span>&nbsp;GitHub</span></NuxtLink
      >
    </div>
  </div>
</template>
