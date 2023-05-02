//variable code sur form
let code = document.querySelector("#code");
// variable sur le input code postal
const codePostal = document.querySelector("#cp");
// variable sur element nom de la ville
const nom = document.querySelector("#n");
//variable sur element liste
const liste = document.querySelector("#ns");
const fields = ["nom", "code"];
// ecoute evenement de submit codePostal et event-p-default permet de ne pas envoyer le formulaire c une requete api
code.addEventListener("submit", function (event) {
  event.preventDefault();

  //connexion api
  let apiUrl = `https://geo.api.gouv.fr/communes?codePostal=${codePostal.value}&fields=nom&format=json`;

  // requete et demande reponse en json
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);

      // vider valeur avant la datalist option
      liste.innerHTML = "";

      //boucle forEach qui retourne l'array codePostal et l'index nom faire un appendchild sur la liste pour dire que c'est l'enfant de element.nom et creer les nvelles options
      data.forEach((element, index) => {
        liste.appendChild(new Option("", element.nom));

        //teste si le premier nom est bien 0
        if (index == 0) {
          nom.value = element.nom;
        }
      });
    });
});

// const ville =
//   data[0].nom + data[1].nom + data[2].nom + data[3].nom + data[4].nom;
// for (data.nom = 0; data.nom < 0; data.nom++);
// nom.value = ville;
// nom.lenght = data.nom;

//   function qui valide format codepostal function validateCodePostal() {
//   console.log("valide");
//   var Reg = new RegExp(/^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/);
//   return Reg.test(codePostal)//
