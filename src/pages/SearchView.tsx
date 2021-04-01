import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Chip, Grid, Paper, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

type Props = {};

const useStyles = makeStyles((theme) => ({
  searchView: {
    flexGrow: 1,
  },
  buttonPaper: {
    padding: theme.spacing(0.5),
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  criteriaPaper: {
    padding: theme.spacing(0.5),
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const SearchView: React.FC<Props> = () => {
  const classes = useStyles();

  const ships = [
    { itemName: "Rifter", itemId: "001" },
    { itemName: "Incursus", itemId: "002" },
    { itemName: "Merlin", itemId: "003" },
    { itemName: "Tormentor", itemId: "004" },
  ];

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <>
      <div className={classes.searchView}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1>
              <a href="https://zkillboard.com/">https://zkillboard.com/</a>
            </h1>
          </Grid>
          <Grid item xs={12}>
            <Paper variant="outlined" className={classes.criteriaPaper}>
              <Chip
                label="Primary Clickable"
                onDelete={handleDelete}
              />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              id="search"
              options={ships}
              getOptionLabel={(option) => option.itemName}
              renderInput={(params) => (
                <TextField {...params} label="Search" variant="outlined" />
              )}
            />
          </Grid>
          <Grid item>
            <Paper variant="outlined" className={classes.buttonPaper}>
              <Button variant="outlined" color="primary">
                Kills
              </Button>
              <Button variant="outlined" color="primary">
                Losses
              </Button>
            </Paper>
          </Grid>
          <Grid item>
            <Paper variant="outlined" className={classes.buttonPaper}>
              <Button variant="outlined" color="primary">
                Solo
              </Button>
            </Paper>
          </Grid>
          <Grid item>
            <Paper variant="outlined" className={classes.buttonPaper}>
              <Button variant="outlined" color="primary">
                Highsec
              </Button>
              <Button variant="outlined" color="primary">
                Lowsec
              </Button>
              <Button variant="outlined" color="primary">
                Nullsec
              </Button>
              <Button variant="outlined" color="primary">
                W-Space
              </Button>
              <Button variant="outlined" color="primary">
                Abyssal
              </Button>
            </Paper>
          </Grid>
          <Grid item>
            <Paper variant="outlined" className={classes.buttonPaper}>
              <Button variant="outlined" color="primary">
                Finalblow
              </Button>
            </Paper>
          </Grid>
          <Grid item>
            <Paper variant="outlined" className={classes.buttonPaper}>
              <Button variant="outlined" color="primary">
                5B+
              </Button>
              <Button variant="outlined" color="primary">
                10B+
              </Button>
              <Button variant="outlined" color="primary">
                20B+
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default SearchView;
