// Curated from public repositories and READMEs. Core pages need no API keys.
export const projects = [
  {
    slug: "hyper-color-push",
    name: "Hyper Color Push",
    category: "Games",
    type: "Mobile arcade game",
    image: "/projects/hyper-color-push.webp",
    imageAlt: "Original Hyper Color Push arcade game artwork",
    color: "purple",
    tags: ["Unity", "C#", "iOS & Android"],
    repository: "Hyper-Color-Push",
    status: "Published title · Archive",
    link: "https://youtu.be/fSkaO2LAT-4",
    linkLabel: "Watch the trailer",
    description:
      "A 2D arcade game built in Unity and released on iOS and Android. Includes original graphics and music.",
    overview:
      "My first published mobile game, built in Unity. I developed the game and its graphics, worked on the music with Jesus Robles, and integrated mobile ads and analytics.",
    details: [
      "Built with Unity for iOS and Android.",
      "Original retro-inspired graphics and music created with Jesus Robles.",
      "Integrated Unity Ads and the Facebook SDK for analytics.",
    ],
    note: "Originally released on iOS and Android. Source code and assets are available on GitHub.",
  },
  {
    slug: "finesse-the-ball",
    name: "Finesse the Ball",
    category: "Games",
    type: "Physics & interaction",
    image: "/projects/finesse-the-ball.webp",
    imageAlt:
      "Finesse the Ball gameplay with a ball, obstacles, and collectible stars",
    color: "blue",
    tags: ["Unity", "C#", "Touch controls"],
    repository: "Finesse-The-Ball",
    status: "Playable prototype",
    link: "https://jameshartley.itch.io/finesse",
    linkLabel: "Play on itch.io",
    description:
      "A Unity browser game where you slow time, aim, and launch a ball through obstacles to collect stars.",
    overview:
      "A browser-game prototype made in Unity 2018. Touch the ball to slow time, drag to aim, and release to launch it toward the finish line while avoiding obstacles and collecting stars.",
    details: [
      "Touch-and-drag controls for aiming and launching the ball.",
      "Slows time while the player aims.",
      "Obstacle-based levels with collectible stars.",
    ],
    note: "Unfinished prototype. The browser build is on itch.io, and the Unity source is on GitHub.",
  },
  {
    slug: "tafl",
    name: "Tafl: A King Pass",
    category: "Games",
    type: "Strategy board game",
    image: "/projects/tafl.webp",
    imageAlt: "Tafl's Viking strategy board and playing pieces",
    color: "stone",
    tags: ["Unity", "Strategy", "Local multiplayer"],
    repository: "Tafl",
    repositoryLabel: "View project archive",
    status: "Discontinued prototype",
    description:
      "A Unity version of Hnefatafl, a Viking strategy board game, with local multiplayer.",
    overview:
      "A Unity adaptation of Hnefatafl, originally planned for iOS and Android. Development stopped after playtesting, before an official release. A compiled Windows build remains available.",
    details: [
      "Adapted Hnefatafl's king-and-pawn movement and board rules.",
      "Built a local multiplayer experience.",
      "Used playtesting feedback to evaluate the game before release.",
    ],
    note: "The project was discontinued and never officially released. The original source is lost, online multiplayer servers are offline, and the archive contains a compiled Windows build. Art assets belong to their respective Unity Asset Store authors.",
  },
  {
    slug: "shopping-cart",
    name: "Shopping Cart",
    category: "Web",
    type: "Web application",
    tags: ["JavaScript", "PHP"],
    repository: "shopping_cart",
    status: "Learning project",
    description:
      "A storefront and shopping-cart project built with JavaScript and PHP.",
    overview:
      "An earlier web project implementing a storefront and shopping cart in JavaScript and PHP.",
    details: [
      "JavaScript and PHP web-development practice.",
      "Storefront and shopping-cart implementation.",
    ],
    note: "Source code is available on GitHub. There is no hosted demo.",
  },
  {
    slug: "survey-engine",
    name: "Survey Engine",
    category: "Web",
    type: "Web application",
    tags: ["JavaScript", "PHP"],
    repository: "survey-engine",
    status: "Learning project",
    description:
      "A survey application written in PHP and JavaScript.",
    overview:
      "An earlier web project implementing a survey engine in PHP and JavaScript.",
    details: [
      "PHP and JavaScript implementation.",
      "Survey-engine web-development practice.",
    ],
    note: "Source code is available on GitHub. There is no hosted demo.",
  },
];
