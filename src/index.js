import React from "react";
import ReactDOM from "react-dom";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import ToDoList from "./components/todo-list";
import SignIn from './components/SignIn'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';


const App = () => {
  const todoData = [
    { label: "drink coffee", important: false, id: 1 },
    { label: "make awesome app", important: true, id: 2 },
    { label: "have a lunch", important: false, id: 3 }
  ];

  return (
      <Container component="main" maxWidth="xs">
              <CssBaseline />

      <SignIn />
      <AppHeader />
      <SearchPanel />
      <ToDoList todos = {todoData}/>
      </Container>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
