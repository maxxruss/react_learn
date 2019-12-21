import React from "react";
// import ToDoListItem from "./todo-list-item";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import "./todo-list.css";

const ToDoList = ({ todos }) => {
  const [dense] = React.useState(false);
  // const [secondary] = React.useState(false);

  const elements = todos.map(item => {
    const { id, label } = item;
    return (
      <ListItem key={id} button dense>
        <ListItemText
          primary={label}
          // secondary={secondary ? "Secondary text" : null}
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  });
  return <List dense={dense}>{elements}</List>;
};

export default ToDoList;
