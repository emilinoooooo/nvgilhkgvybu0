function startClassification(){
navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/QcG_Lk2Ly/model.json', modelReady);
}