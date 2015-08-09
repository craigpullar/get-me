if(Meteor.isClient) {
	Template.simpleWeather.rendered= function(){
		var geooptions = {
			enableHighAccuracy: true,
			timeout: 60000,
			maximumAge: 0
		};

		function success(pos) {
			var lat = pos.coords.latitude;
			var lng = pos.coords.longitude;
			var options = {
				location: lat + ',' + lng,
				unit: 'c',
				success: function(weather) {
					html = '<h1><i class="sw icon-'+weather.code+'"></i> '
					html += weather.temp+'&deg;'+weather.units.temp+'</h1>';
					html += '<h2>13:35 <span class="quicksand-bold">'+weather.city+'</span></h2>';

					$(".weather-content").html(html);
				},
				error: function(error) {
					$(".weather-content").html('<p>'+error+'</p>');
				}
			}

			Weather.options = options;
			Weather.load();

		}

		function error(err) {
			console.warn('ERROR(' + err.code + '): ' + err.message);
		}
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(success, error, geooptions);
		}
	}
}