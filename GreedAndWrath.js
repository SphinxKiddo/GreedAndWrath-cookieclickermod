if(GaW === undefined) var GaW = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');

GaW.launcher = function(){
	var LabBuilding = Game.Objects['Alchemy lab'];
	var SanBuilding = Game.Objects['Portal'];

	LabBuilding.minigameName = 'Laboratory';
	LabBuilding.minigameUrl = 'https://raw.githack.com/SphinxKiddo/greed_and_wrath_cookieclicker/main/minigameLaboratory.js';
	LabBuilding.minigame.name = LabBuilding.minigameName;

	SanBuilding.minigameName = 'Sanctuary';
	SanBuilding.minigameUrl = 'https://raw.githack.com/SphinxKiddo/greed_and_wrath_cookieclicker/main/minigameSanctuary.js';
	SanBuilding.minigame.name = SanBuilding.minigameName;
	
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
