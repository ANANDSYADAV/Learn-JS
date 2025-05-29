// Promises represents eventual completion or failure of an asynchronous
// operation
// Three states: Pending, Fulfilled or Rejected

// Goal: Create a function fetchUserData() that simulates
// fetching user data from a server. It should:
// Return a Promise.
// Resolve after 2 seconds with a mock user object.
// Reject if a random condition fails (simulate a network error).

const mockUserData = [
  {
    name: "Anand",
    age: 21,
  },
  {
    name: "Ayu",
    age: 22,
  },
];

const fetchUserData = new Promise((resolve, reject) => {
  let randomCondition = Math.random() > 0.4;
  console.log(randomCondition);

  setTimeout(() => {
    if (randomCondition) {
      resolve(mockUserData);
    } else {
      reject(new Error("Some Network Error"));
    }
  }, 2000);
});

fetchUserData
  .then((userData) => {
    console.log("UserData = ", userData);
  })
  .catch((err) => {
    // console.log('Inside catch');
    console.log(err.message);
  })
  .finally(() => {
    console.log("The promise is finally completed");
  });

// task 2: Create a function downloadFile() that:
// Returns a Promise.
// Resolves after 3 seconds with a message "File downloaded successfully!".
// Rejects randomly with "Download failed due to network issue.".

function downloadFile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let condition = Math.random() > 0.5;
      console.log(condition);
      if (condition) resolve("File Downloaded");
      else reject(new Error("Network Error"));
    }, 3000);
  });
}

downloadFile()
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err.message);
  })
  .finally(() => {
    console.log("Download request finally completed");
  });
