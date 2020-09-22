const axios = require("axios")

const generatePayLink = id => {
  var data = JSON.stringify({ id })

  var config = {
    method: "post",
    url: "https://us-central1-hairstyles-gta5.cloudfunctions.net/paypalApi",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  }

  return axios(config)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      return error
    })
}
export default generatePayLink
