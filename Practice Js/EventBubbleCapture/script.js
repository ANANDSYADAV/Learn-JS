let parent = document.getElementById("Parent");
let child = document.getElementById("Child");

// bubbling
parent.addEventListener("click", () => {
  console.log("bubbling parent");
});

// capturing
parent.addEventListener(
  "click",
  () => 
    console.log("capturing parent");
  },
  true
);

child.addEventListener("click", () => {
  console.log("child clicked");
});
