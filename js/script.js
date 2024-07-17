console.log('JS collegato');




const calcForm = document.querySelector('form');
calcBtn.addEventListener(
    'submit', 
    function (submitEvent) {
        submitEvent.preventDefault()
        console.log('submitEvent', submitEvent, typeof submitEvent);

        const errorMsg = document.getElementById('error-msg');
        errorMsg.style.display = 'none'


    const kmInput = document.getElementById('km');
    const km = kmInput.value;
    console.log('km', km, typeof km);
    const kmInNumber = parseInt(km);
    console.log('kmInNumber', kmInNumber, typeof kmInNumber);
    
    const ageInput = document.getElementById('age');
    const age = ageInput.value;
    console.log('age', age, typeof age);
    const ageInNumber = parseInt(age);
    console.log('ageInNumber', ageInNumber, typeof ageInNumber);
    
    if (isNaN(ageInNumber) || isNaN(kmInNumber)) {
        const errorMsg = document.getElementById('error-msg');
        errorMsg.style.display = 'block'
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
    
        const resultSpan = document.getElementById('result');
        resultSpan.innerHTML = price.toFixed(2);
        }

    }
);