import axios from 'axios'

export const getData = (url) => {
  return axios
    .get(url)
    .then((res) => res)
    .catch((error) => console.log(error))
}
