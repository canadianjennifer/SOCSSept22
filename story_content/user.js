function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5uWRTgS8Nks":
        Script1();
        break;
      case "6jrVELR7eqQ":
        Script2();
        break;
      case "6Tc14WbXbId":
        Script3();
        break;
      case "6dZ2e2evdys":
        Script4();
        break;
      case "6iHFtmrxaIs":
        Script5();
        break;
      case "5h4vEEGlntf":
        Script6();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;
audio.load();


}

function Script2()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;
audio.pause();
audio.currentTime = 0;
}

function Script3()
{
  var player = GetPlayer();


function add_line() {
	var line = document.createElement("audio");
	var head=document.getElementsByTagName('body')[0];
	line.type = "audio/mp3";
	line.src="";
	line.id="bgSong" ;
	line.autoplay = true;
	line.loop = false;
	head.appendChild(line);
}

//We only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
	var audio = document.getElementById('bgSong');
	audio.volume = 0.5;
	player.SetVar("javascriptsLoaded",true)
}
}

function Script4()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;
audio.load();
audio.play();
}

function Script5()
{
  var player = GetPlayer();

var LearnerName = player.GetVar('LearnerName');
var LearnerEmail = player.GetVar('LearnerEmail');
var CorrectAnswer = player.GetVar('CorrectAnswer');

var formData = new FormData();
formData.append('LearnerName', LearnerName);
formData.append('LearnerEmail', LearnerEmail);
formData.append('CorrectAnswer', CorrectAnswer);


var request = new XMLHttpRequest();
request.open('POST', 'https://script.google.com/macros/s/AKfycbwH9MKCIq73QMCT3eIVeX8T8wGIbAl5XpNV9gRw9J89bwwMuzdfShV2HXUV0jXaRdQ7TA/exec');
request.send(formData);
}

function Script6()
{
  var player = GetPlayer();

var LearnerName = player.GetVar('LearnerName');
var LearnerEmail = player.GetVar('LearnerEmail');
var CorrectAnswer = player.GetVar('CorrectAnswer');

var formData = new FormData();
formData.append('LearnerName', LearnerName);
formData.append('LearnerEmail', LearnerEmail);
formData.append('CorrectAnswer', CorrectAnswer);


var request = new XMLHttpRequest();
request.open('POST', 'https://script.google.com/macros/s/AKfycbwH9MKCIq73QMCT3eIVeX8T8wGIbAl5XpNV9gRw9J89bwwMuzdfShV2HXUV0jXaRdQ7TA/exec');
request.send(formData);
}

