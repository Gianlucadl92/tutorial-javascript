const prova = [1, 2, 3, 4, 5, 5, 5, 5];
console.log(prova);
const esempio = new Set(prova);
// new set serve ad accedere a siboli unici senza possibilità di ripetersi 1 2 3 4 5

// esempio.add(45);

console.log(esempio);

const prova2 = ["a", false, 3, 3, [1, 2, 3], esempio];

const esempio2 = new Set(prova2);

console.log(esempio2);
