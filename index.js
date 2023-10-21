import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 42;
let page = 1;
let searchQuery = "";

let url = `https://rickandmortyapi.com/api/character/?page=${page}`;

async function fetchCharacters() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      data.results.map((character) => createCharacterCard(character));
    } else {
      console.log("Rick & Morty had a bad response!");
    }
  } catch (error) {
    console.error("Hey Rick, Hey Morty, there's an error.", error);
  }
}

fetchCharacters();

nextButton.addEventListener("click", () => {
  console.log("blah");
  if (page === maxPage) {
    return;
  } else {
    page++;
  }
  url = `https://rickandmortyapi.com/api/character/?page=${page}`;
  console.log(url);
  cardContainer.innerHTML = "";
  pagination.textContent = `${page} / 42`;
  fetchCharacters();
});

prevButton.addEventListener("click", () => {
  if (page === 1) {
    return;
  } else {
    page--;
  }
  url = `https://rickandmortyapi.com/api/character/?page=${page}`;
  console.log(url);
  cardContainer.innerHTML = "";
  pagination.textContent = `${page} / 42`;
  fetchCharacters();
});
