import SlimSelect from 'slim-select';
import "slim-select/dist/SlimSelect.css";
import { fetchBreeds } from "./cat-api.js";

const refs = {
selectEl: document.querySelector(".breed-select"),
};

fetchBreeds()
    .then((data) => {
        (refs.selectEl.insertAdjacentHTML("beforeend", createMarcupListBreedId(data)));

    new SlimSelect({
    select: refs.selectEl
    });
    })
    .catch((error) => console.log(error));


function createMarcupListBreedId(arr) {
    return arr.map(({ id, name }) => 
        `<option value="${id}">${name}</option>`
    ).join("");
}
 
// fetchBreeds()
//     .then((breeds) => {
//         const breedItem = breeds.map(({ id, name }) => 
//         `<option value="${id}">${name}</option>`
//     ).join("");
//         (refs.selectEl.insertAdjacentHTML("beforeend", breedItem));

//    new SlimSelect({
//     select: refs.selectEl
//     });
//     })
//     .catch(error => console.error(error));



// selectEl.addEventListener("select", fetchCatByBreed);