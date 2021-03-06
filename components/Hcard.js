export default function Hcard() {
  return (
    <div
      rel="author"
      className="p-author h-card hidden"
      href="https://clarale.com"
    >
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
    </div>
  );
}
