/** @format */

$(document).ready(function () {
	var searchIcon = $(".search-icon");
	var searchForm = $(".search-form");

	searchIcon.on("click", function (event) {
		event.preventDefault();
		event.stopPropagation();

		// Toggle the 'active' class and show/hide the search form
		searchForm.toggleClass("active");
	});

	// Prevent the click inside the form from closing it
	searchForm.on("click", function (event) {
		event.stopPropagation();
	});

	// Clicking anywhere else in the document will remove the 'active' class from the search form if present
	$(document).on("click", function () {
		if (searchForm.hasClass("active")) {
			searchForm.removeClass("active");
		}
	});
});

// Make sure to call this function when the DOM is fully loaded

// jQuery(document).ready(function ($) {
// 	// heroSlider();
// 	// runContentSliders();
// 	// runTimelineSliders();
// 	// runFAQS();
// 	// animate();
// 	// counter();
// 	// webAccessibilityTabs();
// 	// timeline();
// 	// smoothAnchors();
// 	search();
// }); /* End jQuery Ready */

/* ANCHOR LINKS */
// function smoothAnchors() {
// 	if (location.hash) {
// 		setTimeout(function () {
// 			window.scrollTo(0, 0);
// 		}, 1);
// 	}
// 	var target = $(window.location.hash);
// 	$(target).children(0).trigger("click");
// 	var target2 = window.location.hash,
// 		target2 = target2.replace("#", "");
// 	if (target2) {
// 		setTimeout(function () {
// 			target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
// 			if (target.length) {
// 				$("html, body").animate(
// 					{
// 						scrollTop: target.offset().top - 100,
// 					},
// 					1000
// 				);
// 				return false;
// 			}
// 		}, 1250);
// 	}
// }

// /* Run Timeline */
// function timeline() {
// 	$(".timeline").each(function () {
// 		$(this).find(".slick-arrow").wrapAll('<div class="timeline-bottom-arrows"/>');
// 		var nwsSlickDots = $(this).find(".slick-dots");
// 		var nwsSlickNav = $(this).find(".timeline-bottom-arrows");
// 		var nwsSlickList = $(this).find(".slick-list");
// 		$(nwsSlickDots).insertBefore(nwsSlickList);
// 		$(nwsSlickNav).insertAfter(nwsSlickList);
// 	});
// }

// /* Run Hero Slider */
// function heroSlider() {
// 	if ($(".SliderWrapper").length) {
// 		$(".SliderWrapper").slick({
// 			slide: ".slider",
// 			arrows: true,
// 			dots: false,
// 			fade: true,
// 			adaptiveHeight: true,
// 			lazyLoad: "ondemand",
// 			rows: 0,
// 			pauseOnDotsHover: true,
// 			slidesToShow: 1,
// 			slidesToScroll: 1,
// 			prevArrow:
// 				'<button class="slick-arrow slick-prev" aria-label="Previous"><em class="fas fa-angle-left">Previous</em></button>',
// 			nextArrow:
// 				'<button class="slick-arrow slick-next" aria-label="Next"><em class="fas fa-angle-right">Next</em></button>',
// 		});

// 		$(".SliderWrapper .slick-list").wrapAll("<div class='slickContainer'/>");

// 		/* Play/Pause Video */
// 		var vid = document.getElementById("loopedVideo");
// 		$(".videoControls .playButton").click(function () {
// 			$(".videoControls .playButton div").toggle();
// 			vid.paused ? vid.play() : vid.pause();
// 		});
// 	}
// }

/* Run Content Slider */
// function runContentSliders() {
// 	$(window).on("resize load", function () {
// 		if ($(".contentScrollerRow .slick-list").length === 0) {
// 			$(".contentScrollerRow").slick({
// 				dots: false,
// 				arrows: true,
// 				rows: 0,
// 				infinite: true,
// 				speed: 300,
// 				prevArrow:
// 					'<button class="slick-arrow slick-prev" aria-label="Previous"><em class="fas fa-angle-left">Previous</em></button>',
// 				nextArrow:
// 					'<button class="slick-arrow slick-next" aria-label="Next"><em class="fas fa-angle-right">Next</em></button>',
// 				mobileFirst: true,
// 				responsive: [
// 					{
// 						breakpoint: 768,
// 						settings: "unslick",
// 					},
// 				],
// 			});
// 		}
// 	});
// }

/* Run Timeline Slider */
// function runTimelineSliders() {
// 	if ($(".timeline").length) {
// 		$(".timeline .sliderwrapper").slick({
// 			slide: ".slider",
// 			arrows: true,
// 			dots: true,
// 			customPaging: function (slider, i) {
// 				return '<button class="tab">' + $(slider.$slides[i]).attr("title") + "</button>";
// 			},
// 			fade: true,
// 			adaptiveHeight: true,
// 			lazyLoad: "ondemand",
// 			rows: 0,
// 			pauseOnDotsHover: true,
// 			slidesToShow: 1,
// 			slidesToScroll: 1,
// 			prevArrow:
// 				'<button class="slick-arrow slick-prev" aria-label="Previous"><em class="fas fa-angle-left">Previous</em></button>',
// 			nextArrow:
// 				'<button class="slick-arrow slick-next" aria-label="Next"><em class="fas fa-angle-right">Next</em></button>',
// 		});
// 	}
// }

/* Animation  */
// function animate() {
// 	$(window)
// 		.on("scroll", function () {
// 			var windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
// 			var windowBottom = $(this).scrollTop() + windowHeight;
// 			$(".animateMe").each(function () {
// 				var objectBottom = $(this).offset().top;
// 				if (objectBottom < windowBottom) {
// 					$(this).addClass("visible");
// 				} else {
// 					$(this).removeClass("visible");
// 				}
// 			});
// 		})
// 		.scroll(); //invoke scroll-handler on page-load and resize
// }

/* Number Counter */
// function counter() {
//   a = 0;
//   $(window).on('scroll', function() {
//     if (a == 0 && $('.numberBox.animateMe.visible').length) {
//       $('.counter').each(function() {
//         $(this).prop('Counter', 0).animate({
//           Counter: $(this).text()
//         }, {
//           duration: 4000,
//           easing: 'swing',
//           step: function(now) {
//             $(this).text(Math.ceil(now));
//           }
//         });
//         return;
//       });
//       a = 1;
//     }
//   });
// }

// function counter() {
// 	a = 0;
// 	$(window).on("scroll", function () {
// 		if (a == 0 && $(".numberBox.animateMe.visible").length) {
// 			$(".counter").each(function (i, val) {
// 				var regex = /\D/;
// 				var prefix = regex.test(val.innerHTML.slice(0, 1)) ? val.innerHTML.slice(0, 1) : "";
// 				var suffix = regex.test(val.innerHTML.slice(val.innerHTML.length - 1))
// 					? val.innerHTML.slice(val.innerHTML.length - 1)
// 					: "";

// 				$(this)
// 					.prop("Counter", 0)
// 					.animate(
// 						{
// 							Counter: $(this).text().match(/\d+/g),
// 						},
// 						{
// 							duration: 4000,
// 							easing: "swing",
// 							step: function (now) {
// 								$(this).text(Math.ceil(now));
// 							},
// 							complete: function () {
// 								$(this).text(prefix + parseFloat($(this).text().toLocaleString()) + suffix);
// 							},
// 						}
// 					);
// 				return;
// 			});
// 			a = 1;
// 		}
// 	});
// }

// /* Toggle Funtion */
// function runFAQS() {
// 	$(".OpenAll").click(function () {
// 		if ($(this).hasClass("CloseAll")) {
// 			$(this).find("span").toggle();
// 			$(this).parent().siblings().find("a").removeClass("is-active");
// 			$(this).parent().siblings().find("a").attr("aria-expanded", "false");
// 			$(this).parent().siblings().find(".plusMinus").removeClass("is-active");
// 			$(this).parent().siblings().find(".accordionContentWrapper").slideUp();
// 			$(this).removeClass("CloseAll");
// 			$(this).addClass("OpenAll");
// 		} else {
// 			$(this).find("span").toggle();
// 			$(this).parent().siblings().find("a").addClass("is-active");
// 			$(this).parent().siblings().find("a").attr("aria-expanded", "true");
// 			$(this).parent().siblings().find(".plusMinus").addClass("is-active");
// 			$(this).parent().siblings().find(".accordionContentWrapper").slideDown();
// 			$(this).addClass("CloseAll");
// 			$(this).removeClass("OpenAll");
// 		}
// 	});

// 	$("a.accordionButton").click(function () {
// 		$(this).toggleClass("is-active");
// 		$(this).find(".plusMinus").toggleClass("is-active");
// 		$(this).next().toggleClass("is-active").slideToggle();
// 		if ($(this).hasClass("is-active")) {
// 			$(this).attr("aria-expanded", "true");
// 		} else {
// 			$(this).attr("aria-expanded", "false");
// 		}
// 	});
// 	$("a.accordionButton").keypress(function (e) {
// 		if (e.which == 13) {
// 			//Enter key pressed
// 			$(this).click(); //Trigger search button click event
// 		}
// 	});
// }

// //https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-2/tabs.html
// function webAccessibilityTabs() {
// 	$(function () {
// 		var index = 0;

// 		$(".tabbed-content").each(function () {
// 			var $tabs = $(this).find("a.tab");
// 			$tabs.bind({
// 				// on keydown,
// 				// determine which tab to select
// 				keydown: function (ev) {
// 					var LEFT_ARROW = 37;
// 					var UP_ARROW = 38;
// 					var RIGHT_ARROW = 39;
// 					var DOWN_ARROW = 40;

// 					var k = ev.which || ev.keyCode;

// 					// if the key pressed was an arrow key
// 					if (k >= LEFT_ARROW && k <= DOWN_ARROW) {
// 						// move left one tab for left and up arrows
// 						if (k == LEFT_ARROW || k == UP_ARROW) {
// 							if (index > 0) {
// 								index--;
// 							}
// 							// unless you are on the first tab,
// 							// in which case select the last tab.
// 							else {
// 								index = $tabs.length - 1;
// 							}
// 						}

// 						// move right one tab for right and down arrows
// 						else if (k == RIGHT_ARROW || k == DOWN_ARROW) {
// 							if (index < $tabs.length - 1) {
// 								index++;
// 							}
// 							// unless you're at the last tab,
// 							// in which case select the first one
// 							else {
// 								index = 0;
// 							}
// 						}

// 						// trigger a click event on the tab to move to
// 						$($tabs.get(index)).click();
// 						ev.preventDefault();
// 					}
// 				},

// 				// just make the clicked tab the selected one
// 				click: function (ev) {
// 					index = $.inArray(this, $tabs.get());
// 					setFocus();
// 					ev.preventDefault();
// 				},
// 			});

// 			var setFocus = function () {
// 				// undo tab control selected state,
// 				// and make them not selectable with the tab key
// 				// (all tabs)
// 				$tabs
// 					.attr({
// 						tabindex: "-1",
// 						"aria-selected": "false",
// 					})
// 					.removeClass("selected");

// 				// hide all tab panels.
// 				//$('.tab-panel').removeClass('current');
// 				$($($tabs).parent().parent().siblings().removeClass("current"));

// 				// make the selected tab the selected one, shift focus to it
// 				$($tabs.get(index))
// 					.attr({
// 						tabindex: "0",
// 						"aria-selected": "true",
// 					})
// 					.addClass("selected")
// 					.focus()
// 					.removeAttr("style");

// 				// handle parent <li> current class (for coloring the tabs)
// 				$($tabs.get(index)).parent().siblings().removeClass("current");
// 				$($tabs.get(index)).parent().parent().addClass("current");

// 				// add a current class also to the tab panel
// 				// controlled by the clicked tab
// 				$($($tabs.get(index)).attr("href")).addClass("current");
// 				$($($tabs.get(index)).attr("href"))
// 					.siblings()
// 					.removeClass("is-active");
// 				$($($tabs.get(index)).attr("href"))
// 					.prev()
// 					.addClass("is-active");
// 				$($($tabs.get(index)).attr("href"))
// 					.siblings()
// 					.find(".plusMinus")
// 					.removeClass("is-active");
// 				$($($tabs.get(index)).attr("href"))
// 					.prev()
// 					.find(".plusMinus")
// 					.addClass("is-active");
// 				$($($tabs.get(index)).attr("href")).removeAttr("style");
// 				$($($tabs.get(index)).attr("href"))
// 					.siblings("a")
// 					.attr("aria-expanded", "false");
// 				$($($tabs.get(index)).attr("href"))
// 					.prev("a")
// 					.attr("aria-expanded", "true");
// 			};
// 		});
// 	});

// $(window).on("resize", function () {
// 	var win = $(this); //this = window
// 	if (win.width() >= 1170) {
// 		$(".tab-panel").removeAttr("style");
// 	}
// });
// }
