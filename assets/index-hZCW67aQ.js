(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={name:`Atef Guesmi`,title:`Courtier Immobilier Résidentiel`,fullName:`Atef Guesmi — Courtier Immobilier Résidentiel`,brokerage:`Re/Max Élite`,email:`atef.guesmi@remax-quebec.com`,phone:`819-461-7082`,location:`Drummondville et environs`,photo:`/atef-guesmi.png`},t=[{href:`#services`,label:`Services`},{href:`#process`,label:`Processus`},{href:`#about`,label:`À propos`},{href:`#testimonials`,label:`Témoignages`},{href:`#contact`,label:`Contact`}],n=[{value:`250+`,label:`transactions réussies`},{value:`4.9/5`,label:`évaluation clients`},{value:`24h`,label:`réponse garantie`}],r={eyebrow:`Services`,title:`Un accompagnement complet pour vos projets résidentiels`,lead:`À Drummondville et dans les régions environnantes, je vous guide avec rigueur et proximité, que vous souhaitiez acheter, vendre ou mieux comprendre la valeur de votre propriété.`,ctaText:`Vous avez un projet immobilier ? Discutons de vos besoins et trouvons ensemble la meilleure stratégie.`,ctaButton:`Prendre rendez-vous`},i=[{icon:`buy`,title:`Achat d'une propriété`,description:`Nous commençons par clarifier vos besoins, votre budget et vos priorités. Je recherche des propriétés adaptées, vous envoie des suggestions pertinentes et organise les visites avec vous.`,description2:`Je vous accompagne dans l'analyse des documents, la préparation de la promesse d'achat, la négociation et le suivi jusqu'au rendez-vous chez le notaire.`,cta:`Parler de mon projet`},{icon:`sell`,title:`Vente d'une propriété`,description:`Je réalise une évaluation de la valeur marchande et vous conseille sur la préparation de votre propriété pour une présentation soignée.`,description2:`Nous définissons ensemble une stratégie de mise en marché, assurons la promotion du bien, gérons les visites et analysons les offres reçues jusqu'à la négociation finale.`,cta:`Parler de ma vente`},{icon:`evaluate`,title:`Évaluation marchande`,description:`Vous souhaitez connaître la valeur réelle de votre maison ? J'analyse le marché local et compare les propriétés similaires vendues récemment dans votre secteur.`,description2:`Vous recevez une estimation réaliste et bien expliquée, utile pour planifier une vente, un refinancement ou simplement prendre une décision éclairée.`,cta:`Demander une évaluation`},{icon:`support`,title:`Accompagnement personnalisé`,description:`Chaque transaction est unique. Je reste disponible, transparent et à l'écoute tout au long du processus, du premier contact à la signature.`,description2:`Je vous aide à suivre les conditions de financement et d'inspection, j'explique les documents importants et je coordonne les échanges avec les professionnels impliqués.`,cta:`Prendre rendez-vous`}],a=[{step:`01`,title:`Premier échange`,description:`Compréhension de vos objectifs, de votre calendrier et de vos critères prioritaires.`},{step:`02`,title:`Stratégie sur mesure`,description:`Plan d'action clair avec analyse de marché, budget et étapes concrètes à suivre.`},{step:`03`,title:`Exécution & suivi`,description:`Accompagnement actif à chaque étape, avec communication transparente et réactive.`},{step:`04`,title:`Clôture en confiance`,description:`Finalisation sécurisée de la transaction et suivi post-signature si nécessaire.`}],o=[{quote:`Un accompagnement exceptionnel du début à la fin. Nous avons vendu notre condo en moins de trois semaines, au prix souhaité.`,author:`Marie-Claire D.`,role:`Vendeuse — Plateau-Mont-Royal`},{quote:`Très professionnel, à l'écoute et disponible. L'achat de notre première maison s'est déroulé sans stress.`,author:`Karim B.`,role:`Acheteur — Laval`},{quote:`Des conseils précis sur le marché locatif et une analyse de rentabilité qui nous a permis de faire le bon choix.`,author:`Sophie & Marc L.`,role:`Investisseurs — Longueuil`}],s={buy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 4l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z"/><path d="M9 14h6"/></svg>`,sell:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 4l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z"/><path d="M12 8v4"/><path d="M10 10h4"/></svg>`,evaluate:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19h16"/><path d="M7 16V9"/><path d="M12 16V5"/><path d="M17 16v-4"/></svg>`,support:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21a7 7 0 0 0 7-7v-2.5a7 7 0 1 0-14 0V14a7 7 0 0 0 7 7Z"/><path d="M9.5 14.5 11 16l3.5-4"/></svg>`};function c(){let c=t.map(({href:e,label:t})=>`<a href="${e}"${e===`#contact`?` class="nav-cta"`:``}>${t}</a>`).join(``),l=n.map(({value:e,label:t})=>`
      <article class="stat-card reveal">
        <strong>${e}</strong>
        <span>${t}</span>
      </article>`).join(``),u=i.map(({icon:e,title:t,description:n,description2:r,cta:i})=>`
      <article class="service-card reveal">
        <span class="service-icon" aria-hidden="true">${s[e]}</span>
        <h3>${t}</h3>
        <p>${n}</p>
        <p>${r}</p>
        <a class="btn btn-service" href="#contact">${i}</a>
      </article>`).join(``),d=a.map(({step:e,title:t,description:n})=>`
      <article class="process-card reveal">
        <span class="process-step">${e}</span>
        <h3>${t}</h3>
        <p>${n}</p>
      </article>`).join(``),f=o.map(({quote:e,author:t,role:n})=>`
      <blockquote class="testimonial-card reveal">
        <p class="quote">"${e}"</p>
        <footer>
          <cite>${t}</cite>
          <span>${n}</span>
        </footer>
      </blockquote>`).join(``);return`
    <a class="skip-link" href="#main">Aller au contenu principal</a>

    <header class="header" id="header">
      <div class="header-inner">
        <a class="brand" href="#">
          <span class="brand-mark" aria-hidden="true"></span>
          <span class="brand-text">
            <span class="brand-name">${e.name}</span>
            <span class="brand-title">${e.title}</span>
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
          ${c}
        </nav>
      </div>
    </header>

    <main id="main">
      <section class="hero">
        <div class="hero-content reveal">
          <p class="eyebrow">${e.fullName}</p>
          <h1>Votre projet immobilier, guidé avec sérieux et proximité.</h1>
          <p class="lead">
            Achetez, vendez ou investissez en toute confiance avec un accompagnement personnalisé,
            une stratégie de marché précise et une écoute attentive à vos objectifs.
          </p>
          <div class="actions">
            <a class="btn btn-primary" href="#contact">Contact</a>
            <a class="btn btn-secondary" href="#services">Découvrir nos services</a>
          </div>
          <ul class="trust-list">
            <li>Analyse de marché locale</li>
            <li>Accompagnement complet</li>
            <li>Transactions sécurisées</li>
          </ul>
        </div>

        <aside class="hero-photo reveal">
          <div class="hero-photo-frame">
            <img
              src="${e.photo}"
              alt="${e.name}, ${e.title} chez ${e.brokerage}"
              width="480"
              height="560"
              loading="eager"
              fetchpriority="high"
            />
          </div>
          <div class="hero-contact">
            <a class="hero-contact-item" href="tel:+1${e.phone.replace(/-/g,``)}">
              <span class="hero-contact-icon" aria-hidden="true">📞</span>
              ${e.phone}
            </a>
            <a class="hero-contact-item" href="mailto:${e.email}">
              <span class="hero-contact-icon" aria-hidden="true">📧</span>
              ${e.email}
            </a>
          </div>
        </aside>
      </section>

      <section class="stats" aria-label="Chiffres clés">
        ${l}
      </section>

      <section id="services" class="section services">
        <div class="services-inner">
          <div class="section-heading reveal">
            <p class="eyebrow">${r.eyebrow}</p>
            <h2>${r.title}</h2>
            <p class="section-lead">${r.lead}</p>
          </div>
          <div class="service-grid">
            ${u}
          </div>
          <div class="services-cta reveal">
            <p>${r.ctaText}</p>
            <a class="btn btn-primary" href="#contact">${r.ctaButton}</a>
          </div>
        </div>
      </section>

      <section id="process" class="section process">
        <div class="section-heading reveal">
          <p class="eyebrow">Processus</p>
          <h2>Une méthode claire, de la première rencontre à la signature</h2>
        </div>
        <div class="process-grid">
          ${d}
        </div>
      </section>

      <section id="about" class="section about">
        <div class="about-content reveal">
          <p class="eyebrow">À propos</p>
          <h2>Une approche humaine, claire et orientée résultats.</h2>
          <p>
            ${e.name}, courtier immobilier chez ${e.brokerage}, met son expertise au service de votre
            projet pour vous aider à prendre les bonnes décisions, avec transparence, réactivité et une
            vraie compréhension de vos priorités.
          </p>
          <ul class="about-list">
            <li>Membre de l'Organisme d'autoréglementation du courtage immobilier du Québec (OACIQ)</li>
            <li>Spécialisation en immobilier résidentiel et investissement locatif</li>
            <li>Service bilingue — français et anglais</li>
          </ul>
        </div>
        <div class="about-visual reveal">
          <img
            class="about-photo"
            src="${e.photo}"
            alt="Portrait professionnel de ${e.name}"
            width="400"
            height="480"
            loading="lazy"
          />
          <div class="about-badge">
            <strong>${e.name}</strong>
            <span>${e.title} — ${e.brokerage}</span>
          </div>
        </div>
      </section>

      <section id="testimonials" class="section testimonials">
        <div class="section-heading reveal">
          <p class="eyebrow">Témoignages</p>
          <h2>Ce que disent nos clients</h2>
        </div>
        <div class="testimonial-grid">
          ${f}
        </div>
      </section>

      <section id="contact" class="section contact">
        <div class="contact-card reveal">
          <p class="eyebrow">Contact</p>
          <h2>Prêt à faire le prochain pas ?</h2>
          <p class="contact-lead">Contactez-moi pour un premier échange gratuit et sans engagement.</p>

          <div class="contact-actions">
            <a class="btn btn-primary" href="tel:+1${e.phone.replace(/-/g,``)}">
              Appeler — ${e.phone}
            </a>
            <a class="btn btn-secondary" href="mailto:${e.email}">
              Écrire un courriel
            </a>
          </div>

          <ul class="contact-details">
            <li>
              <span class="contact-label">Courriel</span>
              <a href="mailto:${e.email}">${e.email}</a>
            </li>
            <li>
              <span class="contact-label">Téléphone</span>
              <a href="tel:+1${e.phone.replace(/-/g,``)}">${e.phone}</a>
            </li>
            <li>
              <span class="contact-label">Secteur</span>
              <span>${e.location}</span>
            </li>
          </ul>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <strong>${e.name}</strong>
          <p>${e.title} — ${e.location}</p>
        </div>
        <nav class="footer-nav" aria-label="Liens du pied de page">
          ${t.map(({href:e,label:t})=>`<a href="${e}">${t}</a>`).join(``)}
        </nav>
        <p class="footer-copy">&copy; ${new Date().getFullYear()} ${e.name}. Tous droits réservés.</p>
      </div>
    </footer>
  `}var l=document.querySelector(`#app`);if(!l)throw Error(`Root element #app not found`);l.innerHTML=c();function u(){let e=document.querySelector(`#header`);if(!e)return;let t=()=>{e.classList.toggle(`is-scrolled`,window.scrollY>12)};window.addEventListener(`scroll`,t,{passive:!0}),t()}function d(){let e=document.querySelector(`.nav-toggle`),t=document.querySelector(`#site-nav`);if(!e||!t)return;let n=()=>{e.setAttribute(`aria-expanded`,`false`),e.setAttribute(`aria-label`,`Ouvrir le menu`),document.body.classList.remove(`nav-open`)};e.addEventListener(`click`,()=>{let t=e.getAttribute(`aria-expanded`)===`true`;e.setAttribute(`aria-expanded`,String(!t)),e.setAttribute(`aria-label`,t?`Ouvrir le menu`:`Fermer le menu`),document.body.classList.toggle(`nav-open`,!t)}),t.querySelectorAll(`a`).forEach(e=>{e.addEventListener(`click`,n)}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&n()})}function f(){let e=document.querySelectorAll(`.reveal`);if(!e.length)return;let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-visible`),t.unobserve(e.target))})},{threshold:.12,rootMargin:`0px 0px -40px 0px`});e.forEach(e=>t.observe(e))}function p(){document.querySelectorAll(`a[href^="#"]`).forEach(e=>{e.addEventListener(`click`,t=>{let n=e.getAttribute(`href`);if(!n||n===`#`)return;let r=document.querySelector(n);r&&(t.preventDefault(),r.scrollIntoView({behavior:`smooth`,block:`start`}),history.pushState(null,``,n))})})}u(),d(),f(),p();