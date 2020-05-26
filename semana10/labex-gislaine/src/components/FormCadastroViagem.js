import React, { Fragment, useState, useEffect } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";



function FormCadastroViagem(props) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dataFormatada, setDataFromatada] = useState("");

  const formataData = () => {
    var dia = (selectedDate.getDate() < 10 ? "0" : "") + selectedDate.getDate();
    var mes =
      (selectedDate.getMonth() + 1 < 10 ? "0" : "") +
      (selectedDate.getMonth() + 1);
    var ano = selectedDate.getYear() - 100;
    setDataFromatada(dia + "/" + mes + "/" + ano);
    console.log(dataFormatada);
  };

  return (
    <MuiThemeProvider theme={MyTheme}>
      <Fragment>
        <KeyboardDatePicker
          label="Aniversário"
          clearable
          color="primary"
          value={selectedDate}
          onChange={e => setSelectedDate(e)}
          minDate={new Date()}
          format="dd/MM/yy"
        />
      </Fragment>
    </MuiThemeProvider>
    );
}

export default FormCadastroViagem;
  
