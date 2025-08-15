function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return Object.fromEntries(params.entries());
}

async function init(){
  const params = getQueryParams();
  
  const data = await App.fetchSheetOrLocal();
  ALL = data.properties || [];

  // Apply homepage filter defaults
  if (params.q) document.querySelector('#q').value = params.q;
  if (params.city) {
    const citySelect = document.querySelector('#city');
    [...citySelect.options].forEach(o => {
      if (o.value === params.city) o.selected = true;
    });
  }
  if (params.minPrice) document.querySelector('#minPrice').value = params.minPrice;
  if (params.maxPrice) document.querySelector('#maxPrice').value = params.maxPrice;

  hydrateCityOptions();
  hydrateLocalityOptions([]);
  apply();
}
