$("#button1").on("click", function() {
	$("#box").animate({height:"+=35px",	width:"+=35px"}, "fast");
})

document.getElementById("button2").addEventListener("click", function(){
    document.getElementById("box").setAttribute("style","height:150px; width:150px; background-color:blue; margin:25px")
})


$("#button3").on("click", function() {
	$("#box").animate({height:"-=35px",	width:"-=35px"}, "fast");
})

document.getElementById("button4").addEventListener("click", function(){
    document.getElementById("box").setAttribute("style","height:150px; width:150px; background-color:Orange; margin:25px")
})

