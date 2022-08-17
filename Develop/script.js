var $currentDay = $("#currentDay");
var $currentDate = moment().format("dddd, MMMM Do");

// 1. opening the planner up, day is displayed on top
$(document).ready(function() {
    $currentDay.text($currentDate);
});

// 2. when user scrolls down, they see time blocks for 9am-5pm

// 3. when user views said blocks, they are color coded to represent past, present or future

// 4. when user clicks time block, they can enter an event
document.addEventListener("click", enterEvent)

function enterEvent() {
    document.getElementById("container");
    
}
// 5. when event is saved, it will stay in local storage

// 6.cwhen page is refrshed, saved events stay the same