$(document).ready(function () {
  $('.check').on('submit', function(e) {
    e.preventDefault();
    checkValidation();
  })
})

function checkValidation() {
  if ($('.name').val() === 'undefined') {
    console.log('hi');
  }
}
