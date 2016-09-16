(function() {

  'use strict';
  console.log('update_restaurant working');
  $(document).on('click', '#edit-restaurant', function(event) {
    event.preventDefault();
    const $pictureURL = $(this).attr('data-image');
    const $restaurantName = $(this).attr('data-name');
    const $restaurantStreet = $(this).attr('data-street');
    const $restaurantCity = $(this).attr('data-city');
    const $restaurantState = $(this).attr('data-state');
    const $restaurantZip = $(this).attr('data-zipcode');
    const $restaurantDescription = $(this).attr('data-description');
    const $restaurantID = $(this).attr('data-id');
    $('#input-picture-url').attr('value', $pictureURL);
    $('#input-name').attr('value', $restaurantName);
    $('#input-street').attr('value', $restaurantStreet);
    $('#input-city').attr('value', $restaurantCity);
    $('#input-state').attr('value', $restaurantState);
    $('#input-zipcode').attr('value', $restaurantZip);
    $('#input-description').attr('value', $restaurantDescription);
    $('#input-id').attr('value', $restaurantID);
    console.log($restaurantID);
  });

  $(document).on('click', '#delete-restaurant', function(event) {
    event.preventDefault();
    const $deleteRestaurantID = $(this).attr('data-id');
    $('#input-id-delete').attr('value', $deleteRestaurantID);
  });

})();
