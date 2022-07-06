// React
import React from "react";
// Components
import { CustomInput } from "components/common/CustomInput";
import { Stack } from "@mui/material";

type Props = {};

export default function FirstInputs({}: Props) {
  return (
    <Stack>
      <CustomInput name="username" placeholder="Username" />
      <CustomInput name="password" placeholder="Password" />
      <CustomInput name="repeatPassword" placeholder="Repeat Password" />
      <CustomInput name="firstname" placeholder="First Name" />
      <CustomInput name="lastname" placeholder="Last Name" />
    </Stack>
  );
}
