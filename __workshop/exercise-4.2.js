const request = require("request-promise");

const getTronaldDumpQuote = async () => {
  try {
    const options = {
      uri: "https://api.tronalddump.io/random/quote",
      headers: { Accept: "application/json" },
    };

    const response = await request(options);
    const parsedResponse = JSON.parse(response);
    return parsedResponse.value;
  } catch (err) {
    return `Error: , ${err}`;
  }
};

getTronaldDumpQuote().then((data) => console.log(data));

module.exports = { getTronaldDumpQuote };
