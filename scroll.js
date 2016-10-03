// JavaScript Document


window.onload=function(){

	top();
	page1();
	page2();
	page3();
	page4();
	page5();
	page6();
	}
	
function top(){
	var obtn=document.getElementById("picb");
	var timer=null;
	obtn.onclick=function(){
		timer=setInterval(function(){
		var osTop=document.documentElement.scrollTop||document.body.scrollTop;
		document.body.scrollTop-=200;
		document.documentElement.scrollTop-=200;
		if(osTop==0){
			clearInterval(timer);
			}
		  },30)
		}
	}
	
function page1(){
	var click1=document.getElementById("click11");
	var timer=null;
	click1.onclick=function(){
		timer=setInterval(function(){
		var osTop=document.documentElement.scrollTop||document.body.scrollTop;
		document.body.scrollTop+=100;
		document.documentElement.scrollTop+=100;
		if(osTop>=600){
			clearInterval(timer);
			}
		  },200)
		}
	}
function page2(){
	var click1=document.getElementById("click22");
	var timer=null;
	click1.onclick=function(){
		timer=setInterval(function(){
		var osTop=document.documentElement.scrollTop||document.body.scrollTop;
		document.body.scrollTop+=100;
		document.documentElement.scrollTop+=100;
		if(osTop>=1300){
			clearInterval(timer);
			}
		  },200)
		}
	}
function page3(){
	var click1=document.getElementById("click33");
	var timer=null;
	click1.onclick=function(){
		timer=setInterval(function(){
		var osTop=document.documentElement.scrollTop||document.body.scrollTop;
		document.body.scrollTop+=100;
		document.documentElement.scrollTop+=100;
		if(osTop>=2000){
			clearInterval(timer);
			}
		  },200)
		}
	}
function page4(){
	var click1=document.getElementById("click44");
	var timer=null;
	click1.onclick=function(){
		timer=setInterval(function(){
		var osTop=document.documentElement.scrollTop||document.body.scrollTop;
		document.body.scrollTop+=100;
		document.documentElement.scrollTop+=100;
		if(osTop>=2700){
			clearInterval(timer);
			}
		  },200)
		}
	}
function page5(){
	var click1=document.getElementById("click55");
	var timer=null;
	click1.onclick=function(){
		timer=setInterval(function(){
		var osTop=document.documentElement.scrollTop||document.body.scrollTop;
		document.body.scrollTop+=100;
		document.documentElement.scrollTop+=100;
		if(osTop>=3400){
			clearInterval(timer);
			}
		  },200)
		}
	}
function page6(){
	var click1=document.getElementById("click66");
	var timer=null;
	click1.onclick=function(){
		timer=setInterval(function(){
		var osTop=document.documentElement.scrollTop||document.body.scrollTop;
		document.body.scrollTop+=100;
		document.documentElement.scrollTop+=100;
		if(osTop>=4100){
			clearInterval(timer);
			}
		  },200)
		}
	}