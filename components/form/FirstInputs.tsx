// React
import React from "react";
import { FastField, FormikProvider } from "formik";
// Components
import CustomInput from "components/common/CustomInput";
import { Stack } from "@mui/material";

type Props = {};

export default function FirstInputs({}: Props) {
  return (
    <Stack>
      <CustomInput fieldName="username" placeholder="Username" />
      <CustomInput fieldName="password" placeholder="Password" />
      <CustomInput fieldName="repeatPassword" placeholder="Repeat Password" />
      <CustomInput fieldName="firstname" placeholder="First Name" />
      <CustomInput fieldName="lastname" placeholder="Last Name" />
    </Stack>
  );
}
