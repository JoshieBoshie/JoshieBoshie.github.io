// $(document).ready(function() {
// 	// // YOUR CODE HERE
//
//   $(".outfit-selection").click(function() {
//     $('.outfit').hide();
//     $("#o" + this.id.slice(1)).show();
//
//   })
//   $(".button").click(function() {
//     $('.outfit').fadeOut();
//   })
// });

// referenced from https://pudding.cool/process/how-to-implement-scrollytelling/
import TypeIt from 'typeit';
var waypoints = triggerEls.map(function(el) {
	var step = +el.getAttribute('data-step')

	return new Waypoint({
		element: el,
		handler: function(direction) {
			var nextStep = direction === 'down' ? step : Math.max(0, step - 1)
			graphic.update(nextStep)
		},
		offset: '50%',
	})
})

var enterWaypoint = new Waypoint({
	element: graphicEl,
	handler: function(direction) {
		var fixed = direction === 'down'
		var bottom = false
		toggle(fixed, bottom)
	},
})

var exitWaypoint = new Waypoint({
	element: graphicEl,
	handler: function(direction) {
		var fixed = direction === 'up'
		var bottom = !fixed
		toggle(fixed, bottom)
	},
	offset: 'bottom-in-view',
})

new TypeIt('#example1', {
  strings: 'This is a simple string.',
  speed: 50,
  autoStart: false
})
