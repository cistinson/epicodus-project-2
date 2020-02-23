$(document).ready(function() {

  //Declaring login and logout button variables
  var loginClick = $("#loginSubmit");
  var logoutClick = $("#logoutSubmit");

  //Declaring div wrapper variables for login and logged in screens
  var loginWrapper = $(".loginWrapper");
  var loggedInWrapper = $(".loggedInWrapper");

  //Obtain username and password from input fields
  var username;
  var password;
  var usernamePlaceholder = $("#usernamePlaceholder");

  //Declaring rank options

  var rank;
  var rankOptions = ['Bronze 1', 'Bronze 2', 'Bronze 3', 'Silver 1', 'Silver 2', 'Silver 3', 'Gold 1', 'Gold 2', 'Gold 3', 'Platinum 1', 'Platinum 2', 'Platinum 3', 'Diamond 1', 'Diamond 2', 'Diamond 3', 'Champion 1', 'Champion 2', 'Champion 3', 'Grand Champion'];
  var rankPlaceholder = $("#rankPlaceholder");

  //Moves user to logged in screen
  loginClick.click(function(){
    username = $("#username").val();
    password = $("#password").val();
    if ( username !== '' && password !== ''){
      event.preventDefault();
      loginWrapper.hide();
      loggedInWrapper.show();
      usernamePlaceholder.text(username);   
    } 
    generateRank();
  });

  //Moves user to logged out screen
  logoutClick.click(function(){
    event.preventDefault();
    loginWrapper.show();
    loggedInWrapper.hide();    
    $("#username").val('');
    $("#password").val('');
  });

  //Generates random number for rank array
  function generateRank(){
    rank = Math.floor(Math.random() * 19);
    rankPlaceholder.text(rankOptions[rank]);
  }

});