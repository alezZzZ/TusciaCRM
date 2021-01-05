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
import InputAdornment from '@material-ui/core/InputAdornment';
import { useQuery, gql } from '@apollo/client';
import { onError } from "@apollo/client/link/error";



/* settoreMerc = [
  { descrizione: 'Prodotti Informatici', year: 1994 },
  { descrizione: 'Forniture Varie', year: 1972 },
  { descrizione: 'Servizi', year: 1974 },
  { descrizione: 'Mobili ed Arredi', year: 2008 },
  { descrizione: 'Attrezzature', year: 1957 },
 
];
*/
const PRODUCTS_MARKET_QUERY = gql`
 {
  allProductMarkets {
     data {
       _id
       description
     }
   }
 }
`;



function ProductsMarket() {
  const { loading, error, graphQLErrors, networkError, data } = useQuery(PRODUCTS_MARKET_QUERY);
  console.log("data:"+data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
  return (
    // <ul>
    //   {data.allItems.data.map((item) => {
    //     return <li key={item._id}>{item.name}</li>;
    //   })}
    // </ul>
    <Autocomplete
                    id="combo-box-demo"
                    options={data.allProductMarkets.data}
                    fullWidth
                    getOptionLabel={(option) => option.description}
                    renderInput={(params) => <TextField {...params} label="Seleziona Settore Merceologico"  />}
                  />
  );

  
  }



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
                  <h4 className={classes.cardTitleWhite}>Progetto</h4>
                  {/* <ExchangeRates /> */}
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
              <GridItem xs={2} >
                <TextField required id="importo" label="Importo[€]" defaultValue="" fullWidth />  
              </GridItem>
              <GridItem xs={1} >&nbsp;</GridItem>
              <GridItem xs={3} >
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
                  <ProductsMarket />
                </GridItem>
              <GridItem xs={1} >&nbsp;</GridItem>
              <GridItem xs={4}>
                  <DropzoneAreaBase
                    onAdd={(fileObjs) => console.log('Added Files:', fileObjs)}
                    onDelete={(fileObj) => console.log('Removed File:', fileObj)}
                    onAlert={(message, variant) => console.log(`${variant}: ${message}`)}
                  />
              </GridItem>  
            </GridContainer>
            <Table
              tableHeaderColor="primary"
              tableHead={["Descrizione", "Importo[€]", "Data Fine", "Settore Merceologico"]}
              tableData={[
                [<Link href="/admin/dettaglioCliente" color="secondary">Progetto Ecobonus</Link>, "15000", "31/12/2020","Servizi"],
                [<Link href="/admin/dettaglioCliente" color="secondary">Progetto Ricerca</Link>, "350000", "25/04/2021","Servizi"],
                [<Link href="/admin/dettaglioCliente" color="secondary">Progetto Ricerca 2</Link>, "654400", "31/01/2021","Forniture Varie"],
                [<Link href="/admin/dettaglioCliente" color="secondary">Progetto Sismabonus</Link>, "120000", "31/09/2020","Forniture Varie"],
                [<Link href="/admin/dettaglioCliente" color="secondary">Progetto Investimento</Link>, "45000", "31/09/2021","Forniture Varie"],
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
