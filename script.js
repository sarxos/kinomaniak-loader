;(function(global) {

	global.KM = {

		/**
		 * Timeout for movie loading.
		 */
		timeout : 5000,
		
		/**
		 * Number of pseudo-clicks performed.
		 */
		clicks : 0,
		
		/**
		 * Console-safe log.
		 */
		log : function(msg) {
			if (typeof console != 'undefined') {
				console.info(msg);
			}
		},
		
		/**
		 * Load movie.
		 */
		load : function(cid, hash) {
		
			var container_id = eval(cid);
			var url = eval(hash);

			KM.clicks++;

			$(container_id).css('background-color', 'black');
			$(container_id).css('color', 'white');
			$(container_id).css('text-align', 'center');
			$(container_id).css('font-size', '24pt');
			$(container_id).html('<br><br>Loading Attempts: ' + KM.clicks);

			$.ajax(url, {
				accept : 'text/html',
				timeout : KM.timeout,
				error : function(xhr, status, error) {
					KM.log('http error / timeout');
					setTimeout(function() { load_player(cid, hash) }, KM.timeout);
				},
				success : function(data, status, xhr) {
					if (data.indexOf('Aktualnie zbyt wielu') !== -1) {
						KM.log('not loaded - too many users ' + KM.clicks);
						setTimeout(function() { load_player(cid, hash) }, KM.timeout);
					} else {
						KM.log('succesfully loaded!');
						$(container_id).html(data);
					}
				}			
			});
		}
		
	};

})(this);

/**
 * Replace original loading function.
 */
this.load_player = KM.load;
