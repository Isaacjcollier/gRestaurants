(function () {
  $(document).on('click', '.star', function (e) {
    e.preventDefault();
    const rating = $(this).attr('data-star');
    console.log(rating);
  })
})();
