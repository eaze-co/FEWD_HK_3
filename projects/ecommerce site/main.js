

// document.ready shorthand
$(function(){


// ---> Nav Drop ...........................................................

	// Why does this not work?

		// $("navMens").click(function(){
		//   $(".dropMens").show();
		// });
	

	// Why does this not work (either)?

	// 	$("#navMens").onclick(function(){
	// 	  $("#dropMens").css("display", "inherent");
	// 	});





// ---> Pic Changer ........................................................	

	// override all placeholders 
        $('#imgContainer img').each(function( index ){
            $this = $(this);
            var imgLink = eval('bandana' + selectImages($this))[0]
            $this.attr('src', imgLink);
        })

	// listen for clicks on images
        $('#imgContainer').on('click','img', function(){
            $this = $(this);

        // decide which image is next                
            var nextImage = selectNextImage($this, selectImages($this));

        // change current image to next image
            $this.attr('src', nextImage);
        })

    // ---> what does this function do?
        function selectImages(current){

    // ---> which square is being clicked? 
            return $('#imgContainer img').index(current) + 1;
        }

    // ---> what does this function do?
        function selectNextImage(current, images){
            var images = getArray(images);
            var imgLink = current.attr('src');
            var currentImage = images.indexOf(imgLink)
            nextImage = (currentImage + 1) % images.length;
            return images[nextImage];
        }

    // evil code - but useful if (you) want to stick to this data-structure
        function getArray(index){
            return eval('bandana' + index);
        };


}) 
// ---> jQuery End ...



// ---> imgLink(s) .........................................................

// row1

	// array1
	var bandana1 = [
	  "http://media2.hickorees.com/image/JSHomesteadIndigoDyedBandana_L1.jpg",
	  "http://media2.hickorees.com/image/JSHomesteadIndigoDyedBandana_L2.jpg",
	  "http://media2.hickorees.com/image/JSHomesteadIndigoDyedBandana_L3.jpg",
	  "http://media2.hickorees.com/image/JSHomesteadIndigoDyedBandana_L4.jpg"
	];
	
	// array2
	var bandana2 = [
	  "http://media2.hickorees.com/image/StanleySonsPatternBandanaBlack_L1.jpg",
	  "http://media2.hickorees.com/image/StanleySonsPatternBandanaBlack_L2.jpg",
	  "http://media2.hickorees.com/image/StanleySonsPatternBandanaBlack_L3.jpg",
	  "http://media2.hickorees.com/image/StanleySonsPatternBandanaBlack_L4.jpg"
	];
	
	// array3
	var bandana3 = [
	  "http://media2.hickorees.com/image/JSHomesteadBlackSulfurDyedBandana_L1.jpg",
	  "http://media2.hickorees.com/image/JSHomesteadBlackSulfurDyedBandana_L2.jpg",
	  "http://media2.hickorees.com/image/JSHomesteadBlackSulfurDyedBandana_L3.jpg",
	  "http://media2.hickorees.com/image/JSHomesteadBlackSulfurDyedBandana_L4.jpg"
	];
	

// row2

	// array4
	var bandana4 = [
	  "http://media2.hickorees.com/image/StanleySonsBandanaOlive_L1.jpg",
	  "http://media2.hickorees.com/image/StanleySonsBandanaOlive_L2.jpg",
	  "http://media2.hickorees.com/image/StanleySonsBandanaOlive_L3.jpg",
	  "http://media2.hickorees.com/image/StanleySonsBandanaOlive_L4.jpg"
	];
	
	// array5
	var bandana5 = [
	  "http://media2.hickorees.com/image/StanleySonsBandanaNavy_L1.jpg",
	  "http://media2.hickorees.com/image/StanleySonsBandanaNavy_L2.jpg",
	  "http://media2.hickorees.com/image/StanleySonsBandanaNavy_L3.jpg",
	  "http://media2.hickorees.com/image/StanleySonsBandanaNavy_L4.jpg"
	];
	
	// array6
	var bandana6 = [
	  "http://media2.hickorees.com/image/StanleySonsBandanaCinnamon_L1.jpg",
	  "http://media2.hickorees.com/image/StanleySonsBandanaCinnamon_L2.jpg",
	  "http://media2.hickorees.com/image/StanleySonsBandanaCinnamon_L3.jpg",
	  "http://media2.hickorees.com/image/StanleySonsBandanaCinnamon_L4.jpg"
	];
	

// row3

	// array7
	var bandana7 = [
	  "http://media2.hickorees.com/image/MadeontheMoonGizaBandanaBlack_L1.jpg",
	  "http://media2.hickorees.com/image/MadeontheMoonGizaBandanaBlack_L2.jpg",
	  "http://media2.hickorees.com/image/MadeontheMoonGizaBandanaBlack_L3.jpg",
	  "http://media2.hickorees.com/image/MadeontheMoonGizaBandanaBlack_L4.jpg"
	];
	
	// array8
	var bandana8 = [
	  "http://media2.hickorees.com/image/MadeontheMoonGizaBandanaRed_L1.jpg",
	  "http://media2.hickorees.com/image/MadeontheMoonGizaBandanaRed_L2.jpg",
	  "http://media2.hickorees.com/image/MadeontheMoonGizaBandanaRed_L3.jpg",
	  "http://media2.hickorees.com/image/MadeontheMoonGizaBandanaRed_L4.jpg"
	];
	
	// array9
	var bandana9 = [
	  "http://media2.hickorees.com/image/MadeontheMoonGizaBandanaNavy_L1.jpg",
	  "http://media2.hickorees.com/image/MadeontheMoonGizaBandanaNavy_L2.jpg",
	  "http://media2.hickorees.com/image/MadeontheMoonGizaBandanaNavy_L3.jpg",
	  "http://media2.hickorees.com/image/MadeontheMoonGizaBandanaNavy_L4.jpg"
	];
