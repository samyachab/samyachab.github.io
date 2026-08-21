// Le français est la version de référence : les futures modifications de texte
// s'appliquent d'abord ici, puis sont répercutées en anglais si besoin.

const projectsBase = [
  {
    slug: "iko",
    bgVector: "/assets/images/iko-bg-vector.svg",
    logo: "/assets/images/card-mark-iko.svg",
  },
  {
    slug: "sunday",
    bgVector: "/assets/images/sunday-bg-vector.svg",
    logo: "/assets/images/card-mark-sunday.svg",
  },
  {
    slug: "eightlines",
    bgVector: "/assets/images/el-bg-vector.svg",
    logo: "/assets/images/card-mark-eightlines.svg",
  },
  {
    slug: "osme",
    titleImage: "/assets/images/titre-design.svg",
    bgVector: "/assets/images/osme-bg-vector.svg",
    logo: "/assets/images/logo-osme.png",
  },
];

const posterItemsFr = [
  {
    src: "/assets/images/creations-poster-heron.jpg",
    title: "Le Garçon et le Héron",
    desc: "Des pochettes de vinyles city pop, un enfant en deuil qui bascule dans le monde des esprits, la frontière floue entre la mort et l'acceptation. Technique : tout dessiné à la souris, pour retrouver la chaleur artisanale des pochettes japonaises des années 70. La dernière méditation de Miyazaki sur la perte, la beauté et le fait d'avancer malgré tout.",
  },
  {
    src: "/assets/images/creations-poster-monkeyman.jpg",
    title: "Monkeyman",
    desc: "Un homme fracturé, dont la fureur primitive jaillit de l'intérieur. Technique : le singe émerge de la silhouette de Dev Patel comme une ombre qui s'arrache, le noir saigne à travers le rouge, la bête et l'humain n'en font plus qu'un. La violence sans compromis comme langage visuel.",
  },
  {
    src: "/assets/images/creations-poster-jojo.jpg",
    title: "Jojo : Rohan Kishibe",
    desc: "Le pop art percute l'esthétique manga. Le style graphique du roman illustré rencontre des couleurs hypersaturées et un character design iconique. Technique : coups de pinceau peints à la main sur bleu électrique, rouge et noir en fort contraste pour sculpter le visage, les pinceaux en motif central comme écho à l'acte créatif. L'impact générationnel de JoJo sur la culture visuelle, condensé en une image. Stand proud.",
  },
  {
    src: "/assets/images/creations-poster-kos.jpg",
    title: "Kids on the Slope",
    desc: "L'esthétique des affiches de jazz des années 60, des amitiés inattendues qui éclosent à Kyushu, le bebop comme libération. Technique : des couleurs franches qui s'entrechoquent comme des riffs improvisés, turquoise et magenta sur noir profond. Une célébration visuelle de la jeunesse qui découvre la musique et la liberté, juste avant que tout ne change.",
  },
  {
    src: "/assets/images/creations-poster-chute.jpg",
    title: "Anatomie d'une chute",
    desc: "La justice en équilibre sur le fil du rasoir, l'enfant témoin qui détient la vérité finale, l'impossibilité de la certitude dans un tribunal. Technique : un rouge monochrome qui évoque à la fois le sang et le témoignage judiciaire, une balance suspendue au-dessus d'un enfant fracturé. Une réflexion sur la façon dont on fabrique des récits à partir de fragments quand la vérité reste hors d'atteinte.",
  },
];

const posterItemsEn = [
  {
    src: "/assets/images/creations-poster-heron.jpg",
    title: "The Boy and the Heron",
    desc: "City pop vinyl covers, a grieving boy crossing into the spirit realm, the blurred line between death and acceptance. Design technique: mouse-drawn, capturing the hand-crafted warmth of 1970s Japanese album art. Miyazaki's final meditation on loss, beauty, and moving forward.",
  },
  {
    src: "/assets/images/creations-poster-monkeyman.jpg",
    title: "Monkeyman",
    desc: "A man fractured, his primal fury erupting from within. Design technique: the monkey emerges from Dev Patel's silhouette like a shadow self clawing free, black bleeding through red, beast and human merging into one. Uncompromising violence as visual language.",
  },
  {
    src: "/assets/images/creations-poster-jojo.jpg",
    title: "Jojo : Rohan Kishibe",
    desc: "Pop art collides with manga aesthetic. Bold graphic novel style meets hypersat color and iconic character design. Design technique: hand-painted brushwork against electric blue, high-contrast red and black defining the face, brushes as central motif mirroring the creative act. JoJo's generational impact on visual culture captured in one frame. Stand proud.",
  },
  {
    src: "/assets/images/creations-poster-kos.jpg",
    title: "Kids on the Slope",
    desc: "1960s jazz poster aesthetics, unexpected friendships blooming in Kyushu, bebop as liberation. Design technique: bold colors clashing like improvisational riffs, turquoise and magenta against deep black. A visual celebration of youth discovering music and freedom before everything changes.",
  },
  {
    src: "/assets/images/creations-poster-chute.jpg",
    title: "Anatomie d'une chute",
    desc: "Justice balanced on a knife's edge, the boy witness holding the final truth, the impossibility of certainty in a courtroom. Design technique: monochromatic red visualizing both blood and legal testimony, scales suspended above a fractured child. A meditation on how we construct stories from fragments when the truth cannot be known.",
  },
];
const yankiImages = Array.from({ length: 8 }, (_, i) => `/assets/images/creations-yanki-${i + 1}.jpg`);
const eibishiImages = Array.from({ length: 11 }, (_, i) => `/assets/images/creations-eibishi-${i + 1}.jpg`);
const chinaPortraits = Array.from({ length: 6 }, (_, i) => `/assets/images/creations-china-p${i + 1}.jpg`);
const chinaLandscapes = Array.from({ length: 9 }, (_, i) => `/assets/images/creations-china-l${i + 1}.jpg`);

export const content = {
  fr: {
    nav: [
      { key: "home", href: "/fr", label: "Accueil" },
      { key: "case-study", href: "/fr/case-study", label: "Études de cas" },
      { key: "athlete", href: "/fr/athlete", label: "Athlète" },
      { key: "creations", href: "/fr/creations", label: "Créations" },
      { key: "about", href: "/fr/about", label: "À propos" },
    ],
    langSwitch: { href: "/", label: "EN" },
    hero: {
      title: "je suis Samy Achab",
      cta: "Découvrir mon travail",
      ctaHref: "/fr/case-study",
    },
    filters: [
      {
        key: "product",
        label: "Produit",
        text: "Je façonne des expériences digitales. De l'identification des points de friction à l'optimisation de l'adoption, je construis des produits guidés par la donnée. Chaque fonctionnalité résout un vrai problème.",
      },
      {
        key: "marketing",
        label: "Marketing",
        text: "Je crée des mouvements, pas seulement des campagnes. Du street marketing réunissant plus de 100 participants aux partenariats de marque avec Nike, je conçois des expériences qui embarquent les communautés. Tout est une question d'authenticité et d'impact.",
      },
      {
        key: "design",
        label: "Design",
        text: "J'explore le chemin entre design d'expérience, création graphique et expression visuelle. Des prototypes interactifs sur Figma aux univers de marque cohérents, je crois qu'un design parle sans avoir besoin de mots.",
      },
      {
        key: "athlete",
        label: "Athlète",
        text: "Je donne le meilleur de moi-même sous pression. Coureur de 800m classé dans le top 15 français, j'apporte la même discipline, la même résilience et le même esprit de compétition à chaque défi. Le succès se construit dans la régularité, pas dans les raccourcis.",
      },
    ],
    projects: [
      {
        ...projectsBase[0],
        href: "/fr/case-study-iko",
        category: "Produit",
        title: "iko",
        description:
          "Une plateforme qui connecte des lièvres vérifiés à des coureurs ambitieux et à des organisateurs de courses, pour un accompagnement fiable sur l'allure de course.",
        tags: ["Stratégie produit", "UX/UI Design", "Entrepreneuriat"],
      },
      {
        ...projectsBase[1],
        href: "/fr/case-study-sunday",
        category: "Gestion de projet",
        title: "sunday",
        description:
          "Chef de projet dans une startup de paiement pour la restauration. Pilotage d'une équipe support internationale de 10 personnes, 50 000 € d'impayés récupérés et automatisation des opérations clés.",
        tags: ["Gestion projet", "Analyse data", "Automatisation"],
      },
      {
        ...projectsBase[2],
        href: "/fr/case-study-eightlines",
        category: "Marketing & Événements",
        title: "Eightlines",
        description:
          "Faire naître un mouvement autour de la culture running entre Tokyo, Paris et Los Angeles. Événements, partenariats de marque et communauté à grande échelle avec Nike, PSG et ON.",
        tags: ["Event Management", "Brand Strategy", "Consulting"],
      },
      {
        ...projectsBase[3],
        href: "/fr/case-study-osme",
        category: "Design",
        title: "ØSME",
        description:
          "Identité visuelle et présence digitale pour un concept store de mode éthique qui met en avant de jeunes créateurs français éco-responsables.",
        tags: ["UX/UI Design", "Direction artistique", "Réseaux sociaux"],
      },
    ],
    footer: {
      copyright: "© 2026 – SAMY ACHAB",
      resumeLabel: "CV",
    },
    athlete: {
      title: "Coureur de haut niveau 800m",
      subtitle: "Top 15 français & 5e algérien – Objectif : Jeux Olympiques 2028",
      journeyTitle: "Mon parcours",
      timeline: [
        {
          year: "Depuis 2025 – Direction LA",
          text: "De retour sur la piste. Plus lucide. Plus solide mentalement. En route vers les minima pour les Jeux Olympiques de Los Angeles 2028. Chaque séance a une raison d'être.",
        },
        {
          year: "2024 – Le rêve américain",
          text: "Parti aux États-Unis m'entraîner dans des programmes d'élite. J'attendais une progression, j'ai pris une leçon. Les méthodes d'entraînement ne collaient ni à mon corps ni à ma foulée. Nouvel environnement, nouveaux coachs, nouvelle pression : je n'ai jamais réussi à m'adapter.",
          text2: "La réalité : je suis rentré en France. Humblement. Mais cette année m'a appris plus que n'importe quelle médaille.",
          learningsTitle: "Ce que 2024 m'a appris",
          learnings: [
            "S'adapter demande plus d'efforts que travailler dur. On peut s'entraîner à fond n'importe où, mais si la méthode ne vous correspond pas, elle finit par vous briser.",
            "Demander de l'aide est une force, pas un aveu de faiblesse. Me reconstruire avec mes coachs français a demandé de l'humilité et de l'acceptation. C'est ça, la maturité.",
            "Connaître ses forces plutôt que courir après la méthode des autres. Tous les programmes d'élite ne conviennent pas à tous les athlètes. J'ai dû comprendre MA biomécanique, MES besoins.",
            "L'échec n'est pas une fin. C'est une information. Revenir reconstruire mon niveau m'a appris une résilience bien plus profonde.",
          ],
        },
        {
          year: "2023 – 3e de France",
          text: "Mon meilleur chrono : 1'47''22 aux Championnats de France 2023. 3e place. Top 3 de la catégorie Espoirs.",
        },
        {
          year: "2019 – Le point de départ",
          text: "Premiers 800m en compétition. J'y ai découvert ma passion pour ce sport et le défi mental qu'il impose.",
        },
      ],
      lessonsTitle: "Ce que le 800m m'a apporté dans mon travail",
      lessons: [
        {
          title: "Accepter la douleur, pas l'excuse",
          text: "Dans les 400 derniers mètres d'un 800m, tout pousse à lâcher. J'ai appris à rester dans l'inconfort plutôt qu'à le fuir.",
        },
        {
          title: "La discipline bat le talent",
          text: "Pas de raccourcis, juste de la régularité. En produit comme en course, ce sont les itérations discrètes du quotidien qui l'emportent sur le coup d'éclat isolé.",
        },
        {
          title: "Le mental fait la différence",
          text: "Le talent plafonne toujours. Ce qui distingue les meilleurs, c'est leur rapport à l'échec : la vitesse à laquelle ils se relèvent. En équipe produit, c'est souvent ce qui sépare un projet livré d'un projet abandonné.",
        },
        {
          title: "Progresser par la donnée",
          text: "Chaque foulée laisse une trace : temps de passage, allure, fréquence cardiaque. Mesurer, ajuster, recommencer : un réflexe que j'applique aujourd'hui aux métriques produit et à l'optimisation UX.",
        },
      ],
      ctaText: "Comment la discipline sportive nourrit ma façon d'aborder le produit et le design ?",
      ctaLabel: "Découvrir mon travail",
      ctaHref: "/fr/case-study",
    },
    about: {
      title: "à propos de moi",
      subtitle: "Ingénieur de HEI Lille & designer de l'Academy of Art de San Francisco",
      introTitle: "introduction",
      introBody: [
        "Je suis Samy Achab, ingénieur produit créatif et entrepreneur, diplômé de l'école d'ingénieurs Junia. J'ai étudié l'Interaction & UX/UI Design à l'Academy of Art University de San Francisco. À travers ce portfolio, je vous invite à découvrir mon travail et à explorer mon parcours entre design produit, création graphique et expression visuelle.",
        "Au-delà de mon travail, je suis coureur de haut niveau. Cette double identité, ingénieur et athlète, façonne tout ce que je fais : discipline, résilience et mentalité de compétiteur appliquées à chaque projet.",
        "Curieux et passionné, je cherche sans cesse à repousser les limites de ma créativité en explorant de nouveaux styles, tendances et méthodes. Mon approche mêle réflexion moderne et stratégique à une exécution concrète, pour créer des visuels et des produits à la fois beaux et fonctionnels.",
      ],
      portrait: "/assets/images/about-portrait.jpg",
      contactTitle: "contact",
      contact: {
        linkedinLabel: "Linkedin",
        linkedinHref: "https://www.linkedin.com/in/samyachab/",
        resumeLabel: "CV",
        resumeHref: "/assets/cv-samy-achab.pdf",
        email: "myachab@gmail.com",
        phone: "+33 7 82 28 56 76",
      },
      educationTitle: "formation & parcours",
      education: [
        {
          degree: "Master en Entrepreneuriat, double diplôme",
          school: "HEI Lille et IAE School of Management",
          dates: "2024-2026, Lille, France",
          description:
            "Double diplôme axé sur la création, la structuration et le développement de mon projet entrepreneurial : IKO. Cours clés : stratégie d'entreprise, financement de l'innovation, gestion de projet, marketing, business model.",
        },
        {
          degree: "Diplôme d'ingénieur",
          school: "HEI, école d'ingénieurs de Lille (Junia)",
          dates: "2019-2025, Lille",
          description:
            "Spécialisation en matériaux et procédés textiles, avec une approche technique, environnementale et managériale. Cours clés : ennoblissement textile, matériaux fibreux, gestion de la distribution textile, ressources stratégiques, analyse du cycle de vie (ACV), science de la couleur, traitement et enduction de surface.",
        },
        {
          degree: "Master : Interaction & UX/UI Design",
          school: "Academy of Art University de San Francisco",
          dates: "2023-2024, San Francisco",
          description:
            "Immersion dans les méthodes UX : recherche, compréhension des utilisateurs, conception, test, prototypage sur Figma, entretiens utilisateurs et design itératif. J'y ai aussi étudié le motion design et les bases du front-end (HTML, CSS, JavaScript).",
        },
      ],
      logos: [
        { src: "/assets/images/about-logo-iae.png", alt: "IAE Lille University School of Management" },
        { src: "/assets/images/about-logo-aau.png", alt: "Academy of Art University" },
        { src: "/assets/images/about-logo-junia.png", alt: "Junia" },
      ],
      closing:
        "Profil hybride entre ingénierie, design et sport de haut niveau, je transforme des idées ambitieuses en produits concrets. Toujours partant pour un beau projet qui a du sens, en CDI comme en freelance. Parlons design, produit, entrepreneuriat, ou simplement course à pied.",
    },
    creations: {
      title: "créations",
      subtitle: "Graphic design, photographie & vidéo",
      posters: {
        title: "posters",
        description:
          "Passionné de design et de cinéma, autodidacte sur Photoshop, je recrée les affiches de films qui m'ont marqué visuellement en salle.",
        items: posterItemsFr,
      },
      filmTitle: "séries photo argentique",
      series: [
        {
          title: "Une journée tranquille avec les Yankis (avec mon crew Eibish)",
          description:
            "Esthétique des séries télé japonaises des années 80 : le crew en tenue de yankis, style gangster de rue comme fil narratif. Technique : photographie documentaire qui saisit une petite histoire au fil des instants. Sans pose, réel, humain. Le gang devient le sujet, son style rebelle enveloppant une intimité tranquille sous la rudesse apparente.",
          rows: [yankiImages],
          feature: "hero",
          heroIndex: 3,
        },
        {
          title: "Eibishi's Home",
          description:
            "Film noir et blanc capturant les origines d'un trio. Exploration urbaine du quartier qui nous a vus grandir, rues et immeubles chargés de souvenirs d'enfance. Une lettre d'amour visuelle au béton et à la communauté qui nous ont façonnés.",
          rows: [eibishiImages],
          feature: "hero",
          heroIndex: 4,
        },
        {
          title: "Chine : histoires de lumière",
          layout: "split",
          portraits: {
            label: "Portraits",
            text: "De la street photography : parfois voler l'instant sans prévenir, pour l'authenticité brute du moment, parfois des portraits posés, assumés. Deux façons d'attraper une présence, entre le réel saisi à la volée et le regard qui accepte l'objectif.",
            images: chinaPortraits,
            heroIndex: 0,
          },
          landscapes: {
            label: "Paysages",
            text: "Inspiré des photos argentiques des années 90 et 2000 qu'on trouvait dans les atlas et les livres de géographie de mon enfance, ceux qui m'ont donné la passion de l'Asie. Je voulais retrouver cet effet vintage et intemporel : rien ne doit trahir 2026, aucun anachronisme, juste la lumière hors du temps.",
            images: chinaLandscapes,
            heroIndex: 1,
          },
        },
      ],
      videos: {
        title: "vidéos",
        video: "/assets/video/video1.mp4",
        description: [
          "Du contenu running pensé avec une intention cinématographique, adapté aux réseaux. Technique : étalonnage, montage rythmé, la musique comme narration. Chaque plan pensé pour l'impact. La course devient un art sur ",
          { label: "Instagram", href: "https://www.instagram.com/samy_achab/" },
          " et ",
          { label: "TikTok", href: "https://www.tiktok.com/@acbsamy" },
          ".",
        ],
        socials: [
          { label: "Instagram", href: "https://www.instagram.com/samy_achab/", icon: "/assets/images/mdi_instagram.svg" },
          { label: "TikTok", href: "https://www.tiktok.com/@acbsamy", icon: "/assets/images/ic_baseline-tiktok.svg" },
        ],
      },
    },

    caseIko: {
      logo: "/assets/images/iko-logo.svg",
      tagline:
        "Une plateforme qui connecte des lièvres (pace-setters) vérifiés à des coureurs orientés objectif et à des organisateurs de course. Fini l'improvisation dans l'allure pour les athlètes qui ne peuvent pas se permettre de rater leur cible, du marathonien amateur au compétiteur élite de niveau national.",
      tags: [
        "Product strategy",
        "Business model",
        "Graphic design",
        "UX/UI design",
        "Go-to-market planning",
        "Entrepreneurship",
        "User research & testing",
      ],
      logoDesign: {
        title: "design du logo",
        image: "/assets/images/iko-gallery-1.jpg",
        text: "J'ai conçu le logo d'Iko sur Adobe Illustrator en partant d'une idée simple : faire du nom le point de départ de l'identité visuelle. Iko vient de ikou (行こう), une expression japonaise qui signifie « allons-y ». C'est une invitation à avancer ensemble.\nPour l'icône, je me suis inspiré du kanji 行, en extrayant ses formes pour créer un symbole contemporain. Les traits réinterprétés représentent deux personnages qui se rencontrent et avancent ensemble, traduisant le vecteur social d'Iko. La typographie est grasse, brute et géométrique, créant un contraste avec l'icône humaine. L'identité repose sur trois idées : mouvement, rencontre et action collective.",
      },
      pbSolution: {
        title: "problème & solution",
        problemLabel: "le problème",
        solutionLabel: "la solution",
        rows: [
          {
            actor: "Coureurs",
            problems: [
              { name: "Sonia (élite)", text: "Vise une qualification nationale. A besoin de splits précis à 400m près. Des lièvres approximatifs, c'est une saison perdue." },
              { name: "Thomas (amateur)", text: "Prépare son premier marathon. Redoute le mur au km 30 sans personne pour tenir l'allure." },
            ],
            solution: "Ils réservent des lièvres vérifiés de 30 à 90 euros par course. Des athlètes certifiés au palmarès prouvé, l'allure tenue au mètre près.",
          },
          {
            actor: "Athlète",
            problems: [
              { name: "Yassine (haut niveau)", text: "S'entraîne 8 fois par semaine comme un pro. Gagne 0 euro avec la course. Veut monétiser son niveau mais aucune plateforme n'existe." },
            ],
            solution: "Il fixe ses propres tarifs et monétise son niveau. S'entraîner 8 fois par semaine génère enfin un revenu.",
          },
          {
            actor: "Organisateur",
            problems: [
              { name: "Marc (organisateur)", text: "Trouve ses lièvres à la dernière minute. Désistements le jour J. Aucun plan B. Qualité imprévisible." },
            ],
            solution: "Il accède à un casting et à des lièvres de secours garantis, de 290 à 490 euros par événement, ou 990 euros par an en abonnement.",
          },
        ],
      },
      product: {
        title: "aperçu produit",
        mockups: [
          { src: "/assets/images/iko-image92.jpg", label: "Accueil" },
          { src: "/assets/images/iko-image93.jpg", label: "Profil athlète" },
        ],
      },
      differentiators: {
        title: "3 différenciateurs clés",
        items: [
          { title: "Certification FFA", text: "OAuth automatique, vérification des records, algorithme IKO Index. Zéro friction dans l'évaluation des lièvres pour les coureurs." },
          { title: "Pace Contract", text: "Plan kilomètre par kilomètre, vérification GPS post-course, remboursement partiel automatique si l'allure n'est pas tenue. La garantie anti-désintermédiation." },
          { title: "Anti-No-Show", text: "Acompte progressif, lièvres de secours pré-notifiés, check-ins à J-7 et J-1. Zéro mauvaise surprise de dernière minute pour les organisateurs." },
        ],
      },
      status: {
        title: "état actuel",
        items: [
          { number: "10+", label: "Athlètes prêts à lancer" },
          { number: "2", label: "Organisateurs de course engagés" },
          { number: "2027", label: "Objectif preuve de concept" },
        ],
      },
      cta: { label: "explore sunday", href: "/fr/case-study-sunday" },
    },

    caseSunday: {
      logo: "/assets/images/logo-sunday.svg",
      tagline:
        "Project Manager chez Sunday, une solution de paiement pour la restauration présente en France, aux États-Unis et au Royaume-Uni. J'ai dirigé une équipe support internationale de 10 personnes sur 3 continents, récupéré 50k euros d'impayés via un système de suivi automatisé, et réduit drastiquement la charge opérationnelle grâce à l'automatisation par IA.",
      confidential:
        "Ce projet est protégé par un accord de confidentialité : aucune capture n'est diffusée publiquement. Écrivez-moi si vous souhaitez en discuter en détail.",
      tags: [
        "Project management",
        "Data analysis",
        "Metabase",
        "Excel",
        "Process automation",
        "DUST",
        "Salesforce",
        "Figma",
        "Legal support",
        "Cross-functional collaboration",
      ],
      sections: [
        {
          title: "gestion d'équipe internationale",
          align: "left",
          blocks: [
            { title: "L'équipe", text: "10 agents support répartis dans 6 pays : France, Colombie, Roumanie, Sénégal, Mexique, États-Unis. Premier point de contact pour tous les clients restaurateurs via le chat Intercom. Gestion simultanée des fuseaux horaires, des langues et des contextes culturels." },
            { title: "CSS Letter hebdomadaire", text: "Une newsletter hebdomadaire envoyée à toute l'équipe support : métriques de performance, actualités clés de l'entreprise, axes d'amélioration, nouveaux articles du centre d'aide en référence. Pour garder les agents alignés et informés sur tous les continents." },
            { title: "Revues de performance et quiz", text: "Analyse individuelle hebdomadaire de la performance de chaque agent. Quiz hebdomadaires pour challenger et renforcer les bonnes pratiques. Une boucle de feedback continue pour améliorer la qualité des réponses et la satisfaction client." },
            { title: "Support d'escalade sur Slack", text: "Disponible sur Slack pour débloquer les agents quand les situations clients dépassaient le cadre du support standard : clarifications produit, questions financières, cas particuliers. Le pont entre l'équipe support et les account managers." },
          ],
        },
        {
          title: "automatisation & amélioration continue",
          align: "right",
          blocks: [
            { title: "Système de suivi des impayés (Excel + Salesforce + Metabase)", text: "Un fichier Excel structuré tirant les données de Salesforce et Metabase : infos client, dette totale, décomposition partielle (deux types de dettes distincts), coordonnées, commentaires et historique de contact hebdomadaire. Des formules automatisées identifiaient chaque semaine le Top 10 des clients aux impayés les plus élevés. Chaque semaine, ces 10 clients étaient appelés et l'évolution de leur dette mise à jour. 50k euros d'impayés récupérés, principalement des retards de paiement, erreurs de facturation et expirations de mandat Stripe." },
            { title: "Automatisation de la CSS Letter", text: "Automatisée avec DUST et Gemini, intégrée à Slack et Salesforce. Temps de production réduit de 5 heures à moins d'1 heure par semaine." },
            { title: "Automatisation de l'Ops Letter", text: "Rapport de performance mensuel pour les account managers en France, aux US et au UK. Même stack IA (DUST, Gemini). Temps de production réduit de 3 jours à moins de 3 heures." },
            { title: "Formulaires d'onboarding segmentés", text: "Remplacement du formulaire d'onboarding universel par plusieurs liens ciblés selon les fonctionnalités achetées par chaque nouveau client restaurateur. Moins de friction et de charge pour les account managers à chaque inscription." },
            { title: "Reporting Metabase", text: "Extractions régulières depuis Metabase pour suivre la performance de l'équipe support, identifier les mauvais payeurs et alimenter les revues hebdomadaires. Requêtes personnalisées calées sur les besoins opérationnels." },
          ],
        },
        {
          title: "formation & support transverse",
          align: "left",
          blocks: [
            { title: "Articles du centre d'aide", text: "Un article par semaine couvrant les mises à jour produit, les problèmes clients courants et les bonnes pratiques. Utilisé à la fois par les agents support et directement par les clients." },
            { title: "Supports de formation", text: "Decks de formation PowerPoint pour les account managers et les nouvelles recrues en France et aux US. Conçus sur Figma, présentés en live. Pensés pour réduire les erreurs récurrentes et le temps d'onboarding." },
            { title: "Appels de recouvrement", text: "Environ 5 appels clients par semaine pour le recouvrement et les escalades support quand les account managers étaient surchargés. Préparation aussi des dossiers juridiques : mise en demeure, injonction de paiement, déclaration de créance." },
          ],
        },
      ],
      results: {
        title: "résultats",
        items: [
          { number: "50k€", label: "Impayés récupérés" },
          { number: "5h à 1h", label: "Automatisation CSS Letter" },
          { number: "2j+ à 3h", label: "Automatisation Ops Letter" },
        ],
      },
      prevCta: { label: "explore iko", href: "/fr/case-study-iko" },
      cta: { label: "explore eightlines", href: "/fr/case-study-eightlines" },
    },

    caseEightlines: {
      logo: "/assets/images/el-logo.png",
      tagline:
        "Un collectif de course parisien fondé sur l'inclusion, la discipline et la diversité culturelle. 200+ coureurs chaque lundi à Paris. Trois événements internationaux organisés à Tokyo, Paris et Los Angeles avec Nike, ON et PSG comme partenaires.",
      tags: [
        "Event management",
        "Community building",
        "Brand partnerships",
        "Street marketing",
        "Strategic consulting",
        "Cross-cultural communication",
      ],
      sectionTitle: "3 événements organisés",
      events: [
        {
          index: "01",
          title: "On running Japan",
          date: "JUILLET 2024 — TOKYO",
          text: "Partis de zéro contact au Japon, nous avons mobilisé influenceurs et communautés de course via Instagram pour organiser une street run à travers Shibuya en soutien à l'ON Track Night de Tokyo. Nous avons créé un vrai moment de street marketing dans l'un des quartiers les plus animés du monde, participé à l'ON Track Night de Tokyo pour attirer les coureurs japonais, et clôturé la soirée par un set DJ dans un bar local. Du community-building pur, monté en 5 jours.",
          tags: ["0 contact local au départ", "100+ coureurs mobilisés", "50+ à l'ON Track Night de Tokyo"],
          poster: "/assets/images/el-on-1.jpg",
          gallery: ["/assets/images/el-on-2.jpg", "/assets/images/el-on-3.jpg", "/assets/images/el-on-4.jpg", "/assets/images/el-on-5.jpg", "/assets/images/el-on-6.jpg", "/assets/images/el-on-8.jpg", "/assets/images/el-on-9.jpg", "/assets/images/el-on-10.jpg"],
          align: "left",
        },
        {
          index: "02",
          title: "Nike & PSG",
          date: "JUIN 2026 — LOS ANGELES",
          text: "À la suite d'un partenariat avec Nike, Eightlines a collaboré avec le PSG sur une ligne de vêtements. Invités à La Maison du PSG à Los Angeles, nous avons organisé une course de 8km sur Hollywood Boulevard réunissant 70 personnes à 8h, suivie d'un temps d'échange sur les valeurs. En amont, nous avons participé à un atelier marketing au siège de Nike à Portland pour partager notre vision de la culture running en Europe. Le Chief Communication Officer de Nike, Michael Gonda, a visité notre siège parisien un mois plus tard pour une session stratégique.",
          tags: ["Atelier au siège Nike Portland", "Collab PSG x Nike x Eightlines", "70 coureurs à 8h à Hollywood"],
          poster: "/assets/images/el-psg-2.jpg",
          gallery: ["/assets/images/el-psg-1.jpg", "/assets/images/el-psg-3.jpg", "/assets/images/el-psg-4.jpg", "/assets/images/el-psg-5.jpg", "/assets/images/el-psg-6.jpg", "/assets/images/el-psg-7.jpg", "/assets/images/el-psg-8.jpg", "/assets/images/el-psg-9.jpg", "/assets/images/el-psg-10.jpg", "/assets/images/el-psg-11.jpg", "/assets/images/el-psg-12.jpg"],
          align: "right",
        },
        {
          index: "03",
          title: "Latay",
          date: "MAI 2025 — PARIS",
          text: "Un talk avec Latay, un podcast sur la culture franco-nord-africaine, explorant comment l'identité culturelle façonne la performance athlétique et comment religion et sport coexistent à haut niveau. Organisé pendant le Ramadan, la soirée a combiné un talk enregistré, une course de 5km à travers Paris, et un iftar préparé pour 100 personnes au siège d'Eightlines. Communauté, culture et sport, en une seule soirée.",
          tags: ["100 personnes réunies", "Talk + 5km + iftar", "L'inclusion culturelle au cœur"],
          poster: "/assets/images/el-latay-1.jpg",
          gallery: ["/assets/images/el-latay-2.jpg", "/assets/images/el-latay-3.jpg", "/assets/images/el-latay-4.jpg", "/assets/images/el-latay-5.jpg", "/assets/images/el-latay-7.jpg"],
          align: "left",
        },
      ],
      scale: {
        title: "scale",
        items: [
          { number: "200+", label: "Coureurs chaque lundi" },
          { number: "3", label: "Pays : JP, US, FR" },
          { number: "Nike, ON running, PSG", label: "Partenaires de marque" },
        ],
      },
      prevCta: { label: "explore sunday", href: "/fr/case-study-sunday" },
      cta: { label: "explore osme", href: "/fr/case-study-osme" },
    },

    caseOsme: {
      logo: "/assets/images/osme-logo.png",
      tagline:
        "Design UI/UX et identité visuelle pour un concept store de mode éthique mettant en avant des créateurs français éco-responsables émergents. Mission principale : concevoir toute l'expérience du site sur Figma, des parcours utilisateurs au prototype final, avec une direction artistique cohérente sur tous les points de contact digitaux et print.",
      tags: ["Art direction", "Figma", "Prototyping", "UX/UI design", "Adobe suite", "Social media content", "Sourcing"],
      sections: [
        {
          title: "design ui/ux et prototypage",
          text: "Conçu une partie du site OSME sur Figma : architecture de l'information, parcours utilisateurs, wireframes et prototype haute-fidélité. Cartographié le parcours, de la découverte de la marque jusqu'à l'achat, en équilibrant ambition esthétique et clarté fonctionnelle. Le site devait refléter l'identité de chaque créateur émergent tout en gardant une expérience de plateforme cohérente.",
        },
        {
          title: "direction artistique",
          text: "Palette de couleurs, typographie, design d'affiches et assets visuels cohérents avec le positionnement de marque. Supports print et identité visuelle en boutique pensés pour correspondre à l'expérience digitale.",
        },
        {
          title: "réseaux sociaux",
          text: "Création de vidéos et de posts alignés avec la direction artistique. Du contenu construit pour communiquer les valeurs du concept store : mode éthique, talents émergents, indépendance créative.",
        },
      ],
      frames: [
        "/assets/images/osmeUX2.png",
        "/assets/images/CREATEURS.png",
        "/assets/images/REJOINDRE OSME.png",
        "/assets/images/PANIER.png",
      ],
      photos: [
        "/assets/images/osme-support-2.jpg",
        "/assets/images/osme-support-4.jpg",
        "/assets/images/osme-support-5.jpg",
        "/assets/images/osme-support-6.jpg",
      ],
      prevCta: { label: "explore eightlines", href: "/fr/case-study-eightlines" },
      cta: { label: "explore iko", href: "/fr/case-study-iko" },
    },
  },

  en: {
    nav: [
      { key: "home", href: "/", label: "Home" },
      { key: "case-study", href: "/case-study", label: "Case Study" },
      { key: "athlete", href: "/athlete", label: "Athlete" },
      { key: "creations", href: "/creations", label: "Creations" },
      { key: "about", href: "/about", label: "About" },
    ],
    langSwitch: { href: "/fr", label: "FR" },
    hero: {
      title: "i'm Samy Achab",
      cta: "Explore my work",
      ctaHref: "/case-study",
    },
    filters: [
      {
        key: "product",
        label: "Product",
        text: "I shape digital experiences. From identifying user friction to optimizing adoption, I build products with data-driven insights. Every feature solves a real problem.",
      },
      {
        key: "marketing",
        label: "Marketing",
        text: "I build movements, not just campaigns. From street marketing with 100+ participants to brand partnerships with Nike, I create experiences that engage communities. It's about authenticity and impact.",
      },
      {
        key: "design",
        label: "Design",
        text: "I explore the journey between experience design, graphic creation, and visual expression. From interactive prototypes in Figma to cohesive brand assets, I believe design communicates without words.",
      },
      {
        key: "athlete",
        label: "Athlete",
        text: "I thrive under pressure. Top 15 France 800m runner, I bring the same discipline, resilience, and competitive mindset to every challenge. Success is built through consistency, not shortcuts.",
      },
    ],
    projects: [
      {
        ...projectsBase[0],
        href: "/case-study-iko",
        category: "Product",
        title: "iko",
        description:
          "A platform connecting verified pace-setters with goal-oriented runners and race organizers. Eliminating improvisation in pacing for athletes who cannot afford to miss their targets.",
        tags: ["Product strategy", "UX/UI Design", "Entrepreneurship"],
      },
      {
        ...projectsBase[1],
        href: "/case-study-sunday",
        category: "Project Management",
        title: "sunday",
        description:
          "Project Manager at a restaurant payment startup. Led an international support team of 10, recovered 50k euros in unpaid fees, and automated key operations.",
        tags: ["Project Management", "Data analysis", "Automation"],
      },
      {
        ...projectsBase[2],
        href: "/case-study-eightlines",
        category: "Marketing & Events",
        title: "Eightlines",
        description:
          "Building a running culture movement across Tokyo, Paris, and Los Angeles. Events, brand partnerships, and community at scale with Nike, PSG, and ON.",
        tags: ["Event Management", "Brand Strategy", "Consulting"],
      },
      {
        ...projectsBase[3],
        href: "/case-study-osme",
        category: "Design",
        title: "ØSME",
        description:
          "Visual identity and digital presence for an ethical fashion concept store showcasing emerging French eco-responsible designers.",
        tags: ["UX/UI Design", "Art Direction", "Social Media"],
      },
    ],
    footer: {
      copyright: "© 2026 – SAMY ACHAB",
      resumeLabel: "Resume",
    },
    athlete: {
      title: "High level Runner 800m",
      subtitle: "Top 15 in France & 5 in Algeria – Target: 2028 Olympics Games",
      journeyTitle: "My journey",
      timeline: [
        {
          year: "From 2025 – Road to LA",
          text: "Back on track. Wiser. Stronger mentally. Working towards the qualifying mark for the 2028 Olympics in Los Angeles. Every session is intentional.",
        },
        {
          year: "2024 – The American Dream",
          text: "Went to the USA to train with elite programs. Expected improvement, got a harsh lesson instead. The training methods didn't align with my body and running style. Struggled to adapt to a new environment, new coaches, and new pressure.",
          text2: "Reality: I came back to France. Humbling. But this year taught me more than any medal could.",
          learningsTitle: "Key Learnings from 2024",
          learnings: [
            "Adaptation is harder than hard work. You can train hard anywhere, but if the method doesn't fit you, it breaks you.",
            "Asking for help is strength, not weakness. Rebuilding with my French coaches required humility and acceptance. That's maturity.",
            "Know your strengths, don't chase others' methods. Not every elite program works for every athlete. I had to understand MY biomechanics, MY needs.",
            "Failure is not the end. It's feedback. Coming back to rebuild my level taught me resilience at a deeper level.",
          ],
        },
        {
          year: "2023 – 3rd in France",
          text: "Achieved my best time: 1:47.22 at the 2023 French Championships. 3rd place finish. Top 3 U23 category.",
        },
        {
          year: "2019 – Beginning my journey",
          text: "Started running 800m competitively. Discovered my passion for the sport and the mental challenge it demands.",
        },
      ],
      lessonsTitle: "What 800m taught me as an engineer",
      lessons: [
        {
          title: "Embrace the pain, not the excuse",
          text: "In a 800m race, the last 400m is brutal. But quitting is the easy way out. I learned to thrive under pressure and push through discomfort.",
        },
        {
          title: "Discipline beats talent",
          text: "Consistency, not shortcuts. Every training session counts. Same applies to product development, daily iterations beat sporadic genius.",
        },
        {
          title: "Mental resilience is the differentiator",
          text: "Talent plateaus. What separates champions from the rest is mindset. Same for product teams, the ability to bounce back from failure is everything.",
        },
        {
          title: "Data-driven improvement",
          text: "Every split, every lap time, every heart rate metric. I track, analyze, and iterate. This mindset directly translates to product metrics and UX optimization.",
        },
      ],
      ctaText: "Interested in how athletic discipline shapes my approach to product and design?",
      ctaLabel: "Explore my work",
      ctaHref: "/case-study",
    },
    about: {
      title: "about me",
      subtitle: "Engineer from HEI Lille & Designer from Academy of Art of San Francisco",
      introTitle: "introduction",
      introBody: [
        "I am Samy Achab, a creative product engineer and entrepreneur from Junia Engineering School. I studied Interaction & UX/UI Design at the Academy of Art University in San Francisco. Through this portfolio, I invite you to discover my work and explore my journey between product design, graphic creation, and visual expression.",
        "Beyond my professional work, I'm a high-level runner. This dual identity, engineer and athlete, shapes everything I do: discipline, resilience, and a champion's mindset applied to every project.",
        "Curious and passionate, I strive to push the boundaries of my creativity by constantly exploring new styles, trends, and methods. My approach blends modern and strategic thinking with hands-on execution, creating visuals and products that are both beautiful and functional.",
      ],
      portrait: "/assets/images/about-portrait.jpg",
      contactTitle: "contact",
      contact: {
        linkedinLabel: "Linkedin",
        linkedinHref: "https://www.linkedin.com/in/samyachab/",
        resumeLabel: "Resume",
        resumeHref: "/assets/cv-samy-achab.pdf",
        email: "myachab@gmail.com",
        phone: "+33 7 82 28 56 76",
      },
      educationTitle: "education & training",
      education: [
        {
          degree: "Master's Dual Degree in Entrepreneurship",
          school: "HEI Engineering School Lille and IAE School of Management",
          dates: "2024-2026, Lille, France",
          description:
            "Dual-degree program focused on the creation, structuring, and development of my entrepreneurial project: IKO. Relevant coursework: Business Strategy, Innovation Financing, Project Management, Marketing, Business Model.",
        },
        {
          degree: "Engineering Degree",
          school: "HEI Engineering School Lille (Junia)",
          dates: "2019-2025, Lille",
          description:
            "Specialization in textile materials and processes, with a technical, environmental, and managerial approach. Relevant coursework: Textile Finishing and Treatment, Fibrous Materials, Textile Distribution Management, Strategic Resources, Life Cycle Assessment (LCA), Color Science, Surface Treatment and Coating.",
        },
        {
          degree: "MA: Interaction & UX/UI Design",
          school: "Academy of Art University of San Francisco",
          dates: "2023-2024, San Francisco",
          description:
            "Deep dive into UX methods: research, understanding users, design, testing, prototyping in Figma, user interviews, and iterative design. Also studied motion design and front-end basics (HTML, CSS, JavaScript).",
        },
      ],
      logos: [
        { src: "/assets/images/about-logo-iae.png", alt: "IAE Lille University School of Management" },
        { src: "/assets/images/about-logo-aau.png", alt: "Academy of Art University" },
        { src: "/assets/images/about-logo-junia.png", alt: "Junia" },
      ],
      closing:
        "A hybrid profile across engineering, design, and high-level sport, I turn ambitious ideas into real products. Always up for a meaningful project, whether full-time or freelance. Let's talk design, product, entrepreneurship, or just running.",
    },
    creations: {
      title: "creations",
      subtitle: "Graphic design, photography & video",
      posters: {
        title: "posters",
        description:
          "Passionate about design and cinema, I am self-taught in Photoshop, recreating movie posters that have visually impacted me in the theater.",
        items: posterItemsEn,
      },
      filmTitle: "film photo series",
      series: [
        {
          title: "A quiet day with the Yankis (with my crew Eibish)",
          description:
            "1980s Japanese television drama aesthetic, crew dressed as yankis, street gangster style as visual narrative. Design technique: documentary photography capturing a small story unfold through moments. Unposed, real, human. The gang becomes the subject, their rebellious style framing a quiet intimacy beneath the surface roughness.",
          feature: "hero",
          heroIndex: 3,
          rows: [yankiImages],
        },
        {
          title: "Eibishi's Home",
          description:
            "Black and white film capturing the origins of a trio. Urban exploration documenting the neighborhood that raised us, streets and buildings holding childhood memories. A visual love letter to the concrete and community that shaped who we became.",
          rows: [eibishiImages],
          feature: "hero",
          heroIndex: 4,
        },
        {
          title: "China: Stories in Light",
          layout: "split",
          portraits: {
            label: "Portraits",
            text: "Street photography: sometimes stealing the moment unannounced, for the raw authenticity of the instant, sometimes posed portraits, fully assumed. Two ways of catching a presence, between the real caught on the fly and the gaze that accepts the lens.",
            images: chinaPortraits,
            heroIndex: 0,
          },
          landscapes: {
            label: "Landscapes",
            text: "Inspired by the film photos from the 1990s and 2000s found in the atlases and geography books of my childhood, the ones that sparked my passion for Asia. I wanted that vintage, timeless feel: nothing should betray 2026, no anachronism, just light out of time.",
            images: chinaLandscapes,
            heroIndex: 1,
          },
        },
      ],
      videos: {
        title: "videos",
        video: "/assets/video/video1.mp4",
        description: [
          "Running content crafted with cinematic intention, adapted for social platforms. Design technique: color grading, rhythmic cuts, music as narrative. Every frame built for impact. Running becomes art on ",
          { label: "Instagram", href: "https://www.instagram.com/samy_achab/" },
          " and ",
          { label: "TikTok", href: "https://www.tiktok.com/@acbsamy" },
          ".",
        ],
        socials: [
          { label: "Instagram", href: "https://www.instagram.com/samy_achab/", icon: "/assets/images/mdi_instagram.svg" },
          { label: "TikTok", href: "https://www.tiktok.com/@acbsamy", icon: "/assets/images/ic_baseline-tiktok.svg" },
        ],
      },
    },

    caseIko: {
      logo: "/assets/images/iko-logo.svg",
      tagline:
        "A platform connecting verified pace-setters with goal-oriented runners and race organizers. Eliminating the improvisation in pacing for athletes who cannot afford to miss their targets, from amateur marathoners to elite national-level competitors.",
      tags: [
        "Product strategy",
        "Business model",
        "Graphic design",
        "UX/UI design",
        "Go-to-market planning",
        "Entrepreneurship",
        "User research & testing",
      ],
      logoDesign: {
        title: "logo design",
        image: "/assets/images/iko-gallery-1.jpg",
        text: "I designed the Iko logo in Adobe Illustrator, starting from a simple idea: make the name the starting point of the visual identity. Iko comes from ikou (行こう), a Japanese expression meaning \"let's go\". It is an invitation to move forward together.\nFor the icon, I drew on the kanji 行, extracting its shapes to build a contemporary symbol. The reinterpreted strokes represent two figures who meet and move forward together, expressing Iko's social vector. The typography is bold, raw and geometric, creating a contrast with the human icon. The identity rests on three ideas: movement, encounter and collective action.",
      },
      pbSolution: {
        title: "problem & solution",
        problemLabel: "the problem",
        solutionLabel: "the solution",
        rows: [
          {
            actor: "Runners",
            problems: [
              { name: "Sonia (elite)", text: "Chasing a national qualification. Needs splits accurate to 400m. Approximate pacers mean a lost season." },
              { name: "Thomas (amateur)", text: "Training for his first marathon. Fears cramping at km 30 without someone to hold the pace." },
            ],
            solution: "They book verified pacers for 30 to 90 euros per race. Certified athletes with proven track records, pace held to the meter.",
          },
          {
            actor: "Athlete",
            problems: [
              { name: "Yassine (high-level)", text: "Trains 8 times a week like a pro. Earns 0 euros from running. Wants to monetize his level but no platform exists." },
            ],
            solution: "He sets his own rates and monetizes his level. Training 8 times a week finally generates income.",
          },
          {
            actor: "Organizer",
            problems: [
              { name: "Marc (organizer)", text: "Finds pacers last-minute. Last-minute drop-outs on race day. No backup plan. Quality unpredictable." },
            ],
            solution: "He accesses casting and guaranteed backup pacers for 290 to 490 euros per event, or 990 euros per year subscription.",
          },
        ],
      },
      product: {
        title: "product preview",
        mockups: [
          { src: "/assets/images/iko-image92.jpg", label: "Home" },
          { src: "/assets/images/iko-image93.jpg", label: "Athlete profile" },
        ],
      },
      differentiators: {
        title: "3 key differentiators",
        items: [
          { title: "FFA Certification", text: "OAuth auto, best efforts verification, IKO Index algorithm. Zero friction in pacer evaluation for runners." },
          { title: "Pace Contract", text: "Km-by-km plan, GPS verification post-race, automatic partial refund if pace not met. The anti-disintermediation guarantee." },
          { title: "Anti-No-Show", text: "Progressive deposit, pre-notified backup pacers, check-ins at J-7 and J-1. Zero last-minute surprises for organizers." },
        ],
      },
      status: {
        title: "current status",
        items: [
          { number: "10+", label: "Athletes ready to launch" },
          { number: "2", label: "Race organizers committed" },
          { number: "2027", label: "Proof of concept target" },
        ],
      },
      cta: { label: "explore sunday", href: "/case-study-sunday" },
    },

    caseSunday: {
      logo: "/assets/images/logo-sunday.svg",
      tagline:
        "Project Manager at Sunday, a restaurant payment solution operating in France, the US, and the UK. Led an international support team of 10 across 3 continents, recovered 50k euros in unpaid fees through an automated tracking system, and drastically reduced operational workload through AI-powered automation.",
      confidential:
        "This project is protected by a confidentiality agreement, so no screenshots are publicly displayed. Let's connect if you'd like to talk about it in detail.",
      tags: [
        "Project management",
        "Data analysis",
        "Metabase",
        "Excel",
        "Process automation",
        "DUST",
        "Salesforce",
        "Figma",
        "Legal support",
        "Cross-functional collaboration",
      ],
      sections: [
        {
          title: "international team management",
          align: "left",
          blocks: [
            { title: "The team", text: "10 support agents across 6 countries: France, Colombia, Romania, Senegal, Mexico, United States. First point of contact for all restaurant clients via Intercom chat. Managing across time zones, languages, and cultural contexts simultaneously." },
            { title: "Weekly CSS Letter", text: "A weekly newsletter sent to the full support team: performance metrics, key company news, axis for improvement, new help center articles to use as reference. Kept agents aligned and informed across all continents." },
            { title: "Performance reviews and quizzes", text: "Weekly individual performance analysis for each agent. Weekly quizzes sent to challenge and reinforce best practices. Continuous feedback loop to improve response quality and client satisfaction scores." },
            { title: "Slack escalation support", text: "Available on Slack to unblock agents when client situations exceeded standard support scope: product clarifications, financial questions, edge cases. Bridge between the support team and account managers." },
          ],
        },
        {
          title: "process automation and continuous improvement",
          align: "right",
          blocks: [
            { title: "Debt tracking system (Excel + Salesforce + Metabase)", text: "Built a structured Excel file pulling data from Salesforce and Metabase: client info, total debt, partial debt breakdowns (two distinct debt types), contact details, comments, and weekly contact history. Automated formulas identified the Top 10 clients with highest outstanding debts each week. Every week, those 10 clients were called and their debt evolution updated. Recovered 50k euros in unpaid fees, primarily from payment delays, billing errors, and Stripe mandate expirations." },
            { title: "CSS Letter automation", text: "Automated using DUST and Gemini with Slack and Salesforce integrations. Production time cut from 5 hours to under 1 hour per week." },
            { title: "Ops Letter automation", text: "Monthly performance report for account managers across France, US, and UK. Same AI stack (DUST, Gemini). Production time cut from 3 days to under 3 hours." },
            { title: "Segmented onboarding forms", text: "Replaced the universal onboarding form with multiple targeted links based on the features each new restaurant client had purchased. Reduced friction and account manager workload at each new client signup." },
            { title: "Metabase reporting", text: "Regular data pulls from Metabase to track support team performance, identify bad payers, and feed into weekly reviews. Custom queries built to match operational needs." },
          ],
        },
        {
          title: "training and cross-functional support",
          align: "left",
          blocks: [
            { title: "Help center articles", text: "One article per week covering product updates, common client issues, and best practices. Used by both support agents and clients directly." },
            { title: "Training decks", text: "PowerPoint training decks for account managers and new hires in France and the US. Designed in Figma, presented live. Built to reduce recurring errors and onboarding time." },
            { title: "Debt recovery calls", text: "Around 5 client calls per week for debt recovery and support escalations when account managers were overloaded. Also prepared legal files: mise en demeure, injonction de paiement, declaration de creance." },
          ],
        },
      ],
      results: {
        title: "results",
        items: [
          { number: "50k€", label: "Unpaid fees recovered" },
          { number: "5h to 1h", label: "CSS Letter automation" },
          { number: "2d+ to 3h", label: "Ops Letter automation" },
        ],
      },
      prevCta: { label: "explore iko", href: "/case-study-iko" },
      cta: { label: "explore eightlines", href: "/case-study-eightlines" },
    },

    caseEightlines: {
      logo: "/assets/images/el-logo.png",
      tagline:
        "A Parisian running collective built on inclusion, discipline, and cultural diversity. 200+ runners every Monday across Paris. Three major international events organized across Tokyo, Los Angeles, and Paris with Nike, ON, and PSG as partners.",
      tags: [
        "Event management",
        "Community building",
        "Brand partnerships",
        "Street marketing",
        "Strategic consulting",
        "Cross-cultural communication",
      ],
      sectionTitle: "3 events organized",
      events: [
        {
          index: "01",
          title: "On running Japan",
          date: "JULY 2024 — TOKYO",
          text: "Starting from zero contacts in Japan, we mobilized influencers and running communities via Instagram to organize a street run through Shibuya in support of ON's Track Night Tokyo. Created a full street marketing moment in one of the world's busiest districts, competed in the ON Track Night Tokyo to attract Japanese runners, and closed the evening with a DJ set in a local bar. Pure community-building from scratch in 5 days.",
          tags: ["0 local contacts at start", "100+ runners mobilized", "50+ at ON Track Night Tokyo"],
          poster: "/assets/images/el-on-1.jpg",
          gallery: ["/assets/images/el-on-2.jpg", "/assets/images/el-on-3.jpg", "/assets/images/el-on-4.jpg", "/assets/images/el-on-5.jpg", "/assets/images/el-on-6.jpg", "/assets/images/el-on-8.jpg", "/assets/images/el-on-9.jpg", "/assets/images/el-on-10.jpg"],
          align: "left",
        },
        {
          index: "02",
          title: "Nike & PSG",
          date: "JUNE 2026 — LOS ANGELES",
          text: "Following a Nike partnership contract, EightLines collaborated with PSG on a clothing line. Invited to the Maison du PSG in Los Angeles, we organized a 8km run on Hollywood Boulevard bringing 70 people together at 8am, followed by a values talk. Prior to this, we attended Nike HQ in Portland for marketing workshops, sharing our vision of running culture in Europe. Nike Chief Communication Officer Michael Gonda visited our Paris headquarters one month later for a strategy session.",
          tags: ["Nike HQ workshop Portland", "PSG x Nike x EightLines collab", "70 runners at 8am Hollywood"],
          poster: "/assets/images/el-psg-2.jpg",
          gallery: ["/assets/images/el-psg-1.jpg", "/assets/images/el-psg-3.jpg", "/assets/images/el-psg-4.jpg", "/assets/images/el-psg-5.jpg", "/assets/images/el-psg-6.jpg", "/assets/images/el-psg-7.jpg", "/assets/images/el-psg-8.jpg", "/assets/images/el-psg-9.jpg", "/assets/images/el-psg-10.jpg", "/assets/images/el-psg-11.jpg", "/assets/images/el-psg-12.jpg"],
          align: "right",
        },
        {
          index: "03",
          title: "Latay",
          date: "MAY 2025 — PARIS",
          text: "A talk with Latay, a podcast on Franco-North-African dual culture, exploring how cultural identity shapes athletic performance and how religion and sport coexist at a high level. Held during Ramadan, the evening combined a recorded talk, a 5km run through Paris, and an iftar dinner prepared for 100 people at the EightLines headquarters. Community, culture, and sport in one evening.",
          tags: ["100 people gathered", "Talk + 5km + iftar", "Cultural inclusion at core"],
          poster: "/assets/images/el-latay-1.jpg",
          gallery: ["/assets/images/el-latay-2.jpg", "/assets/images/el-latay-3.jpg", "/assets/images/el-latay-4.jpg", "/assets/images/el-latay-5.jpg", "/assets/images/el-latay-7.jpg"],
          align: "left",
        },
      ],
      scale: {
        title: "scale",
        items: [
          { number: "200+", label: "Runners each monday" },
          { number: "3", label: "Countries: JP, US, FR" },
          { number: "Nike, ON running, PSG", label: "Brand partners" },
        ],
      },
      prevCta: { label: "explore sunday", href: "/case-study-sunday" },
      cta: { label: "explore osme", href: "/case-study-osme" },
    },

    caseOsme: {
      logo: "/assets/images/osme-logo.png",
      tagline:
        "UI/UX design and visual identity for an ethical fashion concept store showcasing emerging French eco-responsible designers. Primary focus: designing the full website experience in Figma, from user flows to final prototype, alongside a cohesive art direction across all digital and print touchpoints.",
      tags: ["Art direction", "Figma", "Prototyping", "UX/UI design", "Adobe suite", "Social media content", "Sourcing"],
      sections: [
        {
          title: "ui/ux design and prototyping",
          text: "Designed a part of the OSME website in Figma: information architecture, user flows, wireframes, and high-fidelity prototype. Mapped the user journey from brand discovery to product purchase, balancing aesthetic ambition with functional clarity. The site needed to reflect the identity of each emerging designer while maintaining a coherent platform experience.",
        },
        {
          title: "art direction",
          text: "Color palette, typography, poster design and visual assets coherent with the brand positioning. Print materials and in-store visual identity designed to match the digital experience.",
        },
        {
          title: "social media",
          text: "Video and post creation aligned with the art direction. Content built to communicate the store's values: ethical fashion, emerging talent, creative independence.",
        },
      ],
      frames: [
        "/assets/images/osmeUX2.png",
        "/assets/images/CREATEURS.png",
        "/assets/images/REJOINDRE OSME.png",
        "/assets/images/PANIER.png",
      ],
      photos: [
        "/assets/images/osme-support-2.jpg",
        "/assets/images/osme-support-4.jpg",
        "/assets/images/osme-support-5.jpg",
        "/assets/images/osme-support-6.jpg",
      ],
      prevCta: { label: "explore eightlines", href: "/case-study-eightlines" },
      cta: { label: "explore iko", href: "/case-study-iko" },
    },
  },
};
