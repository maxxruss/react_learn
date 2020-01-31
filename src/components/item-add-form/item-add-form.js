import React from "react";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Button from "@material-ui/core/Button";
// import Input from "@material-ui/core/Input";

// import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  form_wrap: {
    width: "100%"
  },
  button_style: {
    marginLeft: "15px"
  }
});

class ToDoListItem extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     label: ""
  //   };
  // }

  state = {
    label: ""
  };

  onLabelChange = e => {
    this.setState({
      label: e.target.value
    });
    // console.log(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onAdd(this.state.label);
    this.setState({ label: "" });
  };

  render() {
    const { classes } = this.props;

    return (
      <form onSubmit={this.onSubmit}>
        <FormControl className={classes.form_wrap}>
          <OutlinedInput
            type="text"
            onChange={this.onLabelChange}
            value={this.state.label}
          ></OutlinedInput>
        </FormControl>
        <Button type="submit">Add</Button>
      </form>
    );
  }
}

export default withStyles(styles)(ToDoListItem);
