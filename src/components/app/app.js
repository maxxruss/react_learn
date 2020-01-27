import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import FilterButtons from "../filterButtons";
import ToDoList from "../todo-list";
import ItemAddForm from "../item-add-form";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

let startId = 0;

const styles = theme => ({
  search_wrap: {
    marginTop: "8px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  button_group: {
    marginLeft: "15px",
    width: "250px"
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: [
        this.createTodoItem("drink coffee"),
        this.createTodoItem("make awesome app"),
        this.createTodoItem("have a lunch")
      ]
    };
  }
  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: startId++
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
      const item = this.createTodoItem("text");
      const newArray = [...todoData, item];
      // console.log(newArray);
      return { todoData: newArray };
    });
  };

  toggleProporty(arr, id, propName) {
    const idx = arr.findIndex(e => e.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    // console.log(newArray);
  }

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProporty(todoData, id, "important")
      };
    });
  };
  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProporty(todoData, id, "done")
      };
    });
  };
  render() {
    const { classes } = this.props;
    const { todoData } = this.state;
    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className={classes.search_wrap}>
          <SearchPanel />
          <div className={classes.button_group}>
            <FilterButtons />
          </div>
        </div>
        <ToDoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onAdd={this.addItem}></ItemAddForm>
      </Container>
    );
  }
}

export default withStyles(styles)(App);
