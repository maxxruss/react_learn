import React from "react";
import ToDoListItem from "../todo-list-item";
import List from "@material-ui/core/List";
import "./todo-list.css";

const ToDoList = ({ todos }) => {
  const [dense] = React.useState(false);
  const elements = todos.map(item => {
    const { id, label } = item;
    return (
     <ToDoListItem key={id} label={label}/>
    );
  });
  return <List dense={dense}>{elements}</List>;
};

export default ToDoList;
