export default function MediaGrid({ bigGrid, children }) {
  const styles = (
    <style jsx>{`
      .media-grid-small {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
        column-gap: 0.5rem;
        row-gap: 1rem;
      }
      .media-grid-big {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
        column-gap: 0.5rem;
        row-gap: 1rem;
      }
    `}</style>
  );

  return (
    <>
      <section className={bigGrid ? "media-grid-big" : "media-grid-small"}>
        {styles}
        {children}
      </section>
    </>
  );
}
