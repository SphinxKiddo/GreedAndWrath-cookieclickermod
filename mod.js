if(GreedAndWrath === undefined) var GreedAndWrath = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');

var Lab = {};
Lab.parent = Game.Objects['Alchemy lab'];
Lab.parent.minigame = Lab

GreedAndWrath.launch = function(){
    Game.Notify(
        "Hello",
        "Things are working :)"
    );
}

if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');

var Lab = {};
Lab.parent = Game.Objects['Alchemy lab'];
Lab.parent.minigame = Lab

Lab.parent.minigameName = 'Laboratory'

Game.registerMod("greed_and_wrath", {
    init: function() {
        Game.Notify(
            "Hello",
            "Things are working :)"
        );
        
        Lab = {
        }
    }

});
