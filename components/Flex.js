export default function Flex({
  children,
  flexGap,
  earlyBreakpoint,
  className,
}) {
  const styles = (
    <style jsx>{`
      .flex {
        display: flex;
        flex-direction: column;
      }
      .flex-gap {
        gap: 0.5rem;
      }
      @media screen and (min-width: 768px) {
        .flex {
          flex-direction: row;
        }
      }
    `}</style>
  );
  return (
    <div className={`flex ${flexGap && "flex-gap"} ${className}`}>
      {styles}
      {children}
    </div>
  );
}
