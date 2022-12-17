import { createCard, createCards } from "./utils.js";
const arrayCity = [
  "agrigento",
  "caltanissetta",
  "catania",
  "enna",
  "messina",
  "palermo",
  "ragusa",
  "siracusa",
  "trapani",
];

const result = document.querySelector(".result");

const arraypromises = arrayCity.map((item) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${item}&appid=e2a538f91d363404b52d0b2271da3107`
  ).then((res) => res.json());
});

Promise.all(arraypromises).then((values) => {
  console.log("promise all:", values);
  values.forEach((item) => createCards(item));
});
const btnShowAll = document.querySelector(".showAll");
btnShowAll.addEventListener("click", () => {
  result.replaceChildren();
  Promise.all(arraypromises).then((values) => {
    console.log("promise all:", values);
    values.forEach((item) => createCards(item));
  });
  select.value = "";
});

const urls = [];
for (let i = 0; i < arrayCity.length; i++) {
  let url = ` https://api.openweathermap.org/data/2.5/weather?q=${arrayCity[i]}&appid=e2a538f91d363404b52d0b2271da3107 `;
  const x = fetch(url)
    .then((res) => res.json())
    .then((res) => urls.push(res));
}

let select = document.querySelector(".city");
select.addEventListener("change", () => {
  switch (select.value) {
    case "Agrigento":
      result.replaceChildren();

      let risultato = urls.filter((obj) => {
        return obj.name.includes(select.value);
      });
      createCard(risultato);

      break;
    case "Caltanissetta":
      result.replaceChildren();
      let risultato1 = urls.filter((obj) => {
        return obj.name.includes(select.value);
      });
      createCard(risultato1);
      break;
    case "Catania":
      result.replaceChildren();
      let risultato2 = urls.filter((obj) => {
        return obj.name.includes(select.value);
      });
      createCard(risultato2);
      break;
    case "Enna":
      result.replaceChildren();
      let risultato3 = urls.filter((obj) => {
        return obj.name.includes(select.value);
      });
      createCard(risultato3);
      break;
    case "Messina":
      result.replaceChildren();
      let risultato4 = urls.filter((obj) => {
        return obj.name.includes(select.value);
      });
      createCard(risultato4);
      break;
    case "Palermo":
      result.replaceChildren();
      let risultato5 = urls.filter((obj) => {
        return obj.name.includes(select.value);
      });
      createCard(risultato5);
      break;
    case "Ragusa":
      result.replaceChildren();
      let risultato6 = urls.filter((obj) => {
        return obj.name.includes(select.value);
      });
      createCard(risultato6);
      break;
    case "Siracusa":
      result.replaceChildren();
      let risultato7 = urls.filter((obj) => {
        return obj.name.includes("Syracuse");
      });
      createCard(risultato7);
      break;
    case "Trapani":
      result.replaceChildren();
      let risultato8 = urls.filter((obj) => {
        return obj.name.includes(select.value);
      });
      createCard(risultato8);
      break;
  }
});
