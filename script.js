// Your JS goes here
function makeChecker (element){
//	element.style.paddingBottom = null;

	var prefix = element.getAttribute("id") === null ? '' : element.attributes.id.value + '-';
	console.log(prefix);
	for (var i = 0; i < 81; i++) {
		var newDiv = document.createElement("div");
		newDiv.style.width = "11.1%";
		var red = Math.floor(Math.random()*255);
		var green = Math.floor(Math.random()*255);
		var blue = Math.floor(Math.random()*255);
		newDiv.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
		newDiv.style.paddingBottom = "11.1%";
		newDiv.style.float = "left";
		var newAttri = document.createAttribute("id"); 
		newAttri.value = prefix + i;

		newDiv.setAttributeNode(newAttri);
		element.appendChild(newDiv);
		//document.body.appendChild(newDiv);
	}
};

makeChecker (document.body);

window.setInterval(function(){
	for(var i = 0; i < 81; i++){
		var box = document.getElementById(i);
		var red = Math.floor(Math.random()*255);
		var green = Math.floor(Math.random()*255);
		var blue = Math.floor(Math.random()*255);
		box.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"
		}
}, 2000);


//var insetFirstBox = document.getElementById('1-1');
//makeChecker(insetFirstBox);

//var firstBox = document.getElementById('1');
//makeChecker(firstBox);
//made a checkerboard within the id 1.