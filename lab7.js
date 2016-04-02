function cToF(cTemp) // (cTemp) is the input by the user which the function will run through
{
  var cToFahr = cTemp * 9 / 5 + 32;
  var cmessage = cTemp+'degrees C is ' + cToFahr + ' degrees F.';
  console.log(cmessage);
};

function fToC(fTemp) // fTemp if the input temperature in degrees F
{
  var fToCel = (fTemp - 32) * 5 / 9;
  var fmessage = fTemp+'degrees F is ' + fToCel + 'degrees C.';
    console.log(fmessage);
};


// To add these to the page: create an element
// give it an innerhtml of c or f message
// append the created element to the page
// fToC();
// cToF();




function convert () {

  var fmessage = document.getElementById('fTemperature').value;

  if (fmessage !== "") {
    var conversion = Number(fmessage);
    fToC(conversion);
  }

  var cmessage = document.getElementById('cTemperature').value;

  if (cmessage !== "") {
    var conversion = Number(cmessage);
    cToF(conversion);
  };



  var newElement = document.createElement('fTemperature'); //p needs to be an html element
  newElement.innerHTML = fmessage;
  document.body.appendChild(newElement);
};
