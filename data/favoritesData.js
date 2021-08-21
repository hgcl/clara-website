export const categories = {
  berlin: {
    title: "Berlin",
    anchor: "berlin",
  },
  blogroll: {
    title: "Blogroll",
    anchor: "blogroll",
  },
  cooking: {
    title: "Cooking",
    anchor: "cooking",
  },
  dataViz: {
    title: "Data Visualization",
    anchor: "data-visualization",
  },
  digitalGarden: {
    title: "Digital Garden",
    anchor: "digital-garden",
  },
  game: {
    title: "Game",
    anchor: "game",
  },
  map: {
    title: "Map",
    anchor: "map",
  },
  map: {
    title: "Map",
    anchor: "map",
  },
  newsletter: {
    title: "Newsletter",
    anchor: "newsletter",
  },
  privacy: {
    title: "Privacy",
    anchor: "privacy",
  },
  productivity: {
    title: "Productivity",
    anchor: "productivity",
  },
  techieTool: {
    title: "Techie Tool",
    anchor: "techie-tool",
  },
  thinking: {
    title: "Thinking",
    anchor: "thinking",
  },
  travel: {
    title: "Travel",
    anchor: "travel",
  },
  typography: {
    title: "Typography",
    anchor: "typography",
  },
  writing: {
    title: "Writing",
    anchor: "writing",
  },
};

export const favoritesData = [
  // >A
  {
    link: "https://notes.andymatuschak.org/About_these_notes",
    title: "Andy Matuschak",
    description: "Is it still necessary to talk about the digital garden guru?",
    category: [categories.digitalGarden.anchor],
    best: false,
  },
  // >B
  {
    link: "https://beautifulwebtype.com/",
    title: "Beautiful Web Type",
    description: "A curated collection of open-source typefaces and pairings",
    category: [categories.typography.anchor],
    best: false,
  },
  {
    link: "https://berlinfoodstories.com/",
    title: "Berlin Food Stories",
    description:
      "Per shares amazing food and restaurants recommendations in Berlin.",
    category: [categories.berlin.anchor],
    best: false,
  },
  // >C
  {
    link: "https://www.horsepaste.com/",
    title: "Codenames",
    description:
      "I love codenames and have the actual game at home. This online version works great for remote play.",
    category: [categories.game.anchor],
    best: false,
  },
  {
    link: "https://www.youtube.com/c/CuisineAndChill/",
    title: "Cuisine And Chill (in French)",
    description:
      "My number one cooking channel on Youtube—I have watched all of his videos and ask for more",
    category: [categories.cooking.anchor],
    best: true,
  },
  // >D
  {
    link: "https://darkreader.org/",
    title: "Dark Reader",
    description:
      "Browser extension to enable dark mode on websites not supporting dark mode—this saved my eyes so many times",
    category: [categories.techieTool.anchor],
    best: true,
  },
  {
    link: "https://www.densediscovery.com/",
    title: "Dense Discovery",
    description:
      "Kai's “curation newsletter” about design, productivity and society—love the personal intros and Worthy Five sections",
    category: [categories.newsletter.anchor],
    best: false,
  },
  {
    link: "https://dixitgame.vercel.app/",
    title: "Dixit",
    description:
      "Dixit might be one of my favorite board games ever. Thank God, Robin created this awesome online version.",
    category: [categories.game.anchor],
    best: true,
  },
  {
    link: "https://duckduckgo.com/",
    title: "DuckDuckGo",
    description:
      "Searching for an alternative to Google Search? The privacy-friendly DuckDuckGo shouldn't need an introduction anymore.",
    category: [categories.privacy.anchor],
    best: false,
  },
  // >E
  {
    link: "https://www.eaudepoisson.com/",
    title: "eau de poisson (in French)",
    description:
      "Best travel blog on the internet! Not biased at all, even though it's mine and Robin's. Also, don't pay attention to the very low new post frequency. And the coffee obsession.",
    category: [categories.travel.anchor],
    best: false,
  },
  // >F
  {
    link: "http://feltron.com/",
    title: "Feltron annual reports",
    description:
      "Annual reports by designer Nicholas Felton (from 2005 to 2014), personalized data visualization at its finest",
    category: [categories.dataViz.anchor],
    best: false,
  },
  {
    link: "https://fontpair.co/",
    title: "FontPair",
    description: "Collection of Google fonts pairings",
    category: [categories.typography.anchor],
    best: false,
  },
  {
    link: "https://fontsinuse.com/",
    title: "Fonts in Use",
    description: "A collaborative archive of typefaces used in real life",
    category: [categories.typography.anchor],
    best: false,
  },
  // >G
  {
    link: "https://garticphone.com/",
    title: "Gartic Phone",
    description:
      "Playing online is not just for gamers. Gartic Phone is the love child of Telephone and Pictionary—super fun and accessible!",
    category: [categories.game.anchor],
    best: false,
  },
  // >H
  {
    link: "http://www.hemingwayapp.com/",
    title: "Hemingway Editor",
    description: "Online editor for simpler, bolder and clearer writing",
    category: [categories.writing.anchor],
    best: false,
  },
  {
    link: "https://dev.w3.org/html5/html-author/charref",
    title: "HTML Character Reference Chart",
    description:
      "Ever wondered how to write a character in HTML? Here is a full list of them that I just can't stop looking at.",
    category: [categories.techieTool.anchor],
    best: false,
  },
  {
    link: "https://100r.co/",
    title: "Hundred Rabbits",
    description:
      "When I think about inspiring people, I think about Rekka and Devine, the creators of Hundred Rabbits. They live off the grid on a sailboat, have a plant-based cooking blog, create open-source projects... Do I need to go on?",
    category: [categories.travel.anchor, categories.blogroll.anchor],
    best: false,
  },
  {
    link: "https://hypothes.is/",
    title: "Hypothesis",
    description:
      "Highlight and annotate articles online—super cool open-source project.",
    category: [categories.techieTool.anchor],
    best: true,
  },
  // >I
  {
    link: "https://ironicsans.substack.com/",
    title: "Ironic Sans",
    description:
      "This newsletter always surprises me with random—but thoroughly researched—trivia.",
    category: [categories.newsletter.anchor],
    best: false,
  },
  // >J
  // >K
  // >L
  {
    link: "https://languagetool.org/",
    title: "LanguageTool",
    description:
      "A multilingual browser extension (and more) for grammar, style and spell checking—and it's open source",
    category: [categories.writing.anchor, categories.techieTool.anchor],
    best: false,
  },
  // >M
  {
    link: "https://www.youtube.com/user/Maangchi",
    title: "Maangchi",
    description:
      "If you are into Korean food, you certainly know Maangchi—the Korean mama that you always wished you had.",
    category: [categories.cooking.anchor],
    best: false,
  },
  {
    link: "https://maggieappleton.com/garden/",
    title: "Maggie Appleton",
    description: "Maggie Appleton's illustration-based digital garden",
    category: [categories.digitalGarden.anchor],
    best: false,
  },
  {
    link: "https://www.youtube.com/c/mynameisandong/",
    title: "My Name Is Andong",
    description:
      "One of my favorite cooking channels on Youtube—informative, funny and dynamic",
    category: [categories.cooking.anchor],
    best: false,
  },
  // >N
  {
    link: "https://nordvpn.com/",
    title: "Nord VPN",
    description:
      "If you don't have a VPN yet, it might be time to think about getting one. And if you don't want to do the thinking part, just get Nord VPN.",
    category: [categories.privacy.anchor],
    best: false,
  },
  {
    link: "https://www.notion.so/",
    title: "Notion",
    description:
      "I completely adopted this online platform to organize my personal and professional life. I would love to find an open-source alternative, but there is nothing comparing to Notion yet.",
    category: [categories.productivity.anchor],
    best: false,
  },
  // >O
  {
    link: "https://obsidian.md/",
    title: "Obsidian.md",
    description:
      "Open-source software enabling you to create your personal knowledge base with Markdown files",
    category: [categories.digitalGarden.anchor],
    best: true,
  },
  {
    link: "https://omglord.com/",
    title: "OMGLORD",
    description:
      "Designer Gabby Lord shares amazing resources on her website and through her newsletter.",
    category: [categories.blogroll.anchor],
    best: false,
  },
  // >P
  {
    link: "https://practicaltypography.com/",
    title: "Practical Typography",
    description:
      "It's not really a website, it's not really a book. One thing is certain: it is a treasure chest of typographic knowledge.",
    category: [categories.typography.anchor],
    best: false,
  },
  // >Q
  // >R
  // >S
  {
    link: "https://saltsearsavor.substack.com",
    title: "Salt Sear Savor",
    description:
      "Luciano is passionate about cooking and understanding what happens behind a recipe instructions. Each new post is instructive and a pleasure to read!",
    category: [categories.cooking.anchor, categories.newsletter.anchor],
    best: false,
  },
  // >T
  {
    link: "https://github.com/tailwindlabs/tailwindcss-typography/",
    title: "Tailwind CSS Typography",
    description:
      "If you use Tailwind CSS for styling websites, get its typography extension to automatically implement typographic features to your HTML.",
    category: [categories.typography.anchor],
    best: false,
  },
  {
    link: "https://gjeuken.github.io/telewave/",
    title: "Telewave",
    description:
      "Wavelength is a social party game that fosters conversations. Telewave is its open-source online spin-off.",
    category: [categories.game.anchor],
    best: false,
  },
  {
    link: "https://www.theydrawandtravel.com/",
    title: "They draw and travel",
    description:
      "Collection of illustrated travel map created by artists from around the world",
    category: [categories.map.anchor],
    best: false,
  },
  // >U
  // >V
  // >W
  {
    link: "https://waitbutwhy.com/",
    title: "Wait But Why",
    description:
      "Tim Urban is one of the best thinkers on the internet. He brings complex and fascinating topics within everyone's reach through long form blog posts—sometimes more like entire books.",
    category: [categories.thinking.anchor],
    best: true,
  },
  // >X
  // >Y
  // >Z
];
