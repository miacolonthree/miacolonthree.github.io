//var until_ms = 1714504402000;
var until_ms = 1717167600000;

// https://stackoverflow.com/a/2998874 by 5445/christian-c-salvad%c3%b3
Number.prototype.pad = function(places) { return String(this).padStart(places, '0'); }

Number.prototype.toDHMS = function() {
	return [
		Math.floor(this / 86400),
		Math.floor(this % 86400 / 3600).pad(2),
		Math.floor(this % 3600 / 60).pad(2),
		Math.floor(this % 60).pad(2)
	].join(':');
}

window.onload = function() { setInterval(update, 500); }

function update() {
	document.getElementById('main').innerHTML = Math.floor((until_ms - Date.now()) / 1000).toDHMS();
}
