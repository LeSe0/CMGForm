// React
import React from "react";
// Components
import CustomInput from "components/common/CustomInput";
import DatePicker from "components/common/DatePicker";
import { Stack } from "@mui/material";

type Props = {};

export default function SecondPartInputs({}: Props) {
  return (
    <Stack>
      <CustomInput fieldName="parentId" placeholder="Referral ID" />
      <DatePicker />
    </Stack>
  );
}
