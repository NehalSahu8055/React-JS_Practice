const Validation = (value) => {
  let error = {};

  if (value.Fullname === "") {
    error.Fullname = "Fullname is required";
  }
  if (value.Mobile === "") {
    error.Mobile = "Mobile is required";
  }
  if (value.Pincode === "") {
    error.Pincode = "Pincode is required";
  }
  if (value.Address === "") {
    error.Address = "Address is required";
  }
  if (value.Section === "") {
    error.Section = "section is required";
  }
  if (value.Landmark === "") {
    error.Landmark = "Landmark is required";
  }
  if (value.Town === "") {
    error.Town = "Town is required";
  }

  return { error };
};

export default Validation;
