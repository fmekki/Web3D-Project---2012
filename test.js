
	$(document).ready(function(){
	
		$('#red').click(function(){
			var test1 = $('#iframecontent').contents();
			$(test1).contents().find("#Car").attr("diffuseColor","0.4,0,0");

		});
		$('#orange').click(function(){
			//console.log("sadsad");
			var test1 = $('#iframecontent').contents();
			$(test1).contents().find("#Car").attr("diffuseColor","1.5,0.5,0");

		});
		$('#yellow').click(function(){
			console.log("sadsad");
			var test1 = $('#iframecontent').contents();
			$(test1).contents().find("#Car").attr("diffuseColor","1.5,1.02,0");

		});
		$('#green').click(function(){
			var test1 = $('#iframecontent').contents();
			$(test1).contents().find("#Car").attr("diffuseColor","0,0.4,0");
		});
		$('#cyan').click(function(){
			var test1 = $('#iframecontent').contents();
			$(test1).contents().find("#Car").attr("diffuseColor","0,1,1");
		});
		$('#blue').click(function(){
			var test1 = $('#iframecontent').contents();
			$(test1).contents().find("#Car").attr("diffuseColor","0,0,0.4");
		});
		$('#purple').click(function(){
			var test1 = $('#iframecontent').contents();
			$(test1).contents().find("#Car").attr("diffuseColor","0.8,0,1.5");
		});
		$('#pink').click(function(){
			var test1 = $('#iframecontent').contents();
			$(test1).contents().find("#Car").attr("diffuseColor","1,0,1");
		});
// -------------------------//
		$('#redp').click(function(){
			var test1 = $('#iframecontent').contents();
			$(test1).contents().find("#Car").attr("specularColor","0.4,0,0");

		});
		$('#orangep').click(function(){
			//console.log("sadsad");
			var test1 = $('#iframecontent').contents();
			$(test1).contents().find("#Car").attr("specularColor","0.9,0.25,0");

		});
		$('#yellowp').click(function(){
			console.log("sadsad");
			var test1 = $('#iframecontent').contents();
			$(test1).contents().find("#Car").attr("specularColor","0.7,0.4,0");

		});
		$('#greenp').click(function(){
			var test1 = $('#iframecontent').contents();
			$(test1).contents().find("#Car").attr("specularColor","0,0.4,0");
		});
		$('#cyanp').click(function(){
			var test1 = $('#iframecontent').contents();
			$(test1).contents().find("#Car").attr("specularColor","0,0.5,0.5");
		});
		$('#bluep').click(function(){
			var test1 = $('#iframecontent').contents();
			$(test1).contents().find("#Car").attr("specularColor","0,0,0.4");
		});
		$('#purplep').click(function(){
			var test1 = $('#iframecontent').contents();
			$(test1).contents().find("#Car").attr("specularColor","0.5,0,0.9");
		});
		$('#pinkp').click(function(){
			var test1 = $('#iframecontent').contents();
			$(test1).contents().find("#Car").attr("specularColor","0.4,0,0.4");
		});

//------------------------------------------------------//
		$('#startAnim').click(function(){

			var test1 = $('#iframecontent').contents();
			$(test1).contents().find("#Car-TIMER").attr("loop","true");
			console.log(test1);


		});
		$('#revert').click(function(){

			var test1 = $('#iframecontent').contents();
			$(test1).contents().find("#Car").attr("diffuseColor","0.2,0.2,0.2");
			$(test1).contents().find("#Car").attr("specularColor","0.045,0.045,0.045");

		});
		$('#car_view_1').click(function(){
			console.log("work");
			var test1 = $('#iframecontent').contents();
			$(test1).contents().find("#mainCam").attr("set_bind","true");

		});
		$('#car_view_2').click(function(){
			console.log("work");
			var test1 = $('#iframecontent').contents();
			$(test1).contents().find("#topCam").attr("set_bind","true");
			console.log(test1);
			

		});
		$('#car_view_3').click(function(){
			console.log("work");
			var test1 = $('#iframecontent').contents();
			$(test1).contents().find("#SideCam").attr("set_bind","true");

		});
		$('#galleryitem_1').click(function(){
			console.log("work");
			var testid = document.getElementById("iframecontent");
			testid.setAttribute("src","car1.html");
			document.getElementById("car_outer").style.display='block';
			document.getElementById("description").style.display='none';
			document.getElementById("description2").style.display='none';
		});
		$('#galleryitem_2').click(function(){
			console.log("work");
			var testid = document.getElementById("iframecontent");
			testid.setAttribute("src","car2.html");
			document.getElementById("car_outer").style.display='none';
			document.getElementById("description").style.display='block';
			document.getElementById("description2").style.display='none';
		});
		$('#galleryitem_3').click(function(){
			console.log("work");
			var testid = document.getElementById("iframecontent");
			testid.setAttribute("src","car3.html");
			document.getElementById("car_outer").style.display='none';
			document.getElementById("description").style.display='none';
			document.getElementById("description2").style.display='block';
		});

	});


function changeRevert(){
	var testid = document.getElementById("side001TEST");
	testid.setAttribute("diffuseColor","0,0,0");
}

function changeBlue(){
	var testid = document.getElementById("side001TEST");
	testid.setAttribute("diffuseColor","0,0,10");

}

function switchmethod(){
	console.log("sadsad");
	var testid = document.getElementById("iframecontent");
	testid.setAttribute("src","car2.html");
	document.getElementById("car_outer").style.display='none';
	document.getElementById("description").style.display='block';
}
function switchmethod2(){
	var testid = document.getElementById("iframecontent");
	testid.setAttribute("src","car2.html");
	document.getElementById("car_outer").style.display='none';
	document.getElementById("description").style.display='block';
}
function switchmethod3(){
	var testid = document.getElementById("iframecontent");
	testid.setAttribute("src","car3.html");
	document.getElementById("car_outer").style.display='none';
	document.getElementById("description").style.display='block';
}


function turnfirston(){
	console.log("switcheroo");
	var testid = document.getElementById("iframecontent");
	testid.setAttribute("src","car1.html");
	document.getElementById("car_outer").style.display='block';
	document.getElementById("description").style.display='none';
	document.getElementById("description2").style.display='none';
}
function turnsecondon(){
	console.log("switcheroo");
	var testid = document.getElementById("iframecontent");
	testid.setAttribute("src","car2.html");
	document.getElementById("car_outer").style.display='none';
	document.getElementById("description").style.display='block';
	document.getElementById("description2").style.display='none';
}
function turnthirdon(){
	console.log("switcheroo");
	var testid = document.getElementById("iframecontent");
	testid.setAttribute("src","car2.html");
	document.getElementById("car_outer").style.display='none';
	document.getElementById("description").style.display='none';
	document.getElementById("description2").style.display='block';
}

turnfirston

	

			
			
			

	




	

