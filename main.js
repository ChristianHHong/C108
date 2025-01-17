function startClassification(){
    navigator.mediaDevices.getUserMedia({ audtio: true});
    ml5.soundClassifier(src="https://teachablemachine.withgoogle.com/models/[...]")
}
function modelReady(){
    classifier.classify( gotResults)
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
      } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
    
        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    
        img = document.getElementById('cat') 
        img1 = document.getElementById('dog')
        img2 = document.getElementById('ear')
    
        if (results[0].label == "Background noise") {
          img.src = 'ear.png';
        } else if (results[0].label == "Barking") {
          img.src = 'dog.gif';
        } else if (results[0].label == "Meowing") {
          img.src = 'cat.gif';
        }else{
    }
      }
    }