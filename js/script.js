console.log("js algorithm");
//
// // Make your variables have no value
// var givenString = 0;
// var reversedString = 0;
//
// // Ask your question and define your variable
// givenString = prompt('Enter your name please');
// // This variable means it doesn't matter is you use upper case or lower case letters
// var givenStringLower = givenString.toLowerCase();
//
// // Now we try to get the variable 'givenString' to reverse
// reversedString = givenStringLower.split(''); //convert 'reversedString' to array
// reversedString = reversedString.reverse(); //reverse 'reversedString' order
// reversedString = reversedString.join(''); //then join the reverse order values together
//
//
// // So if the givenStringLower is the exact same as the reversedString it will be a palindrone
// if (givenStringLower == reversedString) {
//   document.getElementById('result1').textContent = 'Congrats, your name is a palidrone';
// // But if not it will have another output so you are aware of what's going on
// } else {
//   document.getElementById('result1').textContent = givenString + ', you can\'t make your name a palidrone';
// }


// Algorithm 2
// Showing odd for odd numbers, even for even number and invalid for numbers that contain decimal fractions

function check ()
{
  var a;
  a = Number(document.getElementById("a").value);
  if (a % 2 == 0)
  {
    document.getElementById("numberResult").innerHTML = a + '  is an EVEN number';
  } else {
    document.getElementById("numberResult").innerHTML = a + '  is an ODD number';
  }
}

// Algorithm 3
// Storing a sentence in a variable and replacing the word "mistakes" with "bugs"

function myFunction() {
  var givenSentence = document.getElementById("demo").innerHTML;
  var replacedSentence = givenSentence.replace(/mistakes/g,"bugs");

  document.getElementById("demo").innerHTML = replacedSentence;
}

// Algorithm 4
// Create 4 buttons for add to, delete from, search in and sort an array.
// add to arrays

document.getElementById('add').addEventListener('click', function(){
  document.getElementById('result').innerHTML = " ";

  var food = ["brie","croutons","almonds"];
  var platter = ["cheese", "cashews", "ham", "apple", "grapes", "chips", "salami"]
  var userPlatter = (document.getElementById('platter').value).toUpperCase();

  if (food.includes(userPlatter) === true)   {

    if (platter.includes(userPlatter) === false) {

    food.push(userPlatter);
    document.getElementById('result').innerHTML = '</br> </br> Your food is added. The new array is ' + food;
  } else {
    document.getElementById('result').innerHTML = '</br> </br> The food you entered is not in the platter';
}
  } else {
    document.getElementById('result').innerHTML = '</br> </br> The food you entered exists already. Please give another food';
  }
document.getElementById('result').value = " ";
});


// delete from arrays

document.getElementById('delete').addEventListener('click', function(){
  document.getElementById('platter').innerHTML = " ";

  var food = ["brie", "croutons", "almonds"];
  var platter = ["cheese", "cashews", "ham", "apple", "grapes", "chips", "salami"]
  var userPlatter = (document.getElementById('platter').value).toUpperCase();
  console.log(userPlatter);

  for (var i = 0; i< food.length; i++){
     if (food[i] === userPlatter){
      delete food[i];
      document.getElementById('result').innerHTML = '</br> </br> The new array is ' + food;
    }
  }
});
