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

  // $("#work1").hover(function(){
  //   $(this).css({opacity: 0.3});
  // }); 
});