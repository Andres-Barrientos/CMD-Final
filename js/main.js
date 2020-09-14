$(document).ready(function(){
    $('ul.portafolioJq li a:first').addClass('activeGalleria');
    $('ul.portafolioJq li a:first').removeClass('');
	$('.seccion').hide();
	$('div#galeria1').show();

	$('ul.portafolioJq li a').click(function(){
		$('ul.portafolioJq li a').removeClass('activeGalleria');
		$(this).addClass('activeGalleria');
		$('.seccion').hide();


		var activePor = $(this).attr('href');

		$(activePor).show();
		return false;
	});

});
