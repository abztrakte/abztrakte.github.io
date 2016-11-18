$(document).ready(function() {
	$(".js-click").on("click", function(e) {
		e.preventDefault();
		$(this).hide(1000);
		$(this).show(2000);
	})

});

new WOW().init();