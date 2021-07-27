window.onload = function(){
    timeColor();
    time1();
    time2();
    time3();
    time4();
    time5();
    time6();
    time7();
    time8();
    time9();
   }
 
   
var currentDayTime = moment().format("dddd LL LT");
$("#currentDayTime").append(currentDayTime);