if(GaW === undefined) var GaW = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');

GaW.launcher = function(){
	GaW.sourceFolder = 'https://cdn.jsdelivr.net/gh/SphinxKiddo/GreedAndWrath-cookieclickermod/assets/'

	//====MINIGAME SETUP====//
	var LabBuilding = Game.Objects['Alchemy lab'];
	var SanBuilding = Game.Objects['Portal'];

	LabBuilding.minigameName = 'Laboratory';
	LabBuilding.minigameUrl = 'https://raw.githack.com/SphinxKiddo/GreedAndWrath-cookieclickermod/main/minigamePantheon_REFERENCE.js';

	SanBuilding.minigameName = 'Sanctuary';
	SanBuilding.minigameUrl = 'https://raw.githack.com/SphinxKiddo/greed_and_wrath_cookieclicker/main/minigameSanctuary.js';
	
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