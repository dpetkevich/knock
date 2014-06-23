angular.module('starter.controllers', [])

.controller('imageController', function($scope) {

$scope.init = function(){

	    //image capture events
	    //$('#cameraButton').hammer({}).on("tap",cameraGetPicture)
 		cameraGetPicture()

	    function cameraGetPicture() {
	        navigator.camera.getPicture(captureSuccess, captureError, {  quality: 100, destinationType: Camera.DestinationType.DATA_URL, targetWidth: 100, targetHeight: 100 });
	    }

	    function captureSuccess(imageData) {
	        var image = document.getElementById('myImage');
	        image.style.display = 'block';

   		    image.src =  "data:image/jpeg;base64," + imageData;
	        

	      //  var webView = new steroids.views.WebView("http://localhost/views/home/sendTo.html");
	      //  steroids.layers.push({view: webView, navigationBar: false});
	    }


	    function captureError(error) {
	        var msg = 'An error occurred during capture: ' + error.code;
	        navigator.notification.alert(msg, null, 'Uh oh!');
	    }
};

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() { 

		//$scope.$on('$viewContentLoaded', function () {
		  	$scope.init();
		//});
	};

});