<script>
document.addEventListener("DOMContentLoaded", () => {
  const minInput = document.getElementById("hpPriceMinSlider");
  const maxInput = document.getElementById("hpPriceMaxSlider");
  const minVal = document.getElementById("hpMinPriceValue");
  const maxVal = document.getElementById("hpMaxPriceValue");
  const hiddenMin = document.getElementById("hpMinPrice");
  const hiddenMax = document.getElementById("hpMaxPrice");

  minInput.min = 0;
  maxInput.min = 0;
  minInput.max = 20000000;
  maxInput.max = 20000000;
  minInput.value = 0;
  maxInput.value = 20000000;

  const formatPrice = (value) => {
    if (value >= 10000000) return "₹" + (value / 10000000) + "Cr";
    if (value >= 100000) return "₹" + (value / 100000) + "L";
    return "₹" + value.toLocaleString("en-IN");
  };

  function updateSlider() {
    const minValNum = parseInt(minInput.value);
    const maxValNum = parseInt(maxInput.value);
    if (minValNum > maxValNum) {
      [minInput.value, maxInput.value] = [maxValNum, minValNum];
    }
    minVal.textContent = formatPrice(minInput.value);
    maxVal.textContent = formatPrice(maxInput.value);
    hiddenMin.value = minInput.value;
    hiddenMax.value = maxInput.value;
  }

  minInput.addEventListener("input", updateSlider);
  maxInput.addEventListener("input", updateSlider);
  updateSlider();
});
</script>
