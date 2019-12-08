$(document).ready(function () {
  $("#designIcon").click(function () {
    $("#design").show(function(){
      $("#designIcon").hide();
    });
  });


  $("#devIcon").click(function () {
    $(this).hide();
  });
  $("#devIcon").click(function(){
    $("#development").show();
  });
  $("#prodIcon").click(function () {
    $(this).hide();
  });
  $("#prodIcon").click(function(){
    $("#product").show();
  });
});