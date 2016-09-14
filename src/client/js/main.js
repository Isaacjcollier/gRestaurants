$(document).ready(function () {
  $('.check').on('submit', function(e) {
    e.preventDefault();
    checkValidation();
  })
})

function checkValidation() {
  if ($('#name').val()) {
    console.log('hi');
  } else {
    console.log('need a name');
  }
}
