// // Giphy Variables
// var gif = {
// // Main Array
// 	topicsArr: = ['dogs', 'cats', 'farts', 'birds', 'robots', ]
// 	// image state

// // }

var queryTerm = "";
var authKey = "dc6zaTOxFJmzC"
// var queryURL = "http://api.giphy.com/v1/gifs/search?q=";
var keyAPI = "&api_key=dc6zaTOxFJmzC&limit=10";
var butt;
var queryURLBase = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=" + authKey;
var queryURLCombo = "http://api.giphy.com/v1/gifs/search?q=" + queryTerm + "&api_key=" + authKey;


// #############################
// METHODS FUNCTIONS CALLS
// #############################
$('button').on('click', function() {
	var queryTerm = $(this).data("search");
			console.log("----------------------------");
			console.log(queryTerm);
			console.log("----------------------------");

	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + queryTerm + keyAPI;
			console.log("#############################");
			console.log(queryURL);
			console.log("#############################");
	// queryTerm= $('#search').val().trim();

	$.ajax({url: queryURL, method: "GET"})
	.done(function(response) {

			console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
			console.log(response);
			console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
	for(var i = 0; i < response.data.length; i++){		
	$('#GIFarea').prepend("<p>Rating: "+response.data[i].rating+"</p>")
	$('#GIFarea').prepend("<img src ='" + response.data[i].images.downsized.url + "'>");
		}
		})
	})



















