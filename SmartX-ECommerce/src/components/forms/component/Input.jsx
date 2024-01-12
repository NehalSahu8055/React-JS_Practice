export const Input = (props) => {
  const { id, error, label, value, onChange, ...allProps } = props;
  return (
    <fieldset className="mb-3 flex flex-col gap-y-1">
      <legend>{label}</legend>
      <input {...allProps} value={value} onChange={onChange} />
      {error && <span>{error}</span>}
    </fieldset>
  );
};
