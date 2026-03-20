<script setup>
const categories = {
  Languages: ["Python", "JavaScript", "TypeScript", "SQL"],
  Backend: ["Django", "FastAPI", "REST APIs", "PostgreSQL"],
  Frontend: ["Vue.js", "Bootstrap", "HTML5", "CSS3"],
  DevOps: ["Docker", "Jenkins", "CI/CD", "Git"],
  "AI & Data": ["Pandas", "Scikit-learn", "NLP", "Recommendation Systems"]
}
</script>

<template>
  <section id="skills" class="py-20 bg-gray-100 dark:bg-gray-900">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-3xl font-bold mb-10 text-center text-purple-600 dark:text-purple-400">
        Technical Skills
      </h2>

      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(skills, category) in categories" :key="category" class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 class="font-semibold mb-4 text-lg text-gray-900 dark:text-white">{{ category }}</h3>
          <div class="flex flex-wrap gap-3">
            <span v-for="skill in skills" :key="skill" class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
