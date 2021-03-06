// 21 Dez 2012, 4:42
;(function ($, window, document, undefined) {
	'use strict';
	({
		animateScroll : function () {
			$("#nav").find('.nav-link').on('click', function (event) {

				var $this = $(this),
					$htmlBody = $('html, body'),
					linkTarget = $this.attr('href'),
					offSetTop;

				// If not start with #, stop here!
				if (linkTarget[0] !== '#') {
					return false;
				}

				event.preventDefault();

				// Get distance of top
				offSetTop = $(linkTarget).offset().top;

				// Animate the scroll
				$htmlBody.stop().animate({scrollTop : offSetTop}, function () {
					location.hash = linkTarget;
				});
			});
		},

		init : function () {
			var that = this;

			$(function () {
				that.animateScroll();
			});
		}
	}).init();
}(jQuery, window, document));

$(function() {
	// members
	$('.member-photo').on('click', function() {
		var currentInfo = $(this).parent().find('.member-info');
		$('.member-info:visible').not(currentInfo).hide();
		currentInfo.toggle();
	});
	$('.close').on('click', function() {
		$(this).parent().hide();
	});

	//media
	$('.media-tab').on('click', function() {
		var currentTab = $('.media-tab.active').not(this);
		if (currentTab.length) {
			currentTab.removeClass('active');
			$('#' + currentTab.attr('data-tab')).hide();
		}
		$(this).addClass("active");
		$('#' + $(this).attr('data-tab')).show();
	});

	$('.media-tab-photos').trigger('click');

});