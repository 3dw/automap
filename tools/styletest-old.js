
var user = '' + new Date();
//	var fire = new Firebase('https://style-tester.firebaseio.com/' + user);

var once = 0;

var bg = "#D0BAA2";

var dataF = [
	{t: '回想一下，你是如何學習新事物的，試著避開選擇像肢體類的技術學習，如騎腳踏車。你比較偏好從：（可複選）', 
	c:['文字解說，如手冊或是教科書。','觀看現場的示範', '圖片或是圖表－視覺上的提示','別人解釋或是問問題'], 
	r:['r','k','v','a']},

	{t: '你想學習一個新的程式語言、電腦技術或是電玩，你會：（可複選）',
	c: ['使用滑鼠或是鍵盤，先做再說' ,'閱讀相關文件，如說明書、教科書','根據書中的圖片指示學習',' 跟其他知道這項程式的人討論'], 
	r:['k','r','v','a']},


	{t: '一個旅行團想認識在你的區域內的公園或是野生動物保護區，你會：（可複選）',
	c: ['帶他們到公園或是野生動物保護區並且和他們一起在裏面逛','展示網路上的圖片、相片或是攝影集給他們看','給他們關於這個公園或是保護區的介紹小冊子','跟他們聊或是安排一個關於這個公園或是保護區的解說活動'], 
	r:['k','v','r','a']},

	{t: '我喜歡的網站，最好要有：（可複選）',
	c:['我可以按、可以移動與嘗試的物件','有聲音介紹，如我可以聽到音樂、廣播或是訪談','有趣的文字介紹、條目與解釋','有趣的設計與視覺效果'], 
	r:['k','a','r','v']},

	{t: '你想為你的家人煮一頓特別的好料吃，你會：（可複選）',
	c: ['詢問好朋友他們的建議','直接就煮就是了，不用任何的指導','從食譜中的圖片得到靈感', '去讀食譜，閱讀材料與步驟，找到你認為最好的。'],
	r:['a','k','v','r']},

	{t: '除了價格之外，當你想買一本非小說類的書，什麼因素影響你的決定？（可複選）',
	c:['這本書的封面與外觀','迅速的讀過它','有朋友談論它並推薦它','這本書有現實生活的故事、經驗與例子'],
	r:['v','r','a','k']},

	{t: '當你在餐廳或是咖啡館點菜時，你會：（可複選）',
	c: ['從菜單上的文字描述選擇','或是詢問朋友他們推薦的菜色','點你之前點過的','看看別人吃的或是菜單上的圖片'],
	r:['r','a','k','v']},	

	{t: '你想告訴別人如何到機場、市中心或是火車站，你會：（可複選）',
	c: ['和他一起去','寫下如何去的指示','告訴他如何走','畫地圖或是給他地圖'],
	r:['k','r','a','v']},

	{t: '你經由書、光碟或是網站來學如何用你的新數位相機拍照，你會喜歡：（可複選）',
	c: ['明確的書面指示，並列出如何拍照的重點','展示許多好的與不好的照片的例子並且如何改善它們的方法。','相機的結構圖並且標出每個部份的功能','一個可以讓人問問題而且討論相機的功能的機會，如網站上的討論區'],
	r:['r','k','v','a']},

	{t: '你想買一台新的數位相機或是手機，除了價格外，什麼因素最能影響你的決定？（可複選）',
	c: ['店員告訴我，介紹給我它的特色','閱讀所有關於產品特色的文件','動手試驗','外觀看起來是否有型？是否順眼？'],
	r:['a','r','k','v']},

	{t: '你正為一個團體策畫節慶活動，你會如何展示你的構想，並收集他們對這項活動的想法？（可複選）',
	c: ['打電話、寫信或是寄電子郵件給他們','向他們描述這個活動最重要的部份','給他們一份印出來的行程表','使用地圖或是網站來展示'],
	r:['k','a','r','v']},

	{t: '你將要在一個重要場合發表演說，你會如何準備？（可複選）',
	c: ['寫下幾個關鍵字，並反覆地練習你的演說','收集許多例子與故事，讓這個演說變得實際有用','做圖表、收集圖片來解釋事物','寫下你的講稿，並且反覆的閱讀它'],
	r:['a','k','v','r']},

	{t: '膝蓋有問題，你喜歡醫生怎麼做？（可複選）',
	c: ['使用一個塑膠的膝蓋模型，向你展示哪邊出了問題','用一個圖來解釋','仔細的描述問題在那裏','給你一個網站，或是介紹，讓你能夠閱讀'],
	r:['k','v','a','r']},

	{t: '你喜歡老師或是演講者使用：（可複選）',
	c: ['模型、示範或是實際操作的部份','問與答、對談、小組討論或是邀請講者','圖片、圖說與圖表','手冊、書本、文字重點'],
	r:['k','a','v','r']},

	{t: '你不確定一個字要拼成 dependent 還是 dependant時，你會：（可複選）',
	c: ['把兩個字都寫在紙上，選一個','在腦中「看」這個字，並且從他們看起來的外觀來選','查字典','想想這兩個字的發音，並且選擇一個'],
	r:['k','v','r','a']},

	{t: '你完成了某項測試，你會喜歡那種方式呈現結果？（可複選）',
	c: ['從你已經做過的試題中舉實例說明','使用詳細的文字說明來描述結果','測試者使用口頭方式來解說結果','使用圖表來展示你的成果'],
	r:['k','r','a','v']},
];

var dataS = {
	r: {v: 0, a:0, r:0, k: 0},
	s: {v: '👀視覺', a:'👂聽覺', r:'📖閱讀', k: '🙌操作'},
	l: [6,9],
	e: '正在試探自己的',
	f: '"🔥測驗結果：你是一名「"+finalTitles.join(\'+\')+"優勢」的學習者!!👏"',
	adv: {
		max:{'v' :'<p>你具有視覺學習的優勢。視覺優勢的人，通常擅於看圖表、做圖形的設計與資訊整理。<br/><br/>你的筆記本應該充滿你自己的圖鴨和圖象式筆記吧？太雜亂的顏色與空間，可能會打亂你的思考、降低學習效率，最好在一個視覺單純的環境下學習。</p>',

				'a' :'<p>你具有聽覺、對話學習的優勢。聽覺、對話優勢的人，通常也比較人際取向，喜歡在討論的過程中學習，喜歡與人合作，而不是每個人各做各的。</p><p>在一般的講述課堂，單向的聽講也是可以差強人意地學會新知，更喜歡合作討論的氣氛，以及有來有往的互動。如果不能發問就會不舒服。因此，有學習夥伴和可以提問的老師或討論區是很重要的。</p>',

				'r' :'<p>你具有閱讀學習的優勢。閱讀學習是少數完全不依賴真人互動的學習方式。對你而言，好的學習材料非常重要。如果能擅用圖書館和網路，你將能以自己的步調學到很多。</p><p>如果遇到不好的材料，可能會消耗你的心力，讓你事倍功半，因此，當初學一門領域時，若能找到視野又深又廣的人，請他推薦真正好的學習材料給你，會更有效率。</p>',

				'k' :'<p>你具有實作學習的優勢。實作優勢的人，通常都有驚人的創造潛力，只是在一般的單向講述課堂中，難以發揮。</p><p>你適合在家中弄一塊小工作區，動手拆裝各種裝置的小零件，實作出一些作品，把學到的知識製成模型。你也適合在實作課堂中，透過邊做邊學的方式學習新知。</p><p>紙跟筆對你是不夠用的，最好找到其他的學習工具，例如棋子、紙牌、方塊、模型、電腦程式等等。</p>'},

		min:{'v' :'你目前還不大擅長視覺學習。遇到圖象與圖表時，試著用你擅長的能力，例如聽覺、閱讀和實作，去分析它們吧！',
				'a' :'你目前還不大擅長聽覺與對話的學習。如果很多知識用聽的不易理解，試著靠閱讀、圖象與實作，來學會它吧！',

				'r' :'<p>你目前還不大擅長閱讀。如果很多知識用讀的不易理解，那麼試著把它們唸出來、或轉換成圖象、動作來理解吧！</p><p>大部份的自學知識都以閱讀為主，因此你可能需要一些擅長閱讀的學習夥伴，以及願意回答你問題的老師，才不會因為閱讀上的困難而被卡住。</p>',

				'k' :'你目前還不大擅長實作學習。試著把你學到的知識，拿來創作一些作品吧！'},	
	},
	icon: '👍', //🔱💫🌈💯
	it: '🐬何謂學習風格？', //🎨

	i: "<p>🔥現代的教育研究者發現，每個人擅長的學習方式都有不同。即使在同一個課室中，每個人去掌握和理解的方法也不一樣。這就是每個人的學習風格。🔥</p><p>學習風格有千百種以上，要細分有很多角度。本測試採取的是「👀視👂聽📖讀作🙌」(VARK)架構，特色是只要回答16個問題，就能讓您很快找出適合自己的有效學習方式。</p>",

	ow: '原文的問題出處與更多資訊，請至VARK介紹網站',
	g: "http://www.vark-learn.com/english/index.asp",
	num: 0,

};



var dataS1 = {
	r: {o:0, r:0, s:0, e:0, a:0},
	s: {o:'😱他律', r: '😈解放', s:'😡自我中心', e: '👷眼高手低', a: '😃自主成熟'},
	l: [2,4],
	e: '懵懵懂懂',
	f: '"🔥測驗結果：你目前處於「"+finalTitles.join(\'+\')+"」的狀態!!👏"',
	adv: {
		max:{
			o:'<p>你目前還在他律的狀態，雖然照著安排很安全，但是卻很少聆聽內心的聲音。</p><p>想想看，假如有一天別人都不替你安排、也不給你評價，你想要做什麼？你有什麼想望和長遠的目標？',
			r:'<p>在解放期中，你需要安全感和逐漸健康的生活節奏。你可以多休息多、多放鬆、多試探自己的興趣和方向，是要小心沈迷於沒有益處、純粹殺時間的逸樂。</p><p>如果有些事，當下似乎有趣，結束後心裡卻更空虛，那就要避免自己養成這種習慣。</p>',
			s:'<p>在自我中心的階段，你正在重新經驗自己的支配感。你是可以擁有的、你是可以拒絕的、你是可以要的。</p><p>這個階段你需要被人真正的同理，以及撞到外在的明確界限，才能建立正向的人我關係，避免過度的自我膨脹。</p>',
			e:'<p>在眼高手低期，你已經有自知自明，也有目標和方向了，只差能力和行動跟不上。你明白成功來自努力，但就是提不起勁來努力。</p><p>千里之行始於足下，一開始不要想一步登天，只要每天進步一點點就好。從基本功開始，積沙成塔、一步一腳步的持續創作與學習，就能一點一點克服目標和能力之間的落差。</p>',
			a:'<p>在自主成熟期，你已經建立了清楚的自律能力、有效的學習方法、良好的學習習慣。你需要的是持續創作與交流，認識其他精彩的人物，拓展視野、練習應變，只要能開展人際，避免閉車造車、孤芳自賞，相信你的未來一定會海闊天空。</p>',},

		min:{o:'',r:'',s:'',e:'',a:'',},	
	},
	icon: '🌰',  // 🐫🎩⛅🌳🌱🔮🎨
	it: '🌔何謂自主學習四階段？', //💭
	i: "<p>從😱他律到😃自主的過程，一般會經過😈解放散漫、😡自我中心、👷眼高手低和😃自主成熟這四個階段。</p><p>在😈解放散漫期需要安全感和逐漸健康的生活節奏、😡自我中心期需要外在明確界限、👷眼高手低期需要踏實的累積與持續創作。</p><p>這些都是需要成人介入引導與提點的，兒童與青少年，往往需要父母和成人的協助，才能順利走過自主四階段。⛅</p>",

	ow: '更多資訊，請至自主學習促進會網站',
	g: "http://www.alearn.org.tw/",
	num: 1,
};


// 主程式

// add Controller??
// 當好幾個View 搶同一個 .el -> body時。方法是：
	// 1. 取消listener
	// 2. 消失hide(), 進來用append(), 不用toggle()和fadeIn() xxx
	// 3. 把body.children先remove()掉


console.log("aaa");

var ListView = Backbone.View.extend({
		
 		el: $('body'),

	    events: {
//		      'click button#close' : 'hideIntro', 
//		      'click button#showResault': 'addResault', 
//		      'click button#go': 'goOut', 
	      'click input': 'countResault', 
//		      'click button#simp': 'changeSimp',
	    },

	    detach_event: function(e_name) {
	        delete this.events[e_name];
	        this.delegateEvents();
	    },

	    initialize: function(dataF, dataS, name){
	      _.bindAll(this, 'render', 'addItems', 'addItem', 'countResault', 'addResault' ,'makeAdvice', 'hideIntro', 'changeSimp'); // every function that uses 'this' as the current object should be in here



		  console.log("init");
	      this.d = dataF;
	      this.counter = 0; // total number of items added thus far
	      this.resault = dataS.r;
	      this.introTitle = dataS.it;
	      this.intro = dataS.i;
	      this.icon = dataS.icon;
	      this.show = dataS.s;
	      this.go = dataS.g;
	      this.adv = dataS.adv;
	      this.level0 = dataS.l[0];
	      this.level1 = dataS.l[1];
	      this.empty = dataS.e;
	      this.finalTitle = dataS.f;
	      this.advice = {max:[], min:[]};
	      this.name = name;
	      this.outWord = dataS.ow;
	      this.simp = false;
	      this.num = dataS.num;
	      this.render();
	    },

	    render: function(){ // 具現
   			console.log("render");

	    	$(this.el).append('<div class = "first item"><h1>'+this.introTitle+'</h1><p>'+this.intro+'</p><button id = "close" onclick = "'+this.name+'.hideIntro()" class = "ui big green button">開始測驗!!</botton>'
	    		+ '<button id = "simp" class = "ui big blue button">转成简体测验</button></div></p><p><br />');

	      	
	    },


		addItems: function(){
			for (var i = 0; i < this.d.length; i++) {
	      		this.addItem();
	      	};	

  	    	$(this.el).append("<button id='showResault' class = 'item ui big green button' onclick = '"+this.name+".addResault(); newsAuto20(\"學習風格自我測試\")'>看結果!!</button></p><p>");   	    	
  	    	$(this.el).children('.invis').toggle("slide");

	    },

	    addItem: function(){ // 加一個問題

	    	var item = "<h2>"+(this.counter+1)+'. '+this.icon+this.d[this.counter].t+"</h2><hr></hr>";

		    for (i = 0; i <  Object.keys(this.resault).length; i++) {
		    		item += "<input type = 'checkbox' class = " + this.d[this.counter].r[i] + " name = "+this.counter+">"+["A","B","C","D","E","F","G","H","I"][i]+this.d[this.counter].c[i]+"</input><br/>";
		    }

		    	$(this.el).append("<div class = 'invis item' >"+item+"</div><br /><br class = 'item'><br class = 'item' style = >");

		    this.counter++;
	    },

	    countResault: function() { // 統計結果

	    	for (var i = 0; i < Object.keys(this.resault).length; i++) {
	    		this.resault[Object.keys(this.resault)[i]] = $('input:checked').filter('.'+Object.keys(this.resault)[i]).filter(function() {return $(this).css("display")}).length;
	    	}
	    },

	    addResault: function() {

			$(this.el).children('.final').hide(); 

		//放bar
	    	for (var i = 0; i < Object.keys(this.resault).length; i++) {
	    		var tag = Object.keys(this.resault)[i];
	    		$(this.el).append("<div id='progressbar_"+tag+"'></div>");
			}    	
		    
	    	this.advice = {max:[], min:[]};
	    		
	    	for (var i = 0; i < Object.keys(this.resault).length; i++) {

		    		var tag = Object.keys(this.resault)[i];

			    	$("#progressbar_"+tag ).progressbar({ max: this.d.length , value: this.resault[tag] }).css({background: bg}) // 長條底色改這裡
			    			.children('.ui-progressbar-value').html( this.show[tag]+": "+this.resault[tag] ).css({display: "block"});  //  長條底色改這裡

			    	if (this.resault[tag] < this.level0 ) {
			    		$("#progressbar_"+tag ).progressbar().children('.ui-progressbar-value').css('background','#ccccff');// 弱風格色改這裡
			    		this.advice.min.push(tag);
			    	}				    	
			    	if (this.resault[tag] >= this.level0 && this.resault[tag] < this.level1) {
			    		$("#progressbar_"+tag ).progressbar().children('.ui-progressbar-value').css('background','#ffd8af');// 中風格色改這裡
			    	}
			    	if (this.resault[tag] >= this.level1) {
			    		$("#progressbar_"+tag ).progressbar().children('.ui-progressbar-value').css('background','#ccffff');// 強風格色改這裡
			    		this.advice.max.push({t: tag, n: this.resault[tag]});
			    	}

		//	    	fire.child(this.num+tag+this.show[tag]).set(this.resault[tag]); // 上傳
		    };   


	     	this.makeAdvice();

	     	$("html, body").animate({ scrollTop: $(document).height()-$(window).height() }, 1000);
    	
	    },

	    makeAdvice: function(){

	    	$(".final").hide();

	    	var advs = [];
	    	var finalTitles = [];
	    	var finalTitle = '';

	    	this.advice.max.sort(function(a,b){return b.n - a.n});

	    	for (var i = 0; i < this.advice.max.length; i++) {
	    		advs.push(this.adv.max[this.advice.max[i].t]); //mack advice max;
	    		finalTitles.push(this.show[this.advice.max[i].t]);
	    	};

	    	if (finalTitles.length == 0) finalTitles.push(this.empty);

	    	 finalTitle = '<h2>'+eval(this.finalTitle)+'</h2>'; // 視覺+操作優勢 

	    	for (var i = 0; i < this.advice.min.length; i++) {
	    		advs.push(this.adv.min[this.advice.min[i]]); //mack advice mim;
	    	};

	    	$(this.el).append("<div class = 'final item'>"+finalTitle+(advs.join('<br/><br/><br/>'))+"🎅</div>");

	    //	fire.child(this.num+this.introTitle).set(finalTitle); // 上傳結果


		    $(this.el).append("<button id = 'go' class = 'final ui big blue button' onclick = 'redirect(\""+this.go+"\")'>"+this.outWord+"</button>");

		    $(this.el).append("<button id = 'go' class = 'final ui big green button' onclick = 'restart(\""+this.name+"\")'>試試其他的測驗</button>");

		    
	    },


	    hideIntro: function(){
			$(this.el).children("br").hide();
			$(this.el).children().slideUp(1000);
			this.addItems();
	    },


	  });

var listView; 
var formNames; var formViews = [];

$(document).ready(function() {

	console.log("k")

	formNames = ["formViews[0]"];


	console.log("t")
	formViews.push(new ListView(dataF, dataS, formNames[0]));



	console.log("p")

//	formViews.push(new ListView(dataF1, dataS1, formNames[1]));

});

function redirect(url) {
	window.open(url);
};

function restart (noView){

	console.log('noView: '+noView);
	$('body').children().fadeOut(500);

	setTimeout(function() {
		$('body').children().remove();

		for (var i = 0; i < formNames.length; i++) {

			console.log('formNames[i]: '+formNames[i]);
			if (formNames[i] != noView) eval(formNames[i]+'.render()'); 
		};
	}, 500);		
}

