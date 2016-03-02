function ShowClass(show){
	var s = document.getElementsByClassName(show);
	var i;
	for (var i = 0; i < s.length; i++) {
		s[i].style.display = 'inherit';
	}
}
function HideClass(hide){
	var h = document.getElementsByClassName(hide);
	var i;
	for (var i = 0; i < h.length; i++) {
		h[i].style.display = 'none';
	}
}

//版型
function BoardSetting(show){
	if (show != 'NormalBoard') {
		HideClass('NormalBoard');
		document.getElementById('NormalBoard').style.color = 'inherit';
	}
	if (show != 'AllLeftBoard') {
		HideClass('AllLeftBoard');
		document.getElementById('AllLeftBoard').style.color = 'inherit';
	}
	if (show != 'iconBottomBoard') {
		HideClass('iconBottomBoard');
		document.getElementById('iconBottomBoard').style.color = 'inherit';
	}
	if (show != 'iconLeftBoard') {
		HideClass('iconLeftBoard');
		document.getElementById('iconLeftBoard').style.color = 'inherit';
	}

	ShowClass(show);
	document.getElementById(show).style.color = 'blue';
}

//背景
function BackgroundSetting(show) {
	if (show != 'SeperateBackground') {
		HideClass('SeperateBackground');
		document.getElementById('SeperateBackground').style.color = 'inherit';
	}
	if (show != 'SameBackground') {
		HideClass('SameBackground');
		document.getElementById('SameBackground').style.color = 'inherit';
	}
	
	ShowClass(show);
	document.getElementById(show).style.color = 'blue';
}