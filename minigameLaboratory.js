var Lab = Game.Objects['Alchemy lab'].minigame

Lab.launch = function(){
	var Lab = this;

	Game.Notify("Laboratory launched", "Hip hip hooray");

	Lab.save = function(){
		return ""
	}
}