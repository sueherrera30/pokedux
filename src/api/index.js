import axios from "axios"

export const getData = () => {
  let url = "https://pokeapi.co/api/v2/ability/?limit=150"
  return axios
  .get(url)
  .then((res) => res.data.results)
  .catch((error) => console.log(error))
}
