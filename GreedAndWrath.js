if(GaW === undefined) var GaW = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');


var Lab = {};
Lab.parent= Game.Objects['Alchemy lab'];
Lab.parent.minigame = Lab;

var San = {};
San.parent = Game.Objects['Portal'];
San.parent.minigame = San;

Lab.launch = {
	var Lab = this

	Game.Notify("Laboratory launched", "Hip hip hooray")

    save: function() {
        return ""; // Return empty string or default save state
    },
    load: function(str) {
        // Empty skeleton
    },
    reset: function() {
        // Empty skeleton
    }
}

San.launch = {
	var San = this

	Game.Notify("Sanctuary launched", "Hip hip hooray")

    save: function() {
        return ""; // Return empty string or default save state
    },
    load: function(str) {
        // Empty skeleton
    },
    reset: function() {
        // Empty skeleton
    }
}


GaW.launcher = function(){
	var Lab = Game.Objects['Alchemy lab'].minigame;
	var San = Game.Objects['Portal'].minigame;

	Lab.parent.minigameName = 'Laboratory';
	Lab.parent.minigameUrl = 'https://cdn.jsdelivr.net/gh/SphinxKiddo/greed_and_wrath_cookieclicker@main/dummy.js'
	Lab.name = Lab.parent.minigameName;

	San.parent.minigameName = 'Sanctuary';
	San.parent.minigameUrl = 'https://cdn.jsdelivr.net/gh/SphinxKiddo/greed_and_wrath_cookieclicker@main/dummy.js'
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
