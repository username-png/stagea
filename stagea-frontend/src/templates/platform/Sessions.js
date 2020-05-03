import React from "react";
import { Grid } from "@material-ui/core";
import Rooms from "../../components/Rooms";
import NetworkingDrawer from "../../components/NetworkingDrawer";

export default function Sessions() {
  return (
    <Grid container>
      <Rooms />
      <NetworkingDrawer />
    </Grid>
  );
}