// ==UserScript==
// @name           Kinomaniak Loader
// @namespace      http://www.sarxos.pl/km-loader
// @description    Load Movie from Kinomaniak
// @include        http://www.kinomaniak.tv/*
// @resource       script http://www.sarxos.pl/km-loader/
// ==/UserScript==

;(function() {

	var script = 

"	window.km_timeout = 5000;														" +
"	window.km_clicks = 0;															" +
"	window.load_player = function(cid, hash) {										" +
"																					" +
"		container_id = eval(cid);													" +
"		url = eval(hash);															" +
"																					" +
"		window.km_clicks++;															" +
"																					" +
"		$(container_id).css('background-color', 'black');							" +
"		$(container_id).css('color', 'white');										" +
"		$(container_id).css('text-align', 'center');								" +
"		$(container_id).css('font-size', '24pt');									" +
"																					" +
"		$(container_id).html('<br><br>Loading Attempts: ' + km_clicks);						" +
"																					" +
"		$.get(url, function (data) {												" +
"			if (data.indexOf('Aktualnie zbyt wielu') !== -1) {						" +
"				console.warn('not loaded - too many users ' + km_clicks);			" +
"				setTimeout(function() { load_player(cid, hash) }, km_timeout);      " +
"			} else {                                                                " +
"				console.info('succesfully loaded!');                                " +
"				$(container_id).html(data);											" +
"			}                                                                       " +
"		});																			" +
"	};																				" + 
"   console.info('mocked');															" +
"	$('#player_con_0_nl').html('Wczytaj mnie do diabla!');							";

	var e = document.createElement("script");
	e.type="text/javascript";
	e.innerHTML = script;
	document.getElementsByTagName("head")[0].appendChild(e);

})();
