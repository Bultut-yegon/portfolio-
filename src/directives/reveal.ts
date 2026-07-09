import type { Directive } from 'vue'

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
)

// Usage: add `v-reveal` to any element/section to have it fade + slide up
// into view the first time it scrolls into the viewport.
export const reveal: Directive = {
  mounted(el: HTMLElement) {
    el.classList.add('reveal')
    observer.observe(el)
  },
  unmounted(el: HTMLElement) {
    observer.unobserve(el)
  }
}
