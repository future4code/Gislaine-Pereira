import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Cancelar from '@material-ui/icons/Cancel'
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import axios from "axios";
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));


function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#D76D2D'
    }
  }
})

const Input = styled(TextField)`
  margin:0;
  padding: 0;
`

const AdministrarViagem = (props) => {
  const [openForm, setOpenForm] = useState('')
  const [cadidatosViagem, setCadidatosViagem] = useState([])
  const [openAlertSucesso, setOpenAlertSucesso] = useState(false);
  const [openAlertErro, setOpenAlertErro] = useState(false);

  const classes = useStyles();

    const pegaCadidatosViagem = async () =>{
      const token = window.localStorage.getItem("token")
      console.log("token", token)
      console.log("URL", props.baseUrl)
      console.log("id da viagem", props.viagemId)
      const response = await axios.get(`${props.baseUrl}/trip/${props.viagemId}`, {
        headers:{
          auth: token
        }
      }).then(response => {
         setCadidatosViagem(response.data.trip.candidates)
       }) 
       .catch(err => {
         console.log(err);
       });
    }

  useEffect(()=>{
    pegaCadidatosViagem()
  }, [props.viagemId])

  useEffect(() => {
    setOpenForm(props.isOpen)},
  [props.isOpen]) 
  
const listaCandidatos = cadidatosViagem.map((candidato) =>{
  return <div>
            <p>{candidato.name}</p>
        </div>
})

//  <ExpansionPanel defaultExpanded>
//    <ExpansionPanelSummary
//      expandIcon={<ExpandMoreIcon />}
//      aria-controls="panel1c-content"
//      id="panel1c-header"
//    >
//      <div className={classes.column}>
//        <Typography className={classes.heading}>{candidato.name}</Typography>
//      </div>
//      <div className={classes.column}>
//        <Typography className={classes.secondaryHeading}>Brasil</Typography>
//      </div>
//    </ExpansionPanelSummary>
//    <ExpansionPanelDetails>
//      <Typography>
//        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
//        maximus est, id dignissim quam.
//      </Typography>
//    </ExpansionPanelDetails>
//    <Divider />
//    <ExpansionPanelActions>
//      <Button size="small">Cancel</Button>
//      <Button size="small" color="primary">
//        Save
//      </Button>
//    </ExpansionPanelActions>
//  </ExpansionPanel>
    console.log(cadidatosViagem)

  return (
    <MuiThemeProvider theme={MyTheme}>
      <Dialog fullWidth={true} open={openForm} onClose={props.fechaForm} id='form-iscricao'>
        <DialogTitle id="form-dialog-title">Candidatos</DialogTitle>
        
        <DialogContent id="conteudo-dialogo">          
          {listaCandidatos}
        </DialogContent>
        
        <DialogActions>
          <Button
            variant="contained"
            endIcon={<Cancelar />}
            id="dialog-inscricao"
            onClick={props.fechaForm}
            size="small"
          >
            Fechar
          </Button>
          
        </DialogActions>
      </Dialog>
      
    </MuiThemeProvider>
  );
};

export default AdministrarViagem;