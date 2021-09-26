import Container from "./container";
import MediaGrid from "./MediaGrid";
import RecipePostPreview from "./RecipePostPreview";

export default function MoreRecipes({ posts }) {
  const styles = <style jsx>{``}</style>;
  return (
    <Container>
      <MediaGrid bigGrid>
        {styles}
        {posts.map((post) => (
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
          />
        ))}
      </MediaGrid>
    </Container>
  );
}
