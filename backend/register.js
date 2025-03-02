document.getElementById("registerForm").addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent form from refreshing

  // Get input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
      const response = await fetch("http://localhost:5000/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
          credentials: "include" // Important for session handling!
      });
      
      const data = await response.json();

      if (response.ok) {
          document.getElementById("message").innerText = "User registered successfully!";
          setTimeout(() => {
              window.location.href = "login.html"; // Redirect to login page
          }, 1000);
      } else {
          document.getElementById("message").innerText = data.error || "Registration failed!";
      }
  } catch (error) {
      document.getElementById("message").innerText = "An error occurred!";
  }
});
