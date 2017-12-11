button = document.querySelector("#changeColorButton");
body = document.querySelector("body");

button.onclick = function()
	{
		if(body.style.background == "white"){
			body.style.background = "black";
		} else {
			body.style.background = "white";
		}
	};
