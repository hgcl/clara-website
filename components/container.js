export default function Container({ children }) {
  const styles = (
    <style jsx>{`
      .container {
        margin: 0 auto;
        padding: 0 2rem;
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
