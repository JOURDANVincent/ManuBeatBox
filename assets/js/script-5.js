// 
var keyPad = [

	// PAD : Ligne 1
	{'inClass':'bgKey1', 'outClass':'bgKey11', 'sound':'assets/wav/HITHAT/hh01.wav'},
	{'inClass':'bgKey1', 'outClass':'bgKey11', 'sound':'assets/wav/HITHAT/hhc1.wav'},
	{'inClass':'bgKey1', 'outClass':'bgKey11', 'sound':'assets/wav/HITHAT/sh1.wav'},
	{'inClass':'bgKey1', 'outClass':'bgKey11', 'sound':'assets/wav/CLAP/clap1.wav'},

	// PAD : Ligne 2
	{'inClass':'bgKey2', 'outClass':'bgKey22', 'sound':'assets/wav/CLAP/clap2.wav'},
	{'inClass':'bgKey2', 'outClass':'bgKey22', 'sound':'assets/wav/SNARE/sn1.wav'},
	{'inClass':'bgKey2', 'outClass':'bgKey22', 'sound':'assets/wav/VOICE/sing1.wav'},
	{'inClass':'bgKey2', 'outClass':'bgKey22', 'sound':'assets/wav/VOICE/sing2.wav'},

	// PAD : Ligne 3
	{'inClass':'bgKey3', 'outClass':'bgKey33', 'sound':'assets/wav/VOICE/sing3.wav'},
	{'inClass':'bgKey3', 'outClass':'bgKey33', 'sound':'assets/wav/BASS/bass1.wav'},
	{'inClass':'bgKey3', 'outClass':'bgKey33', 'sound':'assets/wav/BASS/bass2.wav'},
	{'inClass':'bgKey3', 'outClass':'bgKey33', 'sound':'assets/wav/BASS/bass3.wav'},

	// PAD : Ligne 4
	{'inClass':'bgKey4', 'outClass':'bgKey44', 'sound':'assets/wav/KICK/kick2.wav'},
	{'inClass':'bgKey4', 'outClass':'bgKey44', 'sound':'assets/wav/KICK/kick1.wav'},
	{'inClass':'bgKey4', 'outClass':'bgKey44', 'sound':'assets/wav/KICK/kick3.wav'},
	{'inClass':'bgKey4', 'outClass':'bgKey44', 'sound':'assets/wav/KICK/kick3.wav'},
	];

//Déclaration variable audio last et id ...
var audio = new Audio();
var lastAudio = null;
var lastId = null;

// Création liste des touchPad...
var touchPadEvent = document.querySelectorAll('.touchPad');

// ajout d'unlistener click pour chaque item ...
touchPadEvent.forEach((item, index) => {

	// déclaration variable padName / récupération du nom de dossier pour l'attribuer au pad
	let padName = keyPad[index].sound.split('/');
	item.innerHTML = padName[2];

	//ajout d'un listener par item
    item.addEventListener('click', function(){
		//console.log("item :",item);
		//console.log('class', item.className)

		// animation du pad en cours ...
		if (keyPad[index].inClass.match(item.class)){
			// console.log("les classes en cours .. :",item.className);
			// item.classList.remove(keyPad[index].inClass);
			//item.classList.add('animated','bounce');
		}

        // si audio identique , reload et play (permet de couper le son avant de le relancer, pbm de resonnance ...)
        if (item.id == lastId) {
            lastAudio.load();
			lastAudio.play();
			
        //sinon jouer un nouvel audio
        } else {
			// Attribution du son à jouer en fonction du pad cliqué
            var audio = new Audio(keyPad[index].sound);
            console.log(audio);
            audio.play();
            //mise en mémoire dernier audio joué
            lastAudio = audio;
		}
		// mise en mémoire denrier pad cliqué
		lastId = item.id;
		
    });
    
})
