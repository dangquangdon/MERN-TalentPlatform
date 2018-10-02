const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, { min: 10, max: 3000 })) {
    errors.text = "Post must be between 10 and 3000 characters";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "text field is required";
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
