import * as React from "react";
import Switch from "@mui/material/Switch";
import { Paper, Typography } from "@mui/material";

export default function SwitchComponent() {
  return (
    <Paper>
      <Typography>Button Component</Typography>
      <Switch defaultChecked />
    </Paper>
  );
}
