import React from "react";
import Button from "@material-ui/core/Button";

class ToDoListItem extends React.Component {
  render() {
    const { onAdd } = this.props;

    return (
      <form>
        <input type="text"></input>
        <Button onClick={onAdd}>Add</Button>
      </form>
    );
  }
}

export default ToDoListItem;
