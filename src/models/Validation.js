
function validarCPF(cpf){
    if(cpf.length !== 11){
      return {valido: false, texto:"CPF deve ter 11 digitos."}
    } else {
      return {valido: true, texto:""}
    }
  }


  export {validarCPF};