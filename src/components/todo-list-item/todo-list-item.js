import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import PriorityHighOutlinedIcon from "@material-ui/icons/PriorityHighOutlined";

const styles = {
  margin: {
    margin: "10px"
  },
  extendedIcon: {
    marginRight: "10px"
  }
};

class ToDoListItem extends React.Component {
  render() {
    const {
      classes,
      id,
      label,
      done,
      important,
      onDeleted,
      onToggleImportant,
      onToggleDone
    } = this.props;

    let classText = "";
    if (done) {
      // console.log(done);
      classText = "done";
    }

    let classWeight = "";
    if (important) {
      // console.log(important);
      classWeight = "important";
    }

    return (
      <ListItem key={id} button dense onClick={onToggleDone}>
        <ListItemText
          className={classText + " " + classWeight}
          primary={label}
        />
        <ListItemSecondaryAction>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            className={classes.margin}
            onClick={onDeleted}
          >
            <DeleteOutlineOutlinedIcon />
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="secondary"
            className={classes.margin}
            onClick={onToggleImportant}
          >
            <PriorityHighOutlinedIcon />
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default withStyles(styles)(ToDoListItem);
