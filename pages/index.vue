<script setup lang="ts">
let interval: ReturnType<typeof setInterval>;

const time = useState<string>("time");

function update() {
  time.value = new Date().toLocaleString("de-DE", {
    hour12: true,
    timeZone: "Europe/Berlin",
  });
}

onMounted(() => {
  update();
  interval = setInterval(update, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <div class="bg-zinc-900 rounded-xl p-4 my-3">
    <h1 class="text-center text-5xl font-extrabold">Hello, world! 🌍</h1>
    <h2 class="text-center text-2xl font-semibold mt-2">
      Welcome to
      <div
        class="inline-block transition-all ease-in-out hover:scale-150 duration-300 border-gradient rounded p-0.5"
      >
        <div class="bg-zinc-800 rounded p-1">
          <span class="text-gradient font-extrabold">Sin's</span>
        </div>
      </div>
      Website!
    </h2>
    <div class="bg-zinc-800 my-3 p-4 rounded-xl space-y-2">
      <p class="font-bold text-xl">Hi! 👋</p>
      <p>
        My name is <span class="font-bold">sin</span>, and I'm a
        <span class="font-bold">programmer 👨‍💻</span>. I live in
        <span class="font-bold">Germany 🇩🇪</span>, and here the current date and
        time is
        <span class="font-bold">{{ time }} ⌚</span>
      </p>
      <p>
        My experience is mainly in
        <span class="font-bold">software engineering 🔨</span>. I mainly develop
        in the following programming languages:
      </p>
      <ul class="list-disc list-inside flex justify-center flex-col">
        <li>
          <LanguageItem label="C" icon-path="/lang_c.svg" /> and
          <LanguageItem label="C++" icon-path="/lang_cxx.svg" />
        </li>
        <li><LanguageItem label="Rust" icon-path="/lang_rust.svg" /></li>
        <li>
          <LanguageItem label="TypeScript" icon-path="/lang_ts.svg" /> and
          <LanguageItem label="JavaScript" icon-path="/lang_js.svg" />
        </li>
      </ul>
      <p>
        I prefer
        <span class="font-bold">strongly typed languages 💪</span>, since they
        are easier to use and reduce runtime errors to almost none.
      </p>
    </div>
  </div>
</template>

<style scoped>
.text-gradient {
  background-image: linear-gradient(
    to right,
    theme(colors.red.600),
    theme(colors.violet.600)
  );
  @apply bg-clip-text text-transparent;
}

.border-gradient {
  @apply bg-clip-border border-transparent bg-gradient-to-r from-red-600 to-violet-600;
}
</style>
