// JS
// add current day and date with moments to #currentDay
var date = moment().format('llll');
var currentHour = moment().format('H');

document.getElementById("currentDay").append(date);
document.getElementById("testing").append(currentHour);



// JS functions
var hourElements = ["hour-9", "hour-10", "hour-11", "hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17"];
var task = $("<textarea>");


    function readFromLocalStorage () {
//     <!-- this is to look for anything saved previously in local storage -->
//         use for loop
for (var i = 0; i < hourElements.length; i++) {
//- read value from time property
// console.log(hourElements[i]);

if (parseInt(currentHour) < parseInt(hourElements[i].match(/(\d+)/))) {
    // console.log(hourElements[i]);
    // document.getElementById("hourElements[i].innerHTML").className = "future";
    // $(hourElements[i].text).addClass("future");
    // $(hourElements[i].text).removeClass("present");
    $("#" + hourElements[i]).addClass("future");
    // $("#" + hourElements[i]).removeClass("present");
}
else if (parseInt(currentHour) > parseInt(hourElements[i].match(/(\d+)/))) {
    $("#" + hourElements[i]).addClass("past");
}

else {$("#" + hourElements[i]).addClass("present")}

//- assign as text back in element (using its class (.description) and id (specific to each hour)

//- check current hour vs time slot (to determine color of text area: gray, red or white)

//- assign proper class (.past .present .future) based on comparison to current hour (<,>, === or <=, >=, ===)

        }
    }


//     function writeToLocalStorage ()
//     <!-- this is to save a value from the text area to local storage, using the hour as the key when save button is clicked -->
//         add click event to save button class to run function
//             - read text from text area (class = "description", should be parent of save button)
//             - read schedule hour
//             - trim text, trim schedule hour
//             - send to local storage



//     call readFromLocalStorage(); 
readFromLocalStorage(); 