
var juego = new Phaser.Game(1055 ,430, Phaser.CANVAS, "mapaInt" );

//Se declaran las variables
var fondo; 					 //Fondo de mapa
var Kder, Kizq, Karb, Kabj;  //Flechas de teclado
var Bder, Bizq, Barb, Babj; //Flechas de Pantalla
var Ider = false; 	 		 //Flechas de Control
var Iizq = false;
var Iarb = false;
var Iabj = false;
var kalinin, moscu, rostov, sochi, samara, saransk, katerin, ptburgo, kazan, volgo, novgord;  						// Iconos de Ciudades
var kalininEs, moscuEs, rostovEs, sochiEs, samaraEs, saranskEs, katerinEs, ptburgoEs, kazanEs, volgoEs, novgordEs;	// Estadios de Ciudades
var partido;

var jugar = {
	preload: function() {  
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		
		//Carga el mapa de Fondo
		juego.load.image("mapaImg", "ImgPagina/MapaVacio.png");
		
		//Carga los iconos de las ciudades
		juego.load.spritesheet("Kalinin", "ImgPagina/Kaliningrado.png", 160, 88, 2);
		juego.load.spritesheet("Moscu"	, "ImgPagina/Moscu.png", 160, 88, 2);
		juego.load.spritesheet("Sochi"	, "ImgPagina/Sochi.png", 160, 88, 2);
		juego.load.spritesheet("Rostov"	, "ImgPagina/Rostov.png", 160, 88, 2);
		juego.load.spritesheet("Samara"	, "ImgPagina/Samara.png", 160, 88, 2);
		juego.load.spritesheet("Saransk", "ImgPagina/Saransk.png", 160, 88, 2);
		juego.load.spritesheet("Kazan"	, "ImgPagina/Kazan.png", 160, 88, 2);
		juego.load.spritesheet("Volgo"	, "ImgPagina/Volgogrado.png", 160, 88, 2);
		juego.load.spritesheet("Ptburgo", "ImgPagina/SanPeteburgo.png", 160, 88, 2);
		juego.load.spritesheet("Katerin", "ImgPagina/Ekaterimburgo.png", 160, 88, 2);
		juego.load.spritesheet("Novgord", "ImgPagina/Novgorod.png", 160, 88, 2);
		
		//Carga los estadios de las ciudades
		juego.load.image("KaliningradoEstadio", "ImgPagina/KaliningradoEstadio.png");
		juego.load.image("MoscuEstadio", "ImgPagina/MoscuEstadio.png");
		juego.load.image("SochiEstadio", "ImgPagina/SochiEstadio.png");
		juego.load.image("RostovEstadio", "ImgPagina/RostovEstadio.png");
		juego.load.image("SamaraEstadio", "ImgPagina/SamaraEstadio.png");
		juego.load.image("SaranskEstadio", "ImgPagina/SaranskEstadio.png");
		juego.load.image("KazanEstadio", "ImgPagina/KazanEstadio.png");
		juego.load.image("VolgogradoEstadio", "ImgPagina/VolgogradoEstadio.png");
		juego.load.image("PetesburgoEstadio", "ImgPagina/PetesburgoEstadio.png");
		juego.load.image("EkaterinEstadio", "ImgPagina/EkaterinEstadio.png");
		juego.load.image("NovgorodEstadio", "ImgPagina/NovgorodEstadio.png");
		
		//Carga los partidos de cada estadio
		juego.load.spritesheet("Partidos", "ImgPagina/Partidos.png", 250, 290, 11);
		
		//Carga la imagen de los botones
		juego.load.image("FlechaIzq", "ImgPagina/Arrow_Left.png");
		juego.load.image("FlechaDer", "ImgPagina/Arrow_Right.png");
		juego.load.image("FlechaArb", "ImgPagina/Arrow_Up.png");
		juego.load.image("FlechaAbj", "ImgPagina/Arrow_Down.png");
	},
	
	create: function() { 
		//Crea el fondo
		fondo = juego.add.tileSprite(0, 0, 1080, 450, "mapaImg");
		
		// Crea cada icono de ciudad cada uno con:
			//Imagen del Icono
			//Animacion de seleccion del icono
			//Accion cuando el mouse pasa sobre el icono
			//Accion cuando se hace click sobre el icono		
		kalinin = juego.add.sprite(58, 275, "Kalinin");
		kalinin.anchor.setTo(0.01, 0.01);
		kalinin.animations.add("seleccion", [0, 1], 90, false);
		kalinin.inputEnabled = true;
		kalinin.events.onInputOver.add(this.kalSel, this);
		kalinin.events.onInputOut.add(this.kalNoSel, this);
		kalinin.events.onInputDown.add(this.kalDown, this);
		kalinin.events.onInputUp.add(this.kalUp, this);
		
		moscu = juego.add.sprite(500 ,300, "Moscu");
		moscu.animations.add("seleccion", [0, 1], 90, false);
		moscu.anchor.setTo(0.01, 0.01);
		moscu.inputEnabled = true;
		moscu.events.onInputOver.add(this.mosSel, this);
		moscu.events.onInputOut.add(this.mosNoSel, this);
		moscu.events.onInputDown.add(this.mosDown, this);
		moscu.events.onInputUp.add(this.mosUp, this);
		
		sochi = juego.add.sprite(550, 810, "Sochi");
		sochi.animations.add("seleccion", [0, 1], 90, false);
		sochi.anchor.setTo(0.01, 0.01);
		sochi.inputEnabled = true;
		sochi.events.onInputOver.add(this.socSel, this);
		sochi.events.onInputOut.add(this.socNoSel, this);
		sochi.events.onInputDown.add(this.socDown, this);
		sochi.events.onInputUp.add(this.socUp, this);
		
		rostov = juego.add.sprite(565, 680, "Rostov");
		rostov.animations.add("seleccion", [0, 1], 90, false);
		rostov.anchor.setTo(0.01, 0.01);
		rostov.inputEnabled = true;
		rostov.events.onInputOver.add(this.rosSel, this);
		rostov.events.onInputOut.add(this.rosNoSel, this);
		rostov.events.onInputDown.add(this.rosDown, this);
		rostov.events.onInputUp.add(this.rosUp, this);
		
		novgord = juego.add.sprite(695, 270, "Novgord");
		novgord.animations.add("seleccion", [0, 1], 90, false);
		novgord.anchor.setTo(0.01, 0.01);
		novgord.inputEnabled = true;
		novgord.events.onInputOver.add(this.novSel, this);
		novgord.events.onInputOut.add(this.novNoSel, this);
		novgord.events.onInputDown.add(this.novDown, this);
		novgord.events.onInputUp.add(this.novUp, this);
		
		samara = juego.add.sprite(880, 400, "Samara");
		samara.animations.add("seleccion", [0, 1], 90, false);
		samara.anchor.setTo(0.01, 0.01);
		samara.inputEnabled = true;
		samara.events.onInputOver.add(this.samSel, this);
		samara.events.onInputOut.add(this.samNoSel, this);
		samara.events.onInputDown.add(this.samDown, this);
		samara.events.onInputUp.add(this.samUp, this);
		
		saransk = juego.add.sprite(725, 375, "Saransk");
		saransk.animations.add("seleccion", [0, 1], 90, false);
		saransk.anchor.setTo(0.01, 0.01);
		saransk.inputEnabled = true;
		saransk.events.onInputOver.add(this.sarSel, this);
		saransk.events.onInputOut.add(this.sarNoSel, this);
		saransk.events.onInputDown.add(this.sarDown, this);
		saransk.events.onInputUp.add(this.sarUp, this);
		
		katerin = juego.add.sprite(1120, 180, "Katerin");
		katerin.animations.add("seleccion", [0, 1], 90, false);
		katerin.anchor.setTo(0.01, 0.01);
		katerin.inputEnabled = true;
		katerin.events.onInputOver.add(this.ektSel, this);
		katerin.events.onInputOut.add(this.ektNoSel, this);
		katerin.events.onInputDown.add(this.ektDown, this);
		katerin.events.onInputUp.add(this.ektUp, this);
		
		ptburgo = juego.add.sprite(350, 100, "Ptburgo");
		ptburgo.animations.add("seleccion", [0, 1], 90, false);
		ptburgo.anchor.setTo(0.01, 0.01);
		ptburgo.inputEnabled = true;
		ptburgo.events.onInputOver.add(this.ptbSel, this);
		ptburgo.events.onInputOut.add(this.ptbNoSel, this);
		ptburgo.events.onInputDown.add(this.ptbDown, this);
		ptburgo.events.onInputUp.add(this.ptbUp, this);
		
		volgo = juego.add.sprite(700, 600, "Volgo");
		volgo.animations.add("seleccion", [0, 1], 90, false);
		volgo.anchor.setTo(0.01, 0.01);
		volgo.inputEnabled = true;
		volgo.events.onInputOver.add(this.volSel, this);
		volgo.events.onInputOut.add(this.volNoSel, this);
		volgo.events.onInputDown.add(this.volDown, this);
		volgo.events.onInputUp.add(this.volUp, this);
		
		kazan = juego.add.sprite(820, 270, "Kazan");
		kazan.animations.add("seleccion", [0, 1], 90, false);
		kazan.anchor.setTo(0.01, 0.01);
		kazan.inputEnabled = true;
		kazan.events.onInputOver.add(this.kazSel, this);
		kazan.events.onInputOut.add(this.kazNoSel, this);
		kazan.events.onInputDown.add(this.kazDown, this);
		kazan.events.onInputUp.add(this.kazUp, this);
		
		juego.physics.startSystem(Phaser.Physics.ARCADE);
		
		// Se genera el evento cuando las flechas del teclado son presionadas
		Kder = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		Kizq = juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		Karb = juego.input.keyboard.addKey(Phaser.Keyboard.UP);
		Kabj = juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);
		
		// Se generan las flechas de la pantalla cada una con:
			// Imagen, posicion
			// Aplha
			// Eventos al ser presionadas
		Bder = juego.add.sprite(975 ,180, "FlechaDer");
		Bder.alpha = 0.7;
		Bder.inputEnabled = true;
		Bder.events.onInputOver.add(function(){Ider=true;});
		Bder.events.onInputOut.add(function(){Ider=false;});
		Bizq = juego.add.sprite(0 ,180, "FlechaIzq");
		Bizq.alpha = 0.7;
		Bizq.inputEnabled = true;
		Bizq.events.onInputOver.add(function(){Iizq=true;});
		Bizq.events.onInputOut.add(function(){Iizq=false;});
		Babj = juego.add.sprite(500 ,350, "FlechaAbj");
		Babj.alpha = 0.7;
		Babj.inputEnabled = true;
		Babj.events.onInputOver.add(function(){Iabj=true;});
		Babj.events.onInputOut.add(function(){Iabj=false;});
		Barb = juego.add.sprite(500 ,0, "FlechaArb");
		Barb.alpha = 0.7;
		Barb.inputEnabled = true;
		Barb.events.onInputOver.add(function(){Iarb=true;});
		Barb.events.onInputOut.add(function(){Iarb=false;});
	},
	
	update: function(){ 
		//Mueve el mapa y todos los iconos a la derecha
		if((Kder.isDown || Ider) && fondo.tilePosition.x > -243){
			fondo.tilePosition.x -= 3;
			kalinin.position.x -= 3;
			moscu.position.x -= 3;
			ptburgo.position.x -= 3;
			sochi.position.x -= 3;
			rostov.position.x -= 3;
			volgo.position.x -= 3;
			kazan.position.x -= 3;
			samara.position.x -= 3;
			saransk.position.x -= 3;
			katerin.position.x -= 3;
			novgord.position.x -= 3;
			Bder.alpha = 1;
		}else{
			Bder.alpha = 0.7;
		}	
		//Mueve el mapa y todos los iconos a la izquierda
		if((Kizq.isDown || Iizq) && fondo.tilePosition.x < 0){				
			fondo.tilePosition.x += 3;
			kalinin.position.x += 3;
			moscu.position.x += 3;
			ptburgo.position.x += 3;
			sochi.position.x += 3;
			rostov.position.x += 3;
			volgo.position.x += 3;
			kazan.position.x += 3;
			samara.position.x += 3;
			saransk.position.x += 3;
			katerin.position.x += 3;
			novgord.position.x += 3;
			Bizq.alpha = 1;
		}else{
			Bizq.alpha = 0.7;
		}	
		//Mueve el mapa y todos los iconos abajo
		if((Karb.isDown || Iarb) && fondo.tilePosition.y < 0){
			fondo.tilePosition.y += 3;
			kalinin.position.y += 3;
			moscu.position.y += 3;
			ptburgo.position.y += 3;
			sochi.position.y += 3;
			rostov.position.y += 3;
			volgo.position.y += 3;
			kazan.position.y += 3;
			samara.position.y += 3;
			saransk.position.y += 3;
			katerin.position.y += 3;
			novgord.position.y += 3;
			Barb.alpha = 1;
		}else{
			Barb.alpha = 0.7;
		}	
		//Mueve el mapa y todos los iconos arriba
		if((Kabj.isDown || Iabj) && fondo.tilePosition.y > -549){				
			fondo.tilePosition.y -= 3;
			kalinin.position.y -= 3;
			moscu.position.y -= 3;
			ptburgo.position.y -= 3;
			sochi.position.y -= 3;
			rostov.position.y -= 3;
			volgo.position.y -= 3;
			kazan.position.y -= 3;
			samara.position.y -= 3;
			saransk.position.y -= 3;
			katerin.position.y -= 3;
			novgord.position.y -= 3;
			Babj.alpha = 1;
		}else{
			Babj.alpha = 0.7;
		}	
	},	
	
	//Cada ciudad tiene una funcion de accion para cuando:
		// El mouse pasa sobre el icono (Sel)
		// Cuando sale del icono
		// Cuando se le da click al icono
		// Cuando no se esta dando click al icono
	kalSel: function(){
		kalinin.animations.play("seleccion");
		kalininEs = juego.add.tileSprite(0, 0, 200, 430, "KaliningradoEstadio");
	},
	kalNoSel: function(){
		kalinin.frame = 0;
		kalininEs.kill(); 
	},
	kalDown: function(){
		partido = juego.add.tileSprite(400, 70, 250, 290, "Partidos");
		partido.frame = 0;
	},
	kalUp: function(){
		partido.kill();
	},
	//-----------------------------
	mosSel: function(){
		moscu.animations.play("seleccion");
		MoscuEs = juego.add.tileSprite(0, 0, 200, 430, "MoscuEstadio");
	},
	mosNoSel: function(){
		moscu.frame = 0;
		MoscuEs.kill();
	},
	mosDown: function(){
		partido = juego.add.tileSprite(400, 70, 250, 290, "Partidos");
		partido.frame = 2;	
	},
	mosUp: function(){
		partido.kill();
	},
	//-----------------------------
	socSel: function(){
		sochi.animations.play("seleccion");
		sochiEs = juego.add.tileSprite(0, 0, 200, 430, "SochiEstadio");
	},
	socNoSel: function(){
		sochi.frame = 0;
		sochiEs.kill();
	},
	socDown: function(){
		partido = juego.add.tileSprite(400, 70, 250, 290, "Partidos");
		partido.frame = 3;
	},
	socUp: function(){
		partido.kill();
	},
	//-----------------------------
	rosSel: function(){
		rostov.animations.play("seleccion");
		rostovEs = juego.add.tileSprite(0, 0, 200, 430, "RostovEstadio");
	},
	rosNoSel: function(){
		rostov.frame = 0;
		rostovEs.kill();
	},
	rosDown: function(){
		partido = juego.add.tileSprite(400, 70, 250, 290, "Partidos");
		partido.frame = 4;		
	},
	rosUp: function(){
		partido.kill();
	},	
	//-----------------------------
	novSel: function(){
		novgord.animations.play("seleccion");
		novgordEs = juego.add.tileSprite(0, 0, 200, 430, "NovgorodEstadio");
	},
	novNoSel: function(){
		novgord.frame = 0;
		novgordEs.kill();
	},
	novDown: function(){
		partido = juego.add.tileSprite(400, 70, 250, 290, "Partidos");
		partido.frame = 5;		
	},
	novUp: function(){
		partido.kill();
	},	
	//-----------------------------
	samSel: function(){
		samara.animations.play("seleccion");
		samaraEs = juego.add.tileSprite(0, 0, 200, 430, "SamaraEstadio");
	},
	samNoSel: function(){
		samara.frame = 0;
		samaraEs.kill();
	},
	samDown: function(){
		partido = juego.add.tileSprite(400, 70, 250, 290, "Partidos");
		partido.frame = 6;		
	},
	samUp: function(){
		partido.kill();
	},
	//-----------------------------
	sarSel: function(){
		saransk.animations.play("seleccion");
		saranskEs = juego.add.tileSprite(0, 0, 200, 430, "SaranskEstadio");
	},
	sarNoSel: function(){
		saransk.frame = 0;
		saranskEs.kill();
	},
	sarDown: function(){
		partido = juego.add.tileSprite(400, 70, 250, 290, "Partidos");
		partido.frame = 7;		
	},
	sarUp: function(){
		partido.kill();
	},	
	//-----------------------------
	ektSel: function(){
		katerin.animations.play("seleccion");
		katerinEs = juego.add.tileSprite(0, 0, 200, 430, "EkaterinEstadio");
	},
	ektNoSel: function(){
		katerin.frame = 0;
		katerinEs.kill();
	},
	ektDown: function(){
		partido = juego.add.tileSprite(400, 70, 250, 290, "Partidos");
		partido.frame = 8;		
	},
	ektUp: function(){
		partido.kill();
	},	
	//-----------------------------
	ptbSel: function(){
		ptburgo.animations.play("seleccion");
		ptburgoEs = juego.add.tileSprite(0, 0, 200, 430, "PetesburgoEstadio");
	},
	ptbNoSel: function(){
		ptburgo.frame = 0;
		ptburgoEs.kill();
	},
	ptbDown: function(){
		partido = juego.add.tileSprite(400, 70, 250, 290, "Partidos");
		partido.frame = 1;		
	},
	ptbUp: function(){
		partido.kill();
	},
	//-----------------------------
	kazSel: function(){
		kazan.animations.play("seleccion");
		kazanEs = juego.add.tileSprite(0, 0, 200, 430, "KazanEstadio");
	},
	kazNoSel: function(){
		kazan.frame = 0;
		kazanEs.kill();
	},
	kazDown: function(){
		partido = juego.add.tileSprite(400, 70, 250, 290, "Partidos");
		partido.frame = 10;		
	},
	kazUp: function(){
		partido.kill();
	},	
	//-----------------------------
	volSel: function(){
		volgo.animations.play("seleccion");
		volgoEs = juego.add.tileSprite(0, 0, 200, 430, "VolgogradoEstadio");
	},
	volNoSel: function(){
		volgo.frame = 0;
		volgoEs.kill();
	},
	volDown: function(){
		partido = juego.add.tileSprite(400, 70, 250, 290, "Partidos");
		partido.frame = 9;		
	},
	volUp: function(){
		partido.kill();
	},
}

juego.state.add('activo', jugar);
juego.state.start('activo');

