//muutuja on väärtuse nimi (nagu silt)'

let score;
score = 100;
let age = 25;

const schoolName = "Greenwood High";

let score1 = 0;
score1 = 50;
console.log("Score: " + score1);

let age1;
age1 = 30;

const price = 3;
const deileveryFee = 2;
const totalCost = price + deileveryFee;
console.log("Total cost: " + totalCost);

//inkrement ja dekrement
let apples = 5;
apples ++;
console.log("Apples: " + apples);
apples --;
console.log("Apples: " + apples);


//+-
let coins = 10;
coins += 5;
console.log("Coins: " + coins);

//-=

let points = 20;
points -= 10;
console.log("Points: " + points);

//Kuidas muuta muutuja väärtust
let a = 5;
let b = 10;

const temp = a;  //Ajutine muutuja
a = b
b = temp
console.log("a: " + a + ", b: " + b);

//Nähtavus (scope)
const value = 100;  //Globaalne muutuja
{
    const value = 200;   //Kohalik muutuja
    console.log("Local value: " + value);
}
console.log("Global value: " + value);