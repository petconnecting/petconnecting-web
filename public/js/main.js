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
