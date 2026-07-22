import './style.css'
import { faviconUrl, ogImageUrl } from './assets'
import { renderApp } from './template'

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

setupHeader()
setupMobileNav()
setupReveal()
setupSmoothScroll()
setupActiveNav()
