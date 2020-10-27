const { getDadJoke } = require("./__workshop/exercise-4.1");
const { getTronaldDumpQuote } = require("./__workshop/exercise-4.2");
const { getGeekJoke } = require("./__workshop/exercise-4.3");

const handleJoke = async (type) => {
  const typeOfJoke = ["tronald", "dad", "geek"];
  let joke;

  switch (type) {
    case "tronald":
      joke = await getTronaldDumpQuote();
      break;
    case "dad":
      joke = await getDadJoke();
      break;
    case "geek":
      joke = await getGeekJoke();
      break;
    default:
      throw "Invalid type.";
  }
  return joke;
};

module.exports = { handleJoke };
