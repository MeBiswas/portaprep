/*====================================
	Loader JS
======================================*/ 
$(document).ready(function() {
	$('.loader').hide();
})
/*====================================
	Sticky Header JS
======================================*/ 
jQuery(window).on('scroll', function() {
	if ($(this).scrollTop() > 100) {
		$('.header').addClass("sticky");
	} else {
		$('.header').removeClass("sticky");
	}
});
/*====================================
	To Subscription Pack Page JS
======================================*/
$(document).ready(function(){
	$('#to-sbscrptn-pg').on('click',function(){
		window.location.href='subscriptionPacks.html';
	});
});
/*====================================
	To Dashboard JS
======================================*/
$(document).ready(function(){
	$('#to-dashbrd').on('click',function(){
		window.location.href='dashboard.html';
	});
});
/*====================================
	Dashboard header Page JS
======================================*/
$(window).on("scroll load" , function() {
	if ($(this).scrollTop() > 100){  
		$('.dash-head').addClass("fixed_hedr");
	}
	else {
		$('.dash-head').removeClass("fixed_hedr");
	}
});
/*====================================
	To Discussion Recent Chat JS
======================================*/
$(document).ready(function(){
	$('#to-discsn-rcnt-cht').on('click',function(){
		window.location.href='discussion-recent-chat.html';
	});
});
/*====================================
	To Discussion trending Topic JS
======================================*/
$(document).ready(function(){
	$('.to-discsn-trndng-tpc').on('click',function(){
		window.location.href='discussion-trending-topic.html';
	});
});
/*====================================
	To Discussion Trending Post JS
======================================*/
$(document).ready(function(){
	$('#to-discsn-trndg-pst').on('click',function(){
		window.location.href='discussion-trending-post.html';
	});
});
/*====================================
	To Change Post Image JS
======================================*/
$('#imgOutput').hide();
var loadFile = function(event) {
    var output = document.getElementById('imgOutput');
    output.src = URL.createObjectURL(event.target.files[0]);
    $('#imgOutput').show();
    $('#prevImg').hide();
}
/*====================================
	To Activate Exams Cards JS
======================================*/
// $(document).ready(function() {
// 	$('.exm-card').on('click', function() {
// 		$(this).addClass('actv');
// 		$(this).parent().siblings().children().removeClass('actv');
// 	});
// })

$(document).ready(function() {
	$('.new-exm-content').hide();
	$('.rec-exm-content').hide();
	$('.new-exm').on('click', function() {
		$(this).addClass('actv');
		$(this).parent().siblings().children().removeClass('actv');
		$('.new-exm-content').show();
		$('.rec-exm-content').hide();
	});
	$('.rec-exm').on('click', function() {
		$(this).addClass('actv');
		$(this).parent().siblings().children().removeClass('actv');
		$('.rec-exm-content').show();
		$('.new-exm-content').hide();
	});
});