export const getFavorites = (favoritesData) => {
  const favoritesList = favoritesData.map((item) => {
    const { link, title, description, category, best } = item;

    return {
      link,
      title,
      description,
      category,
      best,
    };
  });

  return favoritesList;
};
