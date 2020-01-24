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
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      important: false
    };
  }

  // const classes = useStyles();

  render() {
    const{onAdd} = this.props
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
          <Button onClick={onAdd}>Add</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default withStyles(styles)(FilterButtons);
