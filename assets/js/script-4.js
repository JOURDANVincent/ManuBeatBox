var keyPad = [
	{'id':'pad11', 'keyName':'Q', 'music':'assets/wav/hithat/hh01.wav'},
	{'id':'pad12', 'keyName':'W', 'music':'assets/wav/hithat/hhc1.wav'},
	{'id':'pad13', 'keyName':'E', 'music':'assets/wav/hithat/sh1.wav'},
	{'id':'pad14', 'keyName':'A', 'music':'assets/wav/clap/clap1.wav'},

	{'id':'pad21', 'keyName':'S', 'music':'assets/wav/clap/clap2.wav'},
	{'id':'pad22', 'keyName':'D', 'music':'assets/wav/snare/sn1.wav'},
	{'id':'pad23', 'keyName':'Z', 'music':'assets/wav/voice/sing1.wav'},
	{'id':'pad24', 'keyName':'X', 'music':'assets/wav/voice/sing2.wav'},

	{'id':'pad31', 'keyName':'C', 'music':'assets/wav/voice/sing3.wav'},
	{'id':'pad32', 'keyName':'V', 'music':'assets/wav/bass/bass1.wav'},
	{'id':'pad33', 'keyName':'B', 'music':'assets/wav/bass/bass2.wav'},
	{'id':'pad34', 'keyName':'N', 'music':'assets/wav/bass/bass3.wav'},
	
	{'id':'pad41', 'keyName':'AltLeft', 'music':'assets/wav/kick/kick2.wav'},
	{'id':'pad42', 'keyName':'Space', 'music':'assets/wav/kick/kick1.wav'},
	{'id':'pad43', 'keyName':'AltRight', 'music':'assets/wav/kick/kick3.wav'},
	{'id':'pad44', 'keyName':'AltRight', 'music':'assets/wav/kick/kick3.wav'},
	];

// Création liste des touchPad...
var touchPadList = document.querySelectorAll('.touchPad');
touchPadList.forEach((item, index) => {
// 	item.addEventListener('click', function(){
// 		console.log(item.id, index);
// 		console.log(keyPad[index]);
// 		var audio = new Audio(keyPad[index].music)
// 	});

	var audio = new Audio(keyPad[index].music);
	keyPad[index].audio = audio;

})

//console.log(keyPad);

var touchPadEvent = document.querySelectorAll('.touchPad');
touchPadEvent.forEach((item, index) => {
	item.addEventListener('click', playSound());
})

function playSound(sound) {
	console.log(sound);
	
}










// (Re)Création des objets audio
// function audioDynamicCreation () {
// 	touchPadList.forEach(pad => {
// 		audioPad = new Audio();
		
// 		// Attribution des son automatique ....(test)
// 		keyPad.forEach(item => {
// 			if (inProgressId == item.id) {
// 				audioPad = (item.id,item.music);
// 				console.log(audioPad.id , item.music);
// 			}
// 		})
// 	});
// }


