const connexion = () => {

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

  let email = document.getElementById('email').value;
  let hash = document.getElementById('password').value;
  
  const connexionUser = {
    email: email,
    password: hash,
  }

  fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    body: JSON.stringify(connexionUser),
    headers:
      {'Content-Type': 'application/json'}
    })
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
      if (res.status === 404) {
    
        const errorEmail = document.getElementById('errorEmailExist')
        .innerHTML = "Cette adresse email n'existe pas, veuillez créer un compte !"
        form.classList.remove('was-validated')
      }
      if (res.status === 401) {
      
        document.getElementById('mdpNotExist')
        .innerHTML = "Mot de passe incorrect !"
        form.classList.remove('was-validated')
    }

  })
    
    
    .then(function(){
      
      localStorage.setItem("userId", email);
        
    })
   
  }
}