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

  //Declaring score and selected language variables
  var aggregateScore;
  var selectedLanguage;
  var outputWrapper = $("")

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
  });

  //Moves user to logged out screen
  logoutClick.click(function(){
    event.preventDefault();
    loginWrapper.show();
    loggedInWrapper.hide();    
    $("#username").val('');
    $("#password").val('');
  });

  //Calculates score and language on form submit
  $("#questionForm").submit(function(){
    calculateScore();
    determineLanguage();
    event.preventDefault();    
  });

  function calculateScore(){

    //Obtain corresponding values from selected values
    var questionOneValue = parseInt($("select#questionOne option:selected").val());
    var questionTwoValue = parseInt($("select#questionTwo option:selected").val());
    var questionThreeValue = parseInt($("select#questionThree option:selected").val());
    var questionFourValue = parseInt($("select#questionFour option:selected").val());
    var questionFiveValue = parseInt($("select#questionFive option:selected").val());

    //Checks to ensure each question has been answered
    if (questionOneValue !== 0 && questionTwoValue !==0 && questionThreeValue !== 0 && questionFourValue !==0 && questionFiveValue !==0){
      aggregateScore = questionOneValue + questionTwoValue + questionThreeValue + questionFourValue + questionFiveValue;      
    } else{
      alert("Please ensure you've answered all questions.");
    }
  }

  function determineLanguage(){
    //Hide all previously shown results if user resubmits
    $(".outputOption").hide();
    //Displays output wrapper
    $(".outputWrapper").show();

    //Displays language based on score results
    if (aggregateScore === 5){
      console.log(aggregateScore);
      $(".outputRuby").show();
    } else if (aggregateScore > 5 && aggregateScore < 8){
      console.log(aggregateScore);
      $(".outputCSharp").show();
    } else if (aggregateScore > 7 && aggregateScore < 10){
      console.log(aggregateScore);
      $(".outputJavaScript").show();
    } else if (aggregateScore > 9 && aggregateScore < 13){
      console.log(aggregateScore);
      $(".outputGo").show();
    } else if (aggregateScore > 12 && aggregateScore < 16){
      console.log(aggregateScore);
      $(".outputPython").show();
    } else if (aggregateScore > 15 && aggregateScore < 18){
      console.log(aggregateScore);
      $(".outputRust").show();
    } else if (aggregateScore > 17 && aggregateScore < 21){
      console.log(aggregateScore);
      $(".outputSwift").show();
    }

    alert(aggregateScore);

  }

});