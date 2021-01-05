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

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
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
                <h4 className={classes.cardTitleWhite}>Elenco Clienti</h4>
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
              <GridItem xs={3} >
                <TextField required id="nomeAzienda" label="Nome Azienda" defaultValue="" fullWidth/>
              </GridItem>
              <GridItem xs={2} >&nbsp;</GridItem>
              <GridItem xs={2} >
                <TextField required id="piva" label="P. Iva" defaultValue="" fullWidth />  
              </GridItem>
              <GridItem xs={5} >&nbsp;</GridItem>
              <GridItem xs={12} >&nbsp;</GridItem>
              <GridItem xs={12} >&nbsp;</GridItem>
              <GridItem xs={3} >
                <TextField required id="account" label="Account" defaultValue="" fullWidth/>
              </GridItem>
              <GridItem xs={2} >&nbsp;</GridItem>
              <GridItem xs={3} >
                <TextField required id="email" label="Email" defaultValue="" fullWidth/>
              </GridItem>
              <GridItem xs={2} >&nbsp;</GridItem>
              <GridItem xs={2} >
                <TextField required id="tel" label="Rif. Telefonico" defaultValue="" fullWidth/>                  
              </GridItem>
              <GridItem xs={12} >&nbsp;</GridItem>
              <GridItem xs={12} >&nbsp;</GridItem>
            </GridContainer>
            <Table
              tableHeaderColor="primary"
              tableHead={["Nome Azienda", "Account", "Email", "Cell"]}
              tableData={[
                [<Link href="/admin/dettaglioCliente" color="secondary">TusciaFisco</Link>, "Riccardo Cerulli", "info@tusciafisco.it","3936548222"],
                [<Link href="/admin/dettaglioCliente" color="secondary">Minerva Hooper</Link>, "Dino Lavan", "infominerva@aaaa.com","333333333"],
                [<Link href="/admin/dettaglioCliente" color="secondary">Sage Rodriguez</Link>, "Sage Rodriguez", "sssssss@li.com","111111111111"],
                ["Philip Chaney", "Alessandro Duranti", "alessandrodranti@libero.it", "39391289129"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      
    </GridContainer>
  );
}
