export default function Container({ children }) {
  const styles = (
    <style jsx>{`
      .container {
        margin: 0 auto;
        padding-left: var(--padding-sides-default);
        padding-right: var(--padding-sides-default);
      }
    `}</style>
  );
  return (
    <div className="container">
      {styles}
      {children}
    </div>
  );
}
