// responsive website project to balonismoboituva.com.br
// https://github.com/fernandoted/balonismoboituva
// author: Fernando Ted
// 09-08-16


// MENU OFFCANVAS - MOBILE
function openOffcanvas($element){
	$element.addClass("open-mobile-menu-wrap");
}
/* function to remove class */
function hideOffcanvas($element){
	$element.removeClass("open-mobile-menu-wrap");
}

function slideMenuicon($element){
	$element.addClass("slide-menu-icon");
}

$('.open-off').on('click', function(){
	openOffcanvas($('html'));
});

$('.close-off').on('click', function(){
	hideOffcanvas($('html'));
});

/* slide to show side-bar menu */
$('html,body').on('swipeleft', function(){
	openOffcanvas($('html'));
});
/* slide to hide side-bar menu */
$('html,body').on('swiperight', function(){
	hideOffcanvas($('html'));
});
/* hide side-bar by clicking outside */
$('html,body').on('click', function(e){
	if(this === e.target)
	hideOffcanvas($('html'))
});

