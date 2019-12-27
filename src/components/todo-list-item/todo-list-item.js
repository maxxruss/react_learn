import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import PriorityHighOutlinedIcon from "@material-ui/icons/PriorityHighOutlined";
import "./todo-list-item.css";

const styles = {
  margin: {
    margin: '10px'
  },
  extendedIcon: {
    marginRight: '10px'
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
  render() {
    const { classes } = this.props;
    const {id, label} = this.props;
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
      <ListItem key={id} button dense onClick={() => this.setState({done: !done})}>
        <ListItemText className={classText + ' ' + classWeight} primary={label} />
        <ListItemSecondaryAction>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            className={classes.margin}
          >
            <DeleteOutlineOutlinedIcon />
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="secondary"
            className={classes.margin}
            onClick={() => this.setState({important: !important})}
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
