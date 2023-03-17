var today = new Date();

//update the text content of the element with id "currentDay" to display the current date and time in the desired format"

var currenDayElement = document.getElementById("currentDay");
currentDayElement.textContent = today.toLocaleDateString("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
});

// get the current hour//
var currentHour = today.getHours();

// select the time tows and text areas //
var timeBlocks = document.querySelectorAll("time-block");
var textAreas = document.querySelectorAll("textarea");

//select all save buttons//
var saveButtons = document.querySelectorAll(".saveBtn");

// select the local storage message//

var localStorageMsg = document.getElementById("local-storage-msg");
