<script setup lang="ts">
const toggleCedricMode = () => {
  cedricMode.value = !cedricMode.value;
};

const rand = (max: number): number => Math.floor(Math.random() * (max + 1));
const getEmoji = () => ["💣", "❤️", "🦅", "🗽"][rand(3)];

const cedricMode = ref(false);
</script>

<template>
  <div class="bg-zinc-900 text-zinc-400 rounded-xl p-4 my-3 text-center">
    <p class="leading-relaxed">
      Made with
      <span
        class="transition ease-in-out duration-300 inline-block hover:scale-150 cursor-pointer"
        @click="toggleCedricMode()"
        >{{ getEmoji() }}</span
      >
      by <span class="font-semibold">Sin</span> |
      <span class="font-semibold">🚧 under construction 🚧</span> |
      <NuxtLink custom
        ><NuxtImg
          data-modal-target="discordModal"
          data-modal-toggle="discordModal"
          src="/icon_discord_muted.svg"
          class="inline cursor-pointer"
      /></NuxtLink>
      |
      <NuxtLink to="https://github.com/sinjs/cedricis.gay" target="_blank"
        ><NuxtImg src="/icon_github_muted.svg" class="inline cursor-pointer"
      /></NuxtLink>
    </p>
    <p class="leading-relaxed">
      Copyright &copy;
      <span class="font-semibold">{{ new Date().getFullYear() }}</span>
    </p>
  </div>
  <div
    class="bg-zinc-900 text-zinc-400 rounded-xl p-4 my-3 text-center"
    v-if="cedricMode"
  >
    <NuxtImg src="/cedric.png" class="w-full h-56 rounded-xl" />
  </div>
</template>
