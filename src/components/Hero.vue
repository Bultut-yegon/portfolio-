<template>
  <section class="min-h-screen flex items-center justify-center relative overflow-hidden" style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);">
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
    </div>
    
    <div class="text-center px-6 relative z-10">
      <p class="text-sm md:text-base font-medium mb-4 text-purple-400 tracking-wider uppercase">Hello, I'm</p>
      <div class="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-7 mb-4">
        <img
          src="/pic1.png"
          alt="Brian Bultut"
          class="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-purple-400/60 shadow-2xl shadow-purple-500/30"
        />
        <h1 class="text-5xl md:text-7xl font-bold text-white">
          Brian Bultut
        </h1>
      </div>
      <p class="text-xl md:text-2xl text-gray-300 mb-8 font-light">
        Backend Engineer • ML Enthusiast • System Designer
      </p>
      
      <div class="flex flex-col md:flex-row gap-4 justify-center">
        <a
          href="#projects"
          class="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          View Projects
        </a>
        <a
          href="#contact"
          class="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition"
        >
          Get In Touch
        </a>
      </div>
    </div>
    
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
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
