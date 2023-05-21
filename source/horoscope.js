//const sanitizer = new Sanitizer();

var birthday;
var IndividualName;
var horoscopeArray;
var submitButton;

window.addEventListener("load", init);
async function init(){
    try{
        horoscopeArray = await fetch('horoscope.json');
        console.log(horoscopeArray);
        horoscopeArray = await horoscopeArray.json();
        horoscopeArray = horoscopeArray['data'];
        console.log(horoscopeArray);
        submitButton = document.getElementById("submitButton");
        submitButton.addEventListener("click", outputHoroscope);
        return 1;
    }
    catch(error){
        console.error(error);
        return 1;
    }
}
function exampleTest(num){
    return num;
}
/*
 * Based on the input name and birthday, a horoscope reading
 * will be outputted to the user 
 */
function outputHoroscope() {
    event.preventDefault();
    console.log("output");
    individualName = document.getElementById("fname").value;
    birthday = document.getElementById('birthday').value;

    //individualName = sanitizer.sanitize(individualName);
    //birthday = sanitizer.sanitize(birthday);
    birthday = new Date(birthday);

    // Create a new Date object
    let todayDate = new Date();

    // Get the numerical day of the month
    let todayDay = todayDate.getDate();
    let birthdayMonth = birthday.getMonth();
    let hashValue = (todayDay+birthdayMonth)%12;
    console.log(hashValue);

    /*
    // Check if name, birthday, or both is missing
    if (individualName == ''){
        alert("Speak thy name");
    }
    else if(birthday.replace(/\s+/g, '') == ''){
        alert("Enter thy birth date");
    }
    */
    
        let horoscopeOutput = document.getElementById('horoscopeOutput');
        console.log(horoscopeArray[hashValue]['horoscope']);
        horoscopeOutput.innerHTML=`${horoscopeArray[hashValue]['horoscope']}`;  
    
} 

//console.log(submitButton);
module.exports = exampleTest;
