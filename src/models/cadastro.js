
function validarCPF(cpf){
    if(cpf.length !== 11){
      return {valido: false, texto:"CPF deve ter 11 dígitos."}
    } else {
      return {valido: true, texto:""};
    }
  }

function validarSenha(senha){
    if(senha.length < 4 || senha.length > 12){
      return {valido: false, texto:"Senha deve ter entre 4 e 12 dígitos."}
    } else {
      return {valido: true, texto:""};
    }
  }

function validarNome(nome){
    if(nome.length < 3 ){
      return {valido: false, texto:"Nome deve ter mais que 3 dígitos."}
    } else {
      return {valido: true, texto:""};
    }
  }


  export {validarCPF, validarSenha, validarNome};