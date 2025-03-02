

document.getElementById('new-link').addEventListener("click", (event) => {
  //event.preventDefault(); // Prevents immediate navigation

  let btn = document.getElementById('new-link'); // Get the element
  btn.classList.add("move-left"); // Add animation class

  setTimeout(() => {
      btn.style.display = "none";
      ul.style.display = "none";
      window.location.href = "newpage.html"; // Hides element after animation
  }, 500);
  
  
  let ul = document.getElementById("nav-bar"); // Get UL element
  ul.classList.add("fade-out"); // Add fade-out class

  setTimeout(() => {
       ul.style.display = "none"; // Hide UL after animation
  }, 500);// Matches animation duration

  
});
