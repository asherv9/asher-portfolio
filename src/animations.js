import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initAnimations() {

  const ctx = gsap.context(() => {

    // Hero animation
    gsap.fromTo(
      '.hero-content > *',
      {
        opacity: 0,
        y: 40
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      }
    )

    // Section animations
    gsap.utils.toArray('.section').forEach((section) => {

      const elements = section.querySelectorAll(
        '.section-label, .section-title, .about-text, .info-card, .project-card, .skill-pill, .football-card'
      )

      if (!elements.length) return

      gsap.fromTo(
        elements,
        {
          opacity: 0,
          y: 40
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true
          }
        }
      )

    })

  })

  ScrollTrigger.refresh()

  return () => ctx.revert()
}