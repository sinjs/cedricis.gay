<style scoped>
.gradient {
  background-image: linear-gradient(
    to right,
    theme(colors.red.600),
    theme(colors.yellow.300),
    theme(colors.green.600),
    theme(colors.blue.600),
    theme(colors.violet.600)
  );
}
</style>

<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/24/solid";
import { initFlowbite } from "flowbite";

onMounted(() => initFlowbite());
</script>

<template>
  <NuxtLoadingIndicator />
  <nav class="bg-zinc-900 p-4 rounded-xl flex justify-center">
    <div
      class="flex flex-wrap justify-between items-center w-full max-w-screen-xl"
    >
      <div class="nav__title flex items-center">
        <NuxtLink to="/">
          <span
            class="font-extrabold text-transparent text-2xl bg-clip-text gradient"
            >cedricis.gay</span
          ></NuxtLink
        >
      </div>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="bg-blue-600 p-2 rounded-full inline-flex md:hidden"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <Bars3Icon aria-hidden="true" class="h-6 w-6" />
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <div
          class="flex flex-col md:flex-row text-md md:space-x-4 text-center space-y-4 md:space-y-0 md:mt-0 mt-3"
        >
          <NavbarItem to="/" text="Home" />
          <NavbarItem to="/projects" text="Projects" />
          <NavbarItem to="/about" text="About" />
          <NavbarItem to="/america" text="America" />
        </div>
      </div>
    </div>
  </nav>
</template>
