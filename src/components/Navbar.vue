<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const initializeTheme = () => {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark)

  if (shouldBeDark) {
    document.documentElement.classList.add('dark')
    isDark.value = true
  } else {
    document.documentElement.classList.remove('dark')
    isDark.value = false
  }
}

onMounted(() => {
  initializeTheme()
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}
</script>

<template>
  <nav class="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm z-50">
    <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1
        class="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
      >
        Brian Bultut Chepyegon
      </h1>

      <div class="flex items-center space-x-6">
        <div class="space-x-6 hidden md:flex">
          <a href="#about" class="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
            >About</a
          >
          <a href="#skills" class="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
            >Skills</a
          >
          <a
            href="#projects"
            class="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
            >Projects</a
          >
          <a href="#contact" class="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
            >Contact</a
          >
        </div>

        <!-- Theme Toggle Button -->
        <button
          @click="toggleTheme"
          class="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Toggle theme"
        >
          <svg
            v-if="!isDark"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-yellow-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>
