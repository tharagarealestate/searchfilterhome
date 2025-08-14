const minSlider = document.getElementById('minPrice');
const maxSlider = document.getElementById('maxPrice');
const minPriceValue = document.getElementById('minPriceValue');
const maxPriceValue = document.getElementById('maxPriceValue');

function formatPrice(value) {
  if (value >= 10000000) return '₹' + (value / 10000000).toFixed(1) + ' Cr';
  if (value >= 100000) return '₹' + (value / 100000).toFixed(1) + ' L';
  return '₹' + value.toLocaleString();
}

function updatePriceValues() {
  minPriceValue.textContent = formatPrice(parseInt(minSlider.value));
  maxPriceValue.textContent = formatPrice(parseInt(maxSlider.value));
}

minSlider.addEventListener('input', updatePriceValues);
maxSlider.addEventListener('input', updatePriceValues);

updatePriceValues();
