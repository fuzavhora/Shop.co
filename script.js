<<<<<<< HEAD
const minPrice = document.getElementById("min-price");
const maxPrice = document.getElementById("max-price");
const minLabel = document.getElementById("min-label");
const maxLabel = document.getElementById("max-label");

function updateLabels() {
  const minValue = parseInt(minPrice.value);
  const maxValue = parseInt(maxPrice.value);

  if (minValue >= maxValue) {
    minPrice.value = maxValue - 10;
  }

  minLabel.textContent = `$${minPrice.value}`;
  maxLabel.textContent = `$${maxPrice.value}`;
}

minPrice.addEventListener("input", updateLabels);
maxPrice.addEventListener("input", updateLabels);
=======
const minPrice = document.getElementById("min-price");
const maxPrice = document.getElementById("max-price");
const minLabel = document.getElementById("min-label");
const maxLabel = document.getElementById("max-label");

function updateLabels() {
  const minValue = parseInt(minPrice.value);
  const maxValue = parseInt(maxPrice.value);

  if (minValue >= maxValue) {
    minPrice.value = maxValue - 10;
  }

  minLabel.textContent = `$${minPrice.value}`;
  maxLabel.textContent = `$${maxPrice.value}`;
}

minPrice.addEventListener("input", updateLabels);
maxPrice.addEventListener("input", updateLabels);
>>>>>>> abc567d9c5d28080d713b8df88006b7e9a6a9986
