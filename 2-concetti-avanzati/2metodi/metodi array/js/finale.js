const frontend = ["react", "javascript", "css", "html"];

//length
console.log(frontend.length); // 4

//concat
const backend = ["go", "java", "C#", "python"];
const developer = frontend.concat(backend); // concatenazione array frontend + backend

//reverse
console.log(developer.reverse()); // array al contrario

//unshift
developer.unshift("dart"); // aggiungo nuovo elemento davanti

//shift
developer.shift();
console.log(developer.shift()); // elimono elemento davanti

//push
developer.push("swift"); // aggiunge elementi alla fine

//pop
developer.pop();
console.log(developer.pop()); // rimuove elementi alla fine

//slice
console.log(developer.slice(1, 4)); // ritorna una parte dell'array selezionato

//splice - MUTA ARRAY PRINCIPLAE
console.log(developer.splice(1, 3)); // rimuove una parte dell'array

//splice - Replace item
developer.splice(1, 0, "java", "kotlin"); // rimuove e aggiunge elementi dell'array

console.log("DEVELOPER", developer);
