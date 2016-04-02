function cToF(cTemp)
{
  var cToFahr = cTemp * 9 / 5 + 32;
  var cmessage = cTemp+'degrees C is ' + cToFahr + ' degrees F.';
  console.log(cmessage);
};

function fToC(fTemp)
{
  var fToCel = (fTemp - 32) * 5 / 9;
  var fmessage = fTemp+'degrees F is ' + fToCel + 'degrees C.';
    console.log(fmessage);
};

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
  }



  // var cmessage = document.createElement('p'); //p needs to be an html element
  // cmessage.innerHTML = element.cmessage;
};
