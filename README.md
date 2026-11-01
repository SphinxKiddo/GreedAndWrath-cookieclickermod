# greed_and_wrath_cookieclicker

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

if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');