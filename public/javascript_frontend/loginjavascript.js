// var user;
function login(){

  var userName = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  var baseUrl = 'https://us-central1-drobotmvp.cloudfunctions.net/writeTextToFirestore';

  // Additional parameters
  var additionalParams =  userPass + '_' + userName;

  // Concatenate parameters
  var url = baseUrl + '?text=' + additionalParams;

  // Make a GET request using Fetch API
  fetch(url)
  alert("Order Placed - please close the tab (donot reorder from the same tab)!!")
  // myWindow.close();
}



