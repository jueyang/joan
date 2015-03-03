var joan = {};

$(function(){

joan.windowWidth = $(window).width();

joan.windowThreshold = 768;

joan.delayShow = function(el,timeout){
	setTimeout(function(){
		el.css('display','block');
	},timeout*1000)
};

joan.noLoad = function(videoEl){
	videoEl.attr('src','');
};

joan.init = function(){
	if (joan.windowWidth > joan.windowThreshold){
	  
	  var delays = $('.delay'),
	  	  wait;

	  delays.each(function(i,el){

	    wait = $(el).data().wait;
	    joan.delayShow($(el),wait);

	  });

	} else {
	  var video = $('#video');
	  joan.noLoad(video);
	}
};

joan.init();

});

