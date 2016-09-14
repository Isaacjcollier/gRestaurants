$(document).ready(function () {
  $('.check').on('submit', function(e) {
    e.preventDefault();
    checkValidation();
  })
})

function checkValidation() {
  let valid = ['.name', '.city', '.image'].every(className => {
    return !!$(className).val()
  })

  console.log(valid)
  // if ((!!$('.name').val()) || (!!$('.city').val())) {
  //   $('#myModal').modal({
  //     show: true
  //   });
  // }
}
