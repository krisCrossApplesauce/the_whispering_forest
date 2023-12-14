const boing = new Audio('./assets/jump.mp3');
boing.playbackRate = 1.7;
boing.volume = 0.1;
var timer = null;

const whispers = [];
var i = 0;


function addWhisper() {
	var input = document.getElementById('whisper_input');
	console.log(input.value);
	whispers.push(input.value);
	input.value = "";
}


/*  Scene Slide Funcs  */

function animateThroughTrees(event) {
	if (event.deltaY > 0 && timer === null) {

		$("#scene-0").attr("id", "1");
		$("#scene-1").attr("id", "2");
		$("#scene-2").attr("id", "3");
		$("#scene-3").attr("id", "4");
		$("#scene-4").attr("id", "5");
		$("#scene-5").attr("id", "0");

		$("#1").addClass("moveTo1");
		$("#2").addClass("moveTo2");
		$("#3").addClass("moveTo3");
		$("#4").addClass("moveTo4");
		$("#5").addClass("moveTo5");
		$("#0").addClass("moveTo0");
		$("#whisper").attr("class", "center whisper z-6 px-3 py-2 fadeOutWhisper");

		timer = setTimeout(whisperTrees, 2000);
	}
	else if (event.deltaY <= 0) {
		console.log("scrolled down");
	}
	else {
		console.log("waiting for timer before going again");
	}
}

function whisperTrees() {
	if (i >= whispers.length) {
		i = 0;
	}
	$("#whisper").text(whispers[i]);
	i++;
	$("#whisper").attr("class", "center whisper z-6 px-3 py-2 fadeInWhisper");

	timer = setTimeout(scrollThroughTrees, 1000);
}

function scrollThroughTrees() {
	$("#whisper").addClass("hide");

	$("#0").attr("class", "scene z-0 m-auto hide");
	$("#1").attr("class", "scene z-1 size-1 m-auto");
	$("#2").attr("class", "scene z-2 size-2 m-auto");
	$("#3").attr("class", "scene z-3 size-3 m-auto");
	$("#4").attr("class", "scene z-4 size-4 m-auto");
	$("#5").attr("class", "scene z-5 size-5 m-auto");

	$("#0").attr("id", "scene-0");
	$("#1").attr("id", "scene-1");
	$("#2").attr("id", "scene-2");
	$("#3").attr("id", "scene-3");
	$("#4").attr("id", "scene-4");
	$("#5").attr("id", "scene-5");

	boing.play();
	clearTimeout(timer);
	timer = null;
	console.log("scroll function has been called");
}

/*  End of Scene Slide Funcs  */



/*  Random tree location funcs  */

function getRandomFromRange(min, max) {
	/* both min and max are included in the possible outcomes */
	max += 1;
	return Math.floor(Math.random * (max - min) + min);
}

/*  End of Random tree location funcs  */



$(document).ready(function() {
	whispers.push("whisper");
});
