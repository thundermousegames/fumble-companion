export default {
	myVar1: [],
	scores: {
		'player1':0
	},
/*	changeColor: () => {
		appsmith.theme.colors.backgroundColor = '#cccccc'
		appsmith.theme.colors.primaryColor = '#111111'
	}, */
	incrementPlayer: (pnum, amt) => {
		var key = "player" + pnum + "_score";
		var val = appsmith.store[key] + amt;
		
		if (val >= 0) { 
			storeValue(key, val);  		
		}
	},
	playerCountChange:() => {
	   for (var x=1; x<=6; x++) {
			 storeValue("player" + x + "_active", x<=parseInt(Select1Copy.selectedOptionValue));
		 }
	},
	savePlayerNames:() => {
		storeValue("player1_name", player1name.text);
		storeValue("player2_name", player2name.text);
		storeValue("player3_name", player3name.text);
		storeValue("player4_name", player4name.text);
		storeValue("player5_name", player5name.text);
		storeValue("player6_name", player6name.text);
		
		closeModal('Modal1');
	},
	reset:() => {
		// this.changeColor();
		for (var x=1; x<=6; x++) {
				storeValue("player" + x + "_score", 0); 
		}
	},
	initialize: () => {		
		this.playerCountChange();
		
	   for (var x=1; x<=6; x++) {
				storeValue("player" + x + "_score", 0); 
			 storeValue("player" + x + "_name", "Player " + x);
		 }
	}
}