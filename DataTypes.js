//Andmetüüp ja andmestruktuur

let age =25;
console.log("Type of age: " + typeof age);

const Myname = "Anna";
console.log("Type of name: " + typeof Myname);

const isGreater = 10 > 5;
console.log("Type of isGreater: " + typeof isGreater);

//Muutuja ilma väärtuseta
let answer;
console.log("Type of answer: " + typeof answer);

//null väärtus
const emptyValue = null;
console.log("Type of emptyValue: " + typeof emptyValue);
console.log(emptyValue === null);

//Tüübi teisendamine/võrdlemine
const bb = 5;
const cc = "5";
console.log(bb == cc);

//Võrldeme arvude ja stringide liitmist
console.log(5 + 5);
console.log("5" + "5");

//Teisendame
const text = String(25);
console.log("Type of text: " + typeof text);

//Objektid ja massiivid
const student = {
    name: 'John',
    age: 20
};
console.log(student.name, student.age);


const student2 = {
    name: "Jane",
    age: 22
};
student2.age = 23;
student2.school = "High School";
console.log(student2.name, student2.age, student2.school);


//Massiiv (Array)
const grades = [90, 85, 78, 92];
console.log("Grades: " + grades[0]);
console.log(Array.isArray(grades));

//Pesastatud objekt
const student3 = {
    name: "Alice",
    address: {
        city: "New York",
        zip: "10001"
    }
};
console.log(student3.name, student3.address.city, student3.address.zip);


//Set
const colors = ["red", "green", "blue", "red", "green"];
const uniqueColors = new Set(colors);
console.log("Unique colors: " + Array.from(uniqueColors));
console.log(uniqueColors.has("blue"));
console.log(uniqueColors.size);

/*Ülesanne
Looge autode markide massiiv, milles on korduvaid elemente
Leidke Set abil unikaalsed elemeded ja väljastage need konsooli.
Leidke massiivi suurus enne ja pärast Set-i loomist.
*/

const cars = ["Audi", "BMW", "Volvo", "BMW", "Toyota", "Audi"];
console.log("Before Set:" + cars.length);
const uniqueCars = new Set(cars);
console.log("Unique Cars: " + Array.from(uniqueCars));
console.log("After Set: " + uniqueCars.size);