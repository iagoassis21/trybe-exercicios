const API_URL = 'https://icanhazdadjoke.com/';

const showJoke = (data) => {
  const myJoke = document.getElementById('jokeContainer');
  myJoke.innerHTML = data.joke;
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => showJoke(data));

};

window.onload = () => fetchJoke();