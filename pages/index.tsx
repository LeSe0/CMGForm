// Formik
import { Form, FormikProvider, useFormik } from "formik";

// Components
import type { NextPage } from "next";
import { Button, Grid } from "@mui/material";
import FirstInputs from "components/form/FirstInputs";
import { firstPartInputsSchema, secondPartInputsSchema } from "providers/yup";
import SecondPartInputs from "components/form/SecondPartInputs";

const Home: NextPage = () => {
  const formikFirst = useFormik({
    initialValues: {
      username: "",
      password: "",
      repeatPassword: "",
      firstname: "",
      lastname: "",
      city: "",
    },
    onSubmit: (values, { resetForm }) => {
      resetForm();
    },
    validationSchema: firstPartInputsSchema(),
    validateOnChange: false,
  });

  const formikSecond = useFormik({
    initialValues: {
      phone: "",
      country: "",
      address: "",
      email: "",
      day: "",
      month: "",
      year: "",
      parentId: "",
    },
    onSubmit: (values, { resetForm }) => {
      resetForm();
    },
    validationSchema: secondPartInputsSchema(),
    validateOnChange: false,
  });

  return (
    <form
      onSubmit={() => {
        formikFirst.handleSubmit();
        formikSecond.handleSubmit();
      }}
    >
      <Grid
        container
        bgcolor="#e4e4e4"
        justifyContent={{ xs: "center", md: "space-around" }}
        alignItems="center"
        flexDirection={{ xs: "column", md: "row" }}
      >
        <FormikProvider value={formikFirst}>
          <Grid item xs={8} md={5}>
            <FirstInputs />
          </Grid>
        </FormikProvider>
        <Grid item xs={8} md={5}>
          <FormikProvider value={formikSecond}>
            <SecondPartInputs />
          </FormikProvider>
        </Grid>
      </Grid>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Home;
