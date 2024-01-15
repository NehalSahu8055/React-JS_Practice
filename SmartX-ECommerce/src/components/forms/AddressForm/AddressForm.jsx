import React, { useEffect, useState } from "react";
import { Input } from "../component/Input";
import Validation from "../component/validation";
function AddressForm() {
  // initial State of the formData
  const formData = {
    Fullname: "",
    Mobile: "",
    Pincode: "",
    Address: "",
    section: "",
    Landmark: "",
    Town: "",
    State: "",
  };
  const [initialState, setInitialState] = useState(formData);
  const [errors, setErrors] = useState({});
  // The formOutput holds individual data of the formData
  const formOutput = [
    {
      id: 1,
      label: "Full Name [first and lastname]",
      name: "Fullname",
      type: "text",
      placeholder: "john Doe",
      required: true,
      errors: errors.Fullname,
    },
    {
      id: 2,
      label: "Mobile Number",
      name: "Mobile",
      type: "tel",
      placeholder: "mobile number",
      required: true,
      errors: errors.Mobile,
    },
    {
      id: 3,
      label: "Pincode",
      name: "Pincode",
      type: "text",
      placeholder: "6 digit [0-9] PIN code",
      required: true,
      errors: errors.Pincode,
    },
    {
      id: 4,
      label: "Address",
      name: "Address",
      type: "text",
      placeholder: "Address",
      required: true,
      errors: errors.Address,
    },
    {
      id: 5,
      label: "Section,Area,Street,Village",
      name: "Section",
      type: "text",
      placeholder: "Section",
      required: true,
      errors: errors.Section,
    },
    {
      id: 6,
      label: "Landmark",
      name: "Landmark",
      type: "text",
      placeholder: "eg. near university hospital",
      required: true,
      errors: errors.Landmark,
    },
    {
      id: 7,
      label: "Town/City",
      name: "Town",
      type: "text",
      placeholder: "Town",
      required: true,
      errors: errors.Town,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInitialState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  useEffect(() => {
    function handleSubmit(e){
      e.preventDefault();
      const validationError = Validation(initialState);
      setErrors(validationError);
    };
    handleSubmit();
  }, []);

  return (
    <div className=" mx-auto max-w-[600px] bg-slate-100 px-2 pt-[4rem]">
      <h2 className="text-xl text-gray-700 ">Enter the New Delivery address</h2>
      <form>
        {formOutput.map((output) => (
          <Input
            key={output.id}
            {...output}
            value={initialState[output.name]}
            onChange={handleChange}
          />
        ))}
        <button
          onClick={handleSubmit}
          className="m-1 rounded border border-green-800 p-2 text-green-500 shadow-lg hover:bg-green-500 hover:text-slate-50"
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default AddressForm;
