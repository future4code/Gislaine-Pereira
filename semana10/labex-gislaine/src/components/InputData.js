import React, { Fragment, useState, useEffect } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

function InputData(props) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dataFormatada, setDataFromatada] = useState("");

  useEffect(() => {
    formataData();
  }, [selectedDate]);

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
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Fragment>
      <KeyboardDatePicker
        required
        label="Data da Viagem"
        clearable
        value={selectedDate}
        onChange={e => setSelectedDate(e)}
        minDate={new Date()}
        format="dd/MM/yy"
      />
    </Fragment>
    </MuiPickersUtilsProvider>
    
    
  );
}

export default InputData;
