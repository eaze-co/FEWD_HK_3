
// make square a clickable item
$('div').click(function () {

	// change to red
	$(this).css("background-color", "red");
	
	// change to red
	$(this).css("background-color", "blue");
})

// // second click (change image)
// $('div').click(function () {

// 	// change to red
// 	$(this).css("background-color", "blue");
// })

// double click (change to green)
$('div').dblclick(function () {

	// change to red
	$(this).css("background-color", "green");
})