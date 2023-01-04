// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(document).ready(function() {  


  $(".saveBtn").on("click", function(){
   
    
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  });

  
  function timeBlockColor() {
    var hour = dayjs().hour();
    console.log(hour)

    $(".time-block").each(function() {
      var currentHour = parseInt($(this).attr("id"));
      
      if (currentHour < hour) {
        $(this).addClass("past");
      }
      else if (currentHour === hour) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    })
  };


  //     if (currentHour < hour) {
  //       $(this).addClass("past");
  //     } else if (currentHour === hour) {
  //       $(this).addClass("present");
  //     } else {
  //       $(this).addClass("future");
  //     }
  //   })
  // };
 

timeBlockColor();

  var now = dayjs().format("dddd MMMM DD, YYYY")
    $("#currentDay").text(now);
});


$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

