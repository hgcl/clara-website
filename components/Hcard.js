export default function Hcard() {
  const styles = (
    <style jsx>{`
      .h-card {
        display: none;
      }
    `}</style>
  );
  return (
    <div rel="author" className="p-author h-card" href="https://clarale.com">
      {styles}

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
      <a className="u-url u-uid" href="https://clarale.com">
        Personal website
      </a>
      <a className="u-url" rel="me" href="https://twitter.com/clara__le">
        Twitter
      </a>
      <a className="u-url" rel="me" href="https://github.com/hgcl">
        GitHub
      </a>
    </div>
  );
}
