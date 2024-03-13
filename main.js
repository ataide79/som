function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true, video:false});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/1GhFB6R30/model.json', { probabilityThreshold: 0.7 } ,modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}

var elafante = 0;
var tiger = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Som detectado de  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'elefante deectao - '+elafante+ ' tiger detectado - '+tiger;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('animal_image');

    if (results[0].label == "elefante") {
      img.src = 'bark.gif';
    elafante = elafante+1;
    } else if (results[0].label == "tigre") {
      img.src = 'meow.gif';
      tiger = tiger + 1;
    } else{
      img.src = 'listen.gif';
    }
  }
}
