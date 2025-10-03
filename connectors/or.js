// Exemplo do conector OR (||)

// Este conector retorna 'true' se PELO MENOS UMA das condições forem verdadeiras.
// eu posso votar caso:
// seja homem ou mulher
// tenha mais de 16 anos
//tenha titulo de eleitor
// contexto de atribuicao //

let sexo = 'H'; // ou 'M'
let idade = 17;
lepossuiTituloEleitor=true;
//-------------------------------//
// contexto de validacao //
if((sexo=='H' || sexo=='M') && idade>=16 && possuiTituloEleitor==true){
    console.log('você pode votar')
} else {
  console.log('você não pode voltar')
}
