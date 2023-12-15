/**
 * Provides a promise that resolves after the given delay
 * @param (number) ms - Delay in milliseconds
 * @return (Promise<void>) A promise that will be resolved after delay
 */

const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;

      if (!error) {
        resolve("message");
      }
    }, ms);
  });
};

// test
delay(1000).then(() => console.log("displayed second"));
delay(500).then(() => console.log("displayed first"));
