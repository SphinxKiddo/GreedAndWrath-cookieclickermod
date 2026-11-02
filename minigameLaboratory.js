var Lab = {};
Lab.parent= Game.Objects['Alchemy lab'];
Lab.parent.minigame = Lab;
GaW.sourceFolder = 'https://SphinxKiddo/greed_and_wrath_cookieclicker/assets/'
GaW.sourceFolder = 'https://klattmose.github.io/CookieClicker/'

Lab.launch = function(){
	Game.Notify("Laboratory launched", "Hip hip hooray");
}

Lab.init = function(){
	var div_str = '';
	
	div_str += '<style>' +
	'#labBG'
	'</style>';

	var str = '';
	str += '<style>' + 
	'#casinoBG{background:url(img/shadedBorders.png), url(' + M.sourceFolder + 'img/BGcasino.jpg); background-size:100% 100%, auto; position:absolute; left:0px; right:0px; top:0px; bottom:16px;}' + 
	'#casinoContent{position:relative; box-sizing:border-box; padding:4px 24px; height:450px;}' +
	'#casinoSidebar{text-align:center; margin:0px; padding:0px; position:absolute; left:4px; top:4px; bottom:4px; right:65%; overflow-y:auto; overflow-x:hidden; box-shadow:8px 0px 8px rgba(0,0,0,0.5);}' +
	'#casinoSidebar .listing{text-align:left;}' +
	'#casinoTable{text-align:center; position:absolute; right:0px; top:0px; bottom:0px; overflow-x:auto; overflow:hidden;}' + 
	'.casinoBJCardImage{position: relative; width: 79px; height: 123px; left: 0px; top: 0px; overflow: visible;}' + 
	'.casinoSpacer{position: relative; width: 79px; height: 123px; left: 0px; top: 0px; overflow: visible;}' + 
	'#casinoBJTable td{text-align:center; vertical-align: middle; width:90px;}' + 
	'#casinoBJTable tr{height:150px}' + 
	'#casinoBJTable{margin-left:auto; margin-right:auto;}' + 
	'.casinoSidebarLabel{font-size:12px;width:100%;padding:2px;margin-top:4px;margin-bottom:-4px;}' + 
	'.casinoActionsTable tr{height: 40px;}' + 
	'#casinoGame{position: relative;}' + 
	'#casinoInfo{position: relative;text-align:center; font-size:11px; margin-top:12px; color:rgba(255,255,255,0.75); text-shadow:-1px 1px 0px #000;}' + 
	'</style>';
	str += '<div id="casinoBG"></div>';
	str += '<div id="casinoContent">';
		str += '<div id="casinoSidebar" class="framed">';
			str+='<div class="title casinoSidebarLabel">Cash</div><div class="line"></div>';
			str += '<div id="casinoMoney"></div>';
			str+='<div class="title casinoSidebarLabel">Actions</div><div class="line"></div>';
			str += '<div id="casinoActions"></div>';
		str += '</div>';
		str += '<div id="casinoTable">';
			str += '<div id="casinoGame"></div>';
			str += '<div id="casinoInfo">Hello World!</div>';
		str += '</div>';
	str += '</div>';
	div.innerHTML = str;
}

Lab.save = function(){
	return ""
}
