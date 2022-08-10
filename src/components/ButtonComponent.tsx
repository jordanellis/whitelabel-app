import * as React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export default function ButtonComponent() {
  return (
    <Paper>
      <Typography>Button Component</Typography>
      <Button variant="contained" sx={{ m: "1rem" }}>
        Button
      </Button>
    </Paper>
  );
}
