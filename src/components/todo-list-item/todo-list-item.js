import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import PriorityHighOutlinedIcon from "@material-ui/icons/PriorityHighOutlined";

const styles = {
  margin: {
    margin: "10px"
  },
  extendedIcon: {
    marginRight: "10px"
  }
};

class ToDoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      important: false
    };
  }

  onlabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done
      };
    });
  };

  onMarkImportant = () => {
    this.setState(({ important }) => {
      return {
        important: !important
      };
    });
  };

  render() {
    const { classes, id, label, onDeleted } = this.props;
    const { done, important } = this.state;
    // const style = {
    //   color: important ? "tomato" : "black"
    // };

    let classText = "";
    if (done) {
      console.log(done);
      classText = "done";
    }

    let classWeight = "";
    if (important) {
      console.log(important);
      classWeight = "important";
    }

    return (
      <ListItem key={id} button dense onClick={this.onlabelClick}>
        <ListItemText
          className={classText + " " + classWeight}
          primary={label}
        />
        <ListItemSecondaryAction>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            className={classes.margin}
            onClick={onDeleted}
          >
            <DeleteOutlineOutlinedIcon />
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="secondary"
            className={classes.margin}
            onClick={this.onMarkImportant}
          >
            <PriorityHighOutlinedIcon />
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

// const ToDoListItem = ({ id, label, important = false }) => {
//   let [done, setDone] = React.useState(false);

//   let className = "";
//   if (done) {
//     console.log(done);
//     className = "done";
//   }

//   console.log(className);

//   const style = {
//     color: important ? "tomato" : "black"
//   };

// };

export default withStyles(styles)(ToDoListItem);
