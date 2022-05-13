const button = document.getElementById('btn')
const clicksInPage = document.getElementById('clickTimes')
let count = 0;

button.addEventListener('click', () => { clicksInPage.innerHTML = count+=1; });
