// // Metodi e proprietà

// const obj = {
//   nome: "Sandro",
//   saluta(momento) {
//     console.log(`${momento}, sono Sandro Petruzzi`);
//   },
// };

// //Proprietà
// console.log(obj.nome);

// //Metodo
// obj.saluta("BuonGiorno");

const stringa = " Sono una Stringa";
console.log(stringa.length); // quanti caratteri ha la stringa "17"
console.log(stringa.toLowerCase()); // sono una stringa
console.log(stringa.toUpperCase()); // SONO UNA STRINGA
console.log(stringa.charAt(stringa.length - 1)); // aggiunge ultimo carattere "a"
console.log(stringa.indexOf("Sono")); // rileva la posizione dell'elemento di mio interesse "1"
console.log(stringa.split(" ")); // ["",  "Sono", "una", "Stringa"]
console.log(stringa.trim()); // eliminina gli spazi all'inizio e alla fine
console.log(stringa.startsWith("sono")); // true o false se il metodo non è uguale alla stringa
console.log(stringa.trim().toLowerCase().startsWith("sono")); //concatenazione più metodi
