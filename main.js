let fligthChosen = document.querySelector("form");
let result = document.querySelector(".flights");
let classpragraph = document.querySelector("#classType");

let classType;
console.log(result);
const regExpDay = new RegExp(/\w+-\w+-\w+/);
const regExpTime = new RegExp(/\w+:\w+/);
const req = new XMLHttpRequest();
req.open("GET", "../Home-After/a.json");
req.send();

// Relaoding Section
// document.body.style.overflow = "hidden";
// const relaod = setTimeout(() => {
//   document.querySelector(".reload").style.display = "none";
//   document.body.style.overflow = "auto";
// }, 1500);

req.onreadystatechange = function () {
  if (this.readyState === 4) {
    let data = JSON.parse(this.responseText);
    let flights_num = document.querySelector("#num");
    flights_num.innerText = data.length;
    flightInfoInPage(data[0]);
    console.log(data[0]);
    flightInfoInPage(data[0]);
    data.forEach((element, i) => {
    console.log(classpragraph.innerHTML)
      insertFlight(element, i ,  classpragraph.innerHTML)

    });
    let booking_bottons = document.querySelectorAll(".price_cont a");
    console.log(booking_bottons);
    booking_bottons.forEach((e) => {
      console.log(+e.getAttribute("id"))

      e.addEventListener("click", () => {
        
        e.parentElement;
        window.sessionStorage.setItem(
          "flight",
          JSON.stringify(data[+e.getAttribute("id")])
        );
      });
    });
  }
};
console.log(fligthChosen);

function flightInfoInPage(data) {
  let departureCity = fligthChosen.querySelector("#go_city");
  classpragraph.innerHTML = localStorage.getItem("Class Type");
    (departureCity.value = `${data["departureCity"]}(${data["departureCountry"]})`)
  let arrivalCityDepartureLeg = fligthChosen.querySelector("#return_city");
  arrivalCityDepartureLeg.value = `${data["arrivalCityDepartureLeg"]}(${data["arrivalCountryDepartureLeg"]})  `;
  let departureTimeDepartureLeg = fligthChosen.querySelector("#departure");
  departureTimeDepartureLeg.value =
    data["departureTimeDepartureLeg"].match(regExpDay);
  let departureTimeReturnLeg = fligthChosen.querySelector("#return");
  departureTimeReturnLeg.value =
    data["departureTimeReturnLeg"].match(regExpDay);
}
function insertFlight(flight, i , classType) {
  result.innerHTML += `
    <div class="flight">
      <div class="go">
        <div class="title">
          <img src="/Flight Search/plan.svg" alt="" srcset="" />
          <p>Departure Flight</p>
        </div>
        <div class="departure_time">
          <p>${flight["departureTimeDepartureLeg"].match(regExpDay)}</p>
          <p>${classType}</p>
        </div>

        <div class="flight_det">
          <p class="go_city">
            ${flight["departureCity"]} <span>${
    flight["departureCountry"]
  }</span>
          </p>
          <img src="/Flight Search/plan_to.svg" alt="" />
          <p class="return_city">
            ${flight["arrivalCityDepartureLeg"]} <span>${
    flight["arrivalCountryDepartureLeg"]
  }
          </p>
        </div>
        <div class="duration">
          <p class="duration_time">
            ${flight["departureTimeDepartureLeg"].match(regExpTime)}--</i>
          </p>
          <p class="total_duration">
          ${Number.isInteger(+flight["durationDepartureLeg"] / 60) ?`${+flight["durationDepartureLeg"] / 60}H`: `${Math.trunc(+flight["durationDepartureLeg"] / 60)}H ${+flight["durationDepartureLeg"]% 60}M `}<span style="color:#fff">--</span>
          </p>
          <p class="duration_time"> ${flight["arrivalTimeDepartureLeg"].match(
            regExpTime
          )}</p>
        </div>
      </div>
      <div class="go return">
        <div class="title">
          <img src="/Flight Search/plan.svg" alt="" srcset="" />
          <p>Arrival Flight</p>
        </div>
        <div class="departure_time">
          <p>${flight["departureTimeReturnLeg"].match(regExpDay)}</p>
          <p>${classType}</p>
        </div>

        <div class="flight_det">
          <p class="go_city">
          ${flight["arrivalCityDepartureLeg"]} <span>${
    flight["arrivalCountryDepartureLeg"]
  }
          </p>
          <img src="/Flight Search/plan_to.svg" alt="" />
          <p class="return_city">
                      ${flight["arrivalCityReturnLeg"]} <span>${
    flight["arrivalCountryReturnLeg"]
  }
          </p>
        </div>
        <div class="duration">
          <p class="duration_time">
                      <p class="duration_time"> ${flight[
                        "arrivalTimeDepartureLeg"
                      ].match(regExpTime)}--</p>
          </p>
          <p class="total_duration">
          ${Number.isInteger(+flight["durationReturnLeg"] / 60) ?`${+flight["durationReturnLeg"] / 60}H`: `${+flight["durationReturnLeg"] / 60}H ${+flight["durationReturnLeg"]% 60}M `}<span style="color:#fff">--</span>
          </p>
          <p class="duration_time">${flight["departureTimeReturnLeg"].match(
            regExpTime
          )}</p>
        </div>
      </div>
      <div class="price_cont">
        <p>
          Total Price: <span id="price">$${
            +flight[`${classType}_priceDepartureLeg`] +
            +flight[`${classType}_priceReturnLeg`]
          }</span>
        </p>
        <a href="../booking/index.php" id ="${i}">Book Flight</a>
      </div>
    </div>
  `;
  console.log(`${classType}_priceDepartureLeg`)
}
