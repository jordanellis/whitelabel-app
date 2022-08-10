import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Paper, Typography } from "@mui/material";

export default function RadioButtonComponent() {
  return (
    <Paper>
      <FormControl>
        <Typography>Radio Button Component</Typography>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="one" control={<Radio />} label="One" />
          <FormControlLabel value="two" control={<Radio />} label="Two" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="other"
          />
        </RadioGroup>
      </FormControl>
    </Paper>
  );
}
