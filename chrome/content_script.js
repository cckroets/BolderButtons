var buttons = document.getElementsByTagName('button');
//highlight possible buttons
for (var i = 0; i < buttons.length; i++){
	var offset = buttons[i].getBoundingClientRect();
	var highlighter = document.createElement('div');
	highlighter.id = 'highlighter' + i;
	highlighter.style.position = "fixed";
	highlighter.style.top = (offset.top-4) + "px";
	highlighter.style.left = (offset.left-4) + "px";
	highlighter.style.width = (offset.width+4) + "px";
	highlighter.style.height = (offset.height+4) + "px";
	highlighter.style.border = "3px solid #FFFF00";
	highlighter.style.zIndex = 1000;
	document.body.insertBefore(highlighter, document.body.firstChild);
	console.log('button' + i + ' changed color');
}