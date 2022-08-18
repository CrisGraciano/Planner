var $currentDay = $("#currentDay");
var $currentDate = moment().format("dddd, MMMM Do");

var $timeBlocks = $(".timeblock");

// 1. opening the planner up, day is displayed on top (done)
$(document).ready(function() {
    $currentDay.text($currentDate);
});

// 2. when user scrolls down, they see time blocks for 9am-5pm (done)

// 3. when user views said blocks, they are color coded to represent past, present or future
function colorTimeBlocks() {
    $timeBlocks.each(function() {
        $thisBlock = $(this);
        var thisBlockHour = parseInt($thisBlock.attr("hour"));

        if (thisBlockHour == currentHour) {
            $thisBlock.addClass("current").removeClass("past upcoming");
        }
        if (thisBlockHour < currentHour) {
            $thisBlock.addClass("past").removeClass("current upcoming");
        }
        if (thisBlockHour > currentHour) {
            $thisBlock.addClass("upcoming").removeClass("past current")
        }
    });
}
// 4. when user clicks time block, they can enter an event (done)
document.addEventListener("click", enterEvent)

function enterEvent() {
    document.getElementById("container");
    
}
// 5. when event is saved, it will stay in local storage

// 6.when page is refrshed, saved events stay the same