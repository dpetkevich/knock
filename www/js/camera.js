document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

    //image capture events
    //$('#cameraButton').hammer({}).on("tap",cameraGetPicture)

    function cameraGetPicture() {
        navigator.camera.getPicture(captureSuccess, captureError);
    }

    function captureSuccess(mediaFiles) {
        var i, len;
        
        var webView = new steroids.views.WebView("http://localhost/views/home/sendTo.html");
        steroids.layers.push({view: webView, navigationBar: false});
    }


    function captureError(error) {
        var msg = 'An error occurred during capture: ' + error.code;
        navigator.notification.alert(msg, null, 'Uh oh!');
    }

   

}; //end device ready
