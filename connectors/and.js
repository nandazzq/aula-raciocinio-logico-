// Exemplo do conector AND (&&)

// Este conector retorna 'true' apenas se TODAS as condições forem verdadeiras.

// Se eu tenho 18 anos e tenho CNH eu posso dirigir
// contexto de atribuicao //

let idade = 18
let possuoCNH = true

//-------------------------------//
// contexto de validacao //


if(idade>=18 && possuoCNH==true && nacioalidade==='Brasileira'){
    console.log('eu posso dirigir')
} else{
  console.log('eu nao posso dirigir')
}
//------------------------------//