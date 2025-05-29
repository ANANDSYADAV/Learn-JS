// task 1
const handleDownload = () => {
  return new Promise((resolve, reject) => {
    let condition = Math.random() > 0.5;
    console.log(condition);

    return setTimeout(() => {
      if (condition) resolve("File downloaded");
      else reject(new Error("Network error"));
    }, 3000);
  });
};

const downloadFile = async () => {
  try {
    const msg = await handleDownload();
    console.log(msg);
  } catch (err) {
    console.log(err);
  }
};

downloadFile();

// Task 2
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let condition = Math.random() > 0.2;
      if (condition) resolve("User fetched");
      else reject(new Error("Error fetching user"));
    }, 1000);
  });
}

function downloadFile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let condition = Math.random() > 0.9;
      if (condition) resolve("File downloaded");
      else reject(new Error("Error downloading file"));
    }, 2000);
  });
}

const asyncMethod = async () => {
  try {
    const user = fetchUserData();
    const file = downloadFile();
    const res1 = await user;
    const res2 = await file;
    if (res1 && res2) {
      console.log(`${res1} and ${res2}`);
    }
  } catch (err) {
    console.log(err.message);
  }
};

asyncMethod();
