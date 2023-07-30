<script setup lang="ts"></script>

<template>
  <div class="bg-zinc-900 rounded-xl p-4 my-3">
    <h1 class="text-center text-5xl font-extrabold">My Projects 🌐</h1>
    <h2 class="text-center text-2xl font-semibold mt-2">
      Most of my projects live here.
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 mt-3">
      <Project title="Packfile" to="/projects/packfile" github="sinjs/packfile"
        >The Packfile specification provides automatic updating for Minecraft
        Modpacks</Project
      >
      <Project
        title="@packfile/packfile-ts"
        to="/projects/packfile-ts"
        github="sinjs/packfile-ts"
        >The TypeScript implementation for the Packfile specification, provides
        Interfaces, Class models and automatic fetching.</Project
      >
      <Project title="peneOS" to="/projects/peneos" github="pene-corp/os-v2"
        >A dumb hobby operating system combing a Windows 95 look with a modern
        Unix System (and some penis jokes)</Project
      >

      <Project
        title="cedric-ooc"
        to="https://cedric-ooc.vercel.app"
        github="sinjs/cedric-ooc"
        >This is the biggest collection of cedric's moments where he says the
        weirdest things in his natural habitat: the discord chats.</Project
      >
      <Project title="entropy8" to="https://entropy8.org"
        >A company. soon&trade;</Project
      >
      <Project title="soon&trade;">soon&trade;</Project>

      <Project title="soon&trade;">soon&trade;</Project>
      <Project title="soon&trade;">soon&trade;</Project>
      <Project title="soon&trade;">soon&trade;</Project>
    </div>
  </div>
</template>
