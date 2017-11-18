import axios from 'axios'

const API_URL = 'http://localhost:3000/app/';
// const API_URL = 'http://47.52.150.216:3000/app/';


export default {
  get (_url, callback) {
    axios.get(API_URL + _url)
    .then(function (response) {
      callback(response.data);
    })
    .catch(function (error) {
      console.log(error)
    })
  }
}
