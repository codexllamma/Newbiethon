/*
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".clickable-image");

  images.forEach(image => {
      image.addEventListener("click", function () {
          console.log("Image clicked:", this.dataset.dataset); // Debugging
          alert(`You clicked on ${this.dataset.dataset}`);
      });
  });
});

*/

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".clickable-image");
  const dataDisplay = document.getElementById("data-display");

  images.forEach(image => {
      image.addEventListener("click", async function() {
          const datasetName = this.dataset.dataset;

          try {
              // Fetch dataset from the backend (assuming you have an API endpoint)
              const response = await fetch(`http://localhost:3000/getData?dataset=${datasetName}`);
              const data = await response.json();

              // Display data
              dataDisplay.innerHTML = ` <h2>${data.title}</h2>
                    <p>${data.description}</p>
                    <div>
                        ${data.images.map(img => `<img src="${img}" alt="${data.title}" style="width:300px; margin:10px;">`).join('')}
                    </div>
                    
                    <!-- Map container -->
                    <div class="map-container">
                        <img src="${this.dataset.dataset}" alt="Map" class="map-image">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Red_pog.svg" alt="Pin" class="pin" id="map-pin">
                    </div>
                    `
                    ;

              dataDisplay.scrollIntoView({ behavior: "smooth", block: "start" });
          } catch (error) {
              console.error("Error fetching data:", error);
              dataDisplay.innerHTML = `<p style="color: red;">Failed to load data.</p>`;
          }
      });
  });
});
