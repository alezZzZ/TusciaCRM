import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Table from "components/Table/Table.js";
import { useQuery, gql , NetworkStatus } from '@apollo/client';


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




 const ElencoClienti = (props)=> {
  //console.log("flag_refresh:"+props.flagRefresh);
  const { loading, error, graphQLErrors, networkError, data } = useQuery(ELENCO_CLIENTI_QUERY);
  //console.log("query chiamata!");
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );
    
    var arrayCustomer = [];
    data.allCustomers.data.forEach(el => {
    var arrayItem = [];
    arrayItem.push(el.nomeAzienda);
    arrayItem.push(el.account);
    arrayItem.push(el.email);
    arrayItem.push(el.tel);
    arrayCustomer.push(arrayItem);
    });
    
    
    return (
      <Table
                tableHeaderColor="primary"
                tableHead={["Nome Azienda", "Account", "Email", "Cell"]}
                tableData={arrayCustomer}
              />
    );
  }
  


export default ElencoClienti;