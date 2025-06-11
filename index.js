let lat = document.getElementById("lat");
let lon = document.getElementById("lon");
let search = document.getElementById("search");
let aqivalue = document.getElementById("aqi-value");
let aqiquality = document.getElementById("aqi-quality");
let cm = document.getElementById("cm");
let nm = document.getElementById("nm");
let nd = document.getElementById("nd");
let o = document.getElementById("o");
let sd = document.getElementById("sd");
let fpm = document.getElementById("fpm");
let cpm = document.getElementById("cpm");
let amm = document.getElementById("amm");
let resultContainer = document.getElementById("resultContainer");
let h3 = document.getElementById("h3");
let bg = document.getElementById("bg");

function getResult() {
  h3.classList.add("d-block");
  resultContainer.classList.add("d-none");
  bg.classList.add("bg-float");
  if (lat.value === "" || lon.value === "") {
    alert("Enter Input...");
    return;
  } else {
    let latitude = lat.value;
    let longitude = lon.value;
    let url = `https://api.openweathermap.org/data/2.5/air_pollution/history?lat=${latitude}&lon=${longitude}&start=1606223802&end=1606482999&appid=d8ff55d5ebb2aaf1901fb2153e39c50e&city=kanpur`;
    let options = {
      method: "GET",
    };
    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        setTimeout(function () {
          h3.classList.remove("d-block");
          resultContainer.classList.remove("d-none");
          bg.classList.remove("bg-float");
          aqivalue.textContent = jsonData.list[0].main.aqi;
          aqivalue.classList.add("quality");
          cm.textContent = jsonData.list[0].components.co;
          cm.classList.add("quality");
          nm.textContent = jsonData.list[0].components.no;
          nm.classList.add("quality");
          nd.textContent = jsonData.list[0].components.no2;
          nd.classList.add("quality");
          o.textContent = jsonData.list[0].components.o3;
          o.classList.add("quality");
          sd.textContent = jsonData.list[0].components.so2;
          sd.classList.add("quality");
          fpm.textContent = jsonData.list[0].components.pm2_5;
          fpm.classList.add("quality");
          cpm.textContent = jsonData.list[0].components.pm10;
          cpm.classList.add("quality");
          amm.textContent = jsonData.list[0].components.nh3;
          amm.classList.add("quality");
          if (aqivalue.textContent === "1") {
            aqiquality.textContent = "Good";
            aqiquality.classList.add("quality");
          } else if (aqivalue.textContent === "2") {
            aqiquality.textContent = "Fair";
            aqiquality.classList.add("quality");
          } else if (aqivalue.textContent === "3") {
            aqiquality.textContent = "Moderate";
            aqiquality.classList.add("quality");
          } else if (aqivalue.textContent === "4") {
            aqiquality.textContent = "Poor";
            aqiquality.classList.add("quality");
          } else if (aqivalue.textContent === "5") {
            aqiquality.textContent = "Very Poor";
            aqiquality.classList.add("quality");
          }
        }, 6000);
      });
  }
}
search.addEventListener("click", getResult);
