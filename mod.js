

Game.registerMod("greed_and_wrath", {
    init: function() {

 // Find your target building
        let building = Game.Objects['Time Machine'];
        
        // Define the minigame object
        building.minigame = {
            name: 'Paradox Engine',
            id: building.id,
            
            // 1. Logic Variables (Your minigame's state)
            paradoxPoints: 0,
            maxPoints: 100,

            // 2. Initialization Function
            init: function(div) {
                // 'div' is the DOM container provided by the game for your UI
                let str = '';
                str += '<style>';
                str += '#customMinigameContainer { padding: 8px; text-align: center; background: #222; color: #fff; }';
                str += '.minigame-btn { background: #444; border: 1px solid #666; padding: 4px 8px; cursor: pointer; color: #fff; }';
                str += '</style>';
                
                str += '<div id="customMinigameContainer">';
                str += '    <h3>The Paradox Engine</h3>';
                str += '    <div id="paradoxDisplay">Paradox: 0 / 100</div>';
                str += '    <button id="paradoxBtn" class="minigame-btn">Stabilize Timeline</button>';
                str += '</div>';
                
                div.innerHTML = str;

                // Bind UI events
                let btn = l('paradoxBtn'); // l() is a built-in helper for document.getElementById
                if (btn) {
                    btn.onclick = () => {
                        this.paradoxPoints = Math.max(0, this.paradoxPoints - 10);
                        Game.Notify("Timeline Stabilized", "You cleared some paradox!", [10, 0]);
                    };
                }
            },

            // 3. Game Tick Loop (~30 times a second)
            tick: function() {
                // This functions similarly to the main Game tick, but only when minigame is active
                // Example: Slowly generate paradox points based on building amount
                if (Game.T % 30 == 0) { // Once per second
                    this.paradoxPoints = Math.min(this.maxPoints, this.paradoxPoints + (building.amount * 0.1));
                }
            },

            // 4. Render / Draw Loop (Refreshes the UI text/bars)
            draw: function() {
                let display = l('paradoxDisplay');
                if (display) {
                    display.innerHTML = 'Paradox: ' + Math.floor(this.paradoxPoints) + ' / ' + this.maxPoints;
                }
            },

            // 5. Save State (Must return a string)
            save: function() {
                return String(this.paradoxPoints);
            },

            // 6. Load State (Receives the string back)
            load: function(str) {
                this.paradoxPoints = parseFloat(str) || 0;
            }
        };

        // Tell the game engine that this building now has an active minigame loaded
        building.minigameLoaded = 1;
        
        // Force the game UI to redraw and acknowledge the new layout
        Game.BuildStore();

    }
});


