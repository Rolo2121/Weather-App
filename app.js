window.addEventListener('load', () => {
	let long;
	let lat;

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			long = position.coords.longitude;
			lat = position.coords.latitude;

			const api = `http://api.weatherapi.com/v1/current.json/2e9b5d9643334a3fb7f212534232202/${long},${lat}`;

			fetch(api)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					console.log(data);
				});
		});
	} else {
		h1.textContent = 'Location not available.';
	}
});
