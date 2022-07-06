import { TextFieldProps } from "@mui/material";

export type PerformantTextFieldProps = Omit<TextFieldProps, "name"> & {
  name: string;
  placeholder: string;
  country?: string;
};
