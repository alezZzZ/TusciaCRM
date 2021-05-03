import React,{useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import {TextField } from "@material-ui/core";
import Button from "components/CustomButtons/Button.js";
import { useMutation, gql   } from '@apollo/client';




const ELENCO_CLIENTI_QUERY = gql`
 {
  allCustomers {
     data {
        nomeAzienda
        account
        email
        tel
     }
   }
 }
`;


const AGGIUNGI_CLIENTE = gql`
  mutation creaCliente( 
      $nomeAzienda: String!
      $piva: String!
      $account: String!
      $email: String!
      $tel: String!
  ) {
    createCustomer(data: {nomeAzienda: $nomeAzienda, piva: $piva,account: $account,email: $email,tel: $tel}) {
        nomeAzienda
        piva
        account
        email
        tel
    }
  }
`;








const GestioneClienteForm = (props) => {
  
  const [formState, setFormState] = useState({
    nomeAzienda: '',
    piva: '',
    account: '',
    email: '',
    tel: ''
  });

  const [createLink] = useMutation(AGGIUNGI_CLIENTE, {
    variables: {
      nomeAzienda: formState.nomeAzienda,
      piva: formState.piva,
      account: formState.account,
      email: formState.email,
      tel: formState.tel
    },refetchQueries: () => [
      { query: ELENCO_CLIENTI_QUERY },
    ]
  }
  
  )
  

return (
          <form onSubmit={(e) => {
            e.preventDefault();
            createLink();
            props.changeFlagInsert('true');
          }}>
            <GridContainer style={{width:"100%"}}>
              <GridItem xs={12} >&nbsp;</GridItem>
              <GridItem xs={3} >
                <TextField required id="nomeAzienda" label="Nome Azienda" value={formState.nomeAzienda} onChange={(e) =>
              setFormState({
                ...formState,
                nomeAzienda: e.target.value
              })}  fullWidth />
              </GridItem>
              <GridItem xs={2} >&nbsp;</GridItem>
              <GridItem xs={2} >
                <TextField required id="piva" label="P. Iva" value={formState.piva} onChange={(e) =>
              setFormState({
                ...formState,
                piva: e.target.value
              })}  fullWidth /> 
              </GridItem>
              <GridItem xs={5} >&nbsp;</GridItem>
              <GridItem xs={12} >&nbsp;</GridItem>
              <GridItem xs={12} >&nbsp;</GridItem>
              <GridItem xs={3} >
                <TextField required id="account" label="Account" value={formState.account} onChange={(e) =>
              setFormState({
                ...formState,
                account: e.target.value
              })}  fullWidth />
              </GridItem>
              <GridItem xs={2} >&nbsp;</GridItem>
              <GridItem xs={3} >
                <TextField required id="email" label="Email" value={formState.email} onChange={(e) =>
              setFormState({
                ...formState,
                email: e.target.value
              })}  fullWidth />
              </GridItem>
              <GridItem xs={2} >&nbsp;</GridItem>
              <GridItem xs={2} >
                <TextField required id="tel" label="Rif. Telefonico" value={formState.tel} onChange={(e) =>
              setFormState({
                ...formState,
                tel: e.target.value
              })}  fullWidth />               
              </GridItem>
              <GridItem xs={12} >&nbsp;</GridItem>
              <GridItem xs={12} >&nbsp;</GridItem>
              <GridItem xs={12} ><Button color="inherit" type="submit" style={{backgroundColor:"darkviolet"}}><font style={{color:"white"}}> Inserisci cliente</font></Button></GridItem>
            </GridContainer>
          </form>
        );
};

export default GestioneClienteForm;