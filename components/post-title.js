export default function PostTitle({ children, className }) {
  const styles = (
    <style jsx>{`
      h1 {
        text-align: center;
      }
      @media screen and (min-width: 768px) {
        h1 {
          text-align: left;
        }
      }
    `}</style>
  );
  return (
    <h1 className={className}>
      {styles}
      {children}
    </h1>
  );
}
