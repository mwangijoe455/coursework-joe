/*
 in-built js library for handling http requests.

 fetch (@param1, @param2) => response on object with function then ()

 @ param1 =>url
 @ param2=> configuration..headers method
 */



let requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://api.github.com/users", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));