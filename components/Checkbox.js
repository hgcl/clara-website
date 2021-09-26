export default function Checkbox({ value, onChange, label }) {
  const styles = (
    <style jsx>{`
      .checkbox > span {
        display: inline-block;
        white-space: nowrap;
        margin: 0 0 1rem 0.2rem;
      }
    `}</style>
  );
  return (
    <label className="checkbox">
      {styles}
      <input type="checkbox" value={value} onChange={onChange} />
      <span className="comment">{label}</span>
    </label>
  );
}
