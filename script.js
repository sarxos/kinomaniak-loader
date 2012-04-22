;(function(window) {

	window.KM = {

		log : function(msg) {
			if (typeof console != 'undefined') {
				console.info(msg);
			}
		},
		
		load : function(cid, hash) {
		
			container_id = eval(cid);
			url = eval(hash);

			window.km_clicks++;

			$(container_id).css('background-color', 'black');
			$(container_id).css('color', 'white');
			$(container_id).css('text-align', 'center');
			$(container_id).css('font-size', '24pt');
			$(container_id).html('<br><br>Loading Attempts: ' + km_clicks);

			$.get(url, function (data) {
				if (data.indexOf('Aktualnie zbyt wielu') !== -1) {
					KM.log('not loaded - too many users ' + km_clicks);
					setTimeout(function() { load_player(cid, hash) }, km_timeout);
				} else {
					KM.log('succesfully loaded!');
					$(container_id).html(data);
				}
			});		
		}
		
	};

})(this);

window.km_timeout = 5000;
window.km_clicks = 0;
window.load_player = KM.load;

$('#player_con_0_nl').html('Do diabla! Wczytaj i nie pytaj!');
