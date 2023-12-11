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


function animateThroughTrees(event) {
	if (event.deltaY > 0 && timer === null) {

		$("#tree-0").attr("id", "1");
		$("#tree-1").attr("id", "2");
		$("#tree-2").attr("id", "3");
		$("#tree-3").attr("id", "0");

		$("#1").addClass("moveTo1");
		$("#2").addClass("moveTo2");
		$("#3").addClass("moveTo3");
		$("#0").addClass("moveTo0");
		$("#whisper").attr("class", "center whisper px-3 py-2 fadeOutWhisper");

		timer = setTimeout(scrollThroughTrees, 3000);
	}
	else if (event.deltaY <= 0) {
		console.log("scrolled down");
	}
	else {
		console.log("waiting for timer before going again");
	}
}

function scrollThroughTrees() {
	$("#whisper").addClass("hide");

	$("#0").attr("class", "tree z-0 m-auto hide");
	$("#1").attr("class", "tree z-1 size-1 m-auto");
	$("#2").attr("class", "tree z-2 size-2 m-auto");
	$("#3").attr("class", "tree z-3 m-auto");

	$("#0").attr("id", "tree-0");
	$("#1").attr("id", "tree-1");
	$("#2").attr("id", "tree-2");
	$("#3").attr("id", "tree-3");

	if (i >= whispers.length) {
		i = 0;
	}
	$("#whisper").text(whispers[i]);
	i++;
	$("#whisper").attr("class", "center whisper px-3 py-2 fadeInWhisper");

	boing.play();
	timer = setTimeout(clearTimer, 1000);
	console.log("scroll function has been called");
}

function clearTimer() {
	clearTimeout(timer);
	timer = null;
}

$(document).ready(function() {
	whispers.push("whisper");
});
