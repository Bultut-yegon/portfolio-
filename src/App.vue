<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Experience from './components/Experience.vue'
import Resume from './components/Resume.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <div class="bg-white dark:bg-gray-900 transition-colors duration-300">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Resume />
    <Contact />
  </div>
</template>
