<script>
document.addEventListener("DOMContentLoaded", () => {
  const minSlider = document.getElementById("hpMinSlider");
  const maxSlider = document.getElementById("hpMaxSlider");
  const minValue = document.getElementById("hpMinValue");
  const maxValue = document.getElementById("hpMaxValue");
  const minHidden = document.getElementById("hpMinPrice");
  const maxHidden = document.getElementById("hpMaxPrice");
  const rangeProgress = document.querySelector(".range-progress");

  const sliderMax = 20000000;
  minSlider.min = 0;
  minSlider.max = sliderMax;
  maxSlider.min = 0;
  maxSlider.max = sliderMax;
  minSlider.value = 0;
  maxSlider.value = sliderMax;

  const formatPrice = (val) => {
    if (val >= 10000000) return "₹" + (val / 10000000) + "Cr";
    if (val >= 100000) return "₹" + (val / 100000) + "L";
    return "₹" + val.toLocaleString("en-IN");
  };

  function updateSlider() {
    let minVal = parseInt(minSlider.value);
    let maxVal = parseInt(maxSlider.value);
    if (minVal > maxVal) [minVal, maxVal] = [maxVal, minVal];

    minValue.textContent = formatPrice(minVal);
    maxValue.textContent = formatPrice(maxVal);
    minHidden.value = minVal;
    maxHidden.value = maxVal;

    const percent1 = (minVal / sliderMax) * 100;
    const percent2 = (maxVal / sliderMax) * 100;
    rangeProgress.style.left = percent1 + "%";
    rangeProgress.style.right = (100 - percent2) + "%";
  }

  minSlider.addEventListener("input", updateSlider);
  maxSlider.addEventListener("input", updateSlider);
  updateSlider();
});
</script>
