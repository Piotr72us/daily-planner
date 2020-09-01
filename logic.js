// JS

// // add current day and date with moments to #currentDay

var time = moment().format('llll');
var currentHour = moment().format('H');
var nine = document.getElementById("hour-9");
var ten = document.getElementById("hour-10");
var eleven = document.getElementById("hour-11");
var twelve = document.getElementById("hour-12");
var one = document.getElementById("hour-13");
var two = document.getElementById("hour-14");
var three = document.getElementById("hour-15");
var four = document.getElementById("hour-16");
var five = document.getElementById("hour-17");


document.getElementById("currentDay").append(time);
document.getElementById("testing").append(currentHour);


if (9 < currentHour) {
    // document.getElementClassName("description").className = "past"
    $("#hour-9").addClass("future").removeClass("past");
}
else if (9 > currentHour) {
    $("#hour-9").addClass("past").removeClass("future");
}

else {
    console.log("ok")
}






















    // function readFromLocalStorage() {
    //     var readStorage = JSON.parse(window.localStorage.getItem(readStorage)) || [];
        
    //     var hours = {
    //         nine: nine,
    //         ten: ten,
    //         eleven: eleven,
    //         twelve: twelve,
    //         onepm: onepm,
    //         twopm: twopm,
    //         threepm: threepm,
    //         fourpm: fourpm,
    //         fivepm: fivepm,
    //     }
    
    //     readStorage.push(hours);

    //     window.localStorage.setItem("readStorage", JSON.stringify(readStorage));
        
    // if (time)
    
    
    // };
// //     <!-- this is to look for anything saved previously in local storage -->
// //         use for loop
// //             - read value from time property
// //             - assign as text back in element (using its class (.description) and id (specific to each hour)
// //             - check current hour vs time slot (to determine color of text area: gray, red or white)
// //                 - assign proper class (.past .present .future) based on comparison to current hour (<,>, === or <=, >=, ===)

// //     function writeToLocalStorage ()
// //     <!-- this is to save a value from the text area to local storage, using the hour as the key when save button is clicked -->
// //         add click event to save button class to run function
// //             - read text from text area (class = "description", should be parent of save button)
// //             - read schedule hour
// //             - trim text, trim schedule hour
// //             - send to local storage
// //     call readFromLocalStorage();