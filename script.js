let fitnessImage = document.getElementById("fitnessImage");
let fitnessInfo = document.getElementById("fitnessInfo");

let antesImageSrc =
  "https://www.greatestphysiques.com/wp-content/uploads/2016/07/ec0350fb9d7142c9993a5dd75b75aa4bcc31d6a-e1469522882170.jpg"; // Imagen antes de la transformación
let despuesImageSrc =
  "https://dev.npcnewsonline.com/wp-content/uploads/2013/09/jeffmain.jpg"; // Imagen después de la transformación

let antesInfo =
  "Jeff Seid, antes de convertirse en uno de los fisicoculturistas más jóvenes y exitosos, comenzó como un adolescente atlético que sufrió una lesión en su ligamento cruzado anterior (LCA). Este revés lo llevó a enfocarse aún más en su físico, a pesar de las dificultades, comenzando su viaje con 84 kg y un porcentaje de grasa corporal del 14%.";
let despuesInfo =
  "Después de años de dedicación y trabajo duro, Jeff Seid transformó su físico para convertirse en un fisicoculturista profesional IFBB. Con un cuerpo altamente definido, alcanzó un peso de 88 kg con solo un 6% de grasa corporal, lo que le permitió competir y ganar competencias a nivel mundial, destacando su simetría y musculatura.";

document.getElementById("btnAntes").addEventListener("click", function () {
  fitnessImage.src = antesImageSrc;
  fitnessInfo.textContent = antesInfo;
});

document.getElementById("btnDespues").addEventListener("click", function () {
  fitnessImage.src = despuesImageSrc;
  fitnessInfo.textContent = despuesInfo;
});
