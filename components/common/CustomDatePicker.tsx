// React
import React, { useContext, useEffect, useState } from "react";
import { FormikContext, useField } from "formik";
// Components
import { InputLabel, Select, Typography, Grid, TextFieldProps, SelectChangeEvent } from "@mui/material";
import { usePropagateRef } from "providers/hooks";
import { ErrorMessage } from "./CustomTypography";

type TMonthsLong = {
  [key: string]: string;
};

type Props = Omit<TextFieldProps, "name"> & {
  data: (string | number)[];
  label: string;
  fieldName: string;
  selectedDay?: number | string;
  selectedMonth: string;
  selectedYear?: number | string;
};

const monthsLong: TMonthsLong = {
  January: "01",
  February: "02",
  March: "03",
  April: "04",
  May: "05",
  June: "06",
  July: "07",
  August: "08",
  September: "09",
  October: "10",
  November: "11",
  December: "12"
};

export default function CustomDatePicker(props: Props) {
  let { data, label, fieldName, selectedDay, selectedMonth, selectedYear } = props;
  const [field, meta] = useField(fieldName);
  const error = !!meta.error && meta.touched;
  const [fieldValue, setFieldValue] = useState<string | number>(field.value);

  if (fieldName === "year" && selectedMonth === "February" && selectedDay === "29") {
    data = data.filter(el => {
      return new Date(Number(el), 1, 29).getMonth() === 1;
    });
    data.unshift("");
  } else if (fieldName === "month" && selectedDay !== "") {
    data = data.filter((el, i) => {
      if (selectedDay) {
        return new Date(2022, i, 0).getDate() >= selectedDay;
      }
    });
  } else if (selectedMonth !== "" && fieldName === "day") {
    let lastDayInMonth = new Date(selectedYear ? Number(selectedYear) : 2022, Number(monthsLong[selectedMonth]), 0).getDate();
    data = [""];
    for (let i = 1; i <= lastDayInMonth; i++) {
      data.push(i);
    }
  }

  usePropagateRef({
    setFieldValue,
    name: fieldName,
    value: field.value
  });

  useEffect(() => {
    if (meta.touched) {
      return;
    }
    if (field.value !== fieldValue) {
      setFieldValue(field.value);
    }
  }, [field.value]);

  const onChange = (evt: SelectChangeEvent<string>) => {
    setFieldValue(evt.target.value);
  };

  const onBlur = (evt: React.FocusEvent<HTMLInputElement>) => {
    const val = evt.target.value || "";
    window.setTimeout(() => {
      field.onChange({
        target: {
          name: fieldName,
          value: props.type === "number" ? parseInt(val, 10) : val
        }
      });
    }, 0);
  };

  return (
    <>
      <InputLabel id="labelForDate" shrink={true}>
        {label}
      </InputLabel>
      <Select
        native
        fullWidth
        error={error}
        variant="standard"
        id={label + fieldName}
        onChange={onChange}
        onBlur={onBlur}
        sx={{
          fontSize: { xs: "13px", sm: "15px", md: "18px" }
        }}
      >
        {data.map(el => {
          return (
            <option value={el} key={`${el}${fieldName}`}>
              {el}
            </option>
          );
        })}
      </Select>
      <ErrorMessage meta={meta} />
    </>
  );
}
