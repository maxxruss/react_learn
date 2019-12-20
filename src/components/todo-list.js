import React from "react";
// import ToDoListItem from "./todo-list-item";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import "./todo-list.css";

// function generate(todos) {
//   return todos.map(value =>
//     React.cloneElement(element, {
//       key: value,
//     }),
//   );
// }

const ToDoList = ({ todos }) => {
  const [dense] = React.useState(false);
  // const [secondary] = React.useState(false);

  const elements = todos.map(item => {
    const { id, label } = item;
    return (
      <ListItem key={id}>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
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

      // <li className="" key={id}>
      //   <ToDoListItem {...itemProps} />
      // </li>
    );
  });
  return <List dense={dense}>{elements}</List>;
};

export default ToDoList;
