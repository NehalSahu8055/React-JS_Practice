import React, { useState } from "react";
import { Input } from "../component/Input";

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
  // The formOutput holds individual data of the formData
  const formOutput = [
    {
      id: 1,
      label: "Full Name [first and lastname]",
      name: "fullname",
      type: "text",
      placeholder: "john Doe",
    },
    {
      id: 2,
      label: "Mobile Number",
      name: "Mobile",
      type: "tel",
      placeholder: "mobile",
      error: "may be helpful during delivery",
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

  return (
    <div className="size-[80vw] translate-y-[4rem]">
      <h2 className="text-xl text-gray-700 ">Enter the New Delivery address</h2>
      <form>
        {formOutput.map((output) => (
          <Input
            key={output.id}
            {...output}
            value={initialState[formData.name]}
            onChange={handleChange}
          />
        ))}
      </form>
    </div>
  );
}

export default AddressForm;
