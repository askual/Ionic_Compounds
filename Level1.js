Game.Level1 = function(game){};
//#C6BC9F non metal
//#9AAAC7 metal

var text1, text2, text3, text4, text5, left, right, isleft, isright, element, p1, p2,p3, equalto, plus, back, tips, tiptext;
Game.Level1.prototype = {
	create: function () {
		//back = this.game.add.sprite(0, 0, 'Background');
		this.game.stage.backgroundColor = "#0ff889";
		//setting up the periodic table
		period = this.game.add.sprite(0, 130, 'PPP');
		period.scale.setTo(0.7, 0.64);
		
		
		
		p1 = this.game.add.sprite(252, 54, 'p1');
		p1 = this.game.add.sprite(552, 54, 'p1');
		p2 = this.game.add.sprite(-252, -54, 'p2');
		p3 = this.game.add.sprite(-552, -54, 'p3');
		
		plus = this.game.add.sprite(455, 77, 'pluss');
		equalto = this.game.add.sprite(865, 70, 'equalto');
		equalto.scale.setTo(0.6, 0.6);
		equalto.angle = 90;
		
		element = this.game.add.group();
		//seting the properties of the elements;
		element.enableBody = true;
		this.game.physics.enable(element, Phaser.Physics.ARCADE);
		element.inputEnableChildren = true;
		element.onChildInputDown.add(onclick, this);
		///text answare area preparation
		
		
		var style = { font: "bold 90px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
		var style1 = { font: "bold 40px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
		var style3 = { font: "bold 30px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
		var styletips = { font: "bold 20px Arial", fill: "#ff0000", boundsAlignH: "center", boundsAlignV: "middle" };var style12 = { font: "bold 90px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
		text1 = this.game.add.text(929, 64, "", style);
		text1.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
		text2 = this.game.add.text(text1.width+929, 119, "", style1);
		text2.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
		text3 = this.game.add.text(929+text1.width+text2.width, 64, "", style);
		text3.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
		text4 = this.game.add.text(929+text1.width+text2.width+text3.width, 119, "", style1);
		text4.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
		text5 = this.game.add.text(859, 212, "", style3);
		textnonmetal = this.game.add.text(580, 56, "", style12);
		textmetal = this.game.add.text(285, 56, "", style12);
		
		tips = this.game.add.text(296, 194, "", styletips);
		tiptext = this.game.add.text(296+tips.width, 194, "", styletips);
		//text5.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
		//text.setTextBounds(0, 100, 800, 100);
		
		
		//creating the elements and putting them on the right place
		temp = element.create(100, 205, 'H');
		temp.name = 'H';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(1182, 205,  'He');
		temp.name = 'He';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(1182, 320, 'Ar');
		temp.name = 'Ar';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(1182, 263, 'Ne');
		temp.name = 'Ne';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(1182, 379, 'Kr');
		temp.name = 'Kr';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(1182, 496, 'Rn');
		temp.name = 'Rn';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(1182, 552, 'Og');
		temp.name = 'Og';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(1182, 437, 'Xe');
		temp.name = 'Xe';
		temp.width = 63;
		temp.height = 60;
		
		
		temp = element.create(1118, 494, 'At');
		temp.name = 'At';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(1118, 380, 'Br');
		temp.name = 'Br';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(1118, 320, 'Cl');
		temp.name = 'Cl';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(1118, 262, 'F');
		temp.name = 'F';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(1118, 437, 'I');
		temp.name = 'I';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(1118, 553, 'Ts');
		temp.name = 'Ts';
		temp.width = 63;
		temp.height = 60;
		
		
		temp = element.create(1054, 262, 'O');
		temp.name = 'O';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(1054, 320, 'S');
		temp.name = 'S';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(1054, 379, 'Se');
		temp.name = 'Se';
		temp.width = 63;
		temp.height = 60;
		
		
		//
		
		temp = element.create(991, 262, 'N');
		temp.name = 'N';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(991, 320, 'P');
		temp.name = 'P';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(927, 262, 'C');
		temp.name = 'C';
		temp.width = 63;
		temp.height = 60;
		////////////
		
		temp = element.create(99, 261, 'Li');
		temp.name = 'Li';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(99, 318, 'Na');
		temp.name = 'Na';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(99, 381, 'K');
		temp.name = 'K';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(99, 437, 'Rb');
		temp.name = 'Rb';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(99, 494, 'Cs');
		temp.name = 'Cs';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(99, 553, 'Fr');
		temp.name = 'Fr';
		temp.width = 63;
		temp.height = 60;
		
		////////////////////////////////////
		temp = element.create(163, 262, 'Be');
		temp.name = 'Be';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(163, 318, 'Mg');
		temp.name = 'Mg';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(163, 381, 'Ca');
		temp.name = 'Ca';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(163, 437, 'Sr');
		temp.name = 'Sr';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(163, 494, 'Ba');
		temp.name = 'Ba';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(163, 553, 'Ra');
		temp.name = 'Ra';
		temp.width = 63;
		temp.height = 60;
		////////////////////////////////
		
		temp = element.create(862, 321, 'Al');
		temp.name = 'Al';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(862, 381, 'Ga');
		temp.name = 'Ga';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(862, 437, 'In');
		temp.name = 'In';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(862, 494, 'Tl');
		temp.name = 'Tl';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(862, 553, 'Nh');
		temp.name = 'Nh';
		temp.width = 63;
		temp.height = 60;
		
		////
		temp = element.create(926, 439, 'Sn');
		temp.name = 'Sn';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(926, 496, 'Pb');
		temp.name = 'Pb';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(926, 554, 'Fl');
		temp.name = 'Fl';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(990, 496, 'Bi');
		temp.name = 'Bi';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(990, 555, 'Mc');
		temp.name = 'Mc';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(1052, 555, 'Lv');
		temp.name = 'Lv';
		temp.width = 63;
		temp.height = 60;
		
		////transition element periods;
		
		temp = element.create(227, 380, 'Sc');
		temp.name = 'Sc';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(290, 381, 'Ti');
		temp.name = 'Ti';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(353, 379, 'V');
		temp.name = 'V';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(417, 379, 'Cr');
		temp.name = 'Cr';
		temp.width = 63;
		temp.height = 60;
		
		
		temp = element.create(480, 379, 'Mn');
		temp.name = 'Mn';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(543, 379, 'Fe');
		temp.name = 'Fe';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(608, 381, 'Co');
		temp.name = 'Co';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(674, 380, 'Ni');
		temp.name = 'Ni';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(737, 380, 'Cu');
		temp.name = 'Cu';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(801, 381, 'Zn');
		temp.name = 'Zn';
		temp.width = 63;
		temp.height = 60;
		//period 2
		
		temp = element.create(227, 437, 'Y');
		temp.name = 'Y';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(290, 437, 'Zr');
		temp.name = 'Zr';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(353, 437, 'Nb');
		temp.name = 'Nb';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(417, 437, 'Mo');
		temp.name = 'Mo';
		temp.width = 63;
		temp.height = 60;
		
		
		temp = element.create(480, 437, 'Tc');
		temp.name = 'Tc';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(543, 437, 'Ru');
		temp.name = 'Ru';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(608, 437, 'Rh');
		temp.name = 'Rh';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(674, 437, 'Pd');
		temp.name = 'Pd';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(737, 437, 'Ag');
		temp.name = 'Ag';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(801, 437, 'Cd');
		temp.name = 'Cd';
		temp.width = 63;
		temp.height = 60;
		
		/// Period 3
		var py = 495;
		temp = element.create(290, py, 'Hf');
		temp.name = 'Hf';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(353, py, 'Ta');
		temp.name = 'Ta';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(417, py, 'W');
		temp.name = 'W';
		temp.width = 63;
		temp.height = 60;
		
		
		temp = element.create(480, py, 'Re');
		temp.name = 'Re';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(543, py, 'Os');
		temp.name = 'Os';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(608, py, 'Ir');
		temp.name = 'Ir';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(674, py, 'Pt');
		temp.name = 'Pt';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(737, py, 'Au');
		temp.name = 'Au';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(801, py, 'Hg');
		temp.name = 'Hg';
		temp.width = 63;
		temp.height = 60;
		
		//period 4
		
		temp = element.create(290, 553, 'Rf');
		temp.name = 'Rf';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(353, 553, 'Db');
		temp.name = 'Db';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(417, 553, 'Sg');
		temp.name = 'Sg';
		temp.width = 63;
		temp.height = 60;
		
		
		temp = element.create(480, 553, 'Bh');
		temp.name = 'Bh';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(543, 553, 'Hs');
		temp.name = 'Hs';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(608, 553, 'Mt');
		temp.name = 'Mt';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(674, 553, 'Ds');
		temp.name = 'Ds';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(737, 553, 'Rg');
		temp.name = 'Rg';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(801, 553, 'Cn');
		temp.name = 'Cn';
		temp.width = 63;
		temp.height = 60;
		
		//metalloid elements
		temp = element.create(863, 259, 'B');
		temp.name = 'B';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(928, 322, 'Si');
		temp.name = 'Si';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(928, 375, 'Ge');
		temp.name = 'Ge';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(992, 378, 'As');
		temp.name = 'As';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(992, 433, 'Sb');
		temp.name = 'Sb';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(1055, 437, 'Te');
		temp.name = 'Te';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(1055, 491, 'Po');
		temp.name = 'Po';
		temp.width = 63;
		temp.height = 60;
		
		//transition elements
		temp = element.create(258, 625, 'La');
		temp.name = 'La';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(323, 625, 'Ce');
		temp.name = 'Ce';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(387, 625, 'Pr');
		temp.name = 'Pr';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(450, 625, 'Nd');
		temp.name = 'Nd';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(513, 625, 'Pm');
		temp.name = 'Pm';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(577, 625, 'Sm');
		temp.name = 'Sm';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(641, 625, 'Eu');
		temp.name = 'Eu';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(705, 625, 'Gd');
		temp.name = 'Gd';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(768, 625, 'Tb');
		temp.name = 'Tb';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(832, 625, 'Dy');
		temp.name = 'Dy';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(896, 625, 'Ho');
		temp.name = 'Ho';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(960, 625, 'Er');
		temp.name = 'Er';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(1023, 625, 'Tm');
		temp.name = 'Tm';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(1089, 625, 'Yb');
		temp.name = 'Yb';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(1151, 625, 'Lu');
		temp.name = 'Lu';
		temp.width = 63;
		temp.height = 60;
		//period 2
		temp = element.create(258, 684, 'Ac');
		temp.name = 'Ac';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(323, 684, 'Th');
		temp.name = 'Th';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(387, 684, 'Pa');
		temp.name = 'Pa';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(450, 684, 'U');
		temp.name = 'U';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(513, 684, 'Np');
		temp.name = 'Np';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(577, 684, 'Pu');
		temp.name = 'Pu';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(641, 684, 'Am');
		temp.name = 'Am';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(705, 684, 'Cm');
		temp.name = 'Cm';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(768, 684, 'Cf');
		temp.name = 'Bk';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(832, 684, 'Cf');
		temp.name = 'Cf';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(896, 684, 'Es');
		temp.name = 'Es';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(960, 684, 'Fm');
		temp.name = 'Fm';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(1023, 684, 'Md');
		temp.name = 'Md';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(1089, 684, 'No');
		temp.name = 'No';
		temp.width = 63;
		temp.height = 60;
		
		temp = element.create(1151, 684, 'Lr');
		temp.name = 'Lr';
		temp.width = 63;
		temp.height = 60;
	}
};

function onclick( sprite ){
	var fp = periodicTable.searchBySymbol(sprite.name);
	var picked = periodicTable.searchBySymbol(sprite.name);
	var cases = fp.Property;
	if(cases=="metal")
	{
		if(picked.Group<13&&picked.Group>2)
						{
							tiptext.text = "Tips:   Please Pick non transitional methal!!";}
		else{
						if(tiptext.text == "Tips:   Please Pick non transitional methal!!") tiptext.text = "";}
		
				if(!isleft)
					{
					p2.x = 252;  p2.y = 54;
					textmetal.text = sprite.name;
					left = sprite;
					isleft = true;}
				else if(!isright){
					p2.x = 252;  p2.y = 54;
					textmetal.text = sprite.name;
					left = sprite;
					isleft = true;
			}
				else{
					p3.x = -252; p3.y = -54;
					textmetal.text = sprite.name;
					textnonmetal.text = "";
					isleft = true;
					isright = false;
					text1.text="";
					text2.text="";
					text3.text="";
					text4.text="";
					text5.text = "";
					left = sprite;
			}
				if(isleft&&isright){
							output(left, right);
							text2.x = text1.width+929;
							text3.x = text1.width+text2.width+929;
							text4.x = text3.width+text2.width+text1.width+929;
}}
	else{
		if(picked.Property!="nonmetal"){
			tiptext.text = "Tip:   metalloids do not form ionic compound!!";
		}
		else {
			if(tiptext.text == "Tip:   metalloids do not form ionic compound!!")
				tiptext.text = "";}
				if(!isright){
					isright = true;
					p3.x = 552; p3.y = 54;
					textnonmetal.text = sprite.name;
					right = sprite;
						if(isleft&&isright){
							output(left, right);
							text2.x = text1.width+929;
							text3.x = text1.width+text2.width+929;
							text4.x = text3.width+text2.width+text1.width+929;
					}
				}
				else if(!isleft){
					isright = true;
					p3.x = 552; p3.y = 54;
					textnonmetal.text = sprite.name;
					right = sprite;
				}
				else if(isright&&isleft){
					isleft = false;
					textmetal.text = "";
					p2.x = -552; p2.y = -54;
					textnonmetal.text = sprite.name;
					right = sprite;
					text1.text="";
					text2.text="";
					text3.text="";
					text4.text="";
					text5.text = "";}
}
}
///this function determines what to be written on the subscibt of the equation by taking the group number of each reactant;
function gcm(one, two){
	var toreturn = {f: two, s:one};
	var a, b, temp;
	///find the greates comen deviser of the two group number and devide both the subscipt with it
	if(one>two){
		a = one; b =two;
	}else {
		a = two; b=one;
	}
	while(b!==0){
		temp = b;
		b  = a%b;
		a  = temp;
	}
	/// var a is the greatest common devisor
	if(a!==0){
		toreturn.f = two/a;
		toreturn.s = one/a;
	}
	///the function returns the first subscipt as toreturn.f and the second subscript as toreturn.s;
	return toreturn;}

function output(left, right){
	var fp ,sp;
	console.log(left.key, right.key);
	fp = periodicTable.searchBySymbol(left.key);
	sp = periodicTable.searchBySymbol(right.key);
	var subs;
	var nonmetal ="", metal="";
	var possible = true;
	var Group1, Group2;
	Group1 = (fp.Group>=13)? fp.Group-10 : fp.Group;
	Group2 = (sp.Group>=13)? sp.Group-10 : sp.Group;
	if(fp.Group<13&&fp.Group>2||(sp.Group<13&&sp.Group>2)||((fp.Period == 6 ||fp.Period== 7)&& !(fp.Group == "" || (fp.Group<3 &&fp.Group>12)))||((sp.Period == 6 ||sp.Period== 7)&& !(sp.Group == "" || (sp.Group<3 &&sp.Group>12)))) {
		console.log(fp.Group);
		return;
			}
	if(fp.Group>14&&fp.Group<18){
		Group1 = (fp.Group-18) * -1;
	}
	if(sp.Group>14&&sp.Group<18){
		Group2 = (sp.Group-18) * -1;
	}
	console.log(Group1)
	if(fp.Property==sp.Property) {possible = false;}
	else{
		if(fp.Property == 'metal'&&sp.Property == 'nonmetal'){
			metal = fp.Symbol;
			nonmetal = sp.Symbol;
			subs = gcm(Group1, Group2);
			console.log(metal, nonmetal, '1');
		}
 		else if(fp.Property == 'nonmetal'&&sp.Property == 'metal'){
			metal = sp.Symbol;
			nonmetal = fp.Symbol;
			subs = gcm(Group2, Group1);
			console.log(metal, nonmetal, '2');
		}
		else {possible = false;}
	}
	if(sp.Group==18 || fp.Group==18) possible = false;
	
	if(possible)
	{		text1.text = metal;
			text3.text = nonmetal;
			if(subs.f > 1)
			{text2.text = ""+subs.f;}

			if(subs.s > 1)
			{text4.text = ""+subs.s;}
			 var first = metal;
			 var second = nonmetal
	 		console.log(first, second);
	 		try{
				text5.text = nameing[first];
				text5.text += ' ' + nameing[second];
			}
	 		catch(e){
				text5.text = "no name";
			}
	}
	else{
		if(sp.Group==18 || fp.Group==18)
			{
				text2.text = "Not possible!!!";
			}
		else text2.text = "Not Ionic bond!!";
	}
}