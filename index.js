let code = document.querySelector("#code");
const codePostal = document.querySelector("#cp");
let nom = document.querySelector("#v");

// function validateCodePostal() {
//   console.log("valide");
//   var Reg = new RegExp(/^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/);
//   return Reg.test(codePostal);
// }

code.addEventListener("submit", function (event) {
  event.preventDefault();

  let apiUrl = `https://geo.api.gouv.fr/communes?codePostal=${codePostal.value}&fields=nom&format=json`;

  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      data.forEach((element) => console.log(element.nom));
      data.forEach((element) => console.log(element.codePostal));
      const fields = codePostal["nom"];
      nom.textContent = data.nom[0]["nom"];
    });

  // function display_news(result) {
  //   console.log(element.nom);
  // nom = result["data"];
  // console.log(code["nom"]);
});

// const searchParams = new URLSearchParams(window.location.search).getAll("code");

// const fields = ["nom", "code"];

// const apiURL = `https://geo.api.gouv.fr/communes?codePostal=63360&fields=nom&format=json&geometry=centre${searchParams}.json`;

// let monCode = document.querySelector("code");
// monCode.textContent = Reg.code;
// let maVille = document.querySelector("nom");
// maVille.textContent = Reg.nom;
