(function() {

  'use strict';
  console.log('update_restaurant working');
  $(document).on('click', '#edit-restaurant', function(event) {
    event.preventDefault();
    const $pictureURL = $(this).attr('data-image');
    const $restaurantName = $(this).attr('data-name');
    const $restaurantCuisine = $(this).attr('data-cuisine');
    const $restaurantStreet = $(this).attr('data-street');
    const $restaurantCity = $(this).attr('data-city');
    const $restaurantState = $(this).attr('data-state');
    const $restaurantZip = $(this).attr('data-zipcode');
    const $restaurantDescription = $(this).attr('data-description');
    const $restaurantID = $(this).attr('data-id');
    $('#input-picture-url').attr('value', $pictureURL);
    $('#input-name').attr('value', $restaurantName);
    $('#input-cuisine').attr('value', $restaurantCuisine);
    $('#input-street').attr('value', $restaurantStreet);
    $('#input-city').attr('value', $restaurantCity);
    $('#input-state').attr('value', $restaurantState);
    $('#input-zipcode').attr('value', $restaurantZip);
    $('#input-description').attr('value', $restaurantDescription);
    $('#input-id').attr('value', $restaurantID);
    console.log($restaurantID);
  });

  //send post to server on form submit
  $('#save-changes').on('click', function(event) {
    event.preventDefault();
    const $idToUpdate = $('#input-id').val();
    const $updatePic = $('#input-picture-url').val();
    const $updateName = $('#input-name').val();
    const $updateCuisine = $('#input-cuisine').val();
    const $updateStreet = $('#input-street').val();
    const $updateCity = $('#input-city').val();
    const $updateState = $('#input-state').val();
    const $updateZip = $('#input-zipcode').val();
    const $updateDescription = $('#input-description').val();
    console.log($idToUpdate);
    const payload = {
      picture_url: $updatePic,
      name: $updateName,
      cuisine: $updateCuisine,
      street: $updateStreet,
      city: $updateCity,
      state: $updateState,
      zip: $updateZip,
      description: $updateDescription
    };
    //PUT request with payload for server
    $.ajax({
      type: 'PUT',
      url: `/api/v1/restaurants/${$idToUpdate}/edit`,
      data: payload
    })
    .done((data) => {
      //toggle modal off when complete
      $('#myModal-edit').modal('toggle');
      //reload page to show updates
      location.reload();
    })
    .fail((error) => {
      console.log(error);
    });
  });

  $(document).on('click', '#delete-restaurant', function(event) {
    event.preventDefault();
    const $deleteRestaurantID = $(this).attr('data-id');
    $('#input-id-delete').attr('value', $deleteRestaurantID);
  });

  $()



})();
