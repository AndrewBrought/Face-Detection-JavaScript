const video = document.getElementById('video');

// This is linking the const "video" with the id 'video' that we established in the body of our html...that will allow us to send our dynamically created html to a specific location in our html


//This will allow us to hook up our webcam to our video element
    function startVideo() {

        navigator.mediaDevices.getUserMedia(
            { video: {} },
            stream => video.srcObject = stream,
            err => console.error(err) //This is an error-log
        )
    }
// What's going on with the function above:
//This is how we target our native devices (cameras, audio, etc) on the web browser.  It takes an object as the first parameter - which states what media element we're targeting { video: {} }
// Then we add a method underneath  - stream - this is what's coming from our webcam, and we want to set that as the source of our video...SOo, we set the video src object equal to that stream
//Then we're adding an error function so that if we do get an error we can log it and see what's going on

startVideo(); //We're activating the function here by calling it globally