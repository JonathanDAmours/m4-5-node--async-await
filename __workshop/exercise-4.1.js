const request = require("request-promise");

// getDadJoke
const getDadJoke = async () => {
  try {
    const options = {
      uri: "https://icanhazdadjoke.com/",
      headers: { Accept: "application/json" },
    };

    const response = await request(options);
    const parsedResponse = JSON.parse(response);
    return parsedResponse.joke;
  } catch (err) {
    return `Error: , ${err}`;
  }
};

// 4.1

getDadJoke().then((data) => console.log(data));

module.exports = { getDadJoke };
