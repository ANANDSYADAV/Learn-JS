// Promise.resolve()
async function giveResponse() {
  const res = await Promise.resolve("Some response 2");
  console.log(res);
}
giveResponse();

// Promise.reject()
async function giveReject() {
  try {
    await Promise.reject(new Error("Some Error"));
  } catch (err) {
    console.log(err.message);
  }
}
giveReject();

// Promise.any()
// Returns the first fulfilled promise.
// Ignores rejections unless all reject.
const promise1 = Promise.reject(new Error("Some Error"));
const promise2 = new Promise((resolve) =>
  setTimeout(resolve, 2000, "Success p2")
);
const promise3 = Promise.reject(new Error("Error again"));
const promise4 = new Promise((resolve) =>
  setTimeout(resolve, 3000, "Success 4")
);

Promise.any([promise1, promise2, promise3, promise4])
  .then((result) => {
    console.log("First fulfilled: ", result);
  })
  .catch((err) => {
    console.log(err.message);
  });

// Promise.all()
// Waits for all to resolve
// If all resolve, it returns an array of results.
// If any reject, it immediately rejects with the first error.
Promise.all([promise1, promise2, promise3, promise4])
  .then((result) => {
    console.log("All Resolved", result);
  })
  .catch((err) => {
    console.log(err.message);
  });

// Promise.allSettled()
// Waits for all to settle (resolve or reject).
// Returns an array of result objects with status and value or reason.
Promise.allSettled([promise1, promise2, promise3, promise4]).then((result) => {
  console.log("All Settled", result);
});

// Promise.race()
// Returns the result of the first settled promise (resolve or reject).
Promise.race([promise1, promise2, promise3, promise4])
  .then((result) => {
    console.log("First fullfilled", result);
  })
  .catch((err) => {
    console.log("First rejected", err.message);
  });
