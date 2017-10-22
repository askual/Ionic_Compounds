var Game = {};

Game.Preloader = function(game){
	this.preloadBar = null;
};

var p1, p2, pluss;

Game.Preloader.prototype = {
	preload: function(){
		this.stage.disableVisiblityChange = true;
	this.game.load.image('Background', 'assets/Background.png');
	this.game.load.image('H', 'assets/H.png');	
	this.game.load.image('PPP', 'assets/Period.png');
	this.game.load.image('He', 'assets/He.png');
	this.game.load.image('p1', 'assets/place1.png');
	this.game.load.image('p2', 'assets/place2.png');
	this.game.load.image('pluss', 'assets/pluss.png');
	this.game.load.image('equalto', 'assets/equalto.png');
	this.game.load.image('Li', 'assets/Li.png');
	this.game.load.image('Ar', 'assets/Ar.png');
	this.game.load.image('At', 'assets/At.png');
	this.game.load.image('At', 'assets/Be.png');
	this.game.load.image('Br', 'assets/Br.png');
	this.game.load.image('p3', 'assets/place3.png')
	this.game.load.image('C', 'assets/C.png');
	this.game.load.image('Ca', 'assets/Ca.png');
	this.game.load.image('Cl', 'assets/Cl.png');
	this.game.load.image('Cs', 'assets/Cs.png');
	
	this.game.load.image('F', 'assets/F.png');
	this.game.load.image('Fr', 'assets/Fr.png');
	this.game.load.image('Hf', 'assets/Hf.png');
	this.game.load.image('I', 'assets/I.png');
		
	this.game.load.image('K', 'assets/K.png');
	this.game.load.image('Kr', 'assets/Kr.png');
	this.game.load.image('Mg', 'assets/Mg.png');
	this.game.load.image('N', 'assets/N.png');
		
	this.game.load.image('N', 'assets/Na.png');
	this.game.load.image('Ne', 'assets/Ne.png');
	this.game.load.image('O', 'assets/O.png');
	this.game.load.image('Og', 'assets/Og.png');
		
	this.game.load.image('P', 'assets/P.png');
	this.game.load.image('Ra', 'assets/Ra.png');
	this.game.load.image('Rb', 'assets/Rb.png');
	this.game.load.image('Rf', 'assets/Rf.png');
	
	this.game.load.image('Rn', 'assets/Rn.png');
	this.game.load.image('S', 'assets/S.png');
	this.game.load.image('Sc', 'assets/Sc.png');
	this.game.load.image('Sr', 'assets/Sr.png');
		
	this.game.load.image('Ti', 'assets/Ti.png');
	this.game.load.image('Ts', 'assets/Ts.png');
	this.game.load.image('Xe', 'assets/Xe.png');
	this.game.load.image('Y', 'assets/Y.png');
		
	this.game.load.image('Zr', 'assets/Zr.png');
	this.game.load.image('Se', 'assets/Se.png');
		
	this.game.load.image('Be', 'assets/Be.png');
	this.game.load.image('Ca', 'assets/Ca.png');
	this.game.load.image('Cs', 'assets/Cs.png');
	this.game.load.image('Fr', 'assets/Fr.png');
		
	this.game.load.image('Hf', 'assets/Hf.png');
	this.game.load.image('K', 'assets/K.png');
	this.game.load.image('Mg', 'assets/Mg.png');
	this.game.load.image('Na', 'assets/Na.png');
		
	this.game.load.image('Ra', 'assets/Ra.png');
	this.game.load.image('Rb', 'assets/Rb.png');
	this.game.load.image('Rf', 'assets/Rf.png');
	this.game.load.image('Sc', 'assets/Sc.png');
	
	this.game.load.image('Sr', 'assets/Sr.png');
	this.game.load.image('Ti', 'assets/Ti.png');
	this.game.load.image('Y', 'assets/Y.psng');
	this.game.load.image('Zr', 'assets/Zr.png');
	this.game.load.image('Ba', 'assets/Ba.png');
		
	this.game.load.image('Al', 'assets/Al.png');
	this.game.load.image('Ga', 'assets/Ga.png');
	this.game.load.image('In', 'assets/In.png');
	this.game.load.image('Tl', 'assets/Tl.png');
	this.game.load.image('Nh', 'assets/Nh.png');
		
	this.game.load.image('Sn', 'assets/Sn.png');
	this.game.load.image('Pb', 'assets/Pb.png');
	this.game.load.image('Fl', 'assets/Fl.png');
	this.game.load.image('Mc', 'assets/Mc.png');
	this.game.load.image('Lv', 'assets/Lv.png');
	this.game.load.image('Bi', 'assets/Bi.png');
	
	this.game.load.image('Sc', 'assets/Sc.png');
	this.game.load.image('Ti', 'assets/Ti.png');
	this.game.load.image('V', 'assets/V.png');
	this.game.load.image('Cr', 'assets/Cr.png');
	this.game.load.image('Mn', 'assets/Mn.png');
	this.game.load.image('Fe', 'assets/Fe.png');
	this.game.load.image('Co', 'assets/Co.png');
	this.game.load.image('Ni', 'assets/Ni.png');
	this.game.load.image('Cu', 'assets/Cu.png');
	this.game.load.image('Zn', 'assets/Zn.png');
		
	this.game.load.image('Y', 'assets/Y.png');
	this.game.load.image('Zr', 'assets/Zr.png');
	this.game.load.image('Nb', 'assets/Nb.png');
	this.game.load.image('Mo', 'assets/Mo.png');
	this.game.load.image('Tc', 'assets/Tc.png');
	this.game.load.image('Ru', 'assets/Ru.png');
	this.game.load.image('Rh', 'assets/Rh.png');
	this.game.load.image('Pd', 'assets/Pd.png');
	this.game.load.image('Ag', 'assets/Ag.png');
	this.game.load.image('Cd', 'assets/Cd.png');
		
	this.game.load.image('Hf', 'assets/Hf.png');
	this.game.load.image('Ta', 'assets/Ta.png');
	this.game.load.image('W', 'assets/W.png');
	this.game.load.image('Re', 'assets/Re.png');
	this.game.load.image('Os', 'assets/Os.png');
	this.game.load.image('Ir', 'assets/Ir.png');
	this.game.load.image('Pt', 'assets/Pt.png');
	this.game.load.image('Au', 'assets/Au.png');
	this.game.load.image('Hg', 'assets/Hg.png');
		
	this.game.load.image('Rf', 'assets/Rf.png');
	this.game.load.image('Db', 'assets/Db.png');
	this.game.load.image('Sg', 'assets/Sg.png');
	this.game.load.image('Bh', 'assets/Bh.png');
	this.game.load.image('Hs', 'assets/Hs.png');
	this.game.load.image('Mt', 'assets/Mt.png');
	this.game.load.image('Ds', 'assets/Ds.png');
	this.game.load.image('Rg', 'assets/Rg.png');
	this.game.load.image('Cn', 'assets/Cn.png');
		
	this.game.load.image('B', 'assets/B.png');
	this.game.load.image('Si', 'assets/Si.png');
	this.game.load.image('Ge', 'assets/Ge.png');
	this.game.load.image('As', 'assets/As.png');
	this.game.load.image('Sb', 'assets/Sb.png');
	this.game.load.image('Te', 'assets/Te.png');
	this.game.load.image('Po', 'assets/Po.png');
		
	this.game.load.image('La', 'assets/La.png');
	this.game.load.image('Ce', 'assets/Ce.png');
	this.game.load.image('Pr', 'assets/Pr.png');
	this.game.load.image('Nd', 'assets/Nd.png');
	this.game.load.image('Pm', 'assets/Pm.png');
	this.game.load.image('Sm', 'assets/Sm.png');
	this.game.load.image('Eu', 'assets/Eu.png');
	this.game.load.image('Gd', 'assets/Gd.png');
	this.game.load.image('Tb', 'assets/Tb.png');
	this.game.load.image('Dy', 'assets/Dy.png');
	this.game.load.image('Ho', 'assets/Ho.png');
	this.game.load.image('Er', 'assets/Er.png');
	this.game.load.image('Tm', 'assets/Tm.png');
	this.game.load.image('Yb', 'assets/Yb.png');
	this.game.load.image('Lu', 'assets/Lu.png');
		
	this.game.load.image('Ac', 'assets/Ac.png');
	this.game.load.image('Th', 'assets/Th.png');
	this.game.load.image('Pa', 'assets/Pa.png');
	this.game.load.image('U', 'assets/U.png');
	this.game.load.image('Np', 'assets/Np.png');
	this.game.load.image('Pu', 'assets/Pu.png');
	this.game.load.image('Am', 'assets/Am.png');
	this.game.load.image('Cm', 'assets/Cm.png');
	this.game.load.image('Bk', 'assets/Bk.png');
	this.game.load.image('Cf', 'assets/Cf.png');
	this.game.load.image('Es', 'assets/Es.png');
	this.game.load.image('Fm', 'assets/Fm.png');
	this.game.load.image('Md', 'assets/Md.png');
	this.game.load.image('No', 'assets/No.png');
	this.game.load.image('Lr', 'assets/Lr.png');
},
	
create:function(){
	this.state.start('Level1');
}	
	
	
};