// if else, else if

// if võimaldab meil teha otsuseid, kui tingimus on tõene, siis kaivitub if plokk, kui tinigmus on väär

// if täidab looksulgudes () oleva ploki, kui tingimus on tõene, kui tingimus on väär, siis if plokk vahele jäetakse

const age = 17;
if (age >= 18) {
    console.log("Täiskasvanu.");
} else {
    console.log("Noor.");
}

const points = 75;
if (points >= 90){
    console.log("Suurepärane!");
} else if (points >= 50) {
    console.log("Arvestatud!");
} else {
    console.log("Proovi uuesti!");
}