//get fizz and buzz values from the user
//controller function
function getValues() {
    //get user values from page
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    
    //parse for integers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    //check that the values are integers
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        //call FizzBuzz
        let fbArray = fizzBuzzA(fizzValue, buzzValue);
        //call displayValues
        displayValues(fbArray);
    }
    else {
        alert("You must enter integersg!");
    }
    
}

//For-Loop Solution
//logic function
function fizzBuzzA(fizzValue, buzzValue) {
    //initialize empty array
    let returnArray = [];
    //loop from 1 to 100
    for (let i = 1; i <= 100; i++) {
        //check to see if divisible by both fizz and buzz value
        if(i % fizzValue == 0 && i % buzzValue == 0) {
            returnArray.push('FizzBuzz');
        }
        //check to see if divisible by fizz value
        else if(i % fizzValue == 0) {
            returnArray.push('Fizz');
        }
        //check to see if divisible by fizz value
        else if(i % buzzValue == 0) {
            returnArray.push('Buzz');
        }
        else {
            returnArray.push(i);
        }
    }
    return returnArray;
}

//Switch Statement Solution
//logic function
function fizzBuzzB(fizzValue, buzzValue) {
    let returnArray = [];
    let Fizz = false;
    let Buzz = false;

    for (let i = 1; i <= 100; i++) {
        
        Fizz = i % fizzValue == 0;
        Buzz = i % buzzValue == 0;
        
        switch(true) {
            case Fizz && Buzz: {
                returnArray.push('FizzBuzz');
                break;
            }
            case Fizz: {
                returnArray.push('Fizz');
                break;
            }
            case Buzz: {
                returnArray.push('Buzz');
                break;
            }
            default: {
                returnArray.push(i);
                break;
            }
        }
    }
    return returnArray;
}

//Ternary Operator Solution
//logic function
function fizzBuzzC(fizzValue, buzzValue) {
    let returnArray = [];

    for (let i = 1; i <= 100; i++) {
        
        let value = ((i % fizzValue == 0 ? 'Fizz' : '') + (i % buzzValue == 0 ? 'Buzz' : '') || i)
        returnArray.push(value);        
    }
    return returnArray;
}

//Display reversed string to user
//view function
function displayValues(fbArray) {
    //get table body element from the page
    let tableBody = document.getElementById("results");
    //get template row
    let templateRow = document.getElementById("fbTemplate");

    //clear table first
    tableBody.innerHTML = "";

    for (let i = 0; i < fbArray.length; i += 5) {
        
        let tableRow = document.importNode(templateRow.content, true);
        
        //grab all the td tags to put in the array
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbArray[i]);
        rowCols[0].textContent = fbArray[i];

        rowCols[1].classList.add(fbArray[i+1]);
        rowCols[1].textContent = fbArray[i+1];

        rowCols[2].classList.add(fbArray[i+2]);
        rowCols[2].textContent = fbArray[i+2];

        rowCols[3].classList.add(fbArray[i+3]);
        rowCols[3].textContent = fbArray[i+3];

        rowCols[4].classList.add(fbArray[i+4]);
        rowCols[4].textContent = fbArray[i+4];

        tableBody.appendChild(tableRow);
    }
}