const number = 5;
const result1 = number.toString(2);
console.log("Arv 5 binaarsusteemis: " + result1);

/*

6/2 = 3 jääk 0
3/2 = 1 jääk 1
1/2 = 0 jääk 1
110

*/


const number2 = 6;
const result2 = number2.toString(2);
console.log("Arv 6 binaarsusteemis: " + result2);



const a = 110;
const result3 = parseInt(a, 2);
console.log("Binaararv 110 kümnendsüsteemis:" + result3);


const binary = "1010";
const result4 = parseInt(binary, 2);
console.log("Binaararv 1010 kümnendsüsteemis: " + result4);


const number3 = 0;
const result5 = number3.toString(2);
console.log("Arv @ binaarsüsteemis: " + result5);


//Teisendage kümnendsüsteemist binaarsüsteemi
//100 6871 58 188714

//vastupidi teisendamine binaarüssteemist kümnendsüsteemi
//1001 01100101 10100111 101110111101


const n1 = 100;
const r1 = n1.toString(2);
console.log("Arv 100 binaarsüsteemis: " + r1);

const n2 = 6871;
const r2 = n2.toString(2);
console.log("Arv 6871 binaarsüsteemis: " + r2);

const n3 = 58;
const r3 = n3.toString(2);
console.log("Arv 58 binaarsüsteemis: " + r3);

const n4 = 188714;
const r4 = n4.toString(2);
console.log("Arv 188714 binaarsüsteemis: " + r4);


const n5 = "1001";
const r5 = parseInt(n5, 2);
console.log("Binaararv 1001 kümnandsüsteemis: " + r6);

const n6 = "01100101";
const r6 = parseInt(n6, 2);
console.log("Binaararv 01100101 kümnandsüsteemis: " + r6);

const n7 = "10100111";
const r7 = parseInt(n7, 2);
console.log("Binaararv 10100111 kümnandsüsteemis: " + r7);

const n8 = "101110111101";
const r8 = parseInt(n8, 2);
console.log("Binaararv 101110111101 kümnandsüsteemis: " + r8);