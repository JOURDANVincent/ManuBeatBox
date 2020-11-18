document.addEventListener('keydown', logKey);

// MEMO : A-Q; Z-W; Q-A; W-Z
function logKey(e) {
  log.textContent = ` ${e.code}`;
  //audioElement.play();
}

'use strict';
// ------------------------
// 1- définition des touches et des fichiers musiques associées
var keyboard = [
	{'keyName':'Q','music':'assets/mp3/bassLoop1.wav'},
	{'keyName':'W','music':'https://www.jerome-reaux-creations.fr/DVP/codepen/sons-halloween/fantome-1.mp3'},
	{'keyName':'E','music':'https://www.jerome-reaux-creations.fr/DVP/codepen/sons-halloween/fantome-2.mp3'},
	{'keyName':'R','music':'https://www.jerome-reaux-creations.fr/DVP/codepen/sons-halloween/grille-metal-grince.mp3'},
	{'keyName':'T','music':'https://www.jerome-reaux-creations.fr/DVP/codepen/sons-halloween/petit-fantome-1.mp3'},
	{'keyName':'Y','music':'https://www.jerome-reaux-creations.fr/DVP/codepen/sons-halloween/petit-fantome-2.mp3'},
	{'keyName':'U','music':'https://www.jerome-reaux-creations.fr/DVP/codepen/sons-halloween/porte-grince.mp3'},
	{'keyName':'I','music':'https://www.jerome-reaux-creations.fr/DVP/codepen/sons-halloween/porte-metal-claque.mp3'},
];
//  console.log( keyboard );
// ------------------------
// 2- construction du code HTML des TOUCHES
var div_audio_keyboard = document.getElementById('audio-keyboard');
keyboard.forEach( function(key){
	// audio-keyboard
	var div_touche = document.createElement('div');
	div_touche.className = 'touche';
	div_touche.setAttribute('id','touche-'+key.charCode);
	div_touche.dataset.key = key.charCode;
	div_touche.dataset.music = key.music;
  div_touche.textContent = key.keyName;
	div_audio_keyboard.appendChild(div_touche);
  // de la forme : <div class="touche" id="touche-113" data-key="113" data-music="xxxxxxxxxx.mp3">Q</div>
});
// ------------------------
// 3- click sur une TOUCHE (ECRAN)
var touches = document.querySelectorAll('.touche');
touches.forEach( function(touche){
	touche.addEventListener('click',function(){
//		console.log('play : '+touche.dataset.key );
		playSound(touche);
	});
});
// ------------------------
// 4- click au CLAVIER
document.addEventListener('keypress', function(event){
//	console.log(event);
//	console.log(event.charCode);
	console.log(event.keyCode);
  var touche = document.getElementById('touche-'+event.charCode);
	if( touche ) { playSound(touche); }
});
// ------------------------
// 5- play
function playSound(touche){
	// touche
	touche.style.backgroundColor = "grey";
	setTimeout(function(){ touche.style.backgroundColor = ""; }, 200);
	// player audio
	var audio = new Audio(touche.dataset.music);
	audio.play();
}
// ------------------------
