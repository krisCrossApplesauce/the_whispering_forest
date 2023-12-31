const boing = new Audio('./sounds/footsteps.wav');
boing.playbackRate = 1;
boing.volume = 0.25;

var timer = null;
var secret_given = false;

const whispers = [];
var i = 0;


function addWhisper() {
	var input = document.getElementById('whisper_input');
	var value = input.value;

	if (input.value != "") {
		whispers.push(input.value);
		input.value = "";
	}

	$("#podium_input").replaceWith(`<div class="podium_input z-8 p-3 hide" id="podium_input"></div>`);
	$("#arch").removeClass("unfocused");
	$("#arch-piece1").removeClass("unfocused");
	$("#arch-piece2").removeClass("unfocused");
	$("#just-tree1").removeClass("unfocused");

	if (value != "") {
		repairArchAnimation();
		$("#whisper").text("take a scroll through the forest");
	}
}


function repairArchAnimation() {
	$("#podium-button").children().children().remove();
	$("#podium-button").children().remove();
	$("#podium-button").remove();
	$("#arch-scene").children().remove();
	$("#arch-scene").remove();

	$("#dust").attr("class", "dust z-6 goodbyeDust");
	$("#fg").addClass("clearSky");

	$("#scene-5").addClass("addDepth");
	$("#scene-4").addClass("addDepth");
	$("#scene-3").addClass("addDepth");
	$("#scene-2").addClass("addDepth");
	$("#scene-1").addClass("addDepth");
	$("#scene-0").addClass("addDepth");

	$("#scene-5").children(".ground").addClass("grassHeals");
	$("#scene-4").children(".ground").addClass("grassHeals");
	$("#scene-3").children(".ground").addClass("grassHeals");
	$("#scene-2").children(".ground").addClass("grassHeals");
	$("#scene-1").children(".ground").addClass("grassHeals");
	$("#scene-0").children(".ground").addClass("grassHeals");
	$("[id='just-tree5'], [id='just-tree4'], [id='just-tree3'], [id='just-tree2'], [id='just-tree1']").addClass("show");
	$("#dead-tree").addClass("hide");



	/**
	 * create animations for:
	 * trees growing(?) [ ]
	 * the grass turning green [X]
	 * ^and growing [ ]
	 * the background changing [~]
	 * the dust leaving [X]
	 * and the arch repairing itself [ ]
	 */

	timer = setTimeout(finishArchStuff, 10000);
}

function finishArchStuff() {
	$("#scene-5").removeClass("burnt addDepth");
	$("#scene-4").removeClass("burnt addDepth");
	$("#scene-3").removeClass("burnt addDepth");
	$("#scene-2").removeClass("burnt addDepth");
	$("#scene-1").removeClass("burnt addDepth");
	$("#scene-0").removeClass("burnt addDepth");

	$("#scene-5").children(".ground").removeClass("burnt grassHeals");
	$("#scene-4").children(".ground").removeClass("burnt grassHeals");
	$("#scene-3").children(".ground").removeClass("burnt grassHeals");
	$("#scene-2").children(".ground").removeClass("burnt grassHeals");
	$("#scene-1").children(".ground").removeClass("burnt grassHeals");
	$("#scene-0").children(".ground").removeClass("burnt grassHeals");

	$("#dust").remove();
	$("#fg").remove();
	$("#bg").removeClass("burnt");

	$("#whisper").removeClass("hide");
	$("#whisper").addClass("fadeInWhisper");

	timer = setTimeout(function() {
		secret_given = true;
		clearTimeout(timer);
		timer = null;
	}, 1000);
}


/*  Scene Slide Funcs  */

function animateThroughTrees(event) {
	if (event.deltaY > 0 && timer === null && secret_given === true) {
		$("#scene-0").attr("id", "1");
		$("#scene-1").attr("id", "2");
		$("#scene-2").attr("id", "3");
		$("#scene-3").attr("id", "4");
		$("#scene-4").attr("id", "5");
		$("#scene-5").attr("id", "0");

		$("#arch").addClass("fadeOutArch");
		$("#arch-piece1").addClass("fadeOutArch");
		$("#arch-piece2").addClass("fadeOutArch");

		$("#1").addClass("moveTo1");
		$("#2").addClass("moveTo2");
		$("#3").addClass("moveTo3");
		$("#4").addClass("moveTo4");
		$("#5").addClass("moveTo5");
		$("#0").addClass("moveTo0");
		$("#whisper").attr("class", "center whisper z-6 px-3 py-2 fadeOutWhisper");

		boing.play();

		timer = setTimeout(whisperTrees, 2000);
	}
	else if (event.deltaY <= 0) {
		console.log("scrolled down");
	}
	else if (timer != null) {
		console.log("waiting for timer before going again");
	}
	else {
		console.log("no secrets, no forest");
	}
}

function whisperTrees() {
	$("#arch-scene").children().remove();
	$("#arch-scene").remove();
	$("#arch").remove();

	// if (i >= whispers.length) {
	// 	i = 0;
	// }
	// $("#whisper").text(whispers[i]);
	// i++;
	fillSecrets();
	$("#whisper").attr("class", "center whisper z-6 px-3 py-2 fadeInWhisper");

	timer = setTimeout(scrollThroughTrees, 1000);
}

function scrollThroughTrees() {
	$("#whisper").addClass("hide");

	/* 0 will be replaceWith instead of attr() */
	$("#0").attr("class", "scene z-0 m-auto hide");
	$("#1").attr("class", "scene z-1 size-1 m-auto");
	$("#2").attr("class", "scene z-2 size-2 m-auto");
	$("#3").attr("class", "scene z-3 size-3 m-auto");
	$("#4").attr("class", "scene z-4 size-4 m-auto");
	$("#5").attr("class", "scene z-5 size-5 m-auto");

	$("#0").children(".ground").attr("class", "ground gr0");
	$("#1").children(".ground").attr("class", "ground gr1");
	$("#2").children(".ground").attr("class", "ground gr2");
	$("#3").children(".ground").attr("class", "ground gr3");
	$("#4").children(".ground").attr("class", "ground gr4");
	$("#5").children(".ground").attr("class", "ground gr5");

	$("#0").attr("id", "scene-0");
	$("#1").attr("id", "scene-1");
	$("#2").attr("id", "scene-2");
	$("#3").attr("id", "scene-3");
	$("#4").attr("id", "scene-4");
	$("#5").attr("id", "scene-5");

	boing.pause();
	clearTimeout(timer);
	timer = null;
	console.log("scroll function has been called");
}

/*  End of Scene Slide Funcs  */



/*  Randomization funcs  */

function getRandomFromRange(min, max) {
	/* both min and max are included in the possible outcomes */
	return Math.floor(Math.random() * ((max + 1) - min) + min);
}

function getRandomWhisperPrompt() {
	const whisperPrompt = ["secret", "worry", "question", "thought", "feeling"];
	let i = getRandomFromRange(0, 4);

	console.log(i);

	$("#whisper-prompt").text(`To enter the forest, you must give the forest a ${whisperPrompt[i]}.`);
}

// Function to pick a random item from an array
function getRandomItem(array) {
	console.log("Random function!");
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Fetch the JSON file asynchronously
function fillSecrets() {
	fetch('secrets.json')
		.then(response => response.json())
		.then(data => {
			const secretsArray = data.secrets;
			const randomSecret = getRandomItem(secretsArray);

			// Set the content of the paragraph to the randomly picked string
			document.getElementById('whisper').textContent = randomSecret;
		})
		.catch(error => console.error('Error fetching data.json:', error));
}

/*  End of Randomization funcs  */



/*  Arch Scene  */


function lookAtPodium() {
	if (secret_given === false) {
		$("#podium_input").replaceWith(`<div class="podium_input z-8 p-3" id="podium_input">
			<div id="whisper-prompt"></div>
			<input class="whisper_input" type="text" id="whisper_input">
		</div>`);

		getRandomWhisperPrompt();

		$("#arch").addClass("unfocused");
		$("#arch-piece1").addClass("unfocused");
		$("#arch-piece2").addClass("unfocused");
		$("#just-tree1").addClass("unfocused");

		/* create an animation for zooming in on the podium to read and carve into it */

		document.getElementById("whisper_input").addEventListener("keypress", function(event){
			if (event.key === "Enter") {
				event.preventDefault();
				addWhisper();
			}
		});
	}
}

/*  End of Arch Scene  */


$(document).ready(function() {
	whispers.push("whisper");
});
