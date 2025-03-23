const weatherInput = document.querySelector("#weatherInput");
const getWeatherButton = document.querySelector("#getWeatherButton");
const weatherAnswer = document.querySelector("#weather-answer");
const gifImage = document.querySelector("#gifImage");
const weatherImage = document.querySelector("#weatherImage");
const weatherContainer = document.querySelector(".weather-container");

const weatherDiv = document.createElement("div");
weatherDiv.classList.add("weatherDiv");

function getWeather(response) {
  const address = response.address;
  const conditions = response.currentConditions.conditions;
  const sunrise = response.currentConditions.sunrise;
  const sunset = response.currentConditions.sunset;
  const temperature = response.currentConditions.temp;
  const humidity = response.currentConditions.humidity;
  const pressure = response.currentConditions.pressure;
  const wind = response.currentConditions.windspeed;
  const dewPoint = response.currentConditions.dew;
  const feelsLike = response.currentConditions.feelslike;

  weatherDiv.innerHTML = `
            <div id="weather-answer">
                <div id="cityNameContainer">
                    ${address}
                </div>
                <div id="mainInfoContainer">
                    <div class="miniContainer">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAbFBMVEX///8AAAD6+vp9fX3ExMT39/fo6Oj09PTk5OTx8fHr6+vW1tbOzs7g4OBcXFykpKRXV1dubm4+Pj6Tk5OLi4uvr69hYWErKytzc3MKCgoyMjKEhIQcHBw5OTm8vLydnZ1PT09ISEgTExMkJCTgrkhKAAAEoklEQVR4nO2b6XbqOgyFScg8zwwJCYH3f8drmXBaIGEytxFr7e9Xm2KWFMvyluwuFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8xfXduEz6Gp2lZMLcRnyLWNC2e24hPUQlnyrmNeAd7ZHWsNG1r/L0pyjh13V4/s8XEJP4c1iiSjqz1UDiz/sZ0tiXDvctnpXhWz2OOGq0wfHOVuQLxrJvHHEUoc22vAi1vcnMeaxTRhTNaas1txoegoGqGqdFNiT6vRQrohZgZR/zghm2d0Twdki7wruLMMvyviDy7q0Ohx4JU+8Ux9+2fj5jB6osEjm1cuEI0xb990+rkwvqKqRE6IG8GD/ZVFfWDO/2gz4JK/vol2dqrpbWrojT8MAyDNq428klOqcDYyYUUew+/hwWBXPfdr4rMGcKOhICMsST4lhRnCcuT8HJJuOWKnCiEujmIKfqSaSGcuLwVlj5505QL3cj9b5mWadwDZYFvrAXGcOSyYT8rumtZYRD4juXes5WKAe41p+fH1XlvTGP/zuLen/MzV6z2ardft5PuBLxXjXkrXLTN2ph4+zapgZsmARfcfHtyYJfWRVGnu+G3iWpMpxZax1SUeWupU5q69S3Xtl3Hb+uTLFvbowP8kR4BE/T9SXKFv7ZI1y/kw2R0RChc7Z0/Mu81EimGr2WWbkhtVo2NsIT72/AvbHuVXNo88p6dZNBhN3gVU2d8ua+MLgA3ohJgZHu0IqbOUOZKJgxzKAdHt2nLERGYiTGuZ7PaO2OhG1eTe0Yr0tzxtvVPrdrIWoT9btmJyo1LktZpXayn/56O5meD1pK7GCrpjEtz0BC7ZXMn+kkiZ9erxlxq8qgmO4sFJsunmMq+Z2jmlm1ZtsaPxV5z6hAGyZGTM3b6SGVRD/24appVFi3jwWhSM7J3GwZGXER9xyMLhPTi70a8+0t6Nn1BLnhUa56bf7ptOSyWTFiuRcAc735GP14o6W15iryIR2Sd0bvdYTMtv/7RUhMwivrD4E9BiuH68GZmup8q7MEn9UF/WvnqZwyLyBpwhqy6OTTH5y8q6PHgzp5TmRnIWmzTV3UXvxT8vuzQHjl1M07iPuneeL8O1XGcnPFlMVa8FyoOKek9myrTJTGivb3R+SKtNWwOMkgJqxyrUGqumEwNVYlaqnDVwhTjt0waTfIcWSm1UpjmnzJHCZPOw/LxDtKT0OtYKn3Dp3DFFrNRS60uG23mUWZVtGTLRQNQM2apmIt2XG5rUrGlWrNnrJxRXL0rLmEmGytqzvBJANRuWavdvZKpmcUFR8pmmVqM8Nk07eRRP+YRdLFuugf6p8hTr/E++ZMUjIQm9Yk1BQlAB00bHlEmchGJs+PbycilKjVhMjHD7ZfkzYQmC4gDn38JkKtm8kjm/lBfXnvgdFfbknVz1r48OWEsOyG8bjI6pxsM6zjwTP1JzNDoIjlMKRX+D5zmRtP6dPk00XDvoWB3ddsttffIWhYl5iX6eXJeoonZTcsJ3er6lzw5pC0LdTmF7vnGcwQhw/ACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAM/AcGXDD0SIwVZQAAAABJRU5ErkJggg=="
                            alt="">
                    </div>
                    <div class="miniContainer">
                        <div>${conditions}</div>
                        <div id="sunContainer">
                            <div>${sunrise}</div>
                            <div>....</div>
                            <div>${sunset}</div>
                        </div>
                    </div>
                    <div class="miniContainer">
                        <div id="check">
                            <div>Temperature</div>
                            <div>${temperature}</div>
                        </div>
                        <div id="check">
                            <div>Humidity</div>
                            <div>${humidity}</div>
                        </div>
                        <div id="check">
                            <div>Pressure</div>
                            <div>${pressure}</div>
                        </div>
                        <div id="check">
                            <div>Wind</div>
                            <div>${wind}</div>
                        </div>
                        <div id="check">
                            <div>Dew Point</div>
                            <div>${dewPoint}</div>
                        </div>
                        <div id="check">
                            <div>Feels Like</div>
                            <div>${feelsLike}</div>
                        </div>

                    </div>
                </div>

            </div>
`;
  weatherContainer.appendChild(weatherDiv);
}

const API_KEY = "KZ9WN8L9BZBFBW4A76RPK4JX9";


getWeatherButton.addEventListener("click", (e) => {
  e.preventDefault();
  const value = weatherInput.value;
  getWeatherData(value)
  getGif(value);
  console.log(value);
});

function getWeatherData(city = "Hyderabad") {
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=KZ9WN8L9BZBFBW4A76RPK4JX9&contentType=json`,
    { mode: "cors" }
  )
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (response) {
      getWeather(response);
      console.log(response);
      console.log(response.currentConditions);
      getGif(response.address);
      getWeatherGif(response.currentConditions.conditions);
    });
}


function getDescription(response) {
  console.log("hello" + response.description);
}

function getGif(gifName = "cats") {
  gifImage.src = "";
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=x0WvDFpuD424kg8L61Y981hgITv266ec&s=${gifName}`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      gifImage.src = response.data.images.original.url;
    })
    .catch(function (error) {
      console.log(`this is an error ${error}`);
    });
}

function getWeatherGif(gifName = "weather") {
  weatherImage.src = "";
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=x0WvDFpuD424kg8L61Y981hgITv266ec&s=${gifName}`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      weatherImage.src = response.data.images.original.url;
    })
    .catch(function (error) {
      console.log(`this is an error ${error}`);
    });
}
