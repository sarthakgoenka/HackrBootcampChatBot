var questionNum = 0;
var spent=0;
var balance=1000;
var received=0;

function show(){
return balance;
}

function spentMoney(spent){
return balance-=spent;
}

function receivedMoney(received){
// var x  = balance + received;
return balance+=parseInt(received);
}

var question = '<h1>Hi! How can I help You?</h1>';	

var output = document.getElementById('output');	
output.innerHTML = question;	

function bot() { 
var input = document.getElementById("input").value;
    // console.log(input);

var setOfcommand =input.split(" ");
// console.log(setOfcommand);
var command = setOfcommand[0]
console.log(command);
if(command == "spent"){
spent = setOfcommand[1];
console.log('spent');
var finalBalance = spentMoney(spent);
output.innerHTML = '<h1>Your balance left is' + (finalBalance) + '</h1>';
    document.getElementById("input").value = "";   

    }

if(command == "received"){
received = setOfcommand[1];
var finalBalance = receivedMoney(received);
output.innerHTML = '<h1>Your balance left is' + (finalBalance) + '</h1>';
    document.getElementById("input").value = ""; 
}
if(command == "show"){
var finalBalance = show();
output.innerHTML = '<h1>Your balance left is' + (finalBalance) + '</h1>';
    document.getElementById("input").value = ""; 
}

}

$(document).keypress(function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
  if (keycode == '13') {
    //   alert("afdf");
    bot();	
  }
});
