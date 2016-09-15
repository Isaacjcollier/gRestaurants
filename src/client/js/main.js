$(document).ready(function () {
  $('.add').click('submit', function(e) {
    e.preventDefault();
  });
});

function checkValidation() {
  let valid = ['.name', '.city', '.street', '.city', 'zip'].every(className => {
    return !!$(className).val();
  });
  if (!valid) {
    $('#myModal').modal({
      show: true
    });
  }
}
