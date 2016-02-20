function changeDisplay(target, effect){
	document.getElementById(target).style.display=effect;
}

function changeDisplayClass(target, effect){
	var x = document.getElementsByClassName(target);
	var i;
	for (i = 0; i < x.length; i++) {
    	x[i].style.display = effect;
	}
}