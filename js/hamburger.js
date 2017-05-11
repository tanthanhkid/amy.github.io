$(function(){
    
    var timeAni = 700;
    
    //Open Menu
    $('#hamburger').click(function(){
    $('nav').css('min-height', $(window).innerHeight());
    $('nav').css('opacity','1');
    $('nav').css('left','0');
    $('#content').css('width', $(window).innerWidth() );
    $('#content').css('background-color', '#fff' );
	
    $('#container').css('overflow-x', 'hidden' );   
    $('#container').css('height', $(window).innerHeight() );    
	$('#container').animate({marginLeft: '40%'},timeAni);
	
    $('#contentLayer').animate({width: '60%'},timeAni);
    
        
    $('nav').css('position','fixed'); 
    //$('nav').animate({width:'40%'},timeAni);
    $('#contentLayer').css('height', $(window).innerHeight());    
    $('#contentLayer').css('visibility', 'visible');
    });
    
    //Close Menu    
    
    $('#contentLayer').click(function(){    
        $('#container').animate({marginLeft: '0%'},timeAni);
        $('#contentLayer').animate({width: '100%'},timeAni); 
		//$('nav').animate({width:'0%'},timeAni);
     	setTimeout(function(){    
		$('#contentLayer').css('visibility', 'hidden');
		 },timeAni);        
    });
});