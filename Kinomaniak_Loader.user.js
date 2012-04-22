// ==UserScript==
// @name           Kinomaniak Loader
// @namespace      http://www.sarxos.pl/km-loader
// @description    Load Movie from Kinomaniak
// @include        http://www.kinomaniak.tv/*
// @resource       script https://raw.github.com/sarxos/kinomaniak-loader/master/script.js
// ==/UserScript==

;(function() {
	var e = document.createElement("script");
	e.type="text/javascript";
	e.innerHTML = GM_getResourceText("script");;
	document.getElementsByTagName("head")[0].appendChild(e);
})();
