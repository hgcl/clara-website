export default function BigStat({ stat, label, className }) {
  return (
    <div className={`${className} flex flex-col justify-start mt-8 mb-6`}>
      <div className="font-serif text-7xl text-accent leading-none">{stat}</div>
      <div className="comment relative -top-2">{label}</div>
    </div>
  );
}
