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
    <Stack gap="15px">
      <CustomInput name="parentId" placeholder="Referral ID" />
      <DatePicker />
      <CountrySelector name="country" setFieldValue={setCountry} />
      <CustomPhoneSelector name="phone" placeholder="asd" fieldValue={country} />
    </Stack>
  );
}
