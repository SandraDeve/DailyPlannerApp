// variables//
var saveBtn = $(".saveBtn");

// Display the current day at the top of the calendar//
function displayCurrentDay() {
  var currentDate = moment().format("dddd MMMM Do YYYY");
  $("#currentDay").text(currentDate);
}
// This function color codes each time block based on the current time//
function colorCodeTimeBlocks() {
  var currentHour = moment().hours();

  // Loop through each time block element using jQuery//
  $(".time-block").each(function () {
    // Get the hour of this time block by parsing its ID (which is a string)//
    var hour = parseInt($(this).attr("id"));

    if (hour > currentHour) {
      $(this).addClass("future");
    } else if (hour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
  });
}
