let container = document.getElementsByClassName("card-container")[0];

document.addEventListener("scroll", () => {
  console.log("scrolling happened");
  throttleReelFetch();
});

const fetchNewReels = () => {
  let fetchedReels = [];
  for (let i = 0; i < 18; i++) {
    fetchedReels.push(Math.floor(Math.random() * 100));
  }
  let div = document.createElement("div");
  div.style.height = "230px";
  div.style.display = "flex";
  div.style.flexWrap = "wrap";
  div.style.backgroundColor = "pink";
  fetchedReels.forEach((data) => {
    let span = document.createElement("span");
    span.textContent = data;
    div.appendChild(span);
  });
  container.appendChild(div);
};

let timer;
const throttleReelFetch = () => {
  if (!timer) {
    timer = setTimeout(() => {
      timer = null;
    }, 1000);
    fetchNewReels();
  } else return;
};
