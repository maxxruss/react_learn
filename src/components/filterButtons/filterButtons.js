import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    display: "flex",
    alignItems: "center",
    "& > *": {
      margin: "1px"
    }
  }
};

class FilterButtons extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <ButtonGroup
          fullWidth
          size="large"
          color="primary"
          aria-label="outlined primary button group"
        >
          <Button>All</Button>
          <Button>Active</Button>
          <Button>Done</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default withStyles(styles)(FilterButtons);
