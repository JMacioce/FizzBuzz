//get string from app page
//controller function
function getValue() {
    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;    
    
    if (userString.length > 1) {
        //call reverse string passing it the value of userString and setting that to revString
        let backWords = reverseString(userString);
        //calling displayString
        displayString(backWords);
    }
    else {
        alert("You must enter at least 2 characters to reverse your string!");
    }
    
}

//Reverse string
//logic function
function reverseString(userString) {
    //initialize empty array
    let backWords = [];
    //reverse a string using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        backWords += userString[index];
    }
    return backWords;
}

//Display reversed string to user
//view function
function displayString(backWords) {
    //write to page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${backWords}`;
    //show alert box
    document.getElementById("alert").classList.remove("invisible");
}