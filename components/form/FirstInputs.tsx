// React
import React from "react";
// Components
import { CustomInput } from "components/common/CustomInput";
import { Stack } from "@mui/material";

type Props = {};

export default function FirstInputs({}: Props) {
  return (
    <Stack
      rowGap="20px"
      sx={{
        "& .MuiBox-root:first-of-type": {
          mt: { xs: "8vw", sm: "4vw", md: "1vw" }
        }
      }}
    >
      <CustomInput name="username" placeholder="Username" />
      <CustomInput name="password" placeholder="Password" />
      <CustomInput name="repeatPassword" placeholder="Repeat Password" />
      <CustomInput name="firstname" placeholder="First Name" />
      <CustomInput name="lastname" placeholder="Last Name" />
      <CustomInput name="email" placeholder="Enter your email" />
    </Stack>
  );
}
