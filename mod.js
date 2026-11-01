if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');

var Lab = {};
Lab.parent = Game.Objects['Alchemy lab'];
Lab.parent.minigame = Lab

Game.registerMod("greed_and_wrath", {
    init: function() {
        Game.Notify(
            "Hello",
            "Things are working :)"
        );

        Lab.parent.minigameName = 'Laboratory'
        
        Lab = {
            
        }
    }

});
