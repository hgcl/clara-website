export default function PostTitle({ children, className }) {
  return (
    <h1
      className={`${className} capitalize text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-tight md:leading-none text-center md:text-left mb-12`}
    >
      {children}
    </h1>
  );
}
