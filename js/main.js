$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		navText : ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
		responsiveClass:true,
		dots:false,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:2,
				nav:true
			}
		}

	});

	$(function () {
		$( "#datepicker" ).datepicker({
			format: 'LT',
			pickDate: false
		});

		$('.timepicker').wickedpicker({
			//now: "12:35", //hh:mm 24 hour format only, defaults to current time
			twentyFour: true,  //Display 24 hour format, defaults to false
			upArrow: 'wickedpicker__controls__control-up',  //The up arrow class selector to use, for custom CSS
			downArrow: 'wickedpicker__controls__control-down', //The down arrow class selector to use, for custom CSS
			close: 'wickedpicker__close', //The close class selector to use, for custom CSS
			hoverState: 'hover-state', //The hover state class to use, for custom CSS
			title: 'Reservation time', //The Wickedpicker's title,
			showSeconds: false, //Whether or not to show seconds,
			timeSeparator: ' : ', // The string to put in between hours and minutes (and seconds)
			secondsInterval: 1, //Change interval for seconds, defaults to 1,
			minutesInterval: 1, //Change interval for minutes, defaults to 1
			beforeShow: null, //A function to be called before the Wickedpicker is shown
			afterShow: null, //A function to be called after the Wickedpicker is closed/hidden
			show: null, //A function to be called when the Wickedpicker is shown
			clearable: false, //Make the picker's input clearable (has clickable "x")
		});
	});

});