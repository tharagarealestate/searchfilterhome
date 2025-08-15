document.getElementById("searchBtn").addEventListener("click", function () {
  const city = document.getElementById("city").value;
  const search = document.getElementById("search").value.trim();

  // Build query string
  const params = new URLSearchParams();
  if (city) params.append("city", city);
  if (search) params.append("q", search);

  // Redirect to listings page with filters
  window.location.href = `/verified-property-listings?${params.toString()}`;
});
