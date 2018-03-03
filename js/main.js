jQuery(document).ready( function($) {

	// set variables
	var recipe;
	var card_number;
	var ghost_content;
	var ul;

	$.ajax({
	    url: "http://isleanddine.com/data.json",
	    // url: "data.json",
	    headers: {
	    	'Cache-Control': 'no-cache, no-store, must-revalidate',
	    	'Pragma': 'no-cache',
	    	'Expires': '0'
	    },
	    type: "GET",
	    dataType: "JSON",
	    success: function (data) {
	    	for (var i = 0; i < data.bites.length; i++) {
		        var thumbnail = data.bites[i].thumbURL;
		        var title = data.bites[i].title;
		        var description = data.bites[i].description;
		        var link = data.bites[i].link;

	            recipe = '<div class="recipe flip-container" ontouchstart="this.classList.toggle("hover");">';
				recipe += '<div class="flipper">';
				recipe += '<div class="front">';
				recipe += '<div class="holder">';
				recipe += '<span class="thumbnail item"><img id="thumbnail" src="' + thumbnail + '" alt="' + title + '"></span>';
				recipe += '<h2 id="title" class="title item">' + title + '</h2>';
				recipe += '<p id="description" class="description item">' + description + '</p>';
				recipe += '<p class="item"><a class="btn btn-default" href="#" role="button">View recipe</a></p>';
				recipe += '</div>';
				recipe += '</div>';

				recipe += '<div class="back">';
				recipe += '<div class="holder">';
				recipe += '<h2 id="back-title" class="back-title item">' + title + '</h2>';
				recipe += '<hr class="item">';
			 	
				recipe += '<p class="item"><a id="link" class="back btn btn-default" href="' + link + '" role="button" target="_blank">View full recipe</a></p>';
				recipe += '<p class="hashtag item">#bajanbites</p>';
				recipe += '</div>';
				recipe += '</div>';
				recipe += '</div>';
				recipe += '</div>';

				$("#container").append(recipe);

				function list() {
					ul = $("<ul id='ingredients' class='ingredients item'>").insertBefore('.back.btn-default');
			    	$(data.bites[i].ingredients).each(function(index, item) {
			    		
				        	ul.append(
				        		$(document.createElement('li')).text(item)
				        	);
			        	});
			        $('#ingredients li').last().after('<li>+ more…</li>');
				}
				list();
	        }

	        card_number = $('.recipe').length;
			// console.log( card_number );

			var next_card = card_number + 1;

			if (card_number < 1) {
				ghost_content = "Check back later for bites!";
			} else {
				ghost_content = "Check back tomorrow for bite " + next_card;
			}

			if (card_number < 6) {
				var ghost = '<div id="ghost" class="recipe flip-container" ontouchstart="this.classList.toggle("hover");"><div class=""><div class="front"><div class="ghost holder"><span>' + ghost_content + '</span></div></div></div></div>';
				$('#container').append(ghost);
			}
	    },
	    cache: false,
	    error: function() {
	        var ghost = '<div id="ghost" class="recipe flip-container" ontouchstart="this.classList.toggle("hover");"><div class=""><div class="front"><div class="ghost holder"><span>Oops! Something went wrong. Please check back later.</span></div></div></div></div>';
			$('#container').append(ghost);
	    }
	});
});