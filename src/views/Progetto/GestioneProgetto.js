import React,{useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Link from '@material-ui/core/Link';
import Button from "components/CustomButtons/Button";
import CardHeader from "components/Card/CardHeader.js";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { DropzoneAreaBase } from 'material-ui-dropzone';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import MuiAlert from '@material-ui/lab/Alert';
import { useQuery, gql } from '@apollo/client';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';


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
  
  

  const [descrizione, setDescrizione] = React.useState('');
  const [importo, setImporto] = React.useState('');

  

  const handleChange = e => {
    if (e.target.id === 'descrizione') {
      setDescrizione(e.target.value);
    } else if (e.target.id === 'importo') {
      setImporto(e.target.value);
    }
    
  };
   
  
  const handleSubmit = (event) => {
    console.log("insert!");
    
  }
  


  return (


    
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Progetto</h4>
          </CardHeader>
          <CardBody>
            <ValidatorForm
                onSubmit={handleSubmit}
                onError={errors => console.log(errors)}>
            <GridContainer style={{width:"100%"}}>
              <GridItem xs={12} >&nbsp;</GridItem>
              <GridItem xs={4} >
              <TextValidator
                id="descrizione"
                label="Descrizione"
                onChange={handleChange}
                value={descrizione}
                validators={['required']}
                fullWidth
                helperText="Inserisci la descrizione"
                errorMessages={['Campo Obbligatorio']}
              />
                
              </GridItem>
              <GridItem xs={1} >&nbsp;</GridItem>
              <GridItem xs={2} >
              <TextValidator
                id="importo"
                label="Importo"
                type="number"
                onChange={handleChange}
                value={importo}
                validators={['required']}
                fullWidth
                helperText="Inserisci l'importo"
                errorMessages={['Campo Obbligatorio']}
              />
              </GridItem>
              <GridItem xs={1} >&nbsp;</GridItem>
              <GridItem xs={3} >
              <TextValidator
                id="dataFineProgetto"
                label="Data Fine Progetto"
                type="date"
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
              <GridItem xs={12} >&nbsp;</GridItem>
              <GridItem xs={12} ><Button color="primary" type="submit" >Inserisci Progetto</Button></GridItem>
            </GridContainer>
            </ValidatorForm>
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
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
    
  );
}
//}
