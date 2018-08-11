const dogApi = new DogApi();

$(document).ready(function() {

    
    $('[name="race"]').change(function() {
        const race = this.value;
        dogApi.getImage(race)
            .then(image => {
                $('#animal-img').attr('src', image);
                $('#animal-img-input').val(image);
            })

    })
});


function startMap() {

    // Store coordinates
    const MiCasa = { lat: 40.9903145,  lng: -3.6382945 };
  
    // Map initialization
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: MiCasa
    });

    var animalMarkers = [];

    // Iterate over div with card class
      // get latitude and longitude
      // create new marker with these lat and lng
      // push new marker to animalMarkers array

    const petDivs = document.getElementsByClassName("card");

    for (let i = 0; i < petDivs.length; i++) {
      let petDiv = petDivs[i];
      const lat = Number(petDiv.dataset.lat);
      const lng = Number(petDiv.dataset.lng);

      let newAnimal = new google.maps.Marker({
        position: {
          lat: lat,
          lng: lng
        },
        map: map
      });

      map.setCenter(newAnimal.getPosition())

      animalMarkers.push(newAnimal);

      newAnimal.infowindow = new google.maps.InfoWindow({
        content: "<img width='200px' src='" + petDiv.children[0].src + "'/>"
      });

      newAnimal.addListener("click", function() {
        this.infowindow.open(map, this);
      });
    }
}
  
  startMap()