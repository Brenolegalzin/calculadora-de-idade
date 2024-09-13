let birthDay = parseInt(document.getElementById("diaNascer").value);
let birthMonth = parseInt(document.getElementById("mesNascer").value);
let birthYear = parseInt(document.getElementById("anoNascer").value);
let actualDay = parseInt(document.getElementById("diaAtual").value);
let actualMonth = parseInt(document.getElementById("mesAtual").value);
let actualYear = parseInt(document.getElementById("anoAtual").value);
let resultado = 0;
const colorReferences = ["0", "F"];
let randomColor = "#";
let randomizer = Math.floor(Math.random() * 2) + 0;
function calculate(){
	birthDay = parseInt(document.getElementById("diaNascer").value);
	birthMonth = parseInt(document.getElementById("mesNascer").value);
	birthYear = parseInt(document.getElementById("anoNascer").value);
	actualDay = parseInt(document.getElementById("diaAtual").value);
	actualMonth = parseInt(document.getElementById("mesAtual").value);
	actualYear = parseInt(document.getElementById("anoAtual").value);
	resultado = actualYear-birthYear;
	if(actualMonth<birthMonth){
			resultado-=1;
	}
	document.getElementById("Result").innerText = resultado;
}
function setColor(){
	randomColor = "#";
	for(let i=0; i<6; i++){
		randomizer = Math.floor(Math.random() * 2) + 0;
		randomColor	= randomColor+colorReferences[randomizer];
	}
	let texts = document.querySelectorAll("h1");
	texts[0].style.color = randomColor;
	setTimeout(setColor, 500);
}
setColor();
