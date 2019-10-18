// console.log("js algorithm");
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
