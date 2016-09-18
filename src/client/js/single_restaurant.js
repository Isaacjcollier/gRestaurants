(function() {

  'use strict';
  console.log('single-restaurant ready');

  $(document).on('click', '#edit-employees', function(event) {
    event.preventDefault();
    console.log('edit-button works');
  });

  $('#employee-edit-btn').on('click', function(event) {
    event.preventDefault();
    console.log('employee-edit-btn works');
  });

  $(document).on('click', '#delete-employees', function(event) {
    event.preventDefault();
    console.log('delete-button works');
  });

  $('#employee-delete-btn').on('click', function(event) {
    event.preventDefault();
    console.log('employee-delete-btn works');
  });

  $(document).on('click', '#add-employee', function(event) {
    event.preventDefault();
    console.log('add-button works');
  });

  $('#employee-add-btn').on('click', function(event) {
    event.preventDefault();
    console.log('employee-add-btn works');
  });

})();
