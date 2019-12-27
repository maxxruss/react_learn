import React from "react";
import './app.css'
import { makeStyles } from "@material-ui/core/styles";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import FilterButtons from "../filterButtons";
import ToDoList from "../todo-list";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles(theme => ({
  search_wrap: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  button_group: {
    width: "190px"
  }
}));

const App = () => {
  const classes = useStyles();

  const todoData = [
    { label: "drink coffee", important: false, id: 1 },
    { label: "make awesome app", important: true, id: 2 },
    { label: "have a lunch", important: false, id: 3 }
  ];

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <AppHeader />
      <div className={classes.search_wrap}>
        <SearchPanel />
        <div className={classes.button_group}>
          <FilterButtons />
        </div>
      </div>
      <ToDoList todos={todoData} />
    </Container>
  );
};

export default App