import * as Yup from "yup";

export const userSchema = () => {
  return Yup.object().shape({
    username: Yup.string()
      .matches(/^[a-z,A-Z,0-9"_“]+$/g, "")
      .min(2, "")
      .max(20, "")
      .required(""),
    password: Yup.string().min(8, "").required(""),
    repeatPassword: Yup.string()
      .min(8, "")
      .required("")
      .oneOf([Yup.ref("password"), null], ""),
    firstname: Yup.string()
      .matches(/^[a-z,A-Z,0-9" “]+$/g, "")
      .min(2, "")
      .max(20, "")
      .required(""),
    lastname: Yup.string()
      .matches(/^[a-z,A-Z,0-9" “]+$/g, "")
      .min(2, "")
      .max(20, "")
      .required(""),
    city: Yup.string().max(20, "").required(""),
    phone: Yup.string().required(""),
    country: Yup.string().max(20, "").required(""),
    address: Yup.string().max(20, "").required(""),
    email: Yup.string().email("").required(""),
    day: Yup.string().required(""),
    month: Yup.string().required(""),
    year: Yup.string().required(""),
    parentId: Yup.string().max(20, "").matches(/^\d+$/, "").required(""),
  });
};
