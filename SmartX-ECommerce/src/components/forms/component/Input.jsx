export const Input = (props) => {
  const { id, error, label, value, onChange, ...allProps } = props;
  return (
    <fieldset className="mb-3 flex flex-col gap-y-1">
      <legend>{label}</legend>
      <input {...allProps} value={value} onChange={onChange} />
      <span
        style={{
          color: "red",
          fontSize: "10px",
          float: "right",
          fontStyle: "italic",
        }}
      >
        {error}
      </span>
    </fieldset>
  );
};
