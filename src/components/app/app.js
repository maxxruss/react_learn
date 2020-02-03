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
      ],
      searchText: "",
      filter: ""
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
  addItem = text => {
    this.setState(({ todoData }) => {
      const item = this.createTodoItem(text);
      const newArray = [...todoData, item];
      // console.log(newArray);
      return { todoData: newArray };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex(e => e.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    // console.log(newArray);
  }

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important")
      };
    });
  };
  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done")
      };
    });
  };

  showItemDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProporty(todoData, id, "done")
      };
    });
  };

  searchItem = searchText => {
    const newArray = this.state.todoData.filter(i => {
      return searchText === "" || i.label.indexOf(searchText) !== -1;
    });
    // console.log(searchText);
    return newArray;
  };

  setSearchText = searchText => {
    this.setState({ searchText });
  };

  filter = (items, filter) => {
    switch (filter) {
      case "all":
        return items;
      case "done":
        return items.filter(i => i.done);
      case "active":
        return items.filter(i => !i.done);
      default:
        return items;
    }
  };

  switchFilter = filter => {
    this.setState({ filter });
  };

  render() {
    const { classes } = this.props;
    const { todoData, searchText, filter} = this.state;
    const doneCount = todoData.filter(el => el.done).length;
    const todoDataFiltered = this.filter(this.searchItem(searchText), filter);
    const todoCount = todoData.length - doneCount;
    return (
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className={classes.search_wrap}>
          <SearchPanel setSearchText={this.setSearchText} />
          <div className={classes.button_group}>
            <FilterButtons switchFilter={this.switchFilter}  filter={filter} />
          </div>
        </div>
        <ToDoList
          todos={todoDataFiltered}
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
