(function() {

  'use strict';
  console.log('new_user sign up!!');

  $('#sign-up-modal').on('click', (event) => {
    event.preventDefault();

    const userPayload = {
      firstName: $('#input-firstName').val(),
      lastName: $('#input-lastName').val(),
      userName: $('#input-username').val(),
      password: $('#input-new-password').val(),
      email: $('#input-user-email').val()
    };

    //PUT request with payload for server
    $.ajax({
      type: 'POST',
      url: '/api/v1/users/new',
      data: userPayload
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

})();
