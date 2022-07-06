// Formik
import { Form, FormikProvider, useFormik } from "formik";
import { userSchema } from "providers/yup";

// types
import type { NextPage } from "next";

// Components
import { Button, Grid } from "@mui/material";
import FirstInputs from "components/form/FirstInputs";
import SecondPartInputs from "components/form/SecondPartInputs";

const Home: NextPage = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      repeatPassword: "",
      firstname: "",
      lastname: "",
      city: "",
      phone: "",
      country: "",
      address: "",
      email: "",
      day: "",
      month: "",
      year: "",
      parentId: ""
    },
    onSubmit: () => {},
    validationSchema: userSchema(),
    validateOnChange: false,
    validateOnBlur: false,
    validateOnMount: false
  });

  const { handleSubmit } = formik;

  return (
    <FormikProvider value={formik}>
      <Form onSubmit={handleSubmit}>
        <Grid
          container
          bgcolor="#e4e4e4"
          justifyContent={{ xs: "center", md: "space-around" }}
          alignItems="center"
          flexDirection={{ xs: "column", md: "row" }}
        >
          <Grid item xs={8} md={5}>
            <FirstInputs />
          </Grid>
          <Grid item xs={8} md={5}>
            <SecondPartInputs />
          </Grid>
        </Grid>
        <Button type="submit">Submit</Button>
      </Form>
    </FormikProvider>
  );
};

export default Home;
