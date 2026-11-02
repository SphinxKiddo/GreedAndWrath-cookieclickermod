var Lab = {};
Lab.parent= Game.Objects['Alchemy lab'];
Lab.parent.minigame = Lab;
GaW.sourceFolder = 'https://SphinxKiddo/greed_and_wrath_cookieclicker/assets/'
GaW.sourceFolder = 'https://klattmose.github.io/CookieClicker/'

Lab.launch = function(){
	Game.Notify("Laboratory launched", "Hip hip hooray");
}

Lab.init = function(div){
	var div_str = '';
		
		// Added test CSS code to visually verify the minigame is loading
		div_str += '<style>' +
			'#labBG {' +
				'background: linear-gradient(135deg, #2b5876, #4e4376);' +
				'width: 100%;' +
				'height: 100%;' +
				'min-height: 150px;' +
				'box-sizing: border-box;' +
				'padding: 10px;' +
				'color: #ffffff;' +
				'font-family: Tahoma, Arial, sans-serif;' +
			'}' +
			'.lab-test-banner {' +
				'background-color: rgba(255, 215, 0, 0.2);' +
				'border: 2px dashed #ffd700;' +
				'padding: 10px;' +
				'text-align: center;' +
				'font-weight: bold;' +
				'border-radius: 4px;' +
			'}' +
		'</style>';

		// Test HTML container using the #labBG ID referenced in the CSS
		div_str += '<div id="labBG">' +
			'<div class="lab-test-banner"> Lab Minigame CSS Test Successful! </div>' +
		'</div>';

		Lab.div.innerHTML = div_str;

}

Lab.save = function(){
	return ""
}
