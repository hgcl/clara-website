export default function Flex({ children, noFlexGap, className }) {
  const styles = (
    <style jsx>{`
      .flex {
        display: flex;
        flex-direction: column;
      }
      .flex-gap {
        gap: 1rem;
      }
      @media screen and (min-width: 768px) {
        .flex {
          flex-direction: row;
        }
      }
    `}</style>
  );
  return (
    <div className={`flex ${!noFlexGap && "flex-gap"} ${className}`}>
      {styles}
      {children}
    </div>
  );
}
