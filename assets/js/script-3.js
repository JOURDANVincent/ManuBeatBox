document.addEventListener('keydown', logKey);

// MEMO : A-Q; Z-W; Q-A; W-Z
var keyBoard = [
	{'keyName':'Q', 'music':'assets/wav/hithat/hh01.wav'},
	{'keyName':'W', 'music':'assets/wav/hithat/hhc1.wav'},
	{'keyName':'E', 'music':'assets/wav/hithat/sh1.wav'},

	{'keyName':'A', 'music':'assets/wav/clap/clap1.wav'},
	{'keyName':'S', 'music':'assets/wav/clap/clap2.wav'},
	{'keyName':'D', 'music':'assets/wav/snare/sn1.wav'},

	{'keyName':'Z', 'music':'assets/wav/voice/sing1.wav'},
	{'keyName':'X', 'music':'assets/wav/voice/sing2.wav'},
	{'keyName':'C', 'music':'assets/wav/voice/sing3.wav'},

	{'keyName':'V', 'music':'assets/wav/bass/bass1.wav'},
	{'keyName':'B', 'music':'assets/wav/bass/bass2.wav'},
	{'keyName':'N', 'music':'assets/wav/bass/bass3.wav'},
	
	{'keyName':'AltLeft', 'music':'assets/wav/kick/kick2.wav'},
	{'keyName':'Space', 'music':'assets/wav/kick/kick1.wav'},
	{'keyName':'AltRight', 'music':'assets/wav/kick/kick3.wav'},
	]

var lastKey = null;
var lastAudio = null;

function logKey(e) {
	let keyPressed = ` ${e.code}`;
	console.log(keyPressed);
	e.preventDefault();
	keyPressed = (keyPressed.replace('Key',''));
	keyPressed = keyPressed.trim();
	
	keyBoard.forEach((touch) => {
		if (keyPressed == touch.keyName){
			if (keyPressed == lastKey) {
				//lastAudio.ended(); 
				lastAudio.load();
				lastAudio.play();
			} else {
				var audio = new Audio(touch.music);
				 audio.play();
				 lastAudio = audio;
			}	
			lastKey = keyPressed; 
		} 
		// else {
		// 	console.log("mauvaise touche :" + keyPressed + " != " + item.keyName)
		// }
	});
}



// function playSound(track){
// 	var audio = new Audio(track);
// 	//console.log(music)
// 	audio.play();
	
// }