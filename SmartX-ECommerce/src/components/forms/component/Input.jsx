export const Input = (props) => {
  const { id, error, label, value, onChange, ...allProps } = props;
  return (
    <fieldset className="mb-3 flex flex-col gap-y-1">
      <legend>{label}</legend>
      <input {...allProps} value={value} onChange={onChange} />
      <span style={{ fontSize: "0.756rem", color: "red" }}>{error}</span>
    </fieldset>
  );
};

export const formOutput = [
  {
    id: 1,
    label: "Full Name [first and lastname]",
    name: "fullname",
    type: "text",
    placeholder: "john Doe",
    min: 6,
    required: true,
  },
  {
    id: 2,
    label: "Mobile Number",
    name: "Mobile",
    type: "tel",
    placeholder: "mobile",
    error: "may be helpful during delivery",
    required: true,
  },
  {
    id: 3,
    label: "Pincode",
    name: "Pincode",
    type: "text",
    placeholder: "6 digit [0-9] PIN code",
    max: 6,
    required: true,
  },
  {
    id: 4,
    label: "Address",
    name: "Address",
    type: "text",
    placeholder: "Address",
    required: true,
  },
  {
    id: 5,
    label: "Section,Area,Street,Village",
    name: "Section",
    type: "text",
    placeholder: "Section",
    required: true,
  },
  {
    id: 6,
    label: "Landmark",
    name: "Landmark",
    type: "text",
    placeholder: "eg. near university hospital",
    required: true,
  },
  {
    id: 7,
    label: "Town/City",
    name: "Town",
    type: "text",
    placeholder: "Town",
    required: true,
  },
];

