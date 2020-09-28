// Homeowork Help
// $(".saveBtn").on("click", function(){
// Pull value from the textare of chosen save button. This will serve as the value for out setItem
// var value
// Pull the id of the clicked element to serve as the id
// var time

// This is where you will save the data to local storage
// localStorage.setItem()
// })

// Function to update the color of the time display
// function hourUpdater() {
// var currentTime = moment().hours()
    
// pull the id from each id within the time columns
// var block = 

//$("#curentDay").each(function(){
// take the value frome each id and setting to the variable block. HINT parseInt
// var time = $()

// if statments to ask: Is the current time before the block? after the block or equal to the block

// in each if statement you will need to add a class and remove a class
// if(block < currentTime) {
// add the class of past to that element


// moment js
moment(Date);
$("#currentDay").text(moment().format("dddd MMMM Do YYY, h:mm a"));

// variables
var currentTime = moment();
currentTime = currentTime.startOf("hour");
var beforeTime = moment().startOf('day').add(9, "hours");

// timeblocks
// 9AM
var time9 = beforeTime.add(0, "h");
time9 = time9.format("hh:mm A");
$(".block9").text(time9);

// 10AM
var time10 = beforeTime.add(1, "h");
time10 = time10.format("hh:mm A");
$(".block10").text(time10);

// 11AM
var time11 = beforeTime.add(1, "h");
time11 = time11.format("hh:mm A");
$(".block11").text(time11);

// 12PM
var time12 = beforeTime.add(1, "h");
time12 = time12.format("hh:mm A");
$(".block12").text(time12);

// 1PM
var time1 = beforeTime.add(1, "h");
time1 = time1.format("hh:mm A");
$(".block1").text(time1);

// 2PM
var time2 = beforeTime.add(1, "h");
time2 = time2.format("hh:mm A");
$(".block2").text(time2);

// 3PM
var time3 = beforeTime.add(1, "h");
time3 = time3.format("hh:mm A");
$(".block3").text(time3);

// 4PM
var time4 = beforeTime.add(1, "h");
time4 = time4.format("hh:mm A");
$(".block4").text(time4);

// 5PM
var time5 = beforeTime.add(1, "h");
time5 = time5.format("hh:mm A");
$(".block5").text(time5);

testTime();
// Loops through - gets item from local storage
var x = [9, 10, 11, 12, 1, 2, 3, 4, 5];

for (var i = 0; i < x.length; i++) {
    var dataHour = localStorage.getItem(x[i]);

    $(".form" + x[i]).val(dataHour);
}

// Event listener to save to local stroage
$(".saveBtn").click(function () {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    console.log("This worked");
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});

// Current Time
function testTime() {
    // 9AM
    time9 = moment().startOf('day').add(9, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time9)) {
        $(".form9").addClass("past");
    }
    else if (currentTime.isBefore(time9)) {
        $(".form9").addClass("future");
    }
    else if (currentTime.isSame(time9)) {
        $(".form9").addClass("present");
    };
    // 10AM
    time10 = moment().startOf('day').add(10, "hours");
    if (currentTime.isAfter(time10)) {
        $(".form10").addClass("past");
    }
    else if (currentTime.isBefore(time10)) {
        $(".form10").addClass("future");
    }
    else if (currentTime.isSame(time10)) {
        $(".form10").addClass("present");
    };
    // 11AM
    time11 = moment().startOf('day').add(11, "hours");
    if (currentTime.isAfter(time11)) {
        $(".form11").addClass("past");
    }
    else if (currentTime.isBefore(time11)) {
        $(".form11").addClass("future");
    }
    else if (currentTime.isSame(time11)) {
        $(".form11").addClass("present");
    };
    // 12PM
    time12 = moment().startOf('day').add(12, "hours");
    if (currentTime.isAfter(time12)) {
        $(".form12").addClass("past");
    }
    else if (currentTime.isBefore(time12)) {
        $(".form12").addClass("future");
    }
    else if (currentTime.isSame(time12)) {
        $(".form12").addClass("present");
    };
    // 1PM
    time1 = moment().startOf('day').add(13, "hours");
    // Add time5 if/else
    if (currentTime.isAfter(time1)) {
        $(".form1").addClass("past");
    }
    else if (currentTime.isBefore(time1)) {
        $(".form1").addClass("future");
    }
    else if (currentTime.isSame(time1)) {
        $(".form1").addClass("present");
    };
    // 2PM
    time2 = moment().startOf('day').add(14, "hours");
    if (currentTime.isAfter(time2)) {
        $(".form2").addClass("past");
    }
    else if (currentTime.isBefore(time2)) {
        $(".form2").addClass("future");
    }
    else if (currentTime.isSame(time2)) {
        $(".form2").addClass("present");
    };
    // 3PM
    time3 = moment().startOf('day').add(15, "hours");
    if (currentTime.isAfter(time3)) {
        $(".form3").addClass("past");
    }
    else if (currentTime.isBefore(time3)) {
        $(".form3").addClass("future");
    }
    else if (currentTime.isSame(time3)) {
        $(".form3").addClass("present");
    };
    // 4PM
    time4 = moment().startOf('day').add(16, "hours");
    if (currentTime.isAfter(time4)) {
        $(".form4").addClass("past");
    }
    else if (currentTime.isBefore(time4)) {
        $(".form4").addClass("future");
    }
    else if (currentTime.isSame(time4)) {
        $(".form4").addClass("present");
    };
    // 5PM
    time5 = moment().startOf('day').add(17, "hours");
    if (currentTime.isAfter(time5)) {
        $(".form5").addClass("past");
    }
    else if (currentTime.isBefore(time5)) {
        $(".form5").addClass("future");
    }
    else if (currentTime.isSame(time5)) {
        $(".form5").addClass("present");
    };
}