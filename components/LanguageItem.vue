<script setup lang="ts">
const props = defineProps<{
  label: string;
  iconPath: string;
  noSpace?: boolean;
}>();
</script>

<template>
  <nuxt-img :src="props.iconPath" class="inline-block" height="26" width="26" />
  <span class="font-bold">{{ noSpace ? "" : " " }}{{ props.label }}</span>
</template>
