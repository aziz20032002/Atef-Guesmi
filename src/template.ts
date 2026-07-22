import {

  aboutIntro,

  commitments,

  contactIntro,

  credentials,

  hero,

  navLinks,

  processIntro,

  processSteps,

  services,

  servicesIntro,

  site,

  stats,

} from './content'

import { commitmentIcons, serviceIcons, uiIcons } from './icons'



function sectionHeading(eyebrow: string, title: string, lead?: string): string {

  return `

    <div class="section-heading reveal">

      <p class="eyebrow">${eyebrow}</p>

      <h2>${title}</h2>

      ${lead ? `<p class="section-lead">${lead}</p>` : ''}

    </div>`

}



export function renderApp(): string {

  const navItems = navLinks

    .map(({ href, label }) => {

      const ctaClass = href === '#contact' ? ' class="nav-cta"' : ''

      return `<a href="${href}" data-nav="${href.slice(1)}"${ctaClass}>${label}</a>`

    })

    .join('')



  const credentialItems = credentials

    .map((item) => `<li>${item}</li>`)

    .join('')



  const statItems = stats

    .map(

      ({ value, label }) => `

      <article class="stat-card reveal">

        <strong>${value}</strong>

        <span>${label}</span>

      </article>`

    )

    .join('')



  const serviceItems = services

    .map(

      ({ icon, title, description, highlights, cta }) => `

      <article class="service-card reveal">

        <div class="service-card-top">

          <span class="service-icon" aria-hidden="true">${serviceIcons[icon]}</span>

          <h3>${title}</h3>

          <p>${description}</p>

        </div>

        <ul class="service-highlights">

          ${highlights.map((item) => `<li>${item}</li>`).join('')}

        </ul>

        <a class="btn btn-service" href="#contact">

          ${cta}

          <span class="btn-icon" aria-hidden="true">${uiIcons.arrow}</span>

        </a>

      </article>`

    )

    .join('')



  const processItems = processSteps

    .map(

      ({ step, title, description }) => `

      <article class="process-card reveal">

        <span class="process-step">${step}</span>

        <h3>${title}</h3>

        <p>${description}</p>

      </article>`

    )

    .join('')



  const commitmentItems = commitments

    .map(

      ({ icon, title, description }) => `

      <article class="value-card reveal">

        <span class="value-icon" aria-hidden="true">${commitmentIcons[icon]}</span>

        <h3>${title}</h3>

        <p>${description}</p>

      </article>`

    )

    .join('')



  return `

    <a class="skip-link" href="#main">Aller au contenu principal</a>



    <div class="topbar">

      <div class="topbar-inner">

        <a class="topbar-link" href="tel:${site.phoneHref}">

          <span class="topbar-icon" aria-hidden="true">${uiIcons.phone}</span>

          ${site.phone}

        </a>

        <a class="topbar-link" href="mailto:${site.email}">

          <span class="topbar-icon" aria-hidden="true">${uiIcons.email}</span>

          ${site.email}

        </a>

      </div>

    </div>



    <header class="header" id="header">

      <div class="header-inner">

        <a class="brand" href="#">

          <span class="brand-mark" aria-hidden="true">R</span>

          <span class="brand-text">

            <span class="brand-name">${site.name}</span>

            <span class="brand-title">${site.tagline} · ${site.brokerage}</span>

          </span>

        </a>



        <button

          class="nav-toggle"

          type="button"

          aria-label="Ouvrir le menu"

          aria-expanded="false"

          aria-controls="site-nav"

        >

          <span></span>

          <span></span>

          <span></span>

        </button>



        <nav class="nav" id="site-nav" aria-label="Navigation principale">

          ${navItems}

        </nav>

      </div>

    </header>



    <main id="main">

      <section class="hero" aria-labelledby="hero-title">

        <div class="hero-inner">

          <div class="hero-content reveal">

            <span class="hero-badge">${hero.badge}</span>

            <h1 id="hero-title">${hero.title}</h1>

            <p class="lead">${hero.lead}</p>

            <div class="actions">

              <a class="btn btn-primary" href="#contact">${hero.primaryCta}</a>

              <a class="btn btn-secondary" href="#services">${hero.secondaryCta}</a>

            </div>

            <ul class="trust-list">

              ${hero.trustPoints.map((item) => `<li>${item}</li>`).join('')}

            </ul>

          </div>



          <aside class="hero-aside reveal">

            <div class="hero-photo-frame">

              <img

                src="${site.photo}"

                alt="${site.name}, ${site.title} chez ${site.brokerage}"

                width="480"

                height="560"

                loading="eager"

                fetchpriority="high"

              />

              <div class="hero-photo-overlay">

                <strong>${site.name}</strong>

                <span>${site.brokerage}</span>

              </div>

            </div>

          </aside>

        </div>

      </section>



      <section class="stats-band" aria-label="Points forts">

        <div class="stats-band-inner">

          ${statItems}

        </div>

      </section>



      <section class="credentials-band" aria-label="Accréditations">

        <div class="credentials-inner">

          <ul class="credentials-list">

            ${credentialItems}

          </ul>

        </div>

      </section>



      <section id="services" class="section section-alt">

        <div class="section-shell">

          ${sectionHeading(servicesIntro.eyebrow, servicesIntro.title, servicesIntro.lead)}

          <div class="service-grid">

            ${serviceItems}

          </div>

          <div class="section-cta reveal">

            <p>${servicesIntro.ctaText}</p>

            <a class="btn btn-primary" href="#contact">${servicesIntro.ctaButton}</a>

          </div>

        </div>

      </section>



      <section id="process" class="section">

        <div class="section-shell">

          ${sectionHeading(processIntro.eyebrow, processIntro.title, processIntro.lead)}

          <div class="process-grid">

            ${processItems}

          </div>

        </div>

      </section>



      <section id="about" class="section section-alt">

        <div class="section-shell about-grid">

          <div class="about-content reveal">

            ${sectionHeading(aboutIntro.eyebrow, aboutIntro.title)}

            ${aboutIntro.paragraphs.map((p) => `<p>${p}</p>`).join('')}

            <ul class="about-list">

              ${aboutIntro.highlights.map((item) => `<li>${item}</li>`).join('')}

            </ul>

          </div>

          <div class="about-visual reveal">

            <img

              class="about-photo"

              src="${site.photo}"

              alt="Portrait professionnel de ${site.name}"

              width="400"

              height="480"

              loading="lazy"

            />

            <div class="about-badge">

              <strong>${site.name}</strong>

              <span>${site.title} · ${site.brokerage}</span>

            </div>

          </div>

        </div>

      </section>



      <section id="engagement" class="section">

        <div class="section-shell">

          ${sectionHeading('Mon engagement', 'Des valeurs au cœur de chaque transaction')}

          <div class="value-grid">

            ${commitmentItems}

          </div>

          <div class="social-cta reveal">

            <div class="social-cta-content">

              <p>Suivez mes réalisations et conseils immobiliers sur Facebook.</p>

              <a

                class="btn btn-secondary btn-facebook"

                href="${site.facebook}"

                target="_blank"

                rel="noopener noreferrer"

              >

                <span class="btn-icon" aria-hidden="true">${uiIcons.facebook}</span>

                Suivre sur Facebook

              </a>

            </div>

          </div>

        </div>

      </section>



      <section id="contact" class="section section-contact">

        <div class="section-shell">

          <div class="contact-grid reveal">

            <div class="contact-info">

              <p class="eyebrow">${contactIntro.eyebrow}</p>

              <h2>${contactIntro.title}</h2>

              <p class="contact-lead">${contactIntro.lead}</p>



              <div class="contact-actions">

                <a class="btn btn-primary" href="tel:${site.phoneHref}">

                  <span class="btn-icon" aria-hidden="true">${uiIcons.phone}</span>

                  Appeler — ${site.phone}

                </a>

                <a class="btn btn-secondary" href="mailto:${site.email}">

                  <span class="btn-icon" aria-hidden="true">${uiIcons.email}</span>

                  Écrire un courriel

                </a>

              </div>

            </div>



            <div class="contact-details-card">

              <h3 class="contact-details-title">Coordonnées</h3>

              <ul class="contact-details">

                <li>

                  <span class="contact-icon" aria-hidden="true">${uiIcons.phone}</span>

                  <div>

                    <span class="contact-label">Téléphone</span>

                    <a href="tel:${site.phoneHref}">${site.phone}</a>

                  </div>

                </li>

                <li>

                  <span class="contact-icon" aria-hidden="true">${uiIcons.email}</span>

                  <div>

                    <span class="contact-label">Courriel</span>

                    <a href="mailto:${site.email}">${site.email}</a>

                  </div>

                </li>

                <li>

                  <span class="contact-icon" aria-hidden="true">${uiIcons.location}</span>

                  <div>

                    <span class="contact-label">Secteur</span>

                    <span>${site.location}</span>

                  </div>

                </li>

                <li>

                  <span class="contact-icon" aria-hidden="true">${uiIcons.facebook}</span>

                  <div>

                    <span class="contact-label">Facebook</span>

                    <a href="${site.facebook}" target="_blank" rel="noopener noreferrer">

                      Atef Guesmi — Courtier Immobilier

                    </a>

                  </div>

                </li>

              </ul>

            </div>

          </div>

        </div>

      </section>

    </main>



    <footer class="footer">

      <div class="footer-inner">

        <div class="footer-col footer-brand">

          <strong>${site.name}</strong>

          <p>${site.tagline} chez ${site.brokerage}</p>

          <p class="footer-location">${site.location}</p>

        </div>



        <div class="footer-col">

          <h3 class="footer-heading">Navigation</h3>

          <nav class="footer-nav" aria-label="Liens du pied de page">

            ${navLinks.map(({ href, label }) => `<a href="${href}">${label}</a>`).join('')}

          </nav>

        </div>



        <div class="footer-col">

          <h3 class="footer-heading">Contact</h3>

          <ul class="footer-contact">

            <li><a href="tel:${site.phoneHref}">${site.phone}</a></li>

            <li><a href="mailto:${site.email}">${site.email}</a></li>

            <li>

              <a href="${site.facebook}" target="_blank" rel="noopener noreferrer">Facebook</a>

            </li>

          </ul>

        </div>

      </div>



      <div class="footer-bottom">

        <p class="footer-copy">

          &copy; ${new Date().getFullYear()} ${site.name}. Courtier immobilier — membre OACIQ. Tous droits réservés.

        </p>

      </div>

    </footer>

  `

}


