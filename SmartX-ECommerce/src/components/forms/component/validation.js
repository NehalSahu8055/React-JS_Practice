function Validation(value) {
  let errors = {};

  if (!value.Fullname) {
    errors.Fullname = "Fullname is required";
  }
  if (!value.Mobile) {
    errors.Mobile = "Mobile is required";
  }
  if (!value.Pincode) {
    errors.Pincode = "Pincode is required";
  }
  if (!value.Address) {
    errors.Address = "Address is required";
  }
  if (!value.Section) {
    errors.Section = "section is required";
  }
  if (!value.Landmark) {
    errors.Landmark = "Landmark is required";
  }
  if (!value.Town) {
    errors.Town = "Town is required";
  }

  return errors;
}

export default Validation;
