// Exemplo do conector NOT (!)

// Este conector INVERTE o valor lógico da condição.
// Se a condição é verdadeira, o '!' a torna falsa, e vice-versa.

// eu posso dirigir caso:
// maior de idad
//possuir habilitação
// ser brasileiro

// ------------ contexto de aribução -----------
let idade = 15
let possuiCNH = true
let nacionalidade = 'Brasileiro'
let minhaValidacao = idade>=18 && possuiCNH == true && nacionalidade=='Brasileiro'
// console.log("valor real da minha validação:", minhavalidacao)
// console.log("valor negado da minha validação:", minhavalidacao)
// console.log("valor negado 2x da minha validação:", minhavalidacao)
let possuiInformacao = 0
if(possuiInformacao) {
    console.log('Possui informacao')
} else{
    console.log('Nao possui informação')
}


// contexto de validação

if(!(idade>=18 && possuiCNH == true && nacionalidade=='Brasileiro')){
    console.log('você pode dirigir!!!')
} else {
  console.log('você nao pode dirigir!!!')
}

//--------------------