const API_KEY = `33108b14d84106f214b14b229c809883`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    // clear serach fild ==
    document.getElementById('city-name').value = '';


    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    // একাধিক কোয়েরি পেরামিটার হলে &units=metric এড করে দিতে হয় == 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

// write a fuction for id & text==
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {

    // ===called id & text function===
    // add city name 
    setInnerText('city', temperature.name);

    // add temperature 
    setInnerText('temperature', temperature.main.temp)

    // add weather 
    setInnerText('condition', temperature.weather[0].main)

    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    // এখানে ইমেজ src এর চেঞ্জ url করবে 
    imgIcon.setAttribute('src', url);
}