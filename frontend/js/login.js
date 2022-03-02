const connexion = () => {

  let email = document.getElementById('email').value;
  let hash = document.getElementById('password').value;
  
  const connexionUser = {
    email: email,
    password: hash,
  }
  
  if(email && hash !== ""){

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
          .innerHTML = "Cette adresse email n'existe pas ou la syntaxe n'est pas valide, veuillez revérifier votre adresse mail ou créer un compte !"
        }
        if (res.status === 401) {
        
          document.getElementById('mdpNotExist')
          .innerHTML = "Mot de passe incorrect !"
        }
      })
      .then(function(res){
        
        localStorage.setItem("userId", res.userId);
        localStorage.setItem("token", res.token);
        const userId = localStorage.getItem('userId')

        function redirectionHome() {
          window.location.href = `index.html?${userId}`;
        }
        setTimeout(redirectionHome, 1000)
          
      })
  } else {
    document.getElementById('mdpNotExist')
    .innerHTML = "Veuillez rentrer votre mot de passe ! (minimun 4 caractères)"
  }
}