import axios from "axios"

export const getData = () => {
  let url = "https://pokeapi.co/api/v2/pokemon?limit=151"
  return axios
  .get(url)
  .then((res) => res.data.results)
  .catch((error) => console.log(error))
}
