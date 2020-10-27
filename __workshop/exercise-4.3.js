const request = require("request-promise");

const getGeekJoke = async () => {
  try {
    const options = {
      uri: "https://geek-jokes.sameerkumar.website/api?format=json",
      method: "GET",
    };
    const response = await request(options);
    const parsedResponse = JSON.parse(response);
    return parsedResponse.joke;
  } catch (err) {
    return `Error: , ${err}`;
  }
};

getGeekJoke().then((data) => console.log(data));

module.exports = { getGeekJoke };
