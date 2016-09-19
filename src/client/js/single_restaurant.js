(function() {

  'use strict';
  console.log('single-restaurant ready');

  $(document).on('click', '#edit-employees', function(event) {
    event.preventDefault();
    console.log('edit-employees button works');

    console.log('employee_id: ', $(this).attr('data-id'));

    const $employee_id = $(this).attr('data-id');
    const $employeeName = $(this).attr('data-name');
    const $employeeRole = $(this).attr('data-role');

    $('#input-employee-id').attr('value', $employee_id);
    $('#input-employee-name').attr('value', $employeeName);
    $('#input-employee-role').attr('value', $employeeRole);
  });

  $('#employee-edit-btn').on('click', function(event) {
    event.preventDefault();
    console.log('employee-edit-btn works');

    console.log($('#input-employee-id').val());

    var employee_id = $('#input-employee-id').val();

    const payload = {
      name: $('#input-employee-name').val(),
      role: $('#input-employee-role').val(),
      id: $('input-employee-id').val()
    };

    var add_URL = 'employees/edit/' + employee_id;

    $.ajax({
      type: 'POST',
      url: add_URL,
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

    var restaurant_id =  $('#single_restaurant_id').val();

    const payload = {
      name: $('#input-new-emp-name').val(),
      role: $('#input-new-emp-role').val(),
      restaurant_id: restaurant_id
    };

    var add_URL = 'employees/new/' + restaurant_id;

    $.ajax({
      type: 'POST',
      url: add_URL,
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
})();
