//Tsükkel on korduv tegevus, mis kestab seni, kuni on täidetud mingi tingimus

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Summa on: " + sum);

for (const number of numbers) {
    console.log(number);
}

let lives = 3;
while (lives > 0) {
    console.log("Elusid alles: " + lives);
    lives--;
}

let count = 0;
do{
    console.log("Loendur: " + count);
    count++
} while (count < 5);