export default function Column({ children, double, lastColumn, className }) {
  const styles = (
    <style jsx>{`
      .flex-1 {
        flex: 1 1 0%;
      }
      .flex-2 {
        flex: 2 2 0%;
      }
    `}</style>
  );
  return (
    <div className={`${className} ${double ? "flex-2" : "flex-1"}`}>
      {styles}
      {children}
    </div>
  );
}
