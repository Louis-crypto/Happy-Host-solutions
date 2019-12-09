$(document).ready(function () {
  var userName = document.getElementById("name").value;
  $("#submit").on("click", function(){
    alert("dear" + " " + userName + " " + "we have received your message");
  });
   $("#designIcon").click(function () {
     
  });


  // $("#devIcon").click(function () {
  //   $(this).hide();
  // });
  // $("#devIcon").click(function(){
  //   $("#development").show();
  // });
  // $("#prodIcon").click(function () {
  //   $(this).hide();
  // });
  // $("#prodIcon").click(function(){
  //   $("#product").show();
  // });

});