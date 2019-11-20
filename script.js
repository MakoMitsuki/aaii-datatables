function filter () {
	// function to filter the news list based on entries from all three filters
	var h = $("#holdings").val();
	var s = $("#newssource").val();
	var i = $("#myInput").val();

	$("#myList li").filter(function() {
	    $(this).toggle(
	    	($(this).data("holdings") == h || h == "") &&
	    	($(this).data("newssource") == s || s == "") &&
	    	($(this).text().toLowerCase().indexOf(i) > -1)
	   	);
	});
}

$(document).ready(function () {

  	$("#holdings").on("change", function() {
	    filter();
  	});

  	$("#newssource").on("change", function() {
	    filter();
  	});

  	$("#myInput").on("keyup", function() {
	    filter();
  	});
});