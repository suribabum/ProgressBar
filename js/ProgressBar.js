function myFun(selectOption){
	var btn='';
		if(selectOption=="progressBar1"){	
			btn = "<button onclick='plusTen(progressBar1,10,label)'>+10</button>"+
			"<button onclick='minusTen(progressBar1,-10,label)'>-10</button>"+
			"<button onclick='plusTentyFive(progressBar1,25,label)'>+25</button>"+
			"<button onclick='minusTentyFive(progressBar1,-25,label)'>-25</button>";
		}
		else if(selectOption=="progressBar2"){
			btn = "<button onclick='plusTen(progressBar2,10,label1)'>+10</button>"+
			"<button onclick='minusTen(progressBar2,-10,label1)'>-10</button>"+
			"<button onclick='plusTentyFive(progressBar2,25,label1)'>+25</button>"+
			"<button onclick='minusTentyFive(progressBar2,-25,label1)'>-25</button>";
		}
		else if(selectOption=="progreessBar3"){
			btn = "<button onclick='plusTen(progreessBar3,10,label2)'>+10</button>"+
			"<button onclick='minusTen(progreessBar3,-10,label2)'>-10</button>"+
			"<button onclick='plusTentyFive(progreessBar3,25,label2)'>+25</button>"+
			"<button onclick='minusTentyFive(progreessBar3,-25,label2)'>-25</button>";
		}
		document.getElementById('btnId').innerHTML=btn;
	}

function plusTen(bar,btnValue,l){
	var araiNowValue=parseInt(document.getElementById(bar.id).getAttribute('aria-valuenow'));
   var currentValue=araiNowValue+btnValue;
	document.getElementById(bar.id).setAttribute('aria-valuenow',currentValue);
	document.getElementById(l.id).innerHTML=currentValue+"%";
		
	if(currentValue>100){
		document.getElementById(bar.id).style.width = "100%";
		document.getElementById(bar.id).style.background = "red";
	}
	else if(currentValue<=100){
		document.getElementById(bar.id).style.width = currentValue+"%";
		document.getElementById(bar.id).style.background = "#337ab7";	
	
	}
}
function minusTen(bar,btnValue,l){
var araiNowValue=parseInt(document.getElementById(bar.id).getAttribute('aria-valuenow'));
   var currentValue=araiNowValue+btnValue;
	if(currentValue>=0 && currentValue<=100){
		document.getElementById(bar.id).style.width = currentValue+"%";
		document.getElementById(bar.id).setAttribute('aria-valuenow',currentValue);
		document.getElementById(l.id).innerHTML=currentValue+"%";
		document.getElementById(bar.id).style.background = "#337ab7";
	}
	else if(currentValue>=100){
		document.getElementById(bar.id).style.width = currentValue+"%";
		document.getElementById(bar.id).setAttribute('aria-valuenow',currentValue);
		document.getElementById(l.id).innerHTML=currentValue+"%";
	}	
	else{
		document.getElementById(bar.id).setAttribute('aria-valuenow',0);
		document.getElementById(l.id).innerHTML="0%";
		document.getElementById(bar.id).style.width = "0%";
	}
  
}
function plusTentyFive(bar,btnValue,l){
	var araiNowValue=parseInt(document.getElementById(bar.id).getAttribute('aria-valuenow'));
   var currentValue=araiNowValue+btnValue;
	document.getElementById(bar.id).setAttribute('aria-valuenow',currentValue);
	document.getElementById(l.id).innerHTML=currentValue+"%";
		
	if(currentValue>100){
		document.getElementById(bar.id).style.width = "100%";
		document.getElementById(bar.id).style.background = "red";
	}
	else if(currentValue<=100){
		document.getElementById(bar.id).style.width = currentValue+"%";
		document.getElementById(bar.id).style.background = "#337ab7";	
	
	}
}
function minusTentyFive(bar,btnValue,l){
var araiNowValue=parseInt(document.getElementById(bar.id).getAttribute('aria-valuenow'));
   var currentValue=araiNowValue+btnValue;

	if(currentValue>=0 && currentValue<=100){
		document.getElementById(bar.id).style.width = currentValue+"%";
		document.getElementById(bar.id).setAttribute('aria-valuenow',currentValue);
		document.getElementById(l.id).innerHTML=currentValue+"%";
		document.getElementById(bar.id).style.background = "#337ab7";
	}
	else if(currentValue>=100){
		document.getElementById(bar.id).style.width = currentValue+"%";
		document.getElementById(bar.id).setAttribute('aria-valuenow',currentValue);
		document.getElementById(l.id).innerHTML=currentValue+"%";
	}	
	else{
		document.getElementById(bar.id).setAttribute('aria-valuenow',0);
		document.getElementById(l.id).innerHTML="0%";
		document.getElementById(bar.id).style.width = "0%";
	}
  
}
