// Formik
import { Form, FormikProvider, useFormik } from "formik";
import { userSchema } from "providers/yup";

// types
import type { NextPage } from "next";

// Components
import { Button, Grid, Stack, Typography } from "@mui/material";
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
        <Stack bgcolor="#e4e4e4" py="30px" alignItems="center" justifyContent="flex-start">
          <Typography
            sx={{
              fontSize: { xs: "18px", md: "20px", lg: "24px" }
            }}
          >
            Register
          </Typography>
          <Grid
            container
            justifyContent={{ xs: "center", md: "space-around" }}
            mb={{ xs: "8vw", sm: "6vw", md: "5vw" }}
            alignItems="center"
            flexDirection={{ xs: "column", md: "row" }}
            sx={{
              "& .MuiGrid-item": {
                width: { xs: "80%", md: "auto" }
              }
            }}
          >
            <Grid item xs={8} md={5}>
              <FirstInputs />
            </Grid>
            <Grid item xs={8} md={5}>
              <SecondPartInputs />
            </Grid>
          </Grid>
          <Button
            type="submit"
            sx={{
              width: { xs: "100px", md: "130px" }
            }}
          >
            Submit
          </Button>
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default Home;
