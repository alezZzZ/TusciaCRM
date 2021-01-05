import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import avatar from "assets/img/faces/marc.jpg";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Table, TextField } from "@material-ui/core";
import { DataGrid, RowsProp, ColDef } from "@material-ui/data-grid";
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);





export default function UserProfile() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = (panel) => (event, isExpanded) => {
     setExpanded(isExpanded ? panel : false);
   };


  function createData(opportunita, fase, ammontare, dataChiusura) {
    return { opportunita, fase, ammontare, dataChiusura };
  }
  
  /*const rows = [
    createData("Finanziamento Europeo PMI", "Proposta", "145000", "30/12/2021"),
    createData("Ecobonus", "In Valutazione", "90000", "31/12/2020"),
    createData("Progetto Ricerca 2", "Chiuso con Successo", "60000", "30/10/2020"),
    createData("Investimento BOT", "Chiuso senza Successo", "50000", "01/01/2021"),
    createData("Investimento Immobile", "Analisi Tecnica", "60000", "05/06/2021"),
    createData("Progetto Rifacimento Cappotto Termico", "Rifiutato", "45000", "06/06/2021")
  ];*/

  


  return (
    <div>
      <GridContainer style={{width:"100%"}}>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <GridContainer>
                <GridItem xs={4}><h2 className={classes.cardTitleWhite}>Tusciafisco</h2></GridItem>
                <GridItem xs={8} align="right">
                  <Button color="primary">Aggiungi Cliente</Button>
                   &nbsp;
                  <Button color="primary">Elimina Cliente</Button>
                </GridItem>
              {/* <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
              </GridContainer>
            </CardHeader>
            <CardBody>
            <GridContainer >
                <GridItem xs={4} >
                  <TextField disabled id="email" defaultValue="info@tusciafisco.it" label="Email" fullWidth />
                </GridItem>
                <GridItem xs={3} >
                  <TextField disabled id="cell" defaultValue="3936548222" label="Mobile " fullWidth />  
                </GridItem>
                <GridItem xs={5} >
                  <TextField disabled id="contatto" defaultValue="Riccardo Cerulli" label="Contatto Principale " fullWidth />  
                </GridItem>
              </GridContainer>
            <Accordion>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5" gutterBottom>Informazioni Dettaglio Azienda</Typography>
              </AccordionSummary>
              <AccordionDetails>
              <GridContainer style={{width:"100%"}}>
                <GridItem xs={3} >
                  <TextField disabled id="piva" defaultValue="1234526888" label="PIva" fullWidth />
                </GridItem>
                <GridItem xs={3} >
                  <TextField disabled id="categoria" defaultValue="Servizi" label="Settore" fullWidth />  
                </GridItem>
                <GridItem xs={2} >
                  <TextField disabled id="dipendenti" defaultValue="1-10" label="Numero Dipendenti" fullWidth />
                </GridItem>
                <GridItem xs={2} >
                  <TextField disabled id="fatturato" defaultValue="< 1M " label="Fatturato(Euro)" fullWidth />
                </GridItem>
                <GridItem xs={2} >
                  <TextField disabled id="rating" defaultValue="A+" label="Rating" fullWidth />
                </GridItem>
                <GridItem xs={4} >
                  <CustomInput
                    labelText="Via"
                    id="toponomastica"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={4} >
                  <CustomInput
                    labelText="Indirizzo"
                    id="indirizzo"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={4} >
                  <CustomInput
                    labelText="Comune"
                    id="comune"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={4} >
                  <CustomInput
                    labelText="Provincia"
                    id="provincia"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={4} >
                  <CustomInput
                    labelText="Cap"
                    id="cap"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} >
                    <p></p>
                </GridItem>
                <GridItem xs={12} >
                    <p></p>
                </GridItem>
                <GridItem xs={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>Note</InputLabel>
                  <CustomInput
                    labelText=""
                    id="note"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                  />
                </GridItem>
                <Button color="primary">Modifica</Button>
              </GridContainer>
              {/* <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Indirizzo"
                    id="indirizzo-toponomastica"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Last Name"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer> */}
              {/* <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Country"
                    id="country"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Postal Code"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer> */}
              
              </AccordionDetails>
            </Accordion>
            <Accordion >
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5" gutterBottom>Informazioni Account</Typography>
              </AccordionSummary>
              <AccordionDetails>
              <GridContainer style={{width:"100%"}}>
                <GridItem xs={3} >
                  <TextField disabled id="Cognome" defaultValue="Cerulli" label="Cognome Account" fullWidth />
                </GridItem>
                <GridItem xs={3} >
                  <TextField disabled id="Nome" defaultValue="Riccardo" label="Nome Account" fullWidth />  
                </GridItem>
                <GridItem xs={3} >
                  <TextField disabled id="emailAccount" defaultValue="riccardo.cerulli@tusciafisco.it" label="Email Account" fullWidth />
                </GridItem>
                <GridItem xs={3} >
                  <TextField disabled id="cellAccount" defaultValue="3522885522" label="Cell Account" fullWidth />
                </GridItem>
                <GridItem xs={12} >&nbsp;</GridItem>
                <Button color="primary">Modifica</Button>
              </GridContainer>                                
              
              </AccordionDetails>
              
            </Accordion>
            <Accordion >
              <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5" gutterBottom>Opportunità</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <GridContainer style={{width:"100%"}}>
                  <GridItem xs={12}>
                  <div style={{ height: 400, width: '100%' }}>
                  <DataGrid 
                      columns={[{ field: 'descrizione',headerName:'Descrizione', width:300 , headerAlign:"center" },
                                { field:  'fase' ,headerName:'Fase', width:300, headerAlign:"center"},
                                { field:  'ammontare'  ,headerName:'Ammontare[€]',width:300, headerAlign:"center",align:"right"},
                                { field:  'dataChiusura' ,headerName:'Data Chiusura' , width:300, headerAlign:"center"}]}
                      rows={[
                        { id: 1, descrizione: 'Finanziamento Europeo PMI' , fase:'Proposta',ammontare:'145000',dataChiusura:'30/12/2021'},
                        { id: 2, descrizione: 'Ecobonus' , fase:'In Valutazione',ammontare:'90000',dataChiusura:'31/12/2020'},
                        { id: 3, descrizione: 'Progetto Ricerca 2' , fase:'Chiuso con Successo',ammontare:'60000',dataChiusura:'30/10/2020'},
                        { id: 4, descrizione: 'Investimento BOT' , fase:'Chiuso senza Successo',ammontare:'50000',dataChiusura:'05/06/2021'},
                        { id: 5, descrizione: 'Investimento Immobile' , fase:'Analisi Tecnica',ammontare:'60000',dataChiusura:'30/12/2021'},
                        { id: 6, descrizione: 'Progetto Rifacimento Cappotto Termico' , fase:'Rifiutato',ammontare:'45000',dataChiusura:'06/06/2021'},
                      ]}
                    />
                  </div>
                    {/* <Table className={classes.table} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="left">Descrizione Opportunità</TableCell>
                          <TableCell align="left">Fase</TableCell>
                          <TableCell align="left">Ammontare[€]</TableCell>
                          <TableCell align="left">Data Chiusura</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow key={row.name}>
                            <TableCell align="left">{row.opportunita}</TableCell>
                            <TableCell align="left">{row.fase}</TableCell>
                            <TableCell align="left">{row.ammontare}</TableCell>
                            <TableCell align="left">{row.dataChiusura}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table> */}
                  </GridItem>
                  <GridItem xs={12}>&nbsp;</GridItem>
                  <GridItem xs={12}>
                    <Button color="primary">Modifica</Button>
                    &nbsp;
                    <Button color="primary">Aggiungi </Button>
                      &nbsp;
                    <Button color="primary">Elimina</Button>
                  </GridItem>
                </GridContainer>
              </AccordionDetails>
            </Accordion>
              
            </CardBody>
            <CardFooter>
              
              
            </CardFooter>
          </Card>
        </GridItem>
        {/* <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button color="primary" round>
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem> */}
      </GridContainer>
    </div>
  );
}
