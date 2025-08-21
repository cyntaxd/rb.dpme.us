//localStorage.setItem('alerted','no'); [change to standard code to test new alerts!]//
var alerted = localStorage.getItem('alerted') || '';
    if (alerted != 'yes') {
     alert("This website is still in development! So please do not expect everything to be perfect just yet!");
     localStorage.setItem('alerted','yes');
    }