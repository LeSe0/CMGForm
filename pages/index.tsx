// Formik
import { Form, FormikProvider, useFormik } from "formik";
import { userSchema } from "../providers/yup";

// Components
import type { NextPage } from "next";
import { Grid, Stack } from "@mui/material";
import CustomInput from "components/common/CustomInput";

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
      parentId: "",
    },
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
    onReset: (values) => {
      alert(values);
    },
    validationSchema: userSchema(),
  });

  const { handleSubmit } = formik;
  return (
    <FormikProvider value={formik}>
      <Form onSubmit={handleSubmit}>
        <Grid container bgcolor="#e4e4e4" justifyContent="space-between">
          <Grid item>
            <Stack>
              <CustomInput fieldName="username" placeholder="Username" />
              <CustomInput fieldName="password" placeholder="Password" />
              <CustomInput
                fieldName="repeatPassword"
                placeholder="Repeat Password"
              />
              <CustomInput fieldName="firstname" placeholder="First Name" />
              <CustomInput fieldName="lastname" placeholder="Last Name" />
              <CustomInput
                fieldName="repeatPassword"
                placeholder="Repeat Password"
              />
            </Stack>
          </Grid>
          <Grid item>
            <Stack>
              <CustomInput fieldName="parentId" placeholder="Referral ID" />
            </Stack>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
};

export default Home;
