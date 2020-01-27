import React from "react";

class AppHeader extends React.Component {
  render() {
    const { toDo, done } = this.props;
    return (
      <div>
        <h1>My ToDo list</h1>
        <span>{toDo} more to do, </span>
        <span>{done} done</span>
      </div>
    );
  }
}

export default AppHeader;
