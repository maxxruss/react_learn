import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
// import { render } from "react-dom";

// const [labelWidth, setLabelWidth] = React.useState(0);
// const [setName] = React.useState("Composed TextField");
// const labelRef = React.useRef(null);

// React.useEffect(() => {
//   setLabelWidth(labelRef.current.offsetWidth);
// }, []);

// const handleChange = event => {
//   setName(event.target.value);
// };

class SearchPanel extends React.Component {

  state = {
    searchText: ""
  }

  setSearchText = e => {
    const searchText = e.target.value
    this.setState({ searchText});
    this.props.setSearchText(e.target.value);
    // console.log(e.target.value)
  };

  render() {
    // const { searchItem } = this.props;

    return (
      <FormControl size="small" fullWidth variant="outlined">
        <InputLabel
          // ref={labelRef}
          htmlFor="component-outlined"
        >
          Search
        </InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={this.state.searchText}
          onChange={this.setSearchText}
          // labelWidth={labelWidth}
        />
      </FormControl>
    );
  }
}

export default SearchPanel;
