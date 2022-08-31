/*JS scripts for form functionality in contact page and login*/

function showResults(){  /*contact form confirmation message*/ 
    document.getElementById("contactForm2").style.display = 'none';
    document.getElementById("contactFormResult").style.display = 'block';
    
    document.getElementById('result').innerText = document.getElementById('email1').value;
}

function showResults2(){  /*schedule form confirmation */
    document.getElementById("contactForm3").style.display = 'none';
    document.getElementById("contactFormResult2").style.display = 'block';
    document.getElementById('result2').innerText = document.getElementById('phone2').value;
    document.getElementById('result3').innerText = document.getElementById('email').value;
}

/*instructions for using account login page-how to get into hub-use any fake username and any fake password */
function showAlert() {
    alert ("To get to the Hub page, type in your first name for the username, and enter any letters for the password, then click Login.");
  }