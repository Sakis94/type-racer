(function(){

	var i=0, j=0;
	var words = $('.inputPanel').innerText.split(' ');

	setInterval(function(){
		if( i<words.length ){
			if( j<words[i].length ){
				$('.txtInput').value += words[i][j];
				j++;
			} else {
				j=0; i++;
				var kbEvent= document.createEvent("KeyboardEvent");
				var initMethod = typeof kbEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";
				kbEvent[initMethod]( "keydown", true, true, window, false, false, false, false, 8, 0 );
				$('.txtInput').value += ' ';
				$('.txtInput').dispatchEvent( kbEvent );
			}
		}
	}, 100);

})();