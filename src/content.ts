import {
  bungalowPropertyUrl,
  closingUrl,
  familyPropertyUrl,
  interiorPropertyUrl,
  marketUrl,
  neighborhoodUrl,
  photoUrl,
  transactionUrl,
  townhousePropertyUrl,
  victoriavillePhoto1Url,
  victoriavillePhoto2Url,
  victoriavillePhoto3Url,
} from './assets'



export const site = {

  name: 'Atef Guesmi',

  title: 'Courtier Immobilier',

  tagline: 'Courtier immobilier résidentiel',

  brokerage: 'RE/MAX Élite',

  fullName: 'Atef Guesmi — Courtier Immobilier',

  email: 'atef.guesmi@remax-quebec.com',

  phone: '819-461-7082',

  phoneHref: '+18194617082',

  location: 'Centre-du-Québec, Montérégie, Mauricie et Estrie',

  photo: photoUrl,

  facebook: 'https://www.facebook.com/profile.php?id=61585795307978',

  instagram: 'https://www.instagram.com/atef.guesmi_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',

  whatsapp: 'https://wa.me/18194617082',

} as const



export const navLinks = [

  { href: '#services', label: 'Services' },

  { href: '#process', label: 'Méthode' },

  { href: '#properties', label: 'Propriétés' },

  { href: '#about', label: 'À propos' },

  { href: '#contact', label: 'Contact' },

] as const



export const hero = {

  badge: 'RE/MAX ÉLITE',

  title: 'Acheter. Vendre.<br>Avancer en confiance.',

  lead:

    'Je vous accompagne avec une stratégie claire, une communication simple et un suivi personnalisé à chaque étape de votre projet immobilier.',

  primaryCta: 'Parler de mon projet',

  secondaryCta: 'Voir les propriétés',

  trustPoints: [

    'Achat',

    'Vente',

    'Évaluation',

    'Accompagnement',

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

  'Centre-du-Québec, Montérégie, Mauricie et Estrie',

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
    image: familyPropertyUrl,
    imageAlt: 'Maison familiale contemporaine avec aménagement paysager',

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
    image: interiorPropertyUrl,
    imageAlt: 'Salon et cuisine à aire ouverte dans une propriété haut de gamme',

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
    image: bungalowPropertyUrl,
    imageAlt: 'Bungalow contemporain en pierre soigneusement aménagé',

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
    image: townhousePropertyUrl,
    imageAlt: 'Maison de ville moderne en brique dans un quartier résidentiel',

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

  eyebrow: 'Notre méthode',

  title: 'Votre projet en 3 étapes',

  lead: 'Trois étapes simples pour avancer avec une stratégie claire et un accompagnement constant.',

} as const



export const processSteps = [

  {

    step: '01',

    icon: 'discussion' as const,

    title: 'Discussion sur votre projet',

    description: 'Nous précisons vos objectifs, vos priorités et votre calendrier.',

  },

  {

    step: '02',

    icon: 'strategy' as const,

    title: 'Recherche ou stratégie de mise en marché',

    description: 'Nous bâtissons un plan d’action adapté au marché et à votre réalité.',

  },

  {

    step: '03',

    icon: 'transaction' as const,

    title: 'Accompagnement jusqu’à la fin de transaction',

    description: 'Nous coordonnons chaque étape jusqu’à la signature, en toute confiance.',

  },

] as const

export const projectMoments = [
  {
    image: transactionUrl,
    imageAlt: 'Poignée de main concluant une entente immobilière',
    eyebrow: 'Une relation de confiance',
    title: 'Des décisions prises avec clarté',
    description: 'Chaque échange vise à rendre votre transaction simple, transparente et rassurante.',
  },
  {
    image: marketUrl,
    imageAlt: 'Illustration du marché immobilier résidentiel canadien',
    eyebrow: 'Lecture du marché',
    title: 'Une stratégie ancrée dans votre réalité',
    description: 'Le contexte local et vos priorités guident chaque recommandation.',
  },
  {
    image: neighborhoodUrl,
    imageAlt: 'Vue aérienne d’un quartier résidentiel familial',
    eyebrow: 'Centre-du-Québec, Montérégie, Mauricie et Estrie',
    title: 'Le bon secteur pour votre projet',
    description: 'Une recherche attentive aux quartiers, aux propriétés et à votre mode de vie.',
  },
  {
    image: closingUrl,
    imageAlt: 'Clés déposées sur les documents d’une transaction immobilière',
    eyebrow: 'Jusqu’à la signature',
    title: 'Présent à chaque étape',
    description: 'Un accompagnement constant jusqu’à la remise des clés.',
  },
] as const

export const featuredProperties = [
  {
    image: victoriavillePhoto1Url,
    images: [victoriavillePhoto1Url, victoriavillePhoto2Url, victoriavillePhoto3Url],
    imageAlt: 'Maison de plain-pied à vendre au 305 Rue des Pétunias à Victoriaville',
    type: 'Maison de plain-pied',
    city: 'Victoriaville',
    address: '305 Rue des Pétunias',
    price: '449 000 $',
    bedrooms: 5,
    bathrooms: 2,
    description:
      'Spacieuse propriété familiale comprenant cinq chambres, deux salles de bains et des espaces chaleureux. Elle offre une cour intime aménagée avec une grande terrasse, une galerie couverte, un foyer et une remise avec porte de garage.',
    url: 'https://remax-elite.ca/fr/nos-proprietes/victoriaville/305-rue-des-petunias/14459744',
  },
] as const



export const aboutIntro = {

  eyebrow: 'À propos',

  title: 'Une approche humaine, claire et orientée résultats',

  paragraphs: [

    `${site.name} vous accompagne personnellement pour prendre des décisions immobilières éclairées, avec une approche humaine et une connaissance attentive du marché résidentiel.`,

  ],

  highlights: [

    'Disponible et réactif',
    'À l’écoute de vos priorités',
    'Transparent à chaque étape',
    'Présent jusqu’à la transaction',

  ],

} as const



export const commitments = [

  {

    icon: 'dedication' as const,

    title: 'Dévouement',

    description:

      'Présent à chaque étape, je m’investis pleinement dans votre projet immobilier.',

  },

  {

    icon: 'proximity' as const,

    title: 'Proximité',

    description:

      'Un accompagnement humain, transparent et attentif à vos besoins.',

  },

  {

    icon: 'expertise' as const,

    title: 'Expertise',

    description:

      'Une connaissance du marché local appuyée par la force du réseau RE/MAX Élite.',

  },

] as const



export const contactIntro = {

  eyebrow: 'Contact',

  title: 'Prêt à faire le prochain pas ?',

  lead: 'Contactez-moi pour un premier échange gratuit et sans engagement. Je vous réponds dans les 24 heures.',

} as const


