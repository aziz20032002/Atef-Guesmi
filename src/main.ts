import './style.css'
import { faviconUrl, ogImageUrl } from './assets'
import { renderApp } from './template'
import { setupContactForm } from './contact'

function setupHeadAssets(): void {
  const favicon =
    document.querySelector<HTMLLinkElement>('link[rel="icon"]') ??
    document.createElement('link')

  favicon.rel = 'icon'
  favicon.type = 'image/svg+xml'
  favicon.href = faviconUrl
  if (!favicon.isConnected) document.head.appendChild(favicon)

  const ogImage =
    document.querySelector<HTMLMetaElement>('meta[property="og:image"]') ??
    document.createElement('meta')

  ogImage.setAttribute('property', 'og:image')
  ogImage.content = ogImageUrl
  if (!ogImage.isConnected) document.head.appendChild(ogImage)
}

const app = document.querySelector<HTMLDivElement>('#app')
if (!app) throw new Error('Root element #app not found')

setupHeadAssets()
app.innerHTML = renderApp()

function setupHeader(): void {
  const header = document.querySelector<HTMLElement>('#header')
  if (!header) return

  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 12)
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
}

function setupMobileNav(): void {
  const toggle = document.querySelector<HTMLButtonElement>('.nav-toggle')
  const nav = document.querySelector<HTMLElement>('#site-nav')
  if (!toggle || !nav) return

  const closeNav = () => {
    toggle.setAttribute('aria-expanded', 'false')
    toggle.setAttribute('aria-label', 'Ouvrir le menu')
    document.body.classList.remove('nav-open')
  }

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true'
    toggle.setAttribute('aria-expanded', String(!isOpen))
    toggle.setAttribute('aria-label', isOpen ? 'Ouvrir le menu' : 'Fermer le menu')
    document.body.classList.toggle('nav-open', !isOpen)
  })

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNav)
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeNav()
  })
}

function setupReveal(): void {
  const elements = document.querySelectorAll<HTMLElement>('.reveal')
  if (!elements.length) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  )

  elements.forEach((el) => observer.observe(el))
}

function setupScrollRestoration(): void {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }

  const html = document.documentElement
  const resetScroll = () => {
    const previousScrollBehavior = html.style.scrollBehavior
    html.style.scrollBehavior = 'auto'

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    html.scrollTop = 0
    document.body.scrollTop = 0

    if (previousScrollBehavior) {
      html.style.scrollBehavior = previousScrollBehavior
    } else {
      html.style.removeProperty('scroll-behavior')
    }
  }

  const resetIfNoHash = () => {
    if (!location.hash) resetScroll()
  }

  window.addEventListener('DOMContentLoaded', resetIfNoHash, { once: true })
  window.addEventListener('load', () => requestAnimationFrame(resetIfNoHash), { once: true })
  window.addEventListener('pageshow', (event) => {
    if ((event as PageTransitionEvent).persisted || !location.hash) {
      requestAnimationFrame(resetScroll)
    }
  })
}

function setupSmoothScroll(): void {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const id = anchor.getAttribute('href')
      if (!id || id === '#') return

      const target = document.querySelector(id)
      if (!target) return

      event.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      history.pushState(null, '', id)
    })
  })
}

function setupActiveNav(): void {
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav a[data-nav]')
  const sections = document.querySelectorAll<HTMLElement>('main section[id]')
  if (!navLinks.length || !sections.length) return

  const setActive = (id: string) => {
    navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.dataset.nav === id)
    })
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

      if (visible[0]?.target.id) {
        setActive(visible[0].target.id)
      }
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5] }
  )

  sections.forEach((section) => observer.observe(section))
}

function setupVisualShowcase(): void {
  const showcase = document.querySelector<HTMLElement>('[data-showcase]')
  const slides = Array.from(document.querySelectorAll<HTMLElement>('[data-showcase-slide]'))
  const dots = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-showcase-dot]'))
  const previous = document.querySelector<HTMLButtonElement>('[data-showcase-previous]')
  const next = document.querySelector<HTMLButtonElement>('[data-showcase-next]')

  if (!showcase || slides.length < 2 || dots.length !== slides.length || !previous || !next) return

  let activeIndex = 0
  let intervalId: number | undefined
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const showSlide = (index: number) => {
    activeIndex = (index + slides.length) % slides.length

    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeIndex
      slide.classList.toggle('is-active', isActive)
      slide.setAttribute('aria-hidden', String(!isActive))
    })

    dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === activeIndex
      dot.classList.toggle('is-active', isActive)
      dot.setAttribute('aria-pressed', String(isActive))
    })
  }

  const stopAutoPlay = () => {
    if (intervalId !== undefined) window.clearInterval(intervalId)
    intervalId = undefined
  }

  const startAutoPlay = () => {
    if (prefersReducedMotion) return
    stopAutoPlay()
    intervalId = window.setInterval(() => showSlide(activeIndex + 1), 6500)
  }

  previous.addEventListener('click', () => {
    showSlide(activeIndex - 1)
    startAutoPlay()
  })

  next.addEventListener('click', () => {
    showSlide(activeIndex + 1)
    startAutoPlay()
  })

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index)
      startAutoPlay()
    })
  })

  showcase.addEventListener('mouseenter', stopAutoPlay)
  showcase.addEventListener('mouseleave', startAutoPlay)
  showcase.addEventListener('focusin', stopAutoPlay)
  showcase.addEventListener('focusout', startAutoPlay)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAutoPlay()
    else startAutoPlay()
  })

  startAutoPlay()
}

function setupPropertyGalleries(): void {
  document.querySelectorAll<HTMLElement>('[data-property-gallery]').forEach((gallery) => {
    const slides = Array.from(gallery.querySelectorAll<HTMLImageElement>('.property-gallery-slide'))
    const dots = Array.from(gallery.querySelectorAll<HTMLButtonElement>('[data-gallery-dot]'))
    const previous = gallery.querySelector<HTMLButtonElement>('[data-gallery-previous]')
    const next = gallery.querySelector<HTMLButtonElement>('[data-gallery-next]')

    if (slides.length < 2 || !previous || !next) return

    let activeIndex = 0

    const showPhoto = (index: number) => {
      activeIndex = (index + slides.length) % slides.length

      slides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === activeIndex
        slide.classList.toggle('is-active', isActive)
        slide.setAttribute('aria-hidden', String(!isActive))
      })

      dots.forEach((dot, dotIndex) => {
        const isActive = dotIndex === activeIndex
        dot.classList.toggle('is-active', isActive)
        dot.setAttribute('aria-pressed', String(isActive))
      })
    }

    previous.addEventListener('click', () => showPhoto(activeIndex - 1))
    next.addEventListener('click', () => showPhoto(activeIndex + 1))
    dots.forEach((dot, index) => dot.addEventListener('click', () => showPhoto(index)))
  })
}

setupHeader()
setupMobileNav()
setupReveal()
setupScrollRestoration()
setupSmoothScroll()
setupActiveNav()
setupVisualShowcase()
setupPropertyGalleries()
setupContactForm()
