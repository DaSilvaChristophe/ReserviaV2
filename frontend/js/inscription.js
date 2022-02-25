const submitForm = () => {

  /* Validation des données formulaire */

  (function () {
    'use strict'
  
    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('click', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          } 

          form.classList.add('was-validated')
        }, false)
      })
  })()

  if(form.checkValidity()) {

  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById('lastName').value;
  let email = document.getElementById('email').value;
  let hash = document.getElementById('password').value;
  
  const newUser = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: hash,
  }

  fetch("http://localhost:3000/api/auth/signup", {
    method: "POST",
    body: JSON.stringify(newUser),
    headers:
      {'Content-Type': 'application/json'}
    })
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(){
      
      const alertPlaceholder = document.getElementById('DivAlert')
      const alertTrigger = document.getElementById('liveAlertBtn')

      function alert(message, type) {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
        alertPlaceholder.append(wrapper)
      }

      const alertDeclenche = (alertTrigger) => {
          alert('Votre inscription a bien été pris en compte, vous allez êtes diriger vers la page de connexion', 'success')
        }
      alertDeclenche();

      function redirectionLogin() {
        window.location.href = "login.html";
      }
      setTimeout(redirectionLogin, 5000)
    })  
  }
}



  