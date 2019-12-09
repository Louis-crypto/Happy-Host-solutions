$(document).ready(function () {
  var userName = document.getElementById("name").value;
  $("#submit").on("click", function () {
    alert("dear" + " " + userName + " " + "we have received your message");
  });

  $("#designIcon").on("click", function () {
    $("#design").show();
    $("#designIcon").hide();
  });
  $("#design").on("click", function () {
    $("#designIcon").show();
    $("#design").hide();
  });

  $("#devIcon").on("click", function () {
    $("#development").show();
    $("#devIcon").hide();
  });
  $("#development").on("click", function () {
    $("#devIcon").show();
    $("#development").hide();
  });

  $("#prodIcon").on("click", function () {
    $("#product").show();
    $("#prodIcon").hide();
  });
  $("#product").on("click", function () {
    $("#prodIcon").show();
    $("#product").hide();
  });

  $("#work1").mouseover(function(){
    $("#caption").fadeIn(500);
  }).mouseout(function(){
    $("#caption").fadeOut(500);
  });

  $("#work2").mouseover(function(){
    $("#caption1").fadeIn(500);
  }).mouseout(function(){
    $("#caption1").fadeOut(500);
  });

  $("#work3").mouseover(function(){
    $("#caption2").fadeIn(500);
  }).mouseout(function(){
    $("#caption2").fadeOut(500);
  });

  $("#work4").mouseover(function(){
    $("#caption3").fadeIn(500);
  }).mouseout(function(){
    $("#caption3").fadeOut(500);
  });

  $("#work5").mouseover(function(){
    $("#caption4").fadeIn(500);
  }).mouseout(function(){
    $("#caption4").fadeOut(500);
  });

  $("#work6").mouseover(function(){
    $("#caption5").fadeIn(500);
  }).mouseout(function(){
    $("#caption5").fadeOut(500);
  });

  $("#work7").mouseover(function(){
    $("#caption6").fadeIn(500);
  }).mouseout(function(){
    $("#caption6").fadeOut(500);
  });

  $("#work8").mouseover(function(){
    $("#caption7").fadeIn(500);
  }).mouseout(function(){
    $("#caption7").fadeOut(500);
  });

  // $("#work1").hover(function(){
  //   $(this).css({opacity: 0.3});
  // }); 
});