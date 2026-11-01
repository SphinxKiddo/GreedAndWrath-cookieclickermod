var Lab = {};
Lab.parent= Game.Objects['Alchemy lab'];
Lab.parent.minigame = Lab;

Lab.launch = function(){
	Game.Notify("Laboratory launched", "Hip hip hooray");
}

Lab.save = function(){
	return ""
}
