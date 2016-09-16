(function() {

  'use strict';
  console.log('new_user werkin');

  $('#modal-sign-in').on('click', (event) => {
    event.preventDefault();
    const userName = $('#input-username').val();
    const password = $('#input-password').val();
    console.log(userName);
    console.log(password);
  });

})();
