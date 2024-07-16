//Creacion de ubicacion localizacion local google map api
let map;
async function initMap() {
  let coord  = {lat:-33.012516 ,lng:-71.549197 };
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: coord,
    zoom: 16,
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
});
}
initMap();
