var Lab = Game.Objects['Alchemy lab'].minigame

Lab = {
	launch: function() {
        Game.Notify("Laboratory launched", "Hip hip hooray")
    },
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