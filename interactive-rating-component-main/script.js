let rating = '';
const rated = document.getElementById('rated');

const ratings = document.getElementsByClassName('rating');
for (let i = 0; i < ratings.length; i++) {
  ratings[i].addEventListener('click', e => {
    rating = e.target.id;

    rated.innerText = rating;
  });
}
