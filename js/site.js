var joan = {};

$(function(){

joan.windowWidth = $(window).width();

joan.windowThreshold = 768;

joan.delayShow = function(el,timeout){
	setTimeout(function(){
		el.show();
	},timeout*1000)
};

joan.noload = function(videoEl){
	videoEl.attr('src','');
}

joan.init = function(){
	if (joan.windowWidth > joan.windowThreshold){
	  
	  var delays = $('.delay'),
	  	  wait;

	  delays.each(function(i,el){

	    wait = $(el).data().wait;
	    $(el).hide();
	    joan.delayShow($(el),wait);

	  });

	} else {
	  var video = $('#video');
	  joan.noload(video);
	}
};

joan.init();

});

