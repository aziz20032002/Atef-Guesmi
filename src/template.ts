import {

  aboutIntro,

  commitments,

  contactIntro,

  credentials,
  featuredProperties,

  hero,

  navLinks,

  processIntro,

  projectMoments,

  processSteps,

  services,

  servicesIntro,

  site,

  stats,

} from './content'

import { commitmentIcons, processIcons, serviceIcons, uiIcons } from './icons'
import { heroPropertyUrl } from './assets'



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

      ({ icon, image, imageAlt, title, description, cta }) => `

      <article class="service-card reveal">

        <div class="service-image">
          <img src="${image}" alt="${imageAlt}" width="900" height="675" loading="lazy" />
        </div>

        <div class="service-card-top">

          <span class="service-icon" aria-hidden="true">${serviceIcons[icon]}</span>

          <h3>${title}</h3>

          <p>${description}</p>

        </div>

        <a class="btn btn-service" href="#contact">

          ${cta}

          <span class="btn-icon" aria-hidden="true">${uiIcons.arrow}</span>

        </a>

      </article>`

    )

    .join('')

  const featuredPropertyItems = featuredProperties
    .map(
      ({ images, imageAlt, type, city, address, price, bedrooms, bathrooms, description, url }, propertyIndex) => `
      <article class="property-card reveal">
        <div class="property-image" ${images.length > 1 ? `data-property-gallery="${propertyIndex}"` : ''}>
          ${images
            .map(
              (photo, photoIndex) =>
                `<img class="property-gallery-slide${photoIndex === 0 ? ' is-active' : ''}" src="${photo}" alt="${imageAlt} — photo ${photoIndex + 1}" width="900" height="675" loading="lazy" aria-hidden="${photoIndex !== 0}" />`
            )
            .join('')}
          <span class="property-label">${images.length > 1 ? '3 photos' : 'Photo illustrative'}</span>
          ${
            images.length > 1
              ? `<button class="property-gallery-arrow property-gallery-arrow--previous" type="button" data-gallery-previous aria-label="Photo précédente">‹</button>
                 <button class="property-gallery-arrow property-gallery-arrow--next" type="button" data-gallery-next aria-label="Photo suivante">›</button>
                 <div class="property-gallery-dots" aria-label="Choisir une photo">
                   ${images
                     .map(
                       (_, photoIndex) =>
                         `<button type="button" class="property-gallery-dot${photoIndex === 0 ? ' is-active' : ''}" data-gallery-dot="${photoIndex}" aria-label="Afficher la photo ${photoIndex + 1}" aria-pressed="${photoIndex === 0}"></button>`
                     )
                     .join('')}
                 </div>`
              : ''
          }
        </div>
        <div class="property-content">
          <p class="property-city">${type} · ${city}</p>
          <h3>${price}</h3>
          <p class="property-address">${address}</p>
          ${description ? `<p class="property-description">${description}</p>` : ''}
          ${
            bedrooms !== null && bathrooms !== null
              ? `<div class="property-features" aria-label="${bedrooms} chambres et ${bathrooms} salles de bain">
                  <span><strong>${bedrooms}</strong> chambres</span>
                  <span><strong>${bathrooms}</strong> salles de bain</span>
                </div>`
              : '<div class="property-features"><span>Terrain résidentiel</span></div>'
          }
          <a class="btn btn-service" href="${url}" target="_blank" rel="noopener noreferrer">
            Voir la propriété
            <span class="btn-icon" aria-hidden="true">${uiIcons.arrow}</span>
          </a>
        </div>
      </article>`
    )
    .join('')



  const processItems = processSteps

    .map(

      ({ step, icon, title, description }) => `

      <article class="process-card reveal">

        <div class="process-marker">
          <span class="process-step" aria-label="Étape ${step}">${step}</span>
          <span class="process-icon" aria-hidden="true">${processIcons[icon]}</span>
        </div>

        <h3>${title}</h3>

        <p>${description}</p>

      </article>`

    )

    .join('')

  const projectMomentItems = projectMoments
    .map(
      ({ image, imageAlt, eyebrow, title, description }, index) => `
      <article
        class="showcase-slide${index === 0 ? ' is-active' : ''}"
        data-showcase-slide
        aria-hidden="${index === 0 ? 'false' : 'true'}"
      >
        <img
          src="${image}"
          alt="${imageAlt}"
          width="1024"
          height="768"
          loading="lazy"
        />
        <div class="showcase-slide-overlay"></div>
        <div class="showcase-slide-content">
          <p class="eyebrow">${eyebrow}</p>
          <h2>${title}</h2>
          <p>${description}</p>
        </div>
      </article>`
    )
    .join('')

  const projectMomentDots = projectMoments
    .map(
      (_, index) => `
      <button
        type="button"
        class="showcase-dot${index === 0 ? ' is-active' : ''}"
        data-showcase-dot="${index}"
        aria-label="Afficher le visuel ${index + 1} sur ${projectMoments.length}"
        aria-pressed="${index === 0 ? 'true' : 'false'}"
      ></button>`
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

          <span class="brand-mark" aria-hidden="true">
            <img src="/logo-atef-guesmi.jfif" alt="" width="64" height="64" />
          </span>

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

              <a class="btn btn-secondary" href="#properties">${hero.secondaryCta}</a>

            </div>

            <ul class="trust-list">

              ${hero.trustPoints.map((item) => `<li>${item}</li>`).join('')}

            </ul>

          </div>



          <aside class="hero-aside reveal">

            <div class="hero-portrait-stage">

              <div class="hero-visual-shape" aria-hidden="true"></div>

              <div class="hero-property-mark" aria-hidden="true">
                <span class="hero-property-roof"></span>
                <span class="hero-property-wall"></span>
                <span class="hero-property-window"></span>
              </div>

              <div class="hero-photo-frame">
                <img
                src="${site.photo}"
                alt="Atef Guesmi, courtier immobilier résidentiel chez RE/MAX Élite"

                width="900"

                height="900"

                loading="eager"

                fetchpriority="high"

                />
              </div>

              <div class="hero-agent-card">

                <span class="hero-agent-card-accent" aria-hidden="true"></span>
                <strong>Courtier immobilier résidentiel</strong>

                <span>Centre-du-Québec, Montérégie, Mauricie et Estrie</span>

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

      <section class="section section-showcase" aria-labelledby="showcase-title">

        <div class="section-shell">

          <div class="showcase-heading reveal">
            <p class="eyebrow">Votre parcours immobilier</p>
            <h2 id="showcase-title">Bien plus qu’une transaction</h2>
          </div>

          <div class="showcase reveal" data-showcase aria-roledescription="carrousel">

            <div class="showcase-viewport">
              ${projectMomentItems}
            </div>

            <div class="showcase-controls">
              <div class="showcase-dots" aria-label="Choisir un visuel">
                ${projectMomentDots}
              </div>

              <div class="showcase-arrows">
                <button type="button" data-showcase-previous aria-label="Visuel précédent">←</button>
                <button type="button" data-showcase-next aria-label="Visuel suivant">→</button>
              </div>
            </div>

          </div>

        </div>

      </section>

      <section id="properties" class="section">

        <div class="section-shell">

          ${sectionHeading(
            'Sélection immobilière',
            'Propriétés en vedette',
            'Découvrez une sélection de propriétés affichées sur la page officielle RE/MAX Élite.'
          )}

          <div class="property-grid">
            ${featuredPropertyItems}
          </div>

        </div>

      </section>



      <section id="about" class="section section-alt">

        <div class="section-shell about-grid">

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

          <div class="about-content reveal">

            ${sectionHeading(aboutIntro.eyebrow, aboutIntro.title)}

            ${aboutIntro.paragraphs.map((p) => `<p>${p}</p>`).join('')}

            <ul class="about-list">

              ${aboutIntro.highlights.map((item) => `<li>${item}</li>`).join('')}

            </ul>

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

              <p>Suivez mes conseils et mes réalisations immobilières.</p>

              <div class="social-cta-actions">

                <a

                  class="btn btn-secondary btn-facebook"

                  href="${site.facebook}"

                  target="_blank"

                  rel="noopener noreferrer"

                  aria-label="Suivre Atef Guesmi sur Facebook"

                >

                  <span class="btn-icon" aria-hidden="true">${uiIcons.facebook}</span>

                  Suivre sur Facebook

                </a>

                <a

                  class="btn btn-secondary btn-instagram"

                  href="${site.instagram}"

                  target="_blank"

                  rel="noopener noreferrer"

                  aria-label="Suivre Atef Guesmi sur Instagram"

                >

                  <span class="btn-icon" aria-hidden="true">${uiIcons.instagram}</span>

                  Suivre sur Instagram

                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section class="property-cta" aria-labelledby="property-cta-title">

        <img
          class="property-cta-background"
          src="${heroPropertyUrl}"
          alt=""
          width="1600"
          height="900"
          loading="lazy"
        />

        <div class="property-cta-overlay" aria-hidden="true"></div>

        <div class="property-cta-content reveal">
          <p class="eyebrow">Parlons de votre projet</p>
          <h2 id="property-cta-title">Vous pensez acheter ou vendre une propriété&nbsp;?</h2>
          <p>Parlons de votre projet immobilier et voyons ensemble la meilleure stratégie.</p>
          <a class="btn btn-primary" href="#contact">Prendre rendez-vous</a>
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

                <a
                  class="btn btn-whatsapp"
                  href="${site.whatsapp}"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Écrire à ${site.name} sur WhatsApp"
                >

                  <span class="btn-icon" aria-hidden="true">${uiIcons.whatsapp}</span>

                  Écrire sur WhatsApp

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

                <li>

                  <span class="contact-icon" aria-hidden="true">${uiIcons.instagram}</span>

                  <div>

                    <span class="contact-label">Instagram</span>

                    <a
                      href="${site.instagram}"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visiter le profil Instagram d’Atef Guesmi — Courtier Immobilier"
                    >

                      Atef Guesmi — Courtier Immobilier

                    </a>

                  </div>

                </li>

              </ul>

            </div>

            <div class="contact-form-card">

              <div class="contact-form-heading">

                <p class="contact-form-eyebrow">Parlons de votre projet</p>

                <h3>Comment puis-je vous aider&nbsp;?</h3>

                <p>Décrivez-moi votre projet immobilier et je vous répondrai dans les meilleurs délais.</p>

              </div>

              <form id="contact-form" novalidate>

                <div class="form-row form-row--split">

                  <label class="form-field">
                    <span class="field-label">Prénom</span>
                    <span class="field-control">
                      <span class="field-icon" aria-hidden="true">${uiIcons.user}</span>
                      <input type="text" name="firstName" autocomplete="given-name" placeholder="Votre prénom" required aria-describedby="firstName-error">
                    </span>
                    <small id="firstName-error" class="form-field-error" aria-live="polite"></small>
                  </label>

                  <label class="form-field">
                    <span class="field-label">Nom</span>
                    <span class="field-control">
                      <span class="field-icon" aria-hidden="true">${uiIcons.user}</span>
                      <input type="text" name="lastName" autocomplete="family-name" placeholder="Votre nom" required aria-describedby="lastName-error">
                    </span>
                    <small id="lastName-error" class="form-field-error" aria-live="polite"></small>
                  </label>

                </div>

                <div class="form-row form-row--split">

                  <label class="form-field">
                    <span class="field-label">Numéro de téléphone</span>
                    <span class="field-control">
                      <span class="field-icon" aria-hidden="true">${uiIcons.phone}</span>
                      <input type="tel" name="phone" autocomplete="tel" inputmode="tel" placeholder="819-555-1234" required aria-describedby="phone-error">
                    </span>
                    <small id="phone-error" class="form-field-error" aria-live="polite"></small>
                  </label>

                  <label class="form-field">
                    <span class="field-label">Adresse e-mail</span>
                    <span class="field-control">
                      <span class="field-icon" aria-hidden="true">${uiIcons.email}</span>
                      <input type="email" name="email" autocomplete="email" placeholder="vous@exemple.com" required aria-describedby="email-error">
                    </span>
                    <small id="email-error" class="form-field-error" aria-live="polite"></small>
                  </label>

                </div>

                <label class="form-field">
                  <span class="field-label">Message</span>
                  <span class="field-control field-control--textarea">
                    <span class="field-icon" aria-hidden="true">${uiIcons.message}</span>
                    <textarea name="message" rows="5" placeholder="Parlez-moi brièvement de votre projet : achat, vente, évaluation, visite..." required aria-describedby="message-error"></textarea>
                  </span>
                  <small id="message-error" class="form-field-error" aria-live="polite"></small>
                </label>

                <div class="form-row--hidden" aria-hidden="true">
                  <label>Site web
                    <input type="text" name="contact-website" tabindex="-1" autocomplete="off">
                  </label>
                </div>

                <div class="form-actions">
                  <button class="btn btn-primary" type="submit">Envoyer ma demande</button>
                  <div id="contact-form-message" class="form-message" role="status" aria-live="polite"></div>
                  <p class="form-privacy">
                    <span aria-hidden="true">${uiIcons.lock}</span>
                    Vos informations restent confidentielles et servent uniquement à vous répondre.
                  </p>
                </div>

              </form>

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

        <div class="footer-col">

          <h3 class="footer-heading">Réseaux</h3>

          <nav class="footer-social" aria-label="Réseaux sociaux">

            <a href="${site.facebook}" target="_blank" rel="noopener noreferrer">
              <span aria-hidden="true">${uiIcons.facebook}</span>
              Facebook
            </a>

            <a href="${site.instagram}" target="_blank" rel="noopener noreferrer">
              <span aria-hidden="true">${uiIcons.instagram}</span>
              Instagram
            </a>

            <a href="${site.whatsapp}" target="_blank" rel="noopener noreferrer">
              <span aria-hidden="true">${uiIcons.whatsapp}</span>
              WhatsApp
            </a>

          </nav>

        </div>

      </div>



      <div class="footer-bottom">

        <p class="footer-copy" id="mentions-legales">

          &copy; ${new Date().getFullYear()} ${site.name}. Courtier immobilier résidentiel, ${site.brokerage} — membre OACIQ. Tous droits réservés.

        </p>

      </div>

    </footer>

  `

}


