// Formik
import { Form, FormikProvider, useFormik } from "formik";
import { userSchema } from "providers/yup";

// Components
import type { NextPage } from "next";
import { Button, Grid, Stack } from "@mui/material";
import CustomInput from "components/common/CustomInput";
import DatePicker from "components/common/DatePicker";

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
    validationSchema: userSchema(),
    validateOnChange: false,
  });

  const { handleSubmit } = formik;
  return (
    <FormikProvider value={formik}>
      <Form onSubmit={handleSubmit}>
        <Grid container bgcolor="#e4e4e4" justifyContent="space-around">
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
            </Stack>
          </Grid>
          <Grid item>
            <Stack>
              <CustomInput fieldName="parentId" placeholder="Referral ID" />
              <DatePicker />
            </Stack>
          </Grid>
        </Grid>
        <Button type="submit">Submit</Button>
      </Form>
    </FormikProvider>
  );
};

export default Home;
