const button = document.getElementById('submitButton');
let inputName = document.getElementById('input-name');
const nameUser = document.getElementById('showNameUser');

function eventDefault(e){
    e.preventDefault();
    console.log(inputName.value);
    nameUser.innerHTML = inputName.value;
}
button.addEventListener("click", eventDefault)