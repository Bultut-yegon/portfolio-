<script setup>
const projects = [
  {
    title: "Agricultural AI Prediction System",
    tech: "Django • ML • PostgreSQL",
    description: "Machine learning-driven backend system for rainfall and soil prediction.",
    repo: ""
  },
  {
    title: "CSV Bulk Import System",
    tech: "Django • Vue • Transactions",
    description: "Secure CSV import pipeline with validation and error handling.",
    repo: ""
  },
  {
    title: "Loan Tracking System",
    tech: "PHP • MySQL",
    description: "Relational database-driven financial management application.",
    repo: "https://github.com/Bultut-yegon/Improved_loan-system"
  },
  {
    title: "FastAPI Recommendation Service",
    tech: "FastAPI • Docker • AI",
    description: "API-first recommendation engine with model inference endpoint.",
    repo: "https://github.com/Bultut-yegon/Vocalearn_lms_ai_service"
  }
]
</script>

<template>
  <section id="projects" class="py-20 px-6 max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold mb-10 dark:text-white">Projects</h2>

    <div class="grid md:grid-cols-2 gap-8">
      <a
        v-for="project in projects"
        :key="project.title"
        :href="project.repo || undefined"
        :target="project.repo ? '_blank' : undefined"
        :rel="project.repo ? 'noopener noreferrer' : undefined"
        class="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition block"
        :class="project.repo ? 'cursor-pointer' : 'cursor-default'"
      >
        <h3 class="text-xl font-semibold dark:text-white">{{ project.title }}</h3>
        <p class="text-sm text-gray-500 mb-2">{{ project.tech }}</p>
        <p class="text-gray-600 dark:text-gray-300">{{ project.description }}</p>
      </a>
    </div>
  </section>
</template>
