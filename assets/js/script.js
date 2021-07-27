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


var nine = $("#text1")
var ten = $("#text2")
var eleven = $("#text3")
var twelve = $("#text4")
var thirteen = $("#text5")
var fourteen = $("#text6")
var fifteen = $("#text7")
var sixteen = $("#text8")
var seventeen = $("#text9")

var now = new Date().getHours();

function timeColor() {
  if (now > 9) {
    nine.addClass("past");
  } else if (now >= 9 && now < 10) {
    nine.addClass("present");
  } else if (now < 9) {
    nine.addClass("future");
  }
  if (now > 10) {
    ten.addClass("past");
  } else if (now >= 10 && now < 11) {
    ten.addClass("present");
  } else if (now < 10) {
    ten.addClass("future");
  }
  if (now > 11) {
    eleven.addClass("past");
  } else if (now >= 11 && now < 12) {
    eleven.addClass("present");
  } else if (now < 11) {
    eleven.addClass("future");
  }
  if (now > 12) {
    twelve.addClass("past");
  } else if (now >= 12 && now < 13) {
    twelve.addClass("present");
  } else if (now < 12) {
    twelve.addClass("future");
  }
  if (now > 13) {
    thirteen.addClass("past");
  } else if (now >= 13 && now < 14) {
    thirteen.addClass("present");
  } else if (now < 13) {
    thirteen.addClass("future");
  }
  if (now > 14) {
    fourteen.addClass("past");
  } else if (now >= 14 && now < 15) {
    fourteen.addClass("present");
  } else if (now < 14) {
    fourteen.addClass("future");
  }
  if (now > 15) {
    fifteen.addClass("past");
  } else if (now >= 15 && now < 16) {
    fifteen.addClass("present");
  } else if (now < 15) {
    fifteen.addClass("future");
  }
  if (now > 16) {
    sixteen.addClass("past");
  } else if (now >= 16 && now < 17) {
    sixteen.addClass("present");
  } else if (now < 16) {
    sixteen.addClass("future");
  }
  if (now > 17) {
    seventeen.addClass("past");
  } else if (now >= 17 && now < 18) {
    seventeen.addClass("present");
  } else if (now < 17) {
    seventeen.addClass("future");
  }
}

function time1() {
    var input = document.querySelector("#text1");
    var output = document.querySelector("#text1");
    var saveBtn = document.querySelector("#btn1");
  
    saveBtn.addEventListener("click", displayText);
  
    output.textContent = localStorage.getItem("content");
    input.value = localStorage.getItem("content");
  
    function displayText() {
      localStorage.setItem("content", input.value);
  
      output.textContent = input.value;
    }
  }