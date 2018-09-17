const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateEduInput(data) {
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.studyfield = !isEmpty(data.studyfield) ? data.studyfield : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.school)) {
    errors.school = "School field is required";
  }
  if (Validator.isEmpty(data.degree)) {
    errors.degree = "degree field is required";
  }
  if (Validator.isEmpty(data.from)) {
    errors.from = "From date field is required";
  }
  if (Validator.isEmpty(data.studyfield)) {
    errors.studyfield = "studyfield date field is required";
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
