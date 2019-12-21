import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";

const SearchPanel = () => {
  const [labelWidth, setLabelWidth] = React.useState(0);
  const [setName] = React.useState("Composed TextField");
  const labelRef = React.useRef(null);

  React.useEffect(() => {
    setLabelWidth(labelRef.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setName(event.target.value);
  };

  return (
    <FormControl size="small" fullWidth variant="outlined">
      <InputLabel ref={labelRef} htmlFor="component-outlined">
        Search
      </InputLabel>
      <OutlinedInput
        id="component-outlined"
        // value={name}
        onChange={handleChange}
        labelWidth={labelWidth}
      />
    </FormControl>
  );
};

export default SearchPanel;
