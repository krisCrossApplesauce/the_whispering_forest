// Get the div element
var divElement = document.getElementById('scene-5');

// Create an image element
var imgElement = document.createElement("img");

// Set the image source
imgElement.src = 'images/tree_1.png';

// Generate random position
// var randomTop = Math.random() * divElement.offsetHeight;
// var randomLeft = Math.random() * divElement.offsetWidth;

// Set the image position
// imgElement.style.top = randomTop + 'px';
// imgElement.style.left = randomLeft + 'px';

// Set the image position to absolute
imgElement.style.position = 'absolute';

// Append the image to the div
divElement.appendChild(imgElement);

// $("#scene-5").replaceWith(`
//         <img src="images/tree_1.png" class="just-tree1 obj" id="just-tree1">
// `)
