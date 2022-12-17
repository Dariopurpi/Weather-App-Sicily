//create card
const createCard = (data) => {
  for (let i = 0; i <= 9; i++) {
    const wrapper = document.querySelector(".result");
    const card = document.createElement("div");
    let title = document.createElement("h2");
    const titleGrades = document.createElement("div");
    const minmax = document.createElement("div");
    const grades = document.createElement("p");
    const minGrades = document.createElement("p");
    const maxGrades = document.createElement("p");
    const speedVal = document.createElement("p");
    card.className = "cardSingle";
    title.className = "title";
    titleGrades.className = "titleGrades";
    grades.className = "grades";
    minmax.className = "minmax";
    speedVal.className = "speedVal";
    //-----------------
    title.innerHTML = data[i].name;
    grades.innerHTML =
      "Temp. " + parseFloat(data[i].main.temp - 273.15).toFixed(1) + "°";
    minGrades.innerHTML =
      "Temp.min " + parseFloat(data[i].main.temp_min - 273.15).toFixed(1) + "°";
    maxGrades.innerHTML =
      "Temp.max " + parseFloat(data[i].main.temp_max - 273.15).toFixed(1) + "°";
    speedVal.innerHTML = "Speed wind " + data[i].wind.speed;
    if (title.textContent == "Province of Agrigento") {
      card.style = `background-image:url("./png/imm1.png")`;
    }
    if (title.textContent == "Catania") {
      card.style = `background-image:url("./png/catania.webp")`;
    }

    if (title.textContent == "Enna") {
      card.style = `background-image:url("./png/enna.jpg")`;
    }
    if (title.textContent == "Syracuse") {
      card.style = `background-image:url("./png/siracusa.jpg")`;
    }
    if (title.textContent == "Province of Trapani") {
      card.style = `background-image:url("./png/trapani.jpg")`;
    }
    if (title.textContent == "Messina") {
      card.style = `background-image:url("./png/messina.jpg")`;
    }
    if (title.textContent == "Province of Ragusa") {
      card.style = `background-image:url("./png/ragusa.webp")`;
    }
    if (title.textContent == "Province of Caltanissetta") {
      card.style = `background-image:url("./png/caltanissetta.webp")`;
    }
    if (title.textContent == "Province of Palermo") {
      card.style = `background-image:url("./png/palermo-1.webp")`;
    }
    //----------------
    minmax.append(minGrades, maxGrades);
    titleGrades.append(title, grades);
    card.append(titleGrades, minmax, speedVal);
    wrapper.append(card);
  }
};

const createCards = (data) => {
  const wrapper = document.querySelector(".result");
  const card = document.createElement("div");
  let title = document.createElement("h2");
  const titleGrades = document.createElement("div");
  const minmax = document.createElement("div");
  const grades = document.createElement("p");
  const minGrades = document.createElement("p");
  const maxGrades = document.createElement("p");
  const speedVal = document.createElement("p");
  card.className = "card";
  title.className = "title";
  titleGrades.className = "titleGrades";
  grades.className = "grades";
  minmax.className = "minmax";
  speedVal.className = "speedVal";
  //-----------------
  title.innerHTML = data.name;
  grades.innerHTML =
    "Temp. " + parseFloat(data.main.temp - 273.15).toFixed(1) + "°";
  minGrades.innerHTML =
    "Temp.min " + parseFloat(data.main.temp_min - 273.15).toFixed(1) + "°";
  maxGrades.innerHTML =
    "Temp.max " + parseFloat(data.main.temp_max - 273.15).toFixed(1) + "°";
  speedVal.innerHTML = "Speed wind " + data.wind.speed;
  console.dir(title);
  if (title.textContent == "Province of Agrigento") {
    card.style = `background-image:url("./png/imm1.png")`;
  }
  if (title.textContent == "Catania") {
    card.style = `background-image:url("./png/catania.webp")`;
  }

  if (title.textContent == "Enna") {
    card.style = `background-image:url("./png/enna.jpg")`;
  }
  if (title.textContent == "Syracuse") {
    card.style = `background-image:url("./png/siracusa.jpg")`;
  }
  if (title.textContent == "Province of Trapani") {
    card.style = `background-image:url("./png/trapani.jpg")`;
  }
  if (title.textContent == "Messina") {
    card.style = `background-image:url("./png/messina.jpg")`;
  }
  if (title.textContent == "Province of Ragusa") {
    card.style = `background-image:url("./png/ragusa.webp")`;
  }
  if (title.textContent == "Province of Caltanissetta") {
    card.style = `background-image:url("./png/caltanissetta.webp")`;
  }
  if (title.textContent == "Province of Palermo") {
    card.style = `background-image:url("./png/palermo-1.webp")`;
  }
  //----------------
  minmax.append(minGrades, maxGrades);
  titleGrades.append(title, grades);
  card.append(titleGrades, minmax, speedVal);
  wrapper.append(card);
};
export { createCard, createCards };
