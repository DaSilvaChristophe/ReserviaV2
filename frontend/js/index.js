
const ecoId = document.getElementById("eco")
const eco = document.getElementById("event-eco");
const familleId = document.getElementById("famille")
const famille = document.getElementById("event-famille");
const romantiqueId = document.getElementById("romantique")
const romantique = document.getElementById("event-romantique");
const animauxId = document.getElementById("animaux")
const animaux = document.getElementById("event-animaux");
const marseillePlus = document.getElementById("afficher-plus");

/* NAV */

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

/* FORM */

function formTransition() {    

    const form = document.getElementById("form-translate");

    let formPresentation = [];

        formPresentation = formPresentation + 
        `<div class="col-lg-5 col-md-6 col-sm-7 py-2 bg-light rounded-pill d-flex justify-content-center respons-input translate-presentation">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="black" class="bi bi-geo-alt-fill mt-2 me-2" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
            <input class="col-6 no-outline rounded-pill py-1 ps-3 me-1" type="search" name="" id="" placeholder="Marseille">
            <input class="col-5 btn btn-outline-primary border-none rounded-pill px-2" type="submit" value="Rechercher">
        </div>`;

        form.innerHTML = formPresentation;
};

/* FILTRES */

function filtreEco () {   

    let hotelEco = [];

        hotelEco = hotelEco + 
        `<aside class="filtres-apparition col-11 mx-auto br40 d-flex flex-wrap mb-3 pt-1">
            <div class="row d-flex col-12 align-items-center">
                <h2 class="h5 col-12 pt-4 ps-5 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#FFD700" class="bi bi-star mb-1" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                </svg>
            Le meilleur plan éco du moment</h2>
            </div>
            <div class="col-lg-6 mx-auto my-3 border bg-white shadow radius20 mb-2 d-flex mq-filtres-apparition">
                <img src="./img/hebergements/hebergements_small_1.jpg" class="px-1 py-1 redim-img-popul" alt="Auberge Le Panier">
                <div class="col-6">
                    <div class="col-12">
                        <p class="ps-2 pt-2">Auberge Le Panier</p>
                        <p class="ps-2 pb-3 text-grey">Nuit à partir de <span class="text-dark">23€</span></p>
                    </div>
                    <div>
                        <span class="ps-2" >ratings</span>
                    </div>
                </div>
            </div>
            <div class="row d-flex col-12 align-items-center">
                <h2 class="h5 col-12 pt-4 ps-5 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#0065fc" class="bi bi-piggy-bank mb-1" viewBox="0 0 16 16">
                    <path d="M5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm1.138-1.496A6.613 6.613 0 0 1 7.964 4.5c.666 0 1.303.097 1.893.273a.5.5 0 0 0 .286-.958A7.602 7.602 0 0 0 7.964 3.5c-.734 0-1.441.103-2.102.292a.5.5 0 1 0 .276.962z"/>
                    <path fill-rule="evenodd" d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069c0-.145-.007-.29-.02-.431.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a.95.95 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.735.735 0 0 0-.375.562c-.024.243.082.48.32.654a2.112 2.112 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595zM2.516 6.26c.455-2.066 2.667-3.733 5.448-3.733 3.146 0 5.536 2.114 5.536 4.542 0 1.254-.624 2.41-1.67 3.248a.5.5 0 0 0-.165.535l.66 2.175h-.985l-.59-1.487a.5.5 0 0 0-.629-.288c-.661.23-1.39.359-2.157.359a6.558 6.558 0 0 1-2.157-.359.5.5 0 0 0-.635.304l-.525 1.471h-.979l.633-2.15a.5.5 0 0 0-.17-.534 4.649 4.649 0 0 1-1.284-1.541.5.5 0 0 0-.446-.275h-.56a.5.5 0 0 1-.492-.414l-.254-1.46h.933a.5.5 0 0 0 .488-.393zm12.621-.857a.565.565 0 0 1-.098.21.704.704 0 0 1-.044-.025c-.146-.09-.157-.175-.152-.223a.236.236 0 0 1 .117-.173c.049-.027.08-.021.113.012a.202.202 0 0 1 .064.199z"/>
                </svg>
            Les autres plans éco</h2>
            </div>
            <div class="col-5 bg-white mx-auto my-3 border shadow radius20 mb-2 d-flex mq-filtres-apparition">
                <img src="./img/hebergements/hebergements_small_5.jpg" class="px-1 py-1 redim-img-popul" alt="Auberge la cannebière">
                <div class="col-6">
                    <div class="col-12">
                        <p class="ps-2 pt-2">Auberge la cannebière</p>
                        <p class="ps-2 pb-3 text-grey">Nuit à partir de <span class="text-dark">25€</span></p>
                    </div>
                    <div>
                        <span class="ps-2" >ratings</span>
                    </div>
                </div>
            </div>
            <div class="col-5 mx-auto my-3 border bg-white shadow radius20 mb-2 d-flex mq-filtres-apparition">
                <img src="./img/hebergements/hebergements_small_4.jpg" class="px-1 py-1 redim-img-popul" alt="Hôtel de la mer">
                <div class="col-6">
                    <div class="col-12" >
                        <p class="ps-2 pt-2">Hôtel de la mer</p>
                        <p class="ps-2 pb-3 text-grey">Nuit à partir de <span class="text-dark">46€</span></p>
                    </div>
                    <div>
                        <span class="ps-2" >ratings</span>
                    </div>
                </div>
            </div>
        </aside>`;

        ecoId.innerHTML = hotelEco
};

eco.addEventListener('click', function (){
    filtreEco()
    ecoId.style.display = "block";
    familleId.style.display = "none";
    romantiqueId.style.display = "none";
    animauxId.style.display = "none";
});

function filtreFamille () {    

    let hotelFamille = [];

        hotelFamille = hotelFamille + 
        `<aside class="filtres-apparition col-11 mx-auto br40 d-flex flex-wrap mb-3 pt-1">
            <div class="row d-flex col-12 align-items-center">
                <h2 class="h5 col-12 pt-4 ps-5 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#FFD700" class="bi bi-star mb-1" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                </svg>
            Les meilleurs plan famille</h2>
            </div>
            <div class="col-5 mx-auto my-3 border bg-white shadow radius20 mb-2 d-flex mq-filtres-apparition">
                <img src="./img/hebergements/hebergements_small_9.jpg" class="px-1 py-1 redim-img-popul" alt="Hôtel Tout bleu et Blanc">
                <div class="col-6">
                    <div class="col-12">
                        <p class="ps-2 pt-2">Hôtel Tout bleu et Blanc</p>
                        <p class="ps-2 pb-3 text-grey">Nuit à partir de <span class="text-dark">68€</span></p>
                    </div>
                    <div>
                        <span class="ps-2" >ratings</span>
                    </div>
                </div>
            </div>
            
            <div class="col-5 bg-white mx-auto my-3 border shadow radius20 mb-2 d-flex mq-filtres-apparition">
                <img src="./img/hebergements/hebergements_small_6.jpg" class="px-1 py-1 redim-img-popul" alt="Hôtel chez Amina">
                <div class="col-6">
                    <div class="col-12">
                        <p class="ps-2 pt-2">Hôtel chez Amina</p>
                        <p class="ps-2  pb-3 text-grey">Nuit à partir de <span class="text-dark">96€</span></p>
                    </div>
                    <div>
                        <span class="ps-2" >ratings</span>
                    </div>
                </div>
            </div>
            <div class="col-5 mx-auto my-3 border bg-white shadow radius20 mb-2 d-flex mq-filtres-apparition">
                <img src="./img/hebergements/hebergements_small_5.jpg" class="px-1 py-1 redim-img-popul" alt="Auberge Le Panier">
                <div class="col-6">
                    <div class="col-12">
                        <p class="ps-2 pt-2">Auberge Le Panier</p>
                        <p class="ps-2 pb-3 text-grey">Nuit à partir de <span class="text-dark">23€</span></p>
                    </div>
                    <div>
                        <span class="ps-2" >ratings</span>
                    </div>
                </div>
            </div>
        </aside>`;

        familleId.innerHTML = hotelFamille
};

famille.addEventListener('click', function (){
    filtreFamille();
        familleId.style.display = "block";
        ecoId.style.display = "none";
        romantiqueId.style.display = "none";
        animauxId.style.display = "none";
});

function filtreRomantique () {    

    let hotelRomantique = [];

        hotelRomantique = hotelRomantique + 
        `
    <aside class="filtres-apparition col-11 mx-auto br40 d-flex flex-wrap mb-3 pt-1">
        <div class="row d-flex col-12 align-items-center">
            <h2 class="h5 col-12 pt-4 ps-5 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#FFD700" class="bi bi-star mb-1" viewBox="0 0 16 16">
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
            </svg>
        Le meilleur plan romantique du moment</h2>
        </div>
        <div class="col-5 bg-white mx-auto my-3 border shadow radius20 mb-2 d-flex mq-filtres-apparition">
            <img src="./img/hebergements/hebergements_small_7.jpg" class="px-1 py-1 redim-img-popul mq-redim-img" alt="Hôtel Le soleil du matin">
            <div class="col-6">
                <div class="col-12">
                    <p class="ps-2 pt-2">Hôtel Le soleil du matin</p>
                    <p class="ps-2 pb-3 text-grey pad-none">Nuit à partir de <span class="text-dark">128€</span></p>
                </div>
                <div>
                    <span class="ps-2" >ratings</span>
                </div>
            </div>
        </div>
        <div class="row d-flex col-12 align-items-center">
            <h2 class="h5 col-12 pt-4 ps-5 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="red" class="bi bi-heart-fill mb-1" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
        Les tops lieux pour une soirée en amoureux</h2>
        </div>
        <div class="col-5 mx-auto my-3 border bg-white shadow radius20 mb-2 d-flex mq-filtres-apparition">
            <img src="./img/hebergements/hebergements_small_4.jpg" class="px-1 py-1 redim-img-popul" alt="Hôtel de la mer">
            <div class="col-6">
                <div class="col-11" >
                    <p class="ps-2 pt-2">Hôtel de la mer</p>
                    <p class="ps-2 pb-3 text-grey">Nuit à partir de <span class="text-dark">46€</span></p>
                </div>
                <div>
                    <span class="ps-2" >ratings</span>
                </div>
            </div>
        </div>
        <div class="col-lg-6 mx-auto my-3 border bg-white shadow radius20 mb-2 d-flex mq-filtres-apparition">
            <img src="./img/hebergements/hebergements_small_8.jpg" class="px-1 py-1 redim-img-popul" alt="Au coeur de l'eau Chambres d'Hôtes">
            <div class="col-6">
                <div class="col-12">
                    <p class="ps-2 pt-2">Au coeur de l'eau Chambres d'Hôtes</p>
                    <p class="ps-2 pb-3 text-grey">Nuit à partir de <span class="text-dark">71€</span></p>
                </div>
                <div>
                    <span class="ps-2" >ratings</span>
                </div>
            </div>
        </div>
    </aside>`;

        romantiqueId.innerHTML = hotelRomantique
};

romantique.addEventListener('click', function (){
    filtreRomantique()
    romantiqueId.style.display = "block";
    familleId.style.display = "none";
    ecoId.style.display = "none";
    animauxId.style.display = "none";
});

function filtreAnimaux () {    

    let hotelAnimaux = [];

        hotelAnimaux = hotelAnimaux + 
        `<aside class="filtres-apparition col-11 mx-auto br40 d-flex flex-wrap mb-3 pt-1">
            <div class="row d-flex col-12 align-items-center">
                <h2 class="h5 col-12 pt-4 ps-5 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#0065fc" class="bi bi-emoji-smile mb-1" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                </svg>
            Les tops hôtels animaux acceptés</h2>
            </div>
            <div class="col-5 bg-white mx-auto my-3 border shadow radius20 mb-2 d-flex mq-filtres-apparition">
                <img src="./img/hebergements/hebergements_small_3.jpg" class="px-1 py-1 redim-img-popul" alt="Hôtel Les Mouettes">
                <div class="col-6">
                    <div class="col-12">
                        <p class="ps-2 pt-2">Hôtel Les Mouettes</p>
                        <p class="ps-2 pb-3 text-grey">Nuit à partir de <span class="text-dark">76€</span></p>
                    </div>
                    <div>
                        <span class="ps-2" >ratings</span>
                    </div>
                </div>
            </div>
            <div class="col-5 bg-white mx-auto my-3 border shadow radius20 mb-2 d-flex mq-filtres-apparition">
                <img src="./img/hebergements/hebergements_small_6.jpg" class="px-1 py-1 redim-img-popul" alt="Hôtel chez Amina">
                <div class="col-6">
                    <div class="col-12">
                        <p class="ps-2 pt-2">Hôtel chez Amina</p>
                        <p class="ps-2  pb-3 text-grey">Nuit à partir de <span class="text-dark">96€</span></p>
                    </div>
                    <div>
                        <span class="ps-2" >ratings</span>
                    </div>
                </div>
            </div>
        </aside>`;

        animauxId.innerHTML = hotelAnimaux
};

animaux.addEventListener('click', function (){
    filtreAnimaux();
        animauxId.style.display = "block";
        ecoId.style.display = "none";
        familleId.style.display = "none";
        romantiqueId.style.display = "none";
});

/* HEBERGEMENTS & ASIDE POPULAIRES */

function hebergMarseillePlus() {  

    const linkAfficherplus = document.getElementById("link-afficher-plus")
    linkAfficherplus.style.visibility= "hidden";

    let hotelMarseillePlus = [];

        hotelMarseillePlus = hotelMarseillePlus + 
        `<div id="apparition-opacity" class="col-10 mt-5 py-2 d-flex flex-wrap justify-content-center mx-auto bg-light shadow br40" >
            <h2 class="h5 col-11 pt-2 ps-4 text-center">Autres hébergements à Marseille</h2>
            <div class="w-30 px-2 py-2 mq-w-afficher-plus">
                <div class="border bg-white radius20 pb-1 mb-2">
                    <img src="./img/hebergements/hebergements_small_9.jpg" class="px-1 py-1 redim-img-heberg" alt="Hôtel Tout bleu et Blanc">
                    <p class="px-2">Hôtel Tout bleu et Blanc</p>
                    <p class="ps-2 text-grey">Nuit à partir de <span class="text-dark">68€</span></p>
                    <div class="starhebergement">
                        <i class="ps-2 star">&#9733</i>
                    </div>
                </div>
            </div>
            <div class="w-30 px-2 py-2 mq-w-afficher-plus">
                <div class="border bg-white radius20 pb-1 mb-2">
                    <img src="./img/hebergements/hebergements_small_8.jpg" class="px-1 py-1 redim-img-heberg" alt="Au coeur de l'eau Chambres d'Hôtes">
                    <p class="px-2">Au coeur de l'eau Chambres d'Hôtes</p>
                    <p class="ps-2 text-grey">Nuit à partir de <span class="text-dark">71€</span></p>
                    <span class="ps-2" >ratings</span>
                </div>
            </div>
            <div class="w-30 px-2 py-2 mq-w-afficher-plus">
                <div class="border bg-white radius20 pb-1 mb-2">
                    <img src="./img/hebergements/hebergements_small_7.jpg" class="px-1 py-1 redim-img-heberg" alt="Hôtel Le soleil du matin">
                    <p class="px-2">Hôtel Le soleil du matin</p>
                    <p class="ps-2 text-grey">Nuit à partir de <span class="text-dark">128€</span></p>
                    <span class="ps-2" >ratings</span>
                </div>
            </div>
        </div>`;

        marseillePlus.innerHTML = hotelMarseillePlus;
};

function hebergMarseille() {    

    const marseille = document.getElementById("hebergements");

    let hotelMarseille = [];

        hotelMarseille = hotelMarseille + 
        `<article id="article" class="col-7 mt-3 d-flex flex-wrap justify-content-center bg-light shadow br40 mx-auto">
            <h2 class="h5 col-11 pt-4 pb-3 ps-4">Hébergements à Marseille</h2>
            <div class="w-30 px-1 py-1 mq-w-heberg">
                <div class="clignote border bg-white radius20 pb-1 mb-2">
                    <img src="./img/hebergements/hebergements_small_1.jpg" class="px-1 py-1 redim-img-heberg" alt="Auberge la cannebière">
                    <p class="ps-2">Auberge la cannebière</p>
                    <p class="ps-2 text-grey">Nuit à partir de <span class="text-dark">25€</span></p>
                    <div class="starhebergement">
                        <i class="ps-2 star">&#9733</i>
                    </div>
                </div>
                <div class="border bg-white radius20 pb-1 mb-2">
                    <img src="./img/hebergements/hebergements_small_4.jpg" class="px-1 py-1 redim-img-heberg" alt="Hôtel de la mer">
                    <p class="ps-2">Hôtel de la mer</p>
                    <p class="ps-2 text-grey">Nuit à partir de <span class="text-dark">46€</span></p>
                    <span class="ps-2" >ratings</span>
                </div>
            </div>
            <div class="w-30 px-1 py-1 mq-w-heberg">
                <div class="border bg-white radius20 pb-1 mb-2">
                    <img src="./img/hebergements/hebergements_small_2.jpg" class="px-1 py-1 redim-img-heberg" alt="Hôtel du port">
                    <p class="ps-2">Hôtel du port</p>
                    <p class="ps-2 text-grey">Nuit à partir de <span class="text-dark">52€</span></p>
                    <span class="ps-2">ratings</span>
                </div>
                <div class="border bg-white radius20 pb-1 mb-2">
                    <img src="./img/hebergements/hebergements_small_5.jpg" class="px-1 py-1 redim-img-heberg" alt="Auberge Le Panier">
                    <p class="ps-2">Auberge Le Panier</p>
                    <p class="ps-2 text-grey">Nuit à partir de <span class="text-dark">23€</span></p>
                    <span class="ps-2">ratings</span>
                </div>
            </div>
            <div class="w-30 px-1 py-1 mq-w-heberg">
                <div class="border bg-white radius20 pb-1 mb-2">
                    <img src="./img/hebergements/hebergements_small_3.jpg" class="px-1 py-1 redim-img-heberg" alt="Hôtel Les Mouettes">
                    <p class="ps-2">Hôtel Les Mouettes</p>
                    <p class="ps-2 text-grey">Nuit à partir de <span class="text-dark">76€</span></p>
                    <span class="ps-2" >ratings</span>
                </div>
                <div class="border bg-white radius20 pb-1 mb-2">
                    <img src="./img/hebergements/hebergements_small_6.jpg" class="px-1 py-1 redim-img-heberg" alt="Hôtel chez Amina">
                    <p class="ps-2">Hôtel chez Amina</p>
                    <p class="ps-2 text-grey">Nuit à partir de <span class="text-dark">96€</span></p>
                    <span class="ps-2">ratings</span>
                </div>
            </div>
            <a href"#" onclick="hebergMarseillePlus()" id="link-afficher-plus" class="col-11 pb-4 ps-4 text-dark cursor"><p class="clignote text-center" style="width: 120px">Afficher plus..</p></a>
        </article>
        <aside id="aside" class="col-4 mx-auto bg-light shadow br40 mt-3 mb-4 pb-2">
            <div class="row d-flex align-items-center">
                <h2 class="h5 col-10 pt-4 ps-5">Les plus populaires</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-graph-up-arrow col-2 mt-3 pe-5" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"/>
                </svg>
            </div>
            <div class="col-10 mx-auto my-3 border bg-white radius20 mb-2 d-flex mq-w-popul1">
                <img src="./img/hebergements/hebergements_small_9.jpg" class="px-1 py-1 redim-img-popul" alt="Hôtel Tout bleu et Blanc">
                <div>
                    <div class="col-11">
                        <p class="ps-2 pt-2">Hôtel Tout bleu et Blanc</p>
                        <p class="ps-2 pb-3 text-grey">Nuit à partir de <span class="text-dark">68€</span></p>
                    </div>
                    <div>
                        <span class="ps-2" >ratings</span>
                    </div>
                </div>
            </div>
            <div class="col-10 mx-auto my-3 border bg-white radius20 mb-2 d-flex mq-w-popul2">
                <img src="./img/hebergements/hebergements_small_8.jpg" class="px-1 py-1 redim-img-popul mq-redim-img" alt="Au coeur de l'eau Chambres d'Hôtes">
                <div>
                    <div class="col-11" >
                        <p class="ps-2 pt-2">Au coeur de l'eau Chambres d'Hôtes</p>
                        <p class="ps-2 pb-3 text-grey">Nuit à partir de <span class="text-dark">71€</span></p>
                    </div>
                    <div>
                        <span class="ps-2" >ratings</span>
                    </div>
                </div>
            </div>
            <div class="col-10 mx-auto my-3 border bg-white radius20 mb-2 d-flex mq-w-popul3">
                <img src="./img/hebergements/hebergements_small_7.jpg" class="px-1 py-1 redim-img-popul mq-redim-img" alt="Hôtel Le soleil du matin">
                <div>
                    <div class="col-11">
                        <p class="ps-2 pt-2">Hôtel Le soleil du matin</p>
                        <p class="ps-2  pb-3 text-grey">Nuit à partir de <span class="text-dark">128€</span></p>
                    </div>
                    <div>
                        <span class="ps-2" >ratings</span>
                    </div>
                </div>
            </div>
        </aside>`;

        marseille.innerHTML = hotelMarseille
};

function sectionActivitesMarseille() {    

    const activites = document.getElementById("activites");

    let activitesMarseille = [];

        activitesMarseille = activitesMarseille + 
        `<div class="row">
            <h2 class="h5 col-11 pt-2 pb-3 ps-5 text-center">Activités à Marseille</h2>
        </div>
        <div class="row d-flex flex-wrap justify-content-around mq-flex">
        <div class="w-22 mq-w-activites">
            <div class="h1-div-activites shadow">
                <img src="./img/activites/Activites_small_1.jpg" class="redim-img-activites1" alt="Vieux Port">
                <p class="px-2 pt-2">Vieux Port</p>
            </div>
        </div>
        <div class="w-22 mq-w-activites d-flex flex-column justify-content-between">
            <div class="h3-div-activites shadow">
                <img src="./img/activites/Activites_small_2.jpg" class="redim-img-activites2" alt="Fort de Pomègues">
                <p class="px-2 pt-2">Fort de Pomègues</p>
                </div>
                <div class="h2-div-activites shadow">
                <img src="./img/activites/Activites_small_3.jpg" class="redim-img-activites3" alt="Iles du Frioul">
                <p class="px-2 pt-2">Iles du Frioul</p>
            </div>
        </div>
        <div class="w-22 mq-w-activites">
            <div class="h1-div-activites shadow">
                <img src="./img/activites/Activites_small_4.jpg" class="redim-img-activites1" alt="Parc National des Calanques">
                <p class="px-2 pt-2 ">Parc National des Calanques</p>
            </div>
        </div>
        <div class="w-22 mq-w-activites d-flex flex-column justify-content-between">
            <div class="h2-div-activites shadow">
                <img src="./img/activites/Activites_small_5.jpg" class="redim-img-activites3" alt="Notre-Dame-de-la-Garde">
                <p class="px-2 pt-2">Notre-Dame-de-la-Garde</p>
            </div>
            <div class="h3-div-activites shadow">
                <img src="./img/activites/Activites_small_6.jpg" class="redim-img-activites2" alt="Parc Longchamp">
                <p class="px-2 pt-2">Parc Longchamp</p>
            </div>
        </div> `;

        activites.innerHTML = activitesMarseille
};


featureConnectInscript();
formTransition();
hebergMarseille();
sectionActivitesMarseille();
