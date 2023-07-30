<script setup lang="ts">
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });

const error = {
  code: props.error?.statusCode ?? 500,
  message: props.error?.message ?? "Internal Server Error",
};

console.error(props.error);
</script>

<template>
  <div class="bg-zinc-950 text-zinc-100 min-h-screen p-4 flex justify-center">
    <div class="w-full max-w-screen-xl">
      <AppHeader />

      <div class="bg-zinc-900 rounded-xl p-4 my-3 flex flex-col justify-center">
        <h1 class="text-center text-5xl font-extrabold">{{ error.code }} ❌</h1>
        <h2 class="text-center text-2xl font-semibold mt-2">
          {{ error.message }}
        </h2>

        <div class="text-center">
          <NuxtLink
            @click="handleError()"
            class="px-3 py-2 font-semibold bg-blue-600 text-zinc mt-3 rounded-xl inline-block cursor-pointer"
          >
            Go back
          </NuxtLink>
        </div>
      </div>

      <AppFooter />
    </div>
  </div>

  <!-- Modals and other fixed elements -->
  <DiscordModal />
</template>
