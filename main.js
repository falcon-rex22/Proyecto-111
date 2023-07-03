Prediccion = "";
Prediccion2 = "";

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
})

Camera = document.getElementById("Camera");

Webcam.attach("#Camera")

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("Resultado").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}


  console.log('ml5 version:', ml5.version);
 
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/n9yl7Vzqh/model.json',modelLoaded);


  function modelLoaded() {
    console.log('Model Loaded!');
  }
 
function speak(){
  var synth = window.speechSynthesis;
 
}
