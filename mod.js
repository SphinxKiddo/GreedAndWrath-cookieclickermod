if(GaW === undefined) var GaW = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');

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
	Lab.name = Lab.parent.minigameName;
	San.parent.minigameName = 'Portal';
	San.name = San.parent.minigameName;


	Game.LoadMinigames();

    Game.Notify(
        "Hello",
        "Things are working :)"
    );
	GaW.isLoaded = 1;
}

if(!GaW.isLoaded){
	if(CCSE && CCSE.isLoaded){
		GaW.launcher();
	}
	else{
		if(!CCSE) var CCSE = {};
		if(!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
		CCSE.postLoadHooks.push(GaW.launcher);
	}
}
