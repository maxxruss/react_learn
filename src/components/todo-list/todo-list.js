import React from "react";
import ToDoListItem from "../todo-list-item";
import List from "@material-ui/core/List";

const ToDoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const [dense] = React.useState(false);
  const elements = todos.map(item => {
    const { id, label, done, important } = item;
    return (
     <ToDoListItem 
     key={id} 
     label={label} 
     done={done} 
     important={important} 
     onDeleted = {()=> onDeleted(id)}
     onToggleImportant = {()=> onToggleImportant(id)}
     onToggleDone = {()=> onToggleDone(id)}
     />
    );
  });
  return <List dense={dense}>{elements}</List>;
};

export default ToDoList;
