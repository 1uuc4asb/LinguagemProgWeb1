var count = 0;
setInterval(function(){
	var label = document.getElementById('variavel');
	count++;
	label.innerHTML = count;
}, 1000);

function reset(){
	count = 0;
}