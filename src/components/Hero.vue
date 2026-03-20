<template>
  <section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white text-center px-6">
    <div>
      <h1 class="text-5xl md:text-6xl font-extrabold mb-6">
        Hi, I'm Bultut 👋
      </h1>

      <p class="text-xl md:text-2xl opacity-90 mb-8">
        Backend Engineer • ML Enthusiast • System Designer
      </p>

      <a
        href="#projects" class="px-8 py-3 bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:scale-105 transition"
      >
        View Projects
      </a>
    </div>
  </section>
</template>


<style>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px);}
  to { opacity: 1; transform: translateY(0);}
}
.animate-fadeIn {
  animation: fadeIn 1s ease-out;
}
</style>
