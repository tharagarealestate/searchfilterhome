const params = new URLSearchParams(window.location.search);

if (params.get('city')) document.querySelector('#city').value = params.get('city');
if (params.get('ptype')) document.querySelector('#ptype').value = params.get('ptype');
if (params.get('minPrice')) document.querySelector('#minPrice').value = params.get('minPrice');
if (params.get('maxPrice')) document.querySelector('#maxPrice').value = params.get('maxPrice');

apply();
