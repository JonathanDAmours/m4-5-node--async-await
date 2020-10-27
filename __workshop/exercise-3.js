// Exercise 3
// ----------

const doublesLater = (num) => {
  return new Promise((resolve) => {
    console.log("Waiting 2 seconds...");
    setTimeout(() => {
      resolve(num * 2);
    }, 2000);
  });
};

const handleSum = async (num) => {
  let theSum = num;
  try {
    theSum = await doublesLater(theSum);
    theSum = await doublesLater(theSum);
    theSum = await doublesLater(theSum);
    return theSum;
  } catch {
    console.log("Error");
  }
};

// Verification
handleSum(10).then((ans) => console.log(ans));
