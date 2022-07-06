// React
import React from "react";
// Components
import DatePicker from "components/common/DatePicker";
import { Stack } from "@mui/material";
import { CustomInput } from "components/common/CustomInput";

type Props = {};

export default function SecondPartInputs({}: Props) {
  return (
    <Stack>
      <CustomInput name="parentId" placeholder="Referral ID" />
      <DatePicker />
    </Stack>
  );
}
