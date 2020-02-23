$(document).ready(function() {

  //Declaring login and logout button variables
  var loginClick = $("#loginSubmit");
  var logoutClick = $("#logoutSubmit");

  //Declaring div wrapper variables for login and logged in screens
  var loginWrapper = $("#loginWrapper");
  var loggedInWrapper = $("#loggedInWrapper");
  
  //Moves user to logged in screen
  loginClick.on("click", function(){
    event.preventDefault();
    alert("you're logging in");
  });

  //Moves user to logged out screen
  logoutClick.on("click", function(){
    event.preventDefault();
    alert("you're logging out");
  });

});