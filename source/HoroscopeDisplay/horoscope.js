//const sanitizer = new Sanitizer();

var birthday;
var horoscopeArray;
var submitButton;

window.addEventListener("load", init);
async function init(){
    try{
        horoscopeArray = await fetch('horoscope.json');
        horoscopeArray = await horoscopeArray.json();
        horoscopeArray = horoscopeArray['data'];
        submitButton = document.getElementById("submitButton");
        submitButton.addEventListener("click", outputHoroscope);

        //set birthday and name for testing purposes
        localStorage.setItem("UserName", 'nikan');
        localStorage.setItem("Birthday", '02/02/2001');
        console.log(localStorage);
        return 1;
    }
    catch(error){
        console.error(error);
        return 0;
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


    let localBirthday = localStorage.getItem('Birthday');
    console.log(localStorage);
    console.log(localBirthday);
    birthday = new Date(localBirthday);

    // Create a new Date object
    let todayDate = new Date();

    // Get the numerical day of the month
    let todayDay = todayDate.getDate();
    let birthdayMonth = birthday.getMonth();
    let hashValue = (todayDay+birthdayMonth)%12;
    console.log(hashValue);

   
    
    let horoscopeOutput = document.getElementById('horoscopeOutput');
    console.log(horoscopeArray[hashValue]['horoscope']);
    horoscopeOutput.innerHTML=`${horoscopeArray[hashValue]['horoscope']}`;  
    
} 

//console.log(submitButton);
module.exports = exampleTest;
