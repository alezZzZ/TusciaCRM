import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { DropzoneAreaBase } from 'material-ui-dropzone';
import Icon from '@material-ui/core/Icon';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};


const clienti = [
  { descrizioneCliente: 'TusciaFisco', year: 1994 },
  { descrizioneCliente: 'Hotel Roma', year: 1972 },
  { descrizioneCliente: 'Pfizer', year: 1974 },
  { descrizioneCliente: 'Il Localetto', year: 2008 },
  { descrizioneCliente: 'B&B le fate', year: 1957 },
  { descrizioneCliente: 'Hell Fries', year: 1993 },
  { descrizioneCliente: 'La cantina del drago', year: 1994 },
  { descrizioneCliente: 'Minverva Hoope', year: 2003 },
  { descrizioneCliente: 'Notaio Cerini', year: 1966 },
  { descrizioneCliente: 'Gioelleria Romani', year: 1999 },
];


const progetti = [
  { descrizioneProgetto: 'Finanziamento Europeo Software Gestionale', year: 1994 },
  { descrizioneProgetto: 'Investimento Hedge Found', year: 1972 },
  { descrizioneProgetto: 'Investimento Immobiliare', year: 1974 },
  { descrizioneProgetto: 'Crowfunding Marciapiede Colle Diana', year: 2008 },
  { descrizioneProgetto: 'Acquisto immobile', year: 1957 },
  { descrizioneProgetto: 'Acquisto forno professionale', year: 1993 },
 
];
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;


const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const [openSnack, setOpenSnack] = React.useState(false);


  const handleClick = () => {
    handleClose();
    setOpenSnack(true);
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  };




  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <AppBar position="static" style={{backgroundColor:"darkviolet"}}>
              <Toolbar >
                <GridContainer style={{width:"100%"}}>
                <GridItem xs={10}>
                {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton> */}
                <h4 className={classes.cardTitleWhite}>Opportunità</h4>
                </GridItem>
                <GridItem xs={2} style={{textAlign:"right"}} >
                  <Button  color="inherit" href="/admin/progetti">Aggiungi</Button>
                </GridItem>
                </GridContainer>
              </Toolbar>
            </AppBar>
          <CardBody>
            <GridContainer style={{width:"100%"}}>
                <GridItem xs={12} >&nbsp;</GridItem>
                <GridItem xs={4} >
                  <TextField required id="descrizione" label="Descrizione" defaultValue="" fullWidth/>
                </GridItem>
                <GridItem xs={1} >&nbsp;</GridItem>
                <GridItem xs={4} >
                  <Autocomplete
                    id="combo-box-demo"
                    options={progetti}
                    fullWidth
                    getOptionLabel={(option) => option.descrizioneProgetto}
                    renderInput={(params) => <TextField {...params} label="Seleziona Progetto"  />}
                  />
                </GridItem>
                <GridItem xs={1} >&nbsp;</GridItem>
                <GridItem xs={2} >
                  <TextField
                    id="date"
                    label="Data fine"
                    type="date"
                    defaultValue="2017-05-"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} >&nbsp;</GridItem>
                <GridItem xs={12} >&nbsp;</GridItem>
                <GridItem xs={4} >
                  <Autocomplete
                    multiple
                    id="cliente"
                    options={clienti}
                    disableCloseOnSelect
                    getOptionLabel={(option) => option.descrizioneCliente}
                    renderOption={(option, { selected }) => (
                      <React.Fragment>
                        <Checkbox
                          icon={icon}
                          checkedIcon={checkedIcon}
                          style={{ marginRight: 8 }}
                          checked={selected}
                        />
                        {option.descrizioneCliente}
                      </React.Fragment>
                    )}
                    fullWidth
                    renderInput={(params) => (
                      <TextField {...params} label="Assegna a" placeholder="Trova Cliente" />
                    )}
                  />
                </GridItem>
                <GridItem xs={1} >&nbsp;</GridItem>
                <GridItem xs={4}> 
                <DropzoneAreaBase
                    onAdd={(fileObjs) => console.log('Added Files:', fileObjs)}
                    onDelete={(fileObj) => console.log('Removed File:', fileObj)}
                    onAlert={(message, variant) => console.log(`${variant}: ${message}`)}
                  />
                  
                </GridItem>
                <GridItem xs={1} >&nbsp;</GridItem>
                <GridItem xs={2}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Invia comunicazione ai clienti</FormLabel>
                      <Grid component="label" container alignItems="center" spacing={1}>
                        <grid item>
                          No
                        </grid>
                        <grid item>
                        <Switch
                          checked={state.checkedA}
                          onChange={handleChange}
                          name="checkedA"
                          inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                        </grid>
                        <grid item>
                          Sì 
                        </grid>
                      </Grid>
                  </FormControl>
                </GridItem>  
            </GridContainer>
            <Table
              tableHeaderColor="primary"
              tableHead={["Descrizione", "Cliente", "Data Fine", "Stato"]}
              tableData={[
                [<Link href="/admin/dettaglioCliente" color="secondary">Proposta Commerciale per Rifacimento Cappotto Termico</Link>, "Tusciafisco", "31/12/2020","In Valutazione"],
                [<Link href="/admin/dettaglioCliente" color="secondary">Proposta Ecobonus</Link>, "Hotel Roma", "25/04/2021","Chiusa con successo"],
                [<Link href="/admin/dettaglioCliente" color="secondary">Progetto Ricerca 2</Link>, "Tusciafisco", "31/01/2021","Chiusa senza successo"],
                [<Link href="/admin/dettaglioCliente" color="secondary">Investimento Bot</Link>, "Pfizer", "31/09/2020","Scaduta"],
                [<Link href="/admin/dettaglioCliente" color="secondary">Investimento CCT</Link>, "Pfizer", "31/09/2021",<Button
                variant="outlined"
                onClick={handleClickOpen}
                color="default"
                size="small"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
              >
                Invia
              </Button>],
              ]}
            />
            <Dialog
              open={open}
              onClose={handleClose}
              PaperComponent={PaperComponent}
              aria-labelledby="draggable-dialog-title"
            >
              <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                Avviso
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Attenzione , stai per inviare un'opportunità al cliente , vuoi continuare?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                  No
                </Button>
                <Button onClick={handleClose,handleClick} color="primary">
                  Sì
                </Button>
              </DialogActions>
            </Dialog>
            <Snackbar open={openSnack} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical:"bottom", horizontal:"left" }}>
              <Alert onClose={handleCloseSnack} severity="success">
                Invio avvenuto con successo!
              </Alert>
            </Snackbar>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
    
  );
}
