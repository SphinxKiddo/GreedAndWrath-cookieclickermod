// 1. Safely demand CCSE for web/non-Steam environments
if (typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');

// Create your mod tracking object
if (typeof GreedAndWrath === 'undefined') var GreedAndWrath = {};

// 2. Put all of your mod building code here
GreedAndWrath.launch = function() {
    var Lab = {};
    Lab.parent = Game.Objects['Alchemy lab'];
    Lab.parent.minigameName = 'Laboratory';
    
    // Bind the minigame structure to the Alchemy Lab object
    Lab.parent.minigame = Lab;

    // Skeletons the game engine requires
    Lab.launch = function() {
        this.loaded = 1;
    };
    
    Lab.logic = function() {
        // Runs ~30 times a second
    };
    
    Lab.draw = function() {
        l('rowSpecial-' + this.parent.id).innerHTML = 
            '<div class="bg" style="padding:8px; text-align:center;">The Laboratory UI is active!</div>';
    };
    
    Lab.save = function() { return ""; };
    Lab.load = function(str) {};

    // Register your mod with Cookie Clicker
    Game.registerMod("greed_and_wrath", {
        init: function() {
            Game.Notify(
                "Greed & Wrath Mod",
                "Laboratory minigame successfully initialized! :)"
            );

            if (Lab.parent.level > 0 && Lab.parent.amount > 0) {
                Lab.parent.initMinigame;
            }
            
            Game.BuildStore();
            Game.UpdateRows();
        }
    });

    GreedAndWrath.isLoaded = 1;
};

// 3. CCSE Safe Queue Execution Logic
if (!GreedAndWrath.isLoaded) {
    if (typeof CCSE !== 'undefined' && CCSE.isLoaded) {
        GreedAndWrath.launch();
    } else {
        if (typeof CCSE === 'undefined') window.CCSE = {};
        if (!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
        CCSE.postLoadHooks.push(GreedAndWrath.launch);
    }
}
