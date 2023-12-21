// Get the div element
var divElement = document.getElementById('gr2');

// Create an image element
var imgElement = document.createElement("img");

// Set the image source
imgElement.src = 'images/tree_1.png';

// Generate random position
var randomTop = Math.random() * (divElement.offsetHeight - imgElement.offsetHeight);
var randomLeft = Math.random() * (divElement.offsetWidth - imgElement.offsetWidth);

// Set the image position
imgElement.style.bottom = randomTop + 'px';
imgElement.style.left = randomLeft + 'px';

// Set the image position to absolute
imgElement.style.position = 'absolute';

// Append the image to the div
divElement.appendChild(imgElement);
