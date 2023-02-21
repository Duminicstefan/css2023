// 'use strict';

// let hasDriverLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriverLicense) console.log(" pot merge la condus");

// const private = '123';


// FUNCTII PART 1!!!(FUNCTII IN FUNCTII)
// function logger() {
//     console.log("numele meu este Ion")
// };

// logger();
// logger();
// logger();
// function cutInPieces(fruit) {
//     return fruit * 4;
// }


// function fruitProcessor(apples, oranges) {
//     const applePieces = cutInPieces(apples);
//     const orangePieces = cutInPieces(oranges);
//     const juice = `avem suc din ${applePieces} si din ${orangePieces} portocale`;
//     return juice;
// }
// console.log(fruitProcessor(2,3))

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
//    CHALANGE FUNCTII 1 !!!

// function describeCountry(tara, populatie, capitala) {
//     const country = `${tara} are populatie ${populatie} si capitala ei este ${capitala}`;
//     return country;
// }
// const Finlanda = describeCountry ("Finlanda",10,"Helsinki");
// console.log(Finlanda);
// const Romania = describeCountry("Romania" ,20,"Bucuresti");
// console.log(Romania);
// const Croatia =describeCountry("Croatia" ,15,"Pula");
// console.log(Croatia);


// FUNCTII PART 2!!!!

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);
// console.log(age1);

//  const calcAge2 = function(birthYear) {
//     return 2037 - birthYear;

// }
// age2 = calcAge2(1991);

// console.log(age2);
// CHALANGE FUNCTII 2!!!

//    function percentageOfWorld1 (populatie){
//     return (populatie / 7900) *100;
//    }
//    const populatie1 = percentageOfWorld1 (20);
//    const populatie2 = percentageOfWorld1 (50);
//    const populatie3 = percentageOfWorld1 (80);
//    console.log(populatie1,populatie2,populatie3);

// FUNCTII PART 3!!!!

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;

// }
// age2 = calcAge2(1991);
// console.log(age2);


// const calcAge3 = birthYear => 2037 - birthYear;

// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntillRetierment = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retierment = 65 - age;
//     return `${firstName} va iesi la pensie peste ${retierment} ani`
// }
// console.log(yearsUntillRetierment(1991,"ion"));
// console.log(yearsUntillRetierment(1989,"andrei"));

// CHALANGE FUNTII PART 3!!!

// const percentageOfWorld3 = (populatie) => {
//     const populatieOne = (populatie / 7900) *100;
//     return `Romania are populatia medie de ${populatieOne}`
// }
// console.log(percentageOfWorld3(20));
//  FUNCTII IN FUNCTII!! CHALANGE!!
// const describePopulation = function(country,population){
//     const percentege=percentageOfWorld1(population);
//     const description =`${country} has ${population} milion people, which is about ${percentege}% of the world`;
//     console.log(description);

//  };
//  describePopulation("Portugal",10);
//  describePopulation("China",1441);
//  describePopulation("USA",332);

// function percentageOfWorld1(populatie) {
//     return (populatie / 7900) * 100;
// }


