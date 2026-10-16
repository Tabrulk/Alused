//massiiv on kindlas järjekorras olevate väärtuste kogum

//index - iga väärtusel on oma järjekorranumber, mis algab 0-st

//lugemine näites number [0] - loeb esimese väärtuse, number [1] loeb teise väärtuse

//push() - lisab uue väärtuse massiivi lõppu
//pop() - eemaldab viimase väärtuse massiivist
//forEach() - käivitab funktsiooni iga massivi väärtuse jaoks
//map() - loob uue massiivi, kus iga väärtus on muudetud funktsiooni abil
//sort() - sorteerib massiivi väärtused

const fruits = ["apple", "banana", "cherry"];
console.log("Fruits: " + fruits);

const numbers = [1, 2, 3, 4, 5];
console.log("First number: " + numbers[0]);
console.log("Second number: " + numbers[1]);
console.log("Viimane number: " + numbers[numbers.length - 1]);


//asendame massiivi väärtuse
numbers[2] = 10;
console.log("Updated numbers: " + numbers);

//lisame massiivi väärtuse
numbers.push(6);
console.log("Numbers after push: " + numbers);

//eemaldame massivi väärtuse
numbers.pop();
console.log("Updated numbers: " + numbers);

//forEach() - käivitab funktsiooni iga massiivi väärtuse jaoks
numbers.forEach(function(number){
    console.log("Number: " + number)
});

//map() - loob uue massiivi, kus iga väärtus on muudetud funktsiooni abil
const doubledNumbers = numbers.map(function(number){
    return number * 2;
})
console.log("Doubled numbers: " + doubledNumbers);

//massiiv massiivis
const table = [
    [1, 2, 3],
    [4, 5, 6],
];
console.log("First row, second column: " + table[0][1]);

//Ülesanne
/*
Teil on massiiv
[6, 3, 8, 2, 5]
Leidke massivist esimene element, viimane element.
Asendage esimene element väärtusega 10, viimane element väärtusega 20.
Väljasta muudetud massiiv konsooli ja selle suurus
*/

const numbrid = [6, 3, 8, 2, 5];
console.log("Esimene element: " + numbrid[0]);
console.log("Viimane element: " + numbrid[numbrid.length -1]);

numbrid[0] = 10;
numbrid[numbrid.length - 1] = 20;
console.log("Muudetud massiiv: " + numbrid);
console.log("Massiivi suurus: " + numbrid.length);