var $currentDay = $("#currentDay");
var $currentDate = moment().format("dddd, MMMM Do");
var $scheduleArea = $(".scedule");

var $timeBlocks = $(".timeblock");

var toDoItems = [];

// 1. opening the planner up, day is displayed on top (done)
$(document).ready(function() {
    $currentDay.text($currentDate);
});

// 2. when user scrolls down, they see time blocks for 9am-5pm (done)

// 3. when user views said blocks, they are color coded to represent past, present or future
function colorTimeBlocks() {
    $timeBlocks.each(function() {
        var $thisBlock = $(this);
        var thisBlockHour = parseInt($thisBlock.attr("hour"));

        if (thisBlockHour == currentHour) {
            $thisBlock.addClass("present").removeClass("past future");
        }
        if (thisBlockHour < currentHour) {
            $thisBlock.addClass("past").removeClass("present future");
        }
        if (thisBlockHour > currentHour) {
            $thisBlock.addClass("future").removeClass("past present");
        }
    });
}

// 5. when event is saved, it will stay in local storage
function saveToDoInputs() {

    var $thisBlock = $(this).parent();
    var hourToUpdate = $(this).parent().attr("hour");
    var itemToAdd = (($(this).parent()).children("textarea")).val();
    var toDoItems = document.getElementById("textarea");

    for (var j = 0; j < toDoItems.length; j++){
        if (toDoItems[j].hour == hourToUpdate){
          toDoItems[j].text = itemToAdd;
        }
      }

    localStorage.setItem("todos", JSON.stringify(toDoItems));

}


function startPlanner() {
    $timeBlocks.each(function() {
        var $thisBlock = $(this);
        var thisBlockHour = parseInt($thisBlock.attr("data"));

        var todoInputs = {
            hour: thisBlockHour,
            text: "",
        }
        toDoItems.push(todoInputs);
    
    });

    localStorage.setItem("todos", JSON.stringify(toDoItems));

}
