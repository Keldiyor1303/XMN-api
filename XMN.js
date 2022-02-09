const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all")
request.send()

const container = document.querySelector(".container")

request.addEventListener("load", function () {
    const response = JSON.parse(request.responseText)

    response.forEach(country => {
        const html = `
            <div class="country">
                <img src=${country.flags.png} alt="">
                <h2>${country.name.common}</h2>
                <b>${country.population}</b>
                <p>${currencies(country.currencies)}</p>
            </div> 
        `

        container.insertAdjacentHTML("beforeend", html)
    })
})

function currencies(currencies) {
    for (let curren in currencies) {
        return currencies[curren].name + " [" + currencies[curren].symbol + "]"
    }
}