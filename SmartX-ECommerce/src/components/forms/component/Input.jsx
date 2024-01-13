export const Input = (props) => {
  const { id, error, label, value, required, onChange, ...allProps } = props;
  return (
    <fieldset className="my-3 flex flex-col gap-y-1">
      <legend>{label}</legend>
      <input
        {...allProps}
        value={value}
        onChange={onChange}
        className="placeholder:text-100-gray h-[3rem] rounded border-0 p-1 text-lg text-slate-500 outline-0"
      />
      {required && (
        <span
          style={{
            color: "red",
            fontSize: ".7rem",
            float: "right",
            fontStyle: "italic",
          }}
        >
          {error}
        </span>
      )}
    </fieldset>
  );
};
