// 1. Safely load CCSE if it isn't there yet
if (typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');

// 2. Define the main mod launch process
function LaunchMyMod() {
    var Lab = {};
    Lab.parent = Game.Objects['Alchemy lab'];
    Lab.parent.minigameName = 'Laboratory';
    
    // Bind the minigame structure to the Alchemy Lab object
    Lab.parent.minigame = Lab;

    // Define the mandatory skeleton properties the game requires
    Lab.launch = function() {
        this.loaded = 1;
        // Your custom initialization variables will go here later
    };
    
    Lab.logic = function() {
        // Runs ~30 times a second
    };
    
    Lab.draw = function() {
        // Your UI rendering will go here later
        l('rowSpecial-' + this.parent.id).innerHTML = 
            '<div class="bg" style="padding:8px; text-align:center;">The Laboratory UI is active!</div>';
    };
    
    Lab.save = function() { return ""; };
    Lab.load = function(str) {};

    // 3. Register your mod with the game engine
    Game.registerMod("greed_and_wrath", {
        init: function() {
            Game.Notify(
                "Greed & Wrath Mod",
                "Laboratory minigame successfully initialized! :)"
            );

            // If the player already owns an Alchemy Lab and it's leveled up, fire it up!
            if (Lab.parent.level > 0 && Lab.parent.amount > 0) {
                Lab.parent.initMinigame();
            }
            
            Game.BuildStore();
            Game.UpdateRows();
        }
    });
}

// 4. Wait for CCSE to be completely ready before building the mod structure
if (typeof CCSE != 'undefined' && CCSE.isReady) {
    LaunchMyMod();
} else {
    if (typeof CCSE && !CCSE.postHooks) CCSE.postHooks = [];
    CCSE.postHooks.push(LaunchMyMod);
}