const Validation = (values) => {
  const error = {};

  if (!values.Fullname) {
    error.Fullname = "Fullname is required";
  }

  return { error };
};

export default Validation;
