/* NAV */

const featureConnectInscript = () => { 
    
    const dropdown = document.getElementById("dropdown");

    let connectInscript = [];

        connectInscript = connectInscript + 
        `<a class="nav-hover dropdown-toggle text-decoration-none" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Compte
        </a>
        <ul class="dropdown-menu text-grey border-0" aria-labelledby="navbarDropdownMenuLink">
            <li class="connexion"><a class="dropdown-item text-grey cursor" href="login.html">Connexion</a></li>
            <li class="deconnexion" onclick="logOut();"><a class="dropdown-item text-grey cursor">Deconnexion</a></li>
            <li class="inscription"><a class="dropdown-item text-grey cursor" href="inscription.html">Inscription</a></li>
        </ul>`;

        dropdown.innerHTML = connectInscript;

        if(localStorage.getItem('userId') !== null) {
            const connexion = document.querySelector('.connexion');
            connexion.style.display = "none";
            const inscription = document.querySelector('.inscription');
            inscription.style.display = "none";
        } else {
            const deconnexion = document.querySelector('.deconnexion');
            deconnexion.style.display = "none";
        }
};

function logOut(){
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    localStorage.removeItem('noteHostel');
    window.location.href = "index.html"
};

document.addEventListener('DOMContentLoaded', function(){
    
    featureConnectInscript();
    
});

/* HOTEL PROFIL */

function hotelProfil() {    

    const hotel = document.getElementById("hotelProfil");

    let hotelProfilAlone = [];

        hotelProfilAlone = hotelProfilAlone + 
        `<article class="mq-w-75 mq-w-90 mt-3 pt-3 d-flex flex-wrap justify-content-center bg-light shadow br40 mx-auto">
            <h1 class="text-center my-2 w-75 h2 mx-auto hostelName"></h1>
            <div class="col-12 mb-2">
            <form>
                <div class="starhebergement col-12 text-center">
                    <i class="ps-2 star cursor" data-value="1">&#9734</i>
                    <i class="ps-2 star cursor" data-value="2">&#9734</i>
                    <i class="ps-2 star cursor" data-value="3">&#9734</i>
                    <i class="ps-2 star cursor" data-value="4">&#9734</i>
                    <i class="ps-2 star cursor" data-value="5">&#9734</i>
                </div>
                <div class="text-center">
                <input type="hidden"class="col-12" name="note" id="note" value="0">
                <p class="thankNote col-12 text-center my-1"></p>
                </div>
            </form>
            </div>
            <div class="border bg-white radius20 mq-w-75 mq-w-90">
                <img src="./img/hebergements/hebergements_small_1.jpg" class="px-3 py-3 redim-img-hotel-profil" alt="Auberge la cannebière">      
            </div>
            <div class="border bg-white radius20 mt-2 mx-3 py-2 px-3 col-lg-7 col-md-11">
                <h2 class="h5 text-center py-2">Description de l'établissement</h2>
                <p class="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut est sit amet lorem iaculis faucibus. Suspendisse potenti. Sed feugiat arcu eget nulla molestie facilisis. Cras tincidunt urna neque, nec vehicula purus semper interdum. 
                    <br> Etiam nisl neque, fermentum sed odio in, feugiat aliquet justo. Vestibulum finibus mi et mauris porta, a vulputate odio porttitor. Aenean suscipit sem orci, a tincidunt diam fringilla non. Donec congue, leo sed vehicula tincidunt, metus ex scelerisque nisl, quis facilisis ipsum magna et justo. 
                    <br>Cras placerat turpis sem, ac cursus nibh accumsan in. Nulla a justo in tellus efficitur imperdiet. Aliquam id diam nisl. Sed faucibus at nunc et finibus. Maecenas interdum, diam sed scelerisque bibendum, velit velit sollicitudin felis, eu molestie lectus est eu tellus. Phasellus elit quam, pulvinar at congue vel, vestibulum a tortor.
                </p>
            </div>
            <div class="col-lg-4 col-md-10 mt-2 mx-2 border bg-white radius20 ">
            <p class="text-center text-grey mt-3">Nuit à partir de <span class="text-dark price"></span></p>
            <p class=" text-center clignote rounded-pill w-75 mx-auto mt-3 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0065fc" class="bi bi-coin mb-1 me-1" viewBox="0 0 16 16">
                    <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"/>
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                </svg>
            Economique</p>
            <p class="noteUser px-3 my-3 text-center"></p>
            </div> 
        </div>
            <button class="clignote text-center btn btn-outline-primary w-50 my-4 disabled" style="width: 120px">Réservation - Soon </button>
        </article>`;

        hotel.innerHTML = hotelProfilAlone

        const urlSearchParams = new URLSearchParams(window.location.search);
        const id = urlSearchParams.get("id");

        fetch(`http://localhost:3000/api/hostel/${id}`, {
        method: "GET",
    
        })
        .then(function(res) {
          if (res.ok) {
            return res.json();
            }
        })
        .then(function(res){
           const hostelName = res.hostelName;
           const hostelPrice = res.price;
           const name = document.querySelector('.hostelName')
           name.innerHTML = `${hostelName}`
           const price = document.querySelector('.price')
           price.innerHTML = `${hostelPrice}`
        }) 

        if(localStorage.getItem("noteHostel") !== null){
            const noteUser = localStorage.getItem("noteHostel");
            const paragrapheNote = document.querySelector('.noteUser');
            paragrapheNote.innerHTML = "Vous avez mis une note de " + `${noteUser}` + "/5 a cette établissement !";
        } else {
            const paragrapheNote = document.querySelector('.noteUser');
            paragrapheNote.innerHTML = "Vous n'avez pas encore noté cette établissement.";
        }
};

const hotelNote = () => {

const stars = document.querySelectorAll('.star');
const note = document.querySelector('#note')

    for(star of stars){
        star.addEventListener('mouseover', function(){
            starFull();
            this.style.color ="#0065fc";

            let beforeStar = this.previousElementSibling;
            
            while(beforeStar) {
                beforeStar.style.color = "#0065fc";
                
                beforeStar = beforeStar.previousElementSibling;
            }
        });

        star.addEventListener('click', function(){
            note.value = this.dataset.value;
            
            const thankNote = document.querySelector('.thankNote');
            localStorage.setItem("noteHostel", note.value);
            if(note.value == 1) {
                const hostelName = document.querySelector('.hostelName').innerText;
                thankNote.innerHTML = `<p class="px-1">${hostelName} vous remercie pour votre note !</p>`
                + `<br><button onclick="sendNote();" class="clignote col-4 text-center btn btn-primary my-2" disabled>Send note - Soon</button>`;
                localStorage.setItem("noteHostel", note.value);
                const noteUser = localStorage.getItem("noteHostel");
                const paragrapheNote = document.querySelector('.noteUser');
                paragrapheNote.innerHTML = "Vous avez mis une note de " + `${noteUser}` + "/5 a cette établissement !";
            } else {
                const hostelName = document.querySelector('.hostelName').innerText;
                thankNote.innerHTML = `<p class="px-1">${hostelName} vous remercie pour votre note !</p>`
                + `<br><button onclick="sendNote();" class="clignote mq-w-button-note col-4 text-center btn btn-primary my-2" disabled>Send note - Soon</button>`;
                localStorage.setItem("noteHostel", note.value);
                const noteUser = localStorage.getItem("noteHostel");
                const paragrapheNote = document.querySelector('.noteUser');
                paragrapheNote.innerHTML = "Vous avez mis une note de " + `${noteUser}` + "/5 a cette établissement !";
            }
            
        });

        star.addEventListener('mouseout', function(){
            starFull(note.value);
        })
    }

    function starFull(note = 0){
        for(star of stars){
            if(star.dataset.value > note) {       
                star.style.color = "black";
            } else {
                star.style.color ="#0065fc";
            }
        }
    }

}

/* FOOTER */

const footerPage = () => {    

    const footer = document.getElementById("footer");

    let footerBlock = [];

        footerBlock = footerBlock + 
        `<div class="w-30 ps-4 pb-3 mq-w-div-footer">
            <h3 class="h5 pb-3">A propos</h3>
            <p class="pb-2"><a href="#" class="text-grey text-decoration-none">Fonctionnement du site</a></p>
            <p class="pb-2"><a href="#" class="text-grey text-decoration-none">Conditions générales de vente</a></p>
            <p><a href="#" class="text-grey text-decoration-none">Données et confidentialité</a></p>
        </div>
        <div class="w-30 ps-4 pb-3 mq-w-div-footer">
            <h3 class="h5 pb-3">Nos hébergements</h3>
            <p class="pb-2"><a href="#" class="text-grey text-decoration-none">Charte qualité</a></p>
            <p><a href="#" class="clignote text-grey text-decoration-none"> Soumettre votre hôtel - Soon</a></p>
        </div>
        <div class="w-30 ps-4 pb-3 mq-w-div-footer">
            <h3 class="h5 pb-3">Assistance</h3>
            <p class="pb-2"><a href="#" class="text-grey text-decoration-none">Centre d'aide</a></p>
            <p class="pb-2"><a href="mailto:crisinvest88@gmail.com" class="text-grey text-decoration-none">Nous contacter</a></p>
        </div>`;

        footer.innerHTML = footerBlock;
};

    
    hotelProfil();
    hotelNote();
    footerPage();


