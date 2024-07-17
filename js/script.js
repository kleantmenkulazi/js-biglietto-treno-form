console.log('JS collegato');



const km = prompt('Quanti KM devi percorrere?');
console.log('km', km, typeof km);
const kmInNumber = parseInt(km);
console.log('kmInNumber', kmInNumber, typeof kmInNumber);


const age = prompt('Qual è la tua età ?');
console.log('age', age, typeof age);
const ageInNumber = parseInt(age);
console.log('ageInNumber', ageInNumber, typeof ageInNumber);

if (isNaN(ageInNumber) || isNaN(kmInNumber)) {
    alert('Mannaggia a te');
}
else {
    let price = kmInNumber * 0.21;
    console.log('price', price, typeof price);



    if (ageInNumber < 18) {
        console.log('Minorenne');

        price *=0.8;
        console.log('price', price, typeof price);
    }
    else if (ageInNumber > 65) {
        console.log('Over 65');

        price *=0.6;
        console.log('price', price, typeof price);
    }

    alert('Il prezzo del biglietto è euro' + price.toFixed(2));
}