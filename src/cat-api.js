import axios from "axios";

const BASE_URL = "https://api.thecatapi.com/v1";
axios.defaults.headers.common["x-api-key"] = "live_p70F1cy4wGzn6QiBmW7PfGjOaVwrYXM8zuJYiDHJOuf8fFJSlRBaEx9FUps72bhS";

export function fetchBreeds() {
    return axios.get(`${BASE_URL}/breeds`)
        .then(response => {
            console.log(response);
    })
}

// export function fetchCatByBreed(breedId) {
    
// }