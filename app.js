const minSlide = document.getElementById("homeMinPrice");
const maxSlide = document.getElementById("homeMaxPrice");
const minLabel = document.getElementById("homeMinLabel");
const maxLabel = document.getElementById("homeMaxLabel");

function formatINR(val) {
  if (val >= 10000000) return '₹' + (val/10000000).toFixed(1) + ' Cr';
  if (val >= 100000) return '₹' + (val/100000).toFixed(0) + ' L';
  return '₹' + val.toLocaleString();
}

[minSlide, maxSlide].forEach(slider => {
  slider.addEventListener("input", () => {
    minLabel.innerText = formatINR(parseInt(minSlide.value));
    maxLabel.innerText = formatINR(parseInt(maxSlide.value));
  });
});

[minSlide, maxSlide].forEach(slider => slider.dispatchEvent(new Event("input")));
