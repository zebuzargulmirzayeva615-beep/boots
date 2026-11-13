let cityName = document.querySelector('.city-name')
let temp = document.querySelector('.temp')
let city = document.querySelector('.city')
let btn = document.querySelector('.btn')
let img = document.querySelector('.img')

btn.addEventListener('click', () => {

let val = city.value

console.log(val);

fetch("https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=8381bde3b01a162ed81d52c0f43bb07d&units=metric")
.then((data) => {
return data.json()
})
.then((getData) => {
console.log(getData);

cityName.innerHTML = <h2>${getData.name}</h2>
temp.innerHTML = <h3>${Math.round(getData.main.temp)} °C</h3>
img.src = `https://openweathermap.org/img/wn/${getData.weather[0].icon}@2x.png`
})
})