import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Radio, RadioGroup, FormControlLabel } from "@material-ui/core";
import { ListProvider } from "./../context/ListContext";

import EquipmentTab from "../components/requestEquipment/requestTab";
import MaintanceForm from "../components/MaintanceForm/maintance";
import DevolutionForm from "../components/DevolutionForm/devolution";

import "../css/chamado.css";

function Chamado() {
  const [request, setRequest] = useState("equipment");

  const handleChange = (event) => {
    setRequest(event.target.value);
  };

  return (
    <>
      <ListProvider>
        <NavBar />

        <div className="box-content">
          <div className="content">
            <div>
              <h1 className="textAlign-left">Chamado</h1>
              <p className="textAlign-left">
                Este chamado será encaminhado para o departamento de T.I, para
                análise e liberação.
              </p>

              <RadioGroup
                style={{ flex: 1, flexDirection: "row" }}
                aria-label="gender"
                name="gender1"
                value={request}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="equipment"
                  control={<Radio />}
                  label="Equipamento"
                />
                <FormControlLabel
                  value="maintance"
                  control={<Radio />}
                  label="Manutenção"
                />
                <FormControlLabel
                  value="devolution"
                  control={<Radio />}
                  label="Devolução"
                />
              </RadioGroup>

              <div>
                {request === "equipment" ? (
                  <EquipmentTab/>
                ) : request === "maintance" ? (
                  <MaintanceForm />
                ) : (
                  <DevolutionForm/>
                )}
              </div>
            </div>
          </div>
        </div>
      </ListProvider>
    </>
  );
}

export default Chamado;
