import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

const FilterButtons = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup fullWidth size="large"  color="primary" aria-label="outlined primary button group">
        <Button >All</Button>
        <Button>Active</Button>
        <Button>Done</Button>
      </ButtonGroup>
    </div>
  );
};

export default FilterButtons;
