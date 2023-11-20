import SlimSelect from 'slim-select';

new SlimSelect({
    select: '#single'
});

import { fetchBreeds } from "./cat-api";

const selectEl = document.querySelector("select.breed-select");

selectEl.addEventListener("select", onSelect); // ??? на подію select?

function onSelect() {

    fetchBreeds()
    .then((data) => (selectEl.insertAdjacentHTML("beforeend", createMarcupListBreedId(data))))
    .catch((error) => console.log(error));
}



function createMarcupListBreedId(arr) {
    return arr.map((id, name) => {
        `<option value="${id}">${name}</option>
    `
    }).join("");
}

// <select id="single">
//   <option value="value 1">Value 1</option>
//   <option value="value 2">Value 2</option>
//   <option value="value 3">Value 3</option>
// </select>