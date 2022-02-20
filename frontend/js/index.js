function featureConnectInscript() {    

    const dropdown = document.getElementById("dropdown");

    let connectInscript = [];

        connectInscript = connectInscript + 
        `<a class="nav-hover dropdown-toggle text-decoration-none" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Compte
        </a>
        <ul class="dropdown-menu text-grey border-0" aria-labelledby="navbarDropdownMenuLink">
        <li><a class="dropdown-item text-grey" href="login.html">Connexion</a></li>
        <li><a class="dropdown-item text-grey" href="inscription.html">Inscription</a></li>
        </ul>`;

        dropdown.innerHTML = connectInscript;
};

featureConnectInscript()