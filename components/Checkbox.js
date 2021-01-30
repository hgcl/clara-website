export default function Checkbox({ value, onChange, label, className }) {
  return (
    <label className={className}>
      <input
        className="h-4 w-4"
        type="checkbox"
        value={value}
        onChange={onChange}
      />
      <span className="ml-2 all-small-caps">{label}</span>
    </label>
  );
}
