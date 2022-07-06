// React
import React, { useState } from "react";

// Components
import DatePicker from "components/common/DatePicker";
import { Stack } from "@mui/material";
import { CustomInput } from "components/common/CustomInput";
import CountrySelector from "components/common/CountrySelector";
import CustomPhoneSelector from "./CustomPhoneSelect";

// styles
import "react-phone-input-2/lib/material.css";

export default function SecondPartInputs() {
  const [country, setCountry] = useState("af");

  return (
    <Stack rowGap="20px">
      <DatePicker />
      <CustomInput name="city" placeholder="Enter your city" />
      <CountrySelector name="country" setFieldValue={setCountry} />
      <CustomInput name="address" placeholder="Enter your address" />
      <CustomPhoneSelector name="phone" placeholder="Enter your Phone" fieldValue={country} />
      <CustomInput name="parentId" placeholder="Enter your Referral ID" />
    </Stack>
  );
}
