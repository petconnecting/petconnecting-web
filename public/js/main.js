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
  
    // Add a marker for Ironhack Barcelona
    const miMarker = new google.maps.Marker({
      position: {
        lat: MiCasa.lat,
        lng: MiCasa.lng
      },
      map: map,
      title: "Campus"
    });
  
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const user_location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
  
        // Center map with user location
        map.setCenter(user_location);
  
        // Add a marker for your user location
        const miMarker = new google.maps.Marker({
          position: {
            lat: user_location.lat,
            lng: user_location.lng
          },
          map: map,
          title: "HERE"
        });
  
      }, function () {
        console.log('Error in the geolocation service.');
      });
    } else {
      console.log('Browser does not support geolocation.');
    }
  }
  
  startMap();