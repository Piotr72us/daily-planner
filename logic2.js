// JS

// add current day and date with moments to #currentDay
var date = moment().format('llll');
document.getElementById("currentDay").append(date);

function readFromLocalStorage () {
    $(".time-block").each(function(){
        var readId = $(this).attr("id");
        var readTextEl = localStorage.getItem(readId);
        // to look for anything saved previously in local storage
        if (readTextEl !== null) {
            // assign as text back in element (using its id (specific to each hour)
            $(this).children(".description").val(readTextEl);
        }
    });
}

// click event attached to save button class to run function
$(".saveBtn").click(function() {
    // to save a value from the text area to local storage, using the hour as the key when save button is clicked
    var hourId = $(this).parent().attr("id");
    var textEl = $(this).siblings(".description").val().trim();
    // send to local storage
    localStorage.setItem(hourId, textEl);
});

// call readFromLocalStorage(); 
readFromLocalStorage();