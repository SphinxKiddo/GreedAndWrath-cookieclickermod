Game.Notify("Laboratory launched", "Hip hip hooray");

var M = {};
M.parent = Game.Objects['Alchemy lab'];
M.parent.minigame = M;

M.launch = function()
{
	var M = this;
	M.name = M.parent.minigameName;

	M.init = function(div)
	{
		var str = ''
		str += '<style>'+
		'#labBG{background:url(img/shadedBorders.png),url('+GaW.sourceFolder+'BGlaboratory.jpg);background-size:100% 100%,auto;position:absolute;left:0px,right:0px;top:0px;bottom:16px;}'+
		'#labContent{position:relative;box-sizing:border-box;padding:4px 24px;text-align:center;}'+
		'</style>';

		str += '<div id="labBG"></div>';
		div.innerHTML=str;
	}

	M.save = function()
	{
		return ""
	}

	M.init(l('rowSpecial'+M.parent.id));
}

var M = 0;
