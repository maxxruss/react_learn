import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import PriorityHighOutlinedIcon from "@material-ui/icons/PriorityHighOutlined";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const ToDoListItem = ({ id, label, important = false }) => {
  const classes = useStyles();

  const style = {
    color: important ? "tomato" : "black"
  };
  return (
    <ListItem key={id} button dense>
      <ListItemText style={style} primary={label} />
      <ListItemSecondaryAction>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          className={classes.margin}
        >
          <DeleteOutlineOutlinedIcon />
        </Button>
        <Button
          variant="outlined"
          size="small"
          color="secondary"
          className={classes.margin}
        >
          <PriorityHighOutlinedIcon />
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default ToDoListItem;
