const boing = new Audio('./assets/jump.mp3');
boing.playbackRate = 1.7;
boing.volume = 0.02;
var timer = null;


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

		timer = setTimeout(scrollThroughTrees, 4000);
	}
	else if (event.deltaY <= 0) {
		console.log("scrolled down");
	}
	else {
		console.log("waiting for timer before going again");
	}
}

function scrollThroughTrees() {
	$("#0").attr("class", "tree z-0 m-auto hide");
	$("#1").attr("class", "tree z-1 size-1 m-auto");
	$("#2").attr("class", "tree z-2 size-2 m-auto");
	$("#3").attr("class", "tree z-3 m-auto");

	$("#0").attr("id", "tree-0");
	$("#1").attr("id", "tree-1");
	$("#2").attr("id", "tree-2");
	$("#3").attr("id", "tree-3");

	boing.play();
	clearTimeout(timer);
	timer = null;
	console.log("scroll function has been called");
}
