// let searchInput = document.getElementById("search-input");

// searchInput.addEventListener("input", (e) => {
//   debounceOptimisedSearch(e.target.value);
// });

// const SearchForInput = (input) => {
//   if (input) {
//     console.log("Searching for query", input);
//   } else console.log("No input provided");
// };

// let timer;
// const debounceOptimisedSearch = (input) => {
//   clearTimeout(timer);
//   timer = setTimeout(() => {
//     SearchForInput(input);
//   }, 1000);
// };

// document.getElementById("searchBtn").addEventListener("click", () => {
//   console.log("Finally searching for", searchInput.value);
// });

// // debouncing
// const debouncing = (method, delay) => {
//   let timeout;
//   return (...args) => {
//     clearTimout(timeout);
//     timeout = setTimeout(() => method(args), delay);
//   }
// }


// // throttling
// const throttling = (method, limit) => {
//   let lastCall;
//   return (...args) => {
//     let now = new Date.now();
//     if(now - lastCall >= limit) {
//       lastCall = now;
//       method(args);
//     }
//   }
// }

