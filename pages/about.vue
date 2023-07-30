<template>
  <div class="bg-zinc-900 rounded-xl p-4 my-3">
    <h1 class="text-center text-5xl font-extrabold">About ℹ</h1>
    <h2 class="text-center text-2xl font-semibold mt-2">
      What is this website?
    </h2>

    <div class="bg-zinc-800 my-3 p-4 rounded-xl space-y-2">
      <p class="font-bold text-xl">Why?</p>
      <p>
        Answering that question is quite simple, this is my personal website, I
        can't really say more about that except that it's here and it's mine!
      </p>
    </div>

    <div class="bg-zinc-800 my-3 p-4 rounded-xl space-y-2">
      <p class="font-bold text-xl">How?</p>
      <p>
        Well, this website is made with the
        <NuxtLink class="font-bold underline" to="https://nuxt.com/"
          >Nuxt</NuxtLink
        >
        framework which uses
        <NuxtLink class="font-bold underline" to="https://vuejs.org"
          >Vue.js</NuxtLink
        >
        internally. For CSS frameworks I use
        <NuxtLink class="font-bold underline" to="https://tailwindcss.com/"
          >Tailwind</NuxtLink
        >
        and
        <NuxtLink
          class="font-bold underline"
          to="https://fontsource.org/fonts/inter"
          >Fontsource Inter</NuxtLink
        >
        for my font.
      </p>
    </div>

    <div class="bg-zinc-800 my-3 p-4 rounded-xl space-y-2">
      <p class="font-bold text-xl">Who is Cedric?</p>
      <p>
        Well, cedric is quite a weird person, as you can see in my
        <NuxtLink
          to="https://cedric-ooc.vercel.app/"
          class="font-bold underline"
          >Cedric Out of Context series</NuxtLink
        >. So we all decided he is just <span class="gay">gay</span>. This is
        why this domain is also called <span class="gay">cedricis.gay</span>, it
        all has a reason after all! If you are not convinced yet, just make a
        penis joke in a 5 mile radius of <span class="gay">cedric</span>, and
        you will see the replies. I still love him tho ❤️
      </p>
    </div>
  </div>
</template>

<style style>
.gay {
  @apply bg-clip-text font-extrabold text-transparent;
  background-image: linear-gradient(
    to right,
    #dc2626,
    #fde047,
    #16a34a,
    #2563eb,
    #7c3aed
  );
}
</style>
