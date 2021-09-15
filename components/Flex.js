export default function Flex({ children, earlyBreakpoint, className }) {
  const styles = (
    <style jsx>{`
      .flex {
        display: flex;
        flex-direction: column;
      }
      @media screen and (min-width: 768px) {
        .flex {
          flex-direction: row;
        }
      }
    `}</style>
  );
  return (
    <div
      className={`flex flex-col ${
        earlyBreakpoint ? "lg:flex-row" : "md:flex-row"
      } ${className}`}
    >
      {styles}
      {children}
    </div>
  );
}
