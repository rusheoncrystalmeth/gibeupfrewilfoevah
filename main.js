Webcam.set({
    width:350,
    hieght:300,
    image_format : 'png',
    png_quality:90   
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
    {
        Webcam.snap(function(data_uri) {
            document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
        }

        console.log('ml5 version:', ml5.version);

        classifier = ml5.imageClassifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/4nXkKmP4D/model.json',modelLoaded);

        function modelLoaded() {
            console.log('Model Loaded!');
        }

        function check()
        {
            img = document.getElementById('catured_image');
            classifier.classify(img, gotResult);
        }

                function gotResult(error, reults) {
                    if (error) {
                        console.error(error);
                    } else {
                        console.log(results);
                        document.getElementById("result_object_name").innerHTML = results[0].label;
                        gesture = results[0].label;
                        toSpeak = "";
                        if(gesture == "VICTORY")
                        {
                            toSpeak = "that was the marveloues victory";
                            document.getElementById("result_object_gesture_icon").innerHTML = "&#9996;";
                        }
        
                         else if(gesture == "AMAZING")
                        {
                            toSpeak = "this is looking amazing";
                            document.getElementById("result_object_gesture_icon").innerHTML = "&#128076;";
                        }
        
                        else if(gesture == "THUMBS UP")
                        {
                            toSpeak = "all the best";
                            document.getElementById("result_object_gesture_icon").innerHTML = "&#128077;";
                        }

                        speak();
        
                        }

                    }

                    function speak()
                    {
                        var synth = window.speechSynthesis;
                        speak_data = toSpeak;
                        var utterThis = new SpeechSynthesisUtterance(speak_data);
                        synth.speak(utterThis);
                         }