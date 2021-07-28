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
  
    output.textContent = localStorage.getItem("9AM");
    input.value = localStorage.getItem("9AM");
  
    function displayText() {
      localStorage.setItem("9AM", input.value);
  
      output.textContent = input.value;
    }
  }

  function time2() {
    var input = document.querySelector("#text2");
    var output = document.querySelector("#text2");
    var saveBtn = document.querySelector("#btn2");
  
    saveBtn.addEventListener("click", displayText);
  
    output.textContent = localStorage.getItem("10AM");
    input.value = localStorage.getItem("10AM");
  
    function displayText() {
      localStorage.setItem("10AM", input.value);
  
      output.textContent = input.value;
    }
  }
  function time3() {
    var input = document.querySelector("#text3");
    var output = document.querySelector("#text3");
    var saveBtn = document.querySelector("#btn3");
  
    saveBtn.addEventListener("click", displayText);
  
    output.textContent = localStorage.getItem("11AM");
    input.value = localStorage.getItem("11AM");
  
    function displayText() {
      localStorage.setItem("11AM", input.value);
  
      output.textContent = input.value;
    }
  }
  function time4() {
    var input = document.querySelector("#text4");
    var output = document.querySelector("#text4");
    var saveBtn = document.querySelector("#btn4");
  
    saveBtn.addEventListener("click", displayText);
  
    output.textContent = localStorage.getItem("12PM");
    input.value = localStorage.getItem("12PM");
  
    function displayText() {
      localStorage.setItem("12PM", input.value);
  
      output.textContent = input.value;
    }
  }
  function time5() {
    var input = document.querySelector("#text5");
    var output = document.querySelector("#text5");
    var saveBtn = document.querySelector("#btn5");
  
    saveBtn.addEventListener("click", displayText);
  
    output.textContent = localStorage.getItem("1PM");
    input.value = localStorage.getItem("1PM");
  
    function displayText() {
      localStorage.setItem("1PM", input.value);
  
      output.textContent = input.value;
    }
  }

  function time6() {
    var input = document.querySelector("#text6");
    var output = document.querySelector("#text6");
    var saveBtn = document.querySelector("#btn6");
  
    saveBtn.addEventListener("click", displayText);
  
    output.textContent = localStorage.getItem("2PM");
    input.value = localStorage.getItem("2PM");
  
    function displayText() {
      localStorage.setItem("2PM", input.value);
  
      output.textContent = input.value;
    }
  }
  function time7() {
    var input = document.querySelector("#text7");
    var output = document.querySelector("#text7");
    var saveBtn = document.querySelector("#btn7");
  
    saveBtn.addEventListener("click", displayText);
  
    output.textContent = localStorage.getItem("3PM");
    input.value = localStorage.getItem("3PM");
  
    function displayText() {
      localStorage.setItem("3PM", input.value);
  
      output.textContent = input.value;
    }
  }
  function time8() {
    var input = document.querySelector("#text8");
    var output = document.querySelector("#text8");
    var saveBtn = document.querySelector("#btn8");
  
    saveBtn.addEventListener("click", displayText);
  
    output.textContent = localStorage.getItem("4PM");
    input.value = localStorage.getItem("4PM");
  
    function displayText() {
      localStorage.setItem("4PM", input.value);
  
      output.textContent = input.value;
    }
  }
  function time9() {
    var input = document.querySelector("#text9");
    var output = document.querySelector("#text9");
    var saveBtn = document.querySelector("#btn9");
  
    saveBtn.addEventListener("click", displayText);
  
    output.textContent = localStorage.getItem("5PM");
    input.value = localStorage.getItem("5PM");
  
    function displayText() {
      localStorage.setItem("5PM", input.value);
  
      output.textContent = input.value;
    }
  }