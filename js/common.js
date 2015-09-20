$(document).ready(function() {

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#hidden_form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#hidden_form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//slider owl
	$("#owl-news").owlCarousel({
		navigationText : false,
		navigation : true, // Show next and prev buttons
		pagination: true,
		singleItem : true,
		items : 1,
		itemsDesktop: false,
		itemsDesktopSmall : false,
		itemsTablet: false,
		itemsMobile : false
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	//popup
	$(".popup").magnificPopup({type:"image"});
	$('.popup_c').magnificPopup({});

	//bxslider
	$('.bxslider').bxSlider({
		pagerCustom: '#bx-pager'
	});
	
});

