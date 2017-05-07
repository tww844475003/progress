define(function() {
	'use strict';
	;(function($,window,document,undefined) {
		$.fn.progress = function(options) {
			var settings = $.extend({},{
				default: 10
			},options);

			return this.each(function() {
				var progress_w = $(this).width();
				$(this).find('.jd').animate({'width':settings.default},1000);
				$(this).find('span').html((settings.default/progress_w)*100 + '%');
			})
		}
	})(jQuery,window,document);
});