const sidebar = document.getElementById("omo");
const openBtn = document.getElementById("openToggle");
const closeBtn = document.getElementById("closeToggle");

// Open sidebar
openBtn.addEventListener("click", () => {
  sidebar.style.display = "flex";
});

// Close sidebar
closeBtn.addEventListener("click", () => {
  sidebar.style.display = "none";
});
