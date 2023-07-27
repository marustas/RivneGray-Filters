const priceSlider1 = document.getElementById("slider1");
const priceSlider2 = document.getElementById("slider2");
const minValue = document.getElementById("minValue");
const maxValue = document.getElementById("maxValue");

priceSlider1.addEventListener("input", updatePriceRange);
priceSlider2.addEventListener("input", updatePriceRange);

function updatePriceRange() {
    minValue.textContent = priceSlider1.value;
    maxValue.textContent = priceSlider2.value;
}