import { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';
import { validarCPF } from './models/Validation';

class App extends Component {
  render(){
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>
        <FormularioCadastro 
          onSubmit={onSubmitForm} 
          validarCPF={validarCPF}
        />
      </Container>
    );
  }
}

function onSubmitForm(values){
  console.log(values);
}

export default App;
