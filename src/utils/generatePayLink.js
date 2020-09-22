const axios = require("axios")

const generatePayLink = id => {
  var data = JSON.stringify({ id })

  var config = {
    method: "post",
    url: "https://us-central1-hairstyles-gta5.cloudfunctions.net/paypalApi",
<<<<<<< HEAD
=======
    // url: "http://localhost:5001/hairstyles-gta5/us-central1/paypalApi",
>>>>>>> 7f23e4f984630e23292383c7f6d10974f0f73d75
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
