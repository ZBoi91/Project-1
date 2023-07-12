// Matched pair count
var matchedPair = 0;
// Array with all memes
var allMemes = ["badluck","blackman","boy","doge","nmjgg","overly","philosoraptor","spiderman","badluck","blackman","boy","doge","nmjgg","overly","philosoraptor","spiderman"];
// Array to store clicked memes
var clickedMemes = [];
// Show memes function
function showMeme(eid)
{
	// Get Click counter
	var allClicks = document.getElementById("clicks").innerHTML;
	// Increase the click counter by 1
	allClicks++;
	// Display the new clicks counter
	document.getElementById("clicks").innerHTML = allClicks;
	// Check if clickedMemes array length IS NOT equal to 2
	if(clickedMemes.length != 2)
	{
		// Display the clicked memes
		document.getElementById(eid).style.display = "block";
		// Get the memes name
		var memes = document.getElementById(eid).src.split("/").pop().split(".")[0];
		// Disable the mouse pointer
		document.getElementById("memes"+eid).style.pointerEvents = "none";
		// Push this clicked memes ID into clickedMemes array
		clickedMemes.push(eid);
		// Check if clickedMemes array length IS equal to 2
		if(clickedMemes.length == 2)
		{
			// Check both clicked memes name are same
			if(document.getElementById(clickedMemes[0]).getAttribute("src") == document.getElementById(clickedMemes[1]).getAttribute("src"))
			{
				// Increase the matchedPair by 1
				matchedPair++;
				setTimeout(function(){
					// Empty the clickedMemes array after half second
					clickedMemes = [];					
				},500);
				// Check if matchedPair IS equal to 8
				if(matchedPair == 8)
					document.getElementById("restartScreen").style.display = "block"; // Display the restartScreen
			}
			else
			{
				setTimeout(function(){
					// Hide the first memes
					document.getElementById(clickedMemes[0]).style.display = "none";
					// Hide the second memes
					document.getElementById(clickedMemes[1]).style.display = "none";
					// Enable the mouse pointer event for first memes
					document.getElementById("memes"+clickedMemes[0]).style.pointerEvents = "auto";
					// Enable the mouse pointer event for second memes
					document.getElementById("memes"+clickedMemes[1]).style.pointerEvents = "auto";
					// Empty the clickedMemes array
					clickedMemes = [];
				},500);
			}
		}
	}
}
// gameStart function
function gameStart()
{
	// Select all memes
	var memes = document.querySelectorAll(".memes");
	// Loop through all memes images
	for(var e = 0; e < memes.length; e++)
	{
		// Generate one random meme from the array
		var randomMeme = allMemes.splice(allMemes.length * Math.random() | 0, 1)[0];
		// Set the random generated meme image
		document.getElementsByClassName("memes")[e].innerHTML += "<img id='"+e+"' src='images/"+randomMeme+".jpg' width='130' height='130' style='display: none;' />";
	}
}
// Start the game
gameStart();