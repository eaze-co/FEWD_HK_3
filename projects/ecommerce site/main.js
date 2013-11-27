

// ---> Nav Drop ...........................................................


	// ---> Mens ...........................................................

		$("#navMens").click(function(){

			$("#navMens")       .addClass("active");
			$("#navWomens")     .removeClass("active");
			$("#navAccessories").removeClass("active");

			$("#categoryContainer").slideToggle();
			// $("#categoryContainer").slideToggle();

			$("#dropMens")       .show();
			$("#dropWomens")     .hide();
			$("#dropAccessories").hide();
		});

	// ---> Womens ..........................................................

		$("#navWomens").click(function(){

			$("#navMens")       .removeClass("active");
			$("#navWomens")     .addClass("active");
			$("#navAccessories").removeClass("active");

			$("#categoryContainer").slideToggle();
			// $("#categoryContainer").slideToggle();

			$("#dropMens")       .hide();
			$("#dropWomens")     .show();
			$("#dropAccessories").hide();
		});

	// ---> Accessories ....................................................
		
		$("#navAccessories").click(function(){

			$("#navMens")       .removeClass("active");
			$("#navWomens")     .removeClass("active");
			$("#navAccessories").addClass("active");

			$("#categoryContainer").slideToggle();
			// $("#categoryContainer").slideToggle();

			$("#dropMens")       .hide();
			$("#dropWomens")     .hide();
			$("#dropAccessories").show();
		});


// ---> To View Pics Click Sub Category ....................................

		$(".category").click(function(){
			$(this).addClass("active");
			$("#imgContainer").slideToggle(500);
		});


// ---> Pic Changer ........................................................	

// document.ready shorthand
$(function(){

	// override all placeholders 
        $('#imgContainer img').each(function( index ){
            $this = $(this);

            var imgLink = products.accessories.bandanas[index][0]
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

    // ---> which square is being clicked? ( idk?! )
            return $('#imgContainer img').index(current);
        }

    // ---> what does this function do?
        function selectNextImage(current, images){
            var images = products.accessories.bandanas[images];
            var imgLink = current.attr('src');
            var currentImage = images.indexOf(imgLink)
            // % = looparound to beginning (kinda)
            nextImage = (currentImage + 1) % images.length;
            return images[nextImage];
        }

}) 
// ---> End ...


// ---> imgLink(s) .........................................................


var products = {
	 accessories : {
		bandanas : [
			[ "http://media2.hickorees.com/image/JSHomesteadIndigoDyedBandana_L1.jpg",
			"http://media2.hickorees.com/image/JSHomesteadIndigoDyedBandana_L2.jpg",
			"http://media2.hickorees.com/image/JSHomesteadIndigoDyedBandana_L3.jpg",
			"http://media2.hickorees.com/image/JSHomesteadIndigoDyedBandana_L4.jpg"
			],[
			"http://media2.hickorees.com/image/StanleySonsPatternBandanaBlack_L1.jpg",
			"http://media2.hickorees.com/image/StanleySonsPatternBandanaBlack_L2.jpg",
			"http://media2.hickorees.com/image/StanleySonsPatternBandanaBlack_L3.jpg",
			"http://media2.hickorees.com/image/StanleySonsPatternBandanaBlack_L4.jpg"
			],[
			"http://media2.hickorees.com/image/JSHomesteadBlackSulfurDyedBandana_L1.jpg",
			"http://media2.hickorees.com/image/JSHomesteadBlackSulfurDyedBandana_L2.jpg",
			"http://media2.hickorees.com/image/JSHomesteadBlackSulfurDyedBandana_L3.jpg",
			"http://media2.hickorees.com/image/JSHomesteadBlackSulfurDyedBandana_L4.jpg"
			],[
			"http://media2.hickorees.com/image/StanleySonsBandanaOlive_L1.jpg",
			"http://media2.hickorees.com/image/StanleySonsBandanaOlive_L2.jpg",
			"http://media2.hickorees.com/image/StanleySonsBandanaOlive_L3.jpg",
			"http://media2.hickorees.com/image/StanleySonsBandanaOlive_L4.jpg"
			],[
			"http://media2.hickorees.com/image/StanleySonsBandanaNavy_L1.jpg",
			"http://media2.hickorees.com/image/StanleySonsBandanaNavy_L2.jpg",
			"http://media2.hickorees.com/image/StanleySonsBandanaNavy_L3.jpg",
			"http://media2.hickorees.com/image/StanleySonsBandanaNavy_L4.jpg"
			],[
			"http://media2.hickorees.com/image/StanleySonsBandanaCinnamon_L1.jpg",
			"http://media2.hickorees.com/image/StanleySonsBandanaCinnamon_L2.jpg",
			"http://media2.hickorees.com/image/StanleySonsBandanaCinnamon_L3.jpg",
			"http://media2.hickorees.com/image/StanleySonsBandanaCinnamon_L4.jpg"
			],[
			"http://media2.hickorees.com/image/MadeontheMoonGizaBandanaBlack_L1.jpg",
			"http://media2.hickorees.com/image/MadeontheMoonGizaBandanaBlack_L2.jpg",
			"http://media2.hickorees.com/image/MadeontheMoonGizaBandanaBlack_L3.jpg",
			"http://media2.hickorees.com/image/MadeontheMoonGizaBandanaBlack_L4.jpg"
			],[
			"http://media2.hickorees.com/image/MadeontheMoonGizaBandanaRed_L1.jpg",
			"http://media2.hickorees.com/image/MadeontheMoonGizaBandanaRed_L2.jpg",
			"http://media2.hickorees.com/image/MadeontheMoonGizaBandanaRed_L3.jpg",
			"http://media2.hickorees.com/image/MadeontheMoonGizaBandanaRed_L4.jpg"
			],[
			"http://media2.hickorees.com/image/MadeontheMoonGizaBandanaNavy_L1.jpg",
			"http://media2.hickorees.com/image/MadeontheMoonGizaBandanaNavy_L2.jpg",
			"http://media2.hickorees.com/image/MadeontheMoonGizaBandanaNavy_L3.jpg",
			"http://media2.hickorees.com/image/MadeontheMoonGizaBandanaNavy_L4.jpg"
			]
		],
	// add another accessories category here !!!
	rings : [['urls'],['urls']]
	}  
};
				