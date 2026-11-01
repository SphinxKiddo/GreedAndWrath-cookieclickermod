var San = Game.Objects['Portal'].minigame

San = {
	launch: function() {
        Game.Notify("Sanctuary launched", "Hip hip hooray")
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