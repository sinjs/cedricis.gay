<script setup lang="ts">
const props = defineProps<{ to: string; text?: string }>();
const route = useRoute();
</script>

<template>
  <div>
    <NuxtLink
      :to="props.to"
      active-class="!bg-zinc-100 text-zinc-900 font-bold"
      class="bg-zinc-800 p-2 px-3 rounded-xl block"
    >
      <slot>
        {{ text }}
      </slot>
    </NuxtLink>
  </div>
</template>
