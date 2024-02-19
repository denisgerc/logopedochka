// start jQuery
$(document).ready(function () {

	/**
	 * Tabs JQuery
	 */
	$(function () {
			$('.tab-content').hide();
			$('.tab-content:first').show();
			$('.tabs-nav .wp-block-button__link').click(function () {
					let currentTab = $(this).attr('href');
					$('.tab-content').hide();
					$(currentTab).fadeIn();
					return false;
			});
		
	});

	/**
	 * Accordion JQuery
	 */
	$(function () {
			$('.trigger').css({'cursor': 'pointer'});
			$('.content').hide();
			$('.trigger').click(function () {
					$(this).next('.content').slideToggle('fast');
			});
	});

});

// start JS
document.addEventListener('DOMContentLoaded', () => {

});