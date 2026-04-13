<script setup>
const categories = [
  {
    name: "Languages",
    icon: "💻",
    skills: ["Python", "JavaScript", "TypeScript", "SQL"]
  },
  {
    name: "Backend",
    icon: "⚙️",
    skills: ["Django", "FastAPI", "REST APIs", "PostgreSQL"]
  },
  {
    name: "Frontend",
    icon: "🎨",
    skills: ["Vue.js", "Bootstrap", "HTML5", "CSS3"]
  },
  {
    name: "DevOps",
    icon: "🚀",
    skills: ["Docker", "Jenkins", "CI/CD", "Git"]
  },
  {
    name: "AI & Data",
    icon: "🤖",
    skills: ["Pandas", "Scikit-learn", "NLP", "Recommendation Systems"]
  }
]
</script>

<template>
  <section id="skills" class="py-24 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-sm font-semibold text-purple-600 mb-2 tracking-wider uppercase">Skills</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Technical Expertise
        </h3>
      </div>

      <div class="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div 
          v-for="category in categories" 
          :key="category.name" 
          class="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div class="text-3xl mb-4">{{ category.icon }}</div>
          <h3 class="font-semibold mb-4 text-lg text-gray-900 dark:text-white">{{ category.name }}</h3>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="skill in category.skills" 
              :key="skill" 
              class="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full text-sm"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
