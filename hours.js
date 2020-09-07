var currentHour = moment().format('H');
var hourElements = ["hour-9", "hour-10", "hour-11", "hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17"];

function checkHours() {
    for (var i = 0; i < hourElements.length; i++) {
    //- read value from time property
    //- check current hour vs time slot (to determine color of text area: gray, red or green)
        if (parseInt(currentHour) < parseInt(hourElements[i].match(/(\d+)/))) {
        //- assign proper class (.past .present .future) based on comparison to current hour (<, > or =)
            $("#" + hourElements[i]).removeClass("present").addClass("future");
        } else if (parseInt(currentHour) > parseInt(hourElements[i].match(/(\d+)/))) {
            $("#" + hourElements[i]).removeClass("present").addClass("past");
        } else {
            $("#" + hourElements[i]).removeClass("present").addClass("present");
        }
    }
}

checkHours();