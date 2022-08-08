const nome = "Enzo";
const cognome = "Goduria";

const nomeCompleto = nome + " " + cognome;
console.log(nomeCompleto); //Enzo Goduria

console.log("Ciao, il tuo nome completo è:" + " " + nomeCompleto + "."); //Ciao, il tuo nome completo è: Enzo Goduria.

const templateLiteral = `Ciao, il tuo nome completo è: ${nome} ${cognome}.`;
console.log(templateLiteral); ////Ciao, il tuo nome completo è: Enzo Goduria.

const esempio = 'Ciao sono "sull" \n albero';
console.log(esempio); //  \ serve a ignorare la funzione del carattere successivo
