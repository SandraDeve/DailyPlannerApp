# Work Day Scheduler

# Overview

Simple calendar application that enables users to store events for each hour of the day by making modifications to the provided starter code. The application is capable of running on web browsers and includes HTML and CSS that is dynamically updated using jQuery. To work with date and time, it is necessary to utilize the Moment.js library.

The application functionality is demonstrated in the animation below:

![A user clicks on slots on the color-coded calendar and edits the events.](./images/05-third-party-apis-homework-demo.gif)

I have been provided with the starter code. I had tutoring session regarding this project and I used as a quide following sources:

https://momentjs.com/docs/#/displaying/format/
https://api.jquery.com/
https://www.w3schools.com/html/html5_webstorage.asp
https://www.w3schools.com/jquery/jquery_css_classes.asp
https://www.w3schools.com/jquery/jquery_events.asp

# Description

Upon opening the planner, the calendar displays the current day at the top. The time blocks for standard business hours (9AM to 5PM) are presented when scrolled down. These time blocks are color-coded to signify whether they are in the past, present, or future.

# Usage

The user can select a time block to enter an event, which can be saved by clicking the save button located on the right side of the block. The text for the event is saved in local storage, allowing it to persist even after the page is refreshed.
