// Current day 
 var d = moment().format("ddd LL")
 $("#currentDay").text(d);
  
 $(render);

 function render() {
    function saveTask(event) {
        // targets id of parent div
        var timeBlk = $(this).parent().attr("id");
        // save inputted data in local storage
        localStorage.setItem(moment().format("LL") + timeBlk, $("#" + timeBlk + " textarea").val());
    }
   
 
   // change  color blocks 
   changeColorBlk();
   setInterval(changeColorBlk, 60000);
 
   // this will update each block with data in local storage
   $(".t-cblk").each(function() {
     var getDt = $(this).attr("id");
     //  here will load  the data that's in local storage
     $("#" + getDt + " textarea")
     .text(localStorage.getItem(moment().format("LL") + getDt));
   });
 
   
   $(".saveBtn").on("click", saveTask);
 }
 
 function changeColorBlk() {
   
   $(".t-cblk").each(function() {
     var hour = parseInt($(this).attr("id").replace("hour-", ""));
     var presentDay = parseInt(moment().format("H"));
     // this will remove any class previously added
     $(this).removeClass("past present future");
     // targeting  every hour with its corresponding  color code
     if (hour < presentDay) {
       $(this).addClass("past");
       $(this).attr('disabled', '');
     } else if (hour > presentDay) {
       $(this).addClass("future");
     } else {
       $(this).addClass("present");
     }
   });
 }
 
 