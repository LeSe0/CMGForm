// React
import React, { useContext } from "react";
import { FormikContext } from "formik";
// Components
import { InputLabel, Select, Typography, Grid } from "@mui/material";

type TMonthsLong = {
  [key: string]: string;
};

interface Props {
  data: (string | number)[];
  label: string;
  fieldName: string;
  selectedDay?: number | string;
  selectedMonth: string;
  selectedYear?: number | string;
}

export default function CustomDatePicker({
  data,
  label,
  fieldName,
  selectedDay,
  selectedMonth,
  selectedYear,
}: Props) {
  const { getFieldProps, errors, touched } = useContext(FormikContext);

  const isError = Boolean(touched[fieldName] && errors[fieldName]);

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
    December: "12",
  };

  if (
    fieldName === "year" &&
    selectedMonth === "February" &&
    selectedDay === "29"
  ) {
    data = data.filter((el) => {
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
    let lastDayInMonth = new Date(
      selectedYear ? Number(selectedYear) : 2022,
      Number(monthsLong[selectedMonth]),
      0
    ).getDate();
    data = [""];
    for (let i = 1; i <= lastDayInMonth; i++) {
      data.push(i);
    }
  }

  return (
    <Grid item>
      <InputLabel id="labelForDate" shrink={true}>
        {label}
      </InputLabel>
      <Select
        native
        fullWidth
        error={isError}
        variant="standard"
        id={label + fieldName}
        {...getFieldProps(fieldName)}
        sx={{
          fontSize: { xs: "13px", sm: "15px", md: "18px" },
        }}
      >
        {data.map((el) => {
          return (
            <option value={el} key={`${el}${fieldName}`}>
              {el}
            </option>
          );
        })}
      </Select>
      <Typography
        sx={{
          fontSize: { xs: "11px", lg: "13px" },
          color: "red",
        }}
      >
        {(isError && errors[fieldName]) as string}
      </Typography>
    </Grid>
  );
}
