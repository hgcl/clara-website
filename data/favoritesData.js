export const categories = {
  berlin: {
    title: "Berlin",
    anchor: "berlin",
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
  map: {
    title: "Map",
    anchor: "map",
  },
  techieTool: {
    title: "Techie Tool",
    anchor: "techie-tool",
  },
  thinking: {
    title: "Thinking",
    anchor: "thinking",
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
  {
    link: "https://notes.andymatuschak.org/About_these_notes",
    title: "Andy Matuschak",
    description: "Is it still necessary to talk about the digital garden guru?",
    category: [categories.digitalGarden.anchor],
    best: false,
  },
  {
    link: "https://berlinfoodstories.com/",
    title: "Berlin Food Stories",
    description:
      "Per shares amazing food and restaurants recommendations in Berlin",
    category: [categories.berlin.anchor],
    best: false,
  },
  {
    link: "https://www.youtube.com/c/CuisineAndChill/",
    title: "Cuisine And Chill (Youtube)",
    description: "My favorite cooking channel on Youtube (in French)",
    category: [categories.cooking.anchor],
    best: true,
  },
  {
    link: "https://darkreader.org/",
    title: "Dark Reader",
    description:
      "Browser extension to enable dark mode on websites not supporting dark mode—this saved my eyes so many times",
    category: [categories.techieTool.anchor],
    best: false,
  },
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
  {
    link: "http://www.hemingwayapp.com/",
    title: "Hemingway Editor",
    description: "Online editor for simpler, bolder and clearer writing",
    category: [categories.writing.anchor],
    best: false,
  },
  {
    link: "https://hypothes.is/",
    title: "Hypothesis",
    description:
      "Online tool for highlighting, annotating and sharing insights—super cool open-source project",
    category: [categories.techieTool.anchor],
    best: false,
  },
  {
    link: "https://languagetool.org/",
    title: "LanguageTool",
    description:
      "A multilingual browser extension (and more) for grammar, style and spell checking—and it’s open source",
    category: [categories.writing.anchor, categories.techieTool.anchor],
    best: false,
  },
  {
    link: "https://maggieappleton.com/garden/",
    title: "Maggie Appleton",
    description: "Maggie Appleton’s illustration-based digital garden",
    category: [categories.digitalGarden.anchor],
    best: false,
  },
  {
    link: "https://www.youtube.com/c/mynameisandong/",
    title: "My Name Is Andong (Youtube)",
    description: "One of my favorite cooking channels on Youtube",
    category: [categories.cooking.anchor],
    best: false,
  },
  {
    link: "https://obsidian.md/",
    title: "Obsidian.md",
    description:
      "Open-source software enabling you to create your personal knowledge base with Markdown files",
    category: [categories.digitalGarden.anchor],
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
  {
    link: "https://waitbutwhy.com/",
    title: "Wait But Why",
    description:
      "Tim Urban is one of the best thinkers on the internet. He brings complex and fascinating topics within everyone’s reach through long form blog posts—sometimes more like online books.",
    category: [categories.thinking.anchor],
    best: true,
  },
];
