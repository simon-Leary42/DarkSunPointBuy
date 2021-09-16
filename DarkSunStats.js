
	var str = 8;
	var dex = 8;
	var con = 8;
	var int = 8;
	var wis = 8;
	var cha = 8;
	var points = 40;
	var cost = [0,0,0,0,0,-3,-2,-1,0,1,2,3,4,5,7,9,11,13,17,21,25];

	function calcPoints(){
	var newCost =  cost[str] + cost[dex] + cost[con] + cost[int] + cost[wis] + cost[cha];
	points = 40-newCost;
	document.getElementById('pointsTotal').innerHTML = points;
	}

	function checkPoints(){
		if (points<=0){
			alert("You're out of points!");
			return 0;
		}
	}
	function pp(idin, numin){
		if (cost[numin+1]-cost[numin]>points){
			alert("you can't afford that.");
			return 0;
		}
		if(numin>=20){
			alert("we cant go any higher.")
			return 0;
		}
		var newNum = numin+1;
		document.getElementById(idin).innerHTML = newNum;
		
	}
		function mm(idin, numin){

		if(numin<=5){
			alert("we cant go any lower.")
			return 0;
		}
		var newNum = numin-1;
		document.getElementById(idin).innerHTML = newNum;
	}


	function strPP(idin, numin){

		if (pp('strTitle', str)==0)
			return 0;
		str++;
		calcPoints();
	}
	function strMM(idin, numin){
		if (mm('strTitle', str)==0)
			return 0;
		str--;
		calcPoints();
	}
	function dexPP(idin, numin){
		if (pp('dexTitle', dex)==0)
			return 0;
		dex++;
		calcPoints();
	}
	function dexMM(idin, numin){
		if (mm('dexTitle', dex)==0)
			return 0;
		dex--;
		calcPoints();
	}
	function conPP(idin, numin){
		if (pp('conTitle', con)==0)
			return 0;
		con++;
		calcPoints();
	}
	function conMM(idin, numin){
		if (mm('conTitle', con)==0)
			return 0;
		con--;
		calcPoints();
	}
	function intPP(idin, numin){
		if (pp('intTitle', int)==0)
			return 0;
		int++;
		calcPoints();
	}
	function intMM(idin, numin){
		if (mm('intTitle', int)==0)
			return 0;
		int--;
		calcPoints();
	}
	function wisPP(idin, numin){
		if (pp('wisTitle', wis)==0)
			return 0;
		wis++;
		calcPoints();
	}
	function wisMM(idin, numin){
		if (mm('wisTitle', wis)==0)
			return 0;
		wis--;
		calcPoints();
	}
	function chaPP(idin, numin){
		if (pp('chaTitle', cha)==0)
			return 0;
		cha++;
		calcPoints();
	}
	function chaMM(idin, numin){
		if (mm('chaTitle', cha)==0)
			return 0;
		cha--;
		calcPoints();
	}
