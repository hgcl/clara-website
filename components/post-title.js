export default function PostTitle({ children, className }) {
  const styles = (
    <style jsx>{`
      h1 {
        letter-spacing: -0.05em;
      }
    `}</style>
  );
  return (
    <h1
      className={`${className} text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-tight md:leading-none text-center md:text-left mb-12`}
    >
      {styles}
      {children}
    </h1>
  );
}
