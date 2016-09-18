(function () {
  $(document).ready(function () {
    let rating = document.getElementById('rating').getAttribute('value');
    let starReplace = staticStar(rating);
  });
})();

function staticStar(rating) {
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      $('.rating_wrap2').append('<label class="star fa fa-star fa-lg"></label>');
    } else {
      $('.rating_wrap2').append('<label class="star fa fa-star-o fa-lg"></label>');
    }
  }
}
