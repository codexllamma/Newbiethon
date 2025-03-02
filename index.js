

document.getElementById('getstartedbutton').addEventListener("click", (event) => {
  //event.preventDefault(); // Prevents immediate navigation
  window.location.href = "homepage.html";
  
  
  let ul = document.getElementById("nav-bar"); // Get UL element
  ul.classList.add("fade-out"); // Add fade-out class

  setTimeout(() => {
       ul.style.display = "none"; // Hide UL after animation
  }, 500);// Matches animation duration

  
});
