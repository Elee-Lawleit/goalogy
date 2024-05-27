import * as yup from "yup";

const profileUpdateForm = yup.object().shape({
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  phone: yup.string().matches(/^[0-9]+$/, "Phone number is not valid"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  country: yup.string().required("Country is required"),
  file: yup.mixed().test("fileSize", "The file is too large", (value) => {
    if (!value.length) return true;
    return value[0].size <= 2000000;
  }),
  streetaddress: yup.string().required("Street address is required"),
  city: yup.string().required("City is required"),
  region: yup.string().required("State/Province is required"),
  postalCode: yup.string().required("ZIP/Postal code is required"),
  about: yup.string().max(500, "About section must be 500 characters or less"),
});

export default profileUpdateForm;
