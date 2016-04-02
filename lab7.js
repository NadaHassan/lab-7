function cToF(celsius)
{
  var cTemp = 45;
  var cToFahr = cTemp * 9 / 5 + 32;
  var cmessage = cTemp+'degrees C is ' + cToFahr + ' degrees F.';
    console.log(cmessage);
};

function fToC(fahrenheit)
{
  var fTemp = 30;
  var fToCel = (fTemp - 32) * 5 / 9;
  var fmessage = fTemp+'degreesF is ' + fToCel + 'degreesC.';
    console.log(fmessage);
};

fToC();
cToF();


function convert () {
  var fmessage = fTemp+'degreesF is ' + fToCel + 'degreesC.';
  console.log(fmessage);
  var fmessage = document.getElementById('temp').value;
  var conversion = Number(fmessage);

  var cmessage = cTemp+'degrees C is ' + cToFahr + ' degrees F.';
  console.log(cmessage);
  var cmessage = document.createElement('cels');
  tc.innerHTML = element.cels;
};

convert ();
