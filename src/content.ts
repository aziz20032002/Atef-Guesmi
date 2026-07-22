import { photoUrl } from './assets'



export const site = {

  name: 'Atef Guesmi',

  title: 'Courtier Immobilier',

  tagline: 'Courtier immobilier résidentiel',

  brokerage: 'Re/Max Élite',

  fullName: 'Atef Guesmi — Courtier Immobilier',

  email: 'atef.guesmi@remax-quebec.com',

  phone: '819-461-7082',

  phoneHref: '+18194617082',

  location: 'Drummondville et environs',

  photo: photoUrl,

  facebook: 'https://www.facebook.com/profile.php?id=61585795307978',

} as const



export const navLinks = [

  { href: '#services', label: 'Services' },

  { href: '#process', label: 'Méthode' },

  { href: '#about', label: 'À propos' },

  { href: '#engagement', label: 'Engagement' },

  { href: '#contact', label: 'Contact' },

] as const



export const hero = {

  badge: 'Re/Max Élite',

  title: 'Votre projet immobilier, guidé avec sérieux et proximité.',

  lead:

    'Courtier immobilier résidentiel à Drummondville et environs, je vous accompagne pour acheter ou vendre en toute confiance — avec une stratégie de marché précise et une écoute attentive.',

  primaryCta: 'Prendre rendez-vous',

  secondaryCta: 'Voir les services',

  trustPoints: [

    'Analyse de marché locale',

    'Accompagnement complet',

    'Transactions sécurisées',

  ],

} as const



export const stats = [

  { value: 'Re/Max', label: 'Élite — réseau de confiance' },

  { value: '100%', label: 'immobilier résidentiel' },

  { value: '24h', label: 'délai de réponse' },

] as const



export const credentials = [

  'Membre OACIQ',

  'Re/Max Élite',

  'Drummondville et environs',

] as const



export const servicesIntro = {

  eyebrow: 'Services',

  title: 'Un accompagnement complet pour vos projets résidentiels',

  lead:

    'Que vous souhaitiez acheter, vendre ou connaître la valeur de votre propriété, je vous guide avec rigueur et proximité à chaque étape.',

  ctaText: 'Un projet en tête ? Planifions un premier échange gratuit et sans engagement.',

  ctaButton: 'Planifier un appel',

} as const



export const services = [

  {

    icon: 'buy' as const,

    title: 'Achat d\'une propriété',

    description:

      'Clarification de vos besoins, recherche ciblée et accompagnement jusqu\'à la signature chez le notaire.',

    highlights: [

      'Analyse de votre budget et de vos priorités',

      'Visites organisées et suggestions pertinentes',

      'Négociation et suivi des conditions',

    ],

    cta: 'Discuter de mon achat',

  },

  {

    icon: 'sell' as const,

    title: 'Vente d\'une propriété',

    description:

      'Évaluation marchande, stratégie de mise en marché et gestion des offres jusqu\'à la transaction finale.',

    highlights: [

      'Évaluation réaliste de la valeur marchande',

      'Préparation et promotion du bien',

      'Gestion des visites et négociation',

    ],

    cta: 'Discuter de ma vente',

  },

  {

    icon: 'evaluate' as const,

    title: 'Évaluation marchande',

    description:

      'Analyse comparative du marché local pour une estimation claire et utile à vos décisions.',

    highlights: [

      'Comparaison des ventes récentes du secteur',

      'Estimation expliquée et documentée',

      'Conseils pour planifier une vente ou refinancement',

    ],

    cta: 'Demander une évaluation',

  },

  {

    icon: 'support' as const,

    title: 'Accompagnement personnalisé',

    description:

      'Un interlocuteur unique, disponible et transparent du premier contact à la clôture de la transaction.',

    highlights: [

      'Suivi des conditions de financement',

      'Explication des documents importants',

      'Coordination avec les professionnels impliqués',

    ],

    cta: 'Prendre rendez-vous',

  },

] as const



export const processIntro = {

  eyebrow: 'Méthode',

  title: 'Une démarche claire, de la première rencontre à la signature',

  lead: 'Chaque étape est planifiée pour vous offrir visibilité, sérénité et résultats concrets.',

} as const



export const processSteps = [

  {

    step: '01',

    title: 'Premier échange',

    description: 'Compréhension de vos objectifs, de votre calendrier et de vos critères prioritaires.',

  },

  {

    step: '02',

    title: 'Stratégie sur mesure',

    description: 'Plan d\'action avec analyse de marché, budget et étapes concrètes à suivre.',

  },

  {

    step: '03',

    title: 'Exécution & suivi',

    description: 'Accompagnement actif à chaque étape, avec communication transparente et réactive.',

  },

  {

    step: '04',

    title: 'Clôture en confiance',

    description: 'Finalisation sécurisée de la transaction et suivi post-signature si nécessaire.',

  },

] as const



export const aboutIntro = {

  eyebrow: 'À propos',

  title: 'Une approche humaine, claire et orientée résultats',

  paragraphs: [

    `${site.name} est courtier immobilier résidentiel chez ${site.brokerage}. Il met son expertise au service de votre projet pour vous aider à prendre les bonnes décisions, avec transparence et réactivité.`,

    'Engagé personnellement dans chaque dossier, il reste présent à chaque étape — du premier contact à la signature — pour que votre expérience soit fluide et rassurante.',

  ],

  highlights: [

    'Membre de l\'Organisme d\'autoréglementation du courtage immobilier du Québec (OACIQ)',

    'Spécialisation en immobilier résidentiel — achat et vente',

    'Service personnalisé dans la région de Drummondville',

  ],

} as const



export const commitments = [

  {

    icon: 'dedication' as const,

    title: 'Dévouement',

    description:

      'Présent à chaque étape du processus — sous la pluie, le soleil ou la neige — je m\'investis personnellement dans chaque propriété.',

  },

  {

    icon: 'proximity' as const,

    title: 'Proximité',

    description:

      'Un accompagnement transparent et humain, avec une écoute attentive de vos objectifs et de vos contraintes.',

  },

  {

    icon: 'expertise' as const,

    title: 'Expertise',

    description:

      'La force du réseau Re/Max Élite et une connaissance approfondie du marché résidentiel local.',

  },

] as const



export const contactIntro = {

  eyebrow: 'Contact',

  title: 'Prêt à faire le prochain pas ?',

  lead: 'Contactez-moi pour un premier échange gratuit et sans engagement. Je vous réponds dans les 24 heures.',

} as const


