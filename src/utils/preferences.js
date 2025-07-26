import { useState } from "react";

export const MID_HOT_IMG = 'https://media-hosting.imagekit.io/b47b76df0591432e/hot.png?Expires=1840888104&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=upVnwe9oUII3dHAIF8rPA2ur1oG0NsFBcMGv4ebsWE~XUpasjaboe4eSqmFIfZ-x4o-E~g8AyuzpS05kks9Gk6EGtU30lEC2c4dBjBtHRs7SXJjOEedjg5uTSpKZ4KCw~4ezBq6YQAhb~lmE0Hll9I34aiA-1~BaowXE-L7i4C-UdNC~2e1NCV3DUvbMGMqU2V-GGmymrpJB5vcjmRc~IU8T0JIG1sdmMfGY1w-gzUYeUWhw8keW7i1AL13WyK2671Q~ZNwUbuVWMIceffbU-RAMf0oVCVzifiTXO0-WDcPiOIGFj~4teJJ2G8X2oFMtETnJyRwJ4Yzbhq01og0GTQ__';
export const COLD_IMG = 'https://media-hosting.imagekit.io/f92192be5c0d45d9/cold.png?Expires=1840888333&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Fn9Nvn0MkXJyz8VPX6175wPMdcyO7zskAdLvEjX8REGhvcN2OhMdHmM66gkaIkH688E0utMKj8ytx8sx~uYip5dkRAZzvvoZ0KUtFeg3EL6x7Y5ZMJwvqxUBCUj9CQIqnKWMX7j5wjSoRo-HNcdy9BiX3S-91EnXv0sfRPLi9w26JciyRZV3tTP4TNPfnVfvN9hnmcyNr3AYQtg7tUvU3e92faB1fsZpAIOIiBoMZclwfzUHWUUmZLc2TZxEHvVac1sjCoMfsD7v5iDrBzhIZDu8G3kDTju9BvjgQsvO1~cW3Ya61PNF-JE1nNJ-1WzFu5NnPE9USM6AEhUwmxluUw__';
export const HOT_IMG = 'https://media-hosting.imagekit.io/3b283fec77a54b5d/thermometer.png?Expires=1840888333&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=aeJfQbxZaIC2oBvMdgTXX8fbWYOweOLxZWtmfqJLf0SvdJbsj8kZ7B2O55z2Ufdpg07aK2L6rul3hasRFl6c9o4erivSSr6aZ2rDbLe5aAoPAwAQmSvYcOSGDQD9lgxyHYyeRH5R7psEM3D4DU5fybpIRSBUyJEx8NbACq~c3Zw1E33BScr6c-IAzxERjoSCshq7R-ccHVlNuD0ZFOht5oKJqXGYZwPk8MidoSnkdjTzzOzRcYNf5EWb-dD5dfYJACX0p29ZJIS08QGyg02yUFpP3oygR2nOY3LlOKYJ723lU8wfTiwgdFKNIHvSa8qacw2p3aAP2LwhRB8Ahbfk~g__';
export const WIND_IMG = 'https://media-hosting.imagekit.io/2cd78c2086ea4b5e/wind.png?Expires=1840888333&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=lMaWdHsB~7RLTyNhVV-gyNglPUwaMVvcR0ywIXIYPsYEpGoihj8tb7~wm7z9krUMBuGCYfO88HWEyAnkwZOXa1BvIgOnJkUmkywKnRRigOTP9eKccx8MYs0WOvyNSasGJluAD6-DOSKv~qCZrmZPfb6ejM8tlD84hebqZwB2TvWFdkGHtnsGZJY60ELkFma1KXbiRGvJxv5DBCogd2XMrkAU8ssANoqRZcDjMHQ2ChdozZTK-H3wVdLKMytPKg9vbl7kHl-WuBafGmG-prd-2ydNlNJYoNJsIWxdQGUJCxymvWVdjnP20JE4F0SVokOl5Tf~T2PBeP-LHrD9e4F-aw__';
export const HUMIDITY_IMG = 'https://media-hosting.imagekit.io/539fe68e653447dc/humidity.png?Expires=1840888529&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=haAjANbiACC8PIf5ZsZNJdLSnslJz~faTIpHQGuCZGOfi6TkHi6odYdQbmU42GPIA9Tn0uL5SWmF~gRm5qs9nzzGxtvzztbtpU~cCn9MGUaW0NEEryZXNNb5~8bCOaUlrNoE-XJF6m9aIeIe8o4U-vYy62-X0QjLcaYaVrMSqB3EY9sn0EtSZzQyU4HAzjt565urZOyTl42za4IPKP4rIUqb2b6yZ1dLlW~pf~leIxZ-ULApoJe-ZvJKQTc3ZxVP4UkzGZmmrju0oIOG8pZ-8brwDX1TPuMvugS40Osna-0Lb-cFsexz5a4OZ~4wmcdYeqw8OW9K-AHcDh9SFfaMmw__';
export const VISIBILITY_IMG = 'https://media-hosting.imagekit.io/9435b28a333c406b/visibility.png?Expires=1840888866&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=VLbczbefkNT6VzvOqnv3hyDIJLlDXMBVNCWyWahx7oRh753S2wYbJgarqaB-1tiCpH7w6iELhJ5OnPIvfBtUcfUsAOpM6ycgoCUIcW16I8-KYvk~VgERCzCjL~2BjThYGsj45~la7HLIiXz4NTe6ZtmNrY3cYfepIPpIhiWTboroEMu46X43VWMyAotvTLrV3xqOqtWf4hVVdn9xeVyDhmFXzo7nVTUwb~~TQwgfjpv2sHejJYyeqCxAP0rP9TqBJtQNqMgS8NeaWScDOhJ1M0zCYLKCAyfmuBP4K8r0LJ9dsDdjpJ8rPg-YhqDLG4dbRLnKZF0z6amGMCYQ5gZlTQ__'
export const PRESSURE_IMG = 'https://media-hosting.imagekit.io/eb7347cdc8624701/vecteezy_clock-face-icon-black-and-white-transparent-background_19923754.png?Expires=1840902459&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Mwkz-4xdhf0MzLb05xHcnKNZq2bhwBVKxXtWkOpi7R2Zjl-2ER3wd0-pgojNZ3TxRCEF4BPK1qxsMeJf9WsfzUCbd-J6Ot5dYIDGVVDSf7m6MtjhPFrZIoAodphq6KT1WG7-CvTTg~QQh3-TQ9fcltob0RFdQD-easDgOGzwAzqHljZjB0o0DroVMt6hFsny6ZA1nVfA2e79kPxODCponvP81zCza-glyRMj0LpVIZjAxviOymRxs8j92-uIaMlXiYg6djKZeFQTyik1MkxoYUGXXRqzODYw-hQEOjMTD0BUsjSDbYRYCIlP3sjfZAs0WmmoFJ9~FMkrGh6MdH10ng__'
export const EXPOSURE_IMG = 'https://media-hosting.imagekit.io/3b8f888dfe2f488d/vecteezy_young-boy-ready-for-adventure-with-backpack-isolated-on_48759214.png?Expires=1840969714&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wLxE6JVbaVapPeZc-D6YbKdgcNFiRTRX-wFtKLMGs91eL8KRoeghTX3Hp7UBSHGWhki0ufS93um2rB3bvSGKToa-e8c~ZjQvSCxoifR0luLkMui-sa7VPScQnYahClR4U4hxBJ9luLr2qD2-FusoBHsXLISAmDCpx8zmT2NPOm3hV8sVy5WSDoe~rw7Q5QWNYNKMQl8WxkyvAXnHfbpvEod0cWSPtCWdp~hBLYoROw8A3laa-HstO9NwnSi2jCRV-1FBNP16ALFp-0IMghf8gYMfXrTFypdwSbvw513IHKklPv8FgXxwgwwRHUoFNBCQM3d1SqYEGgl9I0iKpdQJUg__'
export const SUN_IMG = 'https://media-hosting.imagekit.io/135b1966ee1047d4/vecteezy_3d-weather-icon_27245498.png?Expires=1840972206&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=aCkWn3mMbDapTUB6jBP1UOt9KYapOypBHUrEbQz0AoJCr-y1Drd9FMGiXPpZ8AXrdCzTWzQDCzk2ED0jp-hVU9gRDn8iJhy~qmWb-slb4yCszoE7EV3vu6mTnw7AcPqerjG9Tt1d6ZJ0YE0YLg2UR4Dm1FTllJwdsDaotCNes-3vAD2mRtDqoMrdQ7H0fL-yd~AjnSBv1J3PSJhNzsv-jRcqB~kFGzmwGCrGdYyVCB6MJIdx~AJl5-R~yiZm6KcLAAGS7OQPrrmRd4O87GZbphZLN9fwj-H~AB4H0kkBHJeI0wqIfmwrpJtAhBTt60qAcnP4u0BNzegz1-b-zln0XQ__';
export const CLOUD_IMG = 'https://media-hosting.imagekit.io/f7066cf25e7a4011/vecteezy_cloud-png-with-ai-generated_26774603.png?Expires=1840972975&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=w5ZqRMUrtWpNNI-KDGNrHiRv~iZACAfLItwLTljxB2bg-my3vfx-rU1fIii4QmyxGlgJgQonsXnvGqnIYHuzFm15op7U7dr9E4k9l0NrSrQE6G-atgFAV4OEA-~Sg1FvUIMNWs-LX7yIYiscf4UjvKi5FBxe~VT572US90U9L-FfY~lPgyOqstmxM3SawtVaVG~rypfS1doIBvzFU253JgE6mZNsMwcQ1g3znOGH-LY26Bg7WvUQzILKAmA4vqtAUzHqaZRdtT~ShEpqDV5yTVemXUvw6J52coW06biUBgHKuSUrWjEQKgdaEWdKJUN8p5Yln8at62QBNNPfvvqZHw__';
export const WEATHER_IMG = 'https://media-hosting.imagekit.io/59958bb09bab4d16/weather.png?Expires=1840974684&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=WO7DviqCAJwiUs0Zy2Of6aoAuJNRWHDHkYtWlMud~RLPjaEIihLZqsqlVIFOFlphSFkFUofoe~uVlUwmKGdBJFHHUJTlqnYPSCwf5CfJ-XNOmhZvNZEjkJ8TyYL1NpPKDZfXep9FeuftjXg8zg3GjTAY00Eh~~5NVkYqlt-9GqiDDY9-7zX-rcpVi6fGE3sFC1TPm2CwnhIMREShm13duYpA868HZyqB6ubX2YSuxO-xvauzUF2h3niMkmWpflweVAPlEFpm8-o2~qJFAv00vZrp6vD0491Y7830TrNc1qPrhFKslZbHz-Z5UyE5rR7dbkC71B0dDXy~a~p8Q5uYEg__';
const cardsData = (data) => {
  const main = {};
  const wind = {};
  const humidity = {};
  const time = {};
  const visibility = {};
  const pressure = {};
  const location = {};
  const cloud = {};
  main.main = `${Math.round(data.main.temp)}°C`;
  main.description = `${data.weather[0].description}`;
  main.para = `${Math.round(data.main.temp_max)}°C feels like ${Math.round(data.main.feels_like)}°C`;
  main.place = data.name;
  main.img = Math.round(data.main.temp_max) > 28 ? HOT_IMG : Math.round(data.main.temp_max) < 20 ? COLD_IMG : MID_HOT_IMG;
  wind.head = 'Wind'
  wind.main = `${(data.wind.speed * 3.6).toFixed(1)} km/h`;
  wind.description = getWindCondition(data.wind.speed);
  wind.para = `${getWindDirection(data.wind.deg)} (${
    data.wind.deg
  }°) / Maximum wind gust can be ${(data.wind.gust * 3.6).toFixed(1)} km/h`;
  wind.img = WIND_IMG;
  humidity.head = "Humidity";
  humidity.main = `${data.main.humidity}%`;
  humidity.description = describeHumidity(data.main.humidity);
  const humidityPara =
    main.main >= 27 && humidity.main >= 40
      ? calculateHeatIndex(temp, humidity)
      : null;
  humidity.para = humidityPara && `Feels Like (Heat Index) ${humidityPara} - due to humidity`;
  humidity.img = HUMIDITY_IMG;
  time.head = 'Time'
  time.main = () => {
    return (
      <div className="d-flex" style={{"gridAutoFlow": "column"}}>
        <i className="bi bi-sunrise"></i><span className="px-1"> </span>
        <p><strong>sunrise :</strong> {convertToLocalTime(data.sys.sunrise, data.timezone)}</p>
      </div>
    )
  }
  time.description = () => {
    return (
      <div className="d-flex" style={{"gridAutoFlow": "column"}}>
        <i className="bi bi-sunset"></i><span className="px-1"> </span>
        <p><strong>sunrset :</strong> {convertToLocalTime(data.sys.sunset, data.timezone)}</p>
      </div>
    )
  }
  time.para = () => {
    return (
      <div className="d-flex" style={{"gridAutoFlow": "column"}}>
        <i className="bi bi-hourglass-split"></i><span className="px-1"> </span>
        <p><strong>Updated Time :</strong> {convertToLocalTime(data.dt, data.timezone)}</p>
      </div>
    )
  }
  time.img = SUN_IMG
  visibility.head = "Visibility"
  visibility.main = `${data.visibility / 1000} km`;
  visibility.description = describeVisibility(data.visibility);
  visibility.para =
    data.visibility < 1000
      ? `⚠️ Visibility is very low – Drive with headlights on and stay alert.`
      : `Good visibility – safe for driving and outdoor sports`;
  visibility.img = VISIBILITY_IMG;
  pressure.head = "Pressure"
  pressure.main = `${data.main.pressure} hPa`;
  pressure.description =  `${describePressure( data.main.pressure)}`;
  pressure.para = `Sea level ${data.main.sea_level} hPa - Ground level ${data.main.grnd_level} hPa`;
  pressure.img = PRESSURE_IMG;
  location.lon = data.coord.lon;
  location.lat = data.coord.lat;
  location.name = data.name;
  cloud.head = "Clouds"
  cloud.main = `${(data.clouds.all)} %`;
  cloud.description = describeCloud(data.clouds.all);
  cloud.para = cloudsDescription(data.clouds.all);
  cloud.img = CLOUD_IMG

  return [main, wind, humidity, visibility, pressure, location, cloud, time];
};

const conditionsData = (data) => {
  const pollenRisk = getPollenRisk(data.main.humidity, data.wind.speed);
  const running = getRunningDifficulty(data.main.feels_like, data.main.humidity);
  const driving = getDrivingDifficulty(data.visibility, data.weather[0].description);
  const Pollen = () => {
    return (
      <div className="d-flex" style={{"gridAutoFlow": "column"}}>
        <i className="bi bi-flower3"></i><span className="px-1"> </span>
        <p><strong>Pollen Risk :</strong> {pollenRisk}</p>
      </div>
    )
  }
  const RunningAbility = () => {
    return (
      <div className="d-flex" style={{"gridAutoFlow": "column"}}>
        <i className="bi bi-person-walking"></i><span className="px-1"> </span>
        <p><strong>Walking :</strong> {running}</p>
      </div>
    )
  }
  const DriningAbility = () => {
    return (
      <div className="d-flex" style={{"gridAutoFlow": "column"}}>
        <i className="bi bi-car-front-fill"></i><span className="px-1"> </span>
        <p><strong>Driving :</strong> {driving}</p>
      </div>
    )
  }
  
  return {head : "Outdoor Exposure" ,main: Pollen,description: RunningAbility, para: DriningAbility, "img" : EXPOSURE_IMG};
};

const convertToLocalTime = (unixTime, timezoneOffset) => {
  const localTime = new Date((unixTime) * 1000);
  return localTime.toLocaleTimeString('en-IN', {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const getWindCondition = (speed) => {
  if (speed < 0.3) return "🪶 Calm – Still air, barely noticeable.";
  if (speed < 1.6) return "🍃 Light air – You might feel a gentle touch.";
  if (speed < 3.4) return "🌬️ Light breeze – Leaves rustle gently.";
  if (speed < 5.5) return "🍃 Gentle breeze – A pleasant wind on your face.";
  if (speed < 8) return "🌾 Moderate breeze – You’ll notice swaying trees.";
  if (speed < 10.8)
    return "🌬️ Fresh breeze – Windy enough to lift loose paper.";
  if (speed < 13.9) return "🌬️💨 Strong breeze – Umbrellas may flip!";
  return "💨 Very strong wind – Secure loose objects!";
};

const getWindDirection = (deg) => {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round(deg / 45) % 8;
  return directions[index];
};

const describeHumidity = (humidity) => {
  if (humidity < 30)
    return `💨 Low humidity (${humidity}%) – The air feels dry.`;
  if (humidity < 50)
    return `😊 Comfortable humidity (${humidity}%) – Ideal and pleasant.`;
  if (humidity < 70)
    return `🌤️ Slightly humid (${humidity}%) – You might feel a bit sticky.`;
  if (humidity < 90)
    return `🥵 Very humid (${humidity}%) – Sweat doesn’t evaporate easily.`;
  return `🌊 Extremely humid (${humidity}%) – Feels heavy and suffocating.`;
};

const calculateHeatIndex = (tempC, humidity) => {
  const tempF = (tempC * 9) / 5 + 32; // Convert to Fahrenheit for the formula

  const HI =
    -42.379 +
    2.04901523 * tempF +
    10.14333127 * humidity -
    0.22475541 * tempF * humidity -
    0.00683783 * tempF * tempF -
    0.05481717 * humidity * humidity +
    0.00122874 * tempF * tempF * humidity +
    0.00085282 * tempF * humidity * humidity -
    0.00000199 * tempF * tempF * humidity * humidity;

  const heatIndexC = ((HI - 32) * 5) / 9; // Convert back to Celsius
  return heatIndexC.toFixed(1);
};

const describeVisibility = (visibilityMeters) => {
  const km = (visibilityMeters / 1000).toFixed(1);

  if (visibilityMeters >= 10000)
    return `🌞 Excellent visibility (${km} km) – clear skies.`;
  if (visibilityMeters >= 6000)
    return `🌤️ Good visibility (${km} km) – mostly clear.`;
  if (visibilityMeters >= 2000)
    return `🌫️ Moderate visibility (${km} km) – light haze or mist.`;
  if (visibilityMeters >= 1000)
    return `🌁 Low visibility (${km} km) – foggy conditions.`;
  return `🌫️ Very poor visibility (${km} km) – dense fog or rain.`;
};

const describePressure = (pressure) => {
  if (pressure > 1020)
    return "📈 High pressure – Usually means clear, stable weather.";
  if (pressure < 1000)
    return "📉 Low pressure – Often linked to clouds, rain, or storms.";
  return "⚖️ Normal pressure – Weather is likely stable.";
};

const describeCloud = (cloud) => {
  if (cloud < 10) return "☀️ Clear sky";
  else if (cloud < 30) return "🌤️ Mostly sunny";
  else if (cloud < 60) return "⛅ Partly cloudy";
  else if (cloud < 80) return "🌥️ Mostly cloudy";
  else return "☁️ Cloudy";
}

const cloudsDescription = (cloudPercent) => {
  if (cloudPercent < 10) return "🌞 Perfect day for outdoor sports, sightseeing, or drying clothes outside.";
  else if (cloudPercent < 30) return "🌤 Great lighting for photography or a morning walk.";
  else if (cloudPercent < 60) return "⛅ Mild sun and shade – good for outdoor work or a picnic.";
  else if (cloudPercent < 80) return "🌥 Sunlight will be limited – good for indoor tasks, but no rain expected.";
  else return "☁️ May feel gloomy – perfect time for indoor hobbies, books, or cozy cafe visits. Watch for rain if humidity is high.";
}

const getPollenRisk = (humidity, windSpeed) => {
  if (humidity > 60 && windSpeed < 10) return "Low";
  if (humidity < 40 && windSpeed > 15) return "High";
  return "Moderate";
};

const getRunningDifficulty = (feelsLike, humidity) => {
  if (feelsLike > 38 || humidity > 70) return "Difficult";
  if (feelsLike < 30 && humidity < 60) return "Comfortable";
  return "Moderate";
};

const getDrivingDifficulty = (visibility, weatherDesc) => {
  const lowVisibility = visibility < 5000;
  const riskyWeather = ["rain", "fog", "storm", "mist", "haze"];
  const risky = riskyWeather.some((w) =>
    weatherDesc.toLowerCase().includes(w)
  );

  if (lowVisibility || risky) return "Difficult";
  return "Normal";
};

export const fetchCurrentWeather = (location) => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9a267cb32e778bde0b307ec2f1456564&units=metric`, { method: "GET" })
    .then((response) => {
      if (!response.ok) throw new Error("Weather data not found");
      return response.json();
    })
    .then((data) =>  {
      return [cardsData(data),conditionsData(data)];
    })
    .catch((err) => console.log(err));
};
export const fetchData1 = (location) => {
  if(location)
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${location?.lat}&lon=${location?.lon}&appid=9a267cb32e778bde0b307ec2f1456564&units=metric`, { method: "GET" })
      .then((response) => {
        if (!response.ok) throw new Error("Weather data not found");
        return response.json();
      })
      .then((data) => data.list.filter((item) => {
        const date = item.dt_txt.split(" ");  // Extract just the date part
        if (date[1] == "12:00:00") {
          return true;  // Already seen this date
        }
      }))
      .catch((err) => console.log(err));
};

export const onlineStatus = () => {
  const online = navigator.onLine;
  return online;
}
