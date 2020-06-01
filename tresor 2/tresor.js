function Tableau2D(x, y) {
	var array2D = new Array(x);
	for (var i = 0; i < array2D.length; i++) {
		array2D[i] = new Array(y);
	}
	return array2D;
}
var counter = 10;
var bonneReponse2="1939"
var bonneReponse="E=MC²";
var bonneReponse1="réussir";
let monTableau = new Tableau2D(8, 8);
let coordonneeX = Math.floor(Math.random() * 8);
let coordonneeY = Math.floor(Math.random() * 8);
let coordoonneeZ = Math.floor(Math.random() * 8);
let	coordonneeT = Math.floor(Math.random() * 8);
var	coordonneeinshteinX=Math.floor(Math.random() * 8);
var	coordonneeinshteinY=Math.floor(Math.random() * 8);
var coordonneehitlerX=Math.floor(Math.random() * 8);
var coordonneehitlerY=Math.floor(Math.random() * 8);

var message="";
var explosif = "";
var boomm = new Audio('explosion.mp3');
var Mauvaise=new Audio('mb.mp3');
var kk= new Audio('kk.mp3');
var turings=new Audio('turing.mp3');
var prof=new Audio('inshtein.mp3');
var ouis=new Audio('hh.mp3');
var ko= new Audio('koro.mp3');
var a = 0;
 

function choix(idcase) {
	console.log(idcase);
	var indexX = idcase[0];
	var indexb=String(coordonneeX);
	var indexY = idcase[2];
	var indexa=String(coordonneeY);
	
          
    if (idcase == tresor) {
        document.getElementById(idcase).className = "good";
		ouis.play();
        alert("Vous venez de trouver le trésor en " + compteur + " trous.");
        message = message + "<p><span class='coco'>Coco :</span> bien jouer bogosse !</p>";
        document.getElementById("Commentaires").innerHTML = message;
		victoir();
	}
	
		else if(idcase == koro) {
			ko.play();
			var resultatKoro = prompt("SALUT A VOUS PR.KORO PETITE DEVINETTE:IL FAUT TRAVAILLER POUR?");
	 		var bonneReponseKoro="réussir";

	if (resultatKoro == bonneReponseKoro) {
		
		alert("bravo à vous bonne réponse PR.Koro  vous avez mériter un indice regarder dans la ligne: "+coordonneeY);
		document.getElementById(idcase).className = "koro";
		message = message + "<p><span class='coco'>Coco :</span> BONNE REPONSE  BOGOSSE!</p>";
		document.getElementById('Commentaires').innerHTML=message;
} else {
	alert("Mauvaise Réponse  Bogosse, La Bonne Réponse était : " +bonneReponse1);
	initTab();
	

}
	ko.pause();	
	}
	else if(idcase == inshtein) {
		prof.play();
		bonneReponseInshtein="E=MC²";
		var resultatInshtein = prompt("Pour continuer vous devez trouver Quel est la célèbre formule que instein à trouver ?!!!ATTENTION INSHTEIN NE RIGOLE PAS EN CAS DE MAUVAISE REPONSE VOUS RETOURNER AU DEBUT!!!?(METTRE EN MAJUSCULE LA FORMULE)");

	if (resultatInshtein == bonneReponseInshtein) {
		alert("bravo c'est la bonne réponse");
		document.getElementById(idcase).className = "Inshtein";
		message = message + "<p><span class='coco'>Coco :</span> BONNE REPONSE BOGOSSE!</p>";
		document.getElementById('Commentaires').innerHTML=message;
	} else {
		alert("Mauvaise Réponse Bogosse, La Bonne Réponse était : " +bonneReponse);
		initTab();
	
}
	 prof.pause();
	}
	else if (idcase==turing){
	document.getElementById(idcase).className = "turing";
	turings.play();
	alert("indice de turing: chercher dans la colonne:" + coordonneeX);
	message = message + "<p><span class='coco'>Coco :</span> AAHHH NON pas Turing!!!!!!!</p>";
    document.getElementById("Commentaires").innerHTML = message;
	
	}
		   else if (idcase == explosif){
	   document.getElementById(idcase).className ="explosif";
	   boomm.play();
	   alert("mouhaaa explosion");
		message = message + "<p><span class='coco'>Coco :</span> mouhaa explosion !</p>";
		document.getElementById("Commentaires").innerHTML = message;
		initTab();
	}
	else if(indexX == indexb){
		
		document.getElementById(idcase).className ="ligne";
		
		message = message + "<p><span class='coco'>Coco :</span> on se rapproche bogosse !</p>";
		document.getElementById("Commentaires").innerHTML = message;
   } 
   else if(indexY == indexa){
	   
	   document.getElementById(idcase).className ="colonne"; 
	   message = message + "<p><span class='coco'>Coco :</span> presque n'abandonne pas bogosse !</p>";  
	   document.getElementById("Commentaires").innerHTML = message;
   }
   
   else {  
        document.getElementById(idcase).className = "bad";
		Mauvaise.play();
        message = message + "<p><span class='coco'>Coco :</span> perd pas courage bogosse !</p>";
		document.getElementById("Commentaires").innerHTML = message;
    }
    afficherCompteur();
	element = document.getElementById('emplacementCommentaires');
    element.scrollTop = element.scrollHeight;
	
}

var compteur = 0;
function afficherCompteur() {
	 compteur ++;
	 document.getElementById("compte").innerHTML = compteur;
}
	
function initTab() {
	compteur=0;
	document.getElementById("compte").innerHTML = compteur;
    let monTableau = Tableau2D(8, 8);
    coordonneeX = Math.floor(Math.random() * 8);
    coordonneeY = Math.floor(Math.random() * 8);
    coordonneeZ= Math.floor(Math.random() * 8);
	coordonneeT = Math.floor(Math.random() * 8);
	coordonneeTuringX=Math.floor(Math.random() * 8);
	coordonneeTuringY=Math.floor(Math.random() * 8);
	coordonneeinshteinX=Math.floor(Math.random() * 8);
	coordonneeinshteinY=Math.floor(Math.random() * 8);
	coordonneekoroX=Math.floor(Math.random() * 8);
	coordonneekoroY=Math.floor(Math.random() * 8);
	coordonneehitlerX=Math.floor(Math.random() * 8);
	coordonneehitlerY=Math.floor(Math.random() * 8);
	
	
	hitler=String(coordonneehitlerX) + "-" + String(coordonneehitlerY);
	koro= String(coordonneekoroX) + "-" + String(coordonneekoroY);
	inshtein= String(coordonneeinshteinX) + "-" + String(coordonneeinshteinY);
	turing= String(coordonneeTuringX) + "-" + String(coordonneeTuringY);
	tresor = String(coordonneeX) + "-" + String(coordonneeY);
	explosif =String(coordonneeZ)+"-"+String(coordonneeT);
    let dessinTableau = "<table id='fondtable'>";
	for (var m = 0; m < monTableau.length ; m++) {
		dessinTableau = dessinTableau + "<tr>";
		for (var x = 0; x < monTableau.length  ; x++) {
			if (monTableau[m][x] != monTableau[coordonneeX][coordonneeY]){
				monTableau[m][x] = "";
			}else{
				monTableau[m][x] == monTableau[coordonneeX][coordonneeY];
				monTableau[m][x] = "";
			}
			idcase = String(m)+"-"+String(x);
			dessinTableau = dessinTableau + "<td id='"+idcase+"' onclick='choix(this.id)'>" + monTableau[m][x] + "</td>";
			
			
        }
        dessinTableau = dessinTableau + "</tr>";
	}
	dessinTableau = dessinTableau + "</table>";
	document.getElementById("emplacementTable").innerHTML = dessinTableau;
	message="";
	document.getElementById("Commentaires").innerHTML=message;
}


	function victoir(){
		for (var i = 0; i < 8; i++) {
            get = String(i) + "-" + String(a);
            if (a == 8) {
             var a = 0
                document.getElementById(get).className = "good";
            } else {
                for (var k = 0; k < 8; k++) {
                uni = String(i) + "-" + String(k);
                document.getElementById(uni).className = "good";
                }
            a++;
			
            }
        }
		
	}
	
