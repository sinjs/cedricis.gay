<template>
  <div class="bg-zinc-950 text-zinc-100 min-h-screen p-4 flex justify-center">
    <div class="w-full max-w-screen-xl">
      <AppHeader />
      <slot />
      <AppFooter />
    </div>
  </div>

  <!-- Modals and other fixed elements -->
  <DiscordModal />
</template>
