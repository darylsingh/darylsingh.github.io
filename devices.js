var canvas;
var score;
var button;
var initialInput;
var submitButton;
var database;

var devOne = document.getElementById("devOne");
var submitBtn = document.getElementById("submitBtn");
var device1= document.getElementById("item1");
var device2= document.getElementById("item2");
var device3= document.getElementById("item3");
var device4= document.getElementById("item4");
var device5= document.getElementById("item5");
var device6= document.getElementById("item6");
var device7= document.getElementById("item7");
var device8= document.getElementById("item8");
var device9= document.getElementById("item9");
var device10= document.getElementById("item10");
var device11= document.getElementById("item11");
var device12= document.getElementById("item12");
var device13= document.getElementById("item13");
var device14= document.getElementById("item14");
var device15= document.getElementById("item15");
var device16= document.getElementById("item16");

var item1PrintRef = firebase.database().ref().child("devices").child("1");
var item2PrintRef = firebase.database().ref().child("devices").child("2");
var item3PrintRef = firebase.database().ref().child("devices").child("3");
var item4PrintRef = firebase.database().ref().child("devices").child("4");
var item5PrintRef = firebase.database().ref().child("devices").child("5");
var item6PrintRef = firebase.database().ref().child("devices").child("6");
var item7PrintRef = firebase.database().ref().child("devices").child("7");
var item8PrintRef = firebase.database().ref().child("devices").child("8");
var item9PrintRef = firebase.database().ref().child("devices").child("9");
var item10PrintRef = firebase.database().ref().child("devices").child("10");
var item11PrintRef = firebase.database().ref().child("devices").child("11");
var item12PrintRef = firebase.database().ref().child("devices").child("12");
var item13PrintRef = firebase.database().ref().child("devices").child("13");
var item14PrintRef = firebase.database().ref().child("devices").child("14");
var item15PrintRef = firebase.database().ref().child("devices").child("15");
var item16PrintRef = firebase.database().ref().child("devices").child("16");
//var itemPrintRef = "uh";


item1PrintRef.on('value', function(datasnapshot){
  item1.innerText = datasnapshot.val();
});

item2PrintRef.on('value', function(datasnapshot){
  item2.innerText = datasnapshot.val();
});

item3PrintRef.on('value', function(datasnapshot){
  item3.innerText = datasnapshot.val();
});

item4PrintRef.on('value', function(datasnapshot){
  item4.innerText = datasnapshot.val();
});

item5PrintRef.on('value', function(datasnapshot){
  item5.innerText = datasnapshot.val();
});

item6PrintRef.on('value', function(datasnapshot){
  item6.innerText = datasnapshot.val();
});

item7PrintRef.on('value', function(datasnapshot){
  item7.innerText = datasnapshot.val();
});

item8PrintRef.on('value', function(datasnapshot){
  item8.innerText = datasnapshot.val();
});

item9PrintRef.on('value', function(datasnapshot){
  item9.innerText = datasnapshot.val();
});

item10PrintRef.on('value', function(datasnapshot){
  item10.innerText = datasnapshot.val();
});

item11PrintRef.on('value', function(datasnapshot){
  item11.innerText = datasnapshot.val();
});

item12PrintRef.on('value', function(datasnapshot){
  item12.innerText = datasnapshot.val();
});

item13PrintRef.on('value', function(datasnapshot){
  item13.innerText = datasnapshot.val();
});

item14PrintRef.on('value', function(datasnapshot){
  item14.innerText = datasnapshot.val();
});

item15PrintRef.on('value', function(datasnapshot){
  item15.innerText = datasnapshot.val();
});

item16PrintRef.on('value', function(datasnapshot){
  item16.innerText = datasnapshot.val();
});




var database = firebase.database();

var ref = database.ref('devices');
ref.on('value', gotData, errData);

//print to console
function gotData(data){
//console.log(data.val());
var devices = data.val();
var keys = Object.keys(devices);
console.log(keys);
var namelist= []
for(var i = 0; i<keys.length;i++){
  var k = keys[i];
  var name = devices[k].name;
  var status = devices[k].status;
  console.log(name, status);
  //document.write(name);
  //var li = document.createElement('li', name + ': ' + status);
  //li.parent("namelist");
  namelist.push(name);




  }
  console.log(namelist);
}
var namText = document.getElementById("devNames").value = namelist;

//print errors
function errData(err){
  console.log('error!')
  console.log(err);
}



function submitClick(){

  console.log("sent.")
  var firebaseRef = firebase.database().ref();
  var messageText = devOne.value;
  firebaseRef.push().set(messageText);
}
