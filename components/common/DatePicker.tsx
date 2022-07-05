// React
import { Grid } from "@mui/material";
import { useFormikContext } from "formik";
// Components
import CustomDatePicker from "./CustomDatePicker";

type Props = {};

export default function DatePicker({}: Props) {
  const { getFieldProps } = useFormikContext();

  const months = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const selectedYear = getFieldProps("year").value;
  const selectedMonth = getFieldProps("month").value;
  const selectedDay = getFieldProps("day").value;

  const daysForChoose = ["", 1];
  for (let i = 2; i <= 31; i++) {
    daysForChoose.push(i);
  }

  const yearsForChoose = ["", 1970];
  for (let i = 1971; i <= new Date().getFullYear(); i++) {
    yearsForChoose.push(i);
  }

  return (
    <Grid container mt="20px" columnGap="15px">
      <Grid item xs={3}>
        <CustomDatePicker
          label="Day"
          fieldName="day"
          data={daysForChoose}
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
        />
      </Grid>
      <Grid item xs={4}>
        <CustomDatePicker
          label="Month"
          fieldName="month"
          data={months}
          selectedDay={selectedDay}
          selectedMonth={selectedMonth}
        />
      </Grid>
      <Grid item xs={3}>
        <CustomDatePicker
          label="Year"
          fieldName="year"
          data={yearsForChoose}
          selectedDay={selectedDay}
          selectedMonth={selectedMonth}
        />
      </Grid>
    </Grid>
  );
}
