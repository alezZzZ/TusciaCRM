import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import GestioneClienteForm from "components/Cliente/GestioneClienteForm.js"
import ElencoClienti from "components/Cliente/ElencoClienti.js"

import { useQuery, gql } from '@apollo/client';

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
  const [flagInsert, setFlagInsert] = useState('false');
  
  const changeFlagInsert = (val) => {
    setFlagInsert(val);
    console.log("FlagInsert:"+flagInsert);
  };
 
  

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <AppBar position="static" style={{backgroundColor:"darkviolet"}}>
              <Toolbar >
                <GridContainer style={{width:"100%"}}>
                <GridItem xs={10}>
                <h4 className={classes.cardTitleWhite}>Elenco Clienti</h4>
                </GridItem>
                </GridContainer>
              </Toolbar>
            </AppBar>
           {/*Inizio Componente Esterno*/}
           <GestioneClienteForm changeFlagInsert={changeFlagInsert} />
           {/*Fine Componente Esterno*/}
          <CardBody>
            {/*Inizio Componente Esterno*/}
            <ElencoClienti  />
            {/*Fine Componente Esterno*/}
            
          </CardBody>
        </Card>
      </GridItem>
      
    </GridContainer>
  );
}
