export default function Hcard() {
  return (
    <section className="h-card hidden">
      {/* About me */}
      <span className="p-name">Clara Le</span>
      <span className="p-note">Polymath, currently working as a designer.</span>

      {/* Profile picture */}
      <img
        className="u-photo"
        alt="Yep, that's my face."
        src="/assets/clara_20180514_132853_small.jpg"
      />

      {/* Links */}
      <a className="u-url u-uid" href="https://clarale.com"></a>
      <a className="u-url" rel="me" href="https://twitter.com/clara__le"></a>
      <a className="u-url" rel="me" href="https://github.com/hgcl"></a>

      {/* Categories */}
      <span className="p-category">Digital Garden</span>
      <span className="p-category">Design</span>
      <span className="p-category">Exploring</span>
      <span className="p-category">Cooking and DIY Projects</span>
      <span className="p-category">Sci-fi Books</span>
    </section>
  );
}
