
$(function(){



	// y-Axis ...............................

		var suits = {
			'clubs'    : 0,
			'spades'   : '-98px',
			'hearts'   : '-196px',
			'diamonds' : '-294px'
		}

		// Click image

		$("img").on("click", function() {
			var $this = $(this);
	
			// y-Axis	
			var suit = $this.data('suit');



	// x-Axis ................................

		// x-Axis location (index)
		var rank = $this.data('rank');

		// x-Axis location (index+1)
		rankNumber = (parseInt(rank) + 1) % 13;
		
		// update the x-Axis
		$this.data('rank', rankNumber);

		// Calculate x-Axis
		var ranks = (-73 * rankNumber).toString() + 'px';
		$this.css('background-position', ranks + ' ' + suits[suit])

	});

}) 