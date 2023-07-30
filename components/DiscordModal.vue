<template>
  <div
    id="discordModal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-2xl max-h-full">
      <div class="relative bg-zinc-800 rounded-lg shadow">
        <!-- Header -->
        <div
          class="flex items-start justify-between p-4 border-b rounded-t border-zinc-600"
        >
          <h3 class="text-xl font-semibold text-white">Add me on Discord</h3>
          <button
            type="button"
            class="text-zinc-400 bg-transparent rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center hover:bg-zinc-600 hover:text-white"
            data-modal-hide="discordModal"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>

        <!-- Content -->
        <div class="p-6 space-y-6">
          <p class="text-base leading-relaxed text-zinc-400">
            You can add me on Discord with the following username:
          </p>
          <p class="text-base leading-relaxed text-zinc-400">
            My username is <span class="font-bold">@lyeg</span> or
            <span class="font-bold">sin#6565</span>, or if you have the discord
            app installed on your PC, click the button below!
          </p>
        </div>

        <!-- Footer -->
        <div
          class="flex items-center p-6 space-x-2 border-t rounded-b border-zinc-600"
        >
          <NuxtLink to="discord://-/users/551041413043978242">
            <button
              data-modal-hide="discordModal"
              type="button"
              class="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            >
              Open in Discord
            </button>
          </NuxtLink>

          <button
            data-modal-hide="discordModal"
            type="button"
            class="focus:ring-4 focus:outline-none rounded-lg border text-sm font-medium px-5 py-2.5 focus:z-10 bg-zinc-700 text-zinc-300 border-zinc-500 hover:text-white hover:bg-zinc-600 focus:ring-zinc-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
