// React
import React from "react";

// types
import { FieldMetaProps } from "formik";

// Components
import { Typography } from "@mui/material";

type Props = {
  meta: FieldMetaProps<any>;
};

export function ErrorMessage({ meta }: Props) {
  return (
    <Typography
      sx={{
        fontSize: { xs: "11px", lg: "13px" },
        color: "red",
        minHeight: "20px"
      }}
    >
      {meta.touched && meta.error}
    </Typography>
  );
}
