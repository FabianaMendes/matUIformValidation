import { Component } from 'react';
import './App.css';
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { validarCPF, validarSenha, validarNome } from './models/cadastro';
import ValidacoesCadastro from './contexts/ValidacoesCadastro';

class App extends Component {
  render(){
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>
        <ValidacoesCadastro.Provider value={{cpf:validarCPF, senha:validarSenha, nome:validarNome}}>
          <FormularioCadastro onSubmit={onSubmit}/>
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function onSubmit(values){
  console.log(values);
}

export default App;
