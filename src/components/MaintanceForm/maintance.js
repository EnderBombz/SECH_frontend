import React from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel
} from "@material-ui/core";

import "./../../css/form.css";

const Maintance = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <form>
      <FormGroup row className="equipments">
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={handleChange}
              name="checkedA"
            />
          }
          label="Secondary"
        />
      </FormGroup>

      <div className="textBox-margin-footer">
        <TextField id="outlined-basic" label="Motivo" multiline fullWidth />
      </div>
      <div>
        <Button
          onClick={() => {
            console.log("enviar");
          }}
          variant="contained"
          color="primary"
          fullWidth
        >
          Solicitar
        </Button>
      </div>
    </form>
  );
};

export default Maintance;
