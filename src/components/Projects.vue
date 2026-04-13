<script setup>
const projects = [
  {
    title: "CV Bulk Import System",
    tech: "Django • Vue 3 • PostgreSQL • Celery • Redis",
    description: "Enterprise-grade bulk CV import system with validation, duplicate detection, and async processing. Features a Django REST API backend, Vue 3 frontend, and background worker agent.",
    repos: [
      { name: "UI", url: "https://github.com/Bultut-yegon/Data-ingestion-UI" },
      { name: "Server", url: "https://github.com/Bultut-yegon/Data-ingestion-server" },
      { name: "Agent", url: "https://github.com/Bultut-yegon/Data-ingestion-agent" }
    ]
  },
  {
    title: "Agricultural AI Prediction System",
    tech: "Django • ML • PostgreSQL",
    description: "Machine learning-driven backend system for rainfall and soil prediction.",
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
  <section id="projects" class="py-24 bg-white dark:bg-gray-900">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-sm font-semibold text-purple-600 mb-2 tracking-wider uppercase">Projects</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Featured Work
        </h3>
      </div>

    <div class="grid md:grid-cols-2 gap-8">
      <div
        v-for="project in projects"
        :key="project.title"
        class="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
      >
        <div class="h-48 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
          <svg class="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 transition">{{ project.title }}</h3>
          <p class="text-sm text-purple-600 mb-3 font-medium">{{ project.tech }}</p>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ project.description }}</p>
          
          <!-- Multiple repos -->
          <div v-if="project.repos" class="flex flex-wrap gap-2">
            <a
              v-for="repo in project.repos"
              :key="repo.url"
              :href="repo.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm rounded-lg hover:bg-purple-600 dark:hover:bg-purple-600 dark:hover:text-white transition"
            >
              {{ repo.name }}
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
          
          <!-- Single repo -->
          <a
            v-else-if="project.repo"
            :href="project.repo"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center text-purple-600 hover:text-purple-700 transition font-medium"
          >
            View Repository 
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>
