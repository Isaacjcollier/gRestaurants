(function () {
  $(document).on('click', '.star', function (e) {
    e.preventDefault();
    const rating = $(this).attr('data-star');
    const htmlStarReplace = staticStar(rating);
    replaceSaticStars(htmlStarReplace);
    console.log(rating);
  });
})();

function replaceSaticStars(htmlStarReplace) {
  $('.rating_wrap').replaceWith(htmlStarReplace);
  $('.star').wrapAll('<div class="rating_wrap" />');
}

function staticStar(rating) {
  let replaceStars = '';
  for (let i = 0; i < 5; i++) {

    if (i < rating) {
      replaceStars += `<label class="star fa startStyle fa-star fa-lg" for="star_${i + 1}" data-star="${i + 1}"></label>`;
    } else {
      replaceStars += `<label class="star fa starStyle fa-star-o fa-lg" for="star_${i + 1}" data-star="${i + 1}"></label>`;
    }
  }
  return replaceStars;
}
