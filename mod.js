if (typeof CookieClickerUrlTestMod === 'undefined') {
    var CookieClickerUrlTestMod = {};
}

CookieClickerUrlTestMod.id = "cc_url_test_mod";

CookieClickerUrlTestMod.init = function() {
    // 1. Log to the browser developer console
    console.log("Success! The Cookie Clicker test mod has loaded from GitHub.");

    // 2. Spawn a visible, glowing game notification
    Game.Notify(
        "Connection Success!", 
        "Your GitHub mod has successfully loaded into the game via CCMM!", 
        [10, 0] // Displays the Golden Cookie icon
    );
    
    // 3. Play the game's chime sound effect
    PlaySound('snd/tick.mp3');
};

// Register the mod into the game engine
Game.registerMod(CookieClickerUrlTestMod.id, CookieClickerUrlTestMod);
