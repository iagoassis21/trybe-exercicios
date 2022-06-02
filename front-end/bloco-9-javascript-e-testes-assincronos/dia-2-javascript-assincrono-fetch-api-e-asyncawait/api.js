const url = `https://api.coincap.io/v2/assets`;

const getByName = (data) =>  {
    const rankTop10 = data.data.filter(({rank}) => rank <= 10);
    const result = rankTop10.map(({name, priceUsd, symbol}) => ({name, symbol, priceUsd}))
    const myList = document.getElementById('List');
    result.forEach(({name, priceUsd, symbol}) => {
        const div = document.createElement('div');
        div.innerHTML = `${name} (${symbol}): USD ${Math.round(priceUsd*100)/100} - R$ ${Math.round((priceUsd*4.82)*100)/100}`;
        myList.appendChild(div)
    });
}

const getCryptoData = () => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => getByName(data))
}

getCryptoData();