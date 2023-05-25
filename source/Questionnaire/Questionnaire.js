const exitButton = document.getElementById("exitButton");
const nameInput = document.getElementById("fname");
const birthdayInput = document.getElementById("birthday");
//Import DOMSanitize


let userName = "";
let birthday = "";


/**
 * The following event listeners looks for change within the input to 
 * then store the information to the userAnswer
 */
nameInput.addEventListener("change", (event)=>{ 
  let name = parseNumbers(event.target.value);
  //Feature: Reject input not replace?
  nameInput.value = name;
  userName = name;
});

// function onlyLetters(str) {
// 	return /^[A-Za-z]*$/.test(str);
// }

birthdayInput.addEventListener("change",(event)=>{
  birthday = event.target.value;
})

function parseNumbers(string){
  return string.replace(new RegExp("[0-9]", "g"), "");    ///\D/g
}

/**
 * This Exit button. This function checks:
 * - If the user has inputted all required information
 * - Maybe if that information is safe or not
 * - Creates UI to prompt the user to confirm their selection
 * - Moves to the next page after all checks
 */
exitButton.addEventListener("click", ()=>{
  //Check user has inputted all required information
  if (userName == "" || birthday == "")
  {
    //Theorectically we have custom dialogs or something else that pops up to show that user hasn't inputted
    alert("Please fill out required fields!");
    //Idk play some spooky sound
    return;
  }
  //Moves to next page (Currently submit is used to call window.onbeforeunload)
  window.location.href = "../HoroscopeDisplay/horoscope.html";
  console.log("Exitting page");
})

/**
 * On Exit Function -> Stores user data into local storage for further use
 */
window.onbeforeunload = function(){
  //? Clear Local storage???
  localStorage.clear();
  //Store data into local storage
  localStorage.setItem("UserName", userName);
  localStorage.setItem("Birthday", birthday);
}