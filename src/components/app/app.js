import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import FilterButtons from "../filterButtons";
import ToDoList from "../todo-list";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

const styles = {
  search_wrap: {
    marginTop: "8px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  button_group: {
    width: "250px"
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: [
        { label: "drink coffee", important: false, id: 1 },
        { label: "make awesome app", important: true, id: 2 },
        { label: "have a lunch", important: false, id: 3 }
      ]
    };
  }
  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(e => e.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return { todoData: newArray };
    });
  };
  addItem = () => {
    this.setState(({ todoData }) => {
      const nextId = todoData.length + 1;
      const item = { label: "text", important: false, id: nextId };
      const newArray = [...todoData, item];
      // console.log(newArray);
      return { todoData: newArray };
    });
  };
  render() {
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <AppHeader />
        <div className={classes.search_wrap}>
          <SearchPanel />
          <div className={classes.button_group}>
            <FilterButtons onAdd={this.addItem} />
          </div>
        </div>
        <ToDoList todos={this.state.todoData} onDeleted={this.deleteItem} />
      </Container>
    );
  }
}

export default withStyles(styles)(App);
