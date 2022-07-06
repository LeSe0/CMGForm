// React
import React from "react";

// Components
import DatePicker from "components/common/DatePicker";
import { Stack } from "@mui/material";
import { CustomInput } from "components/common/CustomInput";

// styles
import "react-phone-input-2/lib/material.css";
import CustomPhoneSelector from "./CustomPhoneSelect";

export default function SecondPartInputs() {
  return (
    <Stack>
      <CustomInput name="parentId" placeholder="Referral ID" />
      <DatePicker />
      <CustomPhoneSelector name="phone" placeholder="asd" />
    </Stack>
  );
}
