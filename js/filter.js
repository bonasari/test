/*$(document).ready(function(){
    $('.category_item').click(function(){
        var category = $(this).attr('id');
        
        if(category == 'all'){
            $('.produk_item');
            setTimeout(function(){
                $('.produk_item').removeClass('hide');
            }, 500);
        } else{
            $('.produk_item').addClass('hide');
            setTimeout(function(){
                $('.'+ category).removeClass('hide');
            }, 300);
        }
    });
});*/


/*$(document).ready(function(){
	$('.produk_item').addClass('hide');
	setTimeout(function(){
        $('.bulb').removeClass('hide');
    }, 300);

    $('.category_item').click(function(){
        var category = $(this).attr('id');
        
            $('.produk_item').addClass('hide');
            setTimeout(function(){
                $('.'+ category).removeClass('hide');
            }, 300);
       
    });
});*/

$(document).ready(function(){    
	$('.produk_item').hide();
        $('.bulb').show();
   	$("#bulb").css('background-color', '#76e895');
	

    $('.category_item').click(function(){
        var category = $(this).attr('id');
        $('.category_item').css('background-color', '#f2f2f2');
        
            $('.produk_item').hide();
                $('.'+ category).show();
            $("#"+ category).css('background-color', '#76e895');
               
       
    });
});