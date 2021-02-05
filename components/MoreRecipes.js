import React, { useState } from "react";

import Container from "./container";
import RecipePostPreview from "./RecipePostPreview";

import DropdownButton from "../components/DropdownButton";
import SettingsIcon from "../public/icons/SettingsIcon";

export default function MoreRecipes({ posts }) {
  // Unable to customize tailwindcss grid style with auto-fill. Adding it here instead:
  const gridStyle = {
    gridTemplateColumns: "repeat(auto-fill, minmax(14rem, 1fr))",
  };
  // filters
  const [openSettings, setSettings] = useState(false);
  const [dietFilter, setDiet] = useState(0);
  const dietDropdown = [
    { name: "All", value: 0 },
    { name: "Vegetarian", value: "vegetarian" },
    { name: "Vegan", value: "vegan" },
  ];
  const [seasonFilter, setSeason] = useState(0);
  const seasonDropdown = [
    { name: "All", value: 0 },
    { name: "Winter", value: "winter" },
    { name: "Spring", value: "spring" },
    { name: "Summer", value: "summer" },
    { name: "Autumn", value: "autumn" },
  ];
  const [durationFilter, setDuration] = useState(0);
  const durationDropdown = [
    { name: "All", value: 0 },
    { name: "< 45min", value: 1 },
    { name: "45–60min", value: 2 },
    { name: "> 60min", value: 3 },
  ];
  const [difficultyFilter, setDifficulty] = useState(0);
  const difficultyDropdown = [
    { name: "All", value: 0 },
    { name: "Easy", value: 1 },
    { name: "Medium", value: 2 },
    { name: "Hard", value: 3 },
  ];

  const dropdownList = (className) => (
    <>
      <DropdownButton
        className={className}
        title="Diet"
        filter={dietFilter}
        setHook={setDiet}
        itemsArray={dietDropdown}
        widthButton="w-24"
        widthModal="w-28"
      />
      <DropdownButton
        className={className}
        title="Season"
        filter={seasonFilter}
        setHook={setSeason}
        itemsArray={seasonDropdown}
      />
      <DropdownButton
        className={className}
        title="Difficulty"
        filter={difficultyFilter}
        setHook={setDifficulty}
        itemsArray={difficultyDropdown}
        widthButton="w-24"
        widthModal="w-28"
      />
      <DropdownButton
        className={className}
        title="Duration"
        filter={durationFilter}
        setHook={setDuration}
        itemsArray={durationDropdown}
        widthButton="w-24"
        widthModal="w-28"
      />
    </>
  );
  return (
    <Container>
      <div className="flex flex-row flex-wrap">
        {dropdownList("hidden xs:block")}
        <div className="flex flex-row justify-start w-full xs:w-auto">
          <button
            onClick={() => setSettings(!openSettings)}
            className="xs:hidden"
          >
            <SettingsIcon />
          </button>
          <div className="xs:hidden w-full" />
        </div>
        {/* Open generic settings dropdown: */}
        {openSettings && (
          <div className="xs:hidden my-4">
            <div
              className="z-10 absolute -top-8 left-0 h-full w-full"
              onClick={() => setSettings(!openSettings)}
            />
            <div className="z-10 relative w-full">{dropdownList("")}</div>
          </div>
        )}
      </div>
      <div className="grid gap-y-6 gap-x-8 mt-6" style={gridStyle}>
        {posts
          // Diet filter
          .filter((post) =>
            dietFilter ? post.categories.includes(dietFilter) : post
          )
          // Season filter
          .filter((post) =>
            seasonFilter ? post.tags.includes(seasonFilter) : post
          )
          // Duration filter
          .filter((post) =>
            durationFilter ? post.duration == durationFilter : post
          )
          // Difficulty filter
          .filter((post) =>
            difficultyFilter ? post.difficulty == difficultyFilter : post
          )
          .map((post) => (
            <RecipePostPreview
              type="isRecipe"
              categories={post.categories}
              coverImage={post.coverImage}
              date={post.date}
              difficulty={post.difficulty}
              duration={post.duration}
              excerpt={post.excerpt}
              favorite={post.favorite}
              key={post.slug}
              slug={post.slug}
              tags={post.tags}
              title={post.title}
              toBeTested={post.toBeTested}
            />
          ))}
      </div>
    </Container>
  );
}
