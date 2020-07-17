function res(){
   				var width_map = $('.map').width();
				$('.map').height(width_map/1.327);
			}
			res();

			$(window).resize(function() {
				res();
				location.reload();
			});
			var getRandomTarget = function (size) {
				return Math.floor(Math.random() * size);
			};
			var sizing = function () {
				console.log('width: ' + width);
				console.log('height: ' + height);
				console.log(target);
			};
						
			var width = $('.map').width();
			var height = $('.map').height();
			var target = {
				x: getRandomTarget(width),
				y: getRandomTarget(height)
			};
			sizing ();
			$(window).resize(function() {
				sizing ();
			});
			var clicks = 0;
			var getDistance = function (event, target) {
 				var diffX = event.offsetX - target.x;
 				var diffY = event.offsetY - target.y;
 				return Math.sqrt((diffX * diffX) + (diffY * diffY));
			};
			var getDistanceHint = function (distance) {
 				if (distance < 10) {
 				return "Обожжешься!";
 				} else if (distance < 20) {
 				return "Очень горячо";
 				} else if (distance < 40) {
 				return "Горячо";
 				} else if (distance < 80) {
 				return "Тепло";
 				} else if (distance < 160) {
 				return "Холодно";
 				} else if (distance < 320) {
 				return "Очень холодно";
 				} else {
 				return "Замерзнешь!";
 				}
			};
			$('.map').click (function(event){
    			clicks++;
    			var distance = getDistance(event, target);
				var distanceHint = getDistanceHint(distance);
				$("#resultInfo").text(distanceHint);
				$("#clicks").text(clicks);
				$("#dist").text(distance);
				if (distance < 8) {
 					alert("Клад найден! Сделано кликов: " + clicks);
				}
			});
