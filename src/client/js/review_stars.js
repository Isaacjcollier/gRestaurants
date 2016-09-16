(function () {

  let rating = '';

  $(document).on('click', '.star', function (e) {
    e.preventDefault();
    rating = $(this).attr('data-star');
    const starReplace = staticStar(rating);
    // console.log(rating);
  });

  $('[name="review-form"]').on('submit', function(e) {
    e.preventDefault();
    const $user_rating = rating;
    const $user_review = $('textarea#input_user_review').val();
    const $user_id = $('#input_user_id').val();
    // console.log($user_rating, $user_review, $user_id);
    $.ajax({
      type: 'POST',
      url: '/api/v1/users',
      data: {
        user_rating: $user_rating,
        user_review: $user_review,
        user_id: $user_id
      }
    });
  });
})();

function staticStar(rating) {
  for (let i = 0; i < 5; i++) {
    if ($(`[for=star_${i + 1}]`).hasClass('fa-star-o')) {
      if (i < rating) {
        $(`[for=star_${i + 1}]`).removeClass('fa-star-o').addClass('fa-star');
      }
    } else {
      if (i + 1 > rating) {
        $(`[for=star_${i + 1}]`).removeClass('fa-star').addClass('fa-star-o');
      }
    }
  }
}
