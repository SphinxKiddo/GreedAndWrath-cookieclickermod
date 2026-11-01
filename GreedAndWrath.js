if(GaW === undefined) var GaW = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');

GaW.launcher = function(){
	var Lab = Game.Objects['Alchemy lab'].minigame;
	var San = Game.Objects['Portal'].minigame;

	Lab.parent.minigameName = 'Laboratory';
	Lab.parent.minigameUrl = 'https://cdn.jsdelivr.net/gh/SphinxKiddo/greed_and_wrath_cookieclicker@main/minigameLaboratory.js';
	Lab.name = Lab.parent.minigameName;

	San.parent.minigameName = 'Sanctuary';
	San.parent.minigameUrl = 'https://cdn.jsdelivr.net/gh/SphinxKiddo/greed_and_wrath_cookieclicker@main/minigameSanctuary.js';
	San.name = San.parent.minigameName;
	
	Game.LoadMinigames();

    Game.Notify("Hello", "Things are working :)");
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

GaW = 0;
