const apiKey = '2d1f450c47fe256c353fb26cf418fa66';
const input = document.querySelector('#search');
const loc = document.querySelector('#location');
const tem = document.querySelector('#temp');
const temp = document.querySelector('#temp1');
const desc = document.querySelector('#desc');
const speed = document.querySelector('#speed');
const deg = document.querySelector('#deg');
const gust = document.querySelector('#gust');
const maxtemp = document.querySelector('#max');
const mintemp = document.querySelector('#min');
const feel = document.querySelector('#feel');

const callApi = async () => {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${
      input.value || 'guntur'
    }&appid=${apiKey}`
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      loc.textContent = res.city.name;
      tem.textContent = res.list[0].main.temp - 273;
      temp.textContent = res.list[0].main.humidity;
      desc.textContent = res.list[0].weather[0].description;
      speed.textContent = res.list[0].wind.speed;
      deg.textContent = res.list[0].wind.deg;
      gust.textContent = res.list[0].wind.gust;
      maxtemp.textContent = res.list[0].main.temp_max - 273;
      mintemp.textContent = res.list[0].main.temp_min - 273;
      feel.textContent = res.list[0].main.feels_like - 273;
    });
};
document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  callApi();
});