(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/Atef-Guesmi/assets/atef-v_Jvi8qz.jpg`,t=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%20fill='none'%3e%3crect%20width='32'%20height='32'%20rx='8'%20fill='%230c1f3f'/%3e%3cpath%20d='M16%207L7%2015v10h6v-6h6v6h6V15L16%207z'%20fill='%23e11b22'/%3e%3cpath%20d='M16%209.5L9%2016.5V23h4v-5h6v5h4v-6.5L16%209.5z'%20fill='%23fff'%20fill-opacity='0.9'/%3e%3c/svg%3e`,n=`/Atef-Guesmi/assets/atef-guesmi-BrCRmCL6.png`,r={name:`Atef Guesmi`,title:`Courtier Immobilier Résidentiel`,fullName:`Atef Guesmi — Courtier Immobilier Résidentiel`,brokerage:`Re/Max Élite`,email:`atef.guesmi@remax-quebec.com`,phone:`819-461-7082`,location:`Drummondville et environs`,photo:e},i=[{href:`#services`,label:`Services`},{href:`#process`,label:`Processus`},{href:`#about`,label:`À propos`},{href:`#testimonials`,label:`Témoignages`},{href:`#contact`,label:`Contact`}],a=[{value:`250+`,label:`transactions réussies`},{value:`4.9/5`,label:`évaluation clients`},{value:`24h`,label:`réponse garantie`}],o={eyebrow:`Services`,title:`Un accompagnement complet pour vos projets résidentiels`,lead:`À Drummondville et dans les régions environnantes, je vous guide avec rigueur et proximité, que vous souhaitiez acheter, vendre ou mieux comprendre la valeur de votre propriété.`,ctaText:`Vous avez un projet immobilier ? Discutons de vos besoins et trouvons ensemble la meilleure stratégie.`,ctaButton:`Prendre rendez-vous`},s=[{icon:`buy`,title:`Achat d'une propriété`,description:`Nous commençons par clarifier vos besoins, votre budget et vos priorités. Je recherche des propriétés adaptées, vous envoie des suggestions pertinentes et organise les visites avec vous.`,description2:`Je vous accompagne dans l'analyse des documents, la préparation de la promesse d'achat, la négociation et le suivi jusqu'au rendez-vous chez le notaire.`,cta:`Parler de mon projet`},{icon:`sell`,title:`Vente d'une propriété`,description:`Je réalise une évaluation de la valeur marchande et vous conseille sur la préparation de votre propriété pour une présentation soignée.`,description2:`Nous définissons ensemble une stratégie de mise en marché, assurons la promotion du bien, gérons les visites et analysons les offres reçues jusqu'à la négociation finale.`,cta:`Parler de ma vente`},{icon:`evaluate`,title:`Évaluation marchande`,description:`Vous souhaitez connaître la valeur réelle de votre maison ? J'analyse le marché local et compare les propriétés similaires vendues récemment dans votre secteur.`,description2:`Vous recevez une estimation réaliste et bien expliquée, utile pour planifier une vente, un refinancement ou simplement prendre une décision éclairée.`,cta:`Demander une évaluation`},{icon:`support`,title:`Accompagnement personnalisé`,description:`Chaque transaction est unique. Je reste disponible, transparent et à l'écoute tout au long du processus, du premier contact à la signature.`,description2:`Je vous aide à suivre les conditions de financement et d'inspection, j'explique les documents importants et je coordonne les échanges avec les professionnels impliqués.`,cta:`Prendre rendez-vous`}],c=[{step:`01`,title:`Premier échange`,description:`Compréhension de vos objectifs, de votre calendrier et de vos critères prioritaires.`},{step:`02`,title:`Stratégie sur mesure`,description:`Plan d'action clair avec analyse de marché, budget et étapes concrètes à suivre.`},{step:`03`,title:`Exécution & suivi`,description:`Accompagnement actif à chaque étape, avec communication transparente et réactive.`},{step:`04`,title:`Clôture en confiance`,description:`Finalisation sécurisée de la transaction et suivi post-signature si nécessaire.`}],l=[{quote:`Un accompagnement exceptionnel du début à la fin. Nous avons vendu notre condo en moins de trois semaines, au prix souhaité.`,author:`Marie-Claire D.`,role:`Vendeuse — Plateau-Mont-Royal`},{quote:`Très professionnel, à l'écoute et disponible. L'achat de notre première maison s'est déroulé sans stress.`,author:`Karim B.`,role:`Acheteur — Laval`},{quote:`Des conseils précis sur le marché locatif et une analyse de rentabilité qui nous a permis de faire le bon choix.`,author:`Sophie & Marc L.`,role:`Investisseurs — Longueuil`}],u={buy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 4l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z"/><path d="M9 14h6"/></svg>`,sell:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 4l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z"/><path d="M12 8v4"/><path d="M10 10h4"/></svg>`,evaluate:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19h16"/><path d="M7 16V9"/><path d="M12 16V5"/><path d="M17 16v-4"/></svg>`,support:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21a7 7 0 0 0 7-7v-2.5a7 7 0 1 0-14 0V14a7 7 0 0 0 7 7Z"/><path d="M9.5 14.5 11 16l3.5-4"/></svg>`};function d(){let e=i.map(({href:e,label:t})=>`<a href="${e}"${e===`#contact`?` class="nav-cta"`:``}>${t}</a>`).join(``),t=a.map(({value:e,label:t})=>`
      <article class="stat-card reveal">
        <strong>${e}</strong>
        <span>${t}</span>
      </article>`).join(``),n=s.map(({icon:e,title:t,description:n,description2:r,cta:i})=>`
      <article class="service-card reveal">
        <span class="service-icon" aria-hidden="true">${u[e]}</span>
        <h3>${t}</h3>
        <p>${n}</p>
        <p>${r}</p>
        <a class="btn btn-service" href="#contact">${i}</a>
      </article>`).join(``),d=c.map(({step:e,title:t,description:n})=>`
      <article class="process-card reveal">
        <span class="process-step">${e}</span>
        <h3>${t}</h3>
        <p>${n}</p>
      </article>`).join(``),f=l.map(({quote:e,author:t,role:n})=>`
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
            <span class="brand-name">${r.name}</span>
            <span class="brand-title">${r.title}</span>
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
          ${e}
        </nav>
      </div>
    </header>

    <main id="main">
      <section class="hero">
        <div class="hero-content reveal">
          <p class="eyebrow">${r.fullName}</p>
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
              src="${r.photo}"
              alt="${r.name}, ${r.title} chez ${r.brokerage}"
              width="480"
              height="560"
              loading="eager"
              fetchpriority="high"
            />
          </div>
          <div class="hero-contact">
            <a class="hero-contact-item" href="tel:+1${r.phone.replace(/-/g,``)}">
              <span class="hero-contact-icon" aria-hidden="true">📞</span>
              ${r.phone}
            </a>
            <a class="hero-contact-item" href="mailto:${r.email}">
              <span class="hero-contact-icon" aria-hidden="true">📧</span>
              ${r.email}
            </a>
          </div>
        </aside>
      </section>

      <section class="stats" aria-label="Chiffres clés">
        ${t}
      </section>

      <section id="services" class="section services">
        <div class="services-inner">
          <div class="section-heading reveal">
            <p class="eyebrow">${o.eyebrow}</p>
            <h2>${o.title}</h2>
            <p class="section-lead">${o.lead}</p>
          </div>
          <div class="service-grid">
            ${n}
          </div>
          <div class="services-cta reveal">
            <p>${o.ctaText}</p>
            <a class="btn btn-primary" href="#contact">${o.ctaButton}</a>
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
            ${r.name}, courtier immobilier chez ${r.brokerage}, met son expertise au service de votre
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
            src="${r.photo}"
            alt="Portrait professionnel de ${r.name}"
            width="400"
            height="480"
            loading="lazy"
          />
          <div class="about-badge">
            <strong>${r.name}</strong>
            <span>${r.title} — ${r.brokerage}</span>
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
            <a class="btn btn-primary" href="tel:+1${r.phone.replace(/-/g,``)}">
              Appeler — ${r.phone}
            </a>
            <a class="btn btn-secondary" href="mailto:${r.email}">
              Écrire un courriel
            </a>
          </div>

          <ul class="contact-details">
            <li>
              <span class="contact-label">Courriel</span>
              <a href="mailto:${r.email}">${r.email}</a>
            </li>
            <li>
              <span class="contact-label">Téléphone</span>
              <a href="tel:+1${r.phone.replace(/-/g,``)}">${r.phone}</a>
            </li>
            <li>
              <span class="contact-label">Secteur</span>
              <span>${r.location}</span>
            </li>
          </ul>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <strong>${r.name}</strong>
          <p>${r.title} — ${r.location}</p>
        </div>
        <nav class="footer-nav" aria-label="Liens du pied de page">
          ${i.map(({href:e,label:t})=>`<a href="${e}">${t}</a>`).join(``)}
        </nav>
        <p class="footer-copy">&copy; ${new Date().getFullYear()} ${r.name}. Tous droits réservés.</p>
      </div>
    </footer>
  `}function f(){let e=document.querySelector(`link[rel="icon"]`)??document.createElement(`link`);e.rel=`icon`,e.type=`image/svg+xml`,e.href=t,e.isConnected||document.head.appendChild(e);let r=document.querySelector(`meta[property="og:image"]`)??document.createElement(`meta`);r.setAttribute(`property`,`og:image`),r.content=n,r.isConnected||document.head.appendChild(r)}var p=document.querySelector(`#app`);if(!p)throw Error(`Root element #app not found`);f(),p.innerHTML=d();function m(){let e=document.querySelector(`#header`);if(!e)return;let t=()=>{e.classList.toggle(`is-scrolled`,window.scrollY>12)};window.addEventListener(`scroll`,t,{passive:!0}),t()}function h(){let e=document.querySelector(`.nav-toggle`),t=document.querySelector(`#site-nav`);if(!e||!t)return;let n=()=>{e.setAttribute(`aria-expanded`,`false`),e.setAttribute(`aria-label`,`Ouvrir le menu`),document.body.classList.remove(`nav-open`)};e.addEventListener(`click`,()=>{let t=e.getAttribute(`aria-expanded`)===`true`;e.setAttribute(`aria-expanded`,String(!t)),e.setAttribute(`aria-label`,t?`Ouvrir le menu`:`Fermer le menu`),document.body.classList.toggle(`nav-open`,!t)}),t.querySelectorAll(`a`).forEach(e=>{e.addEventListener(`click`,n)}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&n()})}function g(){let e=document.querySelectorAll(`.reveal`);if(!e.length)return;let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-visible`),t.unobserve(e.target))})},{threshold:.12,rootMargin:`0px 0px -40px 0px`});e.forEach(e=>t.observe(e))}function _(){document.querySelectorAll(`a[href^="#"]`).forEach(e=>{e.addEventListener(`click`,t=>{let n=e.getAttribute(`href`);if(!n||n===`#`)return;let r=document.querySelector(n);r&&(t.preventDefault(),r.scrollIntoView({behavior:`smooth`,block:`start`}),history.pushState(null,``,n))})})}m(),h(),g(),_();