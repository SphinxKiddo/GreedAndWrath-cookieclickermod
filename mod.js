if(GaW === undefined) var GaW = {};

Lab = {};
Lab.parent= Game.Objects['Alchemy lab'];
Lab.parent.minigame = Lab;

San = {};
San.parent = Game.Objects['Portal'];
San.parent.minigame = San;

Lab.launch = function(){
	var Lab = this;
}


San.launch = function(){
	var San = this;
}


GaW.launcher = function(){
	var Lab = Game.Objects['Alchemy lab'].minigame;
	var San = Game.Objects['Portal'].minigame;

	Lab.parent.minigameName = 'Laboratory';
	Lab.parent.minigameUrl = 'https://cdn.jsdelivr.net/gh/SphinxKiddo/greed_and_wrath_cookieclicker@refs/heads/main/dummy.js'
	Lab.name = Lab.parent.minigameName;

	San.parent.minigameName = 'Sanctuary';
	San.parent.minigameUrl = 'https://cdn.jsdelivr.net/gh/SphinxKiddo/greed_and_wrath_cookieclicker@refs/heads/main/dummy.js'
	San.name = San.parent.minigameName;
	
	Game.LoadMinigames();

    Game.Notify("Hello", "Things are working :)");
	GaW.isLoaded = 1;
}

Game.registerMod('Greed and Wrath',
	init: function() {
		GaW.launcher
	},
)

GaW = 0;