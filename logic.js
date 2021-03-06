// JS

// add current day and date with moments to #currentDay
var date = moment().format('llll');
document.getElementById("currentDay").append(date);

// variables to select text element of each timeblock
var text9 = document.querySelector("#text9");
var text10 = document.querySelector("#text10");
var text11 = document.querySelector("#text11");
var text12 = document.querySelector("#text12");
var text13 = document.querySelector("#text13");
var text14 = document.querySelector("#text14");
var text15 = document.querySelector("#text15");
var text16 = document.querySelector("#text16");
var text17 = document.querySelector("#text17");

function readFromLocalStorage () {
    // <!-- to look for anything saved previously in local storage -->
    var lastUser = JSON.parse(window.localStorage.getItem("userInput")) || [];
    // assign as text back in element (using its id (specific to each hour)
    text9.textContent = lastUser.text9;
    text10.textContent = lastUser.text10;
    text11.textContent = lastUser.text11;
    text12.textContent = lastUser.text12;
    text13.textContent = lastUser.text13;
    text14.textContent = lastUser.text14;
    text15.textContent = lastUser.text15;
    text16.textContent = lastUser.text16;
    text17.textContent = lastUser.text17;
}

function writeToLocalStorage () {
    // <!--to save a value from the text area to local storage, using the hour as the key when save button is clicked -->
    // read text from text area related to schedule hour and trim text         
    var userInput = {
        text9: text9.value.trim(),
        text10: text10.value.trim(),
        text11: text11.value.trim(),
        text12: text12.value.trim(),
        text13: text13.value.trim(),
        text14: text14.value.trim(),
        text15: text15.value.trim(),
        text16: text16.value.trim(),
        text17: text17.value.trim()
    };
    // send to local storage
    window.localStorage.setItem("userInput", JSON.stringify(userInput));
}

// click event attached to save button class to run function
$(".saveBtn").click(function() {
    writeToLocalStorage();
});

// call readFromLocalStorage(); 
readFromLocalStorage();