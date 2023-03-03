let rating = '';
const ratingState = document.getElementById('rating-state');
const thankYouState = document.getElementById('thank-you-state');
const rated = document.getElementById('rated');
const ratings = document.getElementsByClassName('rating');
const submitBtn = document.getElementById('submit');
const errorText = document.getElementById('error-text');

for (let i = 0; i < ratings.length; i++) {
  ratings[i].addEventListener('click', e => {
    [...ratings].forEach(r => r.classList.remove('active'));
    rating = e.target.id;
    e.target.classList.add('active');
    rated.innerText = rating;
  });
}

submitBtn.addEventListener('click', e => {
  rating
    ? (thankYouState.classList.remove('hidden'),
      ratingState.classList.add('hidden'))
    : errorText.classList.remove('hidden');
});
