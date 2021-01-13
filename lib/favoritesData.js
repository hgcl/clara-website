export const categories = {
  "digital-garden": "Digital Garden",
  cooking: "Cooking",
};

export const favoritesData = [
  {
    link: "https://maggieappleton.com/garden/",
    title: "Maggie Appleton",
    description: "Maggie Appleton's illustration-based digital garden.",
    category: [categories["digital-garden"],
    best: false,
  },
  {
    link: "https://obsidian.md/",
    title: "Obsidian.md",
    description: "Create your personal knowledge base with Markdown files.",
    category: [categories["digital-garden"]],
    best: false,
  },
  {
    link: "https://www.youtube.com/c/CuisineAndChill/",
    title: "Cuisine And Chill (Youtube)",
    description: "My favorite cooking channel on Youtube (in French).",
    category: [categories.cooking],
    best: true,
  },
  {
    link: "https://www.youtube.com/c/mynameisandong/",
    title: "My Name Is Andong (Youtube)",
    description: "One of my favorite cooking channels on Youtube.",
    category: [categories.cooking],
    best: false,
  },
];
