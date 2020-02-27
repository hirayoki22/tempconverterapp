class TemperatureConverter {
    static convertTemp(value, fromUnit, toUnit) {
        let result;

        switch (fromUnit) {
            case 'celcius':
                if (toUnit == 'farenheit') {
                    result = (value * 9/5) + 32;
                    UI.updateFormula(value, 'C', 'F', '× 9/5) + 32 =', result);
                }
                else if (toUnit == 'kelvin') {
                    result = value + 273.15;
                    UI.updateFormula(value, 'C', 'K', ' + 273.15 =', result);
                }
                break;

            case 'farenheit':
                if (toUnit == 'celcius') {
                    result = (value - 32) * 5/9;
                    UI.updateFormula(value, 'F', 'C', '- 32) × 5/9 =', result);
                }
                else if (toUnit == 'kelvin') {
                    result = (value - 32) * 5/9 + 273.15;
                    UI.updateFormula(value, 'F', 'K', '- 32) × 5/9 + 273.15 =', result);
                }
                break;

            case 'kelvin':
                if (toUnit == 'celcius') {
                    result = value - 273.15;
                    UI.updateFormula(value, 'K', 'C', ' - 273.15) =', result);
                }
                else if (toUnit == 'farenheit') {
                    result = (value - 273.15) * 9/5 + 32;
                    UI.updateFormula(value, 'K', 'F', ' - 273.15) × 9/5 + 32 =', result);
                }
        }
        return result;
    }
}

class UI {
    static dynamicOutputResult(input1, input2) {
        let fromUnit = input1.nextElementSibling.value;
        let toUnit   = input2.nextElementSibling.value;
        
        if (input1.value != '' && !isNaN(input1.value)) {
            input2.value = TemperatureConverter.convertTemp(parseFloat(input1.value), fromUnit, toUnit);
        } else {
            input2.value = '';
        }
    }

    static dynamicSelection(ele1, ele2) {
        if (ele1.value == ele2.value) {
            switch (ele1.value) {
                case 'celcius':
                    ele2.value = 'farenheit';
                    break;
                
                case 'farenheit':
                    ele2.value = 'celcius';
                    break;
    
                case 'kelvin':
                    ele2.value = 'celcius';
                    break;
            }
        }
    }

    static updateFormula(value, fromUnit, toUnit, formula, result) {
        let output = document.querySelector('.formula-output');

        /\d{6,}e*/.test(value.toString()) ? 
        value = value.toExponential(3) : value;
    
        /\d{7,}e*/.test(result.toString()) ? 
        result = result.toExponential(0) : result;
    
        output.innerHTML = `(${value}°<strong>${fromUnit}</strong> ${formula} ${result}°<strong>${toUnit}</strong>`;
    }
}

// Event: General Input

let frstInput = document.querySelector('[name="unit-input-1"]').addEventListener('input', function () {
    UI.dynamicOutputResult(this, document.querySelector('[name="unit-input-2"]'));
});

let scndtInput = document.querySelector('[name="unit-input-2"]').addEventListener('input', function () {
    UI.dynamicOutputResult(this, document.querySelector('[name="unit-input-1"]'));
});


// Event: Select Input

let frstSelect = document.querySelector('.first-select').addEventListener('change', function() {
    UI.dynamicSelection(this, document.querySelector('.second-select'));
    UI.dynamicOutputResult(document.querySelector('[name="unit-input-1"]'), document.querySelector('[name="unit-input-2"]'));
});

let scndSelect = document.querySelector('.second-select').addEventListener('change', function() {
    UI.dynamicSelection(this, document.querySelector('.first-select'));
    UI.dynamicOutputResult(document.querySelector('[name="unit-input-1"]'), document.querySelector('[name="unit-input-2"]'));
});


let numbers = [10, 21, 47, 93, 8, 62, 80, 145, -145, 3];

const SUM = numbers.map(num => num).reduce((a, b) => a + b, 0);
const MAX = numbers.map(num => num).sort((a, b) => a - b).pop();
const MIN = numbers.map(num => num).sort((a, b) => a - b).shift();
const AVG = numbers.map(num => num).reduce((a, b) => a + b, 0)/numbers.length;

// console.log(`SUM: ${SUM}\r
// MAX: ${MAX}\r
// MIN: ${MIN}\r
// AVG: ${AVG}`);

let people = [
    { name: 'Bryan',  age: 44 },
    { name: 'Alison', age: 26 },
    { name: 'Amber',  age: 25 },
    { name: 'Hanna',  age: 17 },
    { name: 'Samuel', age: 52 },
    { name: 'Harry',  age: 31 },
    { name: 'Megan',  age: 29 },
    { name: 'Phil',   age: 19 },
];

console.log(people.filter(person => (person.age > 25 && person.name.match(/^a/i))));