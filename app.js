<script>
  // Change this if your route differs
  const LISTINGS_URL = "/verified-property-listings";

  const cityEl   = document.getElementById("homeCity");
  const qEl      = document.getElementById("homeQ");
  const btnEl    = document.getElementById("homeSearchBtn");

  function go(){
    const city = cityEl.value.trim();
    const q    = qEl.value.trim();

    const params = new URLSearchParams();
    if (city) params.set("city", city);
    if (q)    params.set("q", q);

    // Navigate to listings with prefilled filters
    window.location.href = `${LISTINGS_URL}?${params.toString()}`;
  }

  btnEl.addEventListener("click", go);
  qEl.addEventListener("keydown", e => { if(e.key === "Enter") go(); });
  cityEl.addEventListener("keydown", e => { if(e.key === "Enter") go(); });
</script>
