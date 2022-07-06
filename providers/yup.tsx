import * as Yup from "yup";

export const userSchema = () => {
  return Yup.object().shape({
    username: Yup.string()
      .matches(/^[a-z,A-Z,0-9"_“]+$/g, "Username can include only latin letters, and numbers")
      .min(2, "username minimum length is 2 symbols")
      .max(20, "Username maximum length is 20 symbols")
      .required("Username must be filled"),
    password: Yup.string().min(8, "Password minimum length is 8 symbols").required("Password must be filled"),
    repeatPassword: Yup.string()
      .min(8, "Password minimum length is 8 symbols")
      .required("")
      .oneOf([Yup.ref("password"), null], "This field must be equal password"),
    firstname: Yup.string()
      .matches(/^[a-z,A-Z,0-9" "]+$/g, "First name can include only latin letters, and numbers")
      .min(2, "First name minimum length is 2 symbols")
      .max(20, "First name maximum length is 20 symbols")
      .required("First name must be filled"),
    lastname: Yup.string()
      .matches(/^[a-z,A-Z,0-9" "]+$/g, "Last name can include only latin letters, and numbers")
      .min(2, "Last name minimum length is 2 symbols")
      .max(20, "Last name maximum length is 20 symbols")
      .required("Last name must be filled"),
    city: Yup.string().max(20, "City name maximum length is 20 symbols").required("This field is required"),
    phone: Yup.string().required("Phone is required"),
    country: Yup.string().max(20, "Country name maximum length is 20 symbols").required("Country is required"),
    address: Yup.string().max(20, "Address maximum length is 20 symbols").required("Address is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    day: Yup.string().required("Day is required"),
    month: Yup.string().required("Month is required"),
    year: Yup.string().required("Year is required"),
    parentId: Yup.string()
      .max(20, "Parent Id maximum length is 20 sybmols")
      .matches(/^\d+$/, "Parent Id is invalid")
      .required("Parent Id is required")
  });
};
