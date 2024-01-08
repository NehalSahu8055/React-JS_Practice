export const Input = (props) => {
  const { id, error, label, value, onChange, ...allProps } = props;
  return (
    <fieldset className="mb-3 flex flex-col">
      <label>{label}</label>
      <input {...allProps} value={value} onChange={onChange} />
      <span>{error}</span>
    </fieldset>
  );
};
