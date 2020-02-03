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
  buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "active" },
    { name: "done", label: "done" }
  ];

  render() {
    const {switchFilter} = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      // const isActive = filter === name;
      return (
        <Button
          onClick={()=>switchFilter(name)}
          key={name}
        >
          {label}
        </Button>
      );
    });
    return (
      <div className={styles.root}>
        <ButtonGroup
          fullWidth
          size="large"
          color="primary"
          aria-label="outlined primary button group"
        >
          {buttons}
        </ButtonGroup>
      </div>
    );
  }
}

export default withStyles(styles)(FilterButtons);
