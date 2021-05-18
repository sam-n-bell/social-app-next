import {
  Button,
    Container,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Theme,
} from "@material-ui/core";
import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { mockTableData, mockTableDataColumns } from "./mockdata";

const DataGridExample: React.FC = () => {
  const useStyles = makeStyles((theme: Theme) => ({
    searchButton: {
      height: "100%",
      backgroundColor: "#757ce8",
    },
  }));

  const inputRow = () => {
    return (
      <Grid container spacing={3} justify="center">
        <Grid item xs={2}>
          <TextField variant="outlined" label="Location Number"></TextField>
        </Grid>
        <Grid item xs={2}>
          <Button className={classes.searchButton}>Get Floorplans</Button>
        </Grid>
      </Grid>
    );
  };

  const oneTable = () => {
    return (

      <Grid container spacing={3} justify="center">
        <Grid item xs={6}>
          <Paper style={{ width: "100%", height: 400 }}>
            <DataGrid
              rows={mockTableData}
              columns={mockTableDataColumns}
              pageSize={5}
            />
            </Paper>
        </Grid>
      </Grid>
    );
  };

  const classes = useStyles();
  return (
    <Container>
      {inputRow()}
      {oneTable()}
    </Container>
  );
};

export default DataGridExample;
